import { z } from "zod";

export const MilburnMetaSchema = z.object({
  orderDate: z.string().optional(),
  moveDate: z.string().optional(),
  packDate: z.string().optional(),
  delDate: z.string().optional(),
  takenBy: z.string().optional(),
  bookletDate: z.string().optional(),
  receivedPayment: z.boolean().optional(),
  reference: z.string().optional(),
  client: z.string().optional()
});

export type MilburnMeta = z.infer<typeof MilburnMetaSchema>;
