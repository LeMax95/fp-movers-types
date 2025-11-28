import { z } from "zod";

export const StorageHourlySchema = z.object({
  storageType: z.string().optional(),
  nameOf: z.string().optional(),
  billNotifyAddress: z.string().optional(),
  firstDayRate: z.string().optional(),
  additionalDaysRate: z.string().optional(),
  warehouseHandlingRate: z.string().optional(),
  materials: z.array(z.array(z.string())).optional(),
  paymentTypes: z.array(z.string()).optional(),
  stripeInputs: z.array(z.array(z.string())).optional(),
  packersData: z.array(z.array(z.string())).optional(),
  noOfPackers: z.object({
    count: z.string().optional(),
    origin: z.boolean().optional(),
    dest: z.boolean().optional()
  }).optional(),
  issuance: z.object({
    waiveRequirement: z.boolean().optional(),
    shortNotice: z.boolean().optional()
  }).optional(),
  articles: z.object({
    highValue: z.boolean().optional(),
    officeFixtures: z.boolean().optional(),
    householdGoods: z.boolean().optional(),
    adviceWeightCharges: z.string().optional()
  }).optional(),
  hourlyRate: z.record(z.any()).optional(),
  valuation: z.record(z.any()).optional(),
  hundredweightRate: z.record(z.any()).optional(),
  packers: z.record(z.any()).optional(),
  packing: z.record(z.any()).optional(),
  unpacking: z.record(z.any()).optional(),
  pieceMoving: z.record(z.any()).optional(),
  itemsOfValue: z.array(z.record(z.any())).optional(),
});

export type StorageHourlyData = z.infer<typeof StorageHourlySchema>;
