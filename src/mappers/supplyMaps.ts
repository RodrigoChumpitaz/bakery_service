import { ISupplyDb } from '../shared';

export interface SupplyResult {
    id: string;
    name: string;
    category: string | null;
    purchasePrice: number | string;
    currentStock: number | string;
    minStock: number | string;
    unit: string;
    availableUnits?: string[] | null;
    provider?: string | null;
    priority: string;
    createdAt: Date;
    updatedAt: Date;
}

export class SupplyMap {
    static toDomain(supplyDb: ISupplyDb): SupplyResult {
        return {
            id: supplyDb._id.toString(),
            name: supplyDb.name,
            category: supplyDb.category || '',
            purchasePrice: supplyDb.purchasePrice,
            currentStock: supplyDb.currentStock,
            minStock: supplyDb.minStock,
            provider: supplyDb.provider,
            unit: supplyDb.unit,
            availableUnits: supplyDb.availableUnits || [],
            priority: supplyDb.priority,
            createdAt: supplyDb.createdAt,
            updatedAt: supplyDb.updatedAt,
        };
    }
}
