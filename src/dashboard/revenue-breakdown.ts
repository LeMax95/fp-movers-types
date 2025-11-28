import { z } from "zod";

export const RevenueBreakdownSchema = z.object({
  laborTotal: z.number(),   // sum of laborTotal
  extrasTotal: z.number(),  // sum of extrasTotal
  tipsTotal: z.number(),    // sum of tip
});

export type RevenueBreakdown = z.infer<typeof RevenueBreakdownSchema>;
