import { z } from "zod";

export const JobContractsSchema = z.object({
  data: z.record(z.unknown()).optional(),

  signatures: z.object({
    pre: z
      .record(
        z.record(
          z.string().nullable().optional()
        ).optional()
      )
      .optional(),

    post: z
      .record(
        z.record(
          z.string().nullable().optional()
        ).optional()
      )
      .optional(),
  }).optional(),
});

export type JobContracts = z.infer<typeof JobContractsSchema>;
