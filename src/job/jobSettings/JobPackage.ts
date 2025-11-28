import { z } from "zod";
export const PackageMarketingSchema = z.object({
  description: z.string().optional(),
  notes: z.string().optional(),
  finePrint: z.string().optional(),
}).optional();

export const JobPackageSchema = z.object({
  id: z.number(),
  name: z.string(),
  shortName: z.string().nullable().optional(),
  category: z.string().nullable().optional(),

  moverCount: z.number(),
  truckCount: z.number(),

  hourlyRate: z.number(),
  minHours: z.number(),
  flatFee: z.number().nullable().optional(),
  overtimeRate: z.number().nullable().optional(),

  includesGasFee: z.boolean().default(true),
  includesMileage: z.boolean().default(true),
  includesTolls: z.boolean().default(false),
  includesTaxes: z.boolean().default(true),
  includesTruckFee: z.boolean().default(true),

  includesPackingMaterials: z.boolean().default(false),
  includesDisassembly: z.boolean().default(false),
  includesReassembly: z.boolean().default(false),
  includesFloorProtection: z.boolean().default(false),
  includesWrapping: z.boolean().default(false),
  includesBasicInsurance: z.boolean().default(true),

  overrideGasFee: z.number().nullable().optional(),
  overridePerMileRate: z.number().nullable().optional(),
  overridePackingRate: z.number().nullable().optional(),
  overrideUnpackingRate: z.number().nullable().optional(),

  defaultCrewNames: z.array(z.string()).default([]),

  marketing: z.any().optional(),
  isActive: z.boolean().default(true),
});



export const JobPackageCreateSchema = JobPackageSchema.omit({ id: true });

export type JobPackage = z.infer<typeof JobPackageSchema>;
export type JobPackageCreate = z.infer<typeof JobPackageCreateSchema>;
export type PackageMarketing = z.infer<typeof PackageMarketingSchema>;
export type JobPackageRow = JobPackage | (JobPackageCreate & { id?: undefined });
