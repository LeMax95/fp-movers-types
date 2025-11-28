import { z } from "zod";
import { UserCoreSchema } from "../user/user-core";

export const LoginResponseSchema = z.object({
  token: z.string(),
  user: UserCoreSchema,
});


export type LoginResponse = z.infer<typeof LoginResponseSchema>;
