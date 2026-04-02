const DEFAULT_DICTIONARY = [
  {
    "nome_colonna": "VEHICLE",
    "descrizione_custom": "N",
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
    "nome_colonna": "S_ACE1_ACE1_IAOIKSTATUS",
    "descrizione_dmms": "Status of the three phases line contactor (1=close",
    "descrizione_custom": "ACE1:Contattore Linea Trifase",
    "ordine_custom": 100,
    "ordine_funzione": 100,
    "ordine_apparato": 100,
    "ordine_cabina": 100
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IBATTCURR",
    "descrizione_dmms": "DC battery current (1A/bit)",
    "descrizione_custom": "ACE1:DC Corrente batteria",
    "ordine_custom": 101,
    "ordine_funzione": 101,
    "ordine_apparato": 101,
    "ordine_cabina": 101
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 102,
    "ordine_funzione": 102,
    "ordine_apparato": 102,
    "ordine_cabina": 102
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IEVTPOWERISOLREQ",
    "descrizione_dmms": "Power isolation received",
    "descrizione_custom": "ACE1:Arresto CVS Attivo",
    "ordine_custom": 103,
    "ordine_funzione": 103,
    "ordine_apparato": 103,
    "ordine_cabina": 103
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IFAN1STATUS",
    "descrizione_dmms": "Status of the Fan 1 contactor (1=closed)",
    "descrizione_custom": "ACE1:Alimentazione VENTOLA 1",
    "ordine_custom": 104,
    "ordine_funzione": 104,
    "ordine_apparato": 104,
    "ordine_cabina": 104
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IFAN2STATUS",
    "descrizione_dmms": "Status of the Fan 2 contactor (1=closed)",
    "descrizione_custom": "ACE2:Alimentazione VENTOLA 2",
    "ordine_custom": 105,
    "ordine_funzione": 105,
    "ordine_apparato": 105,
    "ordine_cabina": 105
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVCURR",
    "descrizione_dmms": "SIV input current (1A/bit)",
    "descrizione_custom": "ACE1:Corrente In SIV  ",
    "ordine_custom": 106,
    "ordine_funzione": 106,
    "ordine_apparato": 106,
    "ordine_cabina": 106
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVMODE",
    "descrizione_dmms": "ACE is in normal main mode (1 = normal mode active",
    "descrizione_custom": "ACE1:HVMODE Active",
    "ordine_custom": 107,
    "ordine_funzione": 107,
    "ordine_apparato": 107,
    "ordine_cabina": 107
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IHVVOLT",
    "descrizione_dmms": "SIV input voltage (1V/bit)",
    "descrizione_custom": "ACE1:Tensione In SIV  ",
    "ordine_custom": 108,
    "ordine_funzione": 108,
    "ordine_apparato": 108,
    "ordine_cabina": 108
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVCURR",
    "descrizione_dmms": "Output total DC current (1A/bit)",
    "descrizione_custom": "ACE1:Uscita totale corrente DC ",
    "ordine_custom": 109,
    "ordine_funzione": 109,
    "ordine_apparato": 109,
    "ordine_cabina": 109
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVOK",
    "descrizione_dmms": "LV status OK",
    "descrizione_custom": "ACE1:LVOK",
    "ordine_custom": 110,
    "ordine_funzione": 110,
    "ordine_apparato": 110,
    "ordine_cabina": 110
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ILVVOLT",
    "descrizione_dmms": "Battery voltage (1V/bit)",
    "descrizione_custom": "ACE1:Voltaggio Batteria ",
    "ordine_custom": 111,
    "ordine_funzione": 111,
    "ordine_apparato": 111,
    "ordine_cabina": 111
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IMVOK",
    "descrizione_dmms": "MV status OK",
    "descrizione_custom": "ACE1:MVOK",
    "ordine_custom": 112,
    "ordine_funzione": 112,
    "ordine_apparato": 112,
    "ordine_cabina": 112
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IREVMODE",
    "descrizione_dmms": "ACE is in reversible main mode (1 = reversible)",
    "descrizione_custom": "ACE1:Reverse Mode",
    "ordine_custom": 113,
    "ordine_funzione": 113,
    "ordine_apparato": 113,
    "ordine_cabina": 113
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRMVCURR",
    "descrizione_dmms": "Phase R output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase R",
    "ordine_custom": 114,
    "ordine_funzione": 114,
    "ordine_apparato": 114,
    "ordine_cabina": 114
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRSMVVOLT",
    "descrizione_dmms": "Voltage between phase R and S (1Vrms/bit)",
    "descrizione_custom": "ACE1:Tensione R",
    "ordine_custom": 115,
    "ordine_funzione": 115,
    "ordine_apparato": 115,
    "ordine_cabina": 115
  },
  {
    "nome_colonna": "S_ACE1_ACE1_IRTMVVOLT",
    "descrizione_dmms": "Voltage between phase R and T (1Vrms/bit)",
    "descrizione_custom": "ACE1:Tensione T ",
    "ordine_custom": 116,
    "ordine_funzione": 116,
    "ordine_apparato": 116,
    "ordine_cabina": 116
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ISMVCURR",
    "descrizione_dmms": "Phase S output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase S ",
    "ordine_custom": 117,
    "ordine_funzione": 117,
    "ordine_apparato": 117,
    "ordine_cabina": 117
  },
  {
    "nome_colonna": "S_ACE1_ACE1_ITMVCURR",
    "descrizione_dmms": "Phase T output current (1Arms/bit)",
    "descrizione_custom": "ACE1:Corrente di uscita fase T ",
    "ordine_custom": 118,
    "ordine_funzione": 118,
    "ordine_apparato": 118,
    "ordine_cabina": 118
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IAOIKSTATUS",
    "descrizione_dmms": "Status of the three phases line contactor (1=close",
    "descrizione_custom": "ACE2: Contattore Linea Trifase",
    "ordine_custom": 119,
    "ordine_funzione": 119,
    "ordine_apparato": 119,
    "ordine_cabina": 119
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IBATTCURR",
    "descrizione_dmms": "DC battery current (1A/bit)",
    "descrizione_custom": "ACE2:Corrente batteria",
    "ordine_custom": 120,
    "ordine_funzione": 120,
    "ordine_apparato": 120,
    "ordine_cabina": 120
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 121,
    "ordine_funzione": 121,
    "ordine_apparato": 121,
    "ordine_cabina": 121
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IEVTPOWERISOLREQ",
    "descrizione_dmms": "Power isolation received",
    "descrizione_custom": "ACE2:Arresto CVS Attivo",
    "ordine_custom": 122,
    "ordine_funzione": 122,
    "ordine_apparato": 122,
    "ordine_cabina": 122
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IFAN1STATUS",
    "descrizione_dmms": "Status of the Fan 1 contactor (1=closed)",
    "descrizione_custom": "ACE2:Alimentazione VENTOLA 1",
    "ordine_custom": 123,
    "ordine_funzione": 123,
    "ordine_apparato": 123,
    "ordine_cabina": 123
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IFAN2STATUS",
    "descrizione_dmms": "Status of the Fan 2 contactor (1=closed)",
    "descrizione_custom": "ACE1:Alimentazione VENTOLA 2",
    "ordine_custom": 124,
    "ordine_funzione": 124,
    "ordine_apparato": 124,
    "ordine_cabina": 124
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVCURR",
    "descrizione_dmms": "SIV input current (1A/bit)",
    "descrizione_custom": "ACE2:Corrente In SIV  ",
    "ordine_custom": 125,
    "ordine_funzione": 125,
    "ordine_apparato": 125,
    "ordine_cabina": 125
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVMODE",
    "descrizione_dmms": "ACE is in normal main mode (1 = normal mode active",
    "descrizione_custom": "ACE2:HVMODE Active",
    "ordine_custom": 126,
    "ordine_funzione": 126,
    "ordine_apparato": 126,
    "ordine_cabina": 126
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IHVVOLT",
    "descrizione_dmms": "SIV input voltage (1V/bit)",
    "descrizione_custom": "ACE2:Tensione In SIV  ",
    "ordine_custom": 127,
    "ordine_funzione": 127,
    "ordine_apparato": 127,
    "ordine_cabina": 127
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVCURR",
    "descrizione_dmms": "Output total DC current (1A/bit)",
    "descrizione_custom": "ACE2:Uscita totale corrente DC ",
    "ordine_custom": 128,
    "ordine_funzione": 128,
    "ordine_apparato": 128,
    "ordine_cabina": 128
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVOK",
    "descrizione_dmms": "LV status OK",
    "descrizione_custom": "ACE2:LVOK",
    "ordine_custom": 129,
    "ordine_funzione": 129,
    "ordine_apparato": 129,
    "ordine_cabina": 129
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ILVVOLT",
    "descrizione_dmms": "Battery voltage (1V/bit)",
    "descrizione_custom": "ACE2:Voltaggio Batteria ",
    "ordine_custom": 130,
    "ordine_funzione": 130,
    "ordine_apparato": 130,
    "ordine_cabina": 130
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IMVOK",
    "descrizione_dmms": "MV status OK",
    "descrizione_custom": "ACE2:MVOK",
    "ordine_custom": 131,
    "ordine_funzione": 131,
    "ordine_apparato": 131,
    "ordine_cabina": 131
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IREVMODE",
    "descrizione_dmms": "ACE is in reversible main mode (1 = reversible)",
    "descrizione_custom": "ACE2:Reverse Mode",
    "ordine_custom": 132,
    "ordine_funzione": 132,
    "ordine_apparato": 132,
    "ordine_cabina": 132
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRMVCURR",
    "descrizione_dmms": "Phase R output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase R",
    "ordine_custom": 133,
    "ordine_funzione": 133,
    "ordine_apparato": 133,
    "ordine_cabina": 133
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRSMVVOLT",
    "descrizione_dmms": "Voltage between phase R and S (1Vrms/bit)",
    "descrizione_custom": "ACE2:Tensione R",
    "ordine_custom": 134,
    "ordine_funzione": 134,
    "ordine_apparato": 134,
    "ordine_cabina": 134
  },
  {
    "nome_colonna": "S_ACE2_ACE2_IRTMVVOLT",
    "descrizione_dmms": "Voltage between phase R and T (1Vrms/bit)",
    "descrizione_custom": "ACE2:Tensione T",
    "ordine_custom": 135,
    "ordine_funzione": 135,
    "ordine_apparato": 135,
    "ordine_cabina": 135
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ISMVCURR",
    "descrizione_dmms": "Phase S output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase S ",
    "ordine_custom": 136,
    "ordine_funzione": 136,
    "ordine_apparato": 136,
    "ordine_cabina": 136
  },
  {
    "nome_colonna": "S_ACE2_ACE2_ITMVCURR",
    "descrizione_dmms": "Phase T output current (1Arms/bit)",
    "descrizione_custom": "ACE2:Corrente di uscita fase T ",
    "ordine_custom": 137,
    "ordine_funzione": 137,
    "ordine_apparato": 137,
    "ordine_cabina": 137
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBCUSBM",
    "descrizione_dmms": "1:SBM active (master) 0:SBM not active (\"hot...\"",
    "descrizione_custom": "BCE1: Master",
    "ordine_custom": 138,
    "ordine_funzione": 138,
    "ordine_apparato": 138,
    "ordine_cabina": 138
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPISOLN11P05",
    "descrizione_dmms": "I/O bus mirror:BP isolation valve feedback (BI_BP",
    "descrizione_custom": "BCE1:mirror:BP isolation valve feedback (BI_BPIsol_N11.05)",
    "ordine_custom": 139,
    "ordine_funzione": 139,
    "ordine_apparato": 139,
    "ordine_cabina": 139
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPISOLN11P06",
    "descrizione_dmms": "I/O bus mirror:BP isolation command (RO_BPIsol_N1",
    "descrizione_custom": "BCE1:mirror:BP isolation command (RO_BPIsol_N11.06)",
    "ordine_custom": 140,
    "ordine_funzione": 140,
    "ordine_apparato": 140,
    "ordine_cabina": 140
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Brake Pipe pressure",
    "descrizione_custom": "BCE1:CG Locale",
    "ordine_custom": 141,
    "ordine_funzione": 141,
    "ordine_apparato": 141,
    "ordine_cabina": 141
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IBRAKINGL",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Braking_L",
    "descrizione_custom": "BCE1:TL Braking_L",
    "ordine_custom": 142,
    "ordine_funzione": 142,
    "ordine_apparato": 142,
    "ordine_cabina": 142
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICABENABLED",
    "descrizione_dmms": "I/O bus mirror:Desk enable (BI_CabEnabled):0 = n",
    "descrizione_custom": "BCE1:mirror:Cabina H1 Attiva",
    "ordine_custom": 143,
    "ordine_funzione": 143,
    "ordine_apparato": 143,
    "ordine_cabina": 143
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICABNEUTRALISED",
    "descrizione_dmms": "I/O bus mirror:One cab already active in train (T",
    "descrizione_custom": "BCE1:mirror:One cab already active in train (TL_CabNeutralised)",
    "ordine_custom": 144,
    "ordine_funzione": 144,
    "ordine_apparato": 144,
    "ordine_cabina": 144
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE1:Pressione frenatura asse 1",
    "ordine_custom": 145,
    "ordine_funzione": 145,
    "ordine_apparato": 145,
    "ordine_cabina": 145
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE1:Pressione frenatura asse 2",
    "ordine_custom": 146,
    "ordine_funzione": 146,
    "ordine_apparato": 146,
    "ordine_cabina": 146
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 147,
    "ordine_funzione": 147,
    "ordine_apparato": 147,
    "ordine_cabina": 147
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDOORSBLOCKED",
    "descrizione_dmms": "I/O bus mirror:Door status closed and locked (TL_",
    "descrizione_custom": "BCE1:TL Stato Porte Chiuse e Bloccate",
    "ordine_custom": 148,
    "ordine_funzione": 148,
    "ordine_apparato": 148,
    "ordine_cabina": 148
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IDOORSRELEASEDL",
    "descrizione_dmms": "I/O bus mirror:Door status released (TL_DoorsRele",
    "descrizione_custom": "BCE1:TL Stato Porte Rilasciate_L",
    "ordine_custom": 149,
    "ordine_funzione": 149,
    "ordine_apparato": 149,
    "ordine_cabina": 149
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IEMERGENCYL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 150,
    "ordine_funzione": 150,
    "ordine_apparato": 150,
    "ordine_cabina": 150
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE1:Freno a Frizione Applicato",
    "ordine_custom": 151,
    "ordine_funzione": 151,
    "ordine_apparato": 151,
    "ordine_cabina": 151
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE1:Holding Brake Attivo",
    "ordine_custom": 152,
    "ordine_funzione": 152,
    "ordine_apparato": 152,
    "ordine_cabina": 152
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICBPTEST",
    "descrizione_dmms": "I/O bus mirror:Brake pipe test EV isolation Cock:",
    "descrizione_custom": "BCE1:I/O bus mirror:Brake pipe test EV isolation Cock:0 = cock closed 1 = cock open",
    "ordine_custom": 153,
    "ordine_funzione": 153,
    "ordine_apparato": 153,
    "ordine_cabina": 153
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICISOLN11P09",
    "descrizione_dmms": "I/O bus mirror:BP isolation EV by-pass (IC_Isol_N",
    "descrizione_custom": "BCE1:mirror:BP isolation EV by-pass (IC_Isol_N11.09)",
    "ordine_custom": 154,
    "ordine_funzione": 154,
    "ordine_apparato": 154,
    "ordine_cabina": 154
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICISOLN11P20",
    "descrizione_dmms": "I/O bus mirror:BP Ctrl module Isolation Cock (IC_",
    "descrizione_custom": "BCE1:mirror:BP Ctrl module Isolation Cock (IC_Isol_N11.20)",
    "ordine_custom": 155,
    "ordine_funzione": 155,
    "ordine_apparato": 155,
    "ordine_cabina": 155
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IICSANDING",
    "descrizione_dmms": "I/O bus mirror:Sanding module isolation cock:0",
    "descrizione_custom": "BCE1:I/O bus mirror:Sanding module isolation cock:0 = cock closed 1 = cock open",
    "ordine_custom": 156,
    "ordine_funzione": 156,
    "ordine_apparato": 156,
    "ordine_cabina": 156
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE1:Pressione sospensione  H1 mot 02.08",
    "ordine_custom": 157,
    "ordine_funzione": 157,
    "ordine_apparato": 157,
    "ordine_cabina": 157
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMAJORFAULTLIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status BI_Major_Fault_L",
    "descrizione_custom": "BCE1:TL MJF IN",
    "ordine_custom": 158,
    "ordine_funzione": 158,
    "ordine_apparato": 158,
    "ordine_cabina": 158
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE1:TL MJF OUT",
    "ordine_custom": 159,
    "ordine_funzione": 159,
    "ordine_apparato": 159,
    "ordine_cabina": 159
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IMPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Main Pipe pressure",
    "descrizione_custom": "BCE1:CP Locale",
    "ordine_custom": 160,
    "ordine_funzione": 160,
    "ordine_apparato": 160,
    "ordine_cabina": 160
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPASLOOP",
    "descrizione_dmms": "I/O bus mirror:PAS train loop (TL_PAS_Loop)",
    "descrizione_custom": "BCE1:TL PAS",
    "ordine_custom": 161,
    "ordine_funzione": 161,
    "ordine_apparato": 161,
    "ordine_cabina": 161
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLIED",
    "descrizione_dmms": "Parking Brake status:Parking Brake applied (1 = a",
    "descrizione_custom": "BCE1:Stato FAM",
    "ordine_custom": 162,
    "ordine_funzione": 162,
    "ordine_apparato": 162,
    "ordine_cabina": 162
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLY2OUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE1:2° Comando FAM",
    "ordine_custom": 163,
    "ordine_funzione": 163,
    "ordine_apparato": 163,
    "ordine_cabina": 163
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLYIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.21",
    "descrizione_custom": "BCE1:FAM Applicato",
    "ordine_custom": 164,
    "ordine_funzione": 164,
    "ordine_apparato": 164,
    "ordine_cabina": 164
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBAPPLYOUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE1:1° Comando FAM",
    "ordine_custom": 165,
    "ordine_funzione": 165,
    "ordine_apparato": 165,
    "ordine_cabina": 165
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPBRELEASEIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.22",
    "descrizione_custom": "BCE1:FAM Rilasciato",
    "ordine_custom": 166,
    "ordine_funzione": 166,
    "ordine_apparato": 166,
    "ordine_cabina": 166
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IPEBOVERRIDE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 167,
    "ordine_funzione": 167,
    "ordine_apparato": 167,
    "ordine_cabina": 167
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE1:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 168,
    "ordine_funzione": 168,
    "ordine_apparato": 168,
    "ordine_cabina": 168
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ISPEEDAXLE1",
    "descrizione_dmms": "WSP Status:Speed of axle 1 connected to EBCU",
    "descrizione_custom": "BCE1:Velocità asse1",
    "ordine_custom": 169,
    "ordine_funzione": 169,
    "ordine_apparato": 169,
    "ordine_cabina": 169
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ISTOPPINGACTIVE",
    "descrizione_dmms": "Stopping brake (ED fade-out) activated",
    "descrizione_custom": "BCE1:Freno di arresto (ED dissolvenza in uscita) attivato",
    "ordine_custom": 170,
    "ordine_funzione": 170,
    "ordine_apparato": 170,
    "ordine_cabina": 170
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ITBMBTMSG",
    "descrizione_dmms": "Encoded BT command to be used by TCMS to show driv",
    "descrizione_custom": "BCE1:Encoded BT command to be used by TCMS to show driver messages regarding steps",
    "ordine_custom": 171,
    "ordine_funzione": 171,
    "ordine_apparato": 171,
    "ordine_cabina": 171
  },
  {
    "nome_colonna": "S_BCE1_BCE1_ITRACTION",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Traction",
    "descrizione_custom": "BCE1:TL Traction",
    "ordine_custom": 172,
    "ordine_funzione": 172,
    "ordine_apparato": 172,
    "ordine_cabina": 172
  },
  {
    "nome_colonna": "S_BCE1_BCE1_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE1:Segnale velocità 0",
    "ordine_custom": 173,
    "ordine_funzione": 173,
    "ordine_apparato": 173,
    "ordine_cabina": 173
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBCUSBM",
    "descrizione_dmms": "1:SBM active (master) 0:SBM not active (\"hot...\"",
    "descrizione_custom": "BCE2: Master",
    "ordine_custom": 174,
    "ordine_funzione": 174,
    "ordine_apparato": 174,
    "ordine_cabina": 174
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPISOLN11P05",
    "descrizione_dmms": "I/O bus mirror:BP isolation valve feedback (BI_BP",
    "descrizione_custom": "BCE2:mirror:BP isolation valve feedback (BI_BPIsol_N11.05)",
    "ordine_custom": 175,
    "ordine_funzione": 175,
    "ordine_apparato": 175,
    "ordine_cabina": 175
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPISOLN11P06",
    "descrizione_dmms": "I/O bus mirror:BP isolation command (RO_BPIsol_N1",
    "descrizione_custom": "BCE2:mirror:BP isolation command (RO_BPIsol_N11.06)",
    "ordine_custom": 176,
    "ordine_funzione": 176,
    "ordine_apparato": 176,
    "ordine_cabina": 176
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Brake Pipe pressure",
    "descrizione_custom": "BCE2:CG Locale",
    "ordine_custom": 177,
    "ordine_funzione": 177,
    "ordine_apparato": 177,
    "ordine_cabina": 177
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IBRAKINGL",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Braking_L",
    "descrizione_custom": "BCE2:TL Braking_L",
    "ordine_custom": 178,
    "ordine_funzione": 178,
    "ordine_apparato": 178,
    "ordine_cabina": 178
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICABENABLED",
    "descrizione_dmms": "I/O bus mirror:Desk enable (BI_CabEnabled):0 = n",
    "descrizione_custom": "BCE2:mirror:Cabina H2 Attiva",
    "ordine_custom": 179,
    "ordine_funzione": 179,
    "ordine_apparato": 179,
    "ordine_cabina": 179
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICABNEUTRALISED",
    "descrizione_dmms": "I/O bus mirror:One cab already active in train (T",
    "descrizione_custom": "BCE2:mirror:One cab already active in train (TL_CabNeutralised)",
    "ordine_custom": 180,
    "ordine_funzione": 180,
    "ordine_apparato": 180,
    "ordine_cabina": 180
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE2:Pressione frenatura asse 1",
    "ordine_custom": 181,
    "ordine_funzione": 181,
    "ordine_apparato": 181,
    "ordine_cabina": 181
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE3:Pressione frenatura asse 2",
    "ordine_custom": 182,
    "ordine_funzione": 182,
    "ordine_apparato": 182,
    "ordine_cabina": 182
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 183,
    "ordine_funzione": 183,
    "ordine_apparato": 183,
    "ordine_cabina": 183
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDOORSBLOCKED",
    "descrizione_dmms": "I/O bus mirror:Door status closed and locked (TL_",
    "descrizione_custom": "BCE2:TL Stato Porte Chiuse e Bloccate",
    "ordine_custom": 184,
    "ordine_funzione": 184,
    "ordine_apparato": 184,
    "ordine_cabina": 184
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IDOORSRELEASEDL",
    "descrizione_dmms": "I/O bus mirror:Door status released (TL_DoorsRele",
    "descrizione_custom": "BCE1:TL Stato Porte Rilasciate_L",
    "ordine_custom": 185,
    "ordine_funzione": 185,
    "ordine_apparato": 185,
    "ordine_cabina": 185
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IEMERGENCYL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 186,
    "ordine_funzione": 186,
    "ordine_apparato": 186,
    "ordine_cabina": 186
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE2:Freno a Frizione Applicato",
    "ordine_custom": 187,
    "ordine_funzione": 187,
    "ordine_apparato": 187,
    "ordine_cabina": 187
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE2:Holding Brake Attivo",
    "ordine_custom": 188,
    "ordine_funzione": 188,
    "ordine_apparato": 188,
    "ordine_cabina": 188
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICBPTEST",
    "descrizione_dmms": "I/O bus mirror:Brake pipe test EV isolation Cock:",
    "descrizione_custom": "BCE2:I/O bus mirror:Brake pipe test EV isolation Cock:0 = cock closed 1 = cock open",
    "ordine_custom": 189,
    "ordine_funzione": 189,
    "ordine_apparato": 189,
    "ordine_cabina": 189
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICISOLN11P09",
    "descrizione_dmms": "I/O bus mirror:BP isolation EV by-pass (IC_Isol_N",
    "descrizione_custom": "BCE2:mirror:BP isolation EV by-pass (IC_Isol_N11.09)",
    "ordine_custom": 190,
    "ordine_funzione": 190,
    "ordine_apparato": 190,
    "ordine_cabina": 190
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICISOLN11P20",
    "descrizione_dmms": "I/O bus mirror:BP Ctrl module Isolation Cock (IC_",
    "descrizione_custom": "BCE2:mirror:BP Ctrl module Isolation Cock (IC_Isol_N11.20=",
    "ordine_custom": 191,
    "ordine_funzione": 191,
    "ordine_apparato": 191,
    "ordine_cabina": 191
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IICSANDING",
    "descrizione_dmms": "I/O bus mirror:Sanding module isolation cock:0",
    "descrizione_custom": "BCE2:I/O bus mirror:Sanding module isolation cock:0 = cock closed 1 = cock open",
    "ordine_custom": 192,
    "ordine_funzione": 192,
    "ordine_apparato": 192,
    "ordine_cabina": 192
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE2:Pressione sospensione  H2 mot 02.08",
    "ordine_custom": 193,
    "ordine_funzione": 193,
    "ordine_apparato": 193,
    "ordine_cabina": 193
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMAJORFAULTLIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status BI_Major_Fault_L",
    "descrizione_custom": "BCE2:TL MJF IN",
    "ordine_custom": 194,
    "ordine_funzione": 194,
    "ordine_apparato": 194,
    "ordine_cabina": 194
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE2:TL MJF OUT",
    "ordine_custom": 195,
    "ordine_funzione": 195,
    "ordine_apparato": 195,
    "ordine_cabina": 195
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IMPPRESSURELOCAL",
    "descrizione_dmms": "I/O bus mirror:Main Pipe pressure",
    "descrizione_custom": "BCE2:CP Locale",
    "ordine_custom": 196,
    "ordine_funzione": 196,
    "ordine_apparato": 196,
    "ordine_cabina": 196
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPASLOOP",
    "descrizione_dmms": "I/O bus mirror:PAS train loop (TL_PAS_Loop)",
    "descrizione_custom": "BCE2:TL PAS",
    "ordine_custom": 197,
    "ordine_funzione": 197,
    "ordine_apparato": 197,
    "ordine_cabina": 197
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLIED",
    "descrizione_dmms": "Parking Brake status:Parking Brake applied (1 = a",
    "descrizione_custom": "BCE2:Stato FAM",
    "ordine_custom": 198,
    "ordine_funzione": 198,
    "ordine_apparato": 198,
    "ordine_cabina": 198
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLY2OUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE2:2° Comando FAM",
    "ordine_custom": 199,
    "ordine_funzione": 199,
    "ordine_apparato": 199,
    "ordine_cabina": 199
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLYIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.21",
    "descrizione_custom": "BCE2:FAM Applicato",
    "ordine_custom": 200,
    "ordine_funzione": 200,
    "ordine_apparato": 200,
    "ordine_cabina": 200
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBAPPLYOUT",
    "descrizione_dmms": "I/O bus mirror:Command to apply Parking Brake (RO",
    "descrizione_custom": "BCE2:1° Comando FAM",
    "ordine_custom": 201,
    "ordine_funzione": 201,
    "ordine_apparato": 201,
    "ordine_cabina": 201
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPBRELEASEIN",
    "descrizione_dmms": "I/O bus mirror:Trainline status <EPC>.01.22",
    "descrizione_custom": "BCE2:FAM Rilasciato",
    "ordine_custom": 202,
    "ordine_funzione": 202,
    "ordine_apparato": 202,
    "ordine_cabina": 202
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IPEBOVERRIDE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 203,
    "ordine_funzione": 203,
    "ordine_apparato": 203,
    "ordine_cabina": 203
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE2:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 204,
    "ordine_funzione": 204,
    "ordine_apparato": 204,
    "ordine_cabina": 204
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ISPEEDAXLE1",
    "descrizione_dmms": "WSP Status:Speed of axle 1 connected to EBCU",
    "descrizione_custom": "BCE2:Velocità asse2",
    "ordine_custom": 205,
    "ordine_funzione": 205,
    "ordine_apparato": 205,
    "ordine_cabina": 205
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ISTOPPINGACTIVE",
    "descrizione_dmms": "Stopping brake (ED fade-out) activated",
    "descrizione_custom": "BCE2:Freno di arresto (ED dissolvenza in uscita) attivato",
    "ordine_custom": 206,
    "ordine_funzione": 206,
    "ordine_apparato": 206,
    "ordine_cabina": 206
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ITBMBTMSG",
    "descrizione_dmms": "Encoded BT command to be used by TCMS to show driv",
    "descrizione_custom": "BCE2:Encoded BT command to be used by TCMS to show driver messages regarding steps",
    "ordine_custom": 207,
    "ordine_funzione": 207,
    "ordine_apparato": 207,
    "ordine_cabina": 207
  },
  {
    "nome_colonna": "S_BCE2_BCE2_ITRACTION",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_Traction",
    "descrizione_custom": "BCE2:TL Traction",
    "ordine_custom": 208,
    "ordine_funzione": 208,
    "ordine_apparato": 208,
    "ordine_cabina": 208
  },
  {
    "nome_colonna": "S_BCE2_BCE2_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE2:Segnale velocità 0",
    "ordine_custom": 209,
    "ordine_funzione": 209,
    "ordine_apparato": 209,
    "ordine_cabina": 209
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE3:Pressione frenatura asse 1",
    "ordine_custom": 210,
    "ordine_funzione": 210,
    "ordine_apparato": 210,
    "ordine_cabina": 210
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE3:Pressione frenatura asse 2",
    "ordine_custom": 211,
    "ordine_funzione": 211,
    "ordine_apparato": 211,
    "ordine_cabina": 211
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 212,
    "ordine_funzione": 212,
    "ordine_apparato": 212,
    "ordine_cabina": 212
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE3:Freno a Frizione Applicato",
    "ordine_custom": 213,
    "ordine_funzione": 213,
    "ordine_apparato": 213,
    "ordine_cabina": 213
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE3:Holding Brake Attivo",
    "ordine_custom": 214,
    "ordine_funzione": 214,
    "ordine_apparato": 214,
    "ordine_cabina": 214
  },
  {
    "nome_colonna": "S_BCE3_BCE3_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE3:Pressione sospensione  H1 port 02.08",
    "ordine_custom": 215,
    "ordine_funzione": 215,
    "ordine_apparato": 215,
    "ordine_cabina": 215
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE3:TL MJF OUT",
    "ordine_custom": 216,
    "ordine_funzione": 216,
    "ordine_apparato": 216,
    "ordine_cabina": 216
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE3:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 217,
    "ordine_funzione": 217,
    "ordine_apparato": 217,
    "ordine_cabina": 217
  },
  {
    "nome_colonna": "S_BCE3_BCE3_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE3:Segnale velocità 0",
    "ordine_custom": 218,
    "ordine_funzione": 218,
    "ordine_apparato": 218,
    "ordine_cabina": 218
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE4:Pressione frenatura asse 1",
    "ordine_custom": 219,
    "ordine_funzione": 219,
    "ordine_apparato": 219,
    "ordine_cabina": 219
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE4:Pressione frenatura asse 2",
    "ordine_custom": 220,
    "ordine_funzione": 220,
    "ordine_apparato": 220,
    "ordine_cabina": 220
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 221,
    "ordine_funzione": 221,
    "ordine_apparato": 221,
    "ordine_cabina": 221
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE4:Freno a Frizione Applicato",
    "ordine_custom": 222,
    "ordine_funzione": 222,
    "ordine_apparato": 222,
    "ordine_cabina": 222
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE4:Holding Brake Attivo",
    "ordine_custom": 223,
    "ordine_funzione": 223,
    "ordine_apparato": 223,
    "ordine_cabina": 223
  },
  {
    "nome_colonna": "S_BCE4_BCE4_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE4:Pressione sospensione  H2 port 02.08",
    "ordine_custom": 224,
    "ordine_funzione": 224,
    "ordine_apparato": 224,
    "ordine_cabina": 224
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE4:TL MJF OUT",
    "ordine_custom": 225,
    "ordine_funzione": 225,
    "ordine_apparato": 225,
    "ordine_cabina": 225
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE4:Modalità di Soccorso/Recupero Treno (74S08)",
    "ordine_custom": 226,
    "ordine_funzione": 226,
    "ordine_apparato": 226,
    "ordine_cabina": 226
  },
  {
    "nome_colonna": "S_BCE4_BCE4_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE4:Segnale velocità 0",
    "ordine_custom": 227,
    "ordine_funzione": 227,
    "ordine_apparato": 227,
    "ordine_cabina": 227
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ICPRESSUREAXLE1",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 1",
    "descrizione_custom": "BCE5:Pressione frenatura asse 1",
    "ordine_custom": 228,
    "ordine_funzione": 228,
    "ordine_apparato": 228,
    "ordine_cabina": 228
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ICPRESSUREAXLE2",
    "descrizione_dmms": "I/O bus mirror:Brake pressure axle 2",
    "descrizione_custom": "BCE5:Pressione frenatura asse 2",
    "ordine_custom": 229,
    "ordine_funzione": 229,
    "ordine_apparato": 229,
    "ordine_cabina": 229
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 230,
    "ordine_funzione": 230,
    "ordine_apparato": 230,
    "ordine_cabina": 230
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IFBAPPLIED",
    "descrizione_dmms": "Friction brake status:Friction Brake applied (1 =",
    "descrizione_custom": "BCE5:Freno a Frizione Applicato",
    "ordine_custom": 231,
    "ordine_funzione": 231,
    "ordine_apparato": 231,
    "ordine_cabina": 231
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IHOLDINGACTIVE",
    "descrizione_dmms": "Holding brake applied",
    "descrizione_custom": "BCE5:Holding Brake Attivo",
    "ordine_custom": 232,
    "ordine_funzione": 232,
    "ordine_apparato": 232,
    "ordine_cabina": 232
  },
  {
    "nome_colonna": "S_BCE5_BCE5_ILPRESSURE",
    "descrizione_dmms": "I/O bus mirror:Load pressure <EPC>.02.08",
    "descrizione_custom": "BCE5:Pressione sospensione  M2 port 02.08",
    "ordine_custom": 233,
    "ordine_funzione": 233,
    "ordine_apparato": 233,
    "ordine_cabina": 233
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IMAJORFAULTLOUT",
    "descrizione_dmms": "I/O bus mirror:Relay status for major fault infor",
    "descrizione_custom": "BCE5:TL MJF OUT",
    "ordine_custom": 234,
    "ordine_funzione": 234,
    "ordine_apparato": 234,
    "ordine_cabina": 234
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IRESCUEDMODE",
    "descrizione_dmms": "I/O bus mirror:Trainline status TL_RescuedMode",
    "descrizione_custom": "BCE5:Modalità di Soccorso/Recupero Treno ( 74S08)",
    "ordine_custom": 235,
    "ordine_funzione": 235,
    "ordine_apparato": 235,
    "ordine_cabina": 235
  },
  {
    "nome_colonna": "S_BCE5_BCE5_IZEROSPEED",
    "descrizione_dmms": "I/O bus mirror:zero speed threshold signal (RO_Ze",
    "descrizione_custom": "BCE5:Segnale velocità 0",
    "ordine_custom": 236,
    "ordine_funzione": 236,
    "ordine_apparato": 236,
    "ordine_cabina": 236
  },
  {
    "nome_colonna": "S_DBX_TSTAMP",
    "descrizione_dmms": "timestamp di acquisizione",
    "descrizione_custom": "",
    "ordine_custom": 237,
    "ordine_funzione": 237,
    "ordine_apparato": 237,
    "ordine_cabina": 237
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ICREWZACTD_H1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU1-H1:Crew Switch Azionato",
    "ordine_custom": 238,
    "ordine_funzione": 238,
    "ordine_apparato": 238,
    "ordine_cabina": 238
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 239,
    "ordine_funzione": 239,
    "ordine_apparato": 239,
    "ordine_cabina": 239
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORISOL_H1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU1-H1:Isolamento P/G/E",
    "ordine_custom": 240,
    "ordine_apparato": 240,
    "ordine_funzione": 240,
    "ordine_cabina": 240
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORLOCKED_H1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU1-H1:Porta Chiusa e Bloccata",
    "ordine_custom": 241,
    "ordine_apparato": 241,
    "ordine_funzione": 241,
    "ordine_cabina": 241
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDOORPOS_H1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU1-H1:Posizione Porta (%) [1 SX]",
    "ordine_custom": 242,
    "ordine_apparato": 242,
    "ordine_funzione": 242,
    "ordine_cabina": 242
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IDRSRELEASED_H1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU1-H1:Door Released",
    "ordine_custom": 243,
    "ordine_apparato": 243,
    "ordine_funzione": 243,
    "ordine_cabina": 243
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IEADACT_H1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU4-M1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 244,
    "ordine_apparato": 244,
    "ordine_funzione": 244,
    "ordine_cabina": 244
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IEEDACT_H1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU1-H1:Attivazione emergenza IN/OUT",
    "ordine_custom": 245,
    "ordine_apparato": 245,
    "ordine_funzione": 245,
    "ordine_cabina": 245
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IRQREMDRSCLS_H1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU1-H1:Richiesta telechiusura locale",
    "ordine_custom": 246,
    "ordine_apparato": 246,
    "ordine_funzione": 246,
    "ordine_cabina": 246
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISFTYRLYACTD_H1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU1-H1:Relè Interlock Trazione Attivo",
    "ordine_custom": 247,
    "ordine_apparato": 247,
    "ordine_funzione": 247,
    "ordine_cabina": 247
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPAISOLD_H1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU1-H1:Gradino isolato",
    "ordine_custom": 248,
    "ordine_apparato": 248,
    "ordine_funzione": 248,
    "ordine_cabina": 248
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPALOCKED_H1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU1-H1:Gradino Chiuso e bloccato",
    "ordine_custom": 249,
    "ordine_apparato": 249,
    "ordine_funzione": 249,
    "ordine_cabina": 249
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_ISTEPAPOS_H1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU1-H1:Step A position (in mm) ",
    "ordine_custom": 250,
    "ordine_apparato": 250,
    "ordine_funzione": 250,
    "ordine_cabina": 250
  },
  {
    "nome_colonna": "S_DCU1_H1_DCU1_IZVINPUT_H1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU1-H1:Segnale velocità 0",
    "ordine_custom": 251,
    "ordine_apparato": 251,
    "ordine_funzione": 251,
    "ordine_cabina": 251
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ICREWZACTD_M2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU1-M2:Crew Switch Azionato",
    "ordine_custom": 252,
    "ordine_apparato": 252,
    "ordine_funzione": 252,
    "ordine_cabina": 252
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 253,
    "ordine_funzione": 253,
    "ordine_apparato": 253,
    "ordine_cabina": 253
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORISOL_M2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU1-M2:Isolamento P/G/E",
    "ordine_custom": 254,
    "ordine_apparato": 254,
    "ordine_funzione": 254,
    "ordine_cabina": 254
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORLOCKED_M2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU1-M2:Porta Chiusa e Bloccata",
    "ordine_custom": 255,
    "ordine_apparato": 255,
    "ordine_funzione": 255,
    "ordine_cabina": 255
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDOORPOS_M2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU1-M2:Posizione Porta (%) [3 SX]",
    "ordine_custom": 256,
    "ordine_apparato": 256,
    "ordine_funzione": 256,
    "ordine_cabina": 256
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IDRSRELEASED_M2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU1-M2:Door Released",
    "ordine_custom": 257,
    "ordine_apparato": 257,
    "ordine_funzione": 257,
    "ordine_cabina": 257
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IEADACT_M2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU2-M2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 258,
    "ordine_apparato": 258,
    "ordine_funzione": 258,
    "ordine_cabina": 258
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IEEDACT_M2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU1-M2:Attivazione emergenza IN/OUT",
    "ordine_custom": 259,
    "ordine_apparato": 259,
    "ordine_funzione": 259,
    "ordine_cabina": 259
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IRQREMDRSCLS_M2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU1-M2:Richiesta telechiusura locale",
    "ordine_custom": 260,
    "ordine_apparato": 260,
    "ordine_funzione": 260,
    "ordine_cabina": 260
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISFTYRLYACTD_M2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU1-M2:Relè Interlock Trazione Attivo",
    "ordine_custom": 261,
    "ordine_apparato": 261,
    "ordine_funzione": 261,
    "ordine_cabina": 261
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPAISOLD_M2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU1-M2:Gradino isolato",
    "ordine_custom": 262,
    "ordine_apparato": 262,
    "ordine_funzione": 262,
    "ordine_cabina": 262
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPALOCKED_M2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU1-M2:Gradino Chiuso e bloccato",
    "ordine_custom": 263,
    "ordine_apparato": 263,
    "ordine_funzione": 263,
    "ordine_cabina": 263
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_ISTEPAPOS_M2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU1-M2:step A position (in mm) ",
    "ordine_custom": 264,
    "ordine_apparato": 264,
    "ordine_funzione": 264,
    "ordine_cabina": 264
  },
  {
    "nome_colonna": "S_DCU1_M2_DCU1_IZVINPUT_M2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU1-M2:Segnale velocità 0",
    "ordine_custom": 265,
    "ordine_apparato": 265,
    "ordine_funzione": 265,
    "ordine_cabina": 265
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ICREWZACTD_H1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU2-H1:Crew Switch Azionato",
    "ordine_custom": 266,
    "ordine_funzione": 266,
    "ordine_apparato": 266,
    "ordine_cabina": 266
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 267,
    "ordine_funzione": 267,
    "ordine_apparato": 267,
    "ordine_cabina": 267
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORISOL_H1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU2-H1:Isolamento P/G/E",
    "ordine_custom": 268,
    "ordine_apparato": 268,
    "ordine_funzione": 268,
    "ordine_cabina": 268
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORLOCKED_H1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU2-H1:Porta Chiusa e Bloccata",
    "ordine_custom": 269,
    "ordine_apparato": 269,
    "ordine_funzione": 269,
    "ordine_cabina": 269
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDOORPOS_H1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU2-H1:Posizione Porta (%) [1 DX]",
    "ordine_custom": 270,
    "ordine_apparato": 270,
    "ordine_funzione": 270,
    "ordine_cabina": 270
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IDRSRELEASED_H1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU2-H1:Door Released",
    "ordine_custom": 271,
    "ordine_apparato": 271,
    "ordine_funzione": 271,
    "ordine_cabina": 271
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IEADACT_H1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU2-H1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 272,
    "ordine_apparato": 272,
    "ordine_funzione": 272,
    "ordine_cabina": 272
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IEEDACT_H1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU2-H1:Attivazione emergenza IN/OUT",
    "ordine_custom": 273,
    "ordine_apparato": 273,
    "ordine_funzione": 273,
    "ordine_cabina": 273
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IRQREMDRSCLS_H1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU2-H1:Richiesta telechiusura locale",
    "ordine_custom": 274,
    "ordine_apparato": 274,
    "ordine_funzione": 274,
    "ordine_cabina": 274
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISFTYRLYACTD_H1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU2-H1:Relè Interlock Trazione Attivo",
    "ordine_custom": 275,
    "ordine_apparato": 275,
    "ordine_funzione": 275,
    "ordine_cabina": 275
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPAISOLD_H1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU2-H1:Gradino isolato",
    "ordine_custom": 276,
    "ordine_apparato": 276,
    "ordine_funzione": 276,
    "ordine_cabina": 276
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPALOCKED_H1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU2-H1:Gradino Chiuso e bloccato",
    "ordine_custom": 277,
    "ordine_apparato": 277,
    "ordine_funzione": 277,
    "ordine_cabina": 277
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_ISTEPAPOS_H1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU2-H1:Step A position (in mm) ",
    "ordine_custom": 278,
    "ordine_apparato": 278,
    "ordine_funzione": 278,
    "ordine_cabina": 278
  },
  {
    "nome_colonna": "S_DCU2_H1_DCU2_IZVINPUT_H1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU2-H1:Segnale velocità 0",
    "ordine_custom": 279,
    "ordine_apparato": 279,
    "ordine_funzione": 279,
    "ordine_cabina": 279
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ICREWZACTD_M2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU2-M2:Crew Switch Azionato",
    "ordine_custom": 280,
    "ordine_apparato": 280,
    "ordine_funzione": 280,
    "ordine_cabina": 280
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 281,
    "ordine_funzione": 281,
    "ordine_apparato": 281,
    "ordine_cabina": 281
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORISOL_M2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU2-M2:Isolamento P/G/E",
    "ordine_custom": 282,
    "ordine_apparato": 282,
    "ordine_funzione": 282,
    "ordine_cabina": 282
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORLOCKED_M2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU2-M2:Porta Chiusa e Bloccata",
    "ordine_custom": 283,
    "ordine_apparato": 283,
    "ordine_funzione": 283,
    "ordine_cabina": 283
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDOORPOS_M2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU2-M2:Posizione Porta (%) [3 DX]",
    "ordine_custom": 284,
    "ordine_apparato": 284,
    "ordine_funzione": 284,
    "ordine_cabina": 284
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IDRSRELEASED_M2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU2-M2:Door Released",
    "ordine_custom": 285,
    "ordine_apparato": 285,
    "ordine_funzione": 285,
    "ordine_cabina": 285
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IEADACT_M2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU4-H2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 286,
    "ordine_apparato": 286,
    "ordine_funzione": 286,
    "ordine_cabina": 286
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IEEDACT_M2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU2-M2:Attivazione emergenza IN/OUT",
    "ordine_custom": 287,
    "ordine_apparato": 287,
    "ordine_funzione": 287,
    "ordine_cabina": 287
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IRQREMDRSCLS_M2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU2-M2:Richiesta telechiusura locale",
    "ordine_custom": 288,
    "ordine_apparato": 288,
    "ordine_funzione": 288,
    "ordine_cabina": 288
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISFTYRLYACTD_M2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU2-M2:Relè Interlock Trazione Attivo",
    "ordine_custom": 289,
    "ordine_apparato": 289,
    "ordine_funzione": 289,
    "ordine_cabina": 289
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPAISOLD_M2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU2-M2:Gradino isolato",
    "ordine_custom": 290,
    "ordine_apparato": 290,
    "ordine_funzione": 290,
    "ordine_cabina": 290
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPALOCKED_M2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU2-M2:Gradino Chiuso e bloccato",
    "ordine_custom": 291,
    "ordine_apparato": 291,
    "ordine_funzione": 291,
    "ordine_cabina": 291
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_ISTEPAPOS_M2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU2-M2:Step A position (in mm) ",
    "ordine_custom": 292,
    "ordine_apparato": 292,
    "ordine_funzione": 292,
    "ordine_cabina": 292
  },
  {
    "nome_colonna": "S_DCU2_M2_DCU2_IZVINPUT_M2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU2-M2:Segnale velocità 0",
    "ordine_custom": 293,
    "ordine_apparato": 293,
    "ordine_funzione": 293,
    "ordine_cabina": 293
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ICREWZACTD_H2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU3-H2:Crew Switch Azionato",
    "ordine_custom": 294,
    "ordine_funzione": 294,
    "ordine_apparato": 294,
    "ordine_cabina": 294
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 295,
    "ordine_funzione": 295,
    "ordine_apparato": 295,
    "ordine_cabina": 295
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORISOL_H2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU3-H2:Isolamento P/G/E",
    "ordine_custom": 296,
    "ordine_apparato": 296,
    "ordine_funzione": 296,
    "ordine_cabina": 296
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORLOCKED_H2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU3-H2:Porta Chiusa e Bloccata",
    "ordine_custom": 297,
    "ordine_apparato": 297,
    "ordine_funzione": 297,
    "ordine_cabina": 297
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDOORPOS_H2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU3-H2:Posizione Porta (%) [4 SX]",
    "ordine_custom": 298,
    "ordine_apparato": 298,
    "ordine_funzione": 298,
    "ordine_cabina": 298
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IDRSRELEASED_H2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU3-H2:Door Released",
    "ordine_custom": 299,
    "ordine_apparato": 299,
    "ordine_funzione": 299,
    "ordine_cabina": 299
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IEADACT_H2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU3-M1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 300,
    "ordine_apparato": 300,
    "ordine_funzione": 300,
    "ordine_cabina": 300
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IEEDACT_H2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU3-H2:Attivazione emergenza IN/OUT",
    "ordine_custom": 301,
    "ordine_apparato": 301,
    "ordine_funzione": 301,
    "ordine_cabina": 301
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IRQREMDRSCLS_H2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU3-H2:Richiesta telechiusura locale",
    "ordine_custom": 302,
    "ordine_apparato": 302,
    "ordine_funzione": 302,
    "ordine_cabina": 302
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISFTYRLYACTD_H2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU3-H2:Relè Interlock Trazione Attivo",
    "ordine_custom": 303,
    "ordine_apparato": 303,
    "ordine_funzione": 303,
    "ordine_cabina": 303
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPAISOLD_H2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU3-H2:Gradino isolato",
    "ordine_custom": 304,
    "ordine_apparato": 304,
    "ordine_funzione": 304,
    "ordine_cabina": 304
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPALOCKED_H2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU3-H2:Gradino Chiuso e bloccato",
    "ordine_custom": 305,
    "ordine_apparato": 305,
    "ordine_funzione": 305,
    "ordine_cabina": 305
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_ISTEPAPOS_H2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU3-H2:Step A position (in mm) ",
    "ordine_custom": 306,
    "ordine_apparato": 306,
    "ordine_funzione": 306,
    "ordine_cabina": 306
  },
  {
    "nome_colonna": "S_DCU3_H2_DCU3_IZVINPUT_H2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU3-H2:Segnale velocità 0",
    "ordine_custom": 307,
    "ordine_apparato": 307,
    "ordine_funzione": 307,
    "ordine_cabina": 307
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ICREWZACTD_M1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU3-M1:Crew Switch Azionato",
    "ordine_custom": 308,
    "ordine_funzione": 308,
    "ordine_apparato": 308,
    "ordine_cabina": 308
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 309,
    "ordine_funzione": 309,
    "ordine_apparato": 309,
    "ordine_cabina": 309
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORISOL_M1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU3-M1:Isolamento P/G/E",
    "ordine_custom": 310,
    "ordine_apparato": 310,
    "ordine_funzione": 310,
    "ordine_cabina": 310
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORLOCKED_M1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU3-M1:Porta Chiusa e Bloccata",
    "ordine_custom": 311,
    "ordine_apparato": 311,
    "ordine_funzione": 311,
    "ordine_cabina": 311
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDOORPOS_M1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU3-M1:Posizione Porta (%) [2 SX]",
    "ordine_custom": 312,
    "ordine_apparato": 312,
    "ordine_funzione": 312,
    "ordine_cabina": 312
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IDRSRELEASED_M1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU3-M1:Door Released",
    "ordine_custom": 313,
    "ordine_apparato": 313,
    "ordine_funzione": 313,
    "ordine_cabina": 313
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IEADACT_M1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU1-M2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 314,
    "ordine_apparato": 314,
    "ordine_funzione": 314,
    "ordine_cabina": 314
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IEEDACT_M1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU3-M1:Attivazione emergenza IN/OUT",
    "ordine_custom": 315,
    "ordine_apparato": 315,
    "ordine_funzione": 315,
    "ordine_cabina": 315
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IRQREMDRSCLS_M1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU3-M1:Richiesta telechiusura locale",
    "ordine_custom": 316,
    "ordine_apparato": 316,
    "ordine_funzione": 316,
    "ordine_cabina": 316
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISFTYRLYACTD_M1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU3-M1:Relè Interlock Trazione Attivo",
    "ordine_custom": 317,
    "ordine_apparato": 317,
    "ordine_funzione": 317,
    "ordine_cabina": 317
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPAISOLD_M1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU3-M1:Gradino isolato",
    "ordine_custom": 318,
    "ordine_apparato": 318,
    "ordine_funzione": 318,
    "ordine_cabina": 318
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPALOCKED_M1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU3-M1:Gradino Chiuso e bloccato",
    "ordine_custom": 319,
    "ordine_apparato": 319,
    "ordine_funzione": 319,
    "ordine_cabina": 319
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_ISTEPAPOS_M1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU3-M1:Step A position (in mm) ",
    "ordine_custom": 320,
    "ordine_apparato": 320,
    "ordine_funzione": 320,
    "ordine_cabina": 320
  },
  {
    "nome_colonna": "S_DCU3_M1_DCU3_IZVINPUT_M1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU3-M1:Segnale velocità 0",
    "ordine_custom": 321,
    "ordine_apparato": 321,
    "ordine_funzione": 321,
    "ordine_cabina": 321
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ICREWZACTD_H2",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU4-H2:Crew Switch Azionato",
    "ordine_custom": 322,
    "ordine_funzione": 322,
    "ordine_apparato": 322,
    "ordine_cabina": 322
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 323,
    "ordine_funzione": 323,
    "ordine_apparato": 323,
    "ordine_cabina": 323
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORISOL_H2",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU4-H2:Isolamento P/G/E",
    "ordine_custom": 324,
    "ordine_apparato": 324,
    "ordine_funzione": 324,
    "ordine_cabina": 324
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORLOCKED_H2",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU4-H2:Porta Chiusa e Bloccata",
    "ordine_custom": 325,
    "ordine_apparato": 325,
    "ordine_funzione": 325,
    "ordine_cabina": 325
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDOORPOS_H2",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU4-H2:Posizione Porta (%) [4 DX]",
    "ordine_custom": 326,
    "ordine_apparato": 326,
    "ordine_funzione": 326,
    "ordine_cabina": 326
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IDRSRELEASED_H2",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU4-H2:Door Released",
    "ordine_custom": 327,
    "ordine_apparato": 327,
    "ordine_funzione": 327,
    "ordine_cabina": 327
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IEADACT_H2",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU1-H1:Emergency Access Device Activation (EAD)",
    "ordine_custom": 328,
    "ordine_apparato": 328,
    "ordine_funzione": 328,
    "ordine_cabina": 328
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IEEDACT_H2",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU4-H2:Attivazione emergenza IN/OUT",
    "ordine_custom": 329,
    "ordine_apparato": 329,
    "ordine_funzione": 329,
    "ordine_cabina": 329
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IRQREMDRSCLS_H2",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU4-H2:Richiesta telechiusura locale",
    "ordine_custom": 330,
    "ordine_apparato": 330,
    "ordine_funzione": 330,
    "ordine_cabina": 330
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISFTYRLYACTD_H2",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU4-H2:Relè Interlock Trazione Attivo",
    "ordine_custom": 331,
    "ordine_apparato": 331,
    "ordine_funzione": 331,
    "ordine_cabina": 331
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPAISOLD_H2",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU4-H2:Gradino isolato",
    "ordine_custom": 332,
    "ordine_apparato": 332,
    "ordine_funzione": 332,
    "ordine_cabina": 332
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPALOCKED_H2",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU4-H2:Gradino Chiuso e bloccato",
    "ordine_custom": 333,
    "ordine_apparato": 333,
    "ordine_funzione": 333,
    "ordine_cabina": 333
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_ISTEPAPOS_H2",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU4-H2:step A position (in mm) ",
    "ordine_custom": 334,
    "ordine_apparato": 334,
    "ordine_funzione": 334,
    "ordine_cabina": 334
  },
  {
    "nome_colonna": "S_DCU4_H2_DCU4_IZVINPUT_H2",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU4-H2:Segnale velocità 0",
    "ordine_custom": 335,
    "ordine_apparato": 335,
    "ordine_funzione": 335,
    "ordine_cabina": 335
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ICREWZACTD_M1",
    "descrizione_dmms": "crew key switch open operated",
    "descrizione_custom": "DCU4-M1:Crew Switch Azionato",
    "ordine_custom": 336,
    "ordine_funzione": 336,
    "ordine_apparato": 336,
    "ordine_cabina": 336
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 337,
    "ordine_funzione": 337,
    "ordine_apparato": 337,
    "ordine_cabina": 337
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORISOL_M1",
    "descrizione_dmms": "Information from DCUi of CAR 1= Door isolated (loc",
    "descrizione_custom": "DCU4-M1:Isolamento P/G/E",
    "ordine_custom": 338,
    "ordine_apparato": 338,
    "ordine_funzione": 338,
    "ordine_cabina": 338
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORLOCKED_M1",
    "descrizione_dmms": "Door is closed and locked 1=Door closed and locked",
    "descrizione_custom": "DCU4-M1:Porta Chiusa e Bloccata",
    "ordine_custom": 339,
    "ordine_apparato": 339,
    "ordine_funzione": 339,
    "ordine_cabina": 339
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDOORPOS_M1",
    "descrizione_dmms": "door position (in %)",
    "descrizione_custom": "DCU4-M1:Posizione Porta (%) [2 DX]",
    "ordine_custom": 340,
    "ordine_apparato": 340,
    "ordine_funzione": 340,
    "ordine_cabina": 340
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IDRSRELEASED_M1",
    "descrizione_dmms": "Entrance released status",
    "descrizione_custom": "DCU4-M1:Door Released",
    "ordine_custom": 341,
    "ordine_apparato": 341,
    "ordine_funzione": 341,
    "ordine_cabina": 341
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IEADACT_M1",
    "descrizione_dmms": "Emergency Access Device activation",
    "descrizione_custom": "DCU3-H2:Emergency Access Device Activation (EAD)",
    "ordine_custom": 342,
    "ordine_apparato": 342,
    "ordine_funzione": 342,
    "ordine_cabina": 342
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IEEDACT_M1",
    "descrizione_dmms": "Emergency Egress Device activation",
    "descrizione_custom": "DCU4-M1:Attivazione emergenza IN/OUT",
    "ordine_custom": 343,
    "ordine_apparato": 343,
    "ordine_funzione": 343,
    "ordine_cabina": 343
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IRQREMDRSCLS_M1",
    "descrizione_dmms": "remote closing activated",
    "descrizione_custom": "DCU4-M1:Richiesta telechiusura locale",
    "ordine_custom": 344,
    "ordine_apparato": 344,
    "ordine_funzione": 344,
    "ordine_cabina": 344
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISFTYRLYACTD_M1",
    "descrizione_dmms": "traction interlock loop relay",
    "descrizione_custom": "DCU4-M1:Relè Interlock Trazione  Attivo",
    "ordine_custom": 345,
    "ordine_apparato": 345,
    "ordine_funzione": 345,
    "ordine_cabina": 345
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPAISOLD_M1",
    "descrizione_dmms": "step A out of service",
    "descrizione_custom": "DCU4-M1:Gradino isolato",
    "ordine_custom": 346,
    "ordine_apparato": 346,
    "ordine_funzione": 346,
    "ordine_cabina": 346
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPALOCKED_M1",
    "descrizione_dmms": "Step A is closed and locked 1=Step A closed and lo",
    "descrizione_custom": "DCU4-M1:Gradino Chiuso e bloccato",
    "ordine_custom": 347,
    "ordine_apparato": 347,
    "ordine_funzione": 347,
    "ordine_cabina": 347
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_ISTEPAPOS_M1",
    "descrizione_dmms": "step A position (in mm)",
    "descrizione_custom": "DCU4-M1:step A position (in mm) ",
    "ordine_custom": 348,
    "ordine_apparato": 348,
    "ordine_funzione": 348,
    "ordine_cabina": 348
  },
  {
    "nome_colonna": "S_DCU4_M1_DCU4_IZVINPUT_M1",
    "descrizione_dmms": "Zero Velocity Input status 1 = ZV input is supplie",
    "descrizione_custom": "DCU4-M1:Segnale velocità 0",
    "ordine_custom": 349,
    "ordine_apparato": 349,
    "ordine_funzione": 349,
    "ordine_cabina": 349
  },
  {
    "nome_colonna": "S_DDU1_DDU1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 350,
    "ordine_funzione": 350,
    "ordine_apparato": 350,
    "ordine_cabina": 350
  },
  {
    "nome_colonna": "S_DDU1_DDU1_IDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU1_IDRVCruiseControlSpeed",
    "descrizione_custom": "DDU1:Cruise Control Speed",
    "ordine_custom": 351,
    "ordine_funzione": 351,
    "ordine_apparato": 351,
    "ordine_cabina": 351
  },
  {
    "nome_colonna": "S_DDU2_DDU2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 352,
    "ordine_funzione": 352,
    "ordine_apparato": 352,
    "ordine_cabina": 352
  },
  {
    "nome_colonna": "S_DDU2_DDU2_IDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU2_IDRVCruiseControlSpeed",
    "descrizione_custom": "DDU2:Cruise Control Speed",
    "ordine_custom": 353,
    "ordine_funzione": 353,
    "ordine_apparato": 353,
    "ordine_cabina": 353
  },
  {
    "nome_colonna": "S_EME_EME_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 354,
    "ordine_funzione": 354,
    "ordine_apparato": 354,
    "ordine_cabina": 354
  },
  {
    "nome_colonna": "S_EME_EME_IEMF1INSTANTLINECURRENT",
    "descrizione_dmms": "Instant Line Current A/bit",
    "descrizione_custom": "EME:Corrente istantanea",
    "ordine_custom": 355,
    "ordine_funzione": 355,
    "ordine_apparato": 355,
    "ordine_cabina": 355
  },
  {
    "nome_colonna": "S_EME_EME_IEMF1INSTANTLINEVOLTAGE",
    "descrizione_dmms": "Instant Line Voltage 1V/bit",
    "descrizione_custom": "EME:Tensione istantanea",
    "ordine_custom": 356,
    "ordine_funzione": 356,
    "ordine_apparato": 356,
    "ordine_cabina": 356
  },
  {
    "nome_colonna": "S_ETD_H1_ETD1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 357,
    "ordine_funzione": 357,
    "ordine_apparato": 357,
    "ordine_cabina": 357
  },
  {
    "nome_colonna": "S_ETD_H1_RDDU1_IDEVISALIVERED",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 358,
    "ordine_funzione": 358,
    "ordine_apparato": 358,
    "ordine_cabina": 358
  },
  {
    "nome_colonna": "S_ETD_H2_ETD2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 359,
    "ordine_funzione": 359,
    "ordine_apparato": 359,
    "ordine_cabina": 359
  },
  {
    "nome_colonna": "S_ETD_H2_RDDU2_IDEVISALIVERED",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 360,
    "ordine_funzione": 360,
    "ordine_apparato": 360,
    "ordine_cabina": 360
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA1AUXRAW",
    "descrizione_dmms": "APU A1 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:APU AUX-CONV A1 CBM",
    "ordine_custom": 361,
    "ordine_funzione": 361,
    "ordine_apparato": 361,
    "ordine_cabina": 361
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA1TC1RAW",
    "descrizione_dmms": "APU A1 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:APU TC1 A1 CBM",
    "ordine_custom": 362,
    "ordine_funzione": 362,
    "ordine_apparato": 362,
    "ordine_cabina": 362
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA4AUXRAW",
    "descrizione_dmms": "APU A4 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:APU AUX-CONV A4 CBM",
    "ordine_custom": 363,
    "ordine_funzione": 363,
    "ordine_apparato": 363,
    "ordine_cabina": 363
  },
  {
    "nome_colonna": "S_FSD_FSD_IAPUA4TC1RAW",
    "descrizione_dmms": "APU A4 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:APU TC1 A4 CBM",
    "ordine_custom": 364,
    "ordine_funzione": 364,
    "ordine_apparato": 364,
    "ordine_cabina": 364
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA1AUXST",
    "descrizione_dmms": "Aerosol A1 Auxiliary Converter Status 0 = Fault_S",
    "descrizione_custom": "FSD:Aerosol A1 Auxiliary Converter Status 0 = Fault_SC 1 = Safe 2 = Warning 3 = Released 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 365,
    "ordine_funzione": 365,
    "ordine_apparato": 365,
    "ordine_cabina": 365
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA1TC1ST",
    "descrizione_dmms": "Aerosol A1 Traction Converter 1 Status:0 = Fault_",
    "descrizione_custom": "FSD:Aerosol A1 Traction Converter 1 Status:0 = Fault_SC, 1 = Safe, 2 = Warning, 3 = Released, 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 366,
    "ordine_funzione": 366,
    "ordine_apparato": 366,
    "ordine_cabina": 366
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA4AUXST",
    "descrizione_dmms": "Aerosol A4 Auxiliary Converter Status:0 = Fault_S",
    "descrizione_custom": "FSD:Aerosol A4 Auxiliary Converter Status:0 = Fault_SC 1 = Safe 2 = Warning 3 = Released 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 367,
    "ordine_funzione": 367,
    "ordine_apparato": 367,
    "ordine_cabina": 367
  },
  {
    "nome_colonna": "S_FSD_FSD_IARSA4TC1ST",
    "descrizione_dmms": "Aerosol A4 Traction Converter 1 Status 0 = Fault_",
    "descrizione_custom": "FSD:Aerosol A4 Traction Converter 1 Status 0 = Fault_SC, 1 = Safe, 2 = Warning, 3 = Released, 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 368,
    "ordine_funzione": 368,
    "ordine_apparato": 368,
    "ordine_cabina": 368
  },
  {
    "nome_colonna": "S_FSD_FSD_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 369,
    "ordine_funzione": 369,
    "ordine_apparato": 369,
    "ordine_cabina": 369
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUPRESSRAW",
    "descrizione_dmms": "GPU Pressure Measure for CBM",
    "descrizione_custom": "FSD:GPU Pressure CBM",
    "ordine_custom": 370,
    "ordine_funzione": 370,
    "ordine_apparato": 370,
    "ordine_cabina": 370
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUPRESSST",
    "descrizione_dmms": "Gas Protection Unit Pressure Status:0 = OK 1 = F",
    "descrizione_custom": "FSD:GPU Pressure:0 = OK 1 = Fault low press 2 = Fault high pressure 3 = Fail Autotest 255 = Not available (AMC doesn't respond)",
    "ordine_custom": 371,
    "ordine_funzione": 371,
    "ordine_apparato": 371,
    "ordine_cabina": 371
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUSOLENOIDRAW",
    "descrizione_dmms": "GPU Solenoid valve Measure for CBM",
    "descrizione_custom": "FSD:GPU misura solenoide valvola scatto CBM",
    "ordine_custom": 372,
    "ordine_funzione": 372,
    "ordine_apparato": 372,
    "ordine_cabina": 372
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUSOLENOIDST",
    "descrizione_dmms": "GPU Solenoid Valve Status:0 = Fault_SC 1 = Low i",
    "descrizione_custom": "FSD:GPU Solenoid Valve:0 = Fault_SC 1 = Low impedance:2 = Safe 3 = High impedance 4 = Fault_OC 255 = Not available (AMC doesn't respond or output test fails)",
    "ordine_custom": 373,
    "ordine_funzione": 373,
    "ordine_apparato": 373,
    "ordine_cabina": 373
  },
  {
    "nome_colonna": "S_FSD_FSD_IGPUTEMPST",
    "descrizione_dmms": "Gas Protection Unit Temperature Status:0 = Fault",
    "descrizione_custom": "FSD:GPU Temperature:0 = Fault low temp 1 = Safe 2 = Fault high temp 255 = Not available (AMC doesn't respond)",
    "ordine_custom": 374,
    "ordine_funzione": 374,
    "ordine_apparato": 374,
    "ordine_cabina": 374
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1AUXRAW",
    "descrizione_dmms": "LHD A1 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:LHD A1 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond CBM",
    "ordine_custom": 375,
    "ordine_funzione": 375,
    "ordine_apparato": 375,
    "ordine_cabina": 375
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1AUXST",
    "descrizione_dmms": "LHD Sensor A1 AUX-CONV Status:0 = Fault_SC 1 = A",
    "descrizione_custom": "FSD:LHD A1 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 376,
    "ordine_funzione": 376,
    "ordine_apparato": 376,
    "ordine_cabina": 376
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1TC1RAW",
    "descrizione_dmms": "LHD A1 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:LHD A1 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond cbm",
    "ordine_custom": 377,
    "ordine_funzione": 377,
    "ordine_apparato": 377,
    "ordine_cabina": 377
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA1TC1ST",
    "descrizione_dmms": "LHD Sensor A1 TC-1 Status:0 = Fault_SC 1 = Alarm",
    "descrizione_custom": "FSD:LHD A1 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 378,
    "ordine_funzione": 378,
    "ordine_apparato": 378,
    "ordine_cabina": 378
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA2HSCBCST",
    "descrizione_dmms": "LHD Sensor A2 HSCBC Status:0 = Fault_SC 1 = Alar",
    "descrizione_custom": "FSD:LHD A2 HSCBC Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 379,
    "ordine_funzione": 379,
    "ordine_apparato": 379,
    "ordine_cabina": 379
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA2HSCBRAW",
    "descrizione_dmms": "LHD A2 HSCB Measure for CBM",
    "descrizione_custom": "FSD:LHD A2 HSCBC Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 380,
    "ordine_funzione": 380,
    "ordine_apparato": 380,
    "ordine_cabina": 380
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4AUXRAW",
    "descrizione_dmms": "LHD A4 AUX-CONV Measure for CBM",
    "descrizione_custom": "FSD:LHD A4 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warnin cbmg_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 381,
    "ordine_funzione": 381,
    "ordine_apparato": 381,
    "ordine_cabina": 381
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4AUXST",
    "descrizione_dmms": "LHD Sensor A4 AUX-CONV Status:0 = Fault_SC 1 = A",
    "descrizione_custom": "FSD:LHD A4 AUX-CONV Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 382,
    "ordine_funzione": 382,
    "ordine_apparato": 382,
    "ordine_cabina": 382
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4TC1RAW",
    "descrizione_dmms": "LHD A4 TC-1 Measure for CBM",
    "descrizione_custom": "FSD:LHD A4 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond CBM",
    "ordine_custom": 383,
    "ordine_funzione": 383,
    "ordine_apparato": 383,
    "ordine_cabina": 383
  },
  {
    "nome_colonna": "S_FSD_FSD_ILHDA4TC1ST",
    "descrizione_dmms": "LHD Sensor A4 TC-1 Status:0 = Fault_SC 1 = Alarm",
    "descrizione_custom": "FSD:LHD A4 TC-1 Status:0-Fault_SC,1-Alarm,2-Warning_LR,3-Safe,4-Warning_HR,5-Fault_OC,255-Not respond",
    "ordine_custom": 384,
    "ordine_funzione": 384,
    "ordine_apparato": 384,
    "ordine_cabina": 384
  },
  {
    "nome_colonna": "S_FSD_FSD_ISYSTEMSTATUS",
    "descrizione_dmms": "SYSTEM STATUS:1 = Autotest 2 = Stand-by 3 = Pre",
    "descrizione_custom": "FSD:State (1-Autotest, 2-StandBy, 3-Preallarm, 4-Allarm, 5-Manut, 6-Fault)",
    "ordine_custom": 385,
    "ordine_funzione": 385,
    "ordine_apparato": 385,
    "ordine_cabina": 385
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR1CMD",
    "descrizione_dmms": "Trainline Alarm 1 Command:0 = Off 1 = On 2 = In",
    "descrizione_custom": "FSD:Att Linea treno ALLARME 1 (1 ALL,2 PREALL)",
    "ordine_custom": 386,
    "ordine_funzione": 386,
    "ordine_apparato": 386,
    "ordine_cabina": 386
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR1ST",
    "descrizione_dmms": "Trainline Alarm 1 Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno 1 NOK",
    "ordine_custom": 387,
    "ordine_funzione": 387,
    "ordine_apparato": 387,
    "ordine_cabina": 387
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR2CMD",
    "descrizione_dmms": "Trainline Alarm 2 Command:0 = Off 1 = On 2 = In",
    "descrizione_custom": "FSD:Att Linea treno ALLARME 2 (1 ALL,2 PREALL)",
    "ordine_custom": 388,
    "ordine_funzione": 388,
    "ordine_apparato": 388,
    "ordine_cabina": 388
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLALR2ST",
    "descrizione_dmms": "Trainline Alarm 2 Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno 2 NOK",
    "ordine_custom": 389,
    "ordine_funzione": 389,
    "ordine_apparato": 389,
    "ordine_cabina": 389
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLFLTCMD",
    "descrizione_dmms": "Trainline Fault Command:0 = Off 1 = On 2 = Inte",
    "descrizione_custom": "FSD:Att Linea treno FAULT 2 (1 CRITICAL,2 MJR)",
    "ordine_custom": 390,
    "ordine_funzione": 390,
    "ordine_apparato": 390,
    "ordine_cabina": 390
  },
  {
    "nome_colonna": "S_FSD_FSD_ITLFLTST",
    "descrizione_dmms": "Trainline Fault Status:0 = Ok 1 = Fault",
    "descrizione_custom": "FSD:Linea Treno FAULT NOK",
    "ordine_custom": 391,
    "ordine_funzione": 391,
    "ordine_apparato": 391,
    "ordine_cabina": 391
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2PRESSRAW",
    "descrizione_dmms": "WPU N2 Pressure Measure for CBM",
    "descrizione_custom": "FSD:Pressione bombola N2 CBM",
    "ordine_custom": 392,
    "ordine_funzione": 392,
    "ordine_apparato": 392,
    "ordine_cabina": 392
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2PRESSST",
    "descrizione_dmms": "Water Package Unit N2 Pressure Status:0 = OK 1 =",
    "descrizione_custom": "FSD:Stato pressione bombola N2",
    "ordine_custom": 393,
    "ordine_funzione": 393,
    "ordine_apparato": 393,
    "ordine_cabina": 393
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUN2TEMPRAW",
    "descrizione_dmms": "WPU N2 Temperature Measure for CBM",
    "descrizione_custom": "FSD:Temperatura bombola N2 CBM",
    "ordine_custom": 394,
    "ordine_funzione": 394,
    "ordine_apparato": 394,
    "ordine_cabina": 394
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUPIPEPRESSST",
    "descrizione_dmms": "WPU Pipe Pressure Status:0 = Low Pressure 1 = Fa",
    "descrizione_custom": "FSD:Stato pressione WPU",
    "ordine_custom": 395,
    "ordine_funzione": 395,
    "ordine_apparato": 395,
    "ordine_cabina": 395
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUSOLENOIDRAW",
    "descrizione_dmms": "WPU Solenoid valve Measure for CBM",
    "descrizione_custom": "FSD:WPU misura solenoide valvola scatto CBM",
    "ordine_custom": 396,
    "ordine_funzione": 396,
    "ordine_apparato": 396,
    "ordine_cabina": 396
  },
  {
    "nome_colonna": "S_FSD_FSD_IWPUSOLENOIDST",
    "descrizione_dmms": "WPU Solenoid Valve Status:0 = Fault_SC 1 = Low i",
    "descrizione_custom": "FSD:Stato solenoide valvola scatto",
    "ordine_custom": 397,
    "ordine_funzione": 397,
    "ordine_apparato": 397,
    "ordine_cabina": 397
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLFSGN4FB_H1",
    "descrizione_dmms": "Life signal DIS ",
    "descrizione_custom": "H1:DIS Life signal",
    "ordine_custom": 398,
    "ordine_funzione": 398,
    "ordine_apparato": 398,
    "ordine_cabina": 398
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTFAULT_H1",
    "descrizione_dmms": "DIS lamp \"Fault\" off:0 on:1",
    "descrizione_custom": "DIS-H1:Spia avaria DIS",
    "ordine_custom": 399,
    "ordine_funzione": 399,
    "ordine_apparato": 399,
    "ordine_cabina": 399
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTMEMFULL_H1",
    "descrizione_dmms": "DIS lamp \"Memory Full\" off:0 on:1",
    "descrizione_custom": "DIS-H1:Spia memoria piena",
    "ordine_custom": 400,
    "ordine_funzione": 400,
    "ordine_apparato": 400,
    "ordine_cabina": 400
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISLIGHTTACHFAULT_H1",
    "descrizione_dmms": "Light DIS tachograph fault > 0 = Signal Off (defau",
    "descrizione_custom": "DIS-H1:Spia avaria tachigrafica DIS",
    "ordine_custom": 401,
    "ordine_funzione": 401,
    "ordine_apparato": 401,
    "ordine_cabina": 401
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISNOSCMT_H1",
    "descrizione_dmms": "CEA switch status (SCMT isolation switch status) >",
    "descrizione_custom": "DIS-H1:Selettore CEA Inserito (SCMT escluso)  ",
    "ordine_custom": 402,
    "ordine_funzione": 402,
    "ordine_apparato": 402,
    "ordine_cabina": 402
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_0_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 403,
    "ordine_funzione": 403,
    "ordine_apparato": 403,
    "ordine_cabina": 403
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_1_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 404,
    "ordine_funzione": 404,
    "ordine_apparato": 404,
    "ordine_cabina": 404
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_2_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 405,
    "ordine_funzione": 405,
    "ordine_apparato": 405,
    "ordine_cabina": 405
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_3_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 406,
    "ordine_funzione": 406,
    "ordine_apparato": 406,
    "ordine_cabina": 406
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_4_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 407,
    "ordine_funzione": 407,
    "ordine_apparato": 407,
    "ordine_cabina": 407
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_5_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 408,
    "ordine_funzione": 408,
    "ordine_apparato": 408,
    "ordine_cabina": 408
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IDISTRAINNUM_H1_91_6_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 409,
    "ordine_funzione": 409,
    "ordine_apparato": 409,
    "ordine_cabina": 409
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIOBYTE109_H1",
    "descrizione_dmms": "7:4 Registration state on GSM-R network 0000 [0] =",
    "descrizione_custom": "TTT-H1:reg TTT",
    "ordine_custom": 410,
    "ordine_funzione": 410,
    "ordine_apparato": 410,
    "ordine_cabina": 410
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIOLFSGN4B5_H1",
    "descrizione_dmms": "Life signal TTT From 0 to 255 with increment at ea",
    "descrizione_custom": "H1:TTT Life signal",
    "ordine_custom": 411,
    "ordine_funzione": 411,
    "ordine_apparato": 411,
    "ordine_cabina": 411
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_IRADIONUMTRENO_H1",
    "descrizione_dmms": "Train number (right alligned, padding with '0's) -",
    "descrizione_custom": "",
    "ordine_custom": 412,
    "ordine_funzione": 412,
    "ordine_apparato": 412,
    "ordine_cabina": 412
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTBYTE130_H1",
    "descrizione_dmms": "7:4 Acoustic Signal SCMT 0000 = no",
    "descrizione_custom": "SCMT-H1:Suono SCMT",
    "ordine_custom": 413,
    "ordine_funzione": 413,
    "ordine_apparato": 413,
    "ordine_cabina": 413
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTBYTE132_H1",
    "descrizione_dmms": "7:4 Blue Command Blue Control Speed 1 = off",
    "descrizione_custom": "SCMT-H1:7:4 Blue Command Blue Control Speed  1 = off",
    "ordine_custom": 414,
    "ordine_funzione": 414,
    "ordine_apparato": 414,
    "ordine_cabina": 414
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEMERGBRAKE_H1",
    "descrizione_dmms": "Emergency Brake by SCMT 0 = not pressed",
    "descrizione_custom": "SCMT-H1:Frenata di emergenza da SCMT  ",
    "ordine_custom": 415,
    "ordine_funzione": 415,
    "ordine_apparato": 415,
    "ordine_cabina": 415
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEMERGBRAKEVIG_H1",
    "descrizione_dmms": "Emergency Brake by Vigilance 0 = not active 1 = a",
    "descrizione_custom": "SCMT-H1:Frenata di emergenza da Vigilante  ",
    "ordine_custom": 416,
    "ordine_funzione": 416,
    "ordine_apparato": 416,
    "ordine_cabina": 416
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTERRCODE1_H1",
    "descrizione_dmms": "Codice Errore Primario (4 characters)",
    "descrizione_custom": "SCMT-H1:Codice Errore Primario",
    "ordine_custom": 417,
    "ordine_funzione": 417,
    "ordine_apparato": 417,
    "ordine_cabina": 417
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTERRCODE2_H1",
    "descrizione_dmms": "Codice Errore secondario (2 characters)",
    "descrizione_custom": "SCMT-H1:Codice Errore secondario",
    "ordine_custom": 418,
    "ordine_funzione": 418,
    "ordine_apparato": 418,
    "ordine_cabina": 418
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTEXCLICON_H1",
    "descrizione_dmms": "SCMT Exclusion Icon Visualization 0 = not present",
    "descrizione_custom": "SCMT-H1:Visualizzazione Esclusione SCMT",
    "ordine_custom": 419,
    "ordine_funzione": 419,
    "ordine_apparato": 419,
    "ordine_cabina": 419
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTMTALIVE1_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 420,
    "ordine_funzione": 420,
    "ordine_apparato": 420,
    "ordine_cabina": 420
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTOPERMODE_H1",
    "descrizione_dmms": "Operation mode SCMT 01 = Test 02 = W",
    "descrizione_custom": "SCMT-H1:modalità funzionamento",
    "ordine_custom": 421,
    "ordine_funzione": 421,
    "ordine_apparato": 421,
    "ordine_cabina": 421
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCDISCHECK_H1",
    "descrizione_dmms": "RSC disinsertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H1:RSC disinsertion check  ",
    "ordine_custom": 422,
    "ordine_funzione": 422,
    "ordine_apparato": 422,
    "ordine_cabina": 422
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCEXCLICON_H1",
    "descrizione_dmms": "RSC Exclusione Icon Visualization 0 = not prese",
    "descrizione_custom": "SCMT-H1:RSC Exclusione Icon Visualization ",
    "ordine_custom": 423,
    "ordine_funzione": 423,
    "ordine_apparato": 423,
    "ordine_cabina": 423
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTRSCINSCHECK_H1",
    "descrizione_dmms": "RSC insertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H1:RSC insertion check  ",
    "ordine_custom": 424,
    "ordine_funzione": 424,
    "ordine_apparato": 424,
    "ordine_cabina": 424
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSIGNCODE_H1",
    "descrizione_dmms": "Codes Signals detected 0 = code 270** 1 = code 270",
    "descrizione_custom": "SCMT-H1:Codice segnale",
    "ordine_custom": 425,
    "ordine_funzione": 425,
    "ordine_apparato": 425,
    "ordine_cabina": 425
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDALERT_H1",
    "descrizione_dmms": "Alert speed 0 = not exceeded 1 = exc",
    "descrizione_custom": "SCMT-H1: Velocità Allerta/Control superata A/C",
    "ordine_custom": 426,
    "ordine_funzione": 426,
    "ordine_apparato": 426,
    "ordine_cabina": 426
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDALLOWED_H1",
    "descrizione_dmms": "Speed train allowed km/h",
    "descrizione_custom": "SCMT-H1:Velocità permessa",
    "ordine_custom": 427,
    "ordine_funzione": 427,
    "ordine_apparato": 427,
    "ordine_cabina": 427
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTSPEEDCTRL_H1",
    "descrizione_dmms": "Control Speed 0 = not exceeded 1 = exce",
    "descrizione_custom": "H1:Control Speed 0=not exceeded 1=exceeded",
    "ordine_custom": 428,
    "ordine_funzione": 428,
    "ordine_apparato": 428,
    "ordine_cabina": 428
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVIGACT_H1",
    "descrizione_dmms": "Actuation Vigilance 0 = no action 1 = actio",
    "descrizione_custom": "SCMT-H1:Vigilante Primario azionato da PDM  ",
    "ordine_custom": 429,
    "ordine_funzione": 429,
    "ordine_apparato": 429,
    "ordine_cabina": 429
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVIGREQ_H1",
    "descrizione_dmms": "Vigilance Request 0 = not active",
    "descrizione_custom": "SCMT-H1:Richiesta di vigilanza  ",
    "ordine_custom": 430,
    "ordine_funzione": 430,
    "ordine_apparato": 430,
    "ordine_cabina": 430
  },
  {
    "nome_colonna": "S_GWU_H1_GWU_ISCMTVISVELRIL_H1",
    "descrizione_dmms": "Visualizzazione Vel.rilascio 10 Km/h 0 = not pre",
    "descrizione_custom": "SCMT-H1:Visualizzazione Vel.rilascio 10 Km/h",
    "ordine_custom": 431,
    "ordine_funzione": 431,
    "ordine_apparato": 431,
    "ordine_cabina": 431
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLFSGN4FB_H2",
    "descrizione_dmms": "Life signal DIS ",
    "descrizione_custom": "H2:DIS Life signal",
    "ordine_custom": 432,
    "ordine_funzione": 432,
    "ordine_apparato": 432,
    "ordine_cabina": 432
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTFAULT_H2",
    "descrizione_dmms": "DIS lamp \"Fault\" off:0 on:1",
    "descrizione_custom": "DIS-H2:Spia avaria DIS",
    "ordine_custom": 433,
    "ordine_funzione": 433,
    "ordine_apparato": 433,
    "ordine_cabina": 433
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTMEMFULL_H2",
    "descrizione_dmms": "DIS lamp \"Memory Full\" off:0 on:1",
    "descrizione_custom": "DIS-H2:Spia memoria piena",
    "ordine_custom": 434,
    "ordine_funzione": 434,
    "ordine_apparato": 434,
    "ordine_cabina": 434
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISLIGHTTACHFAULT_H2",
    "descrizione_dmms": "Light DIS tachograph fault > 0 = Signal Off (defau",
    "descrizione_custom": "DIS-H2:Spia avaria tachigrafica DIS",
    "ordine_custom": 435,
    "ordine_funzione": 435,
    "ordine_apparato": 435,
    "ordine_cabina": 435
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISNOSCMT_H2",
    "descrizione_dmms": "CEA switch status (SCMT isolation switch status) >",
    "descrizione_custom": "DIS-H2:Selettore CEA Inserito (SCMT escluso)  ",
    "ordine_custom": 436,
    "ordine_funzione": 436,
    "ordine_apparato": 436,
    "ordine_cabina": 436
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_0_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 437,
    "ordine_funzione": 437,
    "ordine_apparato": 437,
    "ordine_cabina": 437
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_1_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 438,
    "ordine_funzione": 438,
    "ordine_apparato": 438,
    "ordine_cabina": 438
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_2_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 439,
    "ordine_funzione": 439,
    "ordine_apparato": 439,
    "ordine_cabina": 439
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_3_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 440,
    "ordine_funzione": 440,
    "ordine_apparato": 440,
    "ordine_cabina": 440
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_4_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 441,
    "ordine_funzione": 441,
    "ordine_apparato": 441,
    "ordine_cabina": 441
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_5_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 442,
    "ordine_funzione": 442,
    "ordine_apparato": 442,
    "ordine_cabina": 442
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IDISTRAINNUM_H2_91_6_93",
    "descrizione_dmms": "train number [6 digit].[1 digit] 0:normal [defaul",
    "descrizione_custom": "",
    "ordine_custom": 443,
    "ordine_funzione": 443,
    "ordine_apparato": 443,
    "ordine_cabina": 443
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIOBYTE109_H2",
    "descrizione_dmms": "7:4 Registration state on GSM-R network 0000 [0] =",
    "descrizione_custom": "TTT-H2:reg TTT",
    "ordine_custom": 444,
    "ordine_funzione": 444,
    "ordine_apparato": 444,
    "ordine_cabina": 444
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIOLFSGN4B5_H2",
    "descrizione_dmms": "Life signal TTT From 0 to 255 with increment at ea",
    "descrizione_custom": "H2:TTT Life signal",
    "ordine_custom": 445,
    "ordine_funzione": 445,
    "ordine_apparato": 445,
    "ordine_cabina": 445
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_IRADIONUMTRENO_H2",
    "descrizione_dmms": "Train number (right alligned, padding with '0's) -",
    "descrizione_custom": "",
    "ordine_custom": 446,
    "ordine_funzione": 446,
    "ordine_apparato": 446,
    "ordine_cabina": 446
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTBYTE130_H2",
    "descrizione_dmms": "7:4 Acoustic Signal SCMT 0000 = no",
    "descrizione_custom": "SCMT-H2:Suono SCMT",
    "ordine_custom": 447,
    "ordine_funzione": 447,
    "ordine_apparato": 447,
    "ordine_cabina": 447
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTBYTE132_H2",
    "descrizione_dmms": "7:4 Blue Command Blue Control Speed 1 = off",
    "descrizione_custom": "SCMT-H2:7:4 Blue Command Blue Control Speed  1 = off",
    "ordine_custom": 448,
    "ordine_funzione": 448,
    "ordine_apparato": 448,
    "ordine_cabina": 448
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEMERGBRAKE_H2",
    "descrizione_dmms": "Emergency Brake by SCMT 0 = not pressed",
    "descrizione_custom": "SCMT-H2:Frenata di emergenza da SCMT  ",
    "ordine_custom": 449,
    "ordine_funzione": 449,
    "ordine_apparato": 449,
    "ordine_cabina": 449
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEMERGBRAKEVIG_H2",
    "descrizione_dmms": "Emergency Brake by Vigilance 0 = not active 1 = a",
    "descrizione_custom": "SCMT-H2:Frenata di emergenza da Vigilante  ",
    "ordine_custom": 450,
    "ordine_funzione": 450,
    "ordine_apparato": 450,
    "ordine_cabina": 450
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTERRCODE1_H2",
    "descrizione_dmms": "Codice Errore Primario (4 characters)",
    "descrizione_custom": "SCMT-H2:Codice Errore Primario",
    "ordine_custom": 451,
    "ordine_funzione": 451,
    "ordine_apparato": 451,
    "ordine_cabina": 451
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTERRCODE2_H2",
    "descrizione_dmms": "Codice Errore secondario (2 characters)",
    "descrizione_custom": "SCMT-H2:Codice Errore secondario",
    "ordine_custom": 452,
    "ordine_funzione": 452,
    "ordine_apparato": 452,
    "ordine_cabina": 452
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTEXCLICON_H2",
    "descrizione_dmms": "SCMT Exclusion Icon Visualization 0 = not present",
    "descrizione_custom": "SCMT-H2:Visualizzazione Esclusione SCMT",
    "ordine_custom": 453,
    "ordine_funzione": 453,
    "ordine_apparato": 453,
    "ordine_cabina": 453
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTMTALIVE1_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 454,
    "ordine_funzione": 454,
    "ordine_apparato": 454,
    "ordine_cabina": 454
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTOPERMODE_H2",
    "descrizione_dmms": "Operation mode SCMT 01 = Test 02 = W",
    "descrizione_custom": "SCMT-H2:modalitè funzionamento",
    "ordine_custom": 455,
    "ordine_funzione": 455,
    "ordine_apparato": 455,
    "ordine_cabina": 455
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCDISCHECK_H2",
    "descrizione_dmms": "RSC disinsertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H2:RSC disinsertion check  ",
    "ordine_custom": 456,
    "ordine_funzione": 456,
    "ordine_apparato": 456,
    "ordine_cabina": 456
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCEXCLICON_H2",
    "descrizione_dmms": "RSC Exclusione Icon Visualization 0 = not prese",
    "descrizione_custom": "SCMT-H2:RSC Exclusione Icon Visualization",
    "ordine_custom": 457,
    "ordine_funzione": 457,
    "ordine_apparato": 457,
    "ordine_cabina": 457
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTRSCINSCHECK_H2",
    "descrizione_dmms": "RSC insertion check 0 = not active 1 = active",
    "descrizione_custom": "SCMT-H2:RSC insertion check  ",
    "ordine_custom": 458,
    "ordine_funzione": 458,
    "ordine_apparato": 458,
    "ordine_cabina": 458
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSIGNCODE_H2",
    "descrizione_dmms": "Codes Signals detected 0 = code 270** 1 = code 270",
    "descrizione_custom": "SCMT-H2:Codice segnale",
    "ordine_custom": 459,
    "ordine_funzione": 459,
    "ordine_apparato": 459,
    "ordine_cabina": 459
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDALERT_H2",
    "descrizione_dmms": "Alert speed 0 = not exceeded 1 = exc",
    "descrizione_custom": "SCMT-H2:Velocità Allerta/Control superata A/C",
    "ordine_custom": 460,
    "ordine_funzione": 460,
    "ordine_apparato": 460,
    "ordine_cabina": 460
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDALLOWED_H2",
    "descrizione_dmms": "Speed train allowed km/h",
    "descrizione_custom": "SCMT-H2:Velocità permessa",
    "ordine_custom": 461,
    "ordine_funzione": 461,
    "ordine_apparato": 461,
    "ordine_cabina": 461
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTSPEEDCTRL_H2",
    "descrizione_dmms": "Control Speed 0 = not exceeded 1 = exce",
    "descrizione_custom": "H2:Control Speed 0=not exceeded 1=exceeded",
    "ordine_custom": 462,
    "ordine_funzione": 462,
    "ordine_apparato": 462,
    "ordine_cabina": 462
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVIGACT_H2",
    "descrizione_dmms": "Actuation Vigilance 0 = no action 1 = actio",
    "descrizione_custom": "SCMT-H2:Vigilante Primario azionato da PDM  ",
    "ordine_custom": 463,
    "ordine_funzione": 463,
    "ordine_apparato": 463,
    "ordine_cabina": 463
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVIGREQ_H2",
    "descrizione_dmms": "Vigilance Request 0 = not active",
    "descrizione_custom": "SCMT-H2:Richiesta di vigilanza  ",
    "ordine_custom": 464,
    "ordine_funzione": 464,
    "ordine_apparato": 464,
    "ordine_cabina": 464
  },
  {
    "nome_colonna": "S_GWU_H2_GWU_ISCMTVISVELRIL_H2",
    "descrizione_dmms": "Visualizzazione Vel.rilascio 10 Km/h 0 = not pre",
    "descrizione_custom": "SCMT-H2:Visualizzazione Vel.rilascio 10 Km/h",
    "ordine_custom": 465,
    "ordine_funzione": 465,
    "ordine_apparato": 465,
    "ordine_cabina": 465
  },
  {
    "nome_colonna": "S_HADDATTR_ASSEMBLY_CFG_VER",
    "descrizione_dmms": "Versione File XML AssemblyConfig",
    "descrizione_custom": "",
    "ordine_custom": 466,
    "ordine_funzione": 466,
    "ordine_apparato": 466,
    "ordine_cabina": 466
  },
  {
    "nome_colonna": "S_HADDATTR_DBX_SW_VER",
    "descrizione_dmms": "Versione Software Principale",
    "descrizione_custom": "",
    "ordine_custom": 467,
    "ordine_funzione": 467,
    "ordine_apparato": 467,
    "ordine_cabina": 467
  },
  {
    "nome_colonna": "S_HADDATTR_DELTA",
    "descrizione_dmms": "Secondi di scostamento ultimo allineamento",
    "descrizione_custom": "",
    "ordine_custom": 468,
    "ordine_funzione": 468,
    "ordine_apparato": 468,
    "ordine_cabina": 468
  },
  {
    "nome_colonna": "S_HADDATTR_ELAPSED",
    "descrizione_dmms": "Secondi trascorsi dall'avvio",
    "descrizione_custom": "",
    "ordine_custom": 469,
    "ordine_funzione": 469,
    "ordine_apparato": 469,
    "ordine_cabina": 469
  },
  {
    "nome_colonna": "S_HADDATTR_ENV_CFG_VER",
    "descrizione_dmms": "Versione File XML EnvConfig",
    "descrizione_custom": "",
    "ordine_custom": 470,
    "ordine_funzione": 470,
    "ordine_apparato": 470,
    "ordine_cabina": 470
  },
  {
    "nome_colonna": "S_HADDATTR_IPADDR",
    "descrizione_dmms": "Indirizzo IP",
    "descrizione_custom": "",
    "ordine_custom": 471,
    "ordine_funzione": 471,
    "ordine_apparato": 471,
    "ordine_cabina": 471
  },
  {
    "nome_colonna": "S_HADDATTR_OBS_CFG_VER",
    "descrizione_dmms": "Versione File XML ObserveConfig",
    "descrizione_custom": "",
    "ordine_custom": 472,
    "ordine_funzione": 472,
    "ordine_apparato": 472,
    "ordine_cabina": 472
  },
  {
    "nome_colonna": "S_HADDATTR_REC_CFG_VER",
    "descrizione_dmms": "Versione File XML RecordConfig",
    "descrizione_custom": "",
    "ordine_custom": 473,
    "ordine_funzione": 473,
    "ordine_apparato": 473,
    "ordine_cabina": 473
  },
  {
    "nome_colonna": "S_HADDATTR_RULE_CFG_VER",
    "descrizione_dmms": "Versione File XML RuleConfig",
    "descrizione_custom": "",
    "ordine_custom": 474,
    "ordine_funzione": 474,
    "ordine_apparato": 474,
    "ordine_cabina": 474
  },
  {
    "nome_colonna": "S_HADDATTR_SAMPLE_CFG_VER",
    "descrizione_dmms": "Versione File XML SampleConfig",
    "descrizione_custom": "",
    "ordine_custom": 475,
    "ordine_funzione": 475,
    "ordine_apparato": 475,
    "ordine_cabina": 475
  },
  {
    "nome_colonna": "S_MPU1_BCE_CBRAKEDEMAND",
    "descrizione_dmms": "Master Controler:Brake(-) / Traction (+) demand b",
    "descrizione_custom": "BCE:CMD MC  (-) / trazione (+) (in%)",
    "ordine_custom": 476,
    "ordine_funzione": 476,
    "ordine_apparato": 476,
    "ordine_cabina": 476
  },
  {
    "nome_colonna": "S_MPU1_BCE_CTCMSBRAKEREQH",
    "descrizione_dmms": "Brake request to bypass the TCL_Braking_L (active",
    "descrizione_custom": "BCE:Richiesta Freno (attivo alto)",
    "ordine_custom": 477,
    "ordine_funzione": 477,
    "ordine_apparato": 477,
    "ordine_cabina": 477
  },
  {
    "nome_colonna": "S_MPU1_BCE_CTCMSBRAKEREQL",
    "descrizione_dmms": "Brake request to bypass the TCL_Braking_L (active",
    "descrizione_custom": "BCE:Richiesta Freno (attivo basso)",
    "ordine_custom": 478,
    "ordine_funzione": 478,
    "ordine_apparato": 478,
    "ordine_cabina": 478
  },
  {
    "nome_colonna": "S_MPU1_DBX_CTCMSALIVEREM",
    "descrizione_dmms": "Life sign of the remote MPU",
    "descrizione_custom": "",
    "ordine_custom": 479,
    "ordine_funzione": 479,
    "ordine_apparato": 479,
    "ordine_cabina": 479
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKBRAKETESTSTATE",
    "descrizione_dmms": "DDU_CBrkBrakeTestState",
    "descrizione_custom": "DDU:BRKTEST 0-No active,1-TCMS abort,2-EBCU abort,3-Driver abort,4-Running, 5-Finish OK,6-Finish NOK",
    "ordine_custom": 480,
    "ordine_funzione": 480,
    "ordine_apparato": 480,
    "ordine_cabina": 480
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKPEBTESTSTATE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 481,
    "ordine_funzione": 481,
    "ordine_apparato": 481,
    "ordine_cabina": 481
  },
  {
    "nome_colonna": "S_MPU1_DDU_CBRKTRAINCONFIGOK",
    "descrizione_dmms": "DDU_CBRKTrainConfigOK",
    "descrizione_custom": "DDU_CBRKTrainConfigOK(MPU1)",
    "ordine_custom": 482,
    "ordine_funzione": 482,
    "ordine_apparato": 482,
    "ordine_cabina": 482
  },
  {
    "nome_colonna": "S_MPU1_DDU_CCPLLOCALUNCOUPLING",
    "descrizione_dmms": "DDU_CCPLLocalUncoupling",
    "descrizione_custom": "DDU_CCPLLocalUncoupling",
    "ordine_custom": 483,
    "ordine_funzione": 483,
    "ordine_apparato": 483,
    "ordine_cabina": 483
  },
  {
    "nome_colonna": "S_MPU1_DDU_CCPLSWITCHOFFMSG",
    "descrizione_dmms": "DDU_CCPLSwitchOffMsg",
    "descrizione_custom": "DDU_CCPLSwitchOffMsg(MPU1)",
    "ordine_custom": 484,
    "ordine_funzione": 484,
    "ordine_apparato": 484,
    "ordine_cabina": 484
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVCOUPLINGDRVMODEACTIVE",
    "descrizione_dmms": "DDU_CDRVCouplingDrvModeActive",
    "descrizione_custom": "DDU_CDRVCouplingDrvModeActive(MPU1)",
    "ordine_custom": 485,
    "ordine_funzione": 485,
    "ordine_apparato": 485,
    "ordine_cabina": 485
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVCRUISECONTROLSPEED",
    "descrizione_dmms": "DDU_CDRVCruiseControlSpeed",
    "descrizione_custom": "DDU:Velocità auto impostata",
    "ordine_custom": 486,
    "ordine_funzione": 486,
    "ordine_apparato": 486,
    "ordine_cabina": 486
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVDRIVINGDIRECTIONFORWARD_H1",
    "descrizione_dmms": "DDU_CDRVDrivingDirectionForward_H1",
    "descrizione_custom": "H1:Direzione Avanti da DDU",
    "ordine_custom": 487,
    "ordine_funzione": 487,
    "ordine_apparato": 487,
    "ordine_cabina": 487
  },
  {
    "nome_colonna": "S_MPU1_DDU_CDRVDRIVINGDIRECTIONFORWARD_H2",
    "descrizione_dmms": "DDU_CDRVDrivingDirectionForward_H2",
    "descrizione_custom": "H2:Direzione Avanti da DDU",
    "ordine_custom": 488,
    "ordine_funzione": 488,
    "ordine_apparato": 488,
    "ordine_cabina": 488
  },
  {
    "nome_colonna": "S_MPU1_DDU_CLINECURRENTLIMIT",
    "descrizione_dmms": "DDU_CLineCurrentLimit",
    "descrizione_custom": "",
    "ordine_custom": 489,
    "ordine_funzione": 489,
    "ordine_apparato": 489,
    "ordine_cabina": 489
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRACTIONINHIBIT",
    "descrizione_dmms": "DDU_CTractionInhibit",
    "descrizione_custom": "DDU:Traction Inibition",
    "ordine_custom": 490,
    "ordine_funzione": 490,
    "ordine_apparato": 490,
    "ordine_cabina": 490
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINNUMBER1",
    "descrizione_dmms": "DDU_CTrainNumber1",
    "descrizione_custom": "",
    "ordine_custom": 491,
    "ordine_funzione": 491,
    "ordine_apparato": 491,
    "ordine_cabina": 491
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINNUMBER2",
    "descrizione_dmms": "DDU_CTrainNumber2",
    "descrizione_custom": "",
    "ordine_custom": 492,
    "ordine_funzione": 492,
    "ordine_apparato": 492,
    "ordine_cabina": 492
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINTYPENUMBER1",
    "descrizione_dmms": "DDU_CTrainTypeNumber1",
    "descrizione_custom": "",
    "ordine_custom": 493,
    "ordine_funzione": 493,
    "ordine_apparato": 493,
    "ordine_cabina": 493
  },
  {
    "nome_colonna": "S_MPU1_DDU_CTRAINTYPENUMBER2",
    "descrizione_dmms": "DDU_CTrainTypeNumber2",
    "descrizione_custom": "",
    "ordine_custom": 494,
    "ordine_funzione": 494,
    "ordine_apparato": 494,
    "ordine_cabina": 494
  },
  {
    "nome_colonna": "S_MPU1_LO_AIRCOMPRESSORFAULTY_H1",
    "descrizione_dmms": "[Produzione aria] Richiesta accensione lampada a b",
    "descrizione_custom": "H1:Spia BANCO Guasto compressore",
    "ordine_custom": 495,
    "ordine_funzione": 495,
    "ordine_apparato": 495,
    "ordine_cabina": 495
  },
  {
    "nome_colonna": "S_MPU1_LO_AIRCOMPRESSORFAULTY_H2",
    "descrizione_dmms": "[Produzione aria] Richiesta accensione lampada a b",
    "descrizione_custom": "H2:Spia BANCO Guasto compressore",
    "ordine_custom": 496,
    "ordine_funzione": 496,
    "ordine_apparato": 496,
    "ordine_cabina": 496
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKAXLENOTPROTECTED_H1",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"...\"",
    "descrizione_custom": "H1:Spia BANCO Assi non protetti",
    "ordine_custom": 497,
    "ordine_funzione": 497,
    "ordine_apparato": 497,
    "ordine_cabina": 497
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKAXLENOTPROTECTED_H2",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"...\"",
    "descrizione_custom": "H2:Spia BANCO Assi non protetti",
    "ordine_custom": 498,
    "ordine_funzione": 498,
    "ordine_apparato": 498,
    "ordine_cabina": 498
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKWHEELSLIDEDETECT_H1",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"WSP\"",
    "descrizione_custom": "H1:Spia BANCO WSP",
    "ordine_custom": 499,
    "ordine_funzione": 499,
    "ordine_apparato": 499,
    "ordine_cabina": 499
  },
  {
    "nome_colonna": "S_MPU1_LO_BRKWHEELSLIDEDETECT_H2",
    "descrizione_dmms": "[Freno] Richiesta accensione lampada a banco \"WSP\"",
    "descrizione_custom": "H2:Spia BANCO WSP",
    "ordine_custom": 500,
    "ordine_funzione": 500,
    "ordine_apparato": 500,
    "ordine_cabina": 500
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVPARKINGMODEFEEDBACK_H1",
    "descrizione_dmms": "[Driver] Richiesta accensione lampada pulsante...",
    "descrizione_custom": "H1:Luce Pulsante Parking",
    "ordine_custom": 501,
    "ordine_funzione": 501,
    "ordine_apparato": 501,
    "ordine_cabina": 501
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVPARKINGMODEFEEDBACK_H2",
    "descrizione_dmms": "[Driver] Richiesta accensione lampada pulsante...",
    "descrizione_custom": "H2:Luce Pulsante Parking",
    "ordine_custom": 502,
    "ordine_funzione": 502,
    "ordine_apparato": 502,
    "ordine_cabina": 502
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVVIGILANCEREITCONTR_R1_H1",
    "descrizione_dmms": "[Driver] Richiesta reiterazione Vigilante",
    "descrizione_custom": "H1:Richiesta Reiterazione Vigilante",
    "ordine_custom": 503,
    "ordine_funzione": 503,
    "ordine_apparato": 503,
    "ordine_cabina": 503
  },
  {
    "nome_colonna": "S_MPU1_LO_DRVVIGILANCEREITCONTR_R1_H2",
    "descrizione_dmms": "[Driver] Richiesta reiterazione Vigilante",
    "descrizione_custom": "H2:Richiesta Reiterazione Vigilante",
    "ordine_custom": 504,
    "ordine_funzione": 504,
    "ordine_apparato": 504,
    "ordine_cabina": 504
  },
  {
    "nome_colonna": "S_MPU1_LO_PAISTCALLFORAID_H1",
    "descrizione_dmms": "[PIS] Richiesta accensione lampada a banco \"Ca...\"",
    "descrizione_custom": "H1:Spia BANCO pulsante AID",
    "ordine_custom": 505,
    "ordine_funzione": 505,
    "ordine_apparato": 505,
    "ordine_cabina": 505
  },
  {
    "nome_colonna": "S_MPU1_LO_PAISTCALLFORAID_H2",
    "descrizione_dmms": "[PIS] Richiesta accensione lampada a banco \"Ca...\"",
    "descrizione_custom": "H2:Spia BANCO pulsante AID",
    "ordine_custom": 506,
    "ordine_funzione": 506,
    "ordine_apparato": 506,
    "ordine_cabina": 506
  },
  {
    "nome_colonna": "S_MPU1_LO_SANSANDLIGHT_H1",
    "descrizione_dmms": "[Sabbiere] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H1:Spia BANCO intervento sabbiera",
    "ordine_custom": 507,
    "ordine_funzione": 507,
    "ordine_apparato": 507,
    "ordine_cabina": 507
  },
  {
    "nome_colonna": "S_MPU1_LO_SANSANDLIGHT_H2",
    "descrizione_dmms": "[Sabbiere] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H2:Spia BANCO intervento sabbiera",
    "ordine_custom": 508,
    "ordine_funzione": 508,
    "ordine_apparato": 508,
    "ordine_cabina": 508
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSHSCBOPEN_H1",
    "descrizione_dmms": "[Trazione] Richiesta apertura IR",
    "descrizione_custom": "H1:Spia BANCO IR Aperto",
    "ordine_custom": 509,
    "ordine_funzione": 509,
    "ordine_apparato": 509,
    "ordine_cabina": 509
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSHSCBOPEN_H2",
    "descrizione_dmms": "[Trazione] Richiesta apertura IR",
    "descrizione_custom": "H2:Spia BANCO IR Aperto",
    "ordine_custom": 510,
    "ordine_funzione": 510,
    "ordine_apparato": 510,
    "ordine_cabina": 510
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSPCEISOLATEDLIGHT_H1",
    "descrizione_dmms": "[Trazione] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H1:Spia BANCO avaria motori",
    "ordine_custom": 511,
    "ordine_funzione": 511,
    "ordine_apparato": 511,
    "ordine_cabina": 511
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSPCEISOLATEDLIGHT_H2",
    "descrizione_dmms": "[Trazione] Richiesta accensione lampada a banc...",
    "descrizione_custom": "H2:Spia BANCO avaria motori",
    "ordine_custom": 512,
    "ordine_funzione": 512,
    "ordine_apparato": 512,
    "ordine_cabina": 512
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSTRACBLCKAPPL_H1",
    "descrizione_dmms": "[Trazione] Comando accensione spia Taglio Trazione",
    "descrizione_custom": "H1:Spia BANCO Taglio Trazione",
    "ordine_custom": 513,
    "ordine_funzione": 513,
    "ordine_apparato": 513,
    "ordine_cabina": 513
  },
  {
    "nome_colonna": "S_MPU1_LO_TBSTRACBLCKAPPL_H2",
    "descrizione_dmms": "[Trazione] Comando accensione spia Taglio Trazione",
    "descrizione_custom": "H2:Spia BANCO Taglio Trazione",
    "ordine_custom": 514,
    "ordine_funzione": 514,
    "ordine_apparato": 514,
    "ordine_cabina": 514
  },
  {
    "nome_colonna": "S_MPU1_MPU_CDATETIMESEC",
    "descrizione_dmms": "Local date and time provided by the TCMS to all eq",
    "descrizione_custom": "",
    "ordine_custom": 515,
    "ordine_funzione": 515,
    "ordine_apparato": 515,
    "ordine_cabina": 515
  },
  {
    "nome_colonna": "S_MPU1_MPU_CGPSVALIDITY",
    "descrizione_dmms": "1 = GPS data are valid",
    "descrizione_custom": "",
    "ordine_custom": 516,
    "ordine_funzione": 516,
    "ordine_apparato": 516,
    "ordine_cabina": 516
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLATITUDE",
    "descrizione_dmms": "GPS-data latitude 1 bit = 0.001 degrees",
    "descrizione_custom": "",
    "ordine_custom": 517,
    "ordine_funzione": 517,
    "ordine_apparato": 517,
    "ordine_cabina": 517
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLOCALCABACTIVE_H1",
    "descrizione_dmms": "Cabin H1 is active",
    "descrizione_custom": "H1:Cabina attiva da MPU",
    "ordine_custom": 518,
    "ordine_funzione": 518,
    "ordine_apparato": 518,
    "ordine_cabina": 518
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLOCALCABACTIVE_H2",
    "descrizione_dmms": "Cabin H2 is active",
    "descrizione_custom": "H2:Cabina attiva da MPU",
    "ordine_custom": 519,
    "ordine_funzione": 519,
    "ordine_apparato": 519,
    "ordine_cabina": 519
  },
  {
    "nome_colonna": "S_MPU1_MPU_CLONGITUDE",
    "descrizione_dmms": "GPS-data longitude 1 bit = 0.001 degrees",
    "descrizione_custom": "",
    "ordine_custom": 520,
    "ordine_funzione": 520,
    "ordine_apparato": 520,
    "ordine_cabina": 520
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMPU1MASTER",
    "descrizione_dmms": "mastership management",
    "descrizione_custom": "MPU1 Master",
    "ordine_custom": 521,
    "ordine_funzione": 521,
    "ordine_apparato": 521,
    "ordine_cabina": 521
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMPU2MASTER",
    "descrizione_dmms": "mastership management",
    "descrizione_custom": "MPU2 Master",
    "ordine_custom": 522,
    "ordine_funzione": 522,
    "ordine_apparato": 522,
    "ordine_cabina": 522
  },
  {
    "nome_colonna": "S_MPU1_MPU_CMULTIUNIT",
    "descrizione_dmms": "Multiple unit mode",
    "descrizione_custom": "Treno in multiplo",
    "ordine_custom": 523,
    "ordine_funzione": 523,
    "ordine_apparato": 523,
    "ordine_cabina": 523
  },
  {
    "nome_colonna": "S_MPU1_MPU_CNUMOFCARS",
    "descrizione_dmms": "Number of cars in the trainset",
    "descrizione_custom": "",
    "ordine_custom": 524,
    "ordine_funzione": 524,
    "ordine_apparato": 524,
    "ordine_cabina": 524
  },
  {
    "nome_colonna": "S_MPU1_MPU_CNUMOFUNITS",
    "descrizione_dmms": "Number of units in the train",
    "descrizione_custom": "",
    "ordine_custom": 525,
    "ordine_funzione": 525,
    "ordine_apparato": 525,
    "ordine_cabina": 525
  },
  {
    "nome_colonna": "S_MPU1_MPU_CSAMEORIASLEAD",
    "descrizione_dmms": "the local unit (trainset) has the same orientation",
    "descrizione_custom": "",
    "ordine_custom": 526,
    "ordine_funzione": 526,
    "ordine_apparato": 526,
    "ordine_cabina": 526
  },
  {
    "nome_colonna": "S_MPU1_MPU_CSHUTDOWNINP",
    "descrizione_dmms": "Flag to indicate that shutdown is in progress ( =",
    "descrizione_custom": "Shutdown in progress",
    "ordine_custom": 527,
    "ordine_funzione": 527,
    "ordine_apparato": 527,
    "ordine_cabina": 527
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTCMSALIVE",
    "descrizione_dmms": "Life signal of TCMS",
    "descrizione_custom": "MPU:Life signal",
    "ordine_custom": 528,
    "ordine_funzione": 528,
    "ordine_apparato": 528,
    "ordine_cabina": 528
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINMODE",
    "descrizione_dmms": "Current Train Mode",
    "descrizione_custom": "Train mode (1-Bat, 2-Oper, 3-Ready, 9-Park)",
    "ordine_custom": 529,
    "ordine_funzione": 529,
    "ordine_apparato": 529,
    "ordine_cabina": 529
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINOPER",
    "descrizione_dmms": "1= UnitOper is present in all coupled trainsets",
    "descrizione_custom": "MPU_CTrainOper(MPU1)",
    "ordine_custom": 530,
    "ordine_funzione": 530,
    "ordine_apparato": 530,
    "ordine_cabina": 530
  },
  {
    "nome_colonna": "S_MPU1_MPU_CTRAINSPEED",
    "descrizione_dmms": "Reference speed in step of 0.01kph",
    "descrizione_custom": "VELOCITA' da ATP",
    "ordine_custom": 531,
    "ordine_funzione": 531,
    "ordine_apparato": 531,
    "ordine_cabina": 531
  },
  {
    "nome_colonna": "S_MPU1_MPU_CUNITLEADER",
    "descrizione_dmms": "the unit (trainset) is the leading unit in multi t",
    "descrizione_custom": "",
    "ordine_custom": 532,
    "ordine_funzione": 532,
    "ordine_apparato": 532,
    "ordine_cabina": 532
  },
  {
    "nome_colonna": "S_MPU1_MPU_CUNITOPER",
    "descrizione_dmms": "When functioning, the applicative software of TCMS",
    "descrizione_custom": "MPU_CUnitOper(MPU1)",
    "ordine_custom": 533,
    "ordine_funzione": 533,
    "ordine_apparato": 533,
    "ordine_cabina": 533
  },
  {
    "nome_colonna": "S_MPU1_PCE_CDRIVINGMODE",
    "descrizione_dmms": "Driving mode selected 1= Effort Driving Mode 2= Cr",
    "descrizione_custom": "PCE:Driving mode selected 1=Effort Driving Mode 2=Cruise Control Driving Mode 3=Coupling Driving Mode 4=Washing  Allowable Range:[0,255]",
    "ordine_custom": 534,
    "ordine_funzione": 534,
    "ordine_apparato": 534,
    "ordine_cabina": 534
  },
  {
    "nome_colonna": "S_MPU1_PCE1_CCOEFTR",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 535,
    "ordine_funzione": 535,
    "ordine_apparato": 535,
    "ordine_cabina": 535
  },
  {
    "nome_colonna": "S_MPU1_PCE1_CCOTF",
    "descrizione_dmms": "Ambient external temperature (train level A= value",
    "descrizione_custom": "PCE1:CMD MC -100% (=full braking) to 100% (full traction) ?",
    "ordine_custom": 536,
    "ordine_funzione": 536,
    "ordine_apparato": 536,
    "ordine_cabina": 536
  },
  {
    "nome_colonna": "S_MPU1_VACC_CDEROGATION_H1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 537,
    "ordine_funzione": 537,
    "ordine_apparato": 537,
    "ordine_cabina": 537
  },
  {
    "nome_colonna": "S_MPU1_VACC_CDEROGATION_H2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 538,
    "ordine_funzione": 538,
    "ordine_apparato": 538,
    "ordine_cabina": 538
  },
  {
    "nome_colonna": "S_MPU1_VACC_CTARGTEMP_H1",
    "descrizione_dmms": "Target temperature fresh air :Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 539,
    "ordine_funzione": 539,
    "ordine_apparato": 539,
    "ordine_cabina": 539
  },
  {
    "nome_colonna": "S_MPU1_VACC_CTARGTEMP_H2",
    "descrizione_dmms": "Target temperature fresh air :Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 540,
    "ordine_funzione": 540,
    "ordine_apparato": 540,
    "ordine_cabina": 540
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_H1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 541,
    "ordine_funzione": 541,
    "ordine_apparato": 541,
    "ordine_cabina": 541
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_H2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 542,
    "ordine_funzione": 542,
    "ordine_apparato": 542,
    "ordine_cabina": 542
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_M1",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 543,
    "ordine_funzione": 543,
    "ordine_apparato": 543,
    "ordine_cabina": 543
  },
  {
    "nome_colonna": "S_MPU1_VACP_CDEROGATION_M2",
    "descrizione_dmms": "Adjustment setting from the target temperature Min",
    "descrizione_custom": "",
    "ordine_custom": 544,
    "ordine_funzione": 544,
    "ordine_apparato": 544,
    "ordine_cabina": 544
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_H1",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 545,
    "ordine_funzione": 545,
    "ordine_apparato": 545,
    "ordine_cabina": 545
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_H2",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 546,
    "ordine_funzione": 546,
    "ordine_apparato": 546,
    "ordine_cabina": 546
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_M1",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 547,
    "ordine_funzione": 547,
    "ordine_apparato": 547,
    "ordine_cabina": 547
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTARGTEMP_M2",
    "descrizione_dmms": "Target temperature fresh air:Range:0xF060 to 0x",
    "descrizione_custom": "",
    "ordine_custom": 548,
    "ordine_funzione": 548,
    "ordine_apparato": 548,
    "ordine_cabina": 548
  },
  {
    "nome_colonna": "S_MPU1_VACP_CTRAINSETAVEXTTP",
    "descrizione_dmms": "Trainset average exterior temperature:Range:0xF06",
    "descrizione_custom": "",
    "ordine_custom": 549,
    "ordine_funzione": 549,
    "ordine_apparato": 549,
    "ordine_cabina": 549
  },
  {
    "nome_colonna": "S_PAI_PAI_IDELAY",
    "descrizione_dmms": "DELAY received by OBOE",
    "descrizione_custom": "PAI_IDelay(PAI)",
    "ordine_custom": 550,
    "ordine_funzione": 550,
    "ordine_apparato": 550,
    "ordine_cabina": 550
  },
  {
    "nome_colonna": "S_PAI_PAI_ILASTSTATION",
    "descrizione_dmms": "Last station stop received by OBOE",
    "descrizione_custom": "PAI_ILastStation(PAI)",
    "ordine_custom": 551,
    "ordine_funzione": 551,
    "ordine_apparato": 551,
    "ordine_cabina": 551
  },
  {
    "nome_colonna": "S_PAI_PAI_INEXTSTATION",
    "descrizione_dmms": "Next station stop received by OBOE",
    "descrizione_custom": "PAI_INextStation(PAI)",
    "ordine_custom": 552,
    "ordine_funzione": 552,
    "ordine_apparato": 552,
    "ordine_cabina": 552
  },
  {
    "nome_colonna": "S_PAI_PAI_MISSIONNUMBER",
    "descrizione_dmms": "Mission Number received by OBOE",
    "descrizione_custom": "Missione treno",
    "ordine_custom": 553,
    "ordine_funzione": 553,
    "ordine_apparato": 553,
    "ordine_cabina": 553
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE1:Corrente Inverter ICAIEC",
    "ordine_custom": 554,
    "ordine_funzione": 554,
    "ordine_apparato": 554,
    "ordine_cabina": 554
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE1:Contattore Linea ICISEC",
    "ordine_custom": 555,
    "ordine_funzione": 555,
    "ordine_apparato": 555,
    "ordine_cabina": 555
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE1:Tensione di linea DC",
    "ordine_custom": 556,
    "ordine_funzione": 556,
    "ordine_apparato": 556,
    "ordine_cabina": 556
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 557,
    "ordine_funzione": 557,
    "ordine_apparato": 557,
    "ordine_cabina": 557
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE1:Frenatura Elettrica operativa",
    "ordine_custom": 558,
    "ordine_funzione": 558,
    "ordine_apparato": 558,
    "ordine_cabina": 558
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE1:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 559,
    "ordine_funzione": 559,
    "ordine_apparato": 559,
    "ordine_cabina": 559
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IFRWRDSTTCL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 560,
    "ordine_funzione": 560,
    "ordine_apparato": 560,
    "ordine_cabina": 560
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE1:Sezionatore Isolamento H(C)",
    "ordine_custom": 561,
    "ordine_funzione": 561,
    "ordine_apparato": 561,
    "ordine_cabina": 561
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE1:IR Trazione H1",
    "ordine_custom": 562,
    "ordine_funzione": 562,
    "ordine_apparato": 562,
    "ordine_cabina": 562
  },
  {
    "nome_colonna": "S_PCE1_PCE1_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE1:NoBrake",
    "ordine_custom": 563,
    "ordine_funzione": 563,
    "ordine_apparato": 563,
    "ordine_cabina": 563
  },
  {
    "nome_colonna": "S_PCE1_PCE1_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE1:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 564,
    "ordine_funzione": 564,
    "ordine_apparato": 564,
    "ordine_cabina": 564
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IRVERSESTTCL",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 565,
    "ordine_funzione": 565,
    "ordine_apparato": 565,
    "ordine_cabina": 565
  },
  {
    "nome_colonna": "S_PCE1_PCE1_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE1:Trazione",
    "ordine_custom": 566,
    "ordine_funzione": 566,
    "ordine_apparato": 566,
    "ordine_cabina": 566
  },
  {
    "nome_colonna": "S_PCE1_PCE1_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE1:Tensione di filtro ",
    "ordine_custom": 567,
    "ordine_funzione": 567,
    "ordine_apparato": 567,
    "ordine_cabina": 567
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE2:Corrente Inverter ICAIEC",
    "ordine_custom": 568,
    "ordine_funzione": 568,
    "ordine_apparato": 568,
    "ordine_cabina": 568
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE2:Contattore Linea ICISEC",
    "ordine_custom": 569,
    "ordine_funzione": 569,
    "ordine_apparato": 569,
    "ordine_cabina": 569
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE2:Tensione di linea DC",
    "ordine_custom": 570,
    "ordine_funzione": 570,
    "ordine_apparato": 570,
    "ordine_cabina": 570
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 571,
    "ordine_funzione": 571,
    "ordine_apparato": 571,
    "ordine_cabina": 571
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE2:Frenatura Elettrica operativa",
    "ordine_custom": 572,
    "ordine_funzione": 572,
    "ordine_apparato": 572,
    "ordine_cabina": 572
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE2:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 573,
    "ordine_funzione": 573,
    "ordine_apparato": 573,
    "ordine_cabina": 573
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE2:Sezionatore Isolamento H(C)",
    "ordine_custom": 574,
    "ordine_funzione": 574,
    "ordine_apparato": 574,
    "ordine_cabina": 574
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE2:IR Trazione H1",
    "ordine_custom": 575,
    "ordine_funzione": 575,
    "ordine_apparato": 575,
    "ordine_cabina": 575
  },
  {
    "nome_colonna": "S_PCE2_PCE2_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE2:NoBrake",
    "ordine_custom": 576,
    "ordine_funzione": 576,
    "ordine_apparato": 576,
    "ordine_cabina": 576
  },
  {
    "nome_colonna": "S_PCE2_PCE2_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE2:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 577,
    "ordine_funzione": 577,
    "ordine_apparato": 577,
    "ordine_cabina": 577
  },
  {
    "nome_colonna": "S_PCE2_PCE2_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE2:Trazione",
    "ordine_custom": 578,
    "ordine_funzione": 578,
    "ordine_apparato": 578,
    "ordine_cabina": 578
  },
  {
    "nome_colonna": "S_PCE2_PCE2_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE2:Tensione di filtro ",
    "ordine_custom": 579,
    "ordine_funzione": 579,
    "ordine_apparato": 579,
    "ordine_cabina": 579
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE3:Corrente Inverter ICAIEC",
    "ordine_custom": 580,
    "ordine_funzione": 580,
    "ordine_apparato": 580,
    "ordine_cabina": 580
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE3:Contattore Linea ICISEC",
    "ordine_custom": 581,
    "ordine_funzione": 581,
    "ordine_apparato": 581,
    "ordine_cabina": 581
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE3:Tensione di linea DC",
    "ordine_custom": 582,
    "ordine_funzione": 582,
    "ordine_apparato": 582,
    "ordine_cabina": 582
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 583,
    "ordine_funzione": 583,
    "ordine_apparato": 583,
    "ordine_cabina": 583
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE3:Frenatura Elettrica operativa",
    "ordine_custom": 584,
    "ordine_funzione": 584,
    "ordine_apparato": 584,
    "ordine_cabina": 584
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE3:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 585,
    "ordine_funzione": 585,
    "ordine_apparato": 585,
    "ordine_cabina": 585
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE3:Sezionatore Isolamento H(C)",
    "ordine_custom": 586,
    "ordine_funzione": 586,
    "ordine_apparato": 586,
    "ordine_cabina": 586
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE3:IR Trazione H2",
    "ordine_custom": 587,
    "ordine_funzione": 587,
    "ordine_apparato": 587,
    "ordine_cabina": 587
  },
  {
    "nome_colonna": "S_PCE3_PCE3_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE3:NoBrake",
    "ordine_custom": 588,
    "ordine_funzione": 588,
    "ordine_apparato": 588,
    "ordine_cabina": 588
  },
  {
    "nome_colonna": "S_PCE3_PCE3_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE3:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 589,
    "ordine_funzione": 589,
    "ordine_apparato": 589,
    "ordine_cabina": 589
  },
  {
    "nome_colonna": "S_PCE3_PCE3_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE3:Trazione",
    "ordine_custom": 590,
    "ordine_funzione": 590,
    "ordine_apparato": 590,
    "ordine_cabina": 590
  },
  {
    "nome_colonna": "S_PCE3_PCE3_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE3:Tensione di filtro ",
    "ordine_custom": 591,
    "ordine_funzione": 591,
    "ordine_apparato": 591,
    "ordine_cabina": 591
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ICAIEC",
    "descrizione_dmms": "DC link current. Scale 0 = 0 A 1 bit = 1A . A",
    "descrizione_custom": "PCE4:Corrente Inverter ICAIEC",
    "ordine_custom": 592,
    "ordine_funzione": 592,
    "ordine_apparato": 592,
    "ordine_cabina": 592
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ICISEC",
    "descrizione_dmms": "State of the HV input contactor providing energy t",
    "descrizione_custom": "PCE4:Contattore Linea ICISEC",
    "ordine_custom": 593,
    "ordine_funzione": 593,
    "ordine_apparato": 593,
    "ordine_cabina": 593
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IDCLINEVOLTAGE",
    "descrizione_dmms": "DC line voltage ( only in case of dc line voltage",
    "descrizione_custom": "PCE4:Tensione di linea DC",
    "ordine_custom": 594,
    "ordine_funzione": 594,
    "ordine_apparato": 594,
    "ordine_cabina": 594
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 595,
    "ordine_funzione": 595,
    "ordine_apparato": 595,
    "ordine_cabina": 595
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IEDOKTOMPU",
    "descrizione_dmms": "Operational state of the electrical braking of the",
    "descrizione_custom": "PCE4:Frenatura Elettrica operativa",
    "ordine_custom": 596,
    "ordine_funzione": 596,
    "ordine_apparato": 596,
    "ordine_cabina": 596
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IEFFREATOMPU",
    "descrizione_dmms": "Value of the effort realized on the axle controlle",
    "descrizione_custom": "PCE4:Sforzo reale su Asse :Scala 0 = 0 N 1 bit = 100 N [-3276,8 kN + 3276,7kN]",
    "ordine_custom": 597,
    "ordine_funzione": 597,
    "ordine_apparato": 597,
    "ordine_cabina": 597
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IHCCLOSE",
    "descrizione_dmms": "State of isolating switch H (C) 1 :closed",
    "descrizione_custom": "PCE4:Sezionatore Isolamento H(C)",
    "ordine_custom": 598,
    "ordine_funzione": 598,
    "ordine_apparato": 598,
    "ordine_cabina": 598
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IMCBSTATUS",
    "descrizione_dmms": "State of the MCB 0= The MCB is open Resol=1 Safe",
    "descrizione_custom": "PCE4:IR Trazione H2",
    "ordine_custom": 599,
    "ordine_funzione": 599,
    "ordine_apparato": 599,
    "ordine_cabina": 599
  },
  {
    "nome_colonna": "S_PCE4_PCE4_INOBRAKE",
    "descrizione_dmms": "State of the input E_BT_NOBRAKE 1=E_BT_NOBRAKE = 1",
    "descrizione_custom": "PCE4:NoBrake",
    "ordine_custom": 600,
    "ordine_funzione": 600,
    "ordine_apparato": 600,
    "ordine_cabina": 600
  },
  {
    "nome_colonna": "S_PCE4_PCE4_INOTRACTIONCUTOFF",
    "descrizione_dmms": "State of the input E_BT_QJ 1= E_BT_QJ = 1 Resol=1",
    "descrizione_custom": "PCE4:Inverter abilitato \"NoTractionCutOff\"",
    "ordine_custom": 601,
    "ordine_funzione": 601,
    "ordine_apparato": 601,
    "ordine_cabina": 601
  },
  {
    "nome_colonna": "S_PCE4_PCE4_ITRACTION",
    "descrizione_dmms": "State of the input E_BT_TRACTION 1= E_BT_TRACTION",
    "descrizione_custom": "PCE4:Trazione",
    "ordine_custom": 602,
    "ordine_funzione": 602,
    "ordine_apparato": 602,
    "ordine_cabina": 602
  },
  {
    "nome_colonna": "S_PCE4_PCE4_IUONDTOMPU",
    "descrizione_dmms": "This signal represents the DC link voltage Value",
    "descrizione_custom": "PCE4:Tensione di filtro ",
    "ordine_custom": 603,
    "ordine_funzione": 603,
    "ordine_apparato": 603,
    "ordine_cabina": 603
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_ATPNOTRACTBLOCK1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H1:Blocco Trazione STB_1",
    "ordine_custom": 604,
    "ordine_funzione": 604,
    "ordine_apparato": 604,
    "ordine_cabina": 604
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_ATPSERVBRAKEREQ1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H1:Frenatura servizio da SCMT_1",
    "ordine_custom": 605,
    "ordine_funzione": 605,
    "ordine_apparato": 605,
    "ordine_cabina": 605
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKBYPASPASSEBOVERSTAT_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass neutralizzazione emergenza pass",
    "descrizione_custom": "H1:Bypass EBO",
    "ordine_custom": 606,
    "ordine_funzione": 606,
    "ordine_apparato": 606,
    "ordine_cabina": 606
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLBRAKEMAJORFAULT_H1",
    "descrizione_dmms": "[Freno] 0 = Avaria grave impianto freno",
    "descrizione_custom": "H1:TCL MJF",
    "ordine_custom": 607,
    "ordine_funzione": 607,
    "ordine_apparato": 607,
    "ordine_cabina": 607
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLNOPARKBRKRELEASE_H1",
    "descrizione_dmms": "[Freno] 0 = Almeno un freno di parcheggio, non iso",
    "descrizione_custom": "H1:TCL No Park Brake Release",
    "ordine_custom": 608,
    "ordine_funzione": 608,
    "ordine_apparato": 608,
    "ordine_cabina": 608
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLPARKBRKRELEASE1_H1",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di parc",
    "descrizione_custom": "H1:TCL FAM Release",
    "ordine_custom": 609,
    "ordine_funzione": 609,
    "ordine_apparato": 609,
    "ordine_cabina": 609
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_BRKTCLSERVICEBRKSTAT_H1",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di serv",
    "descrizione_custom": "H1:Spia BANCO Freno servizio applicato",
    "ordine_custom": 610,
    "ordine_funzione": 610,
    "ordine_apparato": 610,
    "ordine_cabina": 610
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CLMVENTBYPASSSTATUS_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass cabina attivato",
    "descrizione_custom": "H1:Bypass Ventilatore Clima",
    "ordine_custom": 611,
    "ordine_funzione": 611,
    "ordine_apparato": 611,
    "ordine_cabina": 611
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CPLLOCALCABINCOUPLED_R1_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "H1:CABINA ACCOPPIATA",
    "ordine_custom": 612,
    "ordine_funzione": 612,
    "ordine_apparato": 612,
    "ordine_cabina": 612
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_CPLLOCALCABINUNCOUPLED_R1_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "H1:CABINA NON ACCOPPIATA",
    "ordine_custom": 613,
    "ordine_funzione": 613,
    "ordine_apparato": 613,
    "ordine_cabina": 613
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_DRVCABNEUTRALISATION_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina abilitata",
    "descrizione_custom": "H1:Neutralizzazione CABINA A",
    "ordine_custom": 614,
    "ordine_funzione": 614,
    "ordine_apparato": 614,
    "ordine_cabina": 614
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_DRVLOCALCABACTIVE_R1_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "H1:Cabina attiva",
    "ordine_custom": 615,
    "ordine_funzione": 615,
    "ordine_apparato": 615,
    "ordine_cabina": 615
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVS3PHOUTCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore uscita trifase chiuso",
    "descrizione_custom": "H1:Contattore Linea Trifase APERTO",
    "ordine_custom": 616,
    "ordine_funzione": 616,
    "ordine_apparato": 616,
    "ordine_cabina": 616
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSBATT1ISOLATCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di batteria chiuso",
    "descrizione_custom": "H1:Sezionatori di batteria",
    "ordine_custom": 617,
    "ordine_funzione": 617,
    "ordine_apparato": 617,
    "ordine_cabina": 617
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSLINEINCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore AT ingresso convertitore au",
    "descrizione_custom": "H1:Contattore LIK APERTO",
    "ordine_custom": 618,
    "ordine_funzione": 618,
    "ordine_apparato": 618,
    "ordine_cabina": 618
  },
  {
    "nome_colonna": "S_RIO1_H1_LI_MVSMVEARTHON_H1",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di messa a terra chiuso",
    "descrizione_custom": "H1:Sezionatori di terra MT",
    "ordine_custom": 619,
    "ordine_funzione": 619,
    "ordine_apparato": 619,
    "ordine_cabina": 619
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_ATPNOTRACTBLOCK1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H2:Blocco Trazione STB_1",
    "ordine_custom": 620,
    "ordine_funzione": 620,
    "ordine_apparato": 620,
    "ordine_cabina": 620
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_ATPSERVBRAKEREQ1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H2:Frenatura servizio da SCMT_1",
    "ordine_custom": 621,
    "ordine_funzione": 621,
    "ordine_apparato": 621,
    "ordine_cabina": 621
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKBYPASPASSEBOVERSTAT_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass neutralizzazione emergenza pass",
    "descrizione_custom": "H2:Bypass EBO",
    "ordine_custom": 622,
    "ordine_funzione": 622,
    "ordine_apparato": 622,
    "ordine_cabina": 622
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLBRAKEMAJORFAULT_H2",
    "descrizione_dmms": "[Freno] 0 = Avaria grave impianto freno",
    "descrizione_custom": "H2:TCL MJF",
    "ordine_custom": 623,
    "ordine_funzione": 623,
    "ordine_apparato": 623,
    "ordine_cabina": 623
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLNOPARKBRKRELEASE_H2",
    "descrizione_dmms": "[Freno] 0 = Almeno un freno di parcheggio, non iso",
    "descrizione_custom": "H2:TCL No Park Brake Release",
    "ordine_custom": 624,
    "ordine_funzione": 624,
    "ordine_apparato": 624,
    "ordine_cabina": 624
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLPARKBRKRELEASE1_H2",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di parc",
    "descrizione_custom": "H2:TCL FAM Release",
    "ordine_custom": 625,
    "ordine_funzione": 625,
    "ordine_apparato": 625,
    "ordine_cabina": 625
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_BRKTCLSERVICEBRKSTAT_H2",
    "descrizione_dmms": "[Freno] 1 = Tutti gli assi sfrenati (freno di serv",
    "descrizione_custom": "H2:Spia BANCO Freno servizio applicato",
    "ordine_custom": 626,
    "ordine_funzione": 626,
    "ordine_apparato": 626,
    "ordine_cabina": 626
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CLMVENTBYPASSSTATUS_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass cabina attivato",
    "descrizione_custom": "H2:Bypass Ventilatore Clima",
    "ordine_custom": 627,
    "ordine_funzione": 627,
    "ordine_apparato": 627,
    "ordine_cabina": 627
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CPLLOCALCABINCOUPLED_R1_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "H2:CABINA ACCOPPIATA",
    "ordine_custom": 628,
    "ordine_funzione": 628,
    "ordine_apparato": 628,
    "ordine_cabina": 628
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_CPLLOCALCABINUNCOUPLED_R1_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "H2:CABINA NON ACCOPPIATA",
    "ordine_custom": 629,
    "ordine_funzione": 629,
    "ordine_apparato": 629,
    "ordine_cabina": 629
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_DRVCABNEUTRALISATION_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina abilitata",
    "descrizione_custom": "H2:Neutralizzazione CABINA B",
    "ordine_custom": 630,
    "ordine_funzione": 630,
    "ordine_apparato": 630,
    "ordine_cabina": 630
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_DRVLOCALCABACTIVE_R1_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "H2:Cabina attiva",
    "ordine_custom": 631,
    "ordine_funzione": 631,
    "ordine_apparato": 631,
    "ordine_cabina": 631
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVS3PHOUTCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore uscita trifase chiuso",
    "descrizione_custom": "H2:Contattore Linea Trifase Aperto",
    "ordine_custom": 632,
    "ordine_funzione": 632,
    "ordine_apparato": 632,
    "ordine_cabina": 632
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSBATT2ISOLATCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di batteria chiuso",
    "descrizione_custom": "H2:Sezionatori di batteria",
    "ordine_custom": 633,
    "ordine_funzione": 633,
    "ordine_apparato": 633,
    "ordine_cabina": 633
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSLINEINCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore AT ingresso convertitore au",
    "descrizione_custom": "H2:Contattore LIK APERTO",
    "ordine_custom": 634,
    "ordine_funzione": 634,
    "ordine_apparato": 634,
    "ordine_cabina": 634
  },
  {
    "nome_colonna": "S_RIO1_H2_LI_MVSMVEARTHON_H2",
    "descrizione_dmms": "[MT/BT] 1 = Sezionatore di messa a terra chiuso",
    "descrizione_custom": "H2:Sezionatori di terra MT",
    "ordine_custom": 635,
    "ordine_funzione": 635,
    "ordine_apparato": 635,
    "ordine_cabina": 635
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSAIRPRESBELTHRSHLD",
    "descrizione_dmms": "[Pantografo] 1 = Pressione ingresso circuito panto",
    "descrizione_custom": "M1:Panto Pressostato \"<=6 Bar\"",
    "ordine_custom": 636,
    "ordine_funzione": 636,
    "ordine_apparato": 636,
    "ordine_cabina": 636
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSPANTOCMOK2A",
    "descrizione_dmms": "[Pantografo A] 1 = Elettrovalvola sollevamento pan",
    "descrizione_custom": "M1:Panto A elettrov sollevamento",
    "ordine_custom": 637,
    "ordine_funzione": 637,
    "ordine_apparato": 637,
    "ordine_cabina": 637
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_HVSPANTOISOLATE2A",
    "descrizione_dmms": "[Pantografo A] 1 = Pantografo isolato",
    "descrizione_custom": "M1:Panto A \"isolato\"",
    "ordine_custom": 638,
    "ordine_funzione": 638,
    "ordine_apparato": 638,
    "ordine_cabina": 638
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_MVSKMV1_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV1",
    "ordine_custom": 639,
    "ordine_funzione": 639,
    "ordine_apparato": 639,
    "ordine_cabina": 639
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_TBSHHT2CLOSED_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ch",
    "descrizione_custom": "M1:Sezionatore Panto HHT2 \"chiuso\"",
    "ordine_custom": 640,
    "ordine_funzione": 640,
    "ordine_apparato": 640,
    "ordine_cabina": 640
  },
  {
    "nome_colonna": "S_RIO1_M1_LI_TBSHHT2OPEN_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ap",
    "descrizione_custom": "M1:Sezionatore Panto HHT2 \"aperto\"",
    "ordine_custom": 641,
    "ordine_funzione": 641,
    "ordine_apparato": 641,
    "ordine_cabina": 641
  },
  {
    "nome_colonna": "S_RIO1_M2_LI_BRKBOGIEINDIISOLATED1_M2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "M2:Distributore isolato da rubinetto",
    "ordine_custom": 642,
    "ordine_funzione": 642,
    "ordine_apparato": 642,
    "ordine_cabina": 642
  },
  {
    "nome_colonna": "S_RIO1_M2_LI_BRKDIRBRKISOLATED1_M2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "M2:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 643,
    "ordine_funzione": 643,
    "ordine_apparato": 643,
    "ordine_cabina": 643
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPISOLATION_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Commutatore Esclusione Apparecc",
    "descrizione_custom": "H1:CEA",
    "ordine_custom": 644,
    "ordine_funzione": 644,
    "ordine_apparato": 644,
    "ordine_cabina": 644
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTBLOCK2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H1:Blocco Trazione STB_2",
    "ordine_custom": 645,
    "ordine_funzione": 645,
    "ordine_apparato": 645,
    "ordine_cabina": 645
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTIONBLOCKDIS_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da DIS",
    "descrizione_custom": "H1:Blocco Trazione DIS",
    "ordine_custom": 646,
    "ordine_funzione": 646,
    "ordine_apparato": 646,
    "ordine_cabina": 646
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPNOTRACTIONBLOCKSCMT_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da SCMT",
    "descrizione_custom": "H1:Blocco Trazione SCMT",
    "ordine_custom": 647,
    "ordine_funzione": 647,
    "ordine_apparato": 647,
    "ordine_cabina": 647
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_ATPSERVBRAKEREQ2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H1:Frenatura servizio da SCMT_2",
    "ordine_custom": 648,
    "ordine_funzione": 648,
    "ordine_apparato": 648,
    "ordine_cabina": 648
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKBYPASSEBLOOP_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza attivato",
    "descrizione_custom": "H1:Bypass loop EB",
    "ordine_custom": 649,
    "ordine_funzione": 649,
    "ordine_apparato": 649,
    "ordine_cabina": 649
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKBYPASSPASSEMERGLOOP_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza passeggeri att",
    "descrizione_custom": "H1:ByPass Pass Emerg Loop",
    "ordine_custom": 650,
    "ordine_funzione": 650,
    "ordine_apparato": 650,
    "ordine_cabina": 650
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKCMDVALVEN1110_H1",
    "descrizione_dmms": "[Freno] 1 = Abilitazione manipolatore di backup",
    "descrizione_custom": "H1:N11 abilitato",
    "ordine_custom": 651,
    "ordine_funzione": 651,
    "ordine_apparato": 651,
    "ordine_cabina": 651
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKN1109BYPACOSTAT_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto di bypass manipolatore di ba",
    "descrizione_custom": "H1:Bypass EV 11.09 N10 da rubinetto ",
    "ordine_custom": 652,
    "ordine_funzione": 652,
    "ordine_apparato": 652,
    "ordine_cabina": 652
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKN1120MPISOCOSTA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento condotta principa",
    "descrizione_custom": "H1:N11 CP isolata da rubinetto",
    "ordine_custom": 653,
    "ordine_funzione": 653,
    "ordine_apparato": 653,
    "ordine_cabina": 653
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKSIFASWITCH_H1",
    "descrizione_dmms": "[Freno] 1 = Condotta generale in scarico",
    "descrizione_custom": "H1:Pressostato CG in scarico da SIFA",
    "ordine_custom": 654,
    "ordine_funzione": 654,
    "ordine_apparato": 654,
    "ordine_cabina": 654
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKSTNOPBBRAKE_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H1:Stacco trazione B62 CG 3,9/4,9 ",
    "ordine_custom": 655,
    "ordine_funzione": 655,
    "ordine_apparato": 655,
    "ordine_cabina": 655
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKTCLNOEMERGENCYBRAKE_H1",
    "descrizione_dmms": "[Freno] 0 = Freno di emergenza applicato",
    "descrizione_custom": "H1:TCL No Emergency Brake",
    "ordine_custom": 656,
    "ordine_funzione": 656,
    "ordine_apparato": 656,
    "ordine_cabina": 656
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_BRKTCLPARKBRKAPPLY1_H1",
    "descrizione_dmms": "[Freno] 1 = Richiesta applicazione freno di parche",
    "descrizione_custom": "H1:TCL FAM Apply",
    "ordine_custom": 657,
    "ordine_funzione": 657,
    "ordine_apparato": 657,
    "ordine_cabina": 657
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_CPLLOCALCABINCOUPLED_R2_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 658,
    "ordine_funzione": 658,
    "ordine_apparato": 658,
    "ordine_cabina": 658
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_CPLLOCALCABINUNCOUPLED_R2_H1",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 659,
    "ordine_funzione": 659,
    "ordine_apparato": 659,
    "ordine_cabina": 659
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_DRVLOCALCABACTIVE_R2_H1",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "",
    "ordine_custom": 660,
    "ordine_funzione": 660,
    "ordine_apparato": 660,
    "ordine_cabina": 660
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_HVSEARTHINGSWCLOSED_H1",
    "descrizione_dmms": "[Trazione] 1 = Messa a terra Circuiti AT",
    "descrizione_custom": "H1:Sezionatori di terra AT",
    "ordine_custom": 661,
    "ordine_funzione": 661,
    "ordine_apparato": 661,
    "ordine_cabina": 661
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_MVSMAINBATTCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di batteria chiuso",
    "descrizione_custom": "H1:Contattore Batteria 52KC781",
    "ordine_custom": 662,
    "ordine_funzione": 662,
    "ordine_apparato": 662,
    "ordine_cabina": 662
  },
  {
    "nome_colonna": "S_RIO2_H1_LI_TBSHARMDETINHIBIT_H1",
    "descrizione_dmms": "[Trazione] 1 = Rilevatore di armoniche escluso",
    "descrizione_custom": "H1:RCA Escluso",
    "ordine_custom": 663,
    "ordine_funzione": 663,
    "ordine_apparato": 663,
    "ordine_cabina": 663
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPISOLATION_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Commutatore Esclusione Apparecc",
    "descrizione_custom": "H2:CEA",
    "ordine_custom": 664,
    "ordine_funzione": 664,
    "ordine_apparato": 664,
    "ordine_cabina": 664
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTBLOCK2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione",
    "descrizione_custom": "H2:Blocco Trazione STB_2",
    "ordine_custom": 665,
    "ordine_funzione": 665,
    "ordine_apparato": 665,
    "ordine_cabina": 665
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTIONBLOCKDIS_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da DIS",
    "descrizione_custom": "H2:Blocco Trazione DIS",
    "ordine_custom": 666,
    "ordine_funzione": 666,
    "ordine_apparato": 666,
    "ordine_cabina": 666
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPNOTRACTIONBLOCKSCMT_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Consenso trazione da SCMT",
    "descrizione_custom": "H2:Blocco Trazione SCMT",
    "ordine_custom": 667,
    "ordine_funzione": 667,
    "ordine_apparato": 667,
    "ordine_cabina": 667
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_ATPSERVBRAKEREQ2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Richiesta frenatura di servizio",
    "descrizione_custom": "H2:Frenatura servizio da SCMT_2",
    "ordine_custom": 668,
    "ordine_funzione": 668,
    "ordine_apparato": 668,
    "ordine_cabina": 668
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKBYPASSEBLOOP_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza attivato",
    "descrizione_custom": "H2:Bypass loop EB",
    "ordine_custom": 669,
    "ordine_funzione": 669,
    "ordine_apparato": 669,
    "ordine_cabina": 669
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKBYPASSPASSEMERGLOOP_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass laccio emergenza passeggeri att",
    "descrizione_custom": "H2:ByPass Pass Emerg Loop",
    "ordine_custom": 670,
    "ordine_funzione": 670,
    "ordine_apparato": 670,
    "ordine_cabina": 670
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKCMDVALVEN1110_H2",
    "descrizione_dmms": "[Freno] 1 = Abilitazione manipolatore di backup",
    "descrizione_custom": "H2:N11 abilitato",
    "ordine_custom": 671,
    "ordine_funzione": 671,
    "ordine_apparato": 671,
    "ordine_cabina": 671
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKN1109BYPACOSTAT_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto di bypass manipolatore di ba",
    "descrizione_custom": "H2:Bypass EV 11.09 N10 da rubinetto ",
    "ordine_custom": 672,
    "ordine_funzione": 672,
    "ordine_apparato": 672,
    "ordine_cabina": 672
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKN1120MPISOCOSTA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento condotta principa",
    "descrizione_custom": "H2:N11 CP isolata da rubinetto",
    "ordine_custom": 673,
    "ordine_funzione": 673,
    "ordine_apparato": 673,
    "ordine_cabina": 673
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKSIFASWITCH_H2",
    "descrizione_dmms": "[Freno] 1 = Condotta generale in scarico",
    "descrizione_custom": "H2:Pressostato CG in scarico da SIFA",
    "ordine_custom": 674,
    "ordine_funzione": 674,
    "ordine_apparato": 674,
    "ordine_cabina": 674
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKSTNOPBBRAKE_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H2:Stacco trazione B62 CG 3,9/4,9 ",
    "ordine_custom": 675,
    "ordine_funzione": 675,
    "ordine_apparato": 675,
    "ordine_cabina": 675
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKTCLNOEMERGENCYBRAKE_H2",
    "descrizione_dmms": "[Freno] 0 = Freno di emergenza applicato",
    "descrizione_custom": "H2:TCL No Emergency Brake",
    "ordine_custom": 676,
    "ordine_funzione": 676,
    "ordine_apparato": 676,
    "ordine_cabina": 676
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_BRKTCLPARKBRKAPPLY1_H2",
    "descrizione_dmms": "[Freno] 1 = Richiesta applicazione freno di parche",
    "descrizione_custom": "H2:TCL FAM Apply",
    "ordine_custom": 677,
    "ordine_funzione": 677,
    "ordine_apparato": 677,
    "ordine_cabina": 677
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_CPLLOCALCABINCOUPLED_R2_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 678,
    "ordine_funzione": 678,
    "ordine_apparato": 678,
    "ordine_cabina": 678
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_CPLLOCALCABINUNCOUPLED_R2_H2",
    "descrizione_dmms": "[Accoppiatore] 1 = Cabina non accoppiata",
    "descrizione_custom": "",
    "ordine_custom": 679,
    "ordine_funzione": 679,
    "ordine_apparato": 679,
    "ordine_cabina": 679
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_DRVLOCALCABACTIVE_R2_H2",
    "descrizione_dmms": "[Driver] 1 = Cabina locale attiva",
    "descrizione_custom": "",
    "ordine_custom": 680,
    "ordine_funzione": 680,
    "ordine_apparato": 680,
    "ordine_cabina": 680
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_HVSEARTHINGSWCLOSED_H2",
    "descrizione_dmms": "[Trazione] 1 = Messa a terra Circuiti AT",
    "descrizione_custom": "H2:Sezionatori di terra AT",
    "ordine_custom": 681,
    "ordine_funzione": 681,
    "ordine_apparato": 681,
    "ordine_cabina": 681
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_MVSMAINBATTCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di batteria chiuso",
    "descrizione_custom": "H2:Contattore Batteria 52KC781 ",
    "ordine_custom": 682,
    "ordine_funzione": 682,
    "ordine_apparato": 682,
    "ordine_cabina": 682
  },
  {
    "nome_colonna": "S_RIO2_H2_LI_TBSHARMDETINHIBIT_H2",
    "descrizione_dmms": "[Trazione] 1 = Rilevatore di armoniche escluso",
    "descrizione_custom": "H2:RCA Escluso",
    "ordine_custom": 683,
    "ordine_funzione": 683,
    "ordine_apparato": 683,
    "ordine_cabina": 683
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_HVSPANTOCMOK2B",
    "descrizione_dmms": "[Pantografo B] 1 = Elettrovalvola sollevamento pan",
    "descrizione_custom": "M1:Panto B elettrov sollevamento",
    "ordine_custom": 684,
    "ordine_funzione": 684,
    "ordine_apparato": 684,
    "ordine_cabina": 684
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_HVSPANTOISOLATE2B",
    "descrizione_dmms": "[Pantografo B] 1 = Pantografo isolato",
    "descrizione_custom": "M1:Panto B \"isolato\"",
    "ordine_custom": 685,
    "ordine_funzione": 685,
    "ordine_apparato": 685,
    "ordine_cabina": 685
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_MVSKMV2_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV2",
    "ordine_custom": 686,
    "ordine_funzione": 686,
    "ordine_apparato": 686,
    "ordine_cabina": 686
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_TBSHHT1CLOSED_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ch",
    "descrizione_custom": "M1:Sezionatore Panto HHT1 \"chiuso\"",
    "ordine_custom": 687,
    "ordine_funzione": 687,
    "ordine_apparato": 687,
    "ordine_cabina": 687
  },
  {
    "nome_colonna": "S_RIO2_M1_LI_TBSHHT1OPEN_M1",
    "descrizione_dmms": "[Trazione] 1 = Contattore isolamento pantografo ap",
    "descrizione_custom": "M1:Sezionatore Panto HHT1 \"aperto\"",
    "ordine_custom": 688,
    "ordine_funzione": 688,
    "ordine_apparato": 688,
    "ordine_cabina": 688
  },
  {
    "nome_colonna": "S_RIO2_M2_LI_BRKBOGIEISOLATED1_M2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "M2:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 689,
    "ordine_funzione": 689,
    "ordine_apparato": 689,
    "ordine_cabina": 689
  },
  {
    "nome_colonna": "S_RIO2_M2_LI_BRKMECHBRKSTATBOG1_M2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "M2:Freno meccanico carrello M2 ",
    "ordine_custom": 690,
    "ordine_funzione": 690,
    "ordine_apparato": 690,
    "ordine_cabina": 690
  },
  {
    "nome_colonna": "S_RIO3_H1_AI_TBSACCDECDEMAND_R1_H1",
    "descrizione_dmms": "[Trazione] Richiesta trazione da manipolatore (ran",
    "descrizione_custom": "H1:MC encoder R1",
    "ordine_custom": 691,
    "ordine_funzione": 691,
    "ordine_apparato": 691,
    "ordine_cabina": 691
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_ATPPNEUPLATE2_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H1:Piastra 2 SCMT inserita",
    "ordine_custom": 692,
    "ordine_funzione": 692,
    "ordine_apparato": 692,
    "ordine_cabina": 692
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_BRKBYPASSEMCYAPPVALVE_R2_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "",
    "ordine_custom": 693,
    "ordine_funzione": 693,
    "ordine_apparato": 693,
    "ordine_cabina": 693
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_CLMBYPASSOPENSTATUSR_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass lato destro aperto",
    "descrizione_custom": "H1:Bypass Clima Destro aperto",
    "ordine_custom": 694,
    "ordine_funzione": 694,
    "ordine_apparato": 694,
    "ordine_cabina": 694
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_CLMDAMPERSCLOSINGCMD_H1",
    "descrizione_dmms": "[Clima] 1 = Serranda comandata chiusa",
    "descrizione_custom": "H1:Serranda aria Cabina chiusa",
    "ordine_custom": 695,
    "ordine_funzione": 695,
    "ordine_apparato": 695,
    "ordine_cabina": 695
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSREQCNCLDRSRELLEFT_H1",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H1:Cancellazione rilascio porte sinistre",
    "ordine_custom": 696,
    "ordine_funzione": 696,
    "ordine_apparato": 696,
    "ordine_cabina": 696
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSREQCNCLDRSRELRIGHT_H1",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H1:Cancellazione rilascio porte destre",
    "ordine_custom": 697,
    "ordine_funzione": 697,
    "ordine_apparato": 697,
    "ordine_cabina": 697
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSTCLDRSRELSIDEB_H1",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato B",
    "descrizione_custom": "H1:Sblocco porte lato B",
    "ordine_custom": 698,
    "ordine_funzione": 698,
    "ordine_apparato": 698,
    "ordine_cabina": 698
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_DRSTCLSFTYLOOPOK_R1_H1",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "H1:Porte chiuse & bloccate",
    "ordine_custom": 699,
    "ordine_funzione": 699,
    "ordine_apparato": 699,
    "ordine_cabina": 699
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSEMCYBRAKE_R1_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in frenatura di emerge",
    "descrizione_custom": "H1:MC EB R1",
    "ordine_custom": 700,
    "ordine_funzione": 700,
    "ordine_apparato": 700,
    "ordine_cabina": 700
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSFULLSERVBRAKE_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H1:MC FULL SERV BRAKE",
    "ordine_custom": 701,
    "ordine_funzione": 701,
    "ordine_apparato": 701,
    "ordine_cabina": 701
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSMOTORING_R1_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H1:MC Motoring R1",
    "ordine_custom": 702,
    "ordine_funzione": 702,
    "ordine_apparato": 702,
    "ordine_cabina": 702
  },
  {
    "nome_colonna": "S_RIO3_H1_LI_TBSNOBRAKE_R1_H1",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H1:MC NoBrake R1",
    "ordine_custom": 703,
    "ordine_funzione": 703,
    "ordine_apparato": 703,
    "ordine_cabina": 703
  },
  {
    "nome_colonna": "S_RIO3_H2_AI_TBSACCDECDEMAND_R1_H2",
    "descrizione_dmms": "[Trazione] Richiesta trazione da manipolatore (ran",
    "descrizione_custom": "H2:MC encoder R1",
    "ordine_custom": 704,
    "ordine_funzione": 704,
    "ordine_apparato": 704,
    "ordine_cabina": 704
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_ATPPNEUPLATE2_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H2:Piastra 2 SCMT inserita",
    "ordine_custom": 705,
    "ordine_funzione": 705,
    "ordine_apparato": 705,
    "ordine_cabina": 705
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_BRKBYPASSEMCYAPPVALVE_R2_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "",
    "ordine_custom": 706,
    "ordine_funzione": 706,
    "ordine_apparato": 706,
    "ordine_cabina": 706
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_CLMBYPASSOPENSTATUSR_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass lato destro aperto",
    "descrizione_custom": "H2:Bypass Clima Destro aperto",
    "ordine_custom": 707,
    "ordine_funzione": 707,
    "ordine_apparato": 707,
    "ordine_cabina": 707
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_CLMDAMPERSCLOSINGCMD_H2",
    "descrizione_dmms": "[Clima] 1 = Serranda comandata chiusa",
    "descrizione_custom": "H2:Serranda aria Cabina chiusa",
    "ordine_custom": 708,
    "ordine_funzione": 708,
    "ordine_apparato": 708,
    "ordine_cabina": 708
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSREQCNCLDRSRELLEFT_H2",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H2:Cancellazione rilascio porte sinistre",
    "ordine_custom": 709,
    "ordine_funzione": 709,
    "ordine_apparato": 709,
    "ordine_cabina": 709
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSREQCNCLDRSRELRIGHT_H2",
    "descrizione_dmms": "[Porte] 1 = Richiesta cancellazione rilascio porte",
    "descrizione_custom": "H2:Cancellazione rilascio porte destre",
    "ordine_custom": 710,
    "ordine_funzione": 710,
    "ordine_apparato": 710,
    "ordine_cabina": 710
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSTCLDRSRELSIDEA_H2",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato A",
    "descrizione_custom": "H2:Sblocco porte lato A",
    "ordine_custom": 711,
    "ordine_funzione": 711,
    "ordine_apparato": 711,
    "ordine_cabina": 711
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_DRSTCLSFTYLOOPOK_R1_H2",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "H2:Porte chiuse & bloccate",
    "ordine_custom": 712,
    "ordine_funzione": 712,
    "ordine_apparato": 712,
    "ordine_cabina": 712
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSEMCYBRAKE_R1_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in frenatura di emerge",
    "descrizione_custom": "H2:MC EB R1",
    "ordine_custom": 713,
    "ordine_funzione": 713,
    "ordine_apparato": 713,
    "ordine_cabina": 713
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSFULLSERVBRAKE_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H2:MC FULL SERV BRAKE",
    "ordine_custom": 714,
    "ordine_funzione": 714,
    "ordine_apparato": 714,
    "ordine_cabina": 714
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSMOTORING_R1_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H2:MC Motoring R1",
    "ordine_custom": 715,
    "ordine_funzione": 715,
    "ordine_apparato": 715,
    "ordine_cabina": 715
  },
  {
    "nome_colonna": "S_RIO3_H2_LI_TBSNOBRAKE_R1_H2",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "H2:MC NoBrake R1",
    "ordine_custom": 716,
    "ordine_funzione": 716,
    "ordine_apparato": 716,
    "ordine_cabina": 716
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_AIRCOMPACTIVATIONSTATUS1_M1",
    "descrizione_dmms": "[Produzione aria 1] 1 = Compressore attivato",
    "descrizione_custom": "M1:Compressore 1",
    "ordine_custom": 717,
    "ordine_funzione": 717,
    "ordine_apparato": 717,
    "ordine_cabina": 717
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOOVERPRESS2A",
    "descrizione_dmms": "[Pantografo A] 1 = Spinta addizionale pari a 6 kg",
    "descrizione_custom": "M1:Panto A OverPressure 6kg ",
    "ordine_custom": 718,
    "ordine_funzione": 718,
    "ordine_apparato": 718,
    "ordine_cabina": 718
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOPNEUMISO2A",
    "descrizione_dmms": "[Pantografo A] 1 = Rubinetto isolamento pantografo",
    "descrizione_custom": "M1:Panto A Isolamento aria ",
    "ordine_custom": 719,
    "ordine_funzione": 719,
    "ordine_apparato": 719,
    "ordine_cabina": 719
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_HVSPANTOPNEUMISO2B",
    "descrizione_dmms": "[Pantografo B] 1 = Rubinetto isolamento pantografo",
    "descrizione_custom": "M1:Panto B Isolamanto aria ",
    "ordine_custom": 720,
    "ordine_funzione": 720,
    "ordine_apparato": 720,
    "ordine_cabina": 720
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_MVSKMV3_M1",
    "descrizione_dmms": "[MT/BT] 1 = Contattore di configurazione rete MT c",
    "descrizione_custom": "STATO MT MV3",
    "ordine_custom": 721,
    "ordine_funzione": 721,
    "ordine_apparato": 721,
    "ordine_cabina": 721
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBCLOSED_R1_M1",
    "descrizione_dmms": "[Trazione] 1 = IR chiuso",
    "descrizione_custom": "M1:IR \"chiuso\"",
    "ordine_custom": 722,
    "ordine_funzione": 722,
    "ordine_apparato": 722,
    "ordine_cabina": 722
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBHOLD_M1",
    "descrizione_dmms": "[Trazione] 1 = Richiesta mantenimento IR chiuso at",
    "descrizione_custom": "M1:IR \"mantenimento chiuso\"",
    "ordine_custom": 723,
    "ordine_funzione": 723,
    "ordine_apparato": 723,
    "ordine_cabina": 723
  },
  {
    "nome_colonna": "S_RIO3_M1_LI_TBSHSCBOPENED_R1_M1",
    "descrizione_dmms": "[Trazione] 1 = IR aperto",
    "descrizione_custom": "M1:IR \"aperto\"",
    "ordine_custom": 724,
    "ordine_funzione": 724,
    "ordine_apparato": 724,
    "ordine_cabina": 724
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_ATPPNEUPLATE1_H1",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H1:Piastra 1 SCMT inserita",
    "ordine_custom": 725,
    "ordine_funzione": 725,
    "ordine_apparato": 725,
    "ordine_cabina": 725
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_BRKBYPASSEMCYAPPVALVE_R1_H1",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "H1:Bypass EB da SIFA",
    "ordine_custom": 726,
    "ordine_funzione": 726,
    "ordine_apparato": 726,
    "ordine_cabina": 726
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_CLMBYPASSOPENSTATUSL_H1",
    "descrizione_dmms": "[Clima] 1 = Bypass lato sinistro aperto",
    "descrizione_custom": "H1:Bypass Clima Sinistro aperto",
    "ordine_custom": 727,
    "ordine_funzione": 727,
    "ordine_apparato": 727,
    "ordine_cabina": 727
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRSTCLDRSRELSIDEA_H1",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato A",
    "descrizione_custom": "H1:Sblocco porte lato A",
    "ordine_custom": 728,
    "ordine_funzione": 728,
    "ordine_apparato": 728,
    "ordine_cabina": 728
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRSTCLSFTYLOOPOK_R2_H1",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "",
    "ordine_custom": 729,
    "ordine_funzione": 729,
    "ordine_apparato": 729,
    "ordine_cabina": 729
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_DRVGREASELEVELMAX_H1",
    "descrizione_dmms": "[Ungibordo] 1 = Serbatoio olio livello minimo",
    "descrizione_custom": "H1:Serbatoio olio ungibordo pieno",
    "ordine_custom": 730,
    "ordine_funzione": 730,
    "ordine_apparato": 730,
    "ordine_cabina": 730
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_FSDBUZZERDISCONNECTED_H1",
    "descrizione_dmms": "[Antincendio] 1 = Cicalino tacitato",
    "descrizione_custom": "H1:Selettore 14S01 tacitazione Buzzer CAB A",
    "ordine_custom": 731,
    "ordine_funzione": 731,
    "ordine_apparato": 731,
    "ordine_cabina": 731
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_SANPNEUSANDISOCOCDIA_H1",
    "descrizione_dmms": "[Sabbiere] 1 = Rubinetto isolamento sabbiere attiv",
    "descrizione_custom": "H1:Sabbiera isolata da rubinetto 63S02 ",
    "ordine_custom": 732,
    "ordine_funzione": 732,
    "ordine_apparato": 732,
    "ordine_cabina": 732
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_TBSMOTORING_R2_H1",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H1:MC Motoring R2",
    "ordine_custom": 733,
    "ordine_funzione": 733,
    "ordine_apparato": 733,
    "ordine_cabina": 733
  },
  {
    "nome_colonna": "S_RIO4_H1_LI_TBSNOBRAKE_R2_H1",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "",
    "ordine_custom": 734,
    "ordine_funzione": 734,
    "ordine_apparato": 734,
    "ordine_cabina": 734
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_ATPPNEUPLATE1_H2",
    "descrizione_dmms": "[Segnalamento] 1 = Piastra pneumatica inserita",
    "descrizione_custom": "H2:Piastra 1 SCMT inserita",
    "ordine_custom": 735,
    "ordine_funzione": 735,
    "ordine_apparato": 735,
    "ordine_cabina": 735
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_BRKBYPASSEMCYAPPVALVE_R1_H2",
    "descrizione_dmms": "[Freno] 1 = Bypass safety loop attivato",
    "descrizione_custom": "H2:Bypass EB da SIFA",
    "ordine_custom": 736,
    "ordine_funzione": 736,
    "ordine_apparato": 736,
    "ordine_cabina": 736
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_CLMBYPASSOPENSTATUSL_H2",
    "descrizione_dmms": "[Clima] 1 = Bypass lato sinistro aperto",
    "descrizione_custom": "H2:Bypass Clima Sinistro aperto",
    "ordine_custom": 737,
    "ordine_funzione": 737,
    "ordine_apparato": 737,
    "ordine_cabina": 737
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRSTCLDRSRELSIDEB_H2",
    "descrizione_dmms": "[Porte] 1 = Rilascio porte lato B",
    "descrizione_custom": "H2:Sblocco porte lato B",
    "ordine_custom": 738,
    "ordine_funzione": 738,
    "ordine_apparato": 738,
    "ordine_cabina": 738
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRSTCLSFTYLOOPOK_R2_H2",
    "descrizione_dmms": "[Porte] 1 = Tutte le porte chiuse e bloccate",
    "descrizione_custom": "",
    "ordine_custom": 739,
    "ordine_funzione": 739,
    "ordine_apparato": 739,
    "ordine_cabina": 739
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_DRVGREASELEVELMAX_H2",
    "descrizione_dmms": "[Ungibordo] 1 = Serbatoio olio livello minimo",
    "descrizione_custom": "H2:Serbatoio olio ungibordo pieno",
    "ordine_custom": 740,
    "ordine_funzione": 740,
    "ordine_apparato": 740,
    "ordine_cabina": 740
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_FSDBUZZERDISCONNECTED_H2",
    "descrizione_dmms": "[Antincendio] 1 = Cicalino tacitato",
    "descrizione_custom": "H2:Selettore 14S01 tacitazione Buzzer CAB B",
    "ordine_custom": 741,
    "ordine_funzione": 741,
    "ordine_apparato": 741,
    "ordine_cabina": 741
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_SANPNEUSANDISOCOCDIA_H2",
    "descrizione_dmms": "[Sabbiere] 1 = Rubinetto isolamento sabbiere attiv",
    "descrizione_custom": "H2:Sabbiera isolata da rubinetto 63S02 ",
    "ordine_custom": 742,
    "ordine_funzione": 742,
    "ordine_apparato": 742,
    "ordine_cabina": 742
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_TBSMOTORING_R2_H2",
    "descrizione_dmms": "[Trazione] 1 = Manipolatore in trazione",
    "descrizione_custom": "H2:MC Motoring R2",
    "ordine_custom": 743,
    "ordine_funzione": 743,
    "ordine_apparato": 743,
    "ordine_cabina": 743
  },
  {
    "nome_colonna": "S_RIO4_H2_LI_TBSNOBRAKE_R2_H2",
    "descrizione_dmms": "[Trazione] 0 = Manipolatore in massima frenatura d",
    "descrizione_custom": "",
    "ordine_custom": 744,
    "ordine_funzione": 744,
    "ordine_apparato": 744,
    "ordine_cabina": 744
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_AIRCOMPACTIVATIONSTATUS2_M1",
    "descrizione_dmms": "[Produzione aria 2] 1 = Compressore attivato",
    "descrizione_custom": "M1:Compressore 2",
    "ordine_custom": 745,
    "ordine_funzione": 745,
    "ordine_apparato": 745,
    "ordine_cabina": 745
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_HVSPANTOOVERPRESS2B",
    "descrizione_dmms": "[Pantografo B] 1 = Spinta addizionale pari a 6 kg",
    "descrizione_custom": "M1:Panto B OverPressure 6kg ",
    "ordine_custom": 746,
    "ordine_funzione": 746,
    "ordine_apparato": 746,
    "ordine_cabina": 746
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_TBSHSCBCLOSED_R2_M1",
    "descrizione_dmms": "[Trazione] 1 = IR chiuso",
    "descrizione_custom": "",
    "ordine_custom": 747,
    "ordine_funzione": 747,
    "ordine_apparato": 747,
    "ordine_cabina": 747
  },
  {
    "nome_colonna": "S_RIO4_M1_LI_TBSHSCBOPENED_R2_M1",
    "descrizione_dmms": "[Trazione] 1 = IR aperto",
    "descrizione_custom": "",
    "ordine_custom": 748,
    "ordine_funzione": 748,
    "ordine_apparato": 748,
    "ordine_cabina": 748
  },
  {
    "nome_colonna": "S_RIO5_H1_AI_TBSGEARBOXTEMP1",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H1:Temperatura riduttore motore 1",
    "ordine_custom": 749,
    "ordine_funzione": 749,
    "ordine_apparato": 749,
    "ordine_cabina": 749
  },
  {
    "nome_colonna": "S_RIO5_H1_AI_TBSGEARBOXTEMP2",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H1:Temperatura riduttore motore 2",
    "ordine_custom": 750,
    "ordine_funzione": 750,
    "ordine_apparato": 750,
    "ordine_cabina": 750
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRK62S125NC_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H1:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 751,
    "ordine_funzione": 751,
    "ordine_apparato": 751,
    "ordine_cabina": 751
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKBOGIEINDIISOLATED2_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "H1:Distributore isolato da rubinetto",
    "ordine_custom": 752,
    "ordine_funzione": 752,
    "ordine_apparato": 752,
    "ordine_cabina": 752
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKCMDVALVEN1106_H1",
    "descrizione_dmms": "[Freno] 1 = Inibizione ricarica condotta generale",
    "descrizione_custom": "H1:N11 inib ricarica CG",
    "ordine_custom": 753,
    "ordine_funzione": 753,
    "ordine_apparato": 753,
    "ordine_cabina": 753
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDIRBRKISOLATED1_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H1:Freno EP carrello motore isolato da rubinetto B61",
    "ordine_custom": 754,
    "ordine_funzione": 754,
    "ordine_apparato": 754,
    "ordine_cabina": 754
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDIRBRKISOLATED2_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H1:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 755,
    "ordine_funzione": 755,
    "ordine_apparato": 755,
    "ordine_cabina": 755
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDRVBRKVALVFZ1SW1STA_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H1:N10 SW1",
    "ordine_custom": 756,
    "ordine_funzione": 756,
    "ordine_apparato": 756,
    "ordine_cabina": 756
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKDRVBRKVALVFZ1SW2STA_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H1:N10 SW2",
    "ordine_custom": 757,
    "ordine_funzione": 757,
    "ordine_apparato": 757,
    "ordine_cabina": 757
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKMECHBRKSTATBOG1_H1",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H1:Freno meccanico carrello 1",
    "ordine_custom": 758,
    "ordine_funzione": 758,
    "ordine_apparato": 758,
    "ordine_cabina": 758
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKOVERRIDEPASSEBREQ_H1",
    "descrizione_dmms": "[Freno] 1 = Pulsante richiesta di neutralizzazione",
    "descrizione_custom": "H1:Bypass Override PAS",
    "ordine_custom": 759,
    "ordine_funzione": 759,
    "ordine_apparato": 759,
    "ordine_cabina": 759
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKPBISOLATIONCOCKB051_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H1:FAM Isolato B05",
    "ordine_custom": 760,
    "ordine_funzione": 760,
    "ordine_apparato": 760,
    "ordine_cabina": 760
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_BRKPBNOTRELEASELOCAL1_H1",
    "descrizione_dmms": "[Freno] 1 = Freno di parcheggio non rilasciato",
    "descrizione_custom": "H1:FAM NotRelease",
    "ordine_custom": 761,
    "ordine_funzione": 761,
    "ordine_apparato": 761,
    "ordine_cabina": 761
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_DRSSFTYLOOPBYPSD_H1",
    "descrizione_dmms": "[Porte] 1 = By-pass \"Safety Loop\" attivato",
    "descrizione_custom": "H1:Bypass safety loop",
    "ordine_custom": 762,
    "ordine_funzione": 762,
    "ordine_apparato": 762,
    "ordine_cabina": 762
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_MVSSHORESUPPCONTACT_H1",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina abilitata",
    "descrizione_custom": "H1:PHCK Presa Officina abilitata",
    "ordine_custom": 763,
    "ordine_funzione": 763,
    "ordine_apparato": 763,
    "ordine_cabina": 763
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSDCHVKOPEN_H1",
    "descrizione_dmms": "[Trazione] 0 = Almeno un contattore di alta tensio",
    "descrizione_custom": "H1:Almeno un contattore HV aperto",
    "ordine_custom": 764,
    "ordine_funzione": 764,
    "ordine_apparato": 764,
    "ordine_cabina": 764
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSPCE1NOTISOLAT_H1",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H1:PCE1 \"incluso\"",
    "ordine_custom": 765,
    "ordine_funzione": 765,
    "ordine_apparato": 765,
    "ordine_cabina": 765
  },
  {
    "nome_colonna": "S_RIO5_H1_LI_TBSPCE2NOTISOLAT_H1",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H1:PCE2 \"incluso\"",
    "ordine_custom": 766,
    "ordine_funzione": 766,
    "ordine_apparato": 766,
    "ordine_cabina": 766
  },
  {
    "nome_colonna": "S_RIO5_H2_AI_TBSGEARBOXTEMP3",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H2:Temperatura riduttore motore 3",
    "ordine_custom": 767,
    "ordine_funzione": 767,
    "ordine_apparato": 767,
    "ordine_cabina": 767
  },
  {
    "nome_colonna": "S_RIO5_H2_AI_TBSGEARBOXTEMP4",
    "descrizione_dmms": "[Trazione] Misura temperatura riduttore (range -50",
    "descrizione_custom": "H2:Temperatura riduttore motore 4",
    "ordine_custom": 768,
    "ordine_funzione": 768,
    "ordine_apparato": 768,
    "ordine_cabina": 768
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRK62S125NC_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H2:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 769,
    "ordine_funzione": 769,
    "ordine_apparato": 769,
    "ordine_cabina": 769
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKBOGIEINDIISOLATED2_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento distributore atti",
    "descrizione_custom": "H2:Distributore isolato da rubinetto",
    "ordine_custom": 770,
    "ordine_funzione": 770,
    "ordine_apparato": 770,
    "ordine_cabina": 770
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKCMDVALVEN1106_H2",
    "descrizione_dmms": "[Freno] 1 = Inibizione ricarica condotta generale",
    "descrizione_custom": "H2:N11 inib ricarica CG",
    "ordine_custom": 771,
    "ordine_funzione": 771,
    "ordine_apparato": 771,
    "ordine_cabina": 771
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDIRBRKISOLATED1_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H2:Freno EP carrello motore isolato da rubinetto B61",
    "ordine_custom": 772,
    "ordine_funzione": 772,
    "ordine_apparato": 772,
    "ordine_cabina": 772
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDIRBRKISOLATED2_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno diretto ele",
    "descrizione_custom": "H2:Freno EP carrello portante isolato da rubinetto B61",
    "ordine_custom": 773,
    "ordine_funzione": 773,
    "ordine_apparato": 773,
    "ordine_cabina": 773
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDRVBRKVALVFZ1SW1STA_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H2:N10 SW1",
    "ordine_custom": 774,
    "ordine_funzione": 774,
    "ordine_apparato": 774,
    "ordine_cabina": 774
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKDRVBRKVALVFZ1SW2STA_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto freno in posizione ricarica",
    "descrizione_custom": "H2:N10 SW2",
    "ordine_custom": 775,
    "ordine_funzione": 775,
    "ordine_apparato": 775,
    "ordine_cabina": 775
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKMECHBRKSTATBOG1_H2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H2:Freno meccanico carrello 1",
    "ordine_custom": 776,
    "ordine_funzione": 776,
    "ordine_apparato": 776,
    "ordine_cabina": 776
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKOVERRIDEPASSEBREQ_H2",
    "descrizione_dmms": "[Freno] 1 = Pulsante richiesta di neutralizzazione",
    "descrizione_custom": "H2:Bypass Override PAS",
    "ordine_custom": 777,
    "ordine_funzione": 777,
    "ordine_apparato": 777,
    "ordine_cabina": 777
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKPBISOLATIONCOCKB051_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H2:FAM Isolato B05",
    "ordine_custom": 778,
    "ordine_funzione": 778,
    "ordine_apparato": 778,
    "ordine_cabina": 778
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_BRKPBNOTRELEASELOCAL1_H2",
    "descrizione_dmms": "[Freno] 1 = Freno di parcheggio non rilasciato",
    "descrizione_custom": "H2:FAM NotRelease",
    "ordine_custom": 779,
    "ordine_funzione": 779,
    "ordine_apparato": 779,
    "ordine_cabina": 779
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_DRSSFTYLOOPBYPSD_H2",
    "descrizione_dmms": "[Porte] 1 = By-pass \"Safety Loop\" attivato",
    "descrizione_custom": "H2:Bypass safety loop",
    "ordine_custom": 780,
    "ordine_funzione": 780,
    "ordine_apparato": 780,
    "ordine_cabina": 780
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_MVSSHORESUPPCONTACT_H2",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina abilitata",
    "descrizione_custom": "H2:PHCK Presa Officina abilitata",
    "ordine_custom": 781,
    "ordine_funzione": 781,
    "ordine_apparato": 781,
    "ordine_cabina": 781
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSDCHVKOPEN_H2",
    "descrizione_dmms": "[Trazione] 0 = Almeno un contattore di alta tensio",
    "descrizione_custom": "H2:Almeno un contattore HV aperto",
    "ordine_custom": 782,
    "ordine_funzione": 782,
    "ordine_apparato": 782,
    "ordine_cabina": 782
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSPCE3NOTISOLAT_H2",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H2:PCE3 \"incluso\"",
    "ordine_custom": 783,
    "ordine_funzione": 783,
    "ordine_apparato": 783,
    "ordine_cabina": 783
  },
  {
    "nome_colonna": "S_RIO5_H2_LI_TBSPCE4NOTISOLAT_H2",
    "descrizione_dmms": "[Trazione] 0 = Inverter di trazione escluso",
    "descrizione_custom": "H2:PCE4 \"incluso\"",
    "ordine_custom": 784,
    "ordine_funzione": 784,
    "ordine_apparato": 784,
    "ordine_cabina": 784
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBOGIEISOLATED1_H1",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H1:Gruppo Freno carrello motore isolato da rubinetto B03",
    "ordine_custom": 785,
    "ordine_funzione": 785,
    "ordine_apparato": 785,
    "ordine_cabina": 785
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBOGIEISOLATED2_H1",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H1:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 786,
    "ordine_funzione": 786,
    "ordine_apparato": 786,
    "ordine_cabina": 786
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBPEMERGPRESSSWITCH_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H1:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 787,
    "ordine_funzione": 787,
    "ordine_apparato": 787,
    "ordine_cabina": 787
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKBPPRESSSWITCH_H1",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H1:Pressione CG B62 <3.9/>4.9 bar",
    "ordine_custom": 788,
    "ordine_funzione": 788,
    "ordine_apparato": 788,
    "ordine_cabina": 788
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKDRVBRKVALVFZ1SW3STA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H1:N10 SW3",
    "ordine_custom": 789,
    "ordine_funzione": 789,
    "ordine_apparato": 789,
    "ordine_cabina": 789
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKDRVBRKVALVFZ1SW4STA_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H1:N10 SW4",
    "ordine_custom": 790,
    "ordine_funzione": 790,
    "ordine_apparato": 790,
    "ordine_cabina": 790
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKMECHBRKSTATBOG2_H1",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H1:Freno meccanico carrello 2",
    "ordine_custom": 791,
    "ordine_funzione": 791,
    "ordine_apparato": 791,
    "ordine_cabina": 791
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKPBISOLATIONCOCKB681_H1",
    "descrizione_dmms": "[Freno] 1 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H1:FAM Isolato B68",
    "ordine_custom": 792,
    "ordine_funzione": 792,
    "ordine_apparato": 792,
    "ordine_cabina": 792
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKSIFAVALVEISOSTAT_H1",
    "descrizione_dmms": "[Freno] 0 = Valvola SIFA isolata",
    "descrizione_custom": "H1:SIFA isolata da rubinetto",
    "ordine_custom": 793,
    "ordine_funzione": 793,
    "ordine_apparato": 793,
    "ordine_cabina": 793
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_BRKTESTVALVEISOLATIONCOCK_H1",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento elettrovalvola di",
    "descrizione_custom": "H1:Rubinetto isolamento elettrovalvola di coda",
    "ordine_custom": 794,
    "ordine_funzione": 794,
    "ordine_apparato": 794,
    "ordine_cabina": 794
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_MVS400VSHORESOCKPLUG_H1",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina inserita",
    "descrizione_custom": "H1:Presa Officina inserita",
    "ordine_custom": 795,
    "ordine_funzione": 795,
    "ordine_apparato": 795,
    "ordine_cabina": 795
  },
  {
    "nome_colonna": "S_RIO6_H1_LI_TBSPCE1NOTISOLAT_R2_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 796,
    "ordine_funzione": 796,
    "ordine_apparato": 796,
    "ordine_cabina": 796
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBOGIEISOLATED1_H2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H2:Gruppo Freno carrello motore isolato da rubinetto B03",
    "ordine_custom": 797,
    "ordine_funzione": 797,
    "ordine_apparato": 797,
    "ordine_cabina": 797
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBOGIEISOLATED2_H2",
    "descrizione_dmms": "[Freno] 1 = Carrello isolato",
    "descrizione_custom": "H2:Gruppo Freno carrello portante isolato da rubinetto B03",
    "ordine_custom": 798,
    "ordine_funzione": 798,
    "ordine_apparato": 798,
    "ordine_cabina": 798
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBPEMERGPRESSSWITCH_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 2....\"",
    "descrizione_custom": "H2:Pressione CG B64 <2.3/>2.7 bar",
    "ordine_custom": 799,
    "ordine_funzione": 799,
    "ordine_apparato": 799,
    "ordine_cabina": 799
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKBPPRESSSWITCH_H2",
    "descrizione_dmms": "[Freno] Pressione condotta generale (0 = \"> 4....\"",
    "descrizione_custom": "H2:Pressione CG B62 <3.9/>4.9 bar",
    "ordine_custom": 800,
    "ordine_funzione": 800,
    "ordine_apparato": 800,
    "ordine_cabina": 800
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKDRVBRKVALVFZ1SW3STA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H2:N10 SW3",
    "ordine_custom": 801,
    "ordine_funzione": 801,
    "ordine_apparato": 801,
    "ordine_cabina": 801
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKDRVBRKVALVFZ1SW4STA_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto freno in posizione frenatura",
    "descrizione_custom": "H2:N10 SW4",
    "ordine_custom": 802,
    "ordine_funzione": 802,
    "ordine_apparato": 802,
    "ordine_cabina": 802
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKMECHBRKSTATBOG2_H2",
    "descrizione_dmms": "[Freno] 1 = Freno meccanico applicato",
    "descrizione_custom": "H2:Freno meccanico carrello 2",
    "ordine_custom": 803,
    "ordine_funzione": 803,
    "ordine_apparato": 803,
    "ordine_cabina": 803
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKPBISOLATIONCOCKB681_H2",
    "descrizione_dmms": "[Freno] 1 = Rubinetto isolamento freno di parchegg",
    "descrizione_custom": "H2:FAM Isolato B68",
    "ordine_custom": 804,
    "ordine_funzione": 804,
    "ordine_apparato": 804,
    "ordine_cabina": 804
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKSIFAVALVEISOSTAT_H2",
    "descrizione_dmms": "[Freno] 0 = Valvola SIFA isolata",
    "descrizione_custom": "H2:SIFA isolata da rubinetto",
    "ordine_custom": 805,
    "ordine_funzione": 805,
    "ordine_apparato": 805,
    "ordine_cabina": 805
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_BRKTESTVALVEISOLATIONCOCK_H2",
    "descrizione_dmms": "[Freno] 0 = Rubinetto isolamento elettrovalvola di",
    "descrizione_custom": "H2:Rubinetto isolamento elettrovalvola di coda",
    "ordine_custom": 806,
    "ordine_funzione": 806,
    "ordine_apparato": 806,
    "ordine_cabina": 806
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_MVS400VSHORESOCKPLUG_H2",
    "descrizione_dmms": "[MT/BT] 1 = Presa officina inserita",
    "descrizione_custom": "H2:Presa Officina inserita",
    "ordine_custom": 807,
    "ordine_funzione": 807,
    "ordine_apparato": 807,
    "ordine_cabina": 807
  },
  {
    "nome_colonna": "S_RIO6_H2_LI_TBSPCE3NOTISOLAT_R2_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 808,
    "ordine_funzione": 808,
    "ordine_apparato": 808,
    "ordine_cabina": 808
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IDEVISALIVE",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 809,
    "ordine_funzione": 809,
    "ordine_apparato": 809,
    "ordine_cabina": 809
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCFRESHWATERTANKFULL",
    "descrizione_dmms": "WC Fresh water tank full (variable defined as an",
    "descrizione_custom": "TOI:Acque chiare piene",
    "ordine_custom": 810,
    "ordine_funzione": 810,
    "ordine_apparato": 810,
    "ordine_cabina": 810
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCFRESHWATERTANKLEVEL",
    "descrizione_dmms": "WC Fresh water tank level From 0 to 100%",
    "descrizione_custom": "TOI:Livello acque chiare",
    "ordine_custom": 811,
    "ordine_funzione": 811,
    "ordine_apparato": 811,
    "ordine_cabina": 811
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCOCCUPIED",
    "descrizione_dmms": "WC Occupied 0:WC is not in OCCUPIED state 1:WC",
    "descrizione_custom": "TOI:WC occupato",
    "ordine_custom": 812,
    "ordine_funzione": 812,
    "ordine_apparato": 812,
    "ordine_cabina": 812
  },
  {
    "nome_colonna": "S_TOI1_TOI1_IWCOUTOFSERVICE",
    "descrizione_dmms": "WC Out of Service 0:WC is not in OUT OF SERVICE",
    "descrizione_custom": "TOI:WC Fuori servizio",
    "ordine_custom": 813,
    "ordine_funzione": 813,
    "ordine_apparato": 813,
    "ordine_cabina": 813
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 814,
    "ordine_funzione": 814,
    "ordine_apparato": 814,
    "ordine_cabina": 814
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IEMERGVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 815,
    "ordine_funzione": 815,
    "ordine_apparato": 815,
    "ordine_cabina": 815
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IEXTTP_H1",
    "descrizione_dmms": "HVAC exterior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H1:Temperatura Esterna",
    "ordine_custom": 816,
    "ordine_funzione": 816,
    "ordine_apparato": 816,
    "ordine_cabina": 816
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IINTTP_H1",
    "descrizione_dmms": "HVAC interior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H1:Temperatura Interna",
    "ordine_custom": 817,
    "ordine_funzione": 817,
    "ordine_apparato": 817,
    "ordine_cabina": 817
  },
  {
    "nome_colonna": "S_VACC_H1_VACC_IVENTSTATUS_H1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK",
    "descrizione_custom": "Ventilazione Clima Cabina H1",
    "ordine_custom": 818,
    "ordine_funzione": 818,
    "ordine_apparato": 818,
    "ordine_cabina": 818
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 819,
    "ordine_funzione": 819,
    "ordine_apparato": 819,
    "ordine_cabina": 819
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IEMERGVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 820,
    "ordine_funzione": 820,
    "ordine_apparato": 820,
    "ordine_cabina": 820
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IEXTTP_H2",
    "descrizione_dmms": "HVAC exterior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H2:Temperatura Esterna",
    "ordine_custom": 821,
    "ordine_funzione": 821,
    "ordine_apparato": 821,
    "ordine_cabina": 821
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IINTTP_H2",
    "descrizione_dmms": "HVAC interior temperature / Range:0xF060 to 0x2EE",
    "descrizione_custom": "VACC-H2:Temperatura Interna",
    "ordine_custom": 822,
    "ordine_funzione": 822,
    "ordine_apparato": 822,
    "ordine_cabina": 822
  },
  {
    "nome_colonna": "S_VACC_H2_VACC_IVENTSTATUS_H2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK",
    "descrizione_custom": "Ventilazione Clima Cabina H2",
    "ordine_custom": 823,
    "ordine_funzione": 823,
    "ordine_apparato": 823,
    "ordine_cabina": 823
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IDEGRVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 824,
    "ordine_funzione": 824,
    "ordine_apparato": 824,
    "ordine_cabina": 824
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IDEVISALIVE_H1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 825,
    "ordine_funzione": 825,
    "ordine_apparato": 825,
    "ordine_cabina": 825
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IEMERGVENTSTATUS_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 826,
    "ordine_funzione": 826,
    "ordine_apparato": 826,
    "ordine_cabina": 826
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IHALFPOWERMODE_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 827,
    "ordine_funzione": 827,
    "ordine_apparato": 827,
    "ordine_cabina": 827
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IINTTP_H1",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_H1:temperatura interna",
    "ordine_custom": 828,
    "ordine_funzione": 828,
    "ordine_apparato": 828,
    "ordine_cabina": 828
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_ISTATIONMODE_H1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 829,
    "ordine_funzione": 829,
    "ordine_apparato": 829,
    "ordine_cabina": 829
  },
  {
    "nome_colonna": "S_VACP_H1_VACP_IVENTSTATUS_H1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Comparto H1",
    "ordine_custom": 830,
    "ordine_funzione": 830,
    "ordine_apparato": 830,
    "ordine_cabina": 830
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IDEGRVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 831,
    "ordine_funzione": 831,
    "ordine_apparato": 831,
    "ordine_cabina": 831
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IDEVISALIVE_H2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 832,
    "ordine_funzione": 832,
    "ordine_apparato": 832,
    "ordine_cabina": 832
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IEMERGVENTSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 833,
    "ordine_funzione": 833,
    "ordine_apparato": 833,
    "ordine_cabina": 833
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IHALFPOWERMODE_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 834,
    "ordine_funzione": 834,
    "ordine_apparato": 834,
    "ordine_cabina": 834
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IINTTP_H2",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_H2:temperatura interna",
    "ordine_custom": 835,
    "ordine_funzione": 835,
    "ordine_apparato": 835,
    "ordine_cabina": 835
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_ISTANDBYSTATUS_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 836,
    "ordine_funzione": 836,
    "ordine_apparato": 836,
    "ordine_cabina": 836
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_ISTATIONMODE_H2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 837,
    "ordine_funzione": 837,
    "ordine_apparato": 837,
    "ordine_cabina": 837
  },
  {
    "nome_colonna": "S_VACP_H2_VACP_IVENTSTATUS_H2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto H2",
    "ordine_custom": 838,
    "ordine_funzione": 838,
    "ordine_apparato": 838,
    "ordine_cabina": 838
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IDEGRVENTSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 839,
    "ordine_funzione": 839,
    "ordine_apparato": 839,
    "ordine_cabina": 839
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IDEVISALIVE_M1",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 840,
    "ordine_funzione": 840,
    "ordine_apparato": 840,
    "ordine_cabina": 840
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IEMERGVENTSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 841,
    "ordine_funzione": 841,
    "ordine_apparato": 841,
    "ordine_cabina": 841
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IHALFPOWERMODE_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 842,
    "ordine_funzione": 842,
    "ordine_apparato": 842,
    "ordine_cabina": 842
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IINTTP_M1",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_M1:temperatura interna",
    "ordine_custom": 843,
    "ordine_funzione": 843,
    "ordine_apparato": 843,
    "ordine_cabina": 843
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_ISTANDBYSTATUS_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 844,
    "ordine_funzione": 844,
    "ordine_apparato": 844,
    "ordine_cabina": 844
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_ISTATIONMODE_M1",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 845,
    "ordine_funzione": 845,
    "ordine_apparato": 845,
    "ordine_cabina": 845
  },
  {
    "nome_colonna": "S_VACP_M1_VACP_IVENTSTATUS_M1",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto M1",
    "ordine_custom": 846,
    "ordine_funzione": 846,
    "ordine_apparato": 846,
    "ordine_cabina": 846
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IDEGRVENTSTATUS_M2",
    "descrizione_dmms": "Mode setting Status confirmation (confirmed=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 847,
    "ordine_funzione": 847,
    "ordine_apparato": 847,
    "ordine_cabina": 847
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IDEVISALIVE_M2",
    "descrizione_dmms": "",
    "descrizione_custom": "",
    "ordine_custom": 848,
    "ordine_funzione": 848,
    "ordine_apparato": 848,
    "ordine_cabina": 848
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IEMERGVENTSTATUS_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1. else 0)",
    "descrizione_custom": "",
    "ordine_custom": 849,
    "ordine_funzione": 849,
    "ordine_apparato": 849,
    "ordine_cabina": 849
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IHALFPOWERMODE_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 850,
    "ordine_funzione": 850,
    "ordine_apparato": 850,
    "ordine_cabina": 850
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IINTTP_M2",
    "descrizione_dmms": "HVAC interior temperature Range:0xF060 to 0x2EE0",
    "descrizione_custom": "VACP_M2:temperatura interna",
    "ordine_custom": 851,
    "ordine_funzione": 851,
    "ordine_apparato": 851,
    "ordine_cabina": 851
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_ISTATIONMODE_M2",
    "descrizione_dmms": "Mode setting Status confirmation (in process=1, el",
    "descrizione_custom": "",
    "ordine_custom": 852,
    "ordine_funzione": 852,
    "ordine_apparato": 852,
    "ordine_cabina": 852
  },
  {
    "nome_colonna": "S_VACP_M2_VACP_IVENTSTATUS_M2",
    "descrizione_dmms": "HVAC unit ventilation status :  0 OFF / 1 ON OK:D",
    "descrizione_custom": "Ventilazione Clima Comparto M2",
    "ordine_custom": 853,
    "ordine_funzione": 853,
    "ordine_apparato": 853,
    "ordine_cabina": 853
  }
];
