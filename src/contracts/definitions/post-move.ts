import type { SharedContractDefinition } from ".";
import type { MilburnContractData } from "../../milburn/milburn-contract-data";
import { PRE_EXISTING_DAMAGE } from "./shared-contracts/preexistingDamage";
export const POST_MOVE_CONTRACTS: SharedContractDefinition<MilburnContractData>[] = [
 PRE_EXISTING_DAMAGE,

  {
    id: "credit-card-agreement",
    label: "Credit Card Payment Agreement",
    component: "CreditCardPaymentAgreement",

    requiredSignatures: ["customer"],
    signatures: [
      { key: "customer", label: "Customer Signature", required: true },
    ],
  },

  {
    id: "personal-belongings",
    label: "Personal Belongings Check",
    component: "PersonalBelongingsCheck",

    requiredSignatures: ["customer"],
    signatures: [
      { key: "customer", label: "Customer Signature", required: true },
    ],
  },
];
