import { z } from "zod";
import { UserRoleSchema } from "./user-core";

export const AdminUserResponseSchema = z.object({
  id: z.string(),
  nickname: z.string().nullable().optional(),

  email: z.string(),
  name: z.string().nullable(),
  phone: z.string().nullable(),
  role: UserRoleSchema,

  isActive: z.boolean(),

  createdAt: z.string(),
  updatedAt: z.string(),

  // Admin-only meta
  jobCount: z.number().optional(),
  lastActiveAt: z.string().nullable().optional(),

  // Onboarding meta (computed on server)
  onboardingPending: z.boolean().optional(),
  onboardingExpired: z.boolean().optional(),
});


export type AdminUserResponse = z.infer<typeof AdminUserResponseSchema>;
