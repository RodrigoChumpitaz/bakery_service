export const SENDING_METHOD_CORE = {
    EUROPE: [
        'BANK_TRANSFER_FRA-EUR',
        'BANK_TRANSFER_DEU-EUR',
        'BANK_TRANSFER_AUT-EUR',
        'BANK_TRANSFER_BEL-EUR',
        'BANK_TRANSFER_CYP-EUR',
        'BANK_TRANSFER_HRV-EUR',
        'BANK_TRANSFER_SVK-EUR',
        'BANK_TRANSFER_SVN-EUR',
        'BANK_TRANSFER_ESP-EUR',
        'BANK_TRANSFER_EST-EUR',
        'BANK_TRANSFER_FIN-EUR',
        'BANK_TRANSFER_GRC-EUR',
        'BANK_TRANSFER_IRL-EUR',
        'BANK_TRANSFER_ITA-EUR',
        'BANK_TRANSFER_LVA-EUR',
        'BANK_TRANSFER_LTU-EUR',
        'BANK_TRANSFER_LUX-EUR',
        'BANK_TRANSFER_MLT-EUR',
        'BANK_TRANSFER_NLD-EUR',
        'BANK_TRANSFER_PRT-EUR',
    ],
    UNITED_KINGDOM: ['BANK_TRANSFER_GBR-GBP'],
    CRYPTO: ['CRYPTO_ERC-20_FRA-USDT'],
};

export enum Banks {
    BBVA = 'BBVA',
    BCP = 'BCP',
    INTERBANK = 'INTERBANK',
    SCOTIABANK = 'SCOTIABANK',
    BANBIF = 'BANBIF',
    MIBANCO = 'MIBANCO',
    BANCO_DE_LA_NACION = 'BANCO DE LA NACION',
    PICHINCHA = 'PICHINCHA',
    CITIBANK = 'CITIBANK',
    COMERCIO = 'COMERCIO',
    CREDISCOTIA = 'CREDISCOTIA',
    GNB = 'GNB',
    FALLABELLA = 'BANCO FALABELLA',
    RIPLEY = 'BANCO RIPLEY',
    SANTANDER = 'BANCO SANTANDER PERU',
    ALFIN = 'ALFIN BANCO',
    CREDINKA = 'FINANCIERA CREDINKA',
    COMPARTAMOS = 'FINANCIERA COMPARTAMOS',
    OH = 'FINANCIERA OH',
    EFECTIVA = 'FINANCIERA EFECTIVA',
    CONFIANZA = 'FINANCIERA CONFIANZA',
    LUQEA = 'LUQEA',
    PREXPE = 'PREXPE',
    CAJA_METROPOLITANA = 'CAJA METROPOLITANA',
    CAJA_PIURA = 'CAJA PIURA',
    CAJA_TRUJILLO = 'CAJA TRUJILLO',
    CAJA_AREQUIPA = 'CAJA AREQUIPA',
    CAJA_SULLANA = 'CAJA SULLANA',
    CAJA_CUSCO = 'CAJA CUSCO',
    CAJA_HUANCAYO = 'CAJA HUANCAYO',
    CAJA_ICA = 'CAJA ICA',
    CAJA_TACNA = 'CAJA TACNA',
    CAJA_LOS_ANDES = 'CAJA LOS ANDES',
    ABACO = 'COOPERATIVA ABACO',
    DALE = 'DALE',
    EEDE = 'EEDE TARJETAS PERUANA',
    'BANCO DE COMERCIO' = 'BANCO DE COMERCIO',
}

export enum InsularBanks {
    BANCAMIGA = 'BANCAMIGA',
    BANCARIBE = 'BANCARIBE',
    BANCO_ACTIVO = 'BANCO ACTIVO',
    BANCO_BICENTENARIO = 'BANCO BICENTENARIO',
    BANCO_CARONI = 'BANCO CARONI',
    BANCO_DE_VENEZUELA = 'BANCO DE VENEZUELA',
    BANCO_DEL_TESORO = 'BANCO DEL TESORO',
    BANCO_EXTERIOR = 'BANCO EXTERIOR',
    BANCO_FONDO_COMUN = 'BANCO FONDO COMUN',
    BANCO_MERCANTIL = 'BANCO MERCANTIL',
    BANCO_PLAZA = 'BANCO PLAZA',
    BANCO_PROVINCIAL = 'BANCO PROVINCIAL',
    BANCO_SOFITASA = 'BANCO SOFITASA',
    BANCRECER = 'BANCRECER',
    BANESCO = 'BANESCO',
    BANFANB = 'BANFANB',
    BANPLUS = 'BANPLUS',
    BNC = 'BNC',
    BANCO_NACIONAL_DE_CREDITO = 'BANCO NACIONAL DE CREDITO (BNC)',
    BOD = 'BOD',
    DEL_SUR = 'DEL SUR',
    MI_BANCO = 'MI BANCO',
    N58_BANCO_DIGITAL = 'N58 BANCO DIGITAL',
    VENEZOLANO_DE_CREDITO = 'VENEZOLANO DE CREDITO',
    '100%_BANCO' = '100% BANCO',
    BANCO_DE_LA_GENTE_EMPRENDEDORA = 'BANCO DE LA GENTE EMPRENDEDORA',
    BANCO_AGRICOLA_DE_VENEZUELA = 'BANCO AGRICOLA DE VENEZUELA',
    BANCO_INTERNACIONAL_DE_DESARROLLO = 'BANCO INTERNACIONAL DE DESARROLLO',
    INSTITUTO_MUNICIPAL_DE_CREDITO_POPULAR = 'INSTITUTO MUNICIPAL DE CREDITO POPULAR',
}

export const VITA_COL_BANKS_ALLOWED = {
    BANCOLOMBIA: 'BANCOLOMBIA',
    NEQUI: 'NEQUI',
    ABN_AMRO: 'ABN AMRO',
    BANCAMIA_SA: 'BANCAMIA S.A.',
    BANCO_AGRARIO: 'BANCO AGRARIO',
    BANCO_AV_VILLAS: 'BANCO AV VILLAS',
    BANCO_BTG_PACTUAL: 'BANCO BTG PACTUAL',
    BANCO_CAJA_SOCIAL_BCSC_SA: 'BANCO CAJA SOCIAL BCSC S.A.',
    BANCO_COMPARTIR_SA: 'BANCO COMPARTIR S.A.',
    BANCO_COOPERATIVO_COOPCENTRAL: 'BANCO COOPERATIVO COOPCENTRAL',
    BANCO_CREDIFINANCIERA_SA: 'BANCO CREDIFINANCIERA S.A.',
    BANCO_DAVIVIENDA_SA: 'BANCO DAVIVIENDA S.A.',
    BANCO_DE_BOGOTA: 'BANCO DE BOGOTÁ',
    BANCO_DE_OCCIDENTE: 'BANCO DE OCCIDENTE',
    BANCO_FALABELLA_SA: 'BANCO FALABELLA S.A.',
    BANCO_FINANDINA_SA: 'BANCO FINANDINA S.A.',
    BANCO_GNB_SUDAMERIS: 'BANCO GNB SUDAMERIS',
    BANCO_JP_MORGAN_COLOMBIA_SA: 'BANCO J.P. MORGAN COLOMBIA S.A.',
    BANCOLDEX_SA: 'BANCOLDEX S.A.',
    BANCO_MULTIBANK_SA: 'BANCO MULTIBANK S.A.',
    BANCO_MUNDO_MUJER: 'BANCO MUNDO MUJER',
    BANCOOMEVA: 'BANCOOMEVA',
    BANCO_PICHINCHA: 'BANCO PICHINCHA',
    BANCO_POPULAR: 'BANCO POPULAR',
    BANCO_PROCREDIT_COL: 'BANCO PROCREDIT COL',
    BANCO_SANTANDER: 'BANCO SANTANDER',
    BANCO_SERFINANZA: 'BANCO SERFINANZA',
    BANCO_UNION_SA: 'BANCO UNION S.A',
    BANCO_W_SA: 'BANCO W S.A.',
    BBVA_COLOMBIA: 'BBVA COLOMBIA',
    BOLD_CF: 'BOLD CF',
    CITIBANK: 'CITIBANK',
    COINK: 'COINK',
    COLTEFINANCIERA_SA: 'COLTEFINANCIERA S.A.',
    CONFIAR: 'CONFIAR',
    COOPERATIVA_FINANCIERA_DE_ANTIOQUIA: 'COOPERATIVA FINANCIERA DE ANTIOQUIA',
    COTRAFA_COOPERATIVA_FINANCIERA: 'COTRAFA COOPERATIVA FINANCIERA',
    DAVIPLATA: 'DAVIPLATA',
    DING_TECNIPAGOS_SA: 'DING TECNIPAGOS S.A.',
    FINANCIERA_JURISCOOP: 'FINANCIERA JURISCOOP',
    GLOBAL_66: 'GLOBAL 66',
    HSBC: 'HSBC',
    IRIS: 'IRIS',
    ITAU_ANTES_CORPBANCA: 'ITAU ANTES CORPBANCA',
    JFK_COOPERATIVA_FINANCIERA: 'JFK COOPERATIVA FINANCIERA',
    LULO_BANK_SA: 'LULO BANK S.A.',
    MIBANCO_SA: 'MIBANCO S.A.',
    MOVII: 'MOVII',
    PIBANK: 'PIBANK',
    POWWI: 'POWWI',
    RAPPI_PAY: 'RAPPIPAY',
    SCOTIABANK_COLPATRIA_SA: 'SCOTIABANK COLPATRIA S.A.',
    UALA: 'UALA',
};

export const VITA_CHL_BANKS_ALLOWED = {
    BANCOESTADO: 'BANCOESTADO',
    BANCO_SANTANDER: 'BANCO SANTANDER',
    BANCO_FALABELLA: 'BANCO FALABELLA',
    BANCO_BBVA: 'BANCO BBVA',
    BANCO_BTGPACTUAL: 'BANCO BTGPACTUAL',
    BANCO_CENTRAL_DE_CHILE: 'BANCO CENTRAL DE CHILE',
    BANCO_CONOSUR: 'BANCO CONOSUR',
    BANCO_CONSORCIO: 'BANCO CONSORCIO',
    BANCO_DE_CHILE: 'BANCO DE CHILE',
    BANCO_DE_LA_NACION_ARGENTINA: 'BANCO DE LA NACION ARGENTINA',
    BANCO_DEL_DESARROLLO: 'BANCO DEL DESARROLLO',
    BANCO_DO_BRASIL_SA: 'BANCO DO BRASIL S.A.',
    BANCO_INTERNACIONAL: 'BANCO INTERNACIONAL',
    BANCO_ITAU: 'BANCO ITAU',
    BANCO_PARIS: 'BANCO PARIS',
    BANCO_PENTA: 'BANCO PENTA',
    BANCO_RIPLEY: 'BANCO RIPLEY',
    BANCO_SECURITY: 'BANCO SECURITY',
    BCI: 'BCI',
    BICE: 'BICE',
    CCLV_CONTRAPARTE_CENTRAL_SA: 'CCLV. CONTRAPARTE CENTRAL S.A.',
    COOPEUCH: 'COOPEUCH',
    COPEC_PAY: 'COPEC PAY',
    CORPBANCA: 'CORPBANCA',
    DEUTSCHE_BANK: 'DEUTSCHE BANK',
    DRESDNER_BANK_LETEINAMERIKA: 'DRESDNER BANK LETEINAMERIKA',
    GLOBAL_CARD_SA: 'GLOBAL CARD S.A.',
    HSBC_BANK_CHILE: 'HSBC BANK CHILE',
    JP_MORGAN: 'JP MORGAN',
    LA_POLAR_PREPAGO: 'LA POLAR PREPAGO',
    LOS_ANDRES_TARJETAS_DE_PREPAGO: 'LOS ANDRES TARJETAS DE PREPAGO',
    MACH: 'MACH',
    MERCADO_PAGO: 'MERCADO PAGO',
    PREPAGO_LOS_HEROES: 'PREPAGO LOS HÉROES',
    RABOBANK: 'RABOBANK',
    SCOTIABANK_CHILE: 'SCOTIABANK CHILE',
    TAPP_CAJA_LOS_ANDES: 'TAPP CAJA LOS ANDES',
    TENPO_PREPAGO: 'TENPO PREPAGO',
    THE_BANK_OF_TOKYO_MITSUBISHI_UFJ: 'THE BANK OF TOKYO MITSUBISHI UFJ',
    THE_ROYAL_BANK_OF_SCOTLAND: 'THE ROYAL BANK OF SCOTLAND',
    TRANSBANK: 'TRANSBANK',
};

export const VITA_COL_ACCOUNT_TYPE_ALLOWED = {
  CURRENT_ACCOUNT: 'COR',
  SAVINGS_ACCOUNT: 'AHO'
};

export const VITA_CHL_ACCOUNT_TYPE_ALLOWED = {
  CURRENT_ACCOUNT: 'COR',
  SAVINGS_ACCOUNT: 'AHO',
  VISTA_ACCOUNT: 'VISTA'
};

export const VITA_BRA_ACCOUNT_TYPE_ALLOWED = {
  CNPJ: 'cnpj',
  EMAIL: 'email',
  PHONE_NUMER: 'phone',
  RANDOM_KEY: 'key',
  CPF: 'cpf'
};

export const bankInfoSchema = {
    name: {
        type: 'string',
        required: 'mandatory',
        allow: [],
        conditions: [
            {
                when: 'sendingMethod',
                is: ['BANK_TRANSFER_PER-PEN', 'BANK_TRANSFER_PER-USD'],
                then: {
                    type: 'string',
                    required: 'mandatory',
                    valid: Object.values(Banks),
                },
            },
            {
                when: 'sendingMethod',
                is: [...SENDING_METHOD_CORE.EUROPE],
                then: {
                    type: 'string',
                    required: 'mandatory',
                    customValidations: [
                        {
                            condition: '',
                            pattern: /^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$/, // BIC 8 u 11 caracteres
                            messages:
                                'Debe ingresar un código BIC válido para Europa (8 u 11 caracteres en mayúsculas, como AGRIFRPP)',
                        },
                    ],
                },
            },
            {
                when: 'sendingMethod',
                is: [...SENDING_METHOD_CORE.UNITED_KINGDOM],
                then: {
                    type: 'string',
                    required: 'mandatory',
                    customValidations: [
                        {
                            condition: '',
                            pattern: /^\d{6}$/, // BIC 8 u 11 caracteres
                            messages: 'El Sort Code (SCAN) debe tener exactamente 6 dígitos numéricos.',
                        },
                    ],
                },
            },
            {
                when: 'sendingMethod',
                is: ['BANK_TRANSFER_VEN-VES', 'WALLET_VEN-VES'],
                then: {
                    type: 'string',
                    required: 'mandatory',
                    valid: Object.values(InsularBanks),
                },
            },
            {
                when: 'sendingMethod',
                is: 'BANK_TRANSFER_COL-COP',
                then: {
                    type: 'string',
                    required: 'mandatory',
                    valid: Object.values(VITA_COL_BANKS_ALLOWED),
                    message:
                        'El nombre del banco es incorrecto. Los valores permitidos son: ' +
                        Object.values(VITA_COL_BANKS_ALLOWED).join(', '),
                },
            },
            {
                when: 'sendingMethod',
                is: 'BANK_TRANSFER_CHL-CLP',
                then: {
                    type: 'string',
                    required: 'mandatory',
                    valid: Object.values(VITA_CHL_BANKS_ALLOWED),
                    message:
                        'El nombre del banco es incorrecto. Los valores permitidos son: ' +
                        Object.values(VITA_CHL_BANKS_ALLOWED).join(', '),
                },
            },
            {
                when: 'sendingMethod',
                is: ['B89_CARD_PER-PEN', 'B89_CARD_PER-USD'],
                then: {
                    type: 'string',
                    required: 'optional',
                    allow: [null, ''],
                },
            },
        ],
    },
    city: {
        type: 'string',
        required: 'mandatory',
        conditions: [
            {
                when: 'sendingMethod',
                is: [
                    'BANK_TRANSFER_PER-PEN',
                    'BANK_TRANSFER_PER-USD',
                    'BANK_TRANSFER_COL-COP',
                    'BANK_TRANSFER_CHL-CLP',
                    'BANK_TRANSFER_FRA_EUR',
                    'BANK_TRANSFER_GBR-GBP',
                    'BANK_TRANSFER_BRA-BRL',
                    'BANK_TRANSFER_VEN-VES',
                    'WALLET_VEN-VES',
                    'WALLET_PER-PEN',
                    'B89_CARD_PER-USD',
                    'B89_CARD_PER-PEN',
                    ...SENDING_METHOD_CORE.EUROPE,
                    ...SENDING_METHOD_CORE.UNITED_KINGDOM,
                ],
                then: {
                    type: 'string',
                    required: 'optional',
                    allow: [null, ''],
                },
            },
        ],
    },
    accountType: {
        type: 'string',
        required: 'mandatory',
        conditions: [
            {
                when: 'sendingMethod',
                is: 'BANK_TRANSFER_COL-COP',
                then: {
                    is: 'string',
                    required: 'mandatory',
                    valid: Object.values(VITA_COL_ACCOUNT_TYPE_ALLOWED)
                }
            },
            {
                when: 'sendingMethod',
                is: 'BANK_TRANSFER_CHL-CLP',
                then: {
                    is: 'string',
                    required: 'mandatory',
                    valid: Object.values(VITA_CHL_ACCOUNT_TYPE_ALLOWED)
                }
            },
            {
                when: 'sendingMethod',
                is: [...SENDING_METHOD_CORE.EUROPE, ...SENDING_METHOD_CORE.UNITED_KINGDOM],
                then: {
                    is: 'string',
                    required: 'optional',
                    allow: [null, '']
                }
            },
            {
                when: 'sendingMethod',
                is: 'BANK_TRANSFER_BRA-BRL',
                then: {
                    is: 'string',
                    required: 'mandatory',
                    valid: Object.values(VITA_BRA_ACCOUNT_TYPE_ALLOWED)
                }
            }
        ]
    },
    interbankAccountNumber: {
        type: 'string',
        required: 'optional'
    },
    bankBranch: {
        type: 'string',
        required: 'optional',
    },
    payoutBranch: {
        type: 'string',
        required: 'optional',
        conditions: [
            {
                when: 'sendingMethod',
                is: 'WALLET_BRA-BRL',
                then: {
                    is: 'string',
                    required: 'optional',
                    valid: ['551001', '554065']
                }
            }
        ]
    },
    cardReference: {
        type: 'string',
        required: 'optional',
        allow: [null, ''],
        conditions: [
            {
                when: 'sendingMethod',
                is: ['B89_CARD_PER-PEN', 'B89_CARD_PER-USD'],
                then: {
                    type: 'string',
                    required: 'mandatory',
                    customValidation: [
                        {
                            pattern: /^[A-Z0-9]{3}-[A-Z0-9]{3}-[A-Z0-9]{3}$/,
                            messages: '"cardReference" must be in the format A99-X99-9C9',
                        }
                    ]
                }
            }
        ]
    }
};
