// Variabili Globali
let rawData = [];
let allColumns = [];
let gridApi = null;
let currentPresetId = 'base';
let currentDictionary = {};
let currentExclusions = [];

const MANDATORY_COLUMNS = ['VEHICLE', 'TIMESTAMP', 'SOURCE', 'LONG_DESCRIPTION'];

// Struttura Presets: { id : { name: string, columns: string[], defaultSortOrder: string } }
let presets = {
    'base': { name: 'Vista Base (Solo Essenziali)', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' }
};

// --- DOM Elements ---
const fileInput = document.getElementById('csvFileInput');
const fileNameDisplay = document.getElementById('fileNameDisplay');
const presetSelect = document.getElementById('presetSelect');
const sortSelect = document.getElementById('sortSelect');
const presetControlsGroup = document.getElementById('presetControlsGroup');

const btnClone = document.getElementById('btnClonePreset');
const btnEdit = document.getElementById('btnEditPreset');
const btnDelete = document.getElementById('btnDeletePreset');
const btnDeleteAllPresets = document.getElementById('btnDeleteAllPresets');
const btnDictionary = document.getElementById('btnDictionary');
const btnExclusions = document.getElementById('btnExclusions');
const btnExport = document.getElementById('btnExportPresets');
const importInput = document.getElementById('importPresetInput');

const myGrid = document.getElementById('myGrid');
const emptyState = document.getElementById('emptyState');
const loadingOverlay = document.getElementById('loadingOverlay');

// Modal Elements Preset
const modal = document.getElementById('presetModal');
const modalTitle = document.getElementById('modalTitle');
const btnCloseModal = document.getElementById('btnCloseModal');
const btnCancelModal = document.getElementById('btnCancelModal');
const btnSavePreset = document.getElementById('btnSavePreset');
const presetNameInput = document.getElementById('presetNameInput');
const presetSortSelect = document.getElementById('presetSortSelect');
const columnSearchInput = document.getElementById('columnSearchInput');
const columnListContainer = document.getElementById('columnListContainer');
const selectAllCheckbox = document.getElementById('selectAllCheckbox');
const visibleColumnsCount = document.getElementById('visibleColumnsCount');

// Modal Elements Dictionary
const dictModal = document.getElementById('dictionaryModal');
const btnCloseDictModal = document.getElementById('btnCloseDictModal');
const btnCancelDictModal = document.getElementById('btnCancelDictModal');
const btnSaveDict = document.getElementById('btnSaveDict');
const btnResetDict = document.getElementById('btnResetDict');
const btnExportDict = document.getElementById('btnExportDict');
const importDictInput = document.getElementById('importDictInput');
const dictSearchInput = document.getElementById('dictSearchInput');
const dictTableBody = document.getElementById('dictTableBody');
const btnAddDictRow = document.getElementById('btnAddDictRow');

// Exclusion Modal Elements
const exclusionModal = document.getElementById('exclusionModal');
const btnCloseExclusionModal = document.getElementById('btnCloseExclusionModal');
const btnCancelExclusionModal = document.getElementById('btnCancelExclusionModal');
const btnSaveExclusions = document.getElementById('btnSaveExclusions');
const btnResetExclusions = document.getElementById('btnResetExclusions');
const btnExportExclusions = document.getElementById('btnExportExclusions');
const importExclusionsInput = document.getElementById('importExclusionsInput');
const exclusionSearchInput = document.getElementById('exclusionSearchInput');
const exclusionTableBody = document.getElementById('exclusionTableBody');
const btnAddExclusion = document.getElementById('btnAddExclusion');

// Modal state
let modalMode = 'clone'; // 'clone' or 'edit'
let editingPresetId = null;

// --- Inizializzazione ---
document.addEventListener('DOMContentLoaded', () => {
    initExclusions();
    initDictionary();
    loadPresetsFromStorage();
    updatePresetDropdown();
    initEventListeners();
});

function initEventListeners() {
    fileInput.addEventListener('change', handleFileUpload);

    presetSelect.addEventListener('change', (e) => {
        currentPresetId = e.target.value;
        const p = presets[currentPresetId];
        if (p && p.defaultSortOrder) {
            sortSelect.value = p.defaultSortOrder;
        } else {
            sortSelect.value = 'none';
        }
        applyPresetToGrid();
    });

    sortSelect.addEventListener('change', () => {
        applyPresetToGrid();
    });

    btnClone.addEventListener('click', () => openModal('clone'));
    btnEdit.addEventListener('click', () => openModal('edit'));
    btnDelete.addEventListener('click', deleteCurrentPreset);
    btnDeleteAllPresets.addEventListener('click', deleteAllPresets);
    btnDictionary.addEventListener('click', openDictModal);
    btnExclusions.addEventListener('click', openExclusionModal);

    btnExport.addEventListener('click', exportPresets);
    importInput.addEventListener('change', importPresets);

    // Modal
    btnCloseModal.addEventListener('click', closeModal);
    btnCancelModal.addEventListener('click', closeModal);
    btnSavePreset.addEventListener('click', savePresetFromModal);

    columnSearchInput.addEventListener('input', renderCheckboxes);
    selectAllCheckbox.addEventListener('change', toggleAllCheckboxes);

    // Dict Modal
    btnCloseDictModal.addEventListener('click', closeDictModal);
    btnCancelDictModal.addEventListener('click', closeDictModal);
    btnSaveDict.addEventListener('click', saveDictChanges);
    btnAddDictRow.addEventListener('click', addDictRow);
    btnResetDict.addEventListener('click', () => {
        if(confirm("Sei sicuro di voler riportare il dizionario ai valori originali? Verranno perse tutte le modifiche non esportate.")) {
            resetDictionaryToDefault();
            renderDictTable();
            applyPresetToGrid();
        }
    });
    dictSearchInput.addEventListener('input', renderDictTable);
    btnExportDict.addEventListener('click', exportDictionary);
    importDictInput.addEventListener('change', importDictionary);

    // Exclusion Modal
    btnCloseExclusionModal.addEventListener('click', closeExclusionModal);
    btnCancelExclusionModal.addEventListener('click', closeExclusionModal);
    btnSaveExclusions.addEventListener('click', saveExclusionsChanges);
    btnAddExclusion.addEventListener('click', addExclusionRow);
    btnResetExclusions.addEventListener('click', () => {
        if(confirm("Sei sicuro di voler riportare la blacklist ai valori originali? Verranno perse tutte le esclusioni non esportate.")) {
            resetExclusionsToDefault();
            renderExclusionTable();
            // Optional: You could reload grid if CSV is loaded, but modifying exclusions usually needs a clean reload of allColumns.
            // We'll reset allColumns if rawData exists:
            if(rawData.length > 0) reloadAllColumnsFromData();
        }
    });
    exclusionSearchInput.addEventListener('input', renderExclusionTable);
    btnExportExclusions.addEventListener('click', exportExclusions);
    importExclusionsInput.addEventListener('change', importExclusions);
}

// --- Storage Management Exclusions ---
function initExclusions() {
    const saved = localStorage.getItem('csvExclusions');
    if (saved) {
        try {
            currentExclusions = JSON.parse(saved);
            return;
        } catch (e) {
            console.error(e);
        }
    }
    resetExclusionsToDefault();
}

function resetExclusionsToDefault() {
    if (typeof DEFAULT_EXCLUSIONS !== 'undefined') {
        currentExclusions = [...DEFAULT_EXCLUSIONS];
    } else {
        currentExclusions = [];
    }
    saveExclusionsToStorage();
}

function saveExclusionsToStorage() {
    localStorage.setItem('csvExclusions', JSON.stringify(currentExclusions));
}

// --- Storage Management Dictionary ---
function initDictionary() {
    const saved = localStorage.getItem('csvDictionary');
    if (saved) {
        try {
            currentDictionary = JSON.parse(saved);
            return;
        } catch (e) {
            console.error(e);
        }
    }
    resetDictionaryToDefault();
}

function resetDictionaryToDefault() {
    currentDictionary = {};
    if (typeof DEFAULT_DICTIONARY !== 'undefined') {
        DEFAULT_DICTIONARY.forEach(item => {
            currentDictionary[item['nome_colonna']] = {
                alias: item['descrizione_custom'] || '',
                ordine_custom: item['ordine_custom'] === undefined ? null : item['ordine_custom'],
                ordine_funzione: item['ordine_funzione'] === undefined ? null : item['ordine_funzione'],
                ordine_apparato: item['ordine_apparato'] === undefined ? null : item['ordine_apparato'],
                ordine_cabina: item['ordine_cabina'] === undefined ? null : item['ordine_cabina']
            };
        });
    }
    saveDictionaryToStorage();
}

function saveDictionaryToStorage() {
    localStorage.setItem('csvDictionary', JSON.stringify(currentDictionary));
}

// --- Storage Management Presets ---
function loadPresetsFromStorage() {
    const saved = localStorage.getItem('csvPresets');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            presets = { ...parsed, base: { name: 'Vista Base (Solo Essenziali)', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' } };
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
        complete: function (results) {
            rawData = results.data;
            if (rawData.length > 0) {
                // Apply exclusions immediately upon extracting columns
                let totalColumns = results.meta.fields || Object.keys(rawData[0]);
                allColumns = totalColumns.filter(col => !currentExclusions.includes(col));
                initAgGrid();
            } else {
                alert("Il file CSV sembra essere vuoto o non valido.");
                emptyState.style.display = 'block';
            }
            loadingOverlay.style.display = 'none';
        },
        error: function (error) {
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
        headerHeight: 350,
        enableBrowserTooltips: true,
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

function getSortOrderValue(colName, sortType) {
    if (!currentDictionary[colName] || currentDictionary[colName][sortType] == null) {
        return 999999; // Unordered columns go to the end
    }
    return currentDictionary[colName][sortType];
}

function generateColumnDefs(presetId) {
    let colsToShow = allColumns;
    if (presets[presetId]) {
        colsToShow = [...presets[presetId].columns]; // Clone avoiding references
    }

    const sortType = sortSelect.value;
    if (sortType !== 'none') {
        colsToShow.sort((a, b) => {
            const valA = getSortOrderValue(a, sortType);
            const valB = getSortOrderValue(b, sortType);
            if (valA !== valB) return valA - valB;
            // If order score is the same, keep alphabetical
            return a.localeCompare(b);
        });
    }

    return colsToShow.map(col => {
        let def = { field: col, headerName: col };
        let colUpper = col.toUpperCase();

        if (colUpper === 'TIMESTAMP' || colUpper === 'TIMESTAMP BORDO') {
            def.valueFormatter = (params) => {
                if (params.value && typeof params.value === 'string') {
                    return params.value.replace(/(\.\d)\d+$/, '$1');
                }
                return params.value;
            };
        } else if (colUpper === 'LONG_DESCRIPTION') {
            def.width = 200;
        } else if (colUpper.startsWith('S_')) {
            def.headerClass = 'vertical-header';
            def.width = 60;
        }

        // Apply Custom Alias
        if (currentDictionary[colUpper] && currentDictionary[colUpper].alias) {
            def.headerName = currentDictionary[colUpper].alias;
            // Add headerTooltip for alias
            def.headerTooltip = currentDictionary[colUpper].alias; 
            def.tooltipField = col; // Cells show actual row value on hover
        } else if (currentDictionary[col] && currentDictionary[col].alias) {
            def.headerName = currentDictionary[col].alias;
            def.headerTooltip = currentDictionary[col].alias; 
            def.tooltipField = col; // Cells show actual row value on hover
        } else {
            if (colUpper === 'LONG_DESCRIPTION') def.tooltipField = col;
        }

        return def;
    });
}

function applyPresetToGrid() {
    if (!gridApi) return;
    updateActionButtonsState();

    const newColDefs = generateColumnDefs(currentPresetId);
    gridApi.setGridOption('columnDefs', newColDefs);

    setTimeout(() => {
        if (!gridApi) return;
        const colsToAutoSize = newColDefs
            .map(c => c.field)
            .filter(c => {
                const upper = c.toUpperCase();
                return upper === 'VEHICLE' || upper === 'TIMESTAMP' || upper === 'TIMESTAMP BORDO' || upper === 'SOURCE';
            });
        if (colsToAutoSize.length > 0) {
            gridApi.autoSizeColumns(colsToAutoSize);
        }
    }, 150);
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
    presetSortSelect.value = 'none';
    tempSelectedColumns.clear();

    if (mode === 'clone') {
        const titleSuffix = currentPresetId === 'base' ? "Nuova Vista" : presets[currentPresetId].name + " - Copia";
        modalTitle.textContent = "Crea Nuovo Preset (Da: " + presets[currentPresetId].name + ")";
        presetNameInput.value = titleSuffix;

        const currentCols = presets[currentPresetId].columns;
        currentCols.forEach(col => tempSelectedColumns.add(col));
        if (presets[currentPresetId].defaultSortOrder) {
            presetSortSelect.value = presets[currentPresetId].defaultSortOrder;
        }
    } else {
        if (currentPresetId === 'base') return;
        editingPresetId = currentPresetId;
        modalTitle.textContent = "Modifica Preset: " + presets[currentPresetId].name;
        presetNameInput.value = presets[currentPresetId].name;

        presets[currentPresetId].columns.forEach(col => tempSelectedColumns.add(col));
        presetSortSelect.value = presets[currentPresetId].defaultSortOrder || 'none';
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

    let availableCols = allColumns.filter(c => !MANDATORY_COLUMNS.includes(c));
    
    // Sort logic for the display list inside the modal to show selected items first, then alphabetically
    availableCols.sort((a, b) => {
        const aSelected = tempSelectedColumns.has(a);
        const bSelected = tempSelectedColumns.has(b);
        if (aSelected && !bSelected) return -1;
        if (!aSelected && bSelected) return 1;
        
        // Show by alias if it exists
        const aName = (currentDictionary[a] && currentDictionary[a].alias) ? currentDictionary[a].alias : a;
        const bName = (currentDictionary[b] && currentDictionary[b].alias) ? currentDictionary[b].alias : b;
        return aName.localeCompare(bName);
    });
    
    // Apply visual filter
    availableCols = availableCols.filter(c => {
        const aName = (currentDictionary[c] && currentDictionary[c].alias) ? currentDictionary[c].alias : c;
        return c.toLowerCase().includes(filterText) || aName.toLowerCase().includes(filterText);
    });

    let visibleCount = availableCols.length;

    availableCols.forEach(col => {
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
        const alias = (currentDictionary[col] && currentDictionary[col].alias) ? ` (${currentDictionary[col].alias})` : '';
        spanText.textContent = col + alias;

        label.appendChild(input);
        label.appendChild(document.createElement('span'));
        label.appendChild(spanText);

        columnListContainer.appendChild(label);
    });

    visibleColumnsCount.textContent = visibleCount;
    updateSelectAllState();
}

function toggleAllCheckboxes(e) {
    const isChecked = e.target.checked;
    const filterText = columnSearchInput.value.toLowerCase();

    allColumns.forEach(col => {
        if (!MANDATORY_COLUMNS.includes(col)) {
             const aName = (currentDictionary[col] && currentDictionary[col].alias) ? currentDictionary[col].alias : col;
             if(col.toLowerCase().includes(filterText) || aName.toLowerCase().includes(filterText)){
                if (isChecked) {
                    tempSelectedColumns.add(col);
                } else {
                    tempSelectedColumns.delete(col);
                }
             }
        }
    });

    renderCheckboxes();
}

function updateSelectAllState() {
    const filterText = columnSearchInput.value.toLowerCase();
    const visibleCols = allColumns.filter(c => !MANDATORY_COLUMNS.includes(c)).filter(c => {
         const aName = (currentDictionary[c] && currentDictionary[c].alias) ? currentDictionary[c].alias : c;
         return c.toLowerCase().includes(filterText) || aName.toLowerCase().includes(filterText);
    });

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
    const orderSelection = presetSortSelect.value;
    
    const finalColumns = [...MANDATORY_COLUMNS];
    columnsArray.forEach(col => {
        if (!MANDATORY_COLUMNS.includes(col)) {
            finalColumns.push(col);
        }
    });

    if (finalColumns.length === 0) {
        alert("Devi selezionare almeno una colonna.");
        return;
    }

    if (modalMode === 'clone') {
        const newId = 'preset_' + Date.now();
        presets[newId] = { name: name, columns: finalColumns, defaultSortOrder: orderSelection };
        savePresetsToStorage();
        updatePresetDropdown();
        presetSelect.value = newId;
        currentPresetId = newId;
        sortSelect.value = orderSelection; // apply automatically
    } else if (modalMode === 'edit') {
        if (editingPresetId && presets[editingPresetId]) {
            presets[editingPresetId].name = name;
            presets[editingPresetId].columns = finalColumns;
            presets[editingPresetId].defaultSortOrder = orderSelection;
            savePresetsToStorage();
            updatePresetDropdown();
            sortSelect.value = orderSelection;
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
        sortSelect.value = 'none';
        updatePresetDropdown();
        applyPresetToGrid();
    }
}

function deleteAllPresets() {
    if (Object.keys(presets).length <= 1) {
        alert("Non ci sono preset personalizzati da eliminare.");
        return;
    }
    
    if (confirm("Sei sicuro di voler eliminare TUTTI i preset personalizzati in un colpo solo? L'operazione è irreversibile.")) {
        presets = {
            'base': presets['base']
        };
        savePresetsToStorage();
        currentPresetId = 'base';
        sortSelect.value = 'none';
        updatePresetDropdown();
        applyPresetToGrid();
    }
}

// --- Dictionary Management ---
function openDictModal() {
    dictSearchInput.value = '';
    renderDictTable();
    dictModal.classList.add('active');
}

function addDictRow() {
    const newKey = prompt("Inserisci il Nome Colonna ESATTO per cui creare l'alias:");
    if (!newKey) return;
    const finalKey = newKey.trim();
    if (currentDictionary[finalKey]) {
        alert("Questa colonna esiste già nel dizionario!");
        return;
    }
    currentDictionary[finalKey] = {
        alias: "",
        ordine_custom: null,
        ordine_funzione: null,
        ordine_apparato: null,
        ordine_cabina: null
    };
    dictSearchInput.value = finalKey; 
    renderDictTable();
}

function closeDictModal() {
    dictModal.classList.remove('active');
}

function renderDictTable() {
    const filterText = dictSearchInput.value.toLowerCase();
    dictTableBody.innerHTML = '';
    
    let rows = Object.keys(currentDictionary).map(key => {
        return { key, ...currentDictionary[key] };
    });
    
    rows = rows.filter(r => r.key.toLowerCase().includes(filterText) || (r.alias && r.alias.toLowerCase().includes(filterText)));
    
    rows.sort((a, b) => a.key.localeCompare(b.key));
    
    let fragments = [];
    rows.forEach(r => {
        fragments.push(`
            <tr>
                <td>${r.key}</td>
                <td><input type="text" class="dict-input" data-field="alias" data-key="${r.key}" value="${r.alias || ''}"></td>
                <td><input type="number" class="dict-input" data-field="ordine_custom" data-key="${r.key}" value="${r.ordine_custom !== null ? r.ordine_custom : ''}"></td>
                <td><input type="number" class="dict-input" data-field="ordine_funzione" data-key="${r.key}" value="${r.ordine_funzione !== null ? r.ordine_funzione : ''}"></td>
                <td><input type="number" class="dict-input" data-field="ordine_apparato" data-key="${r.key}" value="${r.ordine_apparato !== null ? r.ordine_apparato : ''}"></td>
                <td><input type="number" class="dict-input" data-field="ordine_cabina" data-key="${r.key}" value="${r.ordine_cabina !== null ? r.ordine_cabina : ''}"></td>
            </tr>
        `);
    });
    dictTableBody.innerHTML = fragments.join('');
}

function saveDictChanges() {
    const inputs = dictTableBody.querySelectorAll('.dict-input');
    inputs.forEach(input => {
        const key = input.getAttribute('data-key');
        const field = input.getAttribute('data-field');
        let val = input.value.trim();
        
        if (field.startsWith('ordine_')) {
             // Handle numbers
             if (val === '') val = null;
             else val = parseInt(val, 10);
        }
        
        if (currentDictionary[key]) {
            currentDictionary[key][field] = val;
        }
    });
    
    saveDictionaryToStorage();
    closeDictModal();
    applyPresetToGrid(); // Refresh header names with aliases dynamically
}

function exportDictionary() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentDictionary, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "dictionary_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importDictionary(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && typeof imported === 'object') {
                currentDictionary = { ...currentDictionary, ...imported };
                saveDictionaryToStorage();
                renderDictTable();
                applyPresetToGrid();
                alert("Dizionario importato con successo!");
            }
        } catch(err) {
            alert("Errore durante l'importazione: file non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
}

// --- Export / Import Presets ---
function exportPresets() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(presets));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "csv_presets_export.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importPresets(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && typeof imported === 'object') {
                presets = { ...presets, ...imported, base: { name: 'Vista Base (Solo Essenziali)', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' } };
                savePresetsToStorage();
                updatePresetDropdown();
                alert("Preset importati con successo!");
            }
        } catch (err) {
            alert("Errore durante l'importazione: file non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset input
}

// --- Exclusion Management ---
function openExclusionModal() {
    exclusionSearchInput.value = '';
    renderExclusionTable();
    exclusionModal.classList.add('active');
}

function closeExclusionModal() {
    exclusionModal.classList.remove('active');
}

function renderExclusionTable() {
    const filterText = exclusionSearchInput.value.toLowerCase();
    exclusionTableBody.innerHTML = '';
    
    let rows = [...currentExclusions];
    rows = rows.filter(r => r.toLowerCase().includes(filterText));
    rows.sort((a, b) => a.localeCompare(b));
    
    let fragments = [];
    rows.forEach(col => {
        fragments.push(`
            <tr>
                <td>${col}</td>
                <td style="text-align: center;">
                    <button class="btn icon-btn danger-hover" onclick="removeExclusionRow('${col}')" title="Rimuovi Esclusione">🗑</button>
                </td>
            </tr>
        `);
    });
    exclusionTableBody.innerHTML = fragments.join('');
}

window.removeExclusionRow = function(colName) {
    if (confirm(`Sicuro di voler rimuovere '${colName}' dalle esclusioni? Tornerà ad essere visibile nel CSV.`)) {
        currentExclusions = currentExclusions.filter(c => c !== colName);
        renderExclusionTable();
    }
};

function addExclusionRow() {
    const newKey = prompt("Inserisci il Nome Colonna ESATTO da escludere:");
    if (!newKey) return;
    const finalKey = newKey.trim();
    if (currentExclusions.includes(finalKey)) {
        alert("Questa colonna è già tra le esclusioni!");
        return;
    }
    currentExclusions.push(finalKey);
    exclusionSearchInput.value = finalKey; 
    renderExclusionTable();
}

function saveExclusionsChanges() {
    saveExclusionsToStorage();
    closeExclusionModal();
    if (rawData.length > 0) {
        reloadAllColumnsFromData();
    }
}

function reloadAllColumnsFromData() {
    let totalColumns = Object.keys(rawData[0]);
    // Safety check if PapaParse populated meta.fields
    if (rawData.length > 0 && typeof Papa !== 'undefined') {
        // Unfortunately PapaParse doesn't store the fields string natively inside RAWdata without another pass or using the keys
        // We'll trust the keys of the first row
        allColumns = totalColumns.filter(col => !currentExclusions.includes(col));
        initAgGrid();
    }
}

function exportExclusions() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentExclusions, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "exclusions_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importExclusions(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && Array.isArray(imported)) {
                // Merge unique
                imported.forEach(col => {
                    if(!currentExclusions.includes(col)) currentExclusions.push(col);
                });
                saveExclusionsToStorage();
                renderExclusionTable();
                if (rawData.length > 0) reloadAllColumnsFromData();
                alert("Esclusioni importate con successo!");
            } else {
                alert("Il file non contiene un array valido di esclusioni.");
            }
        } catch(err) {
            alert("Errore durante l'importazione: file non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
}

