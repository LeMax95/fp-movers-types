import { z } from "zod";

export const AddressBlockSchema = z.object({
  aptNo: z.string().optional(),
  phone: z.string().optional(),
  address: z.string().optional(),
});

export type AddressBlock = z.infer<typeof AddressBlockSchema>;
