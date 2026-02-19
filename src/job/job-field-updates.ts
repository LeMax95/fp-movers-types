import { z } from "zod";
import { JobSummarySchema } from "./job-summary";
import { ScopedSignaturesSchema } from "./job-signatures";
import { JobStatusEnum,JobNoticeSchema } from "./job-core";
import { StopsSchema } from "./job-stops";

export const FieldJobUpdateSchema = z.object({
  crew: z.array(z.string()).optional(),
  notes: z.string().optional(),
  notice: JobNoticeSchema.optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional(),
  stops: StopsSchema.optional(),
});
export type FieldJobUpdate = z.infer<typeof FieldJobUpdateSchema>;
