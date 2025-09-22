import { IRecipeSupplieProps } from '../domain';
import { IRecipeDb } from '../shared';

export interface RecipeResult {
    id: string;
    name: string
    targetProduct: string;
    productionStage: string | null;
    supplies: IRecipeSupplieProps[];
    weighingCount: number | null;
    weighingWeight: {
        weight: number | string;
        unit: string;
    };
    startHour?: string;
    endHour?: string;
    operatorsCount: number | null;
    observations?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}

export class RecipeMap {
    static toDomain(recipeDb: IRecipeDb): RecipeResult {
        return {
            id: recipeDb._id.toString(),
            name: recipeDb.name,
            targetProduct: recipeDb.targetProduct,
            productionStage: recipeDb.productionStage || '',
            supplies: recipeDb.supplies.map(supply => ({
                id: supply.id,
                ingredient: supply.ingredient,
                quantity: supply.quantity,
                unit: supply.unit
            })),
            weighingCount: recipeDb.weighingCount,
            weighingWeight: recipeDb.weighingWeight,
            startHour: recipeDb.startHour || '',
            endHour: recipeDb.endHour || '',
            operatorsCount: recipeDb.operatorsCount,
            observations: recipeDb.observations || '',
            createdAt: recipeDb.createdAt,
            updatedAt: recipeDb.updatedAt,
        };
    }
}
