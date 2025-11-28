import type { SharedContractDefinition } from ".";
import type { MilburnContractData } from "../../milburn/milburn-contract-data";
import { PRE_EXISTING_DAMAGE } from "./shared-contracts/preexistingDamage";

export const PRE_MOVE_CONTRACTS: SharedContractDefinition<MilburnContractData>[] = [
  {
    id: "milburn-freight",
    label: "Milburn Freight Bill",
    component: "MilburnFreightBill",

    requiredSignatures: ["mover", "consignee"],
    signatures: [
      { key: "initials", label: "Initials" },
      { key: "shipper", label: "Shipper’s Signature" },
      { key: "moverX", label: "X" },
      { key: "mover", label: "Mover’s Signature", required: true },
      { key: "consignee", label: "Received by Consignee", required: true },
    ],
  },

  {
    id: "important-notice",
    label: "Important Notice About Your Move",
    component: "ImportantNotice",

    requiredSignatures: ["mover", "customer"],
    signatures: [
      { key: "mover", label: "Mover Signature", required: true },
      { key: "customer", label: "Customer Signature", required: true },
    ],
  },

  {
    id: "customer-information",
    label: "Customer Information",
    component: "CustomerInformation",

    requiredSignatures: ["customer"],
    signatures: [{ key: "customer", label: "Customer Signature", required: true }],
  },

  {
    id: "packing-materials",
    label: "Packing Materials Charges",
    component: "PackingMaterialsCharges",

    requiredSignatures: ["customer"],
    signatures: [{ key: "customer", label: "Customer Signature", required: true }],
  },
PRE_EXISTING_DAMAGE,
];

