// Variabili Globali
let rawData = [];
let rawDataAllRows = [];
let secondaryHeaders = {};
let allColumns = [];
let gridApi = null;
let currentPresetId = 'base';
let currentDictionary = {};
let truncateDesc = true;
let highlightChanges = (typeof CONFIG !== 'undefined' && CONFIG.DEFAULT_HIGHLIGHT_CHANGES !== undefined) ? CONFIG.DEFAULT_HIGHLIGHT_CHANGES : true;
let hideInvariantColumns = false;
let currentExclusions = [];
let currentRowFilters = [];
let tempRowFilters = [];

const MANDATORY_COLUMNS = (typeof CONFIG !== 'undefined' && CONFIG.MANDATORY_COLUMNS)
    ? CONFIG.MANDATORY_COLUMNS
    : [''];

function sanitizeColumnsForCurrentData(columns) {
    if (!Array.isArray(columns)) return [];
    if (!Array.isArray(allColumns) || allColumns.length === 0) {
        return [...columns];
    }
    const availableSet = new Set(allColumns);
    const sanitized = [];
    columns.forEach(col => {
        if (availableSet.has(col) && !sanitized.includes(col)) {
            sanitized.push(col);
        }
    });
    return sanitized;
}

function getActiveMandatoryColumns() {
    return sanitizeColumnsForCurrentData(MANDATORY_COLUMNS);
}

function computeBaseColumns() {
    const activeMandatory = getActiveMandatoryColumns();
    if (activeMandatory.length > 0) return activeMandatory;
    return [...allColumns];
}

function findLongDescriptionKey(sampleRow) {
    if (!sampleRow) return null;
    const keys = Object.keys(sampleRow);
    for (const key of keys) {
        if (typeof key === 'string' && key.toUpperCase() === 'LONG_DESCRIPTION') {
            return key;
        }
    }
    return null;
}

function applyRowFilters(dataSet) {
    if (!Array.isArray(dataSet)) return [];
    if (!Array.isArray(currentRowFilters) || currentRowFilters.length === 0) {
        return [...dataSet];
    }

    const validFilters = currentRowFilters
        .filter(f => f && f.action === 'hide')
        .map(f => (typeof f.pattern === 'string' ? f.pattern.trim() : ''))
        .filter(p => p.length > 0)
        .map(p => p.toLowerCase());

    if (validFilters.length === 0) {
        return [...dataSet];
    }

    const longDescKey = findLongDescriptionKey(dataSet.find(row => row && Object.keys(row || {}).length > 0));
    if (!longDescKey) {
        return [...dataSet];
    }

    return dataSet.filter(row => {
        const value = (row[longDescKey] === undefined || row[longDescKey] === null)
            ? ''
            : String(row[longDescKey]);
        const lowerValue = value.toLowerCase();
        return !validFilters.some(filterVal => lowerValue.includes(filterVal));
    });
}

function refreshRowFilteringAndGrid() {
    rawData = applyRowFilters(rawDataAllRows);
    if (gridApi) {
        gridApi.setGridOption('rowData', rawData);
        gridApi.redrawRows();
    }
}

// Struttura Presets: { id : { name: string, columns: string[], defaultSortOrder: string } }
let presets = {
    'base': { name: 'Default', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' }
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
const btnRowFilters = document.getElementById('btnRowFilters');
const btnExportGrid = document.getElementById('btnExportGrid');

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

// Row Filter Modal Elements
const rowFilterModal = document.getElementById('rowFilterModal');
const btnCloseRowFilterModal = document.getElementById('btnCloseRowFilterModal');
const btnCancelRowFilterModal = document.getElementById('btnCancelRowFilterModal');
const btnSaveRowFilters = document.getElementById('btnSaveRowFilters');
const btnResetRowFilters = document.getElementById('btnResetRowFilters');
const btnExportRowFilters = document.getElementById('btnExportRowFilters');
const importRowFiltersInput = document.getElementById('importRowFiltersInput');
const rowFilterSearchInput = document.getElementById('rowFilterSearchInput');
const rowFilterTableBody = document.getElementById('rowFilterTableBody');
const btnAddRowFilter = document.getElementById('btnAddRowFilter');

// Modal state
let modalMode = 'clone'; // 'clone' or 'edit'
let editingPresetId = null;

// --- Inizializzazione ---
document.addEventListener('DOMContentLoaded', () => {
    // Applica il titolo configurato
    if (typeof CONFIG !== 'undefined' && CONFIG.APP_TITLE) {
        document.title = CONFIG.APP_TITLE;
        const mainTitle = document.querySelector('h1');
        if (mainTitle) mainTitle.textContent = CONFIG.APP_TITLE;
    }

    initExclusions();
    initRowFilters();
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

    const chkTruncateDesc = document.getElementById('chkTruncateDesc');
    if (chkTruncateDesc) {
        chkTruncateDesc.addEventListener('change', (e) => {
            truncateDesc = e.target.checked;
            applyPresetToGrid();
        });
    }

    const chkHighlightChanges = document.getElementById('chkHighlightChanges');
    if (chkHighlightChanges) {
        chkHighlightChanges.checked = highlightChanges;
        chkHighlightChanges.addEventListener('change', (e) => {
            highlightChanges = e.target.checked;
            if (gridApi) {
                gridApi.redrawRows();
            }
        });
    }

    const chkHideInvariant = document.getElementById('chkHideInvariant');
    if (chkHideInvariant) {
        chkHideInvariant.checked = hideInvariantColumns;
        chkHideInvariant.addEventListener('change', (e) => {
            hideInvariantColumns = e.target.checked;
            updateInvariantColumnsVisibility();
        });
    }

    btnClone.addEventListener('click', () => openModal('clone'));
    btnEdit.addEventListener('click', () => openModal('edit'));
    btnDelete.addEventListener('click', deleteCurrentPreset);
    btnDeleteAllPresets.addEventListener('click', deleteAllPresets);
    btnDictionary.addEventListener('click', openDictModal);
    btnExclusions.addEventListener('click', openExclusionModal);
    btnRowFilters.addEventListener('click', openRowFilterModal);
    if (btnExportGrid) btnExportGrid.addEventListener('click', exportGridData);

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
        if (confirm("Sei sicuro di voler riportare il dizionario ai valori originali? Verranno perse tutte le modifiche non esportate.")) {
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
        if (confirm("Sei sicuro di voler riportare la blacklist ai valori originali? Verranno perse tutte le esclusioni non esportate.")) {
            resetExclusionsToDefault();
            renderExclusionTable();
            // Optional: You could reload grid if CSV is loaded, but modifying exclusions usually needs a clean reload of allColumns.
            // We'll reset allColumns if rawData exists:
            if (rawData.length > 0) reloadAllColumnsFromData();
        }
    });
    exclusionSearchInput.addEventListener('input', renderExclusionTable);
    btnExportExclusions.addEventListener('click', exportExclusions);
    importExclusionsInput.addEventListener('change', importExclusions);

    // Row Filter Modal
    btnCloseRowFilterModal.addEventListener('click', closeRowFilterModal);
    btnCancelRowFilterModal.addEventListener('click', closeRowFilterModal);
    btnSaveRowFilters.addEventListener('click', saveRowFiltersChanges);
    btnAddRowFilter.addEventListener('click', addRowFilter);
    btnResetRowFilters.addEventListener('click', () => {
        if (confirm("Vuoi davvero svuotare tutti i filtri riga correnti? L'azione verrà applicata subito.")) {
            tempRowFilters = [];
            currentRowFilters = [];
            saveRowFiltersToStorage();
            refreshRowFilteringAndGrid();
            closeRowFilterModal();
        }
    });
    rowFilterSearchInput.addEventListener('input', renderRowFilterTable);
    btnExportRowFilters.addEventListener('click', exportRowFilters);
    importRowFiltersInput.addEventListener('change', importRowFilters);
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

// --- Storage Management Row Filters ---
function initRowFilters() {
    const saved = localStorage.getItem('csvRowFilters');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            currentRowFilters = Array.isArray(parsed) ? parsed.map(f => {
                if (typeof f === 'string') return { pattern: f, action: 'hide', color: '#ffff00' };
                // Migrazione vecchia logica colori -> highlight + hex
                if (f.action && f.action !== 'hide' && f.action !== 'highlight') {
                    const colorMap = { yellow: '#ffff00', blue: '#2196f3', green: '#4caf50', red: '#f44336', purple: '#9c27b0' };
                    f.color = colorMap[f.action] || '#ffff00';
                    f.action = 'highlight';
                }
                if (!f.color) f.color = '#ffff00';
                if (!f.action) f.action = 'hide';
                return f;
            }) : [];
            return;
        } catch (err) {
            console.error("Errore initRowFilters:", err);
        }
    }
    currentRowFilters = [];
    saveRowFiltersToStorage();
}

function saveRowFiltersToStorage() {
    localStorage.setItem('csvRowFilters', JSON.stringify(currentRowFilters));
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
            presets = { ...parsed, base: { name: 'Default', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' } };
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
            if (results.data.length > 0) {
                secondaryHeaders = results.data[0];
                rawDataAllRows = results.data.slice(1);
                // Apply exclusions immediately upon extracting columns
                let totalColumns = results.meta.fields || (rawDataAllRows[0] ? Object.keys(rawDataAllRows[0]) : []);
                allColumns = totalColumns.filter(col => !currentExclusions.includes(col));
                rawData = applyRowFilters(rawDataAllRows);
                presets['base'].columns = computeBaseColumns();
                initAgGrid();
            } else {
                rawData = [];
                rawDataAllRows = [];
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
        floatingFiltersHeight: 50,
        enableBrowserTooltips: true,
        defaultColDef: {
            sortable: true,
            filter: true,
            floatingFilter: true,
            resizable: true,
            minWidth: 5
        },
        onFilterChanged: () => {
            updateInvariantColumnsVisibility();
        },
        pagination: false,
        paginationPageSize: 100,
        animateRows: true,
        rowSelection: 'multiple',
        getRowStyle: (params) => {
            if (!params.data || !currentRowFilters || currentRowFilters.length === 0) return null;

            // Trova la chiave della descrizione lunga
            const longDescKey = findLongDescriptionKey(params.data);
            if (!longDescKey) return null;

            const value = (params.data[longDescKey] === undefined || params.data[longDescKey] === null)
                ? ''
                : String(params.data[longDescKey]).toLowerCase();

            for (const rule of currentRowFilters) {
                if (rule.action === 'highlight' && rule.pattern && rule.color) {
                    const p = rule.pattern.toLowerCase();
                    if (value.includes(p)) {
                        // Aggiunge alfa del 25% (44 in hex) per la trasparenza
                        return { backgroundColor: rule.color + '44' };
                    }
                }
            }
            return null;
        }
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
    let colsToShow = [...allColumns];
    if (presets[presetId]) {
        colsToShow = sanitizeColumnsForCurrentData(presets[presetId].columns);
    }

    if (!colsToShow || colsToShow.length === 0) {
        colsToShow = [...allColumns];
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

    return colsToShow.map((col, index) => {
        let def = { field: col, headerName: col };
        let colUpper = col.toUpperCase();
        let colClass = index % 2 === 0 ? 'col-even' : 'col-odd';
        
        def.cellClass = [colClass];
        def.headerClass = [colClass];

        if (colUpper === 'TIMESTAMP' || colUpper === 'TIMESTAMP BORDO' || colUpper === 'TSTAMP') {
            def.valueFormatter = (params) => {
                if (params.value && typeof params.value === 'string') {
                    return params.value.replace(/(\.\d)\d+$/, '$1');
                }
                return params.value;
            };
        } else if (colUpper === 'THING') {
            def.valueFormatter = (params) => {
                if (params.value && typeof params.value === 'string') {
                    return params.value.slice(-3);
                }
                return params.value;
            };
        } else if (colUpper === 'LONG_DESCRIPTION') {
            def.width = 200;
            def.cellClass.push('left-aligned-cell');
            def.valueFormatter = (params) => {
                if (params.value && typeof params.value === 'string' && truncateDesc) {
                    const dashIndex = params.value.indexOf(' - ');
                    if (dashIndex !== -1) {
                        return params.value.substring(0, dashIndex).trim();
                    }
                }
                return params.value;
            };
        } else if (colUpper.startsWith('S_')) {
            def.headerClass.push('vertical-header');
            def.width = 60;
            def.cellClassRules = {
                'highlight-change': (params) => {
                    try {
                        if (!highlightChanges || !params.node || typeof params.node.rowIndex !== 'number' || params.node.rowIndex === 0) return false;

                        const prevNode = params.api.getDisplayedRowAtIndex(params.node.rowIndex - 1);
                        if (!prevNode || !prevNode.data) return false;

                        const field = params.colDef.field;
                        let currentVal = params.value;
                        let prevVal = prevNode.data[field];

                        if (currentVal === "") currentVal = null;
                        if (prevVal === "") prevVal = null;

                        return currentVal != prevVal;
                    } catch (e) {
                        console.error("Error in cellClassRules:", e);
                        return false;
                    }
                }
            };
        }

        let customAlias = (currentDictionary[colUpper] && currentDictionary[colUpper].alias) ? currentDictionary[colUpper].alias :
            ((currentDictionary[col] && currentDictionary[col].alias) ? currentDictionary[col].alias : null);

        if (customAlias) {
            def.headerName = customAlias;
            def.tooltipField = col; // Cells show actual row value on hover
        } else {
            def.headerName = col;
            if (colUpper === 'LONG_DESCRIPTION') def.tooltipField = col;
        }

        let currentlyDisplayedInfo = `${col}\n${secondaryHeaders[col] || ''}`.trim();
        if (def.headerName !== col) {
            def.headerTooltip = `${def.headerName}\n\n${currentlyDisplayedInfo}`;
        } else {
            def.headerTooltip = currentlyDisplayedInfo;
        }

        return def;
    });
}

function updateInvariantColumnsVisibility() {
    if (!gridApi) return;

    let colsToShow = [];
    if (presets[currentPresetId]) {
        colsToShow = sanitizeColumnsForCurrentData(presets[currentPresetId].columns);
    }
    if (!colsToShow || colsToShow.length === 0) {
        colsToShow = [...allColumns];
    }

    if (!hideInvariantColumns) {
        gridApi.setColumnsVisible(colsToShow, true);
        return;
    }

    let filterModel = gridApi.getFilterModel() || {};
    let activeFilteredColumns = Object.keys(filterModel);

    let visibleRows = [];
    gridApi.forEachNodeAfterFilter(node => {
        if (node.data) visibleRows.push(node.data);
    });

    if (visibleRows.length === 0 && rawData && rawData.length > 0) {
        visibleRows = rawData;
    }

    if (visibleRows.length > 0) {
        let colsToHide = [];
        let colsToKeep = [];

        colsToShow.forEach(col => {
            if (activeFilteredColumns.includes(col)) {
                colsToKeep.push(col);
                return;
            }

            let firstVal = visibleRows[0][col];
            let hasVariation = false;
            for (let i = 1; i < visibleRows.length; i++) {
                if (visibleRows[i][col] !== firstVal) {
                    hasVariation = true;
                    break;
                }
            }

            if (!hasVariation) {
                colsToHide.push(col);
            } else {
                colsToKeep.push(col);
            }
        });

        if (colsToKeep.length > 0) gridApi.setColumnsVisible(colsToKeep, true);
        if (colsToHide.length > 0) gridApi.setColumnsVisible(colsToHide, false);
    }
}

function applyPresetToGrid() {
    if (!gridApi) return;
    updateActionButtonsState();

    const newColDefs = generateColumnDefs(currentPresetId);
    gridApi.setGridOption('columnDefs', newColDefs);

    updateInvariantColumnsVisibility();

    setTimeout(() => {
        if (!gridApi) return;
        const colsToAutoSize = newColDefs.map(c => c.field);
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

    // Helper interno
    const getAlias = (c) => {
        let customAlias = (currentDictionary[c] && currentDictionary[c].alias) ? currentDictionary[c].alias : null;
        return customAlias || c;
    };

    // Sort logic for the display list inside the modal to show selected items first, then alphabetically
    availableCols.sort((a, b) => {
        const aSelected = tempSelectedColumns.has(a);
        const bSelected = tempSelectedColumns.has(b);
        if (aSelected && !bSelected) return -1;
        if (!aSelected && bSelected) return 1;

        // Show by alias if it exists
        const aName = getAlias(a) || a;
        const bName = getAlias(b) || b;
        return aName.localeCompare(bName);
    });

    // Apply visual filter
    availableCols = availableCols.filter(c => {
        const aName = getAlias(c) || c;
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
        const alias = getAlias(col);
        spanText.textContent = col + (alias ? ` (${alias})` : '');

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
            let customAlias = (currentDictionary[col] && currentDictionary[col].alias) ? currentDictionary[col].alias : null;
            const aName = customAlias || col;

            if (col.toLowerCase().includes(filterText) || aName.toLowerCase().includes(filterText)) {
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
        let customAlias = (currentDictionary[c] && currentDictionary[c].alias) ? currentDictionary[c].alias : null;
        const aName = customAlias || c;

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

    const activeMandatory = getActiveMandatoryColumns();
    const finalColumns = [...activeMandatory];
    columnsArray.forEach(col => {
        if (!MANDATORY_COLUMNS.includes(col) && allColumns.includes(col) && !finalColumns.includes(col)) {
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
    reader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && typeof imported === 'object') {
                currentDictionary = { ...currentDictionary, ...imported };
                saveDictionaryToStorage();
                renderDictTable();
                applyPresetToGrid();
                alert("Dizionario importato con successo!");
            }
        } catch (err) {
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
                presets = { ...presets, ...imported, base: { name: 'Default', columns: [...MANDATORY_COLUMNS], defaultSortOrder: 'none' } };
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

window.removeExclusionRow = function (colName) {
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
    let referenceRow = rawDataAllRows[0] || rawData[0] || null;
    if (!referenceRow) {
        allColumns = [];
        presets['base'].columns = [];
        rawData = applyRowFilters(rawDataAllRows);
        initAgGrid();
        return;
    }

    let totalColumns = Object.keys(referenceRow);
    allColumns = totalColumns.filter(col => !currentExclusions.includes(col));
    presets['base'].columns = computeBaseColumns();
    rawData = applyRowFilters(rawDataAllRows);
    initAgGrid();
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
    reader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && Array.isArray(imported)) {
                // Merge unique
                imported.forEach(col => {
                    if (!currentExclusions.includes(col)) currentExclusions.push(col);
                });
                saveExclusionsToStorage();
                renderExclusionTable();
                if (rawData.length > 0) reloadAllColumnsFromData();
                alert("Esclusioni importate con successo!");
            } else {
                alert("Il file non contiene un array valido di esclusioni.");
            }
        } catch (err) {
            alert("Errore durante l'importazione: file non valido.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
}

// --- Row Filter Management ---
function populateLongDescDatalist() {
    let datalist = document.getElementById('longDescSuggestions');
    if (!datalist) {
        datalist = document.createElement('datalist');
        datalist.id = 'longDescSuggestions';
        document.body.appendChild(datalist);
    }

    datalist.innerHTML = '';

    if (!rawDataAllRows || rawDataAllRows.length === 0) return;

    const longDescKey = findLongDescriptionKey(rawDataAllRows.find(r => r && Object.keys(r).length > 0));
    if (!longDescKey) return;

    const descSet = new Set();
    rawDataAllRows.forEach(row => {
        if (row[longDescKey]) {
            let val = String(row[longDescKey]);
            if (truncateDesc) {
                const dashIndex = val.indexOf(' - ');
                if (dashIndex !== -1) {
                    val = val.substring(0, dashIndex);
                }
            }
            val = val.trim();
            if (val) descSet.add(val);
        }
    });

    const uniqueDesc = Array.from(descSet).sort();

    const frag = document.createDocumentFragment();
    uniqueDesc.forEach(desc => {
        const opt = document.createElement('option');
        opt.value = desc;
        frag.appendChild(opt);
    });
    datalist.appendChild(frag);
}

function openRowFilterModal() {
    rowFilterSearchInput.value = '';
    tempRowFilters = [...currentRowFilters];
    populateLongDescDatalist();
    renderRowFilterTable();
    rowFilterModal.classList.add('active');
}

function closeRowFilterModal() {
    rowFilterModal.classList.remove('active');
}

function renderRowFilterTable() {
    const filterText = rowFilterSearchInput.value.toLowerCase();
    const filteredRowsIndices = [];
    tempRowFilters.forEach((item, index) => {
        const p = (item && item.pattern) ? item.pattern : '';
        if (p.toLowerCase().includes(filterText)) {
            filteredRowsIndices.push(index);
        }
    });

    let html = '';
    filteredRowsIndices.forEach(originalIndex => {
        const rule = tempRowFilters[originalIndex];
        const pattern = rule.pattern || '';
        const currentAction = rule.action || 'hide';
        const currentColor = rule.color || '#ffff00';

        const isHighlight = currentAction === 'highlight';

        const listAttr = pattern.length >= 3 ? 'list="longDescSuggestions"' : '';
        const safePattern = pattern.replace(/"/g, '&quot;');

        html += `
            <tr>
                <td>
                    <input type="text" class="dict-input" value="${safePattern}" 
                           ${listAttr}
                           oninput="handleRowFilterInput(${originalIndex}, this)"
                           onchange="updateRowFilterPattern(${originalIndex}, this.value)" 
                           placeholder="Stringa da cercare...">
                </td>
                <td>
                    <div style="display: flex; gap: 8px; align-items: center;">
                        <select class="action-select" style="flex: 1;" onchange="updateRowFilterAction(${originalIndex}, this.value)">
                            <option value="hide" ${currentAction === 'hide' ? 'selected' : ''}>🚫 Nascondi</option>
                            <option value="highlight" ${currentAction === 'highlight' ? 'selected' : ''}>🎨 Colora</option>
                        </select>
                        <input type="color" class="color-picker-input" value="${currentColor}" 
                               ${!isHighlight ? 'style="display:none"' : ''}
                               onchange="updateRowFilterColor(${originalIndex}, this.value)">
                    </div>
                </td>
                <td style="text-align: center;">
                    <button class="btn icon-btn danger-hover" onclick="removeRowFilter(${originalIndex})" title="Rimuovi riga">🗑</button>
                </td>
            </tr>
        `;
    });
    rowFilterTableBody.innerHTML = html;
}

window.handleRowFilterInput = function (index, inputElement) {
    const newVal = inputElement.value;
    window.updateRowFilterPattern(index, newVal);

    if (newVal.length >= 3) {
        if (!inputElement.hasAttribute('list')) {
            inputElement.setAttribute('list', 'longDescSuggestions');
        }
    } else {
        if (inputElement.hasAttribute('list')) {
            inputElement.removeAttribute('list');
        }
    }
};

window.updateRowFilterAction = function (index, newVal) {
    if (tempRowFilters[index]) {
        tempRowFilters[index].action = newVal;
        renderRowFilterTable(); // Re-render to show/hide color picker
    }
};

window.updateRowFilterPattern = function (index, newVal) {
    if (tempRowFilters[index]) {
        tempRowFilters[index].pattern = newVal;
    }
};

window.updateRowFilterColor = function (index, newVal) {
    if (tempRowFilters[index]) {
        tempRowFilters[index].color = newVal;
    }
};

window.removeRowFilter = function (index) {
    tempRowFilters.splice(index, 1);
    renderRowFilterTable();
};

function addRowFilter() {
    tempRowFilters.push({ pattern: '', action: 'hide', color: '#ffff00' });
    renderRowFilterTable();
}

function saveRowFiltersChanges() {
    currentRowFilters = [...tempRowFilters];
    saveRowFiltersToStorage();
    closeRowFilterModal();
    refreshRowFilteringAndGrid();
}

function exportRowFilters() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentRowFilters, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "row_filters_export.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function importRowFilters(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
        try {
            const imported = JSON.parse(event.target.result);
            if (imported && Array.isArray(imported)) {
                imported.forEach(item => {
                    if (typeof item === 'string') {
                        tempRowFilters.push({ pattern: item.trim(), action: 'hide' });
                    } else if (item && item.pattern) {
                        tempRowFilters.push(item);
                    }
                });
                renderRowFilterTable();
                alert("Filtri riga importati. Premi \"Salva e Applica\" per confermare.");
            } else {
                alert("Il file non contiene un formato valido per i filtri riga.");
            }
        } catch (err) {
            alert("Errore durante l'importazione dei filtri riga.");
        }
    };
    reader.readAsText(file);
    e.target.value = ''; // Reset
}

// --- Export Grid Data ---
function exportGridData() {
    if (!gridApi) {
        alert("Nessun dato caricato da esportare.");
        return;
    }

    if (typeof XLSX === 'undefined') {
        alert("Errore: Libreria Excel (SheetJS) non caricata.");
        return;
    }

    const exportData = [];
    const visibleCols = gridApi.getAllDisplayedColumns();
    const headers = visibleCols.map(col => {
        let colDef = col.getColDef();
        return colDef.headerName || colDef.field;
    });

    exportData.push(headers);

    gridApi.forEachNodeAfterFilterAndSort(node => {
        if (node.data) {
            const rowData = [];
            visibleCols.forEach(col => {
                let colDef = col.getColDef();
                let field = colDef.field;
                let cellValue = node.data[field];

                if (colDef.valueFormatter) {
                    try {
                        cellValue = colDef.valueFormatter({ value: cellValue, data: node.data, node: node, colDef: colDef });
                    } catch (e) {
                        // Fallback al valore grezzo in caso di errore
                    }
                }

                rowData.push(cellValue !== undefined && cellValue !== null ? cellValue : "");
            });
            exportData.push(rowData);
        }
    });

    const ws = XLSX.utils.aoa_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Diagnostica");

    const today = new Date().toISOString().slice(0, 10);
    XLSX.writeFile(wb, `export_tabella_${today}.xlsx`);
}
