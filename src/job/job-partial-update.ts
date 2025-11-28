// shared/job-partial-update.ts
import { z } from "zod";
import { JobCoreSchema } from "./job-core";
import { StopsSchema } from "./job-stops";

export const JobPartialUpdateSchema = z.object({
  job: JobCoreSchema.partial(),
  stops: StopsSchema.optional(),
});

export type JobPartialUpdate = z.infer<typeof JobPartialUpdateSchema>;
