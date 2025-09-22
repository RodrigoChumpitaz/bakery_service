export interface IAdapter<Request, Response> {
    execute(request: Request): Promise<Response>;
}