import { ISupplyProps, Supply } from "../../../domain";
import { IAdapter } from "../../../shared";
import { err, ok, Result } from "neverthrow";
import { UnexpectedError } from "inel_auth_library";
import { supplyRepository, SupplyRepository } from "../../../repositories";
import { SupplyResult } from "../../../mappers";

export class CreateSupplyBadRequestError extends Error {
    constructor(message: string) {
        super(message)
    }
}
type Request = ISupplyProps;
type Response = Result<SupplyResult, UnexpectedError | CreateSupplyBadRequestError>

export class CreateSupplyAdpater implements IAdapter<Request, Response> {
    constructor(private readonly supplyRepository: SupplyRepository){}
    async execute(request: ISupplyProps): Promise<Response> {
        try {
            const supplyOrError = Supply.create(request);
            if(supplyOrError.isErr()) {
                return err(new CreateSupplyBadRequestError(supplyOrError.error))
            }
            const result = await this.supplyRepository.create(supplyOrError.value);
            return ok(result);
        } catch (error) {
            return err(new UnexpectedError(error))
        }
    }
}

export const createSupplyAdapter = new CreateSupplyAdpater(supplyRepository);