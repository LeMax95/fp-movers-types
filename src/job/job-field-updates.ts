import { z } from "zod";
import { JobSummarySchema } from "./job-summary";
import { ScopedSignaturesSchema } from "./job-signatures";
import { JobStatusEnum } from "./job-core";


export const FieldJobUpdateSchema = z.object({
  crew: z.array(z.string()).optional(),
  notes: z.string().optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional(),
});
export type FieldJobUpdate = z.infer<typeof FieldJobUpdateSchema>;
