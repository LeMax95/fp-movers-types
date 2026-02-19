// src/job/job-core.ts
import { z } from "zod";
var JobStatusEnum = z.enum([
  "draft",
  "scheduled",
  "in_progress",
  "completed",
  "cancelled"
]);
var JobCoreSchema = z.object({
  id: z.string(),
  client: z.string(),
  phone: z.string().optional(),
  email: z.string().optional(),
  status: JobStatusEnum,
  foremanId: z.string().nullable().optional(),
  moveDate: z.string(),
  moveTime: z.string().nullable().optional(),
  reference: z.string().nullable().optional(),
  from: z.string(),
  to: z.string(),
  truckCount: z.number(),
  crew: z.array(z.string()).optional(),
  notes: z.string().nullable().optional(),
  // Extra optional FE fields
  volume: z.string().optional(),
  moveType: z.string().optional(),
  distance: z.string().optional(),
  rate: z.string().optional(),
  minimum: z.string().optional(),
  gasFee: z.string().optional(),
  // Required
  contractVersion: z.number(),
  // NEW — correct Zod syntax
  packageId: z.number().nullable().optional()
});

// src/job/job-stops.ts
import { z as z2 } from "zod";
var StopSchema = z2.object({
  address: z2.string(),
  loading: z2.boolean().optional(),
  unloading: z2.boolean().optional()
});
var StopsSchema = z2.array(StopSchema);

// src/job/job-summary.ts
import { z as z14 } from "zod";

// src/milburn/milburn-meta.ts
import { z as z3 } from "zod";
var MilburnMetaSchema = z3.object({
  orderDate: z3.string().optional(),
  moveDate: z3.string().optional(),
  packDate: z3.string().optional(),
  delDate: z3.string().optional(),
  takenBy: z3.string().optional(),
  bookletDate: z3.string().optional(),
  receivedPayment: z3.boolean().optional(),
  reference: z3.string().optional(),
  client: z3.string().optional()
});

// src/milburn/milburn-address.ts
import { z as z4 } from "zod";
var AddressBlockSchema = z4.object({
  aptNo: z4.string().optional(),
  phone: z4.string().optional(),
  address: z4.string().optional()
});

// src/milburn/milburn-delivery.ts
import { z as z5 } from "zod";
var DeliverySchema = z5.object({
  note: z5.string().optional(),
  notify: z5.string().optional(),
  address: z5.string().optional(),
  phone: z5.string().optional(),
  nameOf: z5.string().optional(),
  billNotifyAddress: z5.string().optional(),
  shipperCantFurnish: z5.boolean().optional()
});

// src/milburn/milburn-storage.ts
import { z as z6 } from "zod";
var StorageHourlySchema = z6.object({
  storageType: z6.string().optional(),
  nameOf: z6.string().optional(),
  billNotifyAddress: z6.string().optional(),
  firstDayRate: z6.string().optional(),
  additionalDaysRate: z6.string().optional(),
  warehouseHandlingRate: z6.string().optional(),
  materials: z6.array(z6.array(z6.string())).optional(),
  paymentTypes: z6.array(z6.string()).optional(),
  stripeInputs: z6.array(z6.array(z6.string())).optional(),
  packersData: z6.array(z6.array(z6.string())).optional(),
  noOfPackers: z6.object({
    count: z6.string().optional(),
    origin: z6.boolean().optional(),
    dest: z6.boolean().optional()
  }).optional(),
  issuance: z6.object({
    waiveRequirement: z6.boolean().optional(),
    shortNotice: z6.boolean().optional()
  }).optional(),
  articles: z6.object({
    highValue: z6.boolean().optional(),
    officeFixtures: z6.boolean().optional(),
    householdGoods: z6.boolean().optional(),
    adviceWeightCharges: z6.string().optional()
  }).optional(),
  hourlyRate: z6.record(z6.any()).optional(),
  valuation: z6.record(z6.any()).optional(),
  hundredweightRate: z6.record(z6.any()).optional(),
  packers: z6.record(z6.any()).optional(),
  packing: z6.record(z6.any()).optional(),
  unpacking: z6.record(z6.any()).optional(),
  pieceMoving: z6.record(z6.any()).optional(),
  itemsOfValue: z6.array(z6.record(z6.any())).optional()
});

// src/milburn/milburn-valuation.ts
import { z as z7 } from "zod";
var ValuationSchema = z7.object({
  choices: z7.array(z7.string()).optional(),
  selectedOption: z7.string().optional(),
  transportationRates: z7.array(z7.string()).optional(),
  maxRates: z7.array(z7.string()).optional(),
  storageRates: z7.array(z7.string()).optional(),
  actualCashPerLb: z7.string().optional(),
  fullValuePerLb: z7.string().optional(),
  declaredValue: z7.string().optional()
});

// src/milburn/milburn-packing.ts
import { z as z8 } from "zod";
var PackingMaterialRowSchema = z8.object({
  item: z8.string(),
  perItem: z8.string(),
  packing: z8.string(),
  unpacking: z8.string(),
  qty: z8.string(),
  total: z8.string()
});

// src/milburn/milburn-customer-info.ts
import { z as z9 } from "zod";
var CustomerReleaseItemSchema = z9.object({
  item: z9.string(),
  reason: z9.string(),
  initials: z9.string()
});
var CustomerInfoSchema = z9.object({
  doubleDriveInitial: z9.string().optional(),
  suppliesInitial: z9.string().optional(),
  liabilityInitial: z9.string().optional(),
  pressboardOption: z9.string().optional(),
  parkingTicketInitial: z9.string().optional(),
  printName: z9.string().optional(),
  releaseItems: z9.array(CustomerReleaseItemSchema).optional()
});

// src/milburn/milburn-damage.ts
import { z as z10 } from "zod";
var DamagePhotoSchema = z10.object({
  id: z10.string(),
  storedPath: z10.string(),
  localUri: z10.string(),
  mime: z10.literal("image/jpeg"),
  createdAt: z10.number(),
  uploaded: z10.boolean().optional(),
  remoteUrl: z10.string().optional(),
  width: z10.number().optional(),
  height: z10.number().optional(),
  sizeBytes: z10.number().optional()
});
var DamageRowSchema = z10.object({
  item: z10.string(),
  description: z10.string(),
  photos: z10.array(DamagePhotoSchema).optional()
});

// src/milburn/milburn-release.ts
import { z as z11 } from "zod";
var ReleaseRowSchema = z11.object({
  item: z11.string().optional().default(""),
  number: z11.string().optional().default(""),
  reason: z11.string().optional().default("")
});

// src/milburn/milburn-contract-signatures.ts
import { z as z12 } from "zod";
var ContractSignaturesConfigSchema = z12.object({
  signatures: z12.array(
    z12.object({
      key: z12.string(),
      label: z12.string(),
      required: z12.boolean().optional(),
      variant: z12.enum(["inline", "stacked", "mark"]).optional()
    })
  ).optional(),
  requiredSignatures: z12.array(z12.string()).optional(),
  dualBatch: z12.boolean().optional(),
  dualBatchKeys: z12.object({
    pre: z12.array(z12.string()),
    post: z12.array(z12.string())
  }).optional()
});

// src/milburn/milburn-contract-data.ts
import { z as z13 } from "zod";
var MilburnContractDataSchema = z13.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: z13.object({
    notToExceedAmount: z13.string().optional(),
    services: z13.string().optional()
  }).optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: z13.array(PackingMaterialRowSchema).optional(),
  damagePre: z13.array(DamageRowSchema).optional(),
  damagePost: z13.array(DamageRowSchema).optional(),
  releaseRows: z13.array(ReleaseRowSchema).optional(),
  paymentDetails: z13.record(z13.string()).optional(),
  summary: z13.record(z13.any()).optional()
});

// src/job/job-summary.ts
var StepSchema = z14.object({
  index: z14.number(),
  step: z14.object({
    type: z14.string(),
    stopId: z14.string().optional(),
    address: z14.string().optional(),
    fromAddress: z14.string().optional(),
    toAddress: z14.string().optional(),
    phase: z14.enum(["loading", "unloading", "driving"]).optional()
  }),
  duration: z14.number()
});
var ExtraItemSchema = z14.object({
  label: z14.string(),
  quantity: z14.number(),
  price: z14.number(),
  unit: z14.string().optional()
});
var JobSummarySchema = z14.object({
  steps: z14.array(StepSchema),
  duration: z14.string(),
  billableHours: z14.number(),
  laborTotal: z14.number(),
  extras: z14.array(ExtraItemSchema),
  extrasTotal: z14.number(),
  tip: z14.number(),
  grandTotal: z14.number(),
  paymentMethod: z14.enum(["Cash", "Credit Card", "PayPal"]),
  paymentDetails: z14.record(z14.string()).optional(),
  foremanId: z14.string(),
  foremanName: z14.string(),
  releaseRows: z14.array(ReleaseRowSchema).optional()
});

// src/job/job-contracts.ts
import { z as z15 } from "zod";
var JobContractsSchema = z15.object({
  data: z15.record(z15.unknown()).optional(),
  signatures: z15.object({
    pre: z15.record(
      z15.record(
        z15.string().nullable().optional()
      ).optional()
    ).optional(),
    post: z15.record(
      z15.record(
        z15.string().nullable().optional()
      ).optional()
    ).optional()
  }).optional()
});

// src/job/job-signatures.ts
import { z as z16 } from "zod";
var SignatureScopeSchema = z16.record(z16.record(z16.string().nullable()));
var ScopedSignaturesSchema = z16.object({
  pre: SignatureScopeSchema,
  post: SignatureScopeSchema
});

// src/job/job-payloads.ts
import { z as z17 } from "zod";
var CreateJobPayloadSchema = z17.object({
  job: JobCoreSchema,
  stops: StopsSchema,
  contracts: JobContractsSchema,
  summary: JobSummarySchema.optional()
});

// src/job/job-field-updates.ts
import { z as z18 } from "zod";
var FieldJobUpdateSchema = z18.object({
  crew: z18.array(z18.string()).optional(),
  notes: z18.string().optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional(),
  stops: StopsSchema.optional()
});

// src/job/admin-job-response.ts
import { z as z19 } from "zod";
var AdminJobStopSchema = z19.object({
  id: z19.number(),
  address: z19.string(),
  loading: z19.boolean(),
  unloading: z19.boolean()
});
var AdminContractKeySchema = z19.string();
var AdminContractListSchema = z19.array(AdminContractKeySchema);
var AdminJobResponseSchema = z19.object({
  id: z19.string(),
  client: z19.string(),
  phone: z19.string().nullable(),
  email: z19.string().nullable(),
  foremanId: z19.string().nullable().optional(),
  foremanName: z19.string().nullable().optional(),
  moveDate: z19.string(),
  moveTime: z19.string().nullable(),
  reference: z19.string().nullable(),
  fromAddress: z19.string(),
  toAddress: z19.string(),
  truckCount: z19.number(),
  crew: z19.array(z19.string()),
  notes: z19.string().nullable(),
  volume: z19.string().nullable().optional(),
  moveType: z19.string().nullable().optional(),
  distance: z19.string().nullable().optional(),
  rate: z19.string().nullable().optional(),
  minimum: z19.string().nullable().optional(),
  gasFee: z19.string().nullable().optional(),
  // 👇 add this
  packageId: z19.number().nullable().optional(),
  status: z19.string(),
  createdAt: z19.string(),
  updatedAt: z19.string(),
  stops: z19.array(AdminJobStopSchema),
  summary: z19.object({
    data: JobSummarySchema
  }).nullable(),
  contracts: AdminContractListSchema
});

// src/job/jobSettings/JobSettings.ts
import { z as z20 } from "zod";
var JobSettingsSchema = z20.object({
  // ------- Job Defaults -------
  defaultHourlyRate: z20.number().nullable().optional(),
  defaultMinHours: z20.number().nullable().optional(),
  defaultCrewSize: z20.number().nullable().optional(),
  defaultTruckCount: z20.number().nullable().optional(),
  defaultGasFee: z20.number().nullable().optional(),
  defaultPerMileRate: z20.number().nullable().optional(),
  defaultTollFee: z20.number().nullable().optional(),
  // ------- Extras -------
  extras: z20.array(
    ExtraItemSchema.extend({
      quantity: z20.number().default(0)
    })
  ).nullable().optional(),
  // ------- Packing / Materials -------
  packingRate: z20.number().nullable().optional(),
  unpackingRate: z20.number().nullable().optional(),
  materialsMarkupPct: z20.number().nullable().optional(),
  // ------- Storage -------
  storageFirstDayRate: z20.number().nullable().optional(),
  storageAdditionalDayRate: z20.number().nullable().optional(),
  storageHandlingRate: z20.number().nullable().optional(),
  // ------- Valuation -------
  valuationActualCashPerLb: z20.number().nullable().optional(),
  valuationFullValuePerLb: z20.number().nullable().optional(),
  // ------- Fuel / Truck Fees -------
  fuelBaseFee: z20.number().nullable().optional(),
  fuelPerMileRate: z20.number().nullable().optional(),
  truckFeePerTruck: z20.number().nullable().optional()
});

// src/job/jobSettings/JobPackage.ts
import { z as z21 } from "zod";
var PackageMarketingSchema = z21.object({
  description: z21.string().optional(),
  notes: z21.string().optional(),
  finePrint: z21.string().optional()
}).optional();
var JobPackageSchema = z21.object({
  id: z21.number(),
  name: z21.string(),
  shortName: z21.string().nullable().optional(),
  category: z21.string().nullable().optional(),
  moverCount: z21.number(),
  truckCount: z21.number(),
  hourlyRate: z21.number(),
  minHours: z21.number(),
  flatFee: z21.number().nullable().optional(),
  overtimeRate: z21.number().nullable().optional(),
  includesGasFee: z21.boolean().default(true),
  includesMileage: z21.boolean().default(true),
  includesTolls: z21.boolean().default(false),
  includesTaxes: z21.boolean().default(true),
  includesTruckFee: z21.boolean().default(true),
  includesPackingMaterials: z21.boolean().default(false),
  includesDisassembly: z21.boolean().default(false),
  includesReassembly: z21.boolean().default(false),
  includesFloorProtection: z21.boolean().default(false),
  includesWrapping: z21.boolean().default(false),
  includesBasicInsurance: z21.boolean().default(true),
  overrideGasFee: z21.number().nullable().optional(),
  overridePerMileRate: z21.number().nullable().optional(),
  overridePackingRate: z21.number().nullable().optional(),
  overrideUnpackingRate: z21.number().nullable().optional(),
  defaultCrewNames: z21.array(z21.string()).default([]),
  marketing: z21.any().optional(),
  isActive: z21.boolean().default(true)
});
var JobPackageCreateSchema = JobPackageSchema.omit({ id: true });

// src/job/job-partial-update.ts
import { z as z22 } from "zod";
var JobPartialUpdateSchema = z22.object({
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
import { z as z23 } from "zod";
var UserRoleSchema = z23.enum(["admin", "foreman"]);
var UserCoreSchema = z23.object({
  id: z23.string(),
  email: z23.string().email(),
  name: z23.string().nullable().optional(),
  nickname: z23.string().nullable().optional(),
  phone: z23.string().nullable().optional(),
  role: UserRoleSchema,
  isActive: z23.boolean(),
  createdAt: z23.string(),
  updatedAt: z23.string()
});

// src/user/user-payloads.ts
import { z as z24 } from "zod";
var CreateUserPayloadSchema = z24.object({
  email: z24.string().email(),
  nickname: z24.string().optional(),
  name: z24.string().optional(),
  phone: z24.string().optional(),
  role: UserRoleSchema
});
var UpdateUserPayloadSchema = z24.object({
  name: z24.string().optional(),
  nickname: z24.string().optional(),
  phone: z24.string().optional(),
  role: UserRoleSchema.optional(),
  isActive: z24.boolean().optional()
});

// src/user/admin-user-response.ts
import { z as z25 } from "zod";
var AdminUserResponseSchema = z25.object({
  id: z25.string(),
  nickname: z25.string().nullable().optional(),
  email: z25.string(),
  name: z25.string().nullable(),
  phone: z25.string().nullable(),
  role: UserRoleSchema,
  isActive: z25.boolean(),
  createdAt: z25.string(),
  updatedAt: z25.string(),
  // Admin-only meta
  jobCount: z25.number().optional(),
  lastActiveAt: z25.string().nullable().optional(),
  // Onboarding meta (computed on server)
  onboardingPending: z25.boolean().optional(),
  onboardingExpired: z25.boolean().optional()
});

// src/user/create-user-response.ts
import { z as z26 } from "zod";
var CreateUserResponseSchema = z26.object({
  user: UserCoreSchema,
  onboardingLink: z26.string().url()
});

// src/auth/login-response.ts
import { z as z27 } from "zod";
var LoginResponseSchema = z27.object({
  token: z27.string(),
  user: UserCoreSchema
});

// src/auth/login.ts
import { z as z28 } from "zod";
var LoginPayloadSchema = z28.object({
  identifier: z28.string(),
  password: z28.string()
});

// src/auth/onboarding.ts
import { z as z29 } from "zod";
var OnboardingCompletePayloadSchema = z29.object({
  password: z29.string().min(6, "Password must be at least 6 characters")
});

// src/dashboard/range.ts
import { z as z30 } from "zod";
var DashboardRangeSchema = z30.object({
  range: z30.enum(["1m", "3m", "6m", "12m"]).default("1m")
});

// src/dashboard/stats.ts
import { z as z31 } from "zod";
var DashboardKpiMetricSchema = z31.object({
  value: z31.number(),
  // current period
  prevValue: z31.number(),
  // previous period
  percent: z31.number(),
  // change in %
  sparkline: z31.array(z31.number())
  // daily series
});
var DashboardKpisSchema = z31.object({
  totalJobs: DashboardKpiMetricSchema,
  totalRevenue: DashboardKpiMetricSchema,
  extrasRevenue: DashboardKpiMetricSchema
});

// src/dashboard/status.ts
import { z as z32 } from "zod";
var JobsByStatusItemSchema = z32.object({
  status: JobStatusEnum,
  count: z32.number()
});

// src/dashboard/revenue-breakdown.ts
import { z as z33 } from "zod";
var RevenueBreakdownSchema = z33.object({
  laborTotal: z33.number(),
  // sum of laborTotal
  extrasTotal: z33.number(),
  // sum of extrasTotal
  tipsTotal: z33.number()
  // sum of tip
});

// src/dashboard/latest-jobs.ts
import { z as z34 } from "zod";
var LatestJobItemSchema = z34.object({
  id: z34.string(),
  client: z34.string(),
  createdAt: z34.string(),
  status: JobStatusEnum,
  summary: z34.object({
    totalPrice: z34.number()
  }).nullable().optional()
});

// src/dashboard/job-types.ts
import { z as z35 } from "zod";
var JobTypeBreakdownItemSchema = z35.object({
  label: z35.string(),
  // e.g. "Apartment", "Office", "Unspecified"
  count: z35.number()
  // number of jobs with that moveType
});
var JobTypeBreakdownSchema = z35.array(JobTypeBreakdownItemSchema);

// src/notifications/notification.ts
import { z as z36 } from "zod";
var NotificationSchema = z36.object({
  id: z36.string(),
  userId: z36.string(),
  title: z36.string(),
  message: z36.string().nullish(),
  link: z36.string().url().or(z36.string().regex(/^\/.*/)).or(z36.string().length(0)).or(z36.null()).optional(),
  createdAt: z36.coerce.date(),
  readAt: z36.string().nullable()
});
export {
  AddressBlockSchema,
  AdminContractKeySchema,
  AdminContractListSchema,
  AdminJobResponseSchema,
  AdminJobStopSchema,
  AdminUserResponseSchema,
  ContractSignaturesConfigSchema,
  CreateJobPayloadSchema,
  CreateUserPayloadSchema,
  CreateUserResponseSchema,
  CustomerInfoSchema,
  CustomerReleaseItemSchema,
  DamagePhotoSchema,
  DamageRowSchema,
  DashboardKpiMetricSchema,
  DashboardKpisSchema,
  DashboardRangeSchema,
  DeliverySchema,
  ExtraItemSchema,
  FieldJobUpdateSchema,
  JobContractsSchema,
  JobCoreSchema,
  JobPackageCreateSchema,
  JobPackageSchema,
  JobPartialUpdateSchema,
  JobSettingsSchema,
  JobStatusEnum,
  JobSummarySchema,
  JobTypeBreakdownItemSchema,
  JobTypeBreakdownSchema,
  JobsByStatusItemSchema,
  LatestJobItemSchema,
  LoginPayloadSchema,
  LoginResponseSchema,
  MilburnContractDataSchema,
  MilburnMetaSchema,
  NotificationSchema,
  OnboardingCompletePayloadSchema,
  POST_MOVE_CONTRACTS,
  PRE_MOVE_CONTRACTS,
  PackageMarketingSchema,
  PackingMaterialRowSchema,
  ReleaseRowSchema,
  RevenueBreakdownSchema,
  ScopedSignaturesSchema,
  SignatureScopeSchema,
  StepSchema,
  StopSchema,
  StopsSchema,
  StorageHourlySchema,
  UpdateUserPayloadSchema,
  UserCoreSchema,
  UserRoleSchema,
  ValuationSchema
};
