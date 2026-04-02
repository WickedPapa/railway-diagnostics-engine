# Railway Diagnostics Engine / CSV Preset Manager

## Descrizione
Un'applicazione web avanzata e scalabile per gestire ed esplorare file CSV complessi, originariamente pensata per l'analisi diagnostica ferroviaria e dataset con centinaia di colonne. Lo strumento si basa sul concetto di **Preset e Dizionari** per filtrare le informazioni, rinominare colonne tramite alias e ordinarle secondo logiche personalizzate, garantendo alte prestazioni nel rendering tramite AG Grid.

## Funzionalità Principali
- **Caricamento Client-Side (Zero-Server):** Parsing massiccio e rapido tramite *PapaParse*, tutto interamente nel browser. Nessun dato lascia il tuo computer, garantendo la privacy e superando i limiti di caricamento.
- **Configurazione Globale (`config.js`):** Modularità completa. Titolo dell'applicazione modificabile (`APP_TITLE`), colonne lockate e obbligatorie (`MANDATORY_COLUMNS`) ed evidenziazione dei cambiamenti (`DEFAULT_HIGHLIGHT_CHANGES`) tutto governato dal file `config.js`.
- **Gestore Dizionario (Alias e Ordinamento):**
  - Mappatura personalizzata tra il nome "grezzo" della colonna e un alias più leggibile (Tooltips intuitivi nell'header).
  - Ordinamenti multipli preimpostati (Es: Ordine Custom, Ordine Funzione, Ordine Apparato, Ordine Cabina).
- **Gestore Preset Visivi:**
  - Creazione, clonazione, modifica e e cancellazione di visti dati specializzati.
  - Assegnazione di un ordinamento di default ad ogni preset creato.
- **Gestore Blacklist (Esclusioni):** Nascondi in modo definitivo le colonne "rumorose" tramite un gestore di esclusioni dedicato, riducendo l'elenco delle variabili da gestire.
- **Importazione ed Esportazione:** Qualsiasi metadato creato (Preset, Dizionario, Blacklist) può essere esportato come file `JSON` e reimportato successivamente per garantire uniformità tra più operatori. Salva in automatico su `localStorage`.
- **Render Dati ad Alte Prestazioni:** Gestione affidata a *AG Grid*, con tooltips delle celle, filtri e ordinamento nativo e **highlight intelligente** della cella se il dato è variato rispetto al record precedente.

## Come Iniziare (Utilizzo)
L'applicazione è puramente statica (Vanilla HTML/CSS/JS).
1. Configura a tuo piacimento il file `config.js` (es. Titolo Applicazione).
2. Apri il file `index.html` all'interno di qualsiasi browser moderno (Chrome, Edge, Firefox).
3. Clicca su **"Carica CSV"** e seleziona il tuo file.
4. Utilizza i tasti rapidi:
   - 📖 **Dizionario**: per tradurre nomi colonne e assegnare pesi di ordinamento.
   - 🚫 **Esclusioni**: per inserire voci in blacklist globale.
   - **Nuovo Preset**: per creare viste per specifiche analisi di tracciati.
   - **JSON Import/Export**: per precaricare configurazioni.

## Architettura e Librerie
Nessuna *build step* necessaria. Tutti i CSS/JS dipendenti sono allocati staticamente in `/libs`.
- **Tecnologie core:** HTML5, CSS3, DOM ES6+ Vanilla
- **Ag Grid Community** (`/libs/ag-grid-community.min.js`)
- **PapaParse** (`/libs/papaparse.min.js`)