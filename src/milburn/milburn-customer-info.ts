import { z } from "zod";

export const CustomerReleaseItemSchema = z.object({
  item: z.string(),
  reason: z.string(),
  initials: z.string(),
});

export const CustomerInfoSchema = z.object({
  doubleDriveInitial: z.string().optional(),
  suppliesInitial: z.string().optional(),
  liabilityInitial: z.string().optional(),
  pressboardOption: z.string().optional(),
  parkingTicketInitial: z.string().optional(),
  printName: z.string().optional(),
  releaseItems: z.array(CustomerReleaseItemSchema).optional(),
});

export type CustomerInfoData = z.infer<typeof CustomerInfoSchema>;
