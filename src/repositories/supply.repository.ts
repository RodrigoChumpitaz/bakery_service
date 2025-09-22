import { SupplyModel } from "../shared";
import { GetAllResponse, MainRepository } from "./main.repository";
import { SupplyMap, SupplyResult } from "../mappers";
import { ISupplyProps } from "../domain";

export interface GetSuppliesFilters {
    limit: number;
    page: number;
    priority?: string;
}

export class SupplyRepository extends MainRepository<typeof SupplyModel> {
    async getAll(filters?: GetSuppliesFilters): Promise<GetAllResponse<SupplyResult>> {
        try {
            const { limit, page, priority } = filters || { limit: 10, page: 1 };
            const query: any = {};
            if (priority) {
                query.priority = priority;
            }
            const totalRecords = await this.db.countDocuments(query);
            const totalPages = Math.ceil(totalRecords / limit);
            const data = await this.db.find(query)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort({ createdAt: -1 });
            return {
                data: data.map(SupplyMap.toDomain),
                page,
                limit,
                totalPages,
                totalRecords
            }
        } catch (error) {
            throw error;
        }
    }
    async create(data: ISupplyProps): Promise<SupplyResult> {
        try {
            const newSupply = new this.db(data);
            const result = await newSupply.save();
            return SupplyMap.toDomain(result);
        } catch (error) {
            throw error;
        }
    }
    async getById(id: string): Promise<SupplyResult | null> {
        try {
            const supply = await this.db.findById(id);
            return supply ? SupplyMap.toDomain(supply) : null;
        } catch (error) {
            throw error;
        }
    }
    async update(id: string, data: Partial<ISupplyProps>): Promise<void> {
        try {
            await this.db.findByIdAndUpdate(id, data, { new: true });
        } catch (error) {
            throw error;
        }
    }
}

export const supplyRepository = new SupplyRepository(SupplyModel);