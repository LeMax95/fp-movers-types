import { z } from "zod";

export const ReleaseRowSchema = z.object({
  item: z.string().optional().default(""),
  number: z.string().optional().default(""),
  reason: z.string().optional().default(""),
});
export type ReleaseRow = z.infer<typeof ReleaseRowSchema>;
