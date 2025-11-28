import { z } from "zod";

export const DeliverySchema = z.object({
  note: z.string().optional(),
  notify: z.string().optional(),
  address: z.string().optional(),
  phone: z.string().optional(),
  nameOf: z.string().optional(),
  billNotifyAddress: z.string().optional(),
  shipperCantFurnish: z.boolean().optional(),
});

export type DeliveryData = z.infer<typeof DeliverySchema>;
