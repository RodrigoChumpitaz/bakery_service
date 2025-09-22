import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { GetAllResponse, supplyRepository, SupplyRepository } from "../../../repositories";
import { SupplyResult } from "../../../mappers";
import z from "zod";

type Request = { limit?: number; page?: number, priority?: string };
type Response = Result<GetAllResponse<SupplyResult>, UnexpectedError>

export const getSuppliesValidationSchema = z.object({
    limit: z.union([z.number(), z.string()]).optional().default(10),
    page: z.union([z.number(), z.string()]).optional().default(1),
    priority: z.string().optional(),
});

export class GetSuppliesAdapter implements IAdapter<Request, Response> {
    constructor(private readonly supplyRepository: SupplyRepository) {}
    async execute(request: Request): Promise<Response> {
        try {
            const limit = request.limit || 10;
            const page = request.page || 1;
            const priority = request.priority;
            const result = await this.supplyRepository.getAll({ limit, page, priority });
            return ok(result);
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const getSuppliesAdapter = new GetSuppliesAdapter(supplyRepository);
