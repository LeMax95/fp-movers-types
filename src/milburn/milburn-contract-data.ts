import { z } from "zod";
import { AddressBlockSchema } from "./milburn-address";
import { MilburnMetaSchema } from "./milburn-meta";
import { DeliverySchema } from "./milburn-delivery";
import { StorageHourlySchema } from "./milburn-storage";
import { ValuationSchema } from "./milburn-valuation";
import { CustomerInfoSchema } from "./milburn-customer-info";
import { PackingMaterialRowSchema } from "./milburn-packing";
import { DamageRowSchema } from "./milburn-damage";
export const MilburnContractDataSchema = z.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: z.object({
    notToExceedAmount: z.string().optional(),
    services: z.string().optional()
  }).optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: z.array(PackingMaterialRowSchema).optional(),
  damagePre: z.array(DamageRowSchema).optional(),
  damagePost: z.array(DamageRowSchema).optional(),
  paymentDetails: z.record(z.string()).optional(),
  summary: z.record(z.any()).optional()
});

export type MilburnContractData = z.infer<typeof MilburnContractDataSchema>;
