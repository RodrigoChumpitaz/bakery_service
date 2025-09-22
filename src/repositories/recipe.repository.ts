import { RecipeMap, RecipeResult } from '../mappers';
import { Recipe } from '../domain';
import { RecipeModel } from '../shared';
import { MainRepository } from './main.repository';

export interface GetRecipesFilters {
    limit: number;
    page: number;
}

export class RecipeRepository extends MainRepository<typeof RecipeModel> {
    async create(data: Recipe): Promise<RecipeResult> {
        try {
            const newRecipe = new this.db(data);
            const result = await newRecipe.save();
            return RecipeMap.toDomain(result);
        } catch (error) {
            throw error;
        }
    }
    async getById(id: string): Promise<RecipeResult | null> {
        try {
            const recipe = await this.db.findById(id);
            return recipe ? RecipeMap.toDomain(recipe) : null;
        } catch (error) {
            throw error;
        }
    }
    update(id: string, data: unknown): Promise<any> {
        throw new Error('Method not implemented.');
    }
    async getAll(filters?: GetRecipesFilters): Promise<any> {
        try {
            const { limit, page } = filters || { limit: 10, page: 1 };
            const totalRecords = await this.db.countDocuments();
            const totalPages = Math.ceil(totalRecords / limit);
            const data = await this.db
                .find()
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ createdAt: -1 });
            return {
                data: data.map(RecipeMap.toDomain),
                page,
                limit,
                totalPages,
                totalRecords,
            };
        } catch (error) {
            throw error;
        }
    }
}

export const recipeRepository = new RecipeRepository(RecipeModel);
