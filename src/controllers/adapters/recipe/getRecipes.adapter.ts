import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { GetAllResponse, recipeRepository, RecipeRepository } from "../../../repositories";
import { RecipeResult } from "../../../mappers";
import z from "zod";

export class GetRecipesError extends Error {
    constructor(message: string) {
        super(message)
    }
}

type Request = { limit?: number; page?: number };
type Response = Result<GetAllResponse<RecipeResult>, UnexpectedError | GetRecipesError>

export const getRecipesValidationSchema = z.object({
    limit: z.number().optional().default(10),
    page: z.number().optional().default(1)
});

export class GetRecipesAdapter implements IAdapter<Request, Response> {
    constructor(private readonly recipeRepository: RecipeRepository) {}
    async execute(request: Request): Promise<Response> {
        try {
            const limit = request.limit || 10;
            const page = request.page || 1;
            const result = await this.recipeRepository.getAll({ limit, page });
            return ok(result);
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const getRecipesAdapter = new GetRecipesAdapter(recipeRepository);
