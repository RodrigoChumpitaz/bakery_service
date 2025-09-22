import { err, ok, Result } from 'neverthrow';
import { recipeValidationOptionalSchema, recipeValidationSchema } from './recipe.validation';
import z from 'zod';

export interface IRecipeSupplieProps {
    id?: string;
    ingredient: string;
    quantity: number | string;
    unit: string;
}

export interface IRecipeProps {
    name: string;
    targetProduct: string;
    productionStage: string | null;
    supplies: IRecipeSupplieProps[];
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

export class Recipe {
    id: string;
    name: string;
    targetProduct: string;
    productionStage: string | null;
    supplies: IRecipeSupplieProps[];
    weighingCount: number;
    weighingWeight: number;
    startHour?: string;
    endHour?: string;
    operatorsCount: number;
    observations?: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(props: IRecipeProps) {
        Object.assign(this, props);
    }

    static create(props: IRecipeProps): Result<Recipe, string> {
        const { error } = recipeValidationSchema.safeParse(props);
        if (error) {
            const prettyError = z.prettifyError(error).replace(/\n/g, '').replace(/\s\s+/g, ' ');
            return err(prettyError);
        }
        return ok(new Recipe(props));
    }

    static buildRequest(props: Partial<IRecipeProps>): Result<Recipe, string> {
        const { error } = recipeValidationOptionalSchema.safeParse(props);
        if (error) {
            console.log('Error de validacion:::', JSON.stringify(error.issues));
            const recipeErrors = error.issues.map((issue) => issue.message).join('. ');
            return err(recipeErrors);
        }
        return ok(new Recipe(props as IRecipeProps));
    }
}
