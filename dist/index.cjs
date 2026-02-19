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
  DamagePhotoSchema: () => DamagePhotoSchema,
  DamageRowSchema: () => DamageRowSchema,
  DashboardKpiMetricSchema: () => DashboardKpiMetricSchema,
  DashboardKpisSchema: () => DashboardKpisSchema,
  DashboardRangeSchema: () => DashboardRangeSchema,
  DeliverySchema: () => DeliverySchema,
  ExtraItemSchema: () => ExtraItemSchema,
  FieldJobUpdateSchema: () => FieldJobUpdateSchema,
  JobContractsSchema: () => JobContractsSchema,
  JobCoreSchema: () => JobCoreSchema,
  JobNoticeSchema: () => JobNoticeSchema,
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
  ReleaseRowSchema: () => ReleaseRowSchema,
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
var JobNoticeSchema = import_zod.z.object({
  notToExceedAmount: import_zod.z.string().nullable().optional(),
  other: import_zod.z.string().nullable().optional()
}).nullable().optional();
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
  notice: JobNoticeSchema,
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
var import_zod14 = require("zod");

// src/milburn/milburn-meta.ts
var import_zod3 = require("zod");
var MilburnMetaSchema = import_zod3.z.object({
  orderDate: import_zod3.z.string().optional(),
  moveDate: import_zod3.z.string().optional(),
  packDate: import_zod3.z.string().optional(),
  delDate: import_zod3.z.string().optional(),
  takenBy: import_zod3.z.string().optional(),
  bookletDate: import_zod3.z.string().optional(),
  receivedPayment: import_zod3.z.boolean().optional(),
  reference: import_zod3.z.string().optional(),
  client: import_zod3.z.string().optional()
});

// src/milburn/milburn-address.ts
var import_zod4 = require("zod");
var AddressBlockSchema = import_zod4.z.object({
  aptNo: import_zod4.z.string().optional(),
  phone: import_zod4.z.string().optional(),
  address: import_zod4.z.string().optional()
});

// src/milburn/milburn-delivery.ts
var import_zod5 = require("zod");
var DeliverySchema = import_zod5.z.object({
  note: import_zod5.z.string().optional(),
  notify: import_zod5.z.string().optional(),
  address: import_zod5.z.string().optional(),
  phone: import_zod5.z.string().optional(),
  nameOf: import_zod5.z.string().optional(),
  billNotifyAddress: import_zod5.z.string().optional(),
  shipperCantFurnish: import_zod5.z.boolean().optional()
});

// src/milburn/milburn-storage.ts
var import_zod6 = require("zod");
var StorageHourlySchema = import_zod6.z.object({
  storageType: import_zod6.z.string().optional(),
  nameOf: import_zod6.z.string().optional(),
  billNotifyAddress: import_zod6.z.string().optional(),
  firstDayRate: import_zod6.z.string().optional(),
  additionalDaysRate: import_zod6.z.string().optional(),
  warehouseHandlingRate: import_zod6.z.string().optional(),
  materials: import_zod6.z.array(import_zod6.z.array(import_zod6.z.string())).optional(),
  paymentTypes: import_zod6.z.array(import_zod6.z.string()).optional(),
  stripeInputs: import_zod6.z.array(import_zod6.z.array(import_zod6.z.string())).optional(),
  packersData: import_zod6.z.array(import_zod6.z.array(import_zod6.z.string())).optional(),
  noOfPackers: import_zod6.z.object({
    count: import_zod6.z.string().optional(),
    origin: import_zod6.z.boolean().optional(),
    dest: import_zod6.z.boolean().optional()
  }).optional(),
  issuance: import_zod6.z.object({
    waiveRequirement: import_zod6.z.boolean().optional(),
    shortNotice: import_zod6.z.boolean().optional()
  }).optional(),
  articles: import_zod6.z.object({
    highValue: import_zod6.z.boolean().optional(),
    officeFixtures: import_zod6.z.boolean().optional(),
    householdGoods: import_zod6.z.boolean().optional(),
    adviceWeightCharges: import_zod6.z.string().optional()
  }).optional(),
  hourlyRate: import_zod6.z.record(import_zod6.z.any()).optional(),
  valuation: import_zod6.z.record(import_zod6.z.any()).optional(),
  hundredweightRate: import_zod6.z.record(import_zod6.z.any()).optional(),
  packers: import_zod6.z.record(import_zod6.z.any()).optional(),
  packing: import_zod6.z.record(import_zod6.z.any()).optional(),
  unpacking: import_zod6.z.record(import_zod6.z.any()).optional(),
  pieceMoving: import_zod6.z.record(import_zod6.z.any()).optional(),
  itemsOfValue: import_zod6.z.array(import_zod6.z.record(import_zod6.z.any())).optional()
});

// src/milburn/milburn-valuation.ts
var import_zod7 = require("zod");
var ValuationSchema = import_zod7.z.object({
  choices: import_zod7.z.array(import_zod7.z.string()).optional(),
  selectedOption: import_zod7.z.string().optional(),
  transportationRates: import_zod7.z.array(import_zod7.z.string()).optional(),
  maxRates: import_zod7.z.array(import_zod7.z.string()).optional(),
  storageRates: import_zod7.z.array(import_zod7.z.string()).optional(),
  actualCashPerLb: import_zod7.z.string().optional(),
  fullValuePerLb: import_zod7.z.string().optional(),
  declaredValue: import_zod7.z.string().optional()
});

// src/milburn/milburn-packing.ts
var import_zod8 = require("zod");
var PackingMaterialRowSchema = import_zod8.z.object({
  item: import_zod8.z.string(),
  perItem: import_zod8.z.string(),
  packing: import_zod8.z.string(),
  unpacking: import_zod8.z.string(),
  qty: import_zod8.z.string(),
  total: import_zod8.z.string()
});

// src/milburn/milburn-customer-info.ts
var import_zod9 = require("zod");
var CustomerReleaseItemSchema = import_zod9.z.object({
  item: import_zod9.z.string(),
  reason: import_zod9.z.string(),
  initials: import_zod9.z.string()
});
var CustomerInfoSchema = import_zod9.z.object({
  doubleDriveInitial: import_zod9.z.string().optional(),
  suppliesInitial: import_zod9.z.string().optional(),
  liabilityInitial: import_zod9.z.string().optional(),
  pressboardOption: import_zod9.z.string().optional(),
  parkingTicketInitial: import_zod9.z.string().optional(),
  printName: import_zod9.z.string().optional(),
  releaseItems: import_zod9.z.array(CustomerReleaseItemSchema).optional()
});

// src/milburn/milburn-damage.ts
var import_zod10 = require("zod");
var DamagePhotoSchema = import_zod10.z.object({
  id: import_zod10.z.string(),
  storedPath: import_zod10.z.string(),
  localUri: import_zod10.z.string(),
  mime: import_zod10.z.literal("image/jpeg"),
  createdAt: import_zod10.z.number(),
  uploaded: import_zod10.z.boolean().optional(),
  remoteUrl: import_zod10.z.string().optional(),
  width: import_zod10.z.number().optional(),
  height: import_zod10.z.number().optional(),
  sizeBytes: import_zod10.z.number().optional()
});
var DamageRowSchema = import_zod10.z.object({
  item: import_zod10.z.string(),
  description: import_zod10.z.string(),
  photos: import_zod10.z.array(DamagePhotoSchema).optional()
});

// src/milburn/milburn-release.ts
var import_zod11 = require("zod");
var ReleaseRowSchema = import_zod11.z.object({
  item: import_zod11.z.string().optional().default(""),
  number: import_zod11.z.string().optional().default(""),
  reason: import_zod11.z.string().optional().default("")
});

// src/milburn/milburn-contract-signatures.ts
var import_zod12 = require("zod");
var ContractSignaturesConfigSchema = import_zod12.z.object({
  signatures: import_zod12.z.array(
    import_zod12.z.object({
      key: import_zod12.z.string(),
      label: import_zod12.z.string(),
      required: import_zod12.z.boolean().optional(),
      variant: import_zod12.z.enum(["inline", "stacked", "mark"]).optional()
    })
  ).optional(),
  requiredSignatures: import_zod12.z.array(import_zod12.z.string()).optional(),
  dualBatch: import_zod12.z.boolean().optional(),
  dualBatchKeys: import_zod12.z.object({
    pre: import_zod12.z.array(import_zod12.z.string()),
    post: import_zod12.z.array(import_zod12.z.string())
  }).optional()
});

// src/milburn/milburn-contract-data.ts
var import_zod13 = require("zod");
var MilburnContractDataSchema = import_zod13.z.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: import_zod13.z.object({
    notToExceedAmount: import_zod13.z.string().optional(),
    services: import_zod13.z.string().optional()
  }).optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: import_zod13.z.array(PackingMaterialRowSchema).optional(),
  damagePre: import_zod13.z.array(DamageRowSchema).optional(),
  damagePost: import_zod13.z.array(DamageRowSchema).optional(),
  releaseRows: import_zod13.z.array(ReleaseRowSchema).optional(),
  paymentDetails: import_zod13.z.record(import_zod13.z.string()).optional(),
  summary: import_zod13.z.record(import_zod13.z.any()).optional()
});

// src/job/job-summary.ts
var StepSchema = import_zod14.z.object({
  index: import_zod14.z.number(),
  step: import_zod14.z.object({
    type: import_zod14.z.string(),
    stopId: import_zod14.z.string().optional(),
    address: import_zod14.z.string().optional(),
    fromAddress: import_zod14.z.string().optional(),
    toAddress: import_zod14.z.string().optional(),
    phase: import_zod14.z.enum(["loading", "unloading", "driving"]).optional()
  }),
  duration: import_zod14.z.number()
});
var ExtraItemSchema = import_zod14.z.object({
  label: import_zod14.z.string(),
  quantity: import_zod14.z.number(),
  price: import_zod14.z.number(),
  unit: import_zod14.z.string().optional()
});
var JobSummarySchema = import_zod14.z.object({
  steps: import_zod14.z.array(StepSchema),
  duration: import_zod14.z.string(),
  billableHours: import_zod14.z.number(),
  laborTotal: import_zod14.z.number(),
  extras: import_zod14.z.array(ExtraItemSchema),
  extrasTotal: import_zod14.z.number(),
  tip: import_zod14.z.number(),
  grandTotal: import_zod14.z.number(),
  paymentMethod: import_zod14.z.enum(["Cash", "Credit Card", "PayPal"]),
  paymentDetails: import_zod14.z.record(import_zod14.z.string()).optional(),
  foremanId: import_zod14.z.string(),
  foremanName: import_zod14.z.string(),
  releaseRows: import_zod14.z.array(ReleaseRowSchema).optional()
});

// src/job/job-contracts.ts
var import_zod15 = require("zod");
var JobContractsSchema = import_zod15.z.object({
  data: import_zod15.z.record(import_zod15.z.unknown()).optional(),
  signatures: import_zod15.z.object({
    pre: import_zod15.z.record(
      import_zod15.z.record(
        import_zod15.z.string().nullable().optional()
      ).optional()
    ).optional(),
    post: import_zod15.z.record(
      import_zod15.z.record(
        import_zod15.z.string().nullable().optional()
      ).optional()
    ).optional()
  }).optional()
});

// src/job/job-signatures.ts
var import_zod16 = require("zod");
var SignatureScopeSchema = import_zod16.z.record(import_zod16.z.record(import_zod16.z.string().nullable()));
var ScopedSignaturesSchema = import_zod16.z.object({
  pre: SignatureScopeSchema,
  post: SignatureScopeSchema
});

// src/job/job-payloads.ts
var import_zod17 = require("zod");
var CreateJobPayloadSchema = import_zod17.z.object({
  job: JobCoreSchema,
  stops: StopsSchema,
  contracts: JobContractsSchema,
  summary: JobSummarySchema.optional()
});

// src/job/job-field-updates.ts
var import_zod18 = require("zod");
var FieldJobUpdateSchema = import_zod18.z.object({
  crew: import_zod18.z.array(import_zod18.z.string()).optional(),
  notes: import_zod18.z.string().optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional(),
  stops: StopsSchema.optional()
});

// src/job/admin-job-response.ts
var import_zod19 = require("zod");
var AdminJobStopSchema = import_zod19.z.object({
  id: import_zod19.z.number(),
  address: import_zod19.z.string(),
  loading: import_zod19.z.boolean(),
  unloading: import_zod19.z.boolean()
});
var AdminContractKeySchema = import_zod19.z.string();
var AdminContractListSchema = import_zod19.z.array(AdminContractKeySchema);
var AdminJobResponseSchema = import_zod19.z.object({
  id: import_zod19.z.string(),
  client: import_zod19.z.string(),
  phone: import_zod19.z.string().nullable(),
  email: import_zod19.z.string().nullable(),
  foremanId: import_zod19.z.string().nullable().optional(),
  foremanName: import_zod19.z.string().nullable().optional(),
  moveDate: import_zod19.z.string(),
  moveTime: import_zod19.z.string().nullable(),
  reference: import_zod19.z.string().nullable(),
  fromAddress: import_zod19.z.string(),
  toAddress: import_zod19.z.string(),
  truckCount: import_zod19.z.number(),
  crew: import_zod19.z.array(import_zod19.z.string()),
  notes: import_zod19.z.string().nullable(),
  volume: import_zod19.z.string().nullable().optional(),
  moveType: import_zod19.z.string().nullable().optional(),
  distance: import_zod19.z.string().nullable().optional(),
  rate: import_zod19.z.string().nullable().optional(),
  minimum: import_zod19.z.string().nullable().optional(),
  gasFee: import_zod19.z.string().nullable().optional(),
  // 👇 add this
  packageId: import_zod19.z.number().nullable().optional(),
  status: import_zod19.z.string(),
  createdAt: import_zod19.z.string(),
  updatedAt: import_zod19.z.string(),
  stops: import_zod19.z.array(AdminJobStopSchema),
  summary: import_zod19.z.object({
    data: JobSummarySchema
  }).nullable(),
  contracts: AdminContractListSchema
});

// src/job/jobSettings/JobSettings.ts
var import_zod20 = require("zod");
var JobSettingsSchema = import_zod20.z.object({
  // ------- Job Defaults -------
  defaultHourlyRate: import_zod20.z.number().nullable().optional(),
  defaultMinHours: import_zod20.z.number().nullable().optional(),
  defaultCrewSize: import_zod20.z.number().nullable().optional(),
  defaultTruckCount: import_zod20.z.number().nullable().optional(),
  defaultGasFee: import_zod20.z.number().nullable().optional(),
  defaultPerMileRate: import_zod20.z.number().nullable().optional(),
  defaultTollFee: import_zod20.z.number().nullable().optional(),
  // ------- Extras -------
  extras: import_zod20.z.array(
    ExtraItemSchema.extend({
      quantity: import_zod20.z.number().default(0)
    })
  ).nullable().optional(),
  // ------- Packing / Materials -------
  packingRate: import_zod20.z.number().nullable().optional(),
  unpackingRate: import_zod20.z.number().nullable().optional(),
  materialsMarkupPct: import_zod20.z.number().nullable().optional(),
  // ------- Storage -------
  storageFirstDayRate: import_zod20.z.number().nullable().optional(),
  storageAdditionalDayRate: import_zod20.z.number().nullable().optional(),
  storageHandlingRate: import_zod20.z.number().nullable().optional(),
  // ------- Valuation -------
  valuationActualCashPerLb: import_zod20.z.number().nullable().optional(),
  valuationFullValuePerLb: import_zod20.z.number().nullable().optional(),
  // ------- Fuel / Truck Fees -------
  fuelBaseFee: import_zod20.z.number().nullable().optional(),
  fuelPerMileRate: import_zod20.z.number().nullable().optional(),
  truckFeePerTruck: import_zod20.z.number().nullable().optional()
});

// src/job/jobSettings/JobPackage.ts
var import_zod21 = require("zod");
var PackageMarketingSchema = import_zod21.z.object({
  description: import_zod21.z.string().optional(),
  notes: import_zod21.z.string().optional(),
  finePrint: import_zod21.z.string().optional()
}).optional();
var JobPackageSchema = import_zod21.z.object({
  id: import_zod21.z.number(),
  name: import_zod21.z.string(),
  shortName: import_zod21.z.string().nullable().optional(),
  category: import_zod21.z.string().nullable().optional(),
  moverCount: import_zod21.z.number(),
  truckCount: import_zod21.z.number(),
  hourlyRate: import_zod21.z.number(),
  minHours: import_zod21.z.number(),
  flatFee: import_zod21.z.number().nullable().optional(),
  overtimeRate: import_zod21.z.number().nullable().optional(),
  includesGasFee: import_zod21.z.boolean().default(true),
  includesMileage: import_zod21.z.boolean().default(true),
  includesTolls: import_zod21.z.boolean().default(false),
  includesTaxes: import_zod21.z.boolean().default(true),
  includesTruckFee: import_zod21.z.boolean().default(true),
  includesPackingMaterials: import_zod21.z.boolean().default(false),
  includesDisassembly: import_zod21.z.boolean().default(false),
  includesReassembly: import_zod21.z.boolean().default(false),
  includesFloorProtection: import_zod21.z.boolean().default(false),
  includesWrapping: import_zod21.z.boolean().default(false),
  includesBasicInsurance: import_zod21.z.boolean().default(true),
  overrideGasFee: import_zod21.z.number().nullable().optional(),
  overridePerMileRate: import_zod21.z.number().nullable().optional(),
  overridePackingRate: import_zod21.z.number().nullable().optional(),
  overrideUnpackingRate: import_zod21.z.number().nullable().optional(),
  defaultCrewNames: import_zod21.z.array(import_zod21.z.string()).default([]),
  marketing: import_zod21.z.any().optional(),
  isActive: import_zod21.z.boolean().default(true)
});
var JobPackageCreateSchema = JobPackageSchema.omit({ id: true });

// src/job/job-partial-update.ts
var import_zod22 = require("zod");
var JobPartialUpdateSchema = import_zod22.z.object({
  job: JobCoreSchema.partial(),
  stops: StopsSchema.optional()
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
var import_zod23 = require("zod");
var UserRoleSchema = import_zod23.z.enum(["admin", "foreman"]);
var UserCoreSchema = import_zod23.z.object({
  id: import_zod23.z.string(),
  email: import_zod23.z.string().email(),
  name: import_zod23.z.string().nullable().optional(),
  nickname: import_zod23.z.string().nullable().optional(),
  phone: import_zod23.z.string().nullable().optional(),
  role: UserRoleSchema,
  isActive: import_zod23.z.boolean(),
  createdAt: import_zod23.z.string(),
  updatedAt: import_zod23.z.string()
});

// src/user/user-payloads.ts
var import_zod24 = require("zod");
var CreateUserPayloadSchema = import_zod24.z.object({
  email: import_zod24.z.string().email(),
  nickname: import_zod24.z.string().optional(),
  name: import_zod24.z.string().optional(),
  phone: import_zod24.z.string().optional(),
  role: UserRoleSchema
});
var UpdateUserPayloadSchema = import_zod24.z.object({
  name: import_zod24.z.string().optional(),
  nickname: import_zod24.z.string().optional(),
  phone: import_zod24.z.string().optional(),
  role: UserRoleSchema.optional(),
  isActive: import_zod24.z.boolean().optional()
});

// src/user/admin-user-response.ts
var import_zod25 = require("zod");
var AdminUserResponseSchema = import_zod25.z.object({
  id: import_zod25.z.string(),
  nickname: import_zod25.z.string().nullable().optional(),
  email: import_zod25.z.string(),
  name: import_zod25.z.string().nullable(),
  phone: import_zod25.z.string().nullable(),
  role: UserRoleSchema,
  isActive: import_zod25.z.boolean(),
  createdAt: import_zod25.z.string(),
  updatedAt: import_zod25.z.string(),
  // Admin-only meta
  jobCount: import_zod25.z.number().optional(),
  lastActiveAt: import_zod25.z.string().nullable().optional(),
  // Onboarding meta (computed on server)
  onboardingPending: import_zod25.z.boolean().optional(),
  onboardingExpired: import_zod25.z.boolean().optional()
});

// src/user/create-user-response.ts
var import_zod26 = require("zod");
var CreateUserResponseSchema = import_zod26.z.object({
  user: UserCoreSchema,
  onboardingLink: import_zod26.z.string().url()
});

// src/auth/login-response.ts
var import_zod27 = require("zod");
var LoginResponseSchema = import_zod27.z.object({
  token: import_zod27.z.string(),
  user: UserCoreSchema
});

// src/auth/login.ts
var import_zod28 = require("zod");
var LoginPayloadSchema = import_zod28.z.object({
  identifier: import_zod28.z.string(),
  password: import_zod28.z.string()
});

// src/auth/onboarding.ts
var import_zod29 = require("zod");
var OnboardingCompletePayloadSchema = import_zod29.z.object({
  password: import_zod29.z.string().min(6, "Password must be at least 6 characters")
});

// src/dashboard/range.ts
var import_zod30 = require("zod");
var DashboardRangeSchema = import_zod30.z.object({
  range: import_zod30.z.enum(["1m", "3m", "6m", "12m"]).default("1m")
});

// src/dashboard/stats.ts
var import_zod31 = require("zod");
var DashboardKpiMetricSchema = import_zod31.z.object({
  value: import_zod31.z.number(),
  // current period
  prevValue: import_zod31.z.number(),
  // previous period
  percent: import_zod31.z.number(),
  // change in %
  sparkline: import_zod31.z.array(import_zod31.z.number())
  // daily series
});
var DashboardKpisSchema = import_zod31.z.object({
  totalJobs: DashboardKpiMetricSchema,
  totalRevenue: DashboardKpiMetricSchema,
  extrasRevenue: DashboardKpiMetricSchema
});

// src/dashboard/status.ts
var import_zod32 = require("zod");
var JobsByStatusItemSchema = import_zod32.z.object({
  status: JobStatusEnum,
  count: import_zod32.z.number()
});

// src/dashboard/revenue-breakdown.ts
var import_zod33 = require("zod");
var RevenueBreakdownSchema = import_zod33.z.object({
  laborTotal: import_zod33.z.number(),
  // sum of laborTotal
  extrasTotal: import_zod33.z.number(),
  // sum of extrasTotal
  tipsTotal: import_zod33.z.number()
  // sum of tip
});

// src/dashboard/latest-jobs.ts
var import_zod34 = require("zod");
var LatestJobItemSchema = import_zod34.z.object({
  id: import_zod34.z.string(),
  client: import_zod34.z.string(),
  createdAt: import_zod34.z.string(),
  status: JobStatusEnum,
  summary: import_zod34.z.object({
    totalPrice: import_zod34.z.number()
  }).nullable().optional()
});

// src/dashboard/job-types.ts
var import_zod35 = require("zod");
var JobTypeBreakdownItemSchema = import_zod35.z.object({
  label: import_zod35.z.string(),
  // e.g. "Apartment", "Office", "Unspecified"
  count: import_zod35.z.number()
  // number of jobs with that moveType
});
var JobTypeBreakdownSchema = import_zod35.z.array(JobTypeBreakdownItemSchema);

// src/notifications/notification.ts
var import_zod36 = require("zod");
var NotificationSchema = import_zod36.z.object({
  id: import_zod36.z.string(),
  userId: import_zod36.z.string(),
  title: import_zod36.z.string(),
  message: import_zod36.z.string().nullish(),
  link: import_zod36.z.string().url().or(import_zod36.z.string().regex(/^\/.*/)).or(import_zod36.z.string().length(0)).or(import_zod36.z.null()).optional(),
  createdAt: import_zod36.z.coerce.date(),
  readAt: import_zod36.z.string().nullable()
});
