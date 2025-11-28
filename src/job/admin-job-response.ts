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

