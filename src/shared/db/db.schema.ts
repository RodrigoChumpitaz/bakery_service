import mongoose, { model, Schema } from "mongoose";
import { IRecipeDb, ISupplyDb } from "./models";

mongoose.plugin((schema) => {
    schema.set('timestamps', true)
    schema.set('versionKey', false)
});

const supplyDbSchema = new Schema<ISupplyDb>({
    category: { type: String, default: null },
    name: { type: String, required: true },
    minStock: { type: Schema.Types.Mixed, default: 0 },
    purchasePrice: { type: Schema.Types.Mixed },
    currentStock: { type: Schema.Types.Mixed },
    unit: { type: String },
    provider: { type: String, default: null },
    availableUnits: { type: [String], default: [] },
    conversions: { type: Map, of: Number, default: {} },
    unitPrice: { type: Schema.Types.Mixed },
    priority: { type: String, default: 'principal' }
});

const recipeDbSchema = new Schema<IRecipeDb>({
    name: { type: String, required: true },
    targetProduct: { type: String, required: true },
    productionStage: { type: String, default: null },
    supplies: [{
        id: { type: String },
        ingredient: { type: String },
        quantity: { type: Schema.Types.Mixed },
        unit: { type: String }
    }],
    weighingCount: { type: Number },
    weighingWeight: {
        weight: { type: Number },
        unit: { type: String }
    },
    startHour: { type: String, default: null },
    endHour: { type: String, default: null },
    operatorsCount: { type: Number },
    observations: { type: String, default: null }
})

export const SupplyModel = model<ISupplyDb>('Supply', supplyDbSchema, 'supply');
export const RecipeModel = model<IRecipeDb>('Recipe', recipeDbSchema, 'recipe');