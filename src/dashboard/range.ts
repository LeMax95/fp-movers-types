import { z } from "zod";

export const DashboardRangeSchema = z.object({
  range: z.enum(["1m", "3m", "6m", "12m"]).default("1m"),
});

export type DashboardRange = z.infer<typeof DashboardRangeSchema>;
