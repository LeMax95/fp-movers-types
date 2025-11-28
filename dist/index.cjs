"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AddressBlockSchema: () => AddressBlockSchema,
  AdminContractKeySchema: () => AdminContractKeySchema,
  AdminContractListSchema: () => AdminContractListSchema,
  AdminJobResponseSchema: () => AdminJobResponseSchema,
  AdminJobStopSchema: () => AdminJobStopSchema,
  AdminUserResponseSchema: () => AdminUserResponseSchema,
  ContractSignaturesConfigSchema: () => ContractSignaturesConfigSchema,
  CreateJobPayloadSchema: () => CreateJobPayloadSchema,
  CreateUserPayloadSchema: () => CreateUserPayloadSchema,
  CreateUserResponseSchema: () => CreateUserResponseSchema,
  CustomerInfoSchema: () => CustomerInfoSchema,
  CustomerReleaseItemSchema: () => CustomerReleaseItemSchema,
  DamageRowSchema: () => DamageRowSchema,
  DashboardKpiMetricSchema: () => DashboardKpiMetricSchema,
  DashboardKpisSchema: () => DashboardKpisSchema,
  DashboardRangeSchema: () => DashboardRangeSchema,
  DeliverySchema: () => DeliverySchema,
  ExtraItemSchema: () => ExtraItemSchema,
  FieldJobUpdateSchema: () => FieldJobUpdateSchema,
  JobContractsSchema: () => JobContractsSchema,
  JobCoreSchema: () => JobCoreSchema,
  JobPackageCreateSchema: () => JobPackageCreateSchema,
  JobPackageSchema: () => JobPackageSchema,
  JobPartialUpdateSchema: () => JobPartialUpdateSchema,
  JobSettingsSchema: () => JobSettingsSchema,
  JobStatusEnum: () => JobStatusEnum,
  JobSummarySchema: () => JobSummarySchema,
  JobTypeBreakdownItemSchema: () => JobTypeBreakdownItemSchema,
  JobTypeBreakdownSchema: () => JobTypeBreakdownSchema,
  JobsByStatusItemSchema: () => JobsByStatusItemSchema,
  LatestJobItemSchema: () => LatestJobItemSchema,
  LoginPayloadSchema: () => LoginPayloadSchema,
  LoginResponseSchema: () => LoginResponseSchema,
  MilburnContractDataSchema: () => MilburnContractDataSchema,
  MilburnMetaSchema: () => MilburnMetaSchema,
  NotificationSchema: () => NotificationSchema,
  OnboardingCompletePayloadSchema: () => OnboardingCompletePayloadSchema,
  POST_MOVE_CONTRACTS: () => POST_MOVE_CONTRACTS,
  PRE_MOVE_CONTRACTS: () => PRE_MOVE_CONTRACTS,
  PackageMarketingSchema: () => PackageMarketingSchema,
  PackingMaterialRowSchema: () => PackingMaterialRowSchema,
  RevenueBreakdownSchema: () => RevenueBreakdownSchema,
  ScopedSignaturesSchema: () => ScopedSignaturesSchema,
  SignatureScopeSchema: () => SignatureScopeSchema,
  StepSchema: () => StepSchema,
  StopSchema: () => StopSchema,
  StopsSchema: () => StopsSchema,
  StorageHourlySchema: () => StorageHourlySchema,
  UpdateUserPayloadSchema: () => UpdateUserPayloadSchema,
  UserCoreSchema: () => UserCoreSchema,
  UserRoleSchema: () => UserRoleSchema,
  ValuationSchema: () => ValuationSchema
});
module.exports = __toCommonJS(src_exports);

// src/job/job-core.ts
var import_zod = require("zod");
var JobStatusEnum = import_zod.z.enum([
  "draft",
  "scheduled",
  "in_progress",
  "completed",
  "cancelled"
]);
var JobCoreSchema = import_zod.z.object({
  id: import_zod.z.string(),
  client: import_zod.z.string(),
  phone: import_zod.z.string().optional(),
  email: import_zod.z.string().optional(),
  status: JobStatusEnum,
  foremanId: import_zod.z.string().nullable().optional(),
  moveDate: import_zod.z.string(),
  moveTime: import_zod.z.string().nullable().optional(),
  reference: import_zod.z.string().nullable().optional(),
  from: import_zod.z.string(),
  to: import_zod.z.string(),
  truckCount: import_zod.z.number(),
  crew: import_zod.z.array(import_zod.z.string()).optional(),
  notes: import_zod.z.string().nullable().optional(),
  // Extra optional FE fields
  volume: import_zod.z.string().optional(),
  moveType: import_zod.z.string().optional(),
  distance: import_zod.z.string().optional(),
  rate: import_zod.z.string().optional(),
  minimum: import_zod.z.string().optional(),
  gasFee: import_zod.z.string().optional(),
  // Required
  contractVersion: import_zod.z.number(),
  // NEW — correct Zod syntax
  packageId: import_zod.z.number().nullable().optional()
});

// src/job/job-stops.ts
var import_zod2 = require("zod");
var StopSchema = import_zod2.z.object({
  address: import_zod2.z.string(),
  loading: import_zod2.z.boolean().optional(),
  unloading: import_zod2.z.boolean().optional()
});
var StopsSchema = import_zod2.z.array(StopSchema);

// src/job/job-summary.ts
var import_zod3 = require("zod");
var StepSchema = import_zod3.z.object({
  index: import_zod3.z.number(),
  step: import_zod3.z.object({
    type: import_zod3.z.string(),
    stopId: import_zod3.z.string().optional(),
    address: import_zod3.z.string().optional(),
    fromAddress: import_zod3.z.string().optional(),
    toAddress: import_zod3.z.string().optional(),
    phase: import_zod3.z.enum(["loading", "unloading", "driving"]).optional()
  }),
  duration: import_zod3.z.number()
});
var ExtraItemSchema = import_zod3.z.object({
  label: import_zod3.z.string(),
  quantity: import_zod3.z.number(),
  price: import_zod3.z.number(),
  unit: import_zod3.z.string().optional()
});
var JobSummarySchema = import_zod3.z.object({
  steps: import_zod3.z.array(StepSchema),
  duration: import_zod3.z.string(),
  billableHours: import_zod3.z.number(),
  laborTotal: import_zod3.z.number(),
  extras: import_zod3.z.array(ExtraItemSchema),
  extrasTotal: import_zod3.z.number(),
  tip: import_zod3.z.number(),
  grandTotal: import_zod3.z.number(),
  paymentMethod: import_zod3.z.enum(["Cash", "Credit Card", "PayPal"]),
  paymentDetails: import_zod3.z.record(import_zod3.z.string()).optional(),
  foremanId: import_zod3.z.string(),
  foremanName: import_zod3.z.string()
});

// src/job/job-contracts.ts
var import_zod4 = require("zod");
var JobContractsSchema = import_zod4.z.object({
  data: import_zod4.z.record(import_zod4.z.unknown()).optional(),
  signatures: import_zod4.z.object({
    pre: import_zod4.z.record(
      import_zod4.z.record(
        import_zod4.z.string().nullable().optional()
      ).optional()
    ).optional(),
    post: import_zod4.z.record(
      import_zod4.z.record(
        import_zod4.z.string().nullable().optional()
      ).optional()
    ).optional()
  }).optional()
});

// src/job/job-signatures.ts
var import_zod5 = require("zod");
var SignatureScopeSchema = import_zod5.z.record(import_zod5.z.record(import_zod5.z.string().nullable()));
var ScopedSignaturesSchema = import_zod5.z.object({
  pre: SignatureScopeSchema,
  post: SignatureScopeSchema
});

// src/job/job-payloads.ts
var import_zod6 = require("zod");
var CreateJobPayloadSchema = import_zod6.z.object({
  job: JobCoreSchema,
  stops: StopsSchema,
  contracts: JobContractsSchema,
  summary: JobSummarySchema.optional()
});

// src/job/job-field-updates.ts
var import_zod7 = require("zod");
var FieldJobUpdateSchema = import_zod7.z.object({
  crew: import_zod7.z.array(import_zod7.z.string()).optional(),
  notes: import_zod7.z.string().optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional()
});

// src/job/admin-job-response.ts
var import_zod8 = require("zod");
var AdminJobStopSchema = import_zod8.z.object({
  id: import_zod8.z.number(),
  address: import_zod8.z.string(),
  loading: import_zod8.z.boolean(),
  unloading: import_zod8.z.boolean()
});
var AdminContractKeySchema = import_zod8.z.string();
var AdminContractListSchema = import_zod8.z.array(AdminContractKeySchema);
var AdminJobResponseSchema = import_zod8.z.object({
  id: import_zod8.z.string(),
  client: import_zod8.z.string(),
  phone: import_zod8.z.string().nullable(),
  email: import_zod8.z.string().nullable(),
  foremanId: import_zod8.z.string().nullable().optional(),
  foremanName: import_zod8.z.string().nullable().optional(),
  moveDate: import_zod8.z.string(),
  moveTime: import_zod8.z.string().nullable(),
  reference: import_zod8.z.string().nullable(),
  fromAddress: import_zod8.z.string(),
  toAddress: import_zod8.z.string(),
  truckCount: import_zod8.z.number(),
  crew: import_zod8.z.array(import_zod8.z.string()),
  notes: import_zod8.z.string().nullable(),
  volume: import_zod8.z.string().nullable().optional(),
  moveType: import_zod8.z.string().nullable().optional(),
  distance: import_zod8.z.string().nullable().optional(),
  rate: import_zod8.z.string().nullable().optional(),
  minimum: import_zod8.z.string().nullable().optional(),
  gasFee: import_zod8.z.string().nullable().optional(),
  // 👇 add this
  packageId: import_zod8.z.number().nullable().optional(),
  status: import_zod8.z.string(),
  createdAt: import_zod8.z.string(),
  updatedAt: import_zod8.z.string(),
  stops: import_zod8.z.array(AdminJobStopSchema),
  summary: import_zod8.z.object({
    data: JobSummarySchema
  }).nullable(),
  contracts: AdminContractListSchema
});

// src/job/jobSettings/JobSettings.ts
var import_zod9 = require("zod");
var JobSettingsSchema = import_zod9.z.object({
  // ------- Job Defaults -------
  defaultHourlyRate: import_zod9.z.number().nullable().optional(),
  defaultMinHours: import_zod9.z.number().nullable().optional(),
  defaultCrewSize: import_zod9.z.number().nullable().optional(),
  defaultTruckCount: import_zod9.z.number().nullable().optional(),
  defaultGasFee: import_zod9.z.number().nullable().optional(),
  defaultPerMileRate: import_zod9.z.number().nullable().optional(),
  defaultTollFee: import_zod9.z.number().nullable().optional(),
  // ------- Extras -------
  extras: import_zod9.z.array(
    ExtraItemSchema.extend({
      quantity: import_zod9.z.number().default(0)
    })
  ).nullable().optional(),
  // ------- Packing / Materials -------
  packingRate: import_zod9.z.number().nullable().optional(),
  unpackingRate: import_zod9.z.number().nullable().optional(),
  materialsMarkupPct: import_zod9.z.number().nullable().optional(),
  // ------- Storage -------
  storageFirstDayRate: import_zod9.z.number().nullable().optional(),
  storageAdditionalDayRate: import_zod9.z.number().nullable().optional(),
  storageHandlingRate: import_zod9.z.number().nullable().optional(),
  // ------- Valuation -------
  valuationActualCashPerLb: import_zod9.z.number().nullable().optional(),
  valuationFullValuePerLb: import_zod9.z.number().nullable().optional(),
  // ------- Fuel / Truck Fees -------
  fuelBaseFee: import_zod9.z.number().nullable().optional(),
  fuelPerMileRate: import_zod9.z.number().nullable().optional(),
  truckFeePerTruck: import_zod9.z.number().nullable().optional()
});

// src/job/jobSettings/JobPackage.ts
var import_zod10 = require("zod");
var PackageMarketingSchema = import_zod10.z.object({
  description: import_zod10.z.string().optional(),
  notes: import_zod10.z.string().optional(),
  finePrint: import_zod10.z.string().optional()
}).optional();
var JobPackageSchema = import_zod10.z.object({
  id: import_zod10.z.number(),
  name: import_zod10.z.string(),
  shortName: import_zod10.z.string().nullable().optional(),
  category: import_zod10.z.string().nullable().optional(),
  moverCount: import_zod10.z.number(),
  truckCount: import_zod10.z.number(),
  hourlyRate: import_zod10.z.number(),
  minHours: import_zod10.z.number(),
  flatFee: import_zod10.z.number().nullable().optional(),
  overtimeRate: import_zod10.z.number().nullable().optional(),
  includesGasFee: import_zod10.z.boolean().default(true),
  includesMileage: import_zod10.z.boolean().default(true),
  includesTolls: import_zod10.z.boolean().default(false),
  includesTaxes: import_zod10.z.boolean().default(true),
  includesTruckFee: import_zod10.z.boolean().default(true),
  includesPackingMaterials: import_zod10.z.boolean().default(false),
  includesDisassembly: import_zod10.z.boolean().default(false),
  includesReassembly: import_zod10.z.boolean().default(false),
  includesFloorProtection: import_zod10.z.boolean().default(false),
  includesWrapping: import_zod10.z.boolean().default(false),
  includesBasicInsurance: import_zod10.z.boolean().default(true),
  overrideGasFee: import_zod10.z.number().nullable().optional(),
  overridePerMileRate: import_zod10.z.number().nullable().optional(),
  overridePackingRate: import_zod10.z.number().nullable().optional(),
  overrideUnpackingRate: import_zod10.z.number().nullable().optional(),
  defaultCrewNames: import_zod10.z.array(import_zod10.z.string()).default([]),
  marketing: import_zod10.z.any().optional(),
  isActive: import_zod10.z.boolean().default(true)
});
var JobPackageCreateSchema = JobPackageSchema.omit({ id: true });

// src/job/job-partial-update.ts
var import_zod11 = require("zod");
var JobPartialUpdateSchema = import_zod11.z.object({
  job: JobCoreSchema.partial(),
  stops: StopsSchema.optional()
});

// src/milburn/milburn-meta.ts
var import_zod12 = require("zod");
var MilburnMetaSchema = import_zod12.z.object({
  orderDate: import_zod12.z.string().optional(),
  moveDate: import_zod12.z.string().optional(),
  packDate: import_zod12.z.string().optional(),
  delDate: import_zod12.z.string().optional(),
  takenBy: import_zod12.z.string().optional(),
  bookletDate: import_zod12.z.string().optional(),
  receivedPayment: import_zod12.z.boolean().optional(),
  reference: import_zod12.z.string().optional(),
  client: import_zod12.z.string().optional()
});

// src/milburn/milburn-address.ts
var import_zod13 = require("zod");
var AddressBlockSchema = import_zod13.z.object({
  aptNo: import_zod13.z.string().optional(),
  phone: import_zod13.z.string().optional(),
  address: import_zod13.z.string().optional()
});

// src/milburn/milburn-delivery.ts
var import_zod14 = require("zod");
var DeliverySchema = import_zod14.z.object({
  note: import_zod14.z.string().optional(),
  notify: import_zod14.z.string().optional(),
  address: import_zod14.z.string().optional(),
  phone: import_zod14.z.string().optional(),
  nameOf: import_zod14.z.string().optional(),
  billNotifyAddress: import_zod14.z.string().optional(),
  shipperCantFurnish: import_zod14.z.boolean().optional()
});

// src/milburn/milburn-storage.ts
var import_zod15 = require("zod");
var StorageHourlySchema = import_zod15.z.object({
  storageType: import_zod15.z.string().optional(),
  nameOf: import_zod15.z.string().optional(),
  billNotifyAddress: import_zod15.z.string().optional(),
  firstDayRate: import_zod15.z.string().optional(),
  additionalDaysRate: import_zod15.z.string().optional(),
  warehouseHandlingRate: import_zod15.z.string().optional(),
  materials: import_zod15.z.array(import_zod15.z.array(import_zod15.z.string())).optional(),
  paymentTypes: import_zod15.z.array(import_zod15.z.string()).optional(),
  stripeInputs: import_zod15.z.array(import_zod15.z.array(import_zod15.z.string())).optional(),
  packersData: import_zod15.z.array(import_zod15.z.array(import_zod15.z.string())).optional(),
  noOfPackers: import_zod15.z.object({
    count: import_zod15.z.string().optional(),
    origin: import_zod15.z.boolean().optional(),
    dest: import_zod15.z.boolean().optional()
  }).optional(),
  issuance: import_zod15.z.object({
    waiveRequirement: import_zod15.z.boolean().optional(),
    shortNotice: import_zod15.z.boolean().optional()
  }).optional(),
  articles: import_zod15.z.object({
    highValue: import_zod15.z.boolean().optional(),
    officeFixtures: import_zod15.z.boolean().optional(),
    householdGoods: import_zod15.z.boolean().optional(),
    adviceWeightCharges: import_zod15.z.string().optional()
  }).optional(),
  hourlyRate: import_zod15.z.record(import_zod15.z.any()).optional(),
  valuation: import_zod15.z.record(import_zod15.z.any()).optional(),
  hundredweightRate: import_zod15.z.record(import_zod15.z.any()).optional(),
  packers: import_zod15.z.record(import_zod15.z.any()).optional(),
  packing: import_zod15.z.record(import_zod15.z.any()).optional(),
  unpacking: import_zod15.z.record(import_zod15.z.any()).optional(),
  pieceMoving: import_zod15.z.record(import_zod15.z.any()).optional(),
  itemsOfValue: import_zod15.z.array(import_zod15.z.record(import_zod15.z.any())).optional()
});

// src/milburn/milburn-valuation.ts
var import_zod16 = require("zod");
var ValuationSchema = import_zod16.z.object({
  choices: import_zod16.z.array(import_zod16.z.string()).optional(),
  selectedOption: import_zod16.z.string().optional(),
  transportationRates: import_zod16.z.array(import_zod16.z.string()).optional(),
  maxRates: import_zod16.z.array(import_zod16.z.string()).optional(),
  storageRates: import_zod16.z.array(import_zod16.z.string()).optional(),
  actualCashPerLb: import_zod16.z.string().optional(),
  fullValuePerLb: import_zod16.z.string().optional(),
  declaredValue: import_zod16.z.string().optional()
});

// src/milburn/milburn-packing.ts
var import_zod17 = require("zod");
var PackingMaterialRowSchema = import_zod17.z.object({
  item: import_zod17.z.string(),
  perItem: import_zod17.z.string(),
  packing: import_zod17.z.string(),
  unpacking: import_zod17.z.string(),
  qty: import_zod17.z.string(),
  total: import_zod17.z.string()
});

// src/milburn/milburn-customer-info.ts
var import_zod18 = require("zod");
var CustomerReleaseItemSchema = import_zod18.z.object({
  item: import_zod18.z.string(),
  reason: import_zod18.z.string(),
  initials: import_zod18.z.string()
});
var CustomerInfoSchema = import_zod18.z.object({
  doubleDriveInitial: import_zod18.z.string().optional(),
  suppliesInitial: import_zod18.z.string().optional(),
  liabilityInitial: import_zod18.z.string().optional(),
  pressboardOption: import_zod18.z.string().optional(),
  parkingTicketInitial: import_zod18.z.string().optional(),
  printName: import_zod18.z.string().optional(),
  releaseItems: import_zod18.z.array(CustomerReleaseItemSchema).optional()
});

// src/milburn/milburn-damage.ts
var import_zod19 = require("zod");
var DamageRowSchema = import_zod19.z.object({
  item: import_zod19.z.string(),
  description: import_zod19.z.string()
});

// src/milburn/milburn-contract-signatures.ts
var import_zod20 = require("zod");
var ContractSignaturesConfigSchema = import_zod20.z.object({
  signatures: import_zod20.z.array(
    import_zod20.z.object({
      key: import_zod20.z.string(),
      label: import_zod20.z.string(),
      required: import_zod20.z.boolean().optional(),
      variant: import_zod20.z.enum(["inline", "stacked", "mark"]).optional()
    })
  ).optional(),
  requiredSignatures: import_zod20.z.array(import_zod20.z.string()).optional(),
  dualBatch: import_zod20.z.boolean().optional(),
  dualBatchKeys: import_zod20.z.object({
    pre: import_zod20.z.array(import_zod20.z.string()),
    post: import_zod20.z.array(import_zod20.z.string())
  }).optional()
});

// src/milburn/milburn-contract-data.ts
var import_zod21 = require("zod");
var MilburnContractDataSchema = import_zod21.z.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: import_zod21.z.object({
    notToExceedAmount: import_zod21.z.string().optional(),
    services: import_zod21.z.string().optional()
  }).optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: import_zod21.z.array(PackingMaterialRowSchema).optional(),
  damagePre: import_zod21.z.array(DamageRowSchema).optional(),
  damagePost: import_zod21.z.array(DamageRowSchema).optional(),
  paymentDetails: import_zod21.z.record(import_zod21.z.string()).optional(),
  summary: import_zod21.z.record(import_zod21.z.any()).optional()
});

// src/contracts/definitions/shared-contracts/preexistingDamage.ts
var PRE_EXISTING_DAMAGE = {
  id: "preexisting-damage",
  label: "Pre-Existing Property Damage Report",
  component: "PreExistingDamageReport",
  dualBatch: true,
  dualBatchKeys: {
    pre: ["customer1", "foreman1"],
    post: ["customer2", "foreman2"]
  },
  signatures: [
    { key: "customer1", label: "Customer Signature (Pickup)", required: true },
    { key: "foreman1", label: "Foreman Signature (Pickup)", required: true },
    { key: "customer2", label: "Customer Signature (Delivery)", required: true },
    { key: "foreman2", label: "Foreman Signature (Delivery)", required: true }
  ]
};

// src/contracts/definitions/pre-move.ts
var PRE_MOVE_CONTRACTS = [
  {
    id: "milburn-freight",
    label: "Milburn Freight Bill",
    component: "MilburnFreightBill",
    requiredSignatures: ["mover", "consignee"],
    signatures: [
      { key: "initials", label: "Initials" },
      { key: "shipper", label: "Shipper\u2019s Signature" },
      { key: "moverX", label: "X" },
      { key: "mover", label: "Mover\u2019s Signature", required: true },
      { key: "consignee", label: "Received by Consignee", required: true }
    ]
  },
  {
    id: "important-notice",
    label: "Important Notice About Your Move",
    component: "ImportantNotice",
    requiredSignatures: ["mover", "customer"],
    signatures: [
      { key: "mover", label: "Mover Signature", required: true },
      { key: "customer", label: "Customer Signature", required: true }
    ]
  },
  {
    id: "customer-information",
    label: "Customer Information",
    component: "CustomerInformation",
    requiredSignatures: ["customer"],
    signatures: [{ key: "customer", label: "Customer Signature", required: true }]
  },
  {
    id: "packing-materials",
    label: "Packing Materials Charges",
    component: "PackingMaterialsCharges",
    requiredSignatures: ["customer"],
    signatures: [{ key: "customer", label: "Customer Signature", required: true }]
  },
  PRE_EXISTING_DAMAGE
];

// src/contracts/definitions/post-move.ts
var POST_MOVE_CONTRACTS = [
  PRE_EXISTING_DAMAGE,
  {
    id: "credit-card-agreement",
    label: "Credit Card Payment Agreement",
    component: "CreditCardPaymentAgreement",
    requiredSignatures: ["customer"],
    signatures: [
      { key: "customer", label: "Customer Signature", required: true }
    ]
  },
  {
    id: "personal-belongings",
    label: "Personal Belongings Check",
    component: "PersonalBelongingsCheck",
    requiredSignatures: ["customer"],
    signatures: [
      { key: "customer", label: "Customer Signature", required: true }
    ]
  }
];

// src/user/user-core.ts
var import_zod22 = require("zod");
var UserRoleSchema = import_zod22.z.enum(["admin", "foreman"]);
var UserCoreSchema = import_zod22.z.object({
  id: import_zod22.z.string(),
  email: import_zod22.z.string().email(),
  name: import_zod22.z.string().nullable().optional(),
  nickname: import_zod22.z.string().nullable().optional(),
  phone: import_zod22.z.string().nullable().optional(),
  role: UserRoleSchema,
  isActive: import_zod22.z.boolean(),
  createdAt: import_zod22.z.string(),
  updatedAt: import_zod22.z.string()
});

// src/user/user-payloads.ts
var import_zod23 = require("zod");
var CreateUserPayloadSchema = import_zod23.z.object({
  email: import_zod23.z.string().email(),
  nickname: import_zod23.z.string().optional(),
  name: import_zod23.z.string().optional(),
  phone: import_zod23.z.string().optional(),
  role: UserRoleSchema
});
var UpdateUserPayloadSchema = import_zod23.z.object({
  name: import_zod23.z.string().optional(),
  nickname: import_zod23.z.string().optional(),
  phone: import_zod23.z.string().optional(),
  role: UserRoleSchema.optional(),
  isActive: import_zod23.z.boolean().optional()
});

// src/user/admin-user-response.ts
var import_zod24 = require("zod");
var AdminUserResponseSchema = import_zod24.z.object({
  id: import_zod24.z.string(),
  nickname: import_zod24.z.string().nullable().optional(),
  email: import_zod24.z.string(),
  name: import_zod24.z.string().nullable(),
  phone: import_zod24.z.string().nullable(),
  role: UserRoleSchema,
  isActive: import_zod24.z.boolean(),
  createdAt: import_zod24.z.string(),
  updatedAt: import_zod24.z.string(),
  // Admin-only meta
  jobCount: import_zod24.z.number().optional(),
  lastActiveAt: import_zod24.z.string().nullable().optional(),
  // Onboarding meta (computed on server)
  onboardingPending: import_zod24.z.boolean().optional(),
  onboardingExpired: import_zod24.z.boolean().optional()
});

// src/user/create-user-response.ts
var import_zod25 = require("zod");
var CreateUserResponseSchema = import_zod25.z.object({
  user: UserCoreSchema,
  onboardingLink: import_zod25.z.string().url()
});

// src/auth/login-response.ts
var import_zod26 = require("zod");
var LoginResponseSchema = import_zod26.z.object({
  token: import_zod26.z.string(),
  user: UserCoreSchema
});

// src/auth/login.ts
var import_zod27 = require("zod");
var LoginPayloadSchema = import_zod27.z.object({
  identifier: import_zod27.z.string(),
  password: import_zod27.z.string()
});

// src/auth/onboarding.ts
var import_zod28 = require("zod");
var OnboardingCompletePayloadSchema = import_zod28.z.object({
  password: import_zod28.z.string().min(6, "Password must be at least 6 characters")
});

// src/dashboard/range.ts
var import_zod29 = require("zod");
var DashboardRangeSchema = import_zod29.z.object({
  range: import_zod29.z.enum(["1m", "3m", "6m", "12m"]).default("1m")
});

// src/dashboard/stats.ts
var import_zod30 = require("zod");
var DashboardKpiMetricSchema = import_zod30.z.object({
  value: import_zod30.z.number(),
  // current period
  prevValue: import_zod30.z.number(),
  // previous period
  percent: import_zod30.z.number(),
  // change in %
  sparkline: import_zod30.z.array(import_zod30.z.number())
  // daily series
});
var DashboardKpisSchema = import_zod30.z.object({
  totalJobs: DashboardKpiMetricSchema,
  totalRevenue: DashboardKpiMetricSchema,
  extrasRevenue: DashboardKpiMetricSchema
});

// src/dashboard/status.ts
var import_zod31 = require("zod");
var JobsByStatusItemSchema = import_zod31.z.object({
  status: JobStatusEnum,
  count: import_zod31.z.number()
});

// src/dashboard/revenue-breakdown.ts
var import_zod32 = require("zod");
var RevenueBreakdownSchema = import_zod32.z.object({
  laborTotal: import_zod32.z.number(),
  // sum of laborTotal
  extrasTotal: import_zod32.z.number(),
  // sum of extrasTotal
  tipsTotal: import_zod32.z.number()
  // sum of tip
});

// src/dashboard/latest-jobs.ts
var import_zod33 = require("zod");
var LatestJobItemSchema = import_zod33.z.object({
  id: import_zod33.z.string(),
  client: import_zod33.z.string(),
  createdAt: import_zod33.z.string(),
  status: JobStatusEnum,
  summary: import_zod33.z.object({
    totalPrice: import_zod33.z.number()
  }).nullable().optional()
});

// src/dashboard/job-types.ts
var import_zod34 = require("zod");
var JobTypeBreakdownItemSchema = import_zod34.z.object({
  label: import_zod34.z.string(),
  // e.g. "Apartment", "Office", "Unspecified"
  count: import_zod34.z.number()
  // number of jobs with that moveType
});
var JobTypeBreakdownSchema = import_zod34.z.array(JobTypeBreakdownItemSchema);

// src/notifications/notification.ts
var import_zod35 = require("zod");
var NotificationSchema = import_zod35.z.object({
  id: import_zod35.z.string(),
  userId: import_zod35.z.string(),
  title: import_zod35.z.string(),
  message: import_zod35.z.string().nullish(),
  link: import_zod35.z.string().url().or(import_zod35.z.string().regex(/^\/.*/)).or(import_zod35.z.string().length(0)).or(import_zod35.z.null()).optional(),
  createdAt: import_zod35.z.coerce.date(),
  readAt: import_zod35.z.string().nullable()
});
