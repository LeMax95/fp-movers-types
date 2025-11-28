import { z } from "zod";

export const DashboardKpiMetricSchema = z.object({
  value: z.number(),       // current period
  prevValue: z.number(),   // previous period
  percent: z.number(),     // change in %
  sparkline: z.array(z.number()), // daily series
});

export type DashboardKpiMetric = z.infer<typeof DashboardKpiMetricSchema>;

export const DashboardKpisSchema = z.object({
  totalJobs: DashboardKpiMetricSchema,
  totalRevenue: DashboardKpiMetricSchema,
  extrasRevenue: DashboardKpiMetricSchema,
});

export type DashboardKpis = z.infer<typeof DashboardKpisSchema>;
