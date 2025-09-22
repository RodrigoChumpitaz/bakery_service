import { ISupplyProps, Supply } from '../../../domain';
import { calculateBreadsFromWeighings, calculateGainFromRecipe, calculateKgFromSupplies, calculateMixedGain, calculateTotalDough, calculateWeighingKgFromData, calculateWeighingsCount, getBreadsPerKgFlour, IAdapter } from '../../../shared';
import { err, ok, Result } from 'neverthrow';
import { UnexpectedError } from 'inel_auth_library';
import { RecipeResult } from '../../../mappers';
import { IRecipeProps, Recipe } from '../../../domain';
import { recipeRepository, RecipeRepository } from '../../../repositories';

export class CreateRecipeBadRequestError extends Error {
    constructor(message: string) {
        super(message);
    }
}
type Request = IRecipeProps;
type Response = Result<
RecipeResult & {
    breadWeightKgPerUnit: number;
    totalDough: number;
    totalWeighingsCount: number;
    totalBreadsPerWeighing: number;
    breadsPerKgWeighing: number;
    gainRetailPerTotalBreads: number;
    gainWholesalePerTotalBreads: number;
}, UnexpectedError | CreateRecipeBadRequestError>;

export class CreateRecipeAdpater implements IAdapter<Request, Response> {
    constructor(private readonly recipeRepository: RecipeRepository) {}
    // private calculateExactValueFromData(flourKg: number, )
    async execute(request: IRecipeProps): Promise<Response> {
        try {
            const recipeOrError = Recipe.create(request);
            if (recipeOrError.isErr()) {
                return err(new CreateRecipeBadRequestError(recipeOrError.error));
            }
            const result = await this.recipeRepository.create(recipeOrError.value);
            const flourKg = calculateKgFromSupplies({ targetSupply: 'harina', supplies: result.supplies })
            console.log('Kg de harina:::', flourKg);
            const weighingKg = calculateWeighingKgFromData(result.weighingWeight);
            console.log('Kg por pesada:::', weighingKg);

            // peso del pan por unidad
            const breadWeightKgPerUnit = weighingKg / 60; // 60 panes por pesada
            // total de masa a partir de la harina
            const totalDough = calculateTotalDough(flourKg);
            // total de pesadas a partir de la masa total y el peso por pesada
            const totalWeighingsCount = calculateWeighingsCount(totalDough, weighingKg);
            // total de panes a partir del número de pesadas
            const totalBreadsPerWeighing = calculateBreadsFromWeighings(totalWeighingsCount || result.weighingCount || 1);
            // panes por kg de harina (para un peso de pesada específico)
            const breadsPerKgWeighing = getBreadsPerKgFlour(weighingKg);
            const gainRetailPerTotalBreads = calculateGainFromRecipe(totalBreadsPerWeighing);
            // ganancia al por mayor (10% de descuento) considerando la mitad de panes vendidos al por mayor
            const gainWholesalePerTotalBreads = calculateMixedGain(totalBreadsPerWeighing, totalBreadsPerWeighing / 2);
            const response = {
                ...result,
                breadWeightKgPerUnit,
                totalDough,
                totalWeighingsCount,
                totalBreadsPerWeighing,
                breadsPerKgWeighing,
                gainRetailPerTotalBreads,
                gainWholesalePerTotalBreads
            }
            return ok(response);
        } catch (error) {
            return err(new UnexpectedError(error));
        }
    }
}

export const createRecipeAdapter = new CreateRecipeAdpater(recipeRepository);
