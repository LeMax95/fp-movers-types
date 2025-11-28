import { z } from "zod";

export const StepSchema = z.object({
  index: z.number(),
  step: z.object({
    type: z.string(),
    stopId: z.string().optional(),
    address: z.string().optional(),
    fromAddress: z.string().optional(),
    toAddress: z.string().optional(),
     phase: z.enum(["loading", "unloading", "driving"]).optional(),
  }),
  duration: z.number(),
});

export const ExtraItemSchema = z.object({
  label: z.string(),
  quantity: z.number(),
  price: z.number(),
  unit: z.string().optional(),
});




export const JobSummarySchema = z.object({
  steps: z.array(StepSchema),
  duration: z.string(),
  billableHours: z.number(),
  laborTotal: z.number(),

  extras: z.array(ExtraItemSchema),
  extrasTotal: z.number(),

  tip: z.number(),
  grandTotal: z.number(),

  paymentMethod: z.enum(["Cash", "Credit Card", "PayPal"]),
  paymentDetails: z.record(z.string()).optional(),

  foremanId: z.string(),
  foremanName: z.string(),

 
});

export type JobSummary = z.infer<typeof JobSummarySchema>;
export type ExtraItem = z.infer<typeof ExtraItemSchema>;
export type Step = z.infer<typeof StepSchema>;