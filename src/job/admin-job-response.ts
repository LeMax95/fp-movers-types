// shared/admin-job-response.ts
import { z } from "zod";
import { JobSummarySchema } from "./job-summary";
import { StopsSchema } from "./job-stops";

// ──────────────────────────
// BASIC STOP
// ──────────────────────────

export const AdminJobStopSchema = z.object({
  id: z.number(),
  address: z.string(),
  loading: z.boolean(),
  unloading: z.boolean(),
});
export const AdminJobDamagePhotoSchema = z.object({
  id: z.string(),
  url: z.string(),
  thumbUrl: z.string().nullable().optional(),
  mime: z.string().nullable().optional(),
  width: z.number().nullable().optional(),
  height: z.number().nullable().optional(),
  sizeBytes: z.number().nullable().optional(),
  createdAt: z.string(),
});

export const AdminJobDamageSchema = z.object({
  id: z.string(),
  batch: z.enum(["pre", "post"]),
  rowIndex: z.number(),
  item: z.string(),
  description: z.string().nullable(),
  createdAt: z.string(),
  photos: z.array(AdminJobDamagePhotoSchema),
});
// ──────────────────────────
// ADMIN CONTRACT LIST (keys only)
// ──────────────────────────

export const AdminContractKeySchema = z.string();
export const AdminContractListSchema = z.array(AdminContractKeySchema);

// ──────────────────────────
// ADMIN JOB RESPONSE
// ──────────────────────────

export const AdminJobResponseSchema = z.object({
  id: z.string(),
  client: z.string(),
  phone: z.string().nullable(),
  email: z.string().nullable(),
  foremanId: z.string().nullable().optional(),
  foremanName: z.string().nullable().optional(),
  moveDate: z.string(),
  moveTime: z.string().nullable(),
  reference: z.string().nullable(),
  damages: z.array(AdminJobDamageSchema).optional(),
  fromAddress: z.string(),
  toAddress: z.string(),

  truckCount: z.number(),
  crew: z.array(z.string()),
  notes: z.string().nullable(),

  volume: z.string().nullable().optional(),
  moveType: z.string().nullable().optional(),
  distance: z.string().nullable().optional(),
  rate: z.string().nullable().optional(),
  minimum: z.string().nullable().optional(),
  gasFee: z.string().nullable().optional(),

  // 👇 add this
  packageId: z.number().nullable().optional(),

  status: z.string(),

  createdAt: z.string(),
  updatedAt: z.string(),

  stops: z.array(AdminJobStopSchema),

  summary: z
    .object({
      data: JobSummarySchema,
    })
    .nullable(),

  contracts: AdminContractListSchema,
});

export type AdminJobResponse = z.infer<typeof AdminJobResponseSchema>;

