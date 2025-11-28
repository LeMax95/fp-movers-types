import { z } from "zod";

/**
 * A single signature definition used in contract configs.
 * Describes what signatures should be collected.
 */
export interface SignatureDefinition {
  key: string;                // signature identifier (e.g. "client", "mover", etc.)
  label: string;              // what UI displays
  required?: boolean;         // whether this signature is required
  variant?: "inline" | "stacked" | "mark"; // UI style (FieldApp only)
}

/**
 * Contract-level signature configuration.
 *
 * NOTE:
 * This does NOT store signatures.
 * It ONLY declares which signatures are needed.
 */
export interface ContractSignaturesConfig {
  /** All possible signatures this contract collects */
  signatures?: SignatureDefinition[];

  /** Simple required signatures (non-dual batch contracts) */
  requiredSignatures?: string[];

  /** 
   * If the contract requires signatures twice (pre + post),
   * set this flag and provide separated keys.
   */
  dualBatch?: boolean;

  /**
   * Lists signatures required for each batch.
   * Must match keys defined in "signatures".
   */
  dualBatchKeys?: {
    pre: string[];
    post: string[];
  };
}

/**
 * Zod schema for validation of signature configuration.
 */
export const ContractSignaturesConfigSchema = z.object({
  signatures: z
    .array(
      z.object({
        key: z.string(),
        label: z.string(),
        required: z.boolean().optional(),
        variant: z.enum(["inline", "stacked", "mark"]).optional(),
      })
    )
    .optional(),

  requiredSignatures: z.array(z.string()).optional(),

  dualBatch: z.boolean().optional(),

  dualBatchKeys: z
    .object({
      pre: z.array(z.string()),
      post: z.array(z.string()),
    })
    .optional(),
});

export type ContractSignaturesConfigType = z.infer<
  typeof ContractSignaturesConfigSchema
>;
