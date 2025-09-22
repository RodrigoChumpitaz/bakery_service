import { seedSupplies } from "./seedSupply";

export function seedDatabase() {
    return Promise.all([
        seedSupplies()
    ]);
}