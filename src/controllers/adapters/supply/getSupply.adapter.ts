import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { supplyRepository, SupplyRepository } from "../../../repositories";
import { SupplyResult } from "../../../mappers";

export class GetSupplyNotFoundError extends Error {
    constructor(message: string) {
        super(message)
    }
}

type Request = { id: string };
type Response = Result<SupplyResult, UnexpectedError | GetSupplyNotFoundError>

export class GetSupplyAdapter implements IAdapter<Request, Response> {
    constructor(private readonly supplyRepository: SupplyRepository) {}
    async execute(request: Request): Promise<Response> {
        try {
            const result = await this.supplyRepository.getById(request.id);
            if (!result) {
                return err(new GetSupplyNotFoundError(`Supply with ID ${request.id} not found`));
            }
            return ok(result);
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const getSupplyAdapter = new GetSupplyAdapter(supplyRepository);
