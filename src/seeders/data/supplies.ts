import { ISupplyDb } from "../../shared";

export const suppliesData: Partial<ISupplyDb>[] = [
    {
        _id: '68aac174cbf4911cfdc85f0a',
        name: 'Harina Preferida',
        category: 'Ingredientes',
        purchasePrice: 1250,
        unitPrice: 125,
        currentStock: 500,
        minStock: 200,
        unit: 'kg',
        availableUnits: ['kg', 'gr', 'sack'],
        conversions: {
            'gr': 0.001,
            'sack': 50
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac18644a08038b99f383c',
        name: 'Azúcar',
        category: 'Ingredientes',
        purchasePrice: 304,
        unitPrice: 152,
        currentStock: 100,
        minStock: 25,
        unit: 'kg',
        availableUnits: ['kg', 'gr', 'sack'],
        conversions: {
            'gr': 0.001,
            'sack': 50
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac19692fa4d7b5269d534',
        name: 'Sal',
        category: 'Ingredientes',
        purchasePrice: 30,
        unitPrice: 1.2,
        currentStock: 25,
        minStock: 5,
        unit: 'kg',
        availableUnits: ['kg', 'gr', 'bags'],
        conversions: {
            'gr': 0.001,
            'bags': 1
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac19f1f4ad38a79178890',
        name: 'Mejorador',
        category: 'Ingredientes',
        purchasePrice: 152,
        unitPrice: 38,
        currentStock: 20,
        minStock: 5,
        unit: 'kg',
        availableUnits: ['kg', 'gr', 'bags'],
        conversions: {
            'gr': 0.001,
            'bags': 5
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac1a70c5463139045f53f',
        name: 'Levadura',
        category: 'Ingredientes',
        purchasePrice: 356,
        unitPrice: 17.8,
        currentStock: 20,
        minStock: 4,
        unit: 'kg',
        availableUnits: ['kg', 'gr', 'bags', 'box'],
        conversions: {
            'gr': 0.001,
            'bags': 0.5,
            'box': 10
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac1af5ae9e2c6bf4d71eb',
        name: 'Manteca',
        category: 'Ingredientes',
        purchasePrice: 170,
        unitPrice: 85,
        currentStock: 2,
        minStock: 1,
        unit: 'box',
        availableUnits: ['kg', 'box'],
        conversions: {
            'box': 1
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac1b628291833d2957b8b',
        name: 'Aceite',
        category: 'Ingredientes',
        purchasePrice: 21,
        unitPrice: 7,
        currentStock: 3,
        minStock: 1,
        unit: 'l',
        availableUnits: ['l', 'box', 'bottle'],
        conversions: {},
        provider: 'Proveedor A',
    },
    {
        _id: '68aac1c8d7a1522b30eef59f',
        name: 'Harina Integral',
        category: 'Ingredientes',
        purchasePrice: 80,
        unitPrice: 40,
        currentStock: 50,
        minStock: 10,
        unit: 'kg',
        availableUnits: ['kg', 'sack', 'gr'],
        conversions: {
            'sack': 25,
            'gr': 0.001
        },
        provider: 'Proveedor A',
    },
    {
        _id: '68aac1cf518b337a0c6e8804',
        name: 'Leña',
        category: 'Ingredientes',
        purchasePrice: 72,
        unitPrice: 0,
        currentStock: 4,
        minStock: 2,
        unit: 'qq',
        availableUnits: [],
        conversions: {},
        provider: 'Proveedor A',
    }
]