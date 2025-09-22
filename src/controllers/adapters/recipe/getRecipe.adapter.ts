import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { recipeRepository, RecipeRepository } from "../../../repositories";
import { RecipeResult } from "../../../mappers";

export class GetRecipeNotFoundError extends Error {
    constructor(message: string) {
        super(message);
    }
}

type Request = { id: string };
type Response = Result<RecipeResult, UnexpectedError | GetRecipeNotFoundError>

export class GetRecipeAdapter implements IAdapter<Request, Response> {
    constructor(private readonly recipeRepository: RecipeRepository) {}
    async execute(request: Request): Promise<Response> {
        try {
            const result = await this.recipeRepository.getById(request.id);
            if (!result) {
                return err(new GetRecipeNotFoundError(`Recipe with ID ${request.id} not found`));
            }
            return ok(result);
        } catch (error) {
            return err(new UnexpectedError(error));
        }
    }
}

export const getRecipeAdapter = new GetRecipeAdapter(recipeRepository);
