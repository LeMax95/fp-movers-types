import { z } from "zod";

export const LoginPayloadSchema = z.object({
  identifier: z.string(),
  password: z.string(),
});
export type LoginPayload = z.infer<typeof LoginPayloadSchema>;