import { z } from "zod";
import { UserRoleSchema } from "./user-core";

// Admin → BE to create a user
export const CreateUserPayloadSchema = z.object({
  email: z.string().email(),
  nickname: z.string().optional(),

  name: z.string().optional(),
  phone: z.string().optional(),
  role: UserRoleSchema,
});


// Admin → BE to update a user
export const UpdateUserPayloadSchema = z.object({
  name: z.string().optional(),
  nickname: z.string().optional(),

  phone: z.string().optional(),
  role: UserRoleSchema.optional(),
  isActive: z.boolean().optional(),
});

export type CreateUserPayload = z.infer<typeof CreateUserPayloadSchema>;
export type UpdateUserPayload = z.infer<typeof UpdateUserPayloadSchema>;
