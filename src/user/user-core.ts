import { z } from "zod";

export const UserRoleSchema = z.enum(["admin", "foreman"]);

export const UserCoreSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().nullable().optional(),
  nickname: z.string().nullable().optional(),   
  phone: z.string().nullable().optional(),
  role: UserRoleSchema,

  isActive: z.boolean(),

  createdAt: z.string(),
  updatedAt: z.string(),
});

export type UserRole = z.infer<typeof UserRoleSchema>;
export type UserCore = z.infer<typeof UserCoreSchema>;
