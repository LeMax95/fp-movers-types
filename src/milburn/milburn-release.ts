import { z } from "zod";

export const ReleaseRowSchema = z.object({
  item: z.string(),
  number: z.string(),
  reason: z.string(),
});
export type ReleaseRow = z.infer<typeof ReleaseRowSchema>;
