const DEFAULT_DICTIONARY = [
  {
    "nome_colonna": "THING",
    "descrizione_custom": "VEH",
    "ordine_custom": 1,
    "ordine_funzione": 1,
    "ordine_apparato": 1,
    "ordine_cabina": 1
  },
  {
    "nome_colonna": "TIMESTAMP",
    "descrizione_custom": "TIMESTAMP",
    "ordine_custom": 2,
    "ordine_funzione": 2,
    "ordine_apparato": 2,
    "ordine_cabina": 2
  },
  {
    "nome_colonna": "SOURCE",
    "descrizione_custom": "SORGENTE",
    "ordine_custom": 3,
    "ordine_funzione": 3,
    "ordine_apparato": 3,
    "ordine_cabina": 3
  },
  {
    "nome_colonna": "LONG_DESCRIPTION",
    "descrizione_custom": "DESCRIZIONE",
    "ordine_custom": 4,
    "ordine_funzione": 4,
    "ordine_apparato": 4,
    "ordine_cabina": 4
  },
  {
    "nome_colonna": "TSTAMP",
    "descrizione_custom": "TSTAMP",
    "ordine_custom": 5,
    "ordine_funzione": 5,
    "ordine_apparato": 5,
    "ordine_cabina": 5
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IAOIKSTATUS",
    "descrizione_dmms": "Status of the three phases line contactor (1=close",
    "descrizione_custom": "ACE1:Contattore Linea Trifase",
    "ordine_custom": 338,
    "ordine_funzione": 200,
    "ordine_apparato": 203
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IBATTCURR",
    "descrizione_dmms": "DC battery current (1A/bit)",
    "descrizione_custom": "ACE1:DC Corrente batteria",
    "ordine_custom": 358,
    "ordine_funzione": 202,
    "ordine_apparato": 208
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 831
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IEVTPOWERISOLREQ",
    "descrizione_dmms": "Power isolation received",
    "descrizione_custom": "ACE1:Arresto CVS Attivo",
    "ordine_custom": 328,
    "ordine_funzione": 204,
    "ordine_apparato": 202
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IFAN1STATUS",
    "descrizione_dmms": "Status of the Fan 1 contactor (1=closed)",
    "descrizione_custom": "ACE1:Alimentazione VENTOLA 1",
    "ordine_custom": 342,
    "ordine_funzione": 206,
    "ordine_apparato": 200
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IFAN2STATUS",
    "descrizione_dmms": "Status of the Fan 2 contactor (1=closed)",
    "descrizione_custom": "ACE2:Alimentazione VENTOLA 2",
    "ordine_custom": 345,
    "ordine_funzione": 209,
    "ordine_apparato": 222
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVCURR",
    "descrizione_dmms": "SIV input current (1A/bit)",
    "descrizione_custom": "ACE1:Corrente In SIV  ",
    "ordine_custom": 330,
    "ordine_funzione": 210,
    "ordine_apparato": 207
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVMODE",
    "descrizione_dmms": "ACE is in normal main mode (1 = normal mode active",
    "descrizione_custom": "ACE1:HVMODE Active",
    "ordine_custom": 326,
    "ordine_funzione": 212,
    "ordine_apparato": 209
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVVOLT",
    "descrizione_dmms": "SIV input voltage (1V/bit)",
    "descrizione_custom": "ACE1:Tensione In SIV  ",
    "ordine_custom": 332,
    "ordine_funzione": 214,
    "ordine_apparato": 214
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVCURR",
    "descrizione_dmms": "Output total DC current (1A/bit)",
    "descrizione_custom": "ACE1:Uscita totale corrente DC ",
    "ordine_custom": 360,
    "ordine_funzione": 216,
    "ordine_apparato": 217
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVOK",
    "descrizione_dmms": "LV status OK",
    "descrizione_custom": "ACE1:LVOK",
    "ordine_custom": 334,
    "ordine_funzione": 218,
    "ordine_apparato": 210
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVVOLT",
    "descrizione_dmms": "Battery voltage (1V/bit)",
    "descrizione_custom": "ACE1:Voltaggio Batteria ",
    "ordine_custom": 356,
    "ordine_funzione": 220,
    "ordine_apparato": 218
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IMVOK",
    "descrizione_dmms": "MV status OK",
    "descrizione_custom": "ACE1:MVOK",
    "ordine_custom": 336,
    "ordine_funzione": 224,
    "ordine_apparato": 211
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IREVMODE",
    "descrizione_dmms": "ACE is in reversible main mode (1 = reversible)",
    "descrizione_custom": "ACE1:Reverse Mode",
    "ordine_custom": 324,
    "ordine_funzione": 226,
    "ordine_apparato": 212
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRMVCURR",
    "descrizione_dmms": "Phase R output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase R",
    "ordine_custom": 346,
    "ordine_funzione": 228,
    "ordine_apparato": 204
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRSMVVOLT",
    "descrizione_dmms": "Voltage between phase R and S (1Vrms/bit)",
    "descrizione_custom": "ACE1:Tensione R",
    "ordine_custom": 352,
    "ordine_funzione": 230,
    "ordine_apparato": 215
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRTMVVOLT",
    "descrizione_dmms": "Voltage between phase R and T (1Vrms/bit)",
    "descrizione_custom": "ACE1:Tensione T ",
    "ordine_custom": 354,
    "ordine_funzione": 232,
    "ordine_apparato": 216
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ISMVCURR",
    "descrizione_dmms": "Phase S output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase S ",
    "ordine_custom": 348,
    "ordine_funzione": 234,
    "ordine_apparato": 205
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ITMVCURR",
    "descrizione_dmms": "Phase T output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase T ",
    "ordine_custom": 350,
    "ordine_funzione": 236,
    "ordine_apparato": 206
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IAOIKSTATUS",
    "descrizione_dmms": "Status of the three phases line contactor (1=close",
    "descrizione_custom": "ACE2: Contattore Linea Trifase",
    "ordine_custom": 339,
    "ordine_funzione": 201,
    "ordine_apparato": 219
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IBATTCURR",
    "descrizione_dmms": "DC battery current (1A/bit)",
    "descrizione_custom": "ACE2:Corrente batteria",
    "ordine_custom": 359,
    "ordine_funzione": 203,
    "ordine_apparato": 224
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 832
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IEVTPOWERISOLREQ",
    "descrizione_dmms": "Power isolation received",
    "descrizione_custom": "ACE2:Arresto CVS Attivo",
    "ordine_custom": 329,
    "ordine_funzione": 205,
    "ordine_apparato": 223
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IFAN1STATUS",
    "descrizione_dmms": "Status of the Fan 1 contactor (1=closed)",
    "descrizione_custom": "ACE2:Alimentazione VENTOLA 1",
    "ordine_custom": 343,
    "ordine_funzione": 207,
    "ordine_apparato": 221
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IFAN2STATUS",
    "descrizione_dmms": "Status of the Fan 2 contactor (1=closed)",
    "descrizione_custom": "ACE1:Alimentazione VENTOLA 2",
    "ordine_custom": 344,
    "ordine_funzione": 208,
    "ordine_apparato": 201
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVCURR",
    "descrizione_dmms": "SIV input current (1A/bit)",
    "descrizione_custom": "ACE2:Corrente In SIV  ",
    "ordine_custom": 331,
    "ordine_funzione": 211,
    "ordine_apparato": 228
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVMODE",
    "descrizione_dmms": "ACE is in normal main mode (1 = normal mode active",
    "descrizione_custom": "ACE2:HVMODE Active",
    "ordine_custom": 327,
    "ordine_funzione": 213,
    "ordine_apparato": 229
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVVOLT",
    "descrizione_dmms": "SIV input voltage (1V/bit)",
    "descrizione_custom": "ACE2:Tensione In SIV  ",
    "ordine_custom": 333,
    "ordine_funzione": 215,
    "ordine_apparato": 233
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVCURR",
    "descrizione_dmms": "Output total DC current (1A/bit)",
    "descrizione_custom": "ACE2:Uscita totale corrente DC ",
    "ordine_custom": 361,
    "ordine_funzione": 217,
    "ordine_apparato": 236
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVOK",
    "descrizione_dmms": "LV status OK",
    "descrizione_custom": "ACE2:LVOK",
    "ordine_custom": 335,
    "ordine_funzione": 219,
    "ordine_apparato": 230
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVVOLT",
    "descrizione_dmms": "Battery voltage (1V/bit)",
    "descrizione_custom": "ACE2:Voltaggio Batteria ",
    "ordine_custom": 357,
    "ordine_funzione": 221,
    "ordine_apparato": 237
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IMVOK",
    "descrizione_dmms": "MV status OK",
    "descrizione_custom": "ACE2:MVOK",
    "ordine_custom": 337,
    "ordine_funzione": 225,
    "ordine_apparato": 231
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IREVMODE",
    "descrizione_dmms": "ACE is in reversible main mode (1 = reversible)",
    "descrizione_custom": "ACE2:Reverse Mode",
    "ordine_custom": 325,
    "ordine_funzione": 227,
    "ordine_apparato": 232
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRMVCURR",
    "descrizione_dmms": "Phase R output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase R",
    "ordine_custom": 347,
    "ordine_funzione": 229,
    "ordine_apparato": 225
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRSMVVOLT",
    "descrizione_dmms": "Voltage between phase R and S (1Vrms/bit)",
    "descrizione_custom": "ACE2:Tensione R",
    "ordine_custom": 353,
    "ordine_funzione": 231,
    "ordine_apparato": 234
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRTMVVOLT",
    "descrizione_dmms": "Voltage between phase R and T (1Vrms/bit)",
    "descrizione_custom": "ACE2:Tensione T",
    "ordine_custom": 355,
    "ordine_funzione": 233,
    "ordine_apparato": 235
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ISMVCURR",
    "descrizione_dmms": "Phase S output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase S ",
    "ordine_custom": 349,
    "ordine_funzione": 235,
    "ordine_apparato": 226
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ITMVCURR",
    "descrizione_dmms": "Phase T output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase T ",
    "ordine_custom": 351,
    "ordine_funzione": 237,
    "ordine_apparato": 227
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBCUSBM",
    "descrizione_dmms": "1:SBM active (master) 0:SBM not active (\"hot...\"",
    "descrizione_custom": "BCE1: Master",
    "ordine_custom": 419
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPISOLN11P05",
    "descrizione_dmms": "I/O bus mirror:BP isolation valve feedback (BI_BP",
    "descrizione_custom": "BCE1:mirror:BP isolation valve feedback (BI_BPIsol_N11.05)",
    "ordine_custom": 420
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPISOLN11P06",
    "descrizione_dmms": "I/O bus mirror:BP isolation command (RO_BPIsol_N1",
    "descrizione_custom": "BCE1:mirror:BP isolation command (RO_BPIsol_N11.06)",
    "ordine_custom": 421
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Brake Pipe pressure",
    "descrizione_custom": "BCE1:CG Locale",
    "ordine_custom": 422
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBRAKINGL",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Braking_L",
    "descrizione_custom": "BCE1:TL Braking_L",
    "ordine_custom": 423
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICABENABLED",
    "descrizione_dmms": "I/O bus mirror:Desk enable (BI_CabEnabled):0 = n",
    "descrizione_custom": "BCE1:mirror:Cabina H1 Attiva",
    "ordine_custom": 424
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICABNEUTRALISED",
    "descrizione_dmms": "I/O bus mirror:One cab already active in train (T",
    "descrizione_custom": "BCE1:mirror:One cab already active in train (TL_CabNeutralised)",
    "ordine_custom": 425
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE1:Pressione frenatura asse 1",
    "ordine_custom": 426
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE1:Pressione frenatura asse 2",
    "ordine_custom": 427
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 833
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDOORSBLOCKED",
    "descrizione_dmms": "I/O bus mirror:Door status closed and locked (TL_",
    "descrizione_custom": "BCE1:TL Stato Porte Chiuse e Bloccate",
    "ordine_custom": 428,
    "ordine_funzione": 510,
    "ordine_apparato": 500
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDOORSRELEASEDL",
    "descrizione_dmms": "I/O bus mirror:Door status released (TL_DoorsRele",
    "descrizione_custom": "BCE1:TL Stato Porte Rilasciate_L",
    "ordine_custom": 429,
    "ordine_funzione": 513,
    "ordine_apparato": 503
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IEMERGENCYL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 834
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE1:Freno a Frizione Applicato",
    "ordine_custom": 430
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE1:Holding Brake Attivo",
    "ordine_custom": 431
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICBPTEST",
    "descrizione_dmms": "I/O bus mirror:Brake pipe test EV isolation Cock:",
    "descrizione_custom": "BCE1:I/O bus mirror:Brake pipe test EV isolation Cock:0 = cock closed 1 = cock open",
    "ordine_custom": 432
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICISOLN11P09",
    "descrizione_dmms": "I/O bus mirror:BP isolation EV by-pass (IC_Isol_N",
    "descrizione_custom": "BCE1:mirror:BP isolation EV by-pass (IC_Isol_N11.09)",
    "ordine_custom": 433
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICISOLN11P20",
    "descrizione_dmms": "I/O bus mirror:BP Ctrl module Isolation Cock (IC_",
    "descrizione_custom": "BCE1:mirror:BP Ctrl module Isolation Cock (IC_Isol_N11.20)",
    "ordine_custom": 434
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICSANDING",
    "descrizione_dmms": "I/O bus mirror:Sanding module isolation cock:0",
    "descrizione_custom": "BCE1:I/O bus mirror:Sanding module isolation cock:0 = cock closed 1 = cock open",
    "ordine_custom": 435
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE1:Pressione sospensione  H1 mot 02.08",
    "ordine_custom": 436
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMAJORFAULTLIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status BI_Major_Fault_L",
    "descrizione_custom": "BCE1:TL MJF IN",
    "ordine_custom": 437
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE1:TL MJF OUT",
    "ordine_custom": 438
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Main Pipe pressure",
    "descrizione_custom": "BCE1:CP Locale",
    "ordine_custom": 439
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPASLOOP",
    "descrizione_dmms": "I/O bus mirror:PAS train loop (TL_PAS_Loop)",
    "descrizione_custom": "BCE1:TL PAS",
    "ordine_custom": 440
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLIED",
    "descrizione_dmms": "Parking Brake status:Parking Brake applied (1 = a",
    "descrizione_custom": "BCE1:Stato FAM",
    "ordine_custom": 441,
    "ordine_funzione": 404,
    "ordine_apparato": 412
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLY2OUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE1:2° Comando FAM",
    "ordine_custom": 442,
    "ordine_funzione": 401,
    "ordine_apparato": 414
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLYIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.21",
    "descrizione_custom": "BCE1:FAM Applicato",
    "ordine_custom": 443,
    "ordine_funzione": 402,
    "ordine_apparato": 416
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLYOUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE1:1° Comando FAM",
    "ordine_custom": 444,
    "ordine_funzione": 400,
    "ordine_apparato": 418
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBRELEASEIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.22",
    "descrizione_custom": "BCE1:FAM Rilasciato",
    "ordine_custom": 445,
    "ordine_funzione": 403,
    "ordine_apparato": 420
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPEBOVERRIDE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 835
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE1:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 446
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ISPEEDAXLE1",
    "descrizione_dmms": "WSP Status:Speed of axle 1 connected to EBCU",
    "descrizione_custom": "BCE1:Velocità asse1",
    "ordine_custom": 447
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ISTOPPINGACTIVE",
    "descrizione_dmms": "Stopping brake (ED fade-out) activated",
    "descrizione_custom": "BCE1:Freno di arresto (ED dissolvenza in uscita) attivato",
    "ordine_custom": 448
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ITBMBTMSG",
    "descrizione_dmms": "Encoded BT command to be used by TCMS to show driv",
    "descrizione_custom": "BCE1:Encoded BT command to be used by TCMS to show driver messages regarding steps",
    "ordine_custom": 449
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ITRACTION",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Traction",
    "descrizione_custom": "BCE1:TL Traction",
    "ordine_custom": 450
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE1:Segnale velocità 0",
    "ordine_custom": 451
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBCUSBM",
    "descrizione_dmms": "1:SBM active (master) 0:SBM not active (\"hot...\"",
    "descrizione_custom": "BCE2: Master",
    "ordine_custom": 452
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPISOLN11P05",
    "descrizione_dmms": "I/O bus mirror:BP isolation valve feedback (BI_BP",
    "descrizione_custom": "BCE2:mirror:BP isolation valve feedback (BI_BPIsol_N11.05)",
    "ordine_custom": 453
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPISOLN11P06",
    "descrizione_dmms": "I/O bus mirror:BP isolation command (RO_BPIsol_N1",
    "descrizione_custom": "BCE2:mirror:BP isolation command (RO_BPIsol_N11.06)",
    "ordine_custom": 454
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Brake Pipe pressure",
    "descrizione_custom": "BCE2:CG Locale",
    "ordine_custom": 455
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBRAKINGL",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Braking_L",
    "descrizione_custom": "BCE2:TL Braking_L",
    "ordine_custom": 456
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICABENABLED",
    "descrizione_dmms": "I/O bus mirror:Desk enable (BI_CabEnabled):0 = n",
    "descrizione_custom": "BCE2:mirror:Cabina H2 Attiva",
    "ordine_custom": 457
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICABNEUTRALISED",
    "descrizione_dmms": "I/O bus mirror:One cab already active in train (T",
    "descrizione_custom": "BCE2:mirror:One cab already active in train (TL_CabNeutralised)",
    "ordine_custom": 458
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE2:Pressione frenatura asse 1",
    "ordine_custom": 459
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE3:Pressione frenatura asse 2",
    "ordine_custom": 460
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 836
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDOORSBLOCKED",
    "descrizione_dmms": "I/O bus mirror:Door status closed and locked (TL_",
    "descrizione_custom": "BCE2:TL Stato Porte Chiuse e Bloccate",
    "ordine_custom": 461,
    "ordine_funzione": 511,
    "ordine_apparato": 502
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDOORSRELEASEDL",
    "descrizione_dmms": "I/O bus mirror:Door status released (TL_DoorsRele",
    "descrizione_custom": "BCE1:TL Stato Porte Rilasciate_L",
    "ordine_custom": 462,
    "ordine_funzione": 512,
    "ordine_apparato": 501
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IEMERGENCYL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 837
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE2:Freno a Frizione Applicato",
    "ordine_custom": 463
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE2:Holding Brake Attivo",
    "ordine_custom": 464
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICBPTEST",
    "descrizione_dmms": "I/O bus mirror:Brake pipe test EV isolation Cock:",
    "descrizione_custom": "BCE2:I/O bus mirror:Brake pipe test EV isolation Cock:0 = cock closed 1 = cock open",
    "ordine_custom": 465
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICISOLN11P09",
    "descrizione_dmms": "I/O bus mirror:BP isolation EV by-pass (IC_Isol_N",
    "descrizione_custom": "BCE2:mirror:BP isolation EV by-pass (IC_Isol_N11.09)",
    "ordine_custom": 466
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICISOLN11P20",
    "descrizione_dmms": "I/O bus mirror:BP Ctrl module Isolation Cock (IC_",
    "descrizione_custom": "BCE2:mirror:BP Ctrl module Isolation Cock (IC_Isol_N11.20=",
    "ordine_custom": 467
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICSANDING",
    "descrizione_dmms": "I/O bus mirror:Sanding module isolation cock:0",
    "descrizione_custom": "BCE2:I/O bus mirror:Sanding module isolation cock:0 = cock closed 1 = cock open",
    "ordine_custom": 468
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE2:Pressione sospensione  H2 mot 02.08",
    "ordine_custom": 469
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMAJORFAULTLIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status BI_Major_Fault_L",
    "descrizione_custom": "BCE2:TL MJF IN",
    "ordine_custom": 470
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE2:TL MJF OUT",
    "ordine_custom": 471
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Main Pipe pressure",
    "descrizione_custom": "BCE2:CP Locale",
    "ordine_custom": 472
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPASLOOP",
    "descrizione_dmms": "I/O bus mirror:PAS train loop (TL_PAS_Loop)",
    "descrizione_custom": "BCE2:TL PAS",
    "ordine_custom": 473
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLIED",
    "descrizione_dmms": "Parking Brake status:Parking Brake applied (1 = a",
    "descrizione_custom": "BCE2:Stato FAM",
    "ordine_custom": 474,
    "ordine_funzione": 409,
    "ordine_apparato": 413
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLY2OUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE2:2° Comando FAM",
    "ordine_custom": 475,
    "ordine_funzione": 406,
    "ordine_apparato": 415
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLYIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.21",
    "descrizione_custom": "BCE2:FAM Applicato",
    "ordine_custom": 476,
    "ordine_funzione": 407,
    "ordine_apparato": 417
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLYOUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE2:1° Comando FAM",
    "ordine_custom": 477,
    "ordine_funzione": 405,
    "ordine_apparato": 419
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBRELEASEIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.22",
    "descrizione_custom": "BCE2:FAM Rilasciato",
    "ordine_custom": 478,
    "ordine_funzione": 408,
    "ordine_apparato": 421
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPEBOVERRIDE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 838
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE2:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 479
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ISPEEDAXLE1",
    "descrizione_dmms": "WSP Status:Speed of axle 1 connected to EBCU",
    "descrizione_custom": "BCE2:Velocità asse2",
    "ordine_custom": 480
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ISTOPPINGACTIVE",
    "descrizione_dmms": "Stopping brake (ED fade-out) activated",
    "descrizione_custom": "BCE2:Freno di arresto (ED dissolvenza in uscita) attivato",
    "ordine_custom": 481
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ITBMBTMSG",
    "descrizione_dmms": "Encoded BT command to be used by TCMS to show driv",
    "descrizione_custom": "BCE2:Encoded BT command to be used by TCMS to show driver messages regarding steps",
    "ordine_custom": 482
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ITRACTION",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Traction",
    "descrizione_custom": "BCE2:TL Traction",
    "ordine_custom": 483
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE2:Segnale velocità 0",
    "ordine_custom": 484
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE3:Pressione frenatura asse 1",
    "ordine_custom": 485
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE3:Pressione frenatura asse 2",
    "ordine_custom": 486
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 839
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE3:Freno a Frizione Applicato",
    "ordine_custom": 487
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE3:Holding Brake Attivo",
    "ordine_custom": 488
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE3:Pressione sospensione  H1 port 02.08",
    "ordine_custom": 489
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE3:TL MJF OUT",
    "ordine_custom": 490
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE3:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 491
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE3:Segnale velocità 0",
    "ordine_custom": 492
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE4:Pressione frenatura asse 1",
    "ordine_custom": 493
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE4:Pressione frenatura asse 2",
    "ordine_custom": 494
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 840
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE4:Freno a Frizione Applicato",
    "ordine_custom": 495
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE4:Holding Brake Attivo",
    "ordine_custom": 496
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE4:Pressione sospensione  H2 port 02.08",
    "ordine_custom": 497
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE4:TL MJF OUT",
    "ordine_custom": 498
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE4:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 499
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE4:Segnale velocità 0",
    "ordine_custom": 500
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE5:Pressione frenatura asse 1",
    "ordine_custom": 501
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE5:Pressione frenatura asse 2",
    "ordine_custom": 502
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 841
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE5:Freno a Frizione Applicato",
    "ordine_custom": 503
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE5:Holding Brake Attivo",
    "ordine_custom": 504
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE5:Pressione sospensione  M2 port 02.08",
    "ordine_custom": 505
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE5:TL MJF OUT",
    "ordine_custom": 506
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE5:Modalità di Soccorso/Recupero Treno ( 74S08)",
    "ordine_custom": 507
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE5:Segnale velocità 0",
    "ordine_custom": 508
  },
  {
    "nome_colonna": "S_DBX_TSTAMP",
    "descrizione_dmms": "timestamp di acquisizione",
    "descrizione_custom": "",
    "ordine_custom": 753
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ICREWZACTD_H1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU1-H1:Crew Switch Azionato",
    "ordine_custom": 509,
    "ordine_funzione": 514,
    "ordine_apparato": 515
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 842
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORISOL_H1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU1-H1:Isolamento P/G/E",
    "ordine_custom": 511,
    "ordine_apparato": 520
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORLOCKED_H1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU1-H1:Porta Chiusa e Bloccata",
    "ordine_custom": 512,
    "ordine_apparato": 521
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORPOS_H1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU1-H1:Posizione Porta (%) [1 SX]",
    "ordine_custom": 513,
    "ordine_apparato": 522
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDRSRELEASED_H1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU1-H1:Door Released",
    "ordine_custom": 514,
    "ordine_apparato": 516
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IEADACT_H1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU4-M1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 515,
    "ordine_apparato": 615
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IEEDACT_H1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU1-H1:Attivazione emergenza IN/OUT",
    "ordine_custom": 516,
    "ordine_apparato": 514
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IRQREMDRSCLS_H1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU1-H1:Richiesta telechiusura locale",
    "ordine_custom": 517,
    "ordine_apparato": 524
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISFTYRLYACTD_H1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU1-H1:Relè Interlock Trazione Attivo",
    "ordine_custom": 518,
    "ordine_apparato": 523
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPAISOLD_H1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU1-H1:Gradino isolato",
    "ordine_custom": 519,
    "ordine_apparato": 519
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPALOCKED_H1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU1-H1:Gradino Chiuso e bloccato",
    "ordine_custom": 520,
    "ordine_apparato": 518
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPAPOS_H1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU1-H1:Step A position (in mm) ",
    "ordine_custom": 521,
    "ordine_apparato": 527
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IZVINPUT_H1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU1-H1:Segnale velocità 0",
    "ordine_custom": 522,
    "ordine_apparato": 525
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ICREWZACTD_M2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU1-M2:Crew Switch Azionato",
    "ordine_custom": 523,
    "ordine_apparato": 529
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 843
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORISOL_M2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU1-M2:Isolamento P/G/E",
    "ordine_custom": 525,
    "ordine_apparato": 534
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORLOCKED_M2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU1-M2:Porta Chiusa e Bloccata",
    "ordine_custom": 526,
    "ordine_apparato": 535
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORPOS_M2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU1-M2:Posizione Porta (%) [3 SX]",
    "ordine_custom": 527,
    "ordine_apparato": 536
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDRSRELEASED_M2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU1-M2:Door Released",
    "ordine_custom": 528,
    "ordine_apparato": 530
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IEADACT_M2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU2-M2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 529,
    "ordine_apparato": 559
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IEEDACT_M2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU1-M2:Attivazione emergenza IN/OUT",
    "ordine_custom": 530,
    "ordine_apparato": 528
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IRQREMDRSCLS_M2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU1-M2:Richiesta telechiusura locale",
    "ordine_custom": 531,
    "ordine_apparato": 538
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISFTYRLYACTD_M2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU1-M2:Relè Interlock Trazione Attivo",
    "ordine_custom": 532,
    "ordine_apparato": 537
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPAISOLD_M2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU1-M2:Gradino isolato",
    "ordine_custom": 533,
    "ordine_apparato": 533
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPALOCKED_M2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU1-M2:Gradino Chiuso e bloccato",
    "ordine_custom": 534,
    "ordine_apparato": 532
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPAPOS_M2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU1-M2:step A position (in mm) ",
    "ordine_custom": 535,
    "ordine_apparato": 541
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IZVINPUT_M2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU1-M2:Segnale velocità 0",
    "ordine_custom": 536,
    "ordine_apparato": 539
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ICREWZACTD_H1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU2-H1:Crew Switch Azionato",
    "ordine_custom": 537,
    "ordine_funzione": 515,
    "ordine_apparato": 543
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 844
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORISOL_H1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU2-H1:Isolamento P/G/E",
    "ordine_custom": 539,
    "ordine_apparato": 548
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORLOCKED_H1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU2-H1:Porta Chiusa e Bloccata",
    "ordine_custom": 540,
    "ordine_apparato": 549
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORPOS_H1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU2-H1:Posizione Porta (%) [1 DX]",
    "ordine_custom": 541,
    "ordine_apparato": 550
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDRSRELEASED_H1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU2-H1:Door Released",
    "ordine_custom": 542,
    "ordine_apparato": 544
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IEADACT_H1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU2-H1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 543,
    "ordine_apparato": 545
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IEEDACT_H1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU2-H1:Attivazione emergenza IN/OUT",
    "ordine_custom": 544,
    "ordine_apparato": 542
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IRQREMDRSCLS_H1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU2-H1:Richiesta telechiusura locale",
    "ordine_custom": 545,
    "ordine_apparato": 552
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISFTYRLYACTD_H1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU2-H1:Relè Interlock Trazione Attivo",
    "ordine_custom": 546,
    "ordine_apparato": 551
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPAISOLD_H1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU2-H1:Gradino isolato",
    "ordine_custom": 547,
    "ordine_apparato": 547
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPALOCKED_H1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU2-H1:Gradino Chiuso e bloccato",
    "ordine_custom": 548,
    "ordine_apparato": 546
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPAPOS_H1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU2-H1:Step A position (in mm) ",
    "ordine_custom": 549,
    "ordine_apparato": 555
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IZVINPUT_H1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU2-H1:Segnale velocità 0",
    "ordine_custom": 550,
    "ordine_apparato": 553
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ICREWZACTD_M2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU2-M2:Crew Switch Azionato",
    "ordine_custom": 551,
    "ordine_apparato": 557
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 845
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORISOL_M2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU2-M2:Isolamento P/G/E",
    "ordine_custom": 553,
    "ordine_apparato": 562
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORLOCKED_M2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU2-M2:Porta Chiusa e Bloccata",
    "ordine_custom": 554,
    "ordine_apparato": 563
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORPOS_M2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU2-M2:Posizione Porta (%) [3 DX]",
    "ordine_custom": 555,
    "ordine_apparato": 564
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDRSRELEASED_M2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU2-M2:Door Released",
    "ordine_custom": 556,
    "ordine_apparato": 558
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IEADACT_M2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU4-H2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 557,
    "ordine_apparato": 601
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IEEDACT_M2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU2-M2:Attivazione emergenza IN/OUT",
    "ordine_custom": 558,
    "ordine_apparato": 556
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IRQREMDRSCLS_M2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU2-M2:Richiesta telechiusura locale",
    "ordine_custom": 559,
    "ordine_apparato": 566
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISFTYRLYACTD_M2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU2-M2:Relè Interlock Trazione Attivo",
    "ordine_custom": 560,
    "ordine_apparato": 565
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPAISOLD_M2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU2-M2:Gradino isolato",
    "ordine_custom": 561,
    "ordine_apparato": 561
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPALOCKED_M2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU2-M2:Gradino Chiuso e bloccato",
    "ordine_custom": 562,
    "ordine_apparato": 560
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPAPOS_M2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU2-M2:Step A position (in mm) ",
    "ordine_custom": 563,
    "ordine_apparato": 569
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IZVINPUT_M2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU2-M2:Segnale velocità 0",
    "ordine_custom": 564,
    "ordine_apparato": 567
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ICREWZACTD_H2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU3-H2:Crew Switch Azionato",
    "ordine_custom": 565,
    "ordine_funzione": 516,
    "ordine_apparato": 571
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 846
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORISOL_H2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU3-H2:Isolamento P/G/E",
    "ordine_custom": 567,
    "ordine_apparato": 576
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORLOCKED_H2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU3-H2:Porta Chiusa e Bloccata",
    "ordine_custom": 568,
    "ordine_apparato": 577
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORPOS_H2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU3-H2:Posizione Porta (%) [4 SX]",
    "ordine_custom": 569,
    "ordine_apparato": 578
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDRSRELEASED_H2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU3-H2:Door Released",
    "ordine_custom": 570,
    "ordine_apparato": 572
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IEADACT_H2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU3-M1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 571,
    "ordine_apparato": 587
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IEEDACT_H2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU3-H2:Attivazione emergenza IN/OUT",
    "ordine_custom": 572,
    "ordine_apparato": 570
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IRQREMDRSCLS_H2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU3-H2:Richiesta telechiusura locale",
    "ordine_custom": 573,
    "ordine_apparato": 580
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISFTYRLYACTD_H2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU3-H2:Relè Interlock Trazione Attivo",
    "ordine_custom": 574,
    "ordine_apparato": 579
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPAISOLD_H2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU3-H2:Gradino isolato",
    "ordine_custom": 575,
    "ordine_apparato": 575
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPALOCKED_H2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU3-H2:Gradino Chiuso e bloccato",
    "ordine_custom": 576,
    "ordine_apparato": 574
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPAPOS_H2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU3-H2:Step A position (in mm) ",
    "ordine_custom": 577,
    "ordine_apparato": 583
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IZVINPUT_H2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU3-H2:Segnale velocità 0",
    "ordine_custom": 578,
    "ordine_apparato": 581
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ICREWZACTD_M1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU3-M1:Crew Switch Azionato",
    "ordine_custom": 579,
    "ordine_funzione": 518,
    "ordine_apparato": 585
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 847
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORISOL_M1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU3-M1:Isolamento P/G/E",
    "ordine_custom": 581,
    "ordine_apparato": 590
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORLOCKED_M1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU3-M1:Porta Chiusa e Bloccata",
    "ordine_custom": 582,
    "ordine_apparato": 591
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORPOS_M1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU3-M1:Posizione Porta (%) [2 SX]",
    "ordine_custom": 583,
    "ordine_apparato": 592
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDRSRELEASED_M1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU3-M1:Door Released",
    "ordine_custom": 584,
    "ordine_apparato": 586
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IEADACT_M1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU1-M2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 585,
    "ordine_apparato": 531
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IEEDACT_M1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU3-M1:Attivazione emergenza IN/OUT",
    "ordine_custom": 586,
    "ordine_apparato": 584
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IRQREMDRSCLS_M1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU3-M1:Richiesta telechiusura locale",
    "ordine_custom": 587,
    "ordine_apparato": 594
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISFTYRLYACTD_M1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU3-M1:Relè Interlock Trazione Attivo",
    "ordine_custom": 588,
    "ordine_apparato": 593
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPAISOLD_M1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU3-M1:Gradino isolato",
    "ordine_custom": 589,
    "ordine_apparato": 589
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPALOCKED_M1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU3-M1:Gradino Chiuso e bloccato",
    "ordine_custom": 590,
    "ordine_apparato": 588
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPAPOS_M1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU3-M1:Step A position (in mm) ",
    "ordine_custom": 591,
    "ordine_apparato": 597
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IZVINPUT_M1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU3-M1:Segnale velocità 0",
    "ordine_custom": 592,
    "ordine_apparato": 595
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ICREWZACTD_H2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU4-H2:Crew Switch Azionato",
    "ordine_custom": 593,
    "ordine_funzione": 517,
    "ordine_apparato": 599
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 848
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORISOL_H2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU4-H2:Isolamento P/G/E",
    "ordine_custom": 595,
    "ordine_apparato": 604
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORLOCKED_H2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU4-H2:Porta Chiusa e Bloccata",
    "ordine_custom": 596,
    "ordine_apparato": 605
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORPOS_H2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU4-H2:Posizione Porta (%) [4 DX]",
    "ordine_custom": 597,
    "ordine_apparato": 606
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDRSRELEASED_H2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU4-H2:Door Released",
    "ordine_custom": 598,
    "ordine_apparato": 600
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IEADACT_H2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU1-H1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 599,
    "ordine_apparato": 517
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IEEDACT_H2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU4-H2:Attivazione emergenza IN/OUT",
    "ordine_custom": 600,
    "ordine_apparato": 598
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IRQREMDRSCLS_H2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU4-H2:Richiesta telechiusura locale",
    "ordine_custom": 601,
    "ordine_apparato": 608
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISFTYRLYACTD_H2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU4-H2:Relè Interlock Trazione Attivo",
    "ordine_custom": 602,
    "ordine_apparato": 607
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPAISOLD_H2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU4-H2:Gradino isolato",
    "ordine_custom": 603,
    "ordine_apparato": 603
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPALOCKED_H2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU4-H2:Gradino Chiuso e bloccato",
    "ordine_custom": 604,
    "ordine_apparato": 602
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPAPOS_H2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU4-H2:step A position (in mm) ",
    "ordine_custom": 605,
    "ordine_apparato": 611
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IZVINPUT_H2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU4-H2:Segnale velocità 0",
    "ordine_custom": 606,
    "ordine_apparato": 609
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ICREWZACTD_M1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU4-M1:Crew Switch Azionato",
    "ordine_custom": 607,
    "ordine_funzione": 519,
    "ordine_apparato": 613
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 849
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORISOL_M1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU4-M1:Isolamento P/G/E",
    "ordine_custom": 609,
    "ordine_apparato": 618
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORLOCKED_M1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU4-M1:Porta Chiusa e Bloccata",
    "ordine_custom": 610,
    "ordine_apparato": 619
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORPOS_M1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU4-M1:Posizione Porta (%) [2 DX]",
    "ordine_custom": 611,
    "ordine_apparato": 620
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDRSRELEASED_M1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU4-M1:Door Released",
    "ordine_custom": 612,
    "ordine_apparato": 614
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IEADACT_M1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU3-H2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 613,
    "ordine_apparato": 573
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IEEDACT_M1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU4-M1:Attivazione emergenza IN/OUT",
    "ordine_custom": 614,
    "ordine_apparato": 612
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IRQREMDRSCLS_M1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU4-M1:Richiesta telechiusura locale",
    "ordine_custom": 615,
    "ordine_apparato": 622
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISFTYRLYACTD_M1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU4-M1:Relè Interlock Trazione  Attivo",
    "ordine_custom": 616,
    "ordine_apparato": 621
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPAISOLD_M1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU4-M1:Gradino isolato",
    "ordine_custom": 617,
    "ordine_apparato": 617
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPALOCKED_M1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU4-M1:Gradino Chiuso e bloccato",
    "ordine_custom": 618,
    "ordine_apparato": 616
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPAPOS_M1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU4-M1:step A position (in mm) ",
    "ordine_custom": 619,
    "ordine_apparato": 625
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IZVINPUT_M1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU4-M1:Segnale velocità 0",
    "ordine_custom": 620,
    "ordine_apparato": 623
  },
  {
    "nome_colonna": "S_DDU1_DDU1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 850
  },
  {
    "nome_colonna": "S_DDU1_DDU1_IDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU1_IDRVCruiseControlSpeed",
    "descrizione_custom": "DDU1:Cruise Control Speed",
    "ordine_custom": 110
  },
  {
    "nome_colonna": "S_DDU2_DDU2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 851
  },
  {
    "nome_colonna": "S_DDU2_DDU2_IDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU2_IDRVCruiseControlSpeed",
    "descrizione_custom": "DDU2:Cruise Control Speed",
    "ordine_custom": 111
  },
  {
    "nome_colonna": "S_EME_EME_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 852
  },
  {
    "nome_colonna": "S_EME_EME_IEMF1INSTANTLINECURRENT",
    "descrizione_dmms": "Instant Line Current A/bit",
    "descrizione_custom": "EME:Corrente istantanea",
    "ordine_custom": 123
  },
  {
    "nome_colonna": "S_EME_EME_IEMF1INSTANTLINEVOLTAGE",
    "descrizione_dmms": "Instant Line Voltage 1V/bit",
    "descrizione_custom": "EME:Tensione istantanea",
    "ordine_custom": 125
  },
  {
    "nome_colonna": "S_ETD_H1_ETD1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 853
  },
  {
    "nome_colonna": "S_ETD_H1_RDDU1_IDEVISALIVERED",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 854
  },
  {
    "nome_colonna": "S_ETD_H2_ETD2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 855
  },
  {
    "nome_colonna": "S_ETD_H2_RDDU2_IDEVISALIVERED",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 856
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA1AUXRAW",
    "descrizione_dmms": "APU A1 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:APU AUX-CONV A1 CBM",
    "ordine_custom": 686,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA1TC1RAW",
    "descrizione_dmms": "APU A1 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:APU TC1 A1 CBM",
    "ordine_custom": 687,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA4AUXRAW",
    "descrizione_dmms": "APU A4 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:APU AUX-CONV A4 CBM",
    "ordine_custom": 688,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA4TC1RAW",
    "descrizione_dmms": "APU A4 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:APU TC1 A4 CBM",
    "ordine_custom": 689,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA1AUXST",
    "descrizione_dmms": "Aerosol A1 Auxiliary Converter Status 0 = Fault_S",
    "descrizione_custom": "FSD:Aerosol A1 Auxiliary Converter Status 0 = Fault_SC 1 = Safe 2 = Warning 3 = Released 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 690,
    "ordine_funzione": 300,
    "ordine_apparato": 300
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA1TC1ST",
    "descrizione_dmms": "Aerosol A1 Traction Converter 1 Status:0 = Fault_",
    "descrizione_custom": "FSD:Aerosol A1 Traction Converter 1 Status:0 = Fault_SC, 1 = Safe, 2 = Warning, 3 = Released, 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 684,
    "ordine_funzione": 301,
    "ordine_apparato": 301
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA4AUXST",
    "descrizione_dmms": "Aerosol A4 Auxiliary Converter Status:0 = Fault_S",
    "descrizione_custom": "FSD:Aerosol A4 Auxiliary Converter Status:0 = Fault_SC 1 = Safe 2 = Warning 3 = Released 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 691,
    "ordine_funzione": 302,
    "ordine_apparato": 302
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA4TC1ST",
    "descrizione_dmms": "Aerosol A4 Traction Converter 1 Status 0 = Fault_",
    "descrizione_custom": "FSD:Aerosol A4 Traction Converter 1 Status 0 = Fault_SC, 1 = Safe, 2 = Warning, 3 = Released, 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 685,
    "ordine_funzione": 303,
    "ordine_apparato": 303
  },
  {
    "nome_colonna": "S_FSD_FSD_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 857
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUPRESSRAW",
    "descrizione_dmms": "GPU Pressure Measure for CBM",
    "descrizione_custom": "FSD:GPU Pressure CBM",
    "ordine_custom": 693,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUPRESSST",
    "descrizione_dmms": "Gas Protection Unit Pressure Status:0 = OK 1 = F",
    "descrizione_custom": "FSD:GPU Pressure:0 = OK 1 = Fault low press 2 = Fault high pressure 3 = Fail Autotest 255 = Not available (AMC doesn't respond)",
    "ordine_custom": 694,
    "ordine_funzione": 304,
    "ordine_apparato": 307
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUSOLENOIDRAW",
    "descrizione_dmms": "GPU Solenoid valve Measure for CBM",
    "descrizione_custom": "FSD:GPU misura solenoide valvola scatto CBM",
    "ordine_custom": 695,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUSOLENOIDST",
    "descrizione_dmms": "GPU Solenoid Valve Status:0 = Fault_SC 1 = Low i",
    "descrizione_custom": "FSD:GPU Solenoid Valve:0 = Fault_SC 1 = Low impedance:2 = Safe 3 = High impedance 4 = Fault_OC 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 696,
    "ordine_funzione": 305,
    "ordine_apparato": 309
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUTEMPST",
    "descrizione_dmms": "Gas Protection Unit Temperature Status:0 = Fault",
    "descrizione_custom": "FSD:GPU Temperature:0 = Fault low temp 1 = Safe 2 = Fault high temp 255 = Not available (AMC doesn't respond)",
    "ordine_custom": 692,
    "ordine_funzione": 306,
    "ordine_apparato": 308
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1AUXRAW",
    "descrizione_dmms": "LHD A1 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:LHD A1 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond CBM",
    "ordine_custom": 677,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1AUXST",
    "descrizione_dmms": "LHD Sensor A1 AUX-CONV Status:0 = Fault_SC 1 = A",
    "descrizione_custom": "FSD:LHD A1 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 676,
    "ordine_funzione": 307,
    "ordine_apparato": 310
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1TC1RAW",
    "descrizione_dmms": "LHD A1 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:LHD A1 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond cbm",
    "ordine_custom": 675,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1TC1ST",
    "descrizione_dmms": "LHD Sensor A1 TC-1 Status:0 = Fault_SC 1 = Alarm",
    "descrizione_custom": "FSD:LHD A1 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 674,
    "ordine_funzione": 308,
    "ordine_apparato": 311
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA2HSCBCST",
    "descrizione_dmms": "LHD Sensor A2 HSCBC Status:0 = Fault_SC 1 = Alar",
    "descrizione_custom": "FSD:LHD A2 HSCBC Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 678,
    "ordine_funzione": 309,
    "ordine_apparato": 312
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA2HSCBRAW",
    "descrizione_dmms": "LHD A2 HSCB Measure for CBM",
    "descrizione_custom": "FSD:LHD A2 HSCBC Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 679,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4AUXRAW",
    "descrizione_dmms": "LHD A4 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:LHD A4 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warnin cbmg_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 683,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4AUXST",
    "descrizione_dmms": "LHD Sensor A4 AUX-CONV Status:0 = Fault_SC 1 = A",
    "descrizione_custom": "FSD:LHD A4 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 682,
    "ordine_funzione": 310,
    "ordine_apparato": 313
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4TC1RAW",
    "descrizione_dmms": "LHD A4 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:LHD A4 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond CBM",
    "ordine_custom": 681,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4TC1ST",
    "descrizione_dmms": "LHD Sensor A4 TC-1 Status:0 = Fault_SC 1 = Alarm",
    "descrizione_custom": "FSD:LHD A4 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 680,
    "ordine_funzione": 311,
    "ordine_apparato": 314
  },
  {
    "nome_colonna": "S_FSD_FSD_ISYSTEMSTATUS",
    "descrizione_dmms": "SYSTEM STATUS:1 = Autotest 2 = Stand-by 3 = Pre",
    "descrizione_custom": "FSD:State (1-Autotest, 2-StandBy, 3-Preallarm, 4-Allarm, 5-Manut, 6-Fault)",
    "ordine_custom": 667,
    "ordine_funzione": 312,
    "ordine_apparato": 318
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR1CMD",
    "descrizione_dmms": "Trainline Alarm 1 Command:0 = Off 1 = On 2 = In",
    "descrizione_custom": "FSD:Att Linea treno ALLARME 1 (1 ALL,2 PREALL)",
    "ordine_custom": 671,
    "ordine_funzione": 313,
    "ordine_apparato": 304
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR1ST",
    "descrizione_dmms": "Trainline Alarm 1 Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno 1 NOK",
    "ordine_custom": 669,
    "ordine_funzione": 314,
    "ordine_apparato": 315
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR2CMD",
    "descrizione_dmms": "Trainline Alarm 2 Command:0 = Off 1 = On 2 = In",
    "descrizione_custom": "FSD:Att Linea treno ALLARME 2 (1 ALL,2 PREALL)",
    "ordine_custom": 672,
    "ordine_funzione": 315,
    "ordine_apparato": 305
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR2ST",
    "descrizione_dmms": "Trainline Alarm 2 Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno 2 NOK",
    "ordine_custom": 668,
    "ordine_funzione": 316,
    "ordine_apparato": 316
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLFLTCMD",
    "descrizione_dmms": "Trainline Fault Command:0 = Off 1 = On 2 = Inte",
    "descrizione_custom": "FSD:Att Linea treno FAULT 2 (1 CRITICAL,2 MJR)",
    "ordine_custom": 673,
    "ordine_funzione": 317,
    "ordine_apparato": 306
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLFLTST",
    "descrizione_dmms": "Trainline Fault Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno FAULT NOK",
    "ordine_custom": 670,
    "ordine_funzione": 318,
    "ordine_apparato": 317
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2PRESSRAW",
    "descrizione_dmms": "WPU N2 Pressure Measure for CBM",
    "descrizione_custom": "FSD:Pressione bombola N2 CBM",
    "ordine_custom": 699,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2PRESSST",
    "descrizione_dmms": "Water Package Unit N2 Pressure Status:0 = OK 1 =",
    "descrizione_custom": "FSD:Stato pressione bombola N2",
    "ordine_custom": 697,
    "ordine_funzione": 319,
    "ordine_apparato": 319
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2TEMPRAW",
    "descrizione_dmms": "WPU N2 Temperature Measure for CBM",
    "descrizione_custom": "FSD:Temperatura bombola N2 CBM",
    "ordine_custom": 700,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUPIPEPRESSST",
    "descrizione_dmms": "WPU Pipe Pressure Status:0 = Low Pressure 1 = Fa",
    "descrizione_custom": "FSD:Stato pressione WPU",
    "ordine_custom": 698,
    "ordine_funzione": 320,
    "ordine_apparato": 320
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUSOLENOIDRAW",
    "descrizione_dmms": "WPU Solenoid valve Measure for CBM",
    "descrizione_custom": "FSD:WPU misura solenoide valvola scatto CBM",
    "ordine_custom": 701,
    "ordine_funzione": 1099,
    "ordine_apparato": 1099
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUSOLENOIDST",
    "descrizione_dmms": "WPU Solenoid Valve Status:0 = Fault_SC 1 = Low i",
    "descrizione_custom": "FSD:Stato solenoide valvola scatto",
    "ordine_custom": 702,
    "ordine_funzione": 321,
    "ordine_apparato": 321
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLFSGN4FB_H1",
    "descrizione_dmms": "Life signal DIS ",
    "descrizione_custom": "H1:DIS Life signal",
    "ordine_custom": 729
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTFAULT_H1",
    "descrizione_dmms": "DIS lamp \"Fault\" off:0 on:1",
    "descrizione_custom": "DIS-H1:Spia avaria DIS",
    "ordine_custom": 658
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTMEMFULL_H1",
    "descrizione_dmms": "DIS lamp \"Memory Full\" off:0 on:1",
    "descrizione_custom": "DIS-H1:Spia memoria piena",
    "ordine_custom": 657
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTTACHFAULT_H1",
    "descrizione_dmms": "Light DIS tachograph fault > 0 = Signal Off (defau",
    "descrizione_custom": "DIS-H1:Spia avaria tachigrafica DIS",
    "ordine_custom": 656
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISNOSCMT_H1",
    "descrizione_dmms": "CEA switch status (SCMT isolation switch status) >",
    "descrizione_custom": "DIS-H1:Selettore CEA Inserito (SCMT escluso)  ",
    "ordine_custom": 659
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_0_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 754
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_1_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 755
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_2_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 756
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_3_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 757
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_4_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 758
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_5_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 759
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_6_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 760
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIOBYTE109_H1",
    "descrizione_dmms": "7:4 Registration state on GSM-R network 0000 [0] =",
    "descrizione_custom": "TTT-H1:reg TTT",
    "ordine_custom": 660
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIOLFSGN4B5_H1",
    "descrizione_dmms": "Life signal TTT From 0 to 255 with increment at ea",
    "descrizione_custom": "H1:TTT Life signal",
    "ordine_custom": 727
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIONUMTRENO_H1",
    "descrizione_dmms": "Train number (right alligned, padding with '0's) -",
    "descrizione_custom": "",
    "ordine_custom": 761
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTBYTE130_H1",
    "descrizione_dmms": "7:4 Acoustic Signal SCMT 0000 = no",
    "descrizione_custom": "SCMT-H1:Suono SCMT",
    "ordine_custom": 636
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTBYTE132_H1",
    "descrizione_dmms": "7:4 Blue Command Blue Control Speed 1 = off",
    "descrizione_custom": "SCMT-H1:7:4 Blue Command Blue Control Speed  1 = off",
    "ordine_custom": 638
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEMERGBRAKE_H1",
    "descrizione_dmms": "Emergency Brake by SCMT 0 = not pressed",
    "descrizione_custom": "SCMT-H1:Frenata di emergenza da SCMT  ",
    "ordine_custom": 627
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEMERGBRAKEVIG_H1",
    "descrizione_dmms": "Emergency Brake by Vigilance 0 = not active 1 = a",
    "descrizione_custom": "SCMT-H1:Frenata di emergenza da Vigilante  ",
    "ordine_custom": 631
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTERRCODE1_H1",
    "descrizione_dmms": "Codice Errore Primario (4 characters)",
    "descrizione_custom": "SCMT-H1:Codice Errore Primario",
    "ordine_custom": 632
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTERRCODE2_H1",
    "descrizione_dmms": "Codice Errore secondario (2 characters)",
    "descrizione_custom": "SCMT-H1:Codice Errore secondario",
    "ordine_custom": 633
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEXCLICON_H1",
    "descrizione_dmms": "SCMT Exclusion Icon Visualization 0 = not present",
    "descrizione_custom": "SCMT-H1:Visualizzazione Esclusione SCMT",
    "ordine_custom": 626
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTMTALIVE1_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 858
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTOPERMODE_H1",
    "descrizione_dmms": "Operation mode SCMT 01 = Test 02 = W",
    "descrizione_custom": "SCMT-H1:modalità funzionamento",
    "ordine_custom": 623
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCDISCHECK_H1",
    "descrizione_dmms": "RSC disinsertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H1:RSC disinsertion check  ",
    "ordine_custom": 629
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCEXCLICON_H1",
    "descrizione_dmms": "RSC Exclusione Icon Visualization 0 = not prese",
    "descrizione_custom": "SCMT-H1:RSC Exclusione Icon Visualization ",
    "ordine_custom": 637
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCINSCHECK_H1",
    "descrizione_dmms": "RSC insertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H1:RSC insertion check  ",
    "ordine_custom": 628
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSIGNCODE_H1",
    "descrizione_dmms": "Codes Signals detected 0 = code 270** 1 = code 270",
    "descrizione_custom": "SCMT-H1:Codice segnale",
    "ordine_custom": 624
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDALERT_H1",
    "descrizione_dmms": "Alert speed 0 = not exceeded 1 = exc",
    "descrizione_custom": "SCMT-H1: Velocità Allerta/Control superata A/C",
    "ordine_custom": 634
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDALLOWED_H1",
    "descrizione_dmms": "Speed train allowed km/h",
    "descrizione_custom": "SCMT-H1:Velocità permessa",
    "ordine_custom": 635
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDCTRL_H1",
    "descrizione_dmms": "Control Speed 0 = not exceeded 1 = exce",
    "descrizione_custom": "H1:Control Speed 0=not exceeded 1=exceeded",
    "ordine_custom": 108
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVIGACT_H1",
    "descrizione_dmms": "Actuation Vigilance 0 = no action 1 = actio",
    "descrizione_custom": "SCMT-H1:Vigilante Primario azionato da PDM  ",
    "ordine_custom": 625
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVIGREQ_H1",
    "descrizione_dmms": "Vigilance Request 0 = not active",
    "descrizione_custom": "SCMT-H1:Richiesta di vigilanza  ",
    "ordine_custom": 630
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVISVELRIL_H1",
    "descrizione_dmms": "Visualizzazione Vel.rilascio 10 Km/h 0 = not pre",
    "descrizione_custom": "SCMT-H1:Visualizzazione Vel.rilascio 10 Km/h",
    "ordine_custom": 639
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLFSGN4FB_H2",
    "descrizione_dmms": "Life signal DIS ",
    "descrizione_custom": "H2:DIS Life signal",
    "ordine_custom": 730
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTFAULT_H2",
    "descrizione_dmms": "DIS lamp \"Fault\" off:0 on:1",
    "descrizione_custom": "DIS-H2:Spia avaria DIS",
    "ordine_custom": 664
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTMEMFULL_H2",
    "descrizione_dmms": "DIS lamp \"Memory Full\" off:0 on:1",
    "descrizione_custom": "DIS-H2:Spia memoria piena",
    "ordine_custom": 663
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTTACHFAULT_H2",
    "descrizione_dmms": "Light DIS tachograph fault > 0 = Signal Off (defau",
    "descrizione_custom": "DIS-H2:Spia avaria tachigrafica DIS",
    "ordine_custom": 662
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISNOSCMT_H2",
    "descrizione_dmms": "CEA switch status (SCMT isolation switch status) >",
    "descrizione_custom": "DIS-H2:Selettore CEA Inserito (SCMT escluso)  ",
    "ordine_custom": 665
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_0_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 762
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_1_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 763
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_2_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 764
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_3_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 765
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_4_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 766
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_5_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 767
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_6_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 768
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIOBYTE109_H2",
    "descrizione_dmms": "7:4 Registration state on GSM-R network 0000 [0] =",
    "descrizione_custom": "TTT-H2:reg TTT",
    "ordine_custom": 666
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIOLFSGN4B5_H2",
    "descrizione_dmms": "Life signal TTT From 0 to 255 with increment at ea",
    "descrizione_custom": "H2:TTT Life signal",
    "ordine_custom": 728
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIONUMTRENO_H2",
    "descrizione_dmms": "Train number (right alligned, padding with '0's) -",
    "descrizione_custom": "",
    "ordine_custom": 769
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTBYTE130_H2",
    "descrizione_dmms": "7:4 Acoustic Signal SCMT 0000 = no",
    "descrizione_custom": "SCMT-H2:Suono SCMT",
    "ordine_custom": 653
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTBYTE132_H2",
    "descrizione_dmms": "7:4 Blue Command Blue Control Speed 1 = off",
    "descrizione_custom": "SCMT-H2:7:4 Blue Command Blue Control Speed  1 = off",
    "ordine_custom": 655
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEMERGBRAKE_H2",
    "descrizione_dmms": "Emergency Brake by SCMT 0 = not pressed",
    "descrizione_custom": "SCMT-H2:Frenata di emergenza da SCMT  ",
    "ordine_custom": 644
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEMERGBRAKEVIG_H2",
    "descrizione_dmms": "Emergency Brake by Vigilance 0 = not active 1 = a",
    "descrizione_custom": "SCMT-H2:Frenata di emergenza da Vigilante  ",
    "ordine_custom": 648
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTERRCODE1_H2",
    "descrizione_dmms": "Codice Errore Primario (4 characters)",
    "descrizione_custom": "SCMT-H2:Codice Errore Primario",
    "ordine_custom": 649
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTERRCODE2_H2",
    "descrizione_dmms": "Codice Errore secondario (2 characters)",
    "descrizione_custom": "SCMT-H2:Codice Errore secondario",
    "ordine_custom": 650
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEXCLICON_H2",
    "descrizione_dmms": "SCMT Exclusion Icon Visualization 0 = not present",
    "descrizione_custom": "SCMT-H2:Visualizzazione Esclusione SCMT",
    "ordine_custom": 643
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTMTALIVE1_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 859
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTOPERMODE_H2",
    "descrizione_dmms": "Operation mode SCMT 01 = Test 02 = W",
    "descrizione_custom": "SCMT-H2:modalitè funzionamento",
    "ordine_custom": 640
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCDISCHECK_H2",
    "descrizione_dmms": "RSC disinsertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H2:RSC disinsertion check  ",
    "ordine_custom": 646
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCEXCLICON_H2",
    "descrizione_dmms": "RSC Exclusione Icon Visualization 0 = not prese",
    "descrizione_custom": "SCMT-H2:RSC Exclusione Icon Visualization",
    "ordine_custom": 654
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCINSCHECK_H2",
    "descrizione_dmms": "RSC insertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H2:RSC insertion check  ",
    "ordine_custom": 645
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSIGNCODE_H2",
    "descrizione_dmms": "Codes Signals detected 0 = code 270** 1 = code 270",
    "descrizione_custom": "SCMT-H2:Codice segnale",
    "ordine_custom": 641
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDALERT_H2",
    "descrizione_dmms": "Alert speed 0 = not exceeded 1 = exc",
    "descrizione_custom": "SCMT-H2:Velocità Allerta/Control superata A/C",
    "ordine_custom": 651
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDALLOWED_H2",
    "descrizione_dmms": "Speed train allowed km/h",
    "descrizione_custom": "SCMT-H2:Velocità permessa",
    "ordine_custom": 652
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDCTRL_H2",
    "descrizione_dmms": "Control Speed 0 = not exceeded 1 = exce",
    "descrizione_custom": "H2:Control Speed 0=not exceeded 1=exceeded",
    "ordine_custom": 109
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVIGACT_H2",
    "descrizione_dmms": "Actuation Vigilance 0 = no action 1 = actio",
    "descrizione_custom": "SCMT-H2:Vigilante Primario azionato da PDM  ",
    "ordine_custom": 642
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVIGREQ_H2",
    "descrizione_dmms": "Vigilance Request 0 = not active",
    "descrizione_custom": "SCMT-H2:Richiesta di vigilanza  ",
    "ordine_custom": 647
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVISVELRIL_H2",
    "descrizione_dmms": "Visualizzazione Vel.rilascio 10 Km/h 0 = not pre",
    "descrizione_custom": "SCMT-H2:Visualizzazione Vel.rilascio 10 Km/h",
    "ordine_custom": 661
  },
  {
    "nome_colonna": "S_HADDATTR_ASSEMBLY_CFG_VER",
    "descrizione_dmms": "Versione File XML AssemblyConfig",
    "descrizione_custom": "",
    "ordine_custom": 770
  },
  {
    "nome_colonna": "S_HADDATTR_DBX_SW_VER",
    "descrizione_dmms": "Versione Software Principale",
    "descrizione_custom": "",
    "ordine_custom": 771
  },
  {
    "nome_colonna": "S_HADDATTR_DELTA",
    "descrizione_dmms": "Secondi di scostamento ultimo allineamento",
    "descrizione_custom": "",
    "ordine_custom": 772
  },
  {
    "nome_colonna": "S_HADDATTR_ELAPSED",
    "descrizione_dmms": "Secondi trascorsi dall'avvio",
    "descrizione_custom": "",
    "ordine_custom": 773
  },
  {
    "nome_colonna": "S_HADDATTR_ENV_CFG_VER",
    "descrizione_dmms": "Versione File XML EnvConfig",
    "descrizione_custom": "",
    "ordine_custom": 774
  },
  {
    "nome_colonna": "S_HADDATTR_IPADDR",
    "descrizione_dmms": "Indirizzo IP",
    "descrizione_custom": "",
    "ordine_custom": 775
  },
  {
    "nome_colonna": "S_HADDATTR_OBS_CFG_VER",
    "descrizione_dmms": "Versione File XML ObserveConfig",
    "descrizione_custom": "",
    "ordine_custom": 776
  },
  {
    "nome_colonna": "S_HADDATTR_REC_CFG_VER",
    "descrizione_dmms": "Versione File XML RecordConfig",
    "descrizione_custom": "",
    "ordine_custom": 777
  },
  {
    "nome_colonna": "S_HADDATTR_RULE_CFG_VER",
    "descrizione_dmms": "Versione File XML RuleConfig",
    "descrizione_custom": "",
    "ordine_custom": 778
  },
  {
    "nome_colonna": "S_HADDATTR_SAMPLE_CFG_VER",
    "descrizione_dmms": "Versione File XML SampleConfig",
    "descrizione_custom": "",
    "ordine_custom": 779
  },
  {
    "nome_colonna": "S_MPU1_BCE_CBRAKEDEMAND",
    "descrizione_dmms": "Master Controler:Brake(-) / Traction (+) demand b",
    "descrizione_custom": "BCE:CMD MC  (-) / trazione (+) (in%)",
    "ordine_custom": 205
  },
  {
    "nome_colonna": "S_MPU1_BCE_CTCMSBRAKEREQH",
    "descrizione_dmms": "Brake request to bypass the TCL_Braking_L (active",
    "descrizione_custom": "BCE:Richiesta Freno (attivo alto)",
    "ordine_custom": 206
  },
  {
    "nome_colonna": "S_MPU1_BCE_CTCMSBRAKEREQL",
    "descrizione_dmms": "Brake request to bypass the TCL_Braking_L (active",
    "descrizione_custom": "BCE:Richiesta Freno (attivo basso)",
    "ordine_custom": 207
  },
  {
    "nome_colonna": "S_MPU1_DBX_CTCMSALIVEREM",
    "descrizione_dmms": "Life sign of the remote MPU",
    "descrizione_custom": "",
    "ordine_custom": 780
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKBRAKETESTSTATE",
    "descrizione_dmms": "DDU_CBrkBrakeTestState",
    "descrizione_custom": "DDU:BRKTEST 0-No active,1-TCMS abort,2-EBCU abort,3-Driver abort,4-Running, 5-Finish OK,6-Finish NOK",
    "ordine_custom": 208
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKPEBTESTSTATE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 860
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKTRAINCONFIGOK",
    "descrizione_dmms": "DDU_CBRKTrainConfigOK",
    "descrizione_custom": "DDU_CBRKTrainConfigOK(MPU1)",
    "ordine_custom": 721
  },
  {
    "nome_colonna": "S_MPU1_DDU_CCPLLOCALUNCOUPLING",
    "descrizione_dmms": "DDU_CCPLLocalUncoupling",
    "descrizione_custom": "DDU_CCPLLocalUncoupling",
    "ordine_custom": 723
  },
  {
    "nome_colonna": "S_MPU1_DDU_CCPLSWITCHOFFMSG",
    "descrizione_dmms": "DDU_CCPLSwitchOffMsg",
    "descrizione_custom": "DDU_CCPLSwitchOffMsg(MPU1)",
    "ordine_custom": 722
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVCOUPLINGDRVMODEACTIVE",
    "descrizione_dmms": "DDU_CDRVCouplingDrvModeActive",
    "descrizione_custom": "DDU_CDRVCouplingDrvModeActive(MPU1)",
    "ordine_custom": 724
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU_CDRVCruiseControlSpeed",
    "descrizione_custom": "DDU:Velocità auto impostata",
    "ordine_custom": 107
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVDRIVINGDIRECTIONFORWARD_H1",
    "descrizione_dmms": "DDU_CDRVDrivingDirectionForward_H1",
    "descrizione_custom": "H1:Direzione Avanti da DDU",
    "ordine_custom": 144
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVDRIVINGDIRECTIONFORWARD_H2",
    "descrizione_dmms": "DDU_CDRVDrivingDirectionForward_H2",
    "descrizione_custom": "H2:Direzione Avanti da DDU",
    "ordine_custom": 145
  },
  {
    "nome_colonna": "S_MPU1_DDU_CLINECURRENTLIMIT",
    "descrizione_dmms": "DDU_CLineCurrentLimit",
    "descrizione_custom": "",
    "ordine_custom": 781
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRACTIONINHIBIT",
    "descrizione_dmms": "DDU_CTractionInhibit",
    "descrizione_custom": "DDU:Traction Inibition",
    "ordine_custom": 146
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINNUMBER1",
    "descrizione_dmms": "DDU_CTrainNumber1",
    "descrizione_custom": "",
    "ordine_custom": 782
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINNUMBER2",
    "descrizione_dmms": "DDU_CTrainNumber2",
    "descrizione_custom": "",
    "ordine_custom": 783
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINTYPENUMBER1",
    "descrizione_dmms": "DDU_CTrainTypeNumber1",
    "descrizione_custom": "",
    "ordine_custom": 784
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINTYPENUMBER2",
    "descrizione_dmms": "DDU_CTrainTypeNumber2",
    "descrizione_custom": "",
    "ordine_custom": 785
  },
  {
    "nome_colonna": "S_MPU1_LO_AIRCOMPRESSORFAULTY_H1",
    "descrizione_dmms": "[Produzione aria] Richiesta accensione lampada a b",
    "descrizione_custom": "H1:Spia BANCO Guasto compressore",
    "ordine_custom": 165
  },
  {
    "nome_colonna": "S_MPU1_LO_AIRCOMPRESSORFAULTY_H2",
    "descrizione_dmms": "[Produzione aria] Richiesta accensione lampada a b",
    "descrizione_custom": "H2:Spia BANCO Guasto compressore",
    "ordine_custom": 166
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKAXLENOTPROTECTED_H1",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"...\"",
    "descrizione_custom": "H1:Spia BANCO Assi non protetti",
    "ordine_custom": 169
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKAXLENOTPROTECTED_H2",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"...\"",
    "descrizione_custom": "H2:Spia BANCO Assi non protetti",
    "ordine_custom": 170
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKWHEELSLIDEDETECT_H1",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"WSP\"",
    "descrizione_custom": "H1:Spia BANCO WSP",
    "ordine_custom": 171
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKWHEELSLIDEDETECT_H2",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"WSP\"",
    "descrizione_custom": "H2:Spia BANCO WSP",
    "ordine_custom": 172
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVPARKINGMODEFEEDBACK_H1",
    "descrizione_dmms": "[Driver] Richiesta accensione lampada pulsante...",
    "descrizione_custom": "H1:Luce Pulsante Parking",
    "ordine_custom": 157
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVPARKINGMODEFEEDBACK_H2",
    "descrizione_dmms": "[Driver] Richiesta accensione lampada pulsante...",
    "descrizione_custom": "H2:Luce Pulsante Parking",
    "ordine_custom": 158
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVVIGILANCEREITCONTR_R1_H1",
    "descrizione_dmms": "[Driver] Richiesta reiterazione Vigilante",
    "descrizione_custom": "H1:Richiesta Reiterazione Vigilante",
    "ordine_custom": 621
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVVIGILANCEREITCONTR_R1_H2",
    "descrizione_dmms": "[Driver] Richiesta reiterazione Vigilante",
    "descrizione_custom": "H2:Richiesta Reiterazione Vigilante",
    "ordine_custom": 622
  },
  {
    "nome_colonna": "S_MPU1_LO_PAISTCALLFORAID_H1",
    "descrizione_dmms": "[PIS] Richiesta accensione lampada a banco \"Ca...\"",
    "descrizione_custom": "H1:Spia BANCO pulsante AID",
    "ordine_custom": 161
  },
  {
    "nome_colonna": "S_MPU1_LO_PAISTCALLFORAID_H2",
    "descrizione_dmms": "[PIS] Richiesta accensione lampada a banco \"Ca...\"",
    "descrizione_custom": "H2:Spia BANCO pulsante AID",
    "ordine_custom": 162
  },
  {
    "nome_colonna": "S_MPU1_LO_SANSANDLIGHT_H1",
    "descrizione_dmms": "[Sabbiere] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H1:Spia BANCO intervento sabbiera",
    "ordine_custom": 167
  },
  {
    "nome_colonna": "S_MPU1_LO_SANSANDLIGHT_H2",
    "descrizione_dmms": "[Sabbiere] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H2:Spia BANCO intervento sabbiera",
    "ordine_custom": 168
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSHSCBOPEN_H1",
    "descrizione_dmms": "[Trazione] Richiesta apertura IR",
    "descrizione_custom": "H1:Spia BANCO IR Aperto",
    "ordine_custom": 163
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSHSCBOPEN_H2",
    "descrizione_dmms": "[Trazione] Richiesta apertura IR",
    "descrizione_custom": "H2:Spia BANCO IR Aperto",
    "ordine_custom": 164
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSPCEISOLATEDLIGHT_H1",
    "descrizione_dmms": "[Trazione] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H1:Spia BANCO avaria motori",
    "ordine_custom": 159
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSPCEISOLATEDLIGHT_H2",
    "descrizione_dmms": "[Trazione] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H2:Spia BANCO avaria motori",
    "ordine_custom": 160
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSTRACBLCKAPPL_H1",
    "descrizione_dmms": "[Trazione] Comando accensione spia Taglio Trazione",
    "descrizione_custom": "H1:Spia BANCO Taglio Trazione",
    "ordine_custom": 175
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSTRACBLCKAPPL_H2",
    "descrizione_dmms": "[Trazione] Comando accensione spia Taglio Trazione",
    "descrizione_custom": "H2:Spia BANCO Taglio Trazione",
    "ordine_custom": 176
  },
  {
    "nome_colonna": "S_MPU1_MPU_CDATETIMESEC",
    "descrizione_dmms": "Local date and time provided by the TCMS to all eq",
    "descrizione_custom": "",
    "ordine_custom": 786
  },
  {
    "nome_colonna": "S_MPU1_MPU_CGPSVALIDITY",
    "descrizione_dmms": "1 = GPS data are valid",
    "descrizione_custom": "",
    "ordine_custom": 787
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLATITUDE",
    "descrizione_dmms": "GPS-data latitude 1 bit = 0.001 degrees",
    "descrizione_custom": "",
    "ordine_custom": 788
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLOCALCABACTIVE_H1",
    "descrizione_dmms": "Cabin H1 is active",
    "descrizione_custom": "H1:Cabina attiva da MPU",
    "ordine_custom": 103,
    "ordine_funzione": 102,
    "ordine_apparato": 102
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLOCALCABACTIVE_H2",
    "descrizione_dmms": "Cabin H2 is active",
    "descrizione_custom": "H2:Cabina attiva da MPU",
    "ordine_custom": 104,
    "ordine_funzione": 103,
    "ordine_apparato": 103
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLONGITUDE",
    "descrizione_dmms": "GPS-data longitude 1 bit = 0.001 degrees",
    "descrizione_custom": "",
    "ordine_custom": 789
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMPU1MASTER",
    "descrizione_dmms": "mastership management",
    "descrizione_custom": "MPU1 Master",
    "ordine_custom": 731
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMPU2MASTER",
    "descrizione_dmms": "mastership management",
    "descrizione_custom": "MPU2 Master",
    "ordine_custom": 732
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMULTIUNIT",
    "descrizione_dmms": "Multiple unit mode",
    "descrizione_custom": "Treno in multiplo",
    "ordine_custom": 725
  },
  {
    "nome_colonna": "S_MPU1_MPU_CNUMOFCARS",
    "descrizione_dmms": "Number of cars in the trainset",
    "descrizione_custom": "",
    "ordine_custom": 790
  },
  {
    "nome_colonna": "S_MPU1_MPU_CNUMOFUNITS",
    "descrizione_dmms": "Number of units in the train",
    "descrizione_custom": "",
    "ordine_custom": 791
  },
  {
    "nome_colonna": "S_MPU1_MPU_CSAMEORIASLEAD",
    "descrizione_dmms": "the local unit (trainset) has the same orientation",
    "descrizione_custom": "",
    "ordine_custom": 792
  },
  {
    "nome_colonna": "S_MPU1_MPU_CSHUTDOWNINP",
    "descrizione_dmms": "Flag to indicate that shutdown is in progress ( =",
    "descrizione_custom": "Shutdown in progress",
    "ordine_custom": 102
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTCMSALIVE",
    "descrizione_dmms": "Life signal of TCMS",
    "descrizione_custom": "MPU:Life signal",
    "ordine_custom": 726
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINMODE",
    "descrizione_dmms": "Current Train Mode",
    "descrizione_custom": "Train mode (1-Bat, 2-Oper, 3-Ready, 9-Park)",
    "ordine_custom": 101,
    "ordine_funzione": 101,
    "ordine_apparato": 101
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINOPER",
    "descrizione_dmms": "1= UnitOper is present in all coupled trainsets",
    "descrizione_custom": "MPU_CTrainOper(MPU1)",
    "ordine_custom": 793
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINSPEED",
    "descrizione_dmms": "Reference speed in step of 0.01kph",
    "descrizione_custom": "VELOCITA' da ATP",
    "ordine_custom": 105,
    "ordine_funzione": 104,
    "ordine_apparato": 104
  },
  {
    "nome_colonna": "S_MPU1_MPU_CUNITLEADER",
    "descrizione_dmms": "the unit (trainset) is the leading unit in multi t",
    "descrizione_custom": "",
    "ordine_custom": 794
  },
  {
    "nome_colonna": "S_MPU1_MPU_CUNITOPER",
    "descrizione_dmms": "When functioning, the applicative software of TCMS",
    "descrizione_custom": "MPU_CUnitOper(MPU1)",
    "ordine_custom": 795
  },
  {
    "nome_colonna": "S_MPU1_PCE_CDRIVINGMODE",
    "descrizione_dmms": "Driving mode selected 1= Effort Driving Mode 2= Cr",
    "descrizione_custom": "PCE:Driving mode selected 1=Effort Driving Mode 2=Cruise Control Driving Mode 3=Coupling Driving Mode 4=Washing  Allowable Range:[0,255]",
    "ordine_custom": 106
  },
  {
    "nome_colonna": "S_MPU1_PCE1_CCOEFTR",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 861
  },
  {
    "nome_colonna": "S_MPU1_PCE1_CCOTF",
    "descrizione_dmms": "Ambient external temperature (train level A= value",
    "descrizione_custom": "PCE1:CMD MC -100% (=full braking) to 100% (full traction) ?",
    "ordine_custom": 362
  },
  {
    "nome_colonna": "S_MPU1_VACC_CDEROGATION_H1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 796
  },
  {
    "nome_colonna": "S_MPU1_VACC_CDEROGATION_H2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 797
  },
  {
    "nome_colonna": "S_MPU1_VACC_CTARGTEMP_H1",
    "descrizione_dmms": "Target temperature fresh air :Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 798
  },
  {
    "nome_colonna": "S_MPU1_VACC_CTARGTEMP_H2",
    "descrizione_dmms": "Target temperature fresh air :Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 799
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_H1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 800
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_H2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 801
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_M1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 802
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_M2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 803
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_H1",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 804
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_H2",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 805
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_M1",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 806
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_M2",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 807
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTRAINSETAVEXTTP",
    "descrizione_dmms": "Trainset average exterior temperature:Range:0xF06",
    "descrizione_custom": "",
    "ordine_custom": 808
  },
  {
    "nome_colonna": "S_PAI_PAI_IDELAY",
    "descrizione_dmms": "DELAY received by OBOE",
    "descrizione_custom": "PAI_IDelay(PAI)",
    "ordine_custom": 809
  },
  {
    "nome_colonna": "S_PAI_PAI_ILASTSTATION",
    "descrizione_dmms": "Last station stop received by OBOE",
    "descrizione_custom": "PAI_ILastStation(PAI)",
    "ordine_custom": 810
  },
  {
    "nome_colonna": "S_PAI_PAI_INEXTSTATION",
    "descrizione_dmms": "Next station stop received by OBOE",
    "descrizione_custom": "PAI_INextStation(PAI)",
    "ordine_custom": 811
  },
  {
    "nome_colonna": "S_PAI_PAI_MISSIONNUMBER",
    "descrizione_dmms": "Mission Number received by OBOE",
    "descrizione_custom": "Missione treno",
    "ordine_custom": 812
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE1:Corrente Inverter ICAIEC",
    "ordine_custom": 367
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE1:Contattore Linea ICISEC",
    "ordine_custom": 371
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE1:Tensione di linea DC",
    "ordine_custom": 383
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 862
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE1:Frenatura Elettrica operativa",
    "ordine_custom": 387
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE1:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 391
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IFRWRDSTTCL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 863
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE1:Sezionatore Isolamento H(C)",
    "ordine_custom": 395
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE1:IR Trazione H1",
    "ordine_custom": 399
  },
  {
    "nome_colonna": "S_PCE1_PCE1_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE1:NoBrake",
    "ordine_custom": 403
  },
  {
    "nome_colonna": "S_PCE1_PCE1_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE1:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 407
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IRVERSESTTCL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 864
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE1:Trazione",
    "ordine_custom": 411
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE1:Tensione di filtro ",
    "ordine_custom": 415
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE2:Corrente Inverter ICAIEC",
    "ordine_custom": 368
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE2:Contattore Linea ICISEC",
    "ordine_custom": 372
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE2:Tensione di linea DC",
    "ordine_custom": 384
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 865
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE2:Frenatura Elettrica operativa",
    "ordine_custom": 388
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE2:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 392
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE2:Sezionatore Isolamento H(C)",
    "ordine_custom": 396
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE2:IR Trazione H1",
    "ordine_custom": 400
  },
  {
    "nome_colonna": "S_PCE2_PCE2_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE2:NoBrake",
    "ordine_custom": 404
  },
  {
    "nome_colonna": "S_PCE2_PCE2_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE2:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 408
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE2:Trazione",
    "ordine_custom": 412
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE2:Tensione di filtro ",
    "ordine_custom": 416
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE3:Corrente Inverter ICAIEC",
    "ordine_custom": 369
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE3:Contattore Linea ICISEC",
    "ordine_custom": 373
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE3:Tensione di linea DC",
    "ordine_custom": 385
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 866
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE3:Frenatura Elettrica operativa",
    "ordine_custom": 389
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE3:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 393
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE3:Sezionatore Isolamento H(C)",
    "ordine_custom": 397
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE3:IR Trazione H2",
    "ordine_custom": 401
  },
  {
    "nome_colonna": "S_PCE3_PCE3_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE3:NoBrake",
    "ordine_custom": 405
  },
  {
    "nome_colonna": "S_PCE3_PCE3_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE3:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 409
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE3:Trazione",
    "ordine_custom": 413
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE3:Tensione di filtro ",
    "ordine_custom": 417
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE4:Corrente Inverter ICAIEC",
    "ordine_custom": 370
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE4:Contattore Linea ICISEC",
    "ordine_custom": 374
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE4:Tensione di linea DC",
    "ordine_custom": 386
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 867
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE4:Frenatura Elettrica operativa",
    "ordine_custom": 390
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE4:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 394
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE4:Sezionatore Isolamento H(C)",
    "ordine_custom": 398
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE4:IR Trazione H2",
    "ordine_custom": 402
  },
  {
    "nome_colonna": "S_PCE4_PCE4_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE4:NoBrake",
    "ordine_custom": 406
  },
  {
    "nome_colonna": "S_PCE4_PCE4_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE4:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 410
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE4:Trazione",
    "ordine_custom": 414
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE4:Tensione di filtro ",
    "ordine_custom": 418
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_ATPNOTRACTBLOCK1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H1:Blocco Trazione STB_1",
    "ordine_custom": 193
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_ATPSERVBRAKEREQ1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H1:Frenatura servizio da SCMT_1",
    "ordine_custom": 201
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKBYPASPASSEBOVERSTAT_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass neutralizzazione emergenza pass",
    "descrizione_custom": "H1:Bypass EBO",
    "ordine_custom": 185
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLBRAKEMAJORFAULT_H1",
    "descrizione_dmms": "[Freno] 0 = Avaria grave impianto freno",
    "descrizione_custom": "H1:TCL MJF",
    "ordine_custom": 177
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLNOPARKBRKRELEASE_H1",
    "descrizione_dmms": "[Freno] 0 = Almeno un freno di parcheggio, non iso",
    "descrizione_custom": "H1:TCL No Park Brake Release",
    "ordine_custom": 173,
    "ordine_funzione": 413,
    "ordine_apparato": 406
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLPARKBRKRELEASE1_H1",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di parc",
    "descrizione_custom": "H1:TCL FAM Release",
    "ordine_custom": 149,
    "ordine_funzione": 415,
    "ordine_apparato": 410
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLSERVICEBRKSTAT_H1",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di serv",
    "descrizione_custom": "H1:Spia BANCO Freno servizio applicato",
    "ordine_custom": 181
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CLMVENTBYPASSSTATUS_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass cabina attivato",
    "descrizione_custom": "H1:Bypass Ventilatore Clima",
    "ordine_custom": 316
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CPLLOCALCABINCOUPLED_R1_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "H1:CABINA ACCOPPIATA",
    "ordine_custom": 112
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CPLLOCALCABINUNCOUPLED_R1_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "H1:CABINA NON ACCOPPIATA",
    "ordine_custom": 113
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_DRVCABNEUTRALISATION_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina abilitata",
    "descrizione_custom": "H1:Neutralizzazione CABINA A",
    "ordine_custom": 118
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_DRVLOCALCABACTIVE_R1_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "H1:Cabina attiva",
    "ordine_custom": 116
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVS3PHOUTCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore uscita trifase chiuso",
    "descrizione_custom": "H1:Contattore Linea Trifase APERTO",
    "ordine_custom": 301,
    "ordine_funzione": 240,
    "ordine_apparato": 240
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSBATT1ISOLATCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di batteria chiuso",
    "descrizione_custom": "H1:Sezionatori di batteria",
    "ordine_custom": 293,
    "ordine_funzione": 243,
    "ordine_apparato": 244
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSLINEINCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore AT ingresso convertitore au",
    "descrizione_custom": "H1:Contattore LIK APERTO",
    "ordine_custom": 299,
    "ordine_funzione": 239,
    "ordine_apparato": 249
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSMVEARTHON_H1",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di messa a terra chiuso",
    "descrizione_custom": "H1:Sezionatori di terra MT",
    "ordine_custom": 295,
    "ordine_funzione": 245,
    "ordine_apparato": 253
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_ATPNOTRACTBLOCK1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H2:Blocco Trazione STB_1",
    "ordine_custom": 195
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_ATPSERVBRAKEREQ1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H2:Frenatura servizio da SCMT_1",
    "ordine_custom": 203
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKBYPASPASSEBOVERSTAT_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass neutralizzazione emergenza pass",
    "descrizione_custom": "H2:Bypass EBO",
    "ordine_custom": 186
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLBRAKEMAJORFAULT_H2",
    "descrizione_dmms": "[Freno] 0 = Avaria grave impianto freno",
    "descrizione_custom": "H2:TCL MJF",
    "ordine_custom": 178
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLNOPARKBRKRELEASE_H2",
    "descrizione_dmms": "[Freno] 0 = Almeno un freno di parcheggio, non iso",
    "descrizione_custom": "H2:TCL No Park Brake Release",
    "ordine_custom": 174,
    "ordine_funzione": 419,
    "ordine_apparato": 407
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLPARKBRKRELEASE1_H2",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di parc",
    "descrizione_custom": "H2:TCL FAM Release",
    "ordine_custom": 150,
    "ordine_funzione": 421,
    "ordine_apparato": 411
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLSERVICEBRKSTAT_H2",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di serv",
    "descrizione_custom": "H2:Spia BANCO Freno servizio applicato",
    "ordine_custom": 182
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CLMVENTBYPASSSTATUS_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass cabina attivato",
    "descrizione_custom": "H2:Bypass Ventilatore Clima",
    "ordine_custom": 317
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CPLLOCALCABINCOUPLED_R1_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "H2:CABINA ACCOPPIATA",
    "ordine_custom": 114
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CPLLOCALCABINUNCOUPLED_R1_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "H2:CABINA NON ACCOPPIATA",
    "ordine_custom": 115
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_DRVCABNEUTRALISATION_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina abilitata",
    "descrizione_custom": "H2:Neutralizzazione CABINA B",
    "ordine_custom": 119
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_DRVLOCALCABACTIVE_R1_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "H2:Cabina attiva",
    "ordine_custom": 117
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVS3PHOUTCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore uscita trifase chiuso",
    "descrizione_custom": "H2:Contattore Linea Trifase Aperto",
    "ordine_custom": 302,
    "ordine_funzione": 248,
    "ordine_apparato": 241
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSBATT2ISOLATCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di batteria chiuso",
    "descrizione_custom": "H2:Sezionatori di batteria",
    "ordine_custom": 294,
    "ordine_funzione": 251,
    "ordine_apparato": 245
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSLINEINCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore AT ingresso convertitore au",
    "descrizione_custom": "H2:Contattore LIK APERTO",
    "ordine_custom": 300,
    "ordine_funzione": 247,
    "ordine_apparato": 250
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSMVEARTHON_H2",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di messa a terra chiuso",
    "descrizione_custom": "H2:Sezionatori di terra MT",
    "ordine_custom": 296,
    "ordine_funzione": 253,
    "ordine_apparato": 254
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSAIRPRESBELTHRSHLD",
    "descrizione_dmms": "[Pantografo] 1 = Pressione ingresso circuito panto",
    "descrizione_custom": "M1:Panto Pressostato \"<=6 Bar\"",
    "ordine_custom": 127
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSPANTOCMOK2A",
    "descrizione_dmms": "[Pantografo A] 1 = Elettrovalvola sollevamento pan",
    "descrizione_custom": "M1:Panto A elettrov sollevamento",
    "ordine_custom": 128,
    "ordine_funzione": 105,
    "ordine_apparato": 105
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSPANTOISOLATE2A",
    "descrizione_dmms": "[Pantografo A] 1 = Pantografo isolato",
    "descrizione_custom": "M1:Panto A \"isolato\"",
    "ordine_custom": 130
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_MVSKMV1_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV1",
    "ordine_custom": 307,
    "ordine_funzione": 254,
    "ordine_apparato": 246
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_TBSHHT2CLOSED_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ch",
    "descrizione_custom": "M1:Sezionatore Panto HHT2 \"chiuso\"",
    "ordine_custom": 137
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_TBSHHT2OPEN_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ap",
    "descrizione_custom": "M1:Sezionatore Panto HHT2 \"aperto\"",
    "ordine_custom": 136
  },
  {
    "nome_colonna": "S_RIO1_M2_LI_BRKBOGIEINDIISOLATED1_M2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "M2:Distributore isolato da rubinetto",
    "ordine_custom": 270
  },
  {
    "nome_colonna": "S_RIO1_M2_LI_BRKDIRBRKISOLATED1_M2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "M2:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 262
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPISOLATION_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Commutatore Esclusione Apparecc",
    "descrizione_custom": "H1:CEA",
    "ordine_custom": 191
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTBLOCK2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H1:Blocco Trazione STB_2",
    "ordine_custom": 194
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTIONBLOCKDIS_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da DIS",
    "descrizione_custom": "H1:Blocco Trazione DIS",
    "ordine_custom": 197
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTIONBLOCKSCMT_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da SCMT",
    "descrizione_custom": "H1:Blocco Trazione SCMT",
    "ordine_custom": 199
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPSERVBRAKEREQ2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H1:Frenatura servizio da SCMT_2",
    "ordine_custom": 202
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKBYPASSEBLOOP_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza attivato",
    "descrizione_custom": "H1:Bypass loop EB",
    "ordine_custom": 254
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKBYPASSPASSEMERGLOOP_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza passeggeri att",
    "descrizione_custom": "H1:ByPass Pass Emerg Loop",
    "ordine_custom": 183
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKCMDVALVEN1110_H1",
    "descrizione_dmms": "[Freno] 1 = Abilitazione manipolatore di backup",
    "descrizione_custom": "H1:N11 abilitato",
    "ordine_custom": 219
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKN1109BYPACOSTAT_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto di bypass manipolatore di ba",
    "descrizione_custom": "H1:Bypass EV 11.09 N10 da rubinetto ",
    "ordine_custom": 233
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKN1120MPISOCOSTA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento condotta principa",
    "descrizione_custom": "H1:N11 CP isolata da rubinetto",
    "ordine_custom": 223
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKSIFASWITCH_H1",
    "descrizione_dmms": "[Freno] 1 = Condotta generale in scarico",
    "descrizione_custom": "H1:Pressostato CG in scarico da SIFA",
    "ordine_custom": 239
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKSTNOPBBRAKE_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H1:Stacco trazione B62 CG 3,9/4,9 ",
    "ordine_custom": 247
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKTCLNOEMERGENCYBRAKE_H1",
    "descrizione_dmms": "[Freno] 0 = Freno di emergenza applicato",
    "descrizione_custom": "H1:TCL No Emergency Brake",
    "ordine_custom": 179
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKTCLPARKBRKAPPLY1_H1",
    "descrizione_dmms": "[Freno] 1 = Richiesta applicazione freno di parche",
    "descrizione_custom": "H1:TCL FAM Apply",
    "ordine_custom": 147,
    "ordine_funzione": 414,
    "ordine_apparato": 408
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_CPLLOCALCABINCOUPLED_R2_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 813
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_CPLLOCALCABINUNCOUPLED_R2_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 814
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_DRVLOCALCABACTIVE_R2_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "",
    "ordine_custom": 815
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_HVSEARTHINGSWCLOSED_H1",
    "descrizione_dmms": "[Trazione] 1 = Messa a terra Circuiti AT",
    "descrizione_custom": "H1:Sezionatori di terra AT",
    "ordine_custom": 297,
    "ordine_funzione": 244,
    "ordine_apparato": 238
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_MVSMAINBATTCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di batteria chiuso",
    "descrizione_custom": "H1:Contattore Batteria 52KC781",
    "ordine_custom": 303,
    "ordine_funzione": 238,
    "ordine_apparato": 251
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_TBSHARMDETINHIBIT_H1",
    "descrizione_dmms": "[Trazione] 1 = Rilevatore di armoniche escluso",
    "descrizione_custom": "H1:RCA Escluso",
    "ordine_custom": 142
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPISOLATION_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Commutatore Esclusione Apparecc",
    "descrizione_custom": "H2:CEA",
    "ordine_custom": 192
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTBLOCK2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H2:Blocco Trazione STB_2",
    "ordine_custom": 196
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTIONBLOCKDIS_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da DIS",
    "descrizione_custom": "H2:Blocco Trazione DIS",
    "ordine_custom": 198
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTIONBLOCKSCMT_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da SCMT",
    "descrizione_custom": "H2:Blocco Trazione SCMT",
    "ordine_custom": 200
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPSERVBRAKEREQ2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H2:Frenatura servizio da SCMT_2",
    "ordine_custom": 204
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKBYPASSEBLOOP_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza attivato",
    "descrizione_custom": "H2:Bypass loop EB",
    "ordine_custom": 255
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKBYPASSPASSEMERGLOOP_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza passeggeri att",
    "descrizione_custom": "H2:ByPass Pass Emerg Loop",
    "ordine_custom": 184
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKCMDVALVEN1110_H2",
    "descrizione_dmms": "[Freno] 1 = Abilitazione manipolatore di backup",
    "descrizione_custom": "H2:N11 abilitato",
    "ordine_custom": 220
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKN1109BYPACOSTAT_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto di bypass manipolatore di ba",
    "descrizione_custom": "H2:Bypass EV 11.09 N10 da rubinetto ",
    "ordine_custom": 234
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKN1120MPISOCOSTA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento condotta principa",
    "descrizione_custom": "H2:N11 CP isolata da rubinetto",
    "ordine_custom": 224
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKSIFASWITCH_H2",
    "descrizione_dmms": "[Freno] 1 = Condotta generale in scarico",
    "descrizione_custom": "H2:Pressostato CG in scarico da SIFA",
    "ordine_custom": 240
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKSTNOPBBRAKE_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H2:Stacco trazione B62 CG 3,9/4,9 ",
    "ordine_custom": 248
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKTCLNOEMERGENCYBRAKE_H2",
    "descrizione_dmms": "[Freno] 0 = Freno di emergenza applicato",
    "descrizione_custom": "H2:TCL No Emergency Brake",
    "ordine_custom": 180
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKTCLPARKBRKAPPLY1_H2",
    "descrizione_dmms": "[Freno] 1 = Richiesta applicazione freno di parche",
    "descrizione_custom": "H2:TCL FAM Apply",
    "ordine_custom": 148,
    "ordine_funzione": 420,
    "ordine_apparato": 409
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_CPLLOCALCABINCOUPLED_R2_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 816
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_CPLLOCALCABINUNCOUPLED_R2_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 817
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_DRVLOCALCABACTIVE_R2_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "",
    "ordine_custom": 818
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_HVSEARTHINGSWCLOSED_H2",
    "descrizione_dmms": "[Trazione] 1 = Messa a terra Circuiti AT",
    "descrizione_custom": "H2:Sezionatori di terra AT",
    "ordine_custom": 298,
    "ordine_funzione": 252,
    "ordine_apparato": 239
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_MVSMAINBATTCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di batteria chiuso",
    "descrizione_custom": "H2:Contattore Batteria 52KC781 ",
    "ordine_custom": 304,
    "ordine_funzione": 246,
    "ordine_apparato": 252
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_TBSHARMDETINHIBIT_H2",
    "descrizione_dmms": "[Trazione] 1 = Rilevatore di armoniche escluso",
    "descrizione_custom": "H2:RCA Escluso",
    "ordine_custom": 143
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_HVSPANTOCMOK2B",
    "descrizione_dmms": "[Pantografo B] 1 = Elettrovalvola sollevamento pan",
    "descrizione_custom": "M1:Panto B elettrov sollevamento",
    "ordine_custom": 129,
    "ordine_funzione": 106,
    "ordine_apparato": 106
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_HVSPANTOISOLATE2B",
    "descrizione_dmms": "[Pantografo B] 1 = Pantografo isolato",
    "descrizione_custom": "M1:Panto B \"isolato\"",
    "ordine_custom": 131
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_MVSKMV2_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV2",
    "ordine_custom": 308,
    "ordine_funzione": 255,
    "ordine_apparato": 247
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_TBSHHT1CLOSED_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ch",
    "descrizione_custom": "M1:Sezionatore Panto HHT1 \"chiuso\"",
    "ordine_custom": 135
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_TBSHHT1OPEN_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ap",
    "descrizione_custom": "M1:Sezionatore Panto HHT1 \"aperto\"",
    "ordine_custom": 134
  },
  {
    "nome_colonna": "S_RIO2_M2_LI_BRKBOGIEISOLATED1_M2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "M2:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 267
  },
  {
    "nome_colonna": "S_RIO2_M2_LI_BRKMECHBRKSTATBOG1_M2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "M2:Freno meccanico carrello M2 ",
    "ordine_custom": 251
  },
  {
    "nome_colonna": "S_RIO3_H1_AI_TBSACCDECDEMAND_R1_H1",
    "descrizione_dmms": "[Trazione] Richiesta trazione da manipolatore (ran",
    "descrizione_custom": "H1:MC encoder R1",
    "ordine_custom": 213
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_ATPPNEUPLATE2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H1:Piastra 2 SCMT inserita",
    "ordine_custom": 188
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_BRKBYPASSEMCYAPPVALVE_R2_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "",
    "ordine_custom": 819
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_CLMBYPASSOPENSTATUSR_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass lato destro aperto",
    "descrizione_custom": "H1:Bypass Clima Destro aperto",
    "ordine_custom": 314
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_CLMDAMPERSCLOSINGCMD_H1",
    "descrizione_dmms": "[Clima] 1 = Serranda comandata chiusa",
    "descrizione_custom": "H1:Serranda aria Cabina chiusa",
    "ordine_custom": 318
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSREQCNCLDRSRELLEFT_H1",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H1:Cancellazione rilascio porte sinistre",
    "ordine_custom": 278,
    "ordine_funzione": 500,
    "ordine_apparato": 505
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSREQCNCLDRSRELRIGHT_H1",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H1:Cancellazione rilascio porte destre",
    "ordine_custom": 277,
    "ordine_funzione": 502,
    "ordine_apparato": 504
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSTCLDRSRELSIDEB_H1",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato B",
    "descrizione_custom": "H1:Sblocco porte lato B",
    "ordine_custom": 283,
    "ordine_funzione": 506,
    "ordine_apparato": 508
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSTCLSFTYLOOPOK_R1_H1",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "H1:Porte chiuse & bloccate",
    "ordine_custom": 275,
    "ordine_funzione": 508,
    "ordine_apparato": 506
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSEMCYBRAKE_R1_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in frenatura di emerge",
    "descrizione_custom": "H1:MC EB R1",
    "ordine_custom": 215
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSFULLSERVBRAKE_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H1:MC FULL SERV BRAKE",
    "ordine_custom": 217
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSMOTORING_R1_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H1:MC Motoring R1",
    "ordine_custom": 209
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSNOBRAKE_R1_H1",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H1:MC NoBrake R1",
    "ordine_custom": 211
  },
  {
    "nome_colonna": "S_RIO3_H2_AI_TBSACCDECDEMAND_R1_H2",
    "descrizione_dmms": "[Trazione] Richiesta trazione da manipolatore (ran",
    "descrizione_custom": "H2:MC encoder R1",
    "ordine_custom": 214
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_ATPPNEUPLATE2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H2:Piastra 2 SCMT inserita",
    "ordine_custom": 190
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_BRKBYPASSEMCYAPPVALVE_R2_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "",
    "ordine_custom": 820
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_CLMBYPASSOPENSTATUSR_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass lato destro aperto",
    "descrizione_custom": "H2:Bypass Clima Destro aperto",
    "ordine_custom": 315
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_CLMDAMPERSCLOSINGCMD_H2",
    "descrizione_dmms": "[Clima] 1 = Serranda comandata chiusa",
    "descrizione_custom": "H2:Serranda aria Cabina chiusa",
    "ordine_custom": 319
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSREQCNCLDRSRELLEFT_H2",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H2:Cancellazione rilascio porte sinistre",
    "ordine_custom": 280,
    "ordine_funzione": 501,
    "ordine_apparato": 510
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSREQCNCLDRSRELRIGHT_H2",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H2:Cancellazione rilascio porte destre",
    "ordine_custom": 279,
    "ordine_funzione": 503,
    "ordine_apparato": 509
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSTCLDRSRELSIDEA_H2",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato A",
    "descrizione_custom": "H2:Sblocco porte lato A",
    "ordine_custom": 282,
    "ordine_funzione": 505,
    "ordine_apparato": 512
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSTCLSFTYLOOPOK_R1_H2",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "H2:Porte chiuse & bloccate",
    "ordine_custom": 276,
    "ordine_funzione": 509,
    "ordine_apparato": 511
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSEMCYBRAKE_R1_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in frenatura di emerge",
    "descrizione_custom": "H2:MC EB R1",
    "ordine_custom": 216
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSFULLSERVBRAKE_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H2:MC FULL SERV BRAKE",
    "ordine_custom": 218
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSMOTORING_R1_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H2:MC Motoring R1",
    "ordine_custom": 210
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSNOBRAKE_R1_H2",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H2:MC NoBrake R1",
    "ordine_custom": 212
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_AIRCOMPACTIVATIONSTATUS1_M1",
    "descrizione_dmms": "[Produzione aria 1] 1 = Compressore attivato",
    "descrizione_custom": "M1:Compressore 1",
    "ordine_custom": 140
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOOVERPRESS2A",
    "descrizione_dmms": "[Pantografo A] 1 = Spinta addizionale pari a 6 kg",
    "descrizione_custom": "M1:Panto A OverPressure 6kg ",
    "ordine_custom": 138
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOPNEUMISO2A",
    "descrizione_dmms": "[Pantografo A] 1 = Rubinetto isolamento pantografo",
    "descrizione_custom": "M1:Panto A Isolamento aria ",
    "ordine_custom": 132
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOPNEUMISO2B",
    "descrizione_dmms": "[Pantografo B] 1 = Rubinetto isolamento pantografo",
    "descrizione_custom": "M1:Panto B Isolamanto aria ",
    "ordine_custom": 133
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_MVSKMV3_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV3",
    "ordine_custom": 309,
    "ordine_funzione": 256,
    "ordine_apparato": 248
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBCLOSED_R1_M1",
    "descrizione_dmms": "[Trazione] 1 = IR chiuso",
    "descrizione_custom": "M1:IR \"chiuso\"",
    "ordine_custom": 121,
    "ordine_funzione": 108,
    "ordine_apparato": 108
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBHOLD_M1",
    "descrizione_dmms": "[Trazione] 1 = Richiesta mantenimento IR chiuso at",
    "descrizione_custom": "M1:IR \"mantenimento chiuso\"",
    "ordine_custom": 122,
    "ordine_funzione": 109,
    "ordine_apparato": 109
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBOPENED_R1_M1",
    "descrizione_dmms": "[Trazione] 1 = IR aperto",
    "descrizione_custom": "M1:IR \"aperto\"",
    "ordine_custom": 120,
    "ordine_funzione": 107,
    "ordine_apparato": 107
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_ATPPNEUPLATE1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H1:Piastra 1 SCMT inserita",
    "ordine_custom": 187
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_BRKBYPASSEMCYAPPVALVE_R1_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "H1:Bypass EB da SIFA",
    "ordine_custom": 237
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_CLMBYPASSOPENSTATUSL_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass lato sinistro aperto",
    "descrizione_custom": "H1:Bypass Clima Sinistro aperto",
    "ordine_custom": 312
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRSTCLDRSRELSIDEA_H1",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato A",
    "descrizione_custom": "H1:Sblocco porte lato A",
    "ordine_custom": 281,
    "ordine_funzione": 504,
    "ordine_apparato": 507
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRSTCLSFTYLOOPOK_R2_H1",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "",
    "ordine_custom": 821
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRVGREASELEVELMAX_H1",
    "descrizione_dmms": "[Ungibordo] 1 = Serbatoio olio livello minimo",
    "descrizione_custom": "H1:Serbatoio olio ungibordo pieno",
    "ordine_custom": 310
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_FSDBUZZERDISCONNECTED_H1",
    "descrizione_dmms": "[Antincendio] 1 = Cicalino tacitato",
    "descrizione_custom": "H1:Selettore 14S01 tacitazione Buzzer CAB A",
    "ordine_custom": 287,
    "ordine_funzione": 322,
    "ordine_apparato": 322
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_SANPNEUSANDISOCOCDIA_H1",
    "descrizione_dmms": "[Sabbiere] 1 = Rubinetto isolamento sabbiere attiv",
    "descrizione_custom": "H1:Sabbiera isolata da rubinetto 63S02 ",
    "ordine_custom": 273
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_TBSMOTORING_R2_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H1:MC Motoring R2",
    "ordine_custom": 822
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_TBSNOBRAKE_R2_H1",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "",
    "ordine_custom": 823
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_ATPPNEUPLATE1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H2:Piastra 1 SCMT inserita",
    "ordine_custom": 189
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_BRKBYPASSEMCYAPPVALVE_R1_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "H2:Bypass EB da SIFA",
    "ordine_custom": 238
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_CLMBYPASSOPENSTATUSL_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass lato sinistro aperto",
    "descrizione_custom": "H2:Bypass Clima Sinistro aperto",
    "ordine_custom": 313
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRSTCLDRSRELSIDEB_H2",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato B",
    "descrizione_custom": "H2:Sblocco porte lato B",
    "ordine_custom": 284,
    "ordine_funzione": 507,
    "ordine_apparato": 513
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRSTCLSFTYLOOPOK_R2_H2",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "",
    "ordine_custom": 824
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRVGREASELEVELMAX_H2",
    "descrizione_dmms": "[Ungibordo] 1 = Serbatoio olio livello minimo",
    "descrizione_custom": "H2:Serbatoio olio ungibordo pieno",
    "ordine_custom": 311
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_FSDBUZZERDISCONNECTED_H2",
    "descrizione_dmms": "[Antincendio] 1 = Cicalino tacitato",
    "descrizione_custom": "H2:Selettore 14S01 tacitazione Buzzer CAB B",
    "ordine_custom": 288,
    "ordine_funzione": 323,
    "ordine_apparato": 323
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_SANPNEUSANDISOCOCDIA_H2",
    "descrizione_dmms": "[Sabbiere] 1 = Rubinetto isolamento sabbiere attiv",
    "descrizione_custom": "H2:Sabbiera isolata da rubinetto 63S02 ",
    "ordine_custom": 274
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_TBSMOTORING_R2_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H2:MC Motoring R2",
    "ordine_custom": 825
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_TBSNOBRAKE_R2_H2",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "",
    "ordine_custom": 826
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_AIRCOMPACTIVATIONSTATUS2_M1",
    "descrizione_dmms": "[Produzione aria 2] 1 = Compressore attivato",
    "descrizione_custom": "M1:Compressore 2",
    "ordine_custom": 141
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_HVSPANTOOVERPRESS2B",
    "descrizione_dmms": "[Pantografo B] 1 = Spinta addizionale pari a 6 kg",
    "descrizione_custom": "M1:Panto B OverPressure 6kg ",
    "ordine_custom": 139
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_TBSHSCBCLOSED_R2_M1",
    "descrizione_dmms": "[Trazione] 1 = IR chiuso",
    "descrizione_custom": "",
    "ordine_custom": 827
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_TBSHSCBOPENED_R2_M1",
    "descrizione_dmms": "[Trazione] 1 = IR aperto",
    "descrizione_custom": "",
    "ordine_custom": 828
  },
  {
    "nome_colonna": "S_RIO5_H1_AI_TBSGEARBOXTEMP1",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H1:Temperatura riduttore motore 1",
    "ordine_custom": 320
  },
  {
    "nome_colonna": "S_RIO5_H1_AI_TBSGEARBOXTEMP2",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H1:Temperatura riduttore motore 2",
    "ordine_custom": 321
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRK62S125NC_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H1:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 241
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKBOGIEINDIISOLATED2_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "H1:Distributore isolato da rubinetto",
    "ordine_custom": 268
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKCMDVALVEN1106_H1",
    "descrizione_dmms": "[Freno] 1 = Inibizione ricarica condotta generale",
    "descrizione_custom": "H1:N11 inib ricarica CG",
    "ordine_custom": 221
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDIRBRKISOLATED1_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H1:Freno EP carrello motore isolato da rubinetto B61",
    "ordine_custom": 258
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDIRBRKISOLATED2_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H1:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 260
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDRVBRKVALVFZ1SW1STA_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H1:N10 SW1",
    "ordine_custom": 225
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDRVBRKVALVFZ1SW2STA_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H1:N10 SW2",
    "ordine_custom": 226
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKMECHBRKSTATBOG1_H1",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H1:Freno meccanico carrello 1",
    "ordine_custom": 249
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKOVERRIDEPASSEBREQ_H1",
    "descrizione_dmms": "[Freno] 1 = Pulsante richiesta di neutralizzazione",
    "descrizione_custom": "H1:Bypass Override PAS",
    "ordine_custom": 256
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKPBISOLATIONCOCKB051_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H1:FAM Isolato B05",
    "ordine_custom": 153,
    "ordine_funzione": 410,
    "ordine_apparato": 400
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKPBNOTRELEASELOCAL1_H1",
    "descrizione_dmms": "[Freno] 1 = Freno di parcheggio non rilasciato",
    "descrizione_custom": "H1:FAM NotRelease",
    "ordine_custom": 151,
    "ordine_funzione": 412,
    "ordine_apparato": 404
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_DRSSFTYLOOPBYPSD_H1",
    "descrizione_dmms": "[Porte] 1 = By-pass \"Safety Loop\" attivato",
    "descrizione_custom": "H1:Bypass safety loop",
    "ordine_custom": 285
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_MVSSHORESUPPCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina abilitata",
    "descrizione_custom": "H1:PHCK Presa Officina abilitata",
    "ordine_custom": 291,
    "ordine_funzione": 241,
    "ordine_apparato": 255
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSDCHVKOPEN_H1",
    "descrizione_dmms": "[Trazione] 0 = Almeno un contattore di alta tensio",
    "descrizione_custom": "H1:Almeno un contattore HV aperto",
    "ordine_custom": 305
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSPCE1NOTISOLAT_H1",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H1:PCE1 \"incluso\"",
    "ordine_custom": 363
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSPCE2NOTISOLAT_H1",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H1:PCE2 \"incluso\"",
    "ordine_custom": 364
  },
  {
    "nome_colonna": "S_RIO5_H2_AI_TBSGEARBOXTEMP3",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H2:Temperatura riduttore motore 3",
    "ordine_custom": 322
  },
  {
    "nome_colonna": "S_RIO5_H2_AI_TBSGEARBOXTEMP4",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H2:Temperatura riduttore motore 4",
    "ordine_custom": 323
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRK62S125NC_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H2:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 242
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKBOGIEINDIISOLATED2_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "H2:Distributore isolato da rubinetto",
    "ordine_custom": 269
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKCMDVALVEN1106_H2",
    "descrizione_dmms": "[Freno] 1 = Inibizione ricarica condotta generale",
    "descrizione_custom": "H2:N11 inib ricarica CG",
    "ordine_custom": 222
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDIRBRKISOLATED1_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H2:Freno EP carrello motore isolato da rubinetto B61",
    "ordine_custom": 259
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDIRBRKISOLATED2_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H2:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 261
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDRVBRKVALVFZ1SW1STA_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H2:N10 SW1",
    "ordine_custom": 229
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDRVBRKVALVFZ1SW2STA_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H2:N10 SW2",
    "ordine_custom": 230
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKMECHBRKSTATBOG1_H2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H2:Freno meccanico carrello 1",
    "ordine_custom": 252
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKOVERRIDEPASSEBREQ_H2",
    "descrizione_dmms": "[Freno] 1 = Pulsante richiesta di neutralizzazione",
    "descrizione_custom": "H2:Bypass Override PAS",
    "ordine_custom": 257
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKPBISOLATIONCOCKB051_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H2:FAM Isolato B05",
    "ordine_custom": 154,
    "ordine_funzione": 416,
    "ordine_apparato": 401
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKPBNOTRELEASELOCAL1_H2",
    "descrizione_dmms": "[Freno] 1 = Freno di parcheggio non rilasciato",
    "descrizione_custom": "H2:FAM NotRelease",
    "ordine_custom": 152,
    "ordine_funzione": 418,
    "ordine_apparato": 405
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_DRSSFTYLOOPBYPSD_H2",
    "descrizione_dmms": "[Porte] 1 = By-pass \"Safety Loop\" attivato",
    "descrizione_custom": "H2:Bypass safety loop",
    "ordine_custom": 286
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_MVSSHORESUPPCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina abilitata",
    "descrizione_custom": "H2:PHCK Presa Officina abilitata",
    "ordine_custom": 292,
    "ordine_funzione": 249,
    "ordine_apparato": 256
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSDCHVKOPEN_H2",
    "descrizione_dmms": "[Trazione] 0 = Almeno un contattore di alta tensio",
    "descrizione_custom": "H2:Almeno un contattore HV aperto",
    "ordine_custom": 306
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSPCE3NOTISOLAT_H2",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H2:PCE3 \"incluso\"",
    "ordine_custom": 365
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSPCE4NOTISOLAT_H2",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H2:PCE4 \"incluso\"",
    "ordine_custom": 366
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBOGIEISOLATED1_H1",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H1:Gruppo Freno carrello motore isolato da rubinetto B03",
    "ordine_custom": 263
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBOGIEISOLATED2_H1",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H1:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 265
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBPEMERGPRESSSWITCH_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H1:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 243
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBPPRESSSWITCH_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H1:Pressione CG B62 <3.9/>4.9 bar",
    "ordine_custom": 245
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKDRVBRKVALVFZ1SW3STA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H1:N10 SW3",
    "ordine_custom": 227
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKDRVBRKVALVFZ1SW4STA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H1:N10 SW4",
    "ordine_custom": 228
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKMECHBRKSTATBOG2_H1",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H1:Freno meccanico carrello 2",
    "ordine_custom": 250
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKPBISOLATIONCOCKB681_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H1:FAM Isolato B68",
    "ordine_custom": 155,
    "ordine_funzione": 411,
    "ordine_apparato": 402
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKSIFAVALVEISOSTAT_H1",
    "descrizione_dmms": "[Freno] 0 = Valvola SIFA isolata",
    "descrizione_custom": "H1:SIFA isolata da rubinetto",
    "ordine_custom": 235
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKTESTVALVEISOLATIONCOCK_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento elettrovalvola di",
    "descrizione_custom": "H1:Rubinetto isolamento elettrovalvola di coda",
    "ordine_custom": 271
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_MVS400VSHORESOCKPLUG_H1",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina inserita",
    "descrizione_custom": "H1:Presa Officina inserita",
    "ordine_custom": 289,
    "ordine_funzione": 242,
    "ordine_apparato": 242
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_TBSPCE1NOTISOLAT_R2_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 868
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBOGIEISOLATED1_H2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H2:Gruppo Freno carrello motore isolato da rubinetto B03",
    "ordine_custom": 264
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBOGIEISOLATED2_H2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H2:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 266
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBPEMERGPRESSSWITCH_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H2:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 244
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBPPRESSSWITCH_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H2:Pressione CG B62 <3.9/>4.9 bar",
    "ordine_custom": 246
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKDRVBRKVALVFZ1SW3STA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H2:N10 SW3",
    "ordine_custom": 231
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKDRVBRKVALVFZ1SW4STA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H2:N10 SW4",
    "ordine_custom": 232
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKMECHBRKSTATBOG2_H2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H2:Freno meccanico carrello 2",
    "ordine_custom": 253
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKPBISOLATIONCOCKB681_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H2:FAM Isolato B68",
    "ordine_custom": 156,
    "ordine_funzione": 417,
    "ordine_apparato": 403
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKSIFAVALVEISOSTAT_H2",
    "descrizione_dmms": "[Freno] 0 = Valvola SIFA isolata",
    "descrizione_custom": "H2:SIFA isolata da rubinetto",
    "ordine_custom": 236
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKTESTVALVEISOLATIONCOCK_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento elettrovalvola di",
    "descrizione_custom": "H2:Rubinetto isolamento elettrovalvola di coda",
    "ordine_custom": 272
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_MVS400VSHORESOCKPLUG_H2",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina inserita",
    "descrizione_custom": "H2:Presa Officina inserita",
    "ordine_custom": 290,
    "ordine_funzione": 250,
    "ordine_apparato": 243
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_TBSPCE3NOTISOLAT_R2_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 869
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 870
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCFRESHWATERTANKFULL",
    "descrizione_dmms": "WC Fresh water tank full (variable defined as an",
    "descrizione_custom": "TOI:Acque chiare piene",
    "ordine_custom": 718
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCFRESHWATERTANKLEVEL",
    "descrizione_dmms": "WC Fresh water tank level From 0 to 100%",
    "descrizione_custom": "TOI:Livello acque chiare",
    "ordine_custom": 717
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCOCCUPIED",
    "descrizione_dmms": "WC Occupied 0:WC is not in OCCUPIED state 1:WC",
    "descrizione_custom": "TOI:WC occupato",
    "ordine_custom": 720
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCOUTOFSERVICE",
    "descrizione_dmms": "WC Out of Service 0:WC is not in OUT OF SERVICE",
    "descrizione_custom": "TOI:WC Fuori servizio",
    "ordine_custom": 719
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 871
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IEMERGVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 733
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IEXTTP_H1",
    "descrizione_dmms": "HVAC exterior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H1:Temperatura Esterna",
    "ordine_custom": 703
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IINTTP_H1",
    "descrizione_dmms": "HVAC interior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H1:Temperatura Interna",
    "ordine_custom": 704
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IVENTSTATUS_H1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK",
    "descrizione_custom": "Ventilazione Clima Cabina H1",
    "ordine_custom": 707
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 872
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IEMERGVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 734
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IEXTTP_H2",
    "descrizione_dmms": "HVAC exterior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H2:Temperatura Esterna",
    "ordine_custom": 705
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IINTTP_H2",
    "descrizione_dmms": "HVAC interior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H2:Temperatura Interna",
    "ordine_custom": 706
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IVENTSTATUS_H2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK",
    "descrizione_custom": "Ventilazione Clima Cabina H2",
    "ordine_custom": 708
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IDEGRVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 735
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 873
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IEMERGVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 736
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IHALFPOWERMODE_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 737
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IINTTP_H1",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_H1:temperatura interna",
    "ordine_custom": 713
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_ISTATIONMODE_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 738
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IVENTSTATUS_H1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Comparto H1",
    "ordine_custom": 709
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IDEGRVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 739
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 874
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IEMERGVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 740
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IHALFPOWERMODE_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 741
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IINTTP_H2",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_H2:temperatura interna",
    "ordine_custom": 716
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_ISTANDBYSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 742
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_ISTATIONMODE_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 743
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IVENTSTATUS_H2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto H2",
    "ordine_custom": 711
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IDEGRVENTSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 744
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 875
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IEMERGVENTSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 745
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IHALFPOWERMODE_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 746
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IINTTP_M1",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_M1:temperatura interna",
    "ordine_custom": 714
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_ISTANDBYSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 747
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_ISTATIONMODE_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 748
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IVENTSTATUS_M1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto M1",
    "ordine_custom": 710
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IDEGRVENTSTATUS_M2",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 749
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 876
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IEMERGVENTSTATUS_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 750
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IHALFPOWERMODE_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 751
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IINTTP_M2",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_M2:temperatura interna",
    "ordine_custom": 715
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_ISTATIONMODE_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 752
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IVENTSTATUS_M2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto M2",
    "ordine_custom": 712
  }
];
