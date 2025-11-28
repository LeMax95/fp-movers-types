import { z } from "zod";
import { UserCoreSchema } from "./user-core";

export const CreateUserResponseSchema = z.object({
  user: UserCoreSchema,
  onboardingLink: z.string().url(),
});

export type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;
