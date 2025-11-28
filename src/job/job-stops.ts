import { z } from "zod";

export const StopSchema = z.object({
  address: z.string(),
  loading: z.boolean().optional(),
  unloading: z.boolean().optional()
});

export const StopsSchema = z.array(StopSchema);

export type JobStop = z.infer<typeof StopSchema>;
export type JobStops = z.infer<typeof StopsSchema>;
