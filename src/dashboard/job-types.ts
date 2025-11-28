import { z } from "zod";

export const JobTypeBreakdownItemSchema = z.object({
  label: z.string(),  // e.g. "Apartment", "Office", "Unspecified"
  count: z.number(),  // number of jobs with that moveType
});

export type JobTypeBreakdownItem = z.infer<
  typeof JobTypeBreakdownItemSchema
>;

export const JobTypeBreakdownSchema = z.array(JobTypeBreakdownItemSchema);

export type JobTypeBreakdown = z.infer<typeof JobTypeBreakdownSchema>;
