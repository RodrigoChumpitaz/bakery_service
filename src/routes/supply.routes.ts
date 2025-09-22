import { Router } from "express";
import { getSuppliesValidationSchema, SupplyController } from "../controllers";
import { validateRequest } from "../shared";

class SupplyRoutes {
    route: Router
    constructor(private readonly supplyController: SupplyController){
        this.route = Router();
        this.routes();
    }

    routes() {
        this.route.route("/supplies")
            .get(validateRequest(getSuppliesValidationSchema), this.supplyController.getSupplies)
            .post(this.supplyController.createSupply)
            
        this.route.route("/supplies/:id")
            .get(this.supplyController.getSupply)
            .patch(this.supplyController.updateSupply)
    }
}

export default new SupplyRoutes(new SupplyController()).route;