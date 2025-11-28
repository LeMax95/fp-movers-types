import { z } from "zod";

export const OnboardingCompletePayloadSchema = z.object({
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type OnboardingCompletePayload = z.infer<typeof OnboardingCompletePayloadSchema>;
