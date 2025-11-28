import { z } from "zod";
import { JobStatusEnum } from "../job/job-core";

export const JobsByStatusItemSchema = z.object({
  status: JobStatusEnum,
  count: z.number(),
});

export type JobsByStatusItem = z.infer<typeof JobsByStatusItemSchema>;
