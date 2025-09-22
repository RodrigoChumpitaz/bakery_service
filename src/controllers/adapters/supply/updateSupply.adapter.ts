import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { ISupplyProps } from "../../../domain";
import { supplyRepository, SupplyRepository } from "../../../repositories";

export class UpdateSupplyNotFoundError extends Error {
    constructor(message: string) {
        super(message)
    }
}

export class UpdateSupplyBadRequestError extends Error {
    constructor(message: string) {
        super(message)
    }
}

type Request = { id: string } & Partial<ISupplyProps>;
type Response = Result<{ message: string }, UnexpectedError | UpdateSupplyNotFoundError | UpdateSupplyBadRequestError>

export class UpdateSupplyAdapter implements IAdapter<Request, Response> {
    constructor(private readonly supplyRepository: SupplyRepository) {}
    async execute(request: Request): Promise<Response> {
        try {
            const supplyById = await this.supplyRepository.getById(request.id);
            if (!supplyById) {
                return err(new UpdateSupplyNotFoundError(`Supply with ID ${request.id} not found`));
            }
            await this.supplyRepository.update(request.id, request);
            return ok({ message: `Supply with ID ${request.id} updated successfully` });
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const updateSupplyAdapter = new UpdateSupplyAdapter(supplyRepository);
