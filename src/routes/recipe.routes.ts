import { Router } from "express";
import { RecipeController } from "../controllers";

class RecipeRoutes {
    route: Router
    constructor(private readonly recipeController: RecipeController){
        this.route = Router();
        this.routes();
    }

    routes() {
        this.route.route("/recipes")
            .get(this.recipeController.getRecipes)
            .post(this.recipeController.createRecipe)
            
        this.route.route("/recipes/:id")
            .get(this.recipeController.getRecipe)
            // .patch(this.recipeController.updateRecipe)
    }
}

export default new RecipeRoutes(new RecipeController()).route;