import { SupplyModel } from "../shared";
import { suppliesData } from "./data/supplies";

export async function seedSupplies() {
    try {
        const suppliesToSave = suppliesData.forEach(async (supply) => {
            const supplyById = await SupplyModel.findById(supply._id);
            if (supplyById) {
                return;
            }
            await SupplyModel.create(supply);
        });
        await Promise.all([suppliesToSave]);
        return;
    } catch (error) {
        console.log('Error seeding supplies:', error);
    }
}