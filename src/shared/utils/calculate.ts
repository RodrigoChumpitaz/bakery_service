import { RecipeResult } from "../../mappers";

export const DOUGH_RATE = 94.5 / 55; // 1.72 redondeando // de 55kg de harina salen 94.5kg de masa en un aprox
export const BREADS_PER_WEIGHING = 60;
export const unitPricePerPen = 0.20 // 5 panes es 1 sol
export const wholesalePricePerPen = 0.18 // precio al por mayor por unidad

// calcular el total de masa a partir de la harina
export const calculateTotalDough = (flourKg: number): number => {
    return flourKg * DOUGH_RATE;
}

// calcula el numero de pesadas a partir de la masa total y el peso por pesada
export const calculateWeighingsCount = (totalDoughKg: number, weighingWeightKg: number): number => {
    return totalDoughKg / weighingWeightKg;
}

// calcula el total de panes a partir del número de pesadas
export const calculateBreadsFromWeighings = (totalWeight: number): number => {
    const lossMargin = 0.01; // margen de perdida aprox
    const total = Math.round(totalWeight * BREADS_PER_WEIGHING)
    return Math.round(total - (total * lossMargin)); // 1% margen de perdida aprox
}

// Panes por kg de harina (para un peso de pesada específico)
export const getBreadsPerKgFlour = (weighingWeightKg: number): number => {
    return Math.round(((DOUGH_RATE / weighingWeightKg) * BREADS_PER_WEIGHING));
}

// calcula el total de panes directamente a partir de la harina y el peso por pesada
export const getBreadsPerKgFlourFromData  = (flourKg: number, totalBreads: number) => {
    return Math.round(totalBreads / flourKg).toString();
}

// calcular panes directamente desde harina y peso por pesada
export const calculateBreadsFromFlour = (flourKg: number, weighingWeightKg: number): number => {
    const totalDough = calculateTotalDough(flourKg);
    const weighingsCount = calculateWeighingsCount(totalDough, weighingWeightKg);
    return calculateBreadsFromWeighings(weighingsCount);
}

export const calculateKgFromSupplies = ({ targetSupply, supplies }: { targetSupply: string, supplies: RecipeResult['supplies'] }): number => {
    const supply = supplies.find(s => s.ingredient.toLowerCase().includes(targetSupply));
    if (!supply) {
        return 0;
    }
    let result = 0;
    const unit = supply.unit.toLowerCase();
    switch (unit) {
        case 'kg':
            result = Number(supply.quantity);
            break;
        case 'gr':
        case 'g':
            result = Number(supply.quantity) / 1000;
            break;
        default:
            result = 0;
    }
    return result;
}

export const calculateWeighingKgFromData = (weighingData: RecipeResult['weighingWeight']): number => {
    const unit = weighingData.unit.toLowerCase();
    switch (unit) {
        case 'kg':
            return Number(weighingData.weight);
        case 'gr':
        case 'g':
            return Number(weighingData.weight) / 1000;
        default:
            return 0;
    }
}

export const calculateGainFromRecipe = (totalBreads: number, wholesale: boolean = false): number => {
    const unitPrice = wholesale ? wholesalePricePerPen : unitPricePerPen;
    return totalBreads * unitPrice;
}

export const calculateMixedGain = (
  totalBreads: number,
  wholesaleBreads: number // Cantidad vendida al por mayor
): number => {
  const retailBreads = totalBreads - wholesaleBreads;
  return (retailBreads * unitPricePerPen) + (wholesaleBreads * wholesalePricePerPen);
};