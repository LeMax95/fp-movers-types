import { z } from "zod";

export const DamageRowSchema = z.object({
  item: z.string(),
  description: z.string(),
});

export type DamageRow = z.infer<typeof DamageRowSchema>;
