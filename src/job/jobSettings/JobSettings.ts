import { z } from "zod";
import { ExtraItemSchema } from "../job-summary";

export const JobSettingsSchema = z.object({
  // ------- Job Defaults -------
  defaultHourlyRate: z.number().nullable().optional(),
  defaultMinHours: z.number().nullable().optional(),
  defaultCrewSize: z.number().nullable().optional(),
  defaultTruckCount: z.number().nullable().optional(),

  defaultGasFee: z.number().nullable().optional(),
  defaultPerMileRate: z.number().nullable().optional(),
  defaultTollFee: z.number().nullable().optional(),

  // ------- Extras -------
  extras: z
    .array(
      ExtraItemSchema.extend({
        quantity: z.number().default(0),
      })
    )
    .nullable()
    .optional(),

  // ------- Packing / Materials -------
  packingRate: z.number().nullable().optional(),
  unpackingRate: z.number().nullable().optional(),
  materialsMarkupPct: z.number().nullable().optional(),

  // ------- Storage -------
  storageFirstDayRate: z.number().nullable().optional(),
  storageAdditionalDayRate: z.number().nullable().optional(),
  storageHandlingRate: z.number().nullable().optional(),

  // ------- Valuation -------
  valuationActualCashPerLb: z.number().nullable().optional(),
  valuationFullValuePerLb: z.number().nullable().optional(),

  // ------- Fuel / Truck Fees -------
  fuelBaseFee: z.number().nullable().optional(),
  fuelPerMileRate: z.number().nullable().optional(),
  truckFeePerTruck: z.number().nullable().optional(),
});

export type JobSettings = z.infer<typeof JobSettingsSchema>;
