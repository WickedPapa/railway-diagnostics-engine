# CSV Explorer - Preset Manager

## Descrizione
Un'applicazione web per gestire ed esplorare file CSV, pensata per agevolare l'analisi di dataset complessi con centinaia di colonne. Lo strumento permette di creare **preset personalizzati** per la visualizzazione delle colonne, in modo da filtrare solo i dati necessari e semplificare l'esplorazione.

## Funzionalità Principali
- **Caricamento CSV Client-Side:** Parsing rapido interamente nel browser tramite *PapaParse*, senza necessità di inviare i dati a un server.
- **Gestione Avanzata Preset:**
  - Creazione, modifica ed eliminazione di preset di colonne.
  - Clonazione di preset esistenti per derivarne di nuovi più facilmente.
  - Importazione ed esportazione dei preset in formato JSON per condividerli o farne backup.
- **Tabella Interattiva Dati:** Rendering ad alte prestazioni tramite *AG Grid*, con supporto per ordinamento, ridimensionamento e visualizzazione di grandi moli di dati.
- **Interfaccia Utente Moderna:** Design curato con effetti "glassmorphism", feedback visivi, animazioni e tema scuro adatto per lunghe sessioni di analisi e monitoraggio dati.

## Come Iniziare (Utilizzo)
Essendo un'applicazione statica "zero-build", non è necessario alcun processo di installazione.
1. Clona o scarica il repository.
2. Apri il file `index.html` all'interno di un qualsiasi browser web moderno.
3. Clicca su **"Carica CSV"** e seleziona un file dati.
4. Usa i comandi sulla destra per creare un **Nuovo Preset**, scegliendo solo le colonne di tuo interesse.
5. Usa i pulsanti di Import/Export per lo scambio di configurazioni o basati semplicemente sul salvataggio automatico locale (tramite `localStorage`).

## Specifiche Tecniche e Librerie
Il progetto è sviluppato esclusivamente utilizzando tecnologie web standard per garantire la massima portabilità. Le librerie utilizzate sono incluse localmente nella cartella `libs/`:
- **HTML5 & Vanilla CSS**
- **Vanilla JavaScript (ES6+)**
- [AG Grid Community](https://www.ag-grid.com/) (`libs/ag-grid-community.min.js`)
- [PapaParse](https://www.papaparse.com/) (`libs/papaparse.min.js`)