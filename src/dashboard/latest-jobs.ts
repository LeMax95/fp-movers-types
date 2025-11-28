import { z } from "zod";
import { JobStatusEnum } from "../job/job-core";

export const LatestJobItemSchema = z.object({
  id: z.string(),
  client: z.string(),
  createdAt: z.string(),
  status: JobStatusEnum,
  summary: z
    .object({
      totalPrice: z.number(),
    })
    .nullable()
    .optional(),
});

export type LatestJobItem = z.infer<typeof LatestJobItemSchema>;
