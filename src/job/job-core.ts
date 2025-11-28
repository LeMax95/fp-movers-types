import { z } from "zod";
export const JobStatusEnum = z.enum([
  "draft",
  "scheduled",
  "in_progress",
  "completed",
  "cancelled",
]);
export const JobCoreSchema = z.object({
  id: z.string(),
  client: z.string(),

  phone: z.string().optional(),
  email: z.string().optional(),
  status: JobStatusEnum,
  foremanId: z.string().nullable().optional(),


  moveDate: z.string(),
  moveTime: z.string().nullable().optional(),
  reference: z.string().nullable().optional(),

  from: z.string(),
  to: z.string(),

  truckCount: z.number(),
  crew: z.array(z.string()).optional(),
  notes: z.string().nullable().optional(),

  // Extra optional FE fields
  volume: z.string().optional(),
  moveType: z.string().optional(),
  distance: z.string().optional(),
  rate: z.string().optional(),
  minimum: z.string().optional(),
  gasFee: z.string().optional(),

  // Required
  contractVersion: z.number(),

  // NEW — correct Zod syntax
  packageId: z.number().nullable().optional(),
});

export type JobCore = z.infer<typeof JobCoreSchema>;
