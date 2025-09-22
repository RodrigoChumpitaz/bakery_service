export interface BaseEntity {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ISupplyDb extends BaseEntity {
    name: string;
    category?: string | null;
    purchasePrice: number | string;
    unitPrice?: number | string;
    currentStock: number | string;
    minStock: number | string;
    unit: string;
    availableUnits?: string[];
    conversions?: Record<string, number>;
    priority: string;
    provider?: string;
}

export interface IRecipeDb extends BaseEntity {
    name: string;
    targetProduct: string;
    productionStage?: string | null;
    supplies: {
        id: string;
        ingredient: string;
        quantity: number | string;
        unit: string;
    }[];
    weighingCount: number;
    weighingWeight: {
        weight: number;
        unit: string;
    };
    startHour?: string;
    endHour?: string;
    operatorsCount: number;
    observations?: string;
}