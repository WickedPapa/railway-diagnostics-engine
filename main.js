// Variabili Globali
let rawData = [];
let allColumns = [];
let gridApi = null;
let currentPresetId = 'base';

// Struttura Presets: { id : { name: string, columns: string[] } }
let presets = {
    'base': { name: 'Base (Tutte le colonne)', columns: [] }
};

// --- DOM Elements ---
const fileInput = document.getElementById('csvFileInput');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const presetSelect = document.getElementById('presetSelect');
const presetControlsGroup = document.getElementById('presetControlsGroup');

const btnClone = document.getElementById('btnClonePreset');
const btnEdit = document.getElementById('btnEditPreset');
const btnDelete = document.getElementById('btnDeletePreset');
const btnExport = document.getElementById('btnExportPresets');
const importInput = document.getElementById('importPresetInput');

const myGrid = document.getElementById('myGrid');
const emptyState = document.getElementById('emptyState');
const loadingOverlay = document.getElementById('loadingOverlay');

// Modal Elements
const modal = document.getElementById('presetModal');
const modalTitle = document.getElementById('modalTitle');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const btnSavePreset = document.getElementById('btnSavePreset');
const presetNameInput = document.getElementById('presetNameInput');
const columnSearchInput = document.getElementById('columnSearchInput');
const columnListContainer = document.getElementById('columnListContainer');
const selectAllCheckbox = document.getElementById('selectAllCheckbox');
const visibleColumnsCount = document.getElementById('visibleColumnsCount');

// Modal state
let modalMode = 'clone'; // 'clone' or 'edit'
let editingPresetId = null;


// --- Inizializzazione ---
document.addEventListener('DOMContentLoaded', () => {
    loadPresetsFromStorage();
    updatePresetDropdown();
    initEventListeners();
});

function initEventListeners() {
    fileInput.addEventListener('change', handleFileUpload);
    
    presetSelect.addEventListener('change', (e) => {
        currentPresetId = e.target.value;
        applyPresetToGrid();
    });

    btnClone.addEventListener('click', () => openModal('clone'));
    btnEdit.addEventListener('click', () => openModal('edit'));
    btnDelete.addEventListener('click', deleteCurrentPreset);
    
    btnExport.addEventListener('click', exportPresets);
    importInput.addEventListener('change', importPresets);

    // Modal
    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);
    btnSavePreset.addEventListener('click', savePresetFromModal);
    
    columnSearchInput.addEventListener('input', renderCheckboxes);
    selectAllCheckbox.addEventListener('change', toggleAllCheckboxes);
}

// --- Storage Management ---
function loadPresetsFromStorage() {
    const saved = localStorage.getItem('csvPresets');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Ensure base always exists
            presets = { ...parsed, base: { name: 'Base (Tutte le colonne)', columns: [] } };
        } catch (e) {
            console.error("Errore nel caricamento presets", e);
        }
    }
}

function savePresetsToStorage() {
    localStorage.setItem('csvPresets', JSON.stringify(presets));
}

function updatePresetDropdown() {
    presetSelect.innerHTML = '';
    for (const [id, preset] of Object.entries(presets)) {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = preset.name;
        presetSelect.appendChild(option);
    }
    presetSelect.value = currentPresetId;
    updateActionButtonsState();
}

function updateActionButtonsState() {
    const isBase = currentPresetId === 'base';
    btnEdit.disabled = isBase;
    btnDelete.disabled = isBase;
    btnEdit.style.opacity = isBase ? '0.3' : '1';
    btnDelete.style.opacity = isBase ? '0.3' : '1';
    btnEdit.style.cursor = isBase ? 'not-allowed' : 'pointer';
    btnDelete.style.cursor = isBase ? 'not-allowed' : 'pointer';
}


// --- CSV Loading & Grid ---
function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    fileNameDisplay.textContent = file.name;
    loadingOverlay.style.display = 'flex';
    emptyState.style.display = 'none';

    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: function(results) {
            rawData = results.data;
            if (rawData.length > 0) {
                // Estrae tutte le colonne del CSV dal dizionario keys della prima riga valida
                // Fallback: se la prima riga ha colonne vuote, cerchiamo meta.fields forniti da papaparse
                allColumns = results.meta.fields || Object.keys(rawData[0]);
                initAgGrid();
                presetControlsGroup.classList.remove('disabled-when-empty');
            } else {
                alert("Il file CSV sembra essere vuoto o non valido.");
                emptyState.style.display = 'block';
            }
            loadingOverlay.style.display = 'none';
        },
        error: function(error) {
            loadingOverlay.style.display = 'none';
            alert("Errore durante la lettura del CSV: " + error.message);
            emptyState.style.display = 'block';
        }
    });
}

function initAgGrid() {
    const gridOptions = {
        columnDefs: generateColumnDefs('base'),
        rowData: rawData,
        defaultColDef: {
            sortable: true,
            filter: true,
            resizable: true,
            minWidth: 100
        },
        pagination: true,
        paginationPageSize: 100,
        animateRows: true
    };

    if (gridApi) {
        gridApi.destroy();
    }
    
    myGrid.innerHTML = '';
    myGrid.style.display = 'block';
    
    gridApi = agGrid.createGrid(myGrid, gridOptions);
    applyPresetToGrid();
}

function generateColumnDefs(presetId) {
    let colsToShow = allColumns;
    if (presetId !== 'base' && presets[presetId]) {
        colsToShow = presets[presetId].columns;
    }

    return colsToShow.map(col => ({
        field: col,
        headerName: col
    }));
}

function applyPresetToGrid() {
    if (!gridApi) return;
    updateActionButtonsState();
    
    const newColDefs = generateColumnDefs(currentPresetId);
    gridApi.setGridOption('columnDefs', newColDefs);
}


// --- Modal & Preset Modification ---
let tempSelectedColumns = new Set();

function openModal(mode) {
    if (allColumns.length === 0) {
        alert("Carica prima un file CSV per poter gestire le colonne.");
        return;
    }

    modalMode = mode;
    columnSearchInput.value = '';
    tempSelectedColumns.clear();

    if (mode === 'clone') {
        modalTitle.textContent = "Crea Nuovo Preset (Clona da: " + presets[currentPresetId].name + ")";
        presetNameInput.value = presets[currentPresetId].name + " - Copia";
        
        // Populate temp selection from current preset
        const currentCols = currentPresetId === 'base' ? allColumns : presets[currentPresetId].columns;
        currentCols.forEach(col => tempSelectedColumns.add(col));
    } else {
        // Edit mode (only if not base)
        if (currentPresetId === 'base') return;
        editingPresetId = currentPresetId;
        modalTitle.textContent = "Modifica Preset: " + presets[currentPresetId].name;
        presetNameInput.value = presets[currentPresetId].name;
        
        presets[currentPresetId].columns.forEach(col => tempSelectedColumns.add(col));
    }

    modal.classList.add('active');
    renderCheckboxes();
}

function closeModal() {
    modal.classList.remove('active');
}

function renderCheckboxes() {
    const filterText = columnSearchInput.value.toLowerCase();
    columnListContainer.innerHTML = '';
    
    let visibleCount = 0;

    allColumns.forEach(col => {
        if (col.toLowerCase().includes(filterText)) {
            visibleCount++;
            
            const label = document.createElement('label');
            label.className = 'custom-checkbox';
            
            const input = document.createElement('input');
            input.type = 'checkbox';
            input.value = col;
            input.checked = tempSelectedColumns.has(col);
            
            input.addEventListener('change', (e) => {
                if (e.target.checked) {
                    tempSelectedColumns.add(col);
                } else {
                    tempSelectedColumns.delete(col);
                }
                updateSelectAllState();
            });

            const spanText = document.createElement('span');
            spanText.textContent = col;

            label.appendChild(input);
            label.appendChild(document.createElement('span')); // Checkmark placeholder
            label.appendChild(spanText);
            
            columnListContainer.appendChild(label);
        }
    });

    visibleColumnsCount.textContent = visibleCount;
    updateSelectAllState();
}

function toggleAllCheckboxes(e) {
    const isChecked = e.target.checked;
    const filterText = columnSearchInput.value.toLowerCase();
    
    allColumns.forEach(col => {
        if (col.toLowerCase().includes(filterText)) {
            if (isChecked) {
                tempSelectedColumns.add(col);
            } else {
                tempSelectedColumns.delete(col);
            }
        }
    });
    
    renderCheckboxes();
}

function updateSelectAllState() {
    const filterText = columnSearchInput.value.toLowerCase();
    const visibleCols = allColumns.filter(c => c.toLowerCase().includes(filterText));
    
    if (visibleCols.length === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
        return;
    }

    const selectedVisibleCount = visibleCols.filter(c => tempSelectedColumns.has(c)).length;
    
    if (selectedVisibleCount === 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    } else if (selectedVisibleCount === visibleCols.length) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    }
}

function savePresetFromModal() {
    const rawName = presetNameInput.value.trim();
    if (!rawName) {
        alert("Inserisci un nome per il preset.");
        return;
    }

    const name = rawName;
    const columnsArray = Array.from(tempSelectedColumns);

    if (columnsArray.length === 0) {
        alert("Devi selezionare almeno una colonna.");
        return;
    }

    if (modalMode === 'clone') {
        const newId = 'preset_' + Date.now();
        presets[newId] = { name: name, columns: columnsArray };
        savePresetsToStorage();
        updatePresetDropdown();
        presetSelect.value = newId;
        currentPresetId = newId;
    } else if (modalMode === 'edit') {
        if (editingPresetId && presets[editingPresetId]) {
            presets[editingPresetId].name = name;
            presets[editingPresetId].columns = columnsArray;
            savePresetsToStorage();
            updatePresetDropdown();
        }
    }

    applyPresetToGrid();
    closeModal();
}

function deleteCurrentPreset() {
    if (currentPresetId === 'base') return;
    
    if (confirm(`Sei sicuro di voler eliminare il preset "${presets[currentPresetId].name}"?`)) {
        delete presets[currentPresetId];
        savePresetsToStorage();
        currentPresetId = 'base';
        updatePresetDropdown();
        applyPresetToGrid();
    }
}


// --- Export / Import ---
function exportPresets() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(presets));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", "csv_presets_export.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importPresets(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && typeof imported === 'object') {
                // Merge with existing, keeping base intact
                presets = { ...presets, ...imported, base: { name: 'Base (Tutte le colonne)', columns: [] } };
                savePresetsToStorage();
                updatePresetDropdown();
                alert("Preset importati con successo!");
            }
        } catch(err) {
            alert("Errore durante l'importazione: file non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
}
