import z from "zod";

export const recipeValidationSchema = z.object({
    name: z.string(),
    targetProduct: z.string(),
    productionStage: z.string().nullable(),
    supplies: z.array(z.object({
        id: z.string().optional(),
        ingredient: z.string(),
        quantity: z.union([z.number(), z.string()]),
        unit: z.string(),
    })),
    weighingCount: z.number().nullable().optional(),
    weighingWeight: z.object({
        weight: z.union([z.number(), z.string()]),
        unit: z.string()
    }),
    startHour: z.string().optional(),
    endHour: z.string().optional(),
    operatorsCount: z.number().nullable().optional(),
    observations: z.string().optional(),
});

export const recipeValidationOptionalSchema = recipeValidationSchema.partial();

export type RecipeValidationSchema = z.infer<typeof recipeValidationSchema>;