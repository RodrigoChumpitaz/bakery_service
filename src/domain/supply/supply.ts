import { err, ok, Result } from "neverthrow";
import { supplyValidationSchema } from "./supply.validation";

export interface ISupplyProps {
    id: string;
    name: string;
    category?: string | null;
    purchasePrice: number | string;
    unitPrice?: number | string;
    currentStock: number | string;
    minStock: number | string;
    unit: string;
    provider?: string | null;
    availableUnits?: string[];
    conversions?: Record<string, number>;
}

export class Supply {
    id: string;
    name: string;
    category?: string | null;
    purchasePrice: number | string;
    unitPrice?: number | string;
    currentStock: number | string;
    minStock: number | string;
    unit: string;
    provider?: string | null;
    availableUnits?: string[];
    conversions?: Record<string, number>;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(props: ISupplyProps) {
        Object.assign(this, props);
    }

    static create(props: ISupplyProps): Result<Supply, string> {
        const { error } = supplyValidationSchema.safeParse(props);
        if (error) {
            const supplyErrors = error.issues.map(issue => issue.message).join('. ');
            return err(supplyErrors)
        }
        return ok(new Supply(props));
    }
}