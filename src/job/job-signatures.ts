import { z } from "zod";

export const SignatureScopeSchema = z.record(z.record(z.string().nullable()));

export const ScopedSignaturesSchema = z.object({
  pre: SignatureScopeSchema,
  post: SignatureScopeSchema,
});

export type ScopedSignatures = z.infer<typeof ScopedSignaturesSchema>;
