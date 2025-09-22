export interface GetAllResponse<T> {
    data: T[];
    page: number;
    limit: number;
    totalRecords: number;
    totalPages: number;
}

export abstract class MainRepository<DbInstance> {
    db: DbInstance;
    constructor(dbInstance: DbInstance) {
        this.db = dbInstance;
    }
    abstract create(data: unknown): Promise<any>;
    abstract getById(id: string): Promise<any>;
    abstract update(id: string, data: unknown): Promise<any>;
    abstract getAll(filters?: unknown): Promise<any>;
}
