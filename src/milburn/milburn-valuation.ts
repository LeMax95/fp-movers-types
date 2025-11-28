import { z } from "zod";

export const ValuationSchema = z.object({
  choices: z.array(z.string()).optional(),
  selectedOption: z.string().optional(),
  transportationRates: z.array(z.string()).optional(),
  maxRates: z.array(z.string()).optional(),
  storageRates: z.array(z.string()).optional(),
  actualCashPerLb: z.string().optional(),
  fullValuePerLb: z.string().optional(),
  declaredValue: z.string().optional(),
});

export type ValuationData = z.infer<typeof ValuationSchema>;
