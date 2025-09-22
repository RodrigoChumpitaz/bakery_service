import z from "zod";

export const supplyValidationSchema = z.object({
    name: z.string({ error: '"name" is required' }),
    description: z.string({ error: '"description" must be a string' }).max(500).optional().nullable(),
    category: z.string({ error: '"category" must be a string' }).optional().nullable(),
    purchasePrice: z.number({ error: '"purchasePrice" must be a number' }).min(0).default(0),
    currentStock: z.number({ error: '"currentStock" must be a number' }).min(0).default(0).optional(),
    minStock: z.number({ error: '"minStock" must be a number' }).min(0).default(0).optional(),
    unit: z.string({ error: '"unit" must be a string' }).optional().nullable().default('kg'),
    provider: z.string({ error: '"provider" must be a string' }).optional().nullable(),
    availableUnits: z.array(z.string()).optional().nullable(),
    conversions: z.record(z.string(), z.number()).optional().nullable(),
    unitPrice: z.number({ error: '"unitPrice" must be a number' }).min(0).default(0).optional()
}).strict();

export type SupplyValidationSchema = z.infer<typeof supplyValidationSchema>;