import { Request, Response } from "express";
import { 
    createSupplyAdapter, 
    CreateSupplyBadRequestError,
    getSupplyAdapter,
    GetSupplyNotFoundError,
    getSuppliesAdapter,
    updateSupplyAdapter,
    UpdateSupplyBadRequestError,
    UpdateSupplyNotFoundError
} from "./adapters/supply";
import { response } from "inel_auth_library";
import { StatusCode } from "inel_auth_library/dist/src/types";

export class SupplyController {
    constructor(){
        this.createSupply = this.createSupply.bind(this);
        this.getSupply = this.getSupply.bind(this);
        this.getSupplies = this.getSupplies.bind(this);
        this.updateSupply = this.updateSupply.bind(this);
    }

    async createSupply(req: Request, res: Response) {
        const result = await createSupplyAdapter.execute(req.body);
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case CreateSupplyBadRequestError:
                    return response(res, error.message, StatusCode.BAD_REQUEST, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.CREATED);
    }

    async getSupply(req: Request, res: Response) {
        const result = await getSupplyAdapter.execute({ id: req.params.id });
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case GetSupplyNotFoundError:
                    return response(res, error.message, StatusCode.NOT_FOUND, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.OK);
    }

    async getSupplies(req: Request, res: Response) {
        const { limit, page } = req.query;
        const result = await getSuppliesAdapter.execute({ 
            limit: limit ? Number(limit) : undefined,
            page: page ? Number(page) : undefined,
            priority: req.query.priority ? String(req.query.priority) : undefined
        });
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.OK);
    }

    async updateSupply(req: Request, res: Response) {
        const result = await updateSupplyAdapter.execute({ id: req.params.id, ...req.body });
        if (result.isErr()) {
            const error = result.error;
            switch(error.constructor) {
                case UpdateSupplyBadRequestError:
                    return response(res, error.message, StatusCode.BAD_REQUEST, error.constructor.name)
                case UpdateSupplyNotFoundError:
                    return response(res, error.message, StatusCode.NOT_FOUND, error.constructor.name)
                default:
                    return response(res, error.message, StatusCode.INTERNAL_SERVER_ERROR, error.constructor.name)
            }
        }
        return response(res, result.value, StatusCode.OK);
    }
}