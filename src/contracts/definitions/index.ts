import type { ContractSignaturesConfig } from "../../milburn/milburn-contract-signatures";


export interface SharedContractDefinition<TData = unknown>
  extends ContractSignaturesConfig {
  id: string;
  label: string;

  /**
   * UI layer will map this to a React component.
   * (e.g. "PreExistingDamageReport")
   */
  component: string;

  /**
   * Optional required validation fields.
   */
  requiredFields?: string[];
}
export * from "./pre-move";
export * from "./post-move";
