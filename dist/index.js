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
import { z as z3 } from "zod";
var StepSchema = z3.object({
  index: z3.number(),
  step: z3.object({
    type: z3.string(),
    stopId: z3.string().optional(),
    address: z3.string().optional(),
    fromAddress: z3.string().optional(),
    toAddress: z3.string().optional(),
    phase: z3.enum(["loading", "unloading", "driving"]).optional()
  }),
  duration: z3.number()
});
var ExtraItemSchema = z3.object({
  label: z3.string(),
  quantity: z3.number(),
  price: z3.number(),
  unit: z3.string().optional()
});
var JobSummarySchema = z3.object({
  steps: z3.array(StepSchema),
  duration: z3.string(),
  billableHours: z3.number(),
  laborTotal: z3.number(),
  extras: z3.array(ExtraItemSchema),
  extrasTotal: z3.number(),
  tip: z3.number(),
  grandTotal: z3.number(),
  paymentMethod: z3.enum(["Cash", "Credit Card", "PayPal"]),
  paymentDetails: z3.record(z3.string()).optional(),
  foremanId: z3.string(),
  foremanName: z3.string()
});

// src/job/job-contracts.ts
import { z as z4 } from "zod";
var JobContractsSchema = z4.object({
  data: z4.record(z4.unknown()).optional(),
  signatures: z4.object({
    pre: z4.record(
      z4.record(
        z4.string().nullable().optional()
      ).optional()
    ).optional(),
    post: z4.record(
      z4.record(
        z4.string().nullable().optional()
      ).optional()
    ).optional()
  }).optional()
});

// src/job/job-signatures.ts
import { z as z5 } from "zod";
var SignatureScopeSchema = z5.record(z5.record(z5.string().nullable()));
var ScopedSignaturesSchema = z5.object({
  pre: SignatureScopeSchema,
  post: SignatureScopeSchema
});

// src/job/job-payloads.ts
import { z as z6 } from "zod";
var CreateJobPayloadSchema = z6.object({
  job: JobCoreSchema,
  stops: StopsSchema,
  contracts: JobContractsSchema,
  summary: JobSummarySchema.optional()
});

// src/job/job-field-updates.ts
import { z as z7 } from "zod";
var FieldJobUpdateSchema = z7.object({
  crew: z7.array(z7.string()).optional(),
  notes: z7.string().optional(),
  status: JobStatusEnum.optional(),
  summary: JobSummarySchema.optional(),
  signatures: ScopedSignaturesSchema.optional()
});

// src/job/admin-job-response.ts
import { z as z8 } from "zod";
var AdminJobStopSchema = z8.object({
  id: z8.number(),
  address: z8.string(),
  loading: z8.boolean(),
  unloading: z8.boolean()
});
var AdminContractKeySchema = z8.string();
var AdminContractListSchema = z8.array(AdminContractKeySchema);
var AdminJobResponseSchema = z8.object({
  id: z8.string(),
  client: z8.string(),
  phone: z8.string().nullable(),
  email: z8.string().nullable(),
  foremanId: z8.string().nullable().optional(),
  foremanName: z8.string().nullable().optional(),
  moveDate: z8.string(),
  moveTime: z8.string().nullable(),
  reference: z8.string().nullable(),
  fromAddress: z8.string(),
  toAddress: z8.string(),
  truckCount: z8.number(),
  crew: z8.array(z8.string()),
  notes: z8.string().nullable(),
  volume: z8.string().nullable().optional(),
  moveType: z8.string().nullable().optional(),
  distance: z8.string().nullable().optional(),
  rate: z8.string().nullable().optional(),
  minimum: z8.string().nullable().optional(),
  gasFee: z8.string().nullable().optional(),
  // 👇 add this
  packageId: z8.number().nullable().optional(),
  status: z8.string(),
  createdAt: z8.string(),
  updatedAt: z8.string(),
  stops: z8.array(AdminJobStopSchema),
  summary: z8.object({
    data: JobSummarySchema
  }).nullable(),
  contracts: AdminContractListSchema
});

// src/job/jobSettings/JobSettings.ts
import { z as z9 } from "zod";
var JobSettingsSchema = z9.object({
  // ------- Job Defaults -------
  defaultHourlyRate: z9.number().nullable().optional(),
  defaultMinHours: z9.number().nullable().optional(),
  defaultCrewSize: z9.number().nullable().optional(),
  defaultTruckCount: z9.number().nullable().optional(),
  defaultGasFee: z9.number().nullable().optional(),
  defaultPerMileRate: z9.number().nullable().optional(),
  defaultTollFee: z9.number().nullable().optional(),
  // ------- Extras -------
  extras: z9.array(
    ExtraItemSchema.extend({
      quantity: z9.number().default(0)
    })
  ).nullable().optional(),
  // ------- Packing / Materials -------
  packingRate: z9.number().nullable().optional(),
  unpackingRate: z9.number().nullable().optional(),
  materialsMarkupPct: z9.number().nullable().optional(),
  // ------- Storage -------
  storageFirstDayRate: z9.number().nullable().optional(),
  storageAdditionalDayRate: z9.number().nullable().optional(),
  storageHandlingRate: z9.number().nullable().optional(),
  // ------- Valuation -------
  valuationActualCashPerLb: z9.number().nullable().optional(),
  valuationFullValuePerLb: z9.number().nullable().optional(),
  // ------- Fuel / Truck Fees -------
  fuelBaseFee: z9.number().nullable().optional(),
  fuelPerMileRate: z9.number().nullable().optional(),
  truckFeePerTruck: z9.number().nullable().optional()
});

// src/job/jobSettings/JobPackage.ts
import { z as z10 } from "zod";
var PackageMarketingSchema = z10.object({
  description: z10.string().optional(),
  notes: z10.string().optional(),
  finePrint: z10.string().optional()
}).optional();
var JobPackageSchema = z10.object({
  id: z10.number(),
  name: z10.string(),
  shortName: z10.string().nullable().optional(),
  category: z10.string().nullable().optional(),
  moverCount: z10.number(),
  truckCount: z10.number(),
  hourlyRate: z10.number(),
  minHours: z10.number(),
  flatFee: z10.number().nullable().optional(),
  overtimeRate: z10.number().nullable().optional(),
  includesGasFee: z10.boolean().default(true),
  includesMileage: z10.boolean().default(true),
  includesTolls: z10.boolean().default(false),
  includesTaxes: z10.boolean().default(true),
  includesTruckFee: z10.boolean().default(true),
  includesPackingMaterials: z10.boolean().default(false),
  includesDisassembly: z10.boolean().default(false),
  includesReassembly: z10.boolean().default(false),
  includesFloorProtection: z10.boolean().default(false),
  includesWrapping: z10.boolean().default(false),
  includesBasicInsurance: z10.boolean().default(true),
  overrideGasFee: z10.number().nullable().optional(),
  overridePerMileRate: z10.number().nullable().optional(),
  overridePackingRate: z10.number().nullable().optional(),
  overrideUnpackingRate: z10.number().nullable().optional(),
  defaultCrewNames: z10.array(z10.string()).default([]),
  marketing: z10.any().optional(),
  isActive: z10.boolean().default(true)
});
var JobPackageCreateSchema = JobPackageSchema.omit({ id: true });

// src/job/job-partial-update.ts
import { z as z11 } from "zod";
var JobPartialUpdateSchema = z11.object({
  job: JobCoreSchema.partial(),
  stops: StopsSchema.optional()
});

// src/milburn/milburn-meta.ts
import { z as z12 } from "zod";
var MilburnMetaSchema = z12.object({
  orderDate: z12.string().optional(),
  moveDate: z12.string().optional(),
  packDate: z12.string().optional(),
  delDate: z12.string().optional(),
  takenBy: z12.string().optional(),
  bookletDate: z12.string().optional(),
  receivedPayment: z12.boolean().optional(),
  reference: z12.string().optional(),
  client: z12.string().optional()
});

// src/milburn/milburn-address.ts
import { z as z13 } from "zod";
var AddressBlockSchema = z13.object({
  aptNo: z13.string().optional(),
  phone: z13.string().optional(),
  address: z13.string().optional()
});

// src/milburn/milburn-delivery.ts
import { z as z14 } from "zod";
var DeliverySchema = z14.object({
  note: z14.string().optional(),
  notify: z14.string().optional(),
  address: z14.string().optional(),
  phone: z14.string().optional(),
  nameOf: z14.string().optional(),
  billNotifyAddress: z14.string().optional(),
  shipperCantFurnish: z14.boolean().optional()
});

// src/milburn/milburn-storage.ts
import { z as z15 } from "zod";
var StorageHourlySchema = z15.object({
  storageType: z15.string().optional(),
  nameOf: z15.string().optional(),
  billNotifyAddress: z15.string().optional(),
  firstDayRate: z15.string().optional(),
  additionalDaysRate: z15.string().optional(),
  warehouseHandlingRate: z15.string().optional(),
  materials: z15.array(z15.array(z15.string())).optional(),
  paymentTypes: z15.array(z15.string()).optional(),
  stripeInputs: z15.array(z15.array(z15.string())).optional(),
  packersData: z15.array(z15.array(z15.string())).optional(),
  noOfPackers: z15.object({
    count: z15.string().optional(),
    origin: z15.boolean().optional(),
    dest: z15.boolean().optional()
  }).optional(),
  issuance: z15.object({
    waiveRequirement: z15.boolean().optional(),
    shortNotice: z15.boolean().optional()
  }).optional(),
  articles: z15.object({
    highValue: z15.boolean().optional(),
    officeFixtures: z15.boolean().optional(),
    householdGoods: z15.boolean().optional(),
    adviceWeightCharges: z15.string().optional()
  }).optional(),
  hourlyRate: z15.record(z15.any()).optional(),
  valuation: z15.record(z15.any()).optional(),
  hundredweightRate: z15.record(z15.any()).optional(),
  packers: z15.record(z15.any()).optional(),
  packing: z15.record(z15.any()).optional(),
  unpacking: z15.record(z15.any()).optional(),
  pieceMoving: z15.record(z15.any()).optional(),
  itemsOfValue: z15.array(z15.record(z15.any())).optional()
});

// src/milburn/milburn-valuation.ts
import { z as z16 } from "zod";
var ValuationSchema = z16.object({
  choices: z16.array(z16.string()).optional(),
  selectedOption: z16.string().optional(),
  transportationRates: z16.array(z16.string()).optional(),
  maxRates: z16.array(z16.string()).optional(),
  storageRates: z16.array(z16.string()).optional(),
  actualCashPerLb: z16.string().optional(),
  fullValuePerLb: z16.string().optional(),
  declaredValue: z16.string().optional()
});

// src/milburn/milburn-packing.ts
import { z as z17 } from "zod";
var PackingMaterialRowSchema = z17.object({
  item: z17.string(),
  perItem: z17.string(),
  packing: z17.string(),
  unpacking: z17.string(),
  qty: z17.string(),
  total: z17.string()
});

// src/milburn/milburn-customer-info.ts
import { z as z18 } from "zod";
var CustomerReleaseItemSchema = z18.object({
  item: z18.string(),
  reason: z18.string(),
  initials: z18.string()
});
var CustomerInfoSchema = z18.object({
  doubleDriveInitial: z18.string().optional(),
  suppliesInitial: z18.string().optional(),
  liabilityInitial: z18.string().optional(),
  pressboardOption: z18.string().optional(),
  parkingTicketInitial: z18.string().optional(),
  printName: z18.string().optional(),
  releaseItems: z18.array(CustomerReleaseItemSchema).optional()
});

// src/milburn/milburn-damage.ts
import { z as z19 } from "zod";
var DamageRowSchema = z19.object({
  item: z19.string(),
  description: z19.string()
});

// src/milburn/milburn-contract-signatures.ts
import { z as z20 } from "zod";
var ContractSignaturesConfigSchema = z20.object({
  signatures: z20.array(
    z20.object({
      key: z20.string(),
      label: z20.string(),
      required: z20.boolean().optional(),
      variant: z20.enum(["inline", "stacked", "mark"]).optional()
    })
  ).optional(),
  requiredSignatures: z20.array(z20.string()).optional(),
  dualBatch: z20.boolean().optional(),
  dualBatchKeys: z20.object({
    pre: z20.array(z20.string()),
    post: z20.array(z20.string())
  }).optional()
});

// src/milburn/milburn-contract-data.ts
import { z as z21 } from "zod";
var MilburnContractDataSchema = z21.object({
  from: AddressBlockSchema.optional(),
  to: AddressBlockSchema.optional(),
  meta: MilburnMetaSchema.optional(),
  delivery: DeliverySchema.optional(),
  storageHourly: StorageHourlySchema.optional(),
  valuation: ValuationSchema.optional(),
  notice: z21.object({
    notToExceedAmount: z21.string().optional(),
    services: z21.string().optional()
  }).optional(),
  customerInfo: CustomerInfoSchema.optional(),
  materials: z21.array(PackingMaterialRowSchema).optional(),
  damagePre: z21.array(DamageRowSchema).optional(),
  damagePost: z21.array(DamageRowSchema).optional(),
  paymentDetails: z21.record(z21.string()).optional(),
  summary: z21.record(z21.any()).optional()
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
import { z as z22 } from "zod";
var UserRoleSchema = z22.enum(["admin", "foreman"]);
var UserCoreSchema = z22.object({
  id: z22.string(),
  email: z22.string().email(),
  name: z22.string().nullable().optional(),
  nickname: z22.string().nullable().optional(),
  phone: z22.string().nullable().optional(),
  role: UserRoleSchema,
  isActive: z22.boolean(),
  createdAt: z22.string(),
  updatedAt: z22.string()
});

// src/user/user-payloads.ts
import { z as z23 } from "zod";
var CreateUserPayloadSchema = z23.object({
  email: z23.string().email(),
  nickname: z23.string().optional(),
  name: z23.string().optional(),
  phone: z23.string().optional(),
  role: UserRoleSchema
});
var UpdateUserPayloadSchema = z23.object({
  name: z23.string().optional(),
  nickname: z23.string().optional(),
  phone: z23.string().optional(),
  role: UserRoleSchema.optional(),
  isActive: z23.boolean().optional()
});

// src/user/admin-user-response.ts
import { z as z24 } from "zod";
var AdminUserResponseSchema = z24.object({
  id: z24.string(),
  nickname: z24.string().nullable().optional(),
  email: z24.string(),
  name: z24.string().nullable(),
  phone: z24.string().nullable(),
  role: UserRoleSchema,
  isActive: z24.boolean(),
  createdAt: z24.string(),
  updatedAt: z24.string(),
  // Admin-only meta
  jobCount: z24.number().optional(),
  lastActiveAt: z24.string().nullable().optional(),
  // Onboarding meta (computed on server)
  onboardingPending: z24.boolean().optional(),
  onboardingExpired: z24.boolean().optional()
});

// src/user/create-user-response.ts
import { z as z25 } from "zod";
var CreateUserResponseSchema = z25.object({
  user: UserCoreSchema,
  onboardingLink: z25.string().url()
});

// src/auth/login-response.ts
import { z as z26 } from "zod";
var LoginResponseSchema = z26.object({
  token: z26.string(),
  user: UserCoreSchema
});

// src/auth/login.ts
import { z as z27 } from "zod";
var LoginPayloadSchema = z27.object({
  identifier: z27.string(),
  password: z27.string()
});

// src/auth/onboarding.ts
import { z as z28 } from "zod";
var OnboardingCompletePayloadSchema = z28.object({
  password: z28.string().min(6, "Password must be at least 6 characters")
});

// src/dashboard/range.ts
import { z as z29 } from "zod";
var DashboardRangeSchema = z29.object({
  range: z29.enum(["1m", "3m", "6m", "12m"]).default("1m")
});

// src/dashboard/stats.ts
import { z as z30 } from "zod";
var DashboardKpiMetricSchema = z30.object({
  value: z30.number(),
  // current period
  prevValue: z30.number(),
  // previous period
  percent: z30.number(),
  // change in %
  sparkline: z30.array(z30.number())
  // daily series
});
var DashboardKpisSchema = z30.object({
  totalJobs: DashboardKpiMetricSchema,
  totalRevenue: DashboardKpiMetricSchema,
  extrasRevenue: DashboardKpiMetricSchema
});

// src/dashboard/status.ts
import { z as z31 } from "zod";
var JobsByStatusItemSchema = z31.object({
  status: JobStatusEnum,
  count: z31.number()
});

// src/dashboard/revenue-breakdown.ts
import { z as z32 } from "zod";
var RevenueBreakdownSchema = z32.object({
  laborTotal: z32.number(),
  // sum of laborTotal
  extrasTotal: z32.number(),
  // sum of extrasTotal
  tipsTotal: z32.number()
  // sum of tip
});

// src/dashboard/latest-jobs.ts
import { z as z33 } from "zod";
var LatestJobItemSchema = z33.object({
  id: z33.string(),
  client: z33.string(),
  createdAt: z33.string(),
  status: JobStatusEnum,
  summary: z33.object({
    totalPrice: z33.number()
  }).nullable().optional()
});

// src/dashboard/job-types.ts
import { z as z34 } from "zod";
var JobTypeBreakdownItemSchema = z34.object({
  label: z34.string(),
  // e.g. "Apartment", "Office", "Unspecified"
  count: z34.number()
  // number of jobs with that moveType
});
var JobTypeBreakdownSchema = z34.array(JobTypeBreakdownItemSchema);

// src/notifications/notification.ts
import { z as z35 } from "zod";
var NotificationSchema = z35.object({
  id: z35.string(),
  userId: z35.string(),
  title: z35.string(),
  message: z35.string().nullish(),
  link: z35.string().url().or(z35.string().regex(/^\/.*/)).or(z35.string().length(0)).or(z35.null()).optional(),
  createdAt: z35.coerce.date(),
  readAt: z35.string().nullable()
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
