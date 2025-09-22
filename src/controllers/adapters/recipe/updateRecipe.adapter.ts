import { IRecipeProps, Recipe } from "../../../domain";
import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";

export class UpdateRecipeBadRequestError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class UpdateRecipeNotFoundError extends Error {
    constructor(message: string) {
        super(message)
    }
}

type Request = { id: string } & Partial<IRecipeProps>;
type Response = Result<Recipe, UnexpectedError | UpdateRecipeBadRequestError | UpdateRecipeNotFoundError>

export class UpdateRecipeAdapter implements IAdapter<Request, Response> {
    constructor(){}
    async execute(request: Request): Promise<Response> {
        try {
            const { id, ...updateData } = request;
            
            if (!id) {
                return err(new UpdateRecipeBadRequestError("Recipe ID is required"))
            }
            
            // Aquí verificarías si la receta existe en la base de datos
            // Por ahora simulamos que existe
            
            // Simulamos obtener la receta actual
            const currentRecipe = {
                name: "Pan Francés Original",
                targetProduct: "Pan Francés",
                productionStage: "Amasado",
                supplies: [
                    {
                        id: "1",
                        ingredient: "Harina",
                        quantity: 1000,
                        unit: "gr"
                    },
                    {
                        id: "2",
                        ingredient: "Azúcar",
                        quantity: 50,
                        unit: "gr"
                    }
                ],
                weighingCount: 2,
                weighingWeight: {
                    weight: 1050,
                    unit: "gr"
                },
                startHour: "08:00",
                endHour: "10:00",
                operatorsCount: 2,
                observations: "Receta original de pan francés"
            };
            
            // Merge de datos actuales con los nuevos
            const updatedRecipeData = { ...currentRecipe, ...updateData };
            
            const recipeOrError = Recipe.create(updatedRecipeData);
            if(recipeOrError.isErr()) {
                return err(new UpdateRecipeBadRequestError(recipeOrError.error))
            }
            
            // Simular asignación del ID que vendría de la base de datos
            recipeOrError.value.id = id;
            recipeOrError.value.updatedAt = new Date();
            
            return ok(recipeOrError.value);
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const updateRecipeAdapter = new UpdateRecipeAdapter();
