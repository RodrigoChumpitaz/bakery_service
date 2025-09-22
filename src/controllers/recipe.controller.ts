import { Request, Response } from "express";
import { createRecipeAdapter, CreateRecipeBadRequestError, getRecipeAdapter, GetRecipeNotFoundError, getRecipesAdapter, GetRecipesError } from "./adapters";
import { response } from "inel_auth_library";
import { StatusCode } from "inel_auth_library/dist/src/types";

export class RecipeController {
    constructor() {
        this.getRecipes = this.getRecipes.bind(this);
    }

    async getRecipes(req: Request, res: Response) {
        const { limit, page } = req.query;
        const result = await getRecipesAdapter.execute({
            limit: limit ? Number(limit) : undefined,
            page: page ? Number(page) : undefined
        });
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case GetRecipesError:
                    return response(res, error.message, StatusCode.BAD_REQUEST, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.OK);

    }

    async createRecipe(req: Request, res: Response) {
        const result = await createRecipeAdapter.execute(req.body);
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case CreateRecipeBadRequestError:
                    return response(res, error.message, StatusCode.BAD_REQUEST, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.CREATED);
    }

    async getRecipe(req: Request, res: Response) {
        const { id } = req.params;
        const result = await getRecipeAdapter.execute({ id });
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case GetRecipeNotFoundError:
                    return response(res, error.message, StatusCode.NOT_FOUND, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.OK);
    }
}