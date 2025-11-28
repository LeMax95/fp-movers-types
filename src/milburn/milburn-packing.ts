import { z } from "zod";

export const PackingMaterialRowSchema = z.object({
  item: z.string(),
  perItem: z.string(),
  packing: z.string(),
  unpacking: z.string(),
  qty: z.string(),
  total: z.string(),
});

export type PackingMaterialRow = z.infer<typeof PackingMaterialRowSchema>;
