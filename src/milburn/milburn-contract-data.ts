import { z } from "zod";
import { AddressBlockSchema } from "./milburn-address";
import { MilburnMetaSchema } from "./milburn-meta";
import { DeliverySchema } from "./milburn-delivery";
import { StorageHourlySchema } from "./milburn-storage";
import { ValuationSchema } from "./milburn-valuation";
import { CustomerInfoSchema } from "./milburn-customer-info";
import { PackingMaterialRowSchema } from "./milburn-packing";
import { DamageRowSchema } from "./milburn-damage";
import { ReleaseRowSchema } from "./milburn-release";
import  { JobNoticeSchema } from "../job/job-core";

export const MilburnContractDataSchema = z.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: JobNoticeSchema.optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: z.array(PackingMaterialRowSchema).optional(),
  damagePre: z.array(DamageRowSchema).optional(),
  damagePost: z.array(DamageRowSchema).optional(),
  releaseRows: z.array(ReleaseRowSchema).optional(),

  paymentDetails: z.record(z.string()).optional(),
  summary: z.record(z.any()).optional()
});

export type MilburnContractData = z.infer<typeof MilburnContractDataSchema>;
