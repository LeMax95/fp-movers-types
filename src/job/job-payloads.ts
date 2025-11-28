import { z } from "zod";
import { JobCoreSchema } from "./job-core";
import { StopsSchema } from "./job-stops";
import { JobContractsSchema } from "./job-contracts";
import { JobSummarySchema } from "./job-summary";

export const CreateJobPayloadSchema = z.object({
  job: JobCoreSchema,
  stops: StopsSchema,
  contracts: JobContractsSchema,
  summary: JobSummarySchema.optional()
});

export type CreateJobPayload = z.infer<typeof CreateJobPayloadSchema>;
