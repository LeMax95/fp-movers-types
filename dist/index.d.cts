import { z } from 'zod';

declare const JobStatusEnum: z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>;
declare const JobCoreSchema: z.ZodObject<{
    id: z.ZodString;
    client: z.ZodString;
    phone: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>;
    foremanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moveDate: z.ZodString;
    moveTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    from: z.ZodString;
    to: z.ZodString;
    truckCount: z.ZodNumber;
    crew: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    volume: z.ZodOptional<z.ZodString>;
    moveType: z.ZodOptional<z.ZodString>;
    distance: z.ZodOptional<z.ZodString>;
    rate: z.ZodOptional<z.ZodString>;
    minimum: z.ZodOptional<z.ZodString>;
    gasFee: z.ZodOptional<z.ZodString>;
    contractVersion: z.ZodNumber;
    packageId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    client: string;
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    moveDate: string;
    from: string;
    to: string;
    truckCount: number;
    contractVersion: number;
    phone?: string | undefined;
    email?: string | undefined;
    foremanId?: string | null | undefined;
    moveTime?: string | null | undefined;
    reference?: string | null | undefined;
    minimum?: string | undefined;
    crew?: string[] | undefined;
    notes?: string | null | undefined;
    volume?: string | undefined;
    moveType?: string | undefined;
    distance?: string | undefined;
    rate?: string | undefined;
    gasFee?: string | undefined;
    packageId?: number | null | undefined;
}, {
    id: string;
    client: string;
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    moveDate: string;
    from: string;
    to: string;
    truckCount: number;
    contractVersion: number;
    phone?: string | undefined;
    email?: string | undefined;
    foremanId?: string | null | undefined;
    moveTime?: string | null | undefined;
    reference?: string | null | undefined;
    minimum?: string | undefined;
    crew?: string[] | undefined;
    notes?: string | null | undefined;
    volume?: string | undefined;
    moveType?: string | undefined;
    distance?: string | undefined;
    rate?: string | undefined;
    gasFee?: string | undefined;
    packageId?: number | null | undefined;
}>;
type JobCore = z.infer<typeof JobCoreSchema>;

declare const StopSchema: z.ZodObject<{
    address: z.ZodString;
    loading: z.ZodOptional<z.ZodBoolean>;
    unloading: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    address: string;
    loading?: boolean | undefined;
    unloading?: boolean | undefined;
}, {
    address: string;
    loading?: boolean | undefined;
    unloading?: boolean | undefined;
}>;
declare const StopsSchema: z.ZodArray<z.ZodObject<{
    address: z.ZodString;
    loading: z.ZodOptional<z.ZodBoolean>;
    unloading: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    address: string;
    loading?: boolean | undefined;
    unloading?: boolean | undefined;
}, {
    address: string;
    loading?: boolean | undefined;
    unloading?: boolean | undefined;
}>, "many">;
type JobStop = z.infer<typeof StopSchema>;
type JobStops = z.infer<typeof StopsSchema>;

declare const StepSchema: z.ZodObject<{
    index: z.ZodNumber;
    step: z.ZodObject<{
        type: z.ZodString;
        stopId: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        fromAddress: z.ZodOptional<z.ZodString>;
        toAddress: z.ZodOptional<z.ZodString>;
        phase: z.ZodOptional<z.ZodEnum<["loading", "unloading", "driving"]>>;
    }, "strip", z.ZodTypeAny, {
        type: string;
        address?: string | undefined;
        stopId?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        phase?: "loading" | "unloading" | "driving" | undefined;
    }, {
        type: string;
        address?: string | undefined;
        stopId?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        phase?: "loading" | "unloading" | "driving" | undefined;
    }>;
    duration: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    index: number;
    step: {
        type: string;
        address?: string | undefined;
        stopId?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        phase?: "loading" | "unloading" | "driving" | undefined;
    };
    duration: number;
}, {
    index: number;
    step: {
        type: string;
        address?: string | undefined;
        stopId?: string | undefined;
        fromAddress?: string | undefined;
        toAddress?: string | undefined;
        phase?: "loading" | "unloading" | "driving" | undefined;
    };
    duration: number;
}>;
declare const ExtraItemSchema: z.ZodObject<{
    label: z.ZodString;
    quantity: z.ZodNumber;
    price: z.ZodNumber;
    unit: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    label: string;
    quantity: number;
    price: number;
    unit?: string | undefined;
}, {
    label: string;
    quantity: number;
    price: number;
    unit?: string | undefined;
}>;
declare const JobSummarySchema: z.ZodObject<{
    steps: z.ZodArray<z.ZodObject<{
        index: z.ZodNumber;
        step: z.ZodObject<{
            type: z.ZodString;
            stopId: z.ZodOptional<z.ZodString>;
            address: z.ZodOptional<z.ZodString>;
            fromAddress: z.ZodOptional<z.ZodString>;
            toAddress: z.ZodOptional<z.ZodString>;
            phase: z.ZodOptional<z.ZodEnum<["loading", "unloading", "driving"]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        }, {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        }>;
        duration: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        index: number;
        step: {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        };
        duration: number;
    }, {
        index: number;
        step: {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        };
        duration: number;
    }>, "many">;
    duration: z.ZodString;
    billableHours: z.ZodNumber;
    laborTotal: z.ZodNumber;
    extras: z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        quantity: z.ZodNumber;
        price: z.ZodNumber;
        unit: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }, {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }>, "many">;
    extrasTotal: z.ZodNumber;
    tip: z.ZodNumber;
    grandTotal: z.ZodNumber;
    paymentMethod: z.ZodEnum<["Cash", "Credit Card", "PayPal"]>;
    paymentDetails: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    foremanId: z.ZodString;
    foremanName: z.ZodString;
}, "strip", z.ZodTypeAny, {
    foremanId: string;
    duration: string;
    steps: {
        index: number;
        step: {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        };
        duration: number;
    }[];
    billableHours: number;
    laborTotal: number;
    extras: {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }[];
    extrasTotal: number;
    tip: number;
    grandTotal: number;
    paymentMethod: "Cash" | "Credit Card" | "PayPal";
    foremanName: string;
    paymentDetails?: Record<string, string> | undefined;
}, {
    foremanId: string;
    duration: string;
    steps: {
        index: number;
        step: {
            type: string;
            address?: string | undefined;
            stopId?: string | undefined;
            fromAddress?: string | undefined;
            toAddress?: string | undefined;
            phase?: "loading" | "unloading" | "driving" | undefined;
        };
        duration: number;
    }[];
    billableHours: number;
    laborTotal: number;
    extras: {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }[];
    extrasTotal: number;
    tip: number;
    grandTotal: number;
    paymentMethod: "Cash" | "Credit Card" | "PayPal";
    foremanName: string;
    paymentDetails?: Record<string, string> | undefined;
}>;
type JobSummary = z.infer<typeof JobSummarySchema>;
type ExtraItem = z.infer<typeof ExtraItemSchema>;
type Step = z.infer<typeof StepSchema>;

declare const JobContractsSchema: z.ZodObject<{
    data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
    signatures: z.ZodOptional<z.ZodObject<{
        pre: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>>>;
        post: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>>>;
    }, "strip", z.ZodTypeAny, {
        pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
    }, {
        pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    data?: Record<string, unknown> | undefined;
    signatures?: {
        pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
    } | undefined;
}, {
    data?: Record<string, unknown> | undefined;
    signatures?: {
        pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
    } | undefined;
}>;
type JobContracts = z.infer<typeof JobContractsSchema>;

declare const SignatureScopeSchema: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
declare const ScopedSignaturesSchema: z.ZodObject<{
    pre: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
    post: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
}, "strip", z.ZodTypeAny, {
    pre: Record<string, Record<string, string | null>>;
    post: Record<string, Record<string, string | null>>;
}, {
    pre: Record<string, Record<string, string | null>>;
    post: Record<string, Record<string, string | null>>;
}>;
type ScopedSignatures = z.infer<typeof ScopedSignaturesSchema>;

declare const CreateJobPayloadSchema: z.ZodObject<{
    job: z.ZodObject<{
        id: z.ZodString;
        client: z.ZodString;
        phone: z.ZodOptional<z.ZodString>;
        email: z.ZodOptional<z.ZodString>;
        status: z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>;
        foremanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        moveDate: z.ZodString;
        moveTime: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        reference: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        from: z.ZodString;
        to: z.ZodString;
        truckCount: z.ZodNumber;
        crew: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        notes: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        volume: z.ZodOptional<z.ZodString>;
        moveType: z.ZodOptional<z.ZodString>;
        distance: z.ZodOptional<z.ZodString>;
        rate: z.ZodOptional<z.ZodString>;
        minimum: z.ZodOptional<z.ZodString>;
        gasFee: z.ZodOptional<z.ZodString>;
        contractVersion: z.ZodNumber;
        packageId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        client: string;
        status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
        moveDate: string;
        from: string;
        to: string;
        truckCount: number;
        contractVersion: number;
        phone?: string | undefined;
        email?: string | undefined;
        foremanId?: string | null | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        packageId?: number | null | undefined;
    }, {
        id: string;
        client: string;
        status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
        moveDate: string;
        from: string;
        to: string;
        truckCount: number;
        contractVersion: number;
        phone?: string | undefined;
        email?: string | undefined;
        foremanId?: string | null | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        packageId?: number | null | undefined;
    }>;
    stops: z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        loading: z.ZodOptional<z.ZodBoolean>;
        unloading: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }, {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }>, "many">;
    contracts: z.ZodObject<{
        data: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodUnknown>>;
        signatures: z.ZodOptional<z.ZodObject<{
            pre: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>>>;
            post: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodOptional<z.ZodNullable<z.ZodString>>>>>>;
        }, "strip", z.ZodTypeAny, {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        }, {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        data?: Record<string, unknown> | undefined;
        signatures?: {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        } | undefined;
    }, {
        data?: Record<string, unknown> | undefined;
        signatures?: {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        } | undefined;
    }>;
    summary: z.ZodOptional<z.ZodObject<{
        steps: z.ZodArray<z.ZodObject<{
            index: z.ZodNumber;
            step: z.ZodObject<{
                type: z.ZodString;
                stopId: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                fromAddress: z.ZodOptional<z.ZodString>;
                toAddress: z.ZodOptional<z.ZodString>;
                phase: z.ZodOptional<z.ZodEnum<["loading", "unloading", "driving"]>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            }, {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            }>;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }, {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }>, "many">;
        duration: z.ZodString;
        billableHours: z.ZodNumber;
        laborTotal: z.ZodNumber;
        extras: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            quantity: z.ZodNumber;
            price: z.ZodNumber;
            unit: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }, {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }>, "many">;
        extrasTotal: z.ZodNumber;
        tip: z.ZodNumber;
        grandTotal: z.ZodNumber;
        paymentMethod: z.ZodEnum<["Cash", "Credit Card", "PayPal"]>;
        paymentDetails: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        foremanId: z.ZodString;
        foremanName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    }, {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    job: {
        id: string;
        client: string;
        status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
        moveDate: string;
        from: string;
        to: string;
        truckCount: number;
        contractVersion: number;
        phone?: string | undefined;
        email?: string | undefined;
        foremanId?: string | null | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        packageId?: number | null | undefined;
    };
    stops: {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }[];
    contracts: {
        data?: Record<string, unknown> | undefined;
        signatures?: {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        } | undefined;
    };
    summary?: {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    } | undefined;
}, {
    job: {
        id: string;
        client: string;
        status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
        moveDate: string;
        from: string;
        to: string;
        truckCount: number;
        contractVersion: number;
        phone?: string | undefined;
        email?: string | undefined;
        foremanId?: string | null | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        packageId?: number | null | undefined;
    };
    stops: {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }[];
    contracts: {
        data?: Record<string, unknown> | undefined;
        signatures?: {
            pre?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
            post?: Record<string, Record<string, string | null | undefined> | undefined> | undefined;
        } | undefined;
    };
    summary?: {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    } | undefined;
}>;
type CreateJobPayload = z.infer<typeof CreateJobPayloadSchema>;

declare const FieldJobUpdateSchema: z.ZodObject<{
    crew: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    notes: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>>;
    summary: z.ZodOptional<z.ZodObject<{
        steps: z.ZodArray<z.ZodObject<{
            index: z.ZodNumber;
            step: z.ZodObject<{
                type: z.ZodString;
                stopId: z.ZodOptional<z.ZodString>;
                address: z.ZodOptional<z.ZodString>;
                fromAddress: z.ZodOptional<z.ZodString>;
                toAddress: z.ZodOptional<z.ZodString>;
                phase: z.ZodOptional<z.ZodEnum<["loading", "unloading", "driving"]>>;
            }, "strip", z.ZodTypeAny, {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            }, {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            }>;
            duration: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }, {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }>, "many">;
        duration: z.ZodString;
        billableHours: z.ZodNumber;
        laborTotal: z.ZodNumber;
        extras: z.ZodArray<z.ZodObject<{
            label: z.ZodString;
            quantity: z.ZodNumber;
            price: z.ZodNumber;
            unit: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }, {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }>, "many">;
        extrasTotal: z.ZodNumber;
        tip: z.ZodNumber;
        grandTotal: z.ZodNumber;
        paymentMethod: z.ZodEnum<["Cash", "Credit Card", "PayPal"]>;
        paymentDetails: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        foremanId: z.ZodString;
        foremanName: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    }, {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    }>>;
    signatures: z.ZodOptional<z.ZodObject<{
        pre: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
        post: z.ZodRecord<z.ZodString, z.ZodRecord<z.ZodString, z.ZodNullable<z.ZodString>>>;
    }, "strip", z.ZodTypeAny, {
        pre: Record<string, Record<string, string | null>>;
        post: Record<string, Record<string, string | null>>;
    }, {
        pre: Record<string, Record<string, string | null>>;
        post: Record<string, Record<string, string | null>>;
    }>>;
}, "strip", z.ZodTypeAny, {
    status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
    crew?: string[] | undefined;
    notes?: string | undefined;
    signatures?: {
        pre: Record<string, Record<string, string | null>>;
        post: Record<string, Record<string, string | null>>;
    } | undefined;
    summary?: {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    } | undefined;
}, {
    status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
    crew?: string[] | undefined;
    notes?: string | undefined;
    signatures?: {
        pre: Record<string, Record<string, string | null>>;
        post: Record<string, Record<string, string | null>>;
    } | undefined;
    summary?: {
        foremanId: string;
        duration: string;
        steps: {
            index: number;
            step: {
                type: string;
                address?: string | undefined;
                stopId?: string | undefined;
                fromAddress?: string | undefined;
                toAddress?: string | undefined;
                phase?: "loading" | "unloading" | "driving" | undefined;
            };
            duration: number;
        }[];
        billableHours: number;
        laborTotal: number;
        extras: {
            label: string;
            quantity: number;
            price: number;
            unit?: string | undefined;
        }[];
        extrasTotal: number;
        tip: number;
        grandTotal: number;
        paymentMethod: "Cash" | "Credit Card" | "PayPal";
        foremanName: string;
        paymentDetails?: Record<string, string> | undefined;
    } | undefined;
}>;
type FieldJobUpdate = z.infer<typeof FieldJobUpdateSchema>;

declare const AdminJobStopSchema: z.ZodObject<{
    id: z.ZodNumber;
    address: z.ZodString;
    loading: z.ZodBoolean;
    unloading: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: number;
    address: string;
    loading: boolean;
    unloading: boolean;
}, {
    id: number;
    address: string;
    loading: boolean;
    unloading: boolean;
}>;
declare const AdminContractKeySchema: z.ZodString;
declare const AdminContractListSchema: z.ZodArray<z.ZodString, "many">;
declare const AdminJobResponseSchema: z.ZodObject<{
    id: z.ZodString;
    client: z.ZodString;
    phone: z.ZodNullable<z.ZodString>;
    email: z.ZodNullable<z.ZodString>;
    foremanId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    foremanName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moveDate: z.ZodString;
    moveTime: z.ZodNullable<z.ZodString>;
    reference: z.ZodNullable<z.ZodString>;
    fromAddress: z.ZodString;
    toAddress: z.ZodString;
    truckCount: z.ZodNumber;
    crew: z.ZodArray<z.ZodString, "many">;
    notes: z.ZodNullable<z.ZodString>;
    volume: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moveType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    distance: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    rate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    minimum: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gasFee: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    packageId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    status: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    stops: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        address: z.ZodString;
        loading: z.ZodBoolean;
        unloading: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        id: number;
        address: string;
        loading: boolean;
        unloading: boolean;
    }, {
        id: number;
        address: string;
        loading: boolean;
        unloading: boolean;
    }>, "many">;
    summary: z.ZodNullable<z.ZodObject<{
        data: z.ZodObject<{
            steps: z.ZodArray<z.ZodObject<{
                index: z.ZodNumber;
                step: z.ZodObject<{
                    type: z.ZodString;
                    stopId: z.ZodOptional<z.ZodString>;
                    address: z.ZodOptional<z.ZodString>;
                    fromAddress: z.ZodOptional<z.ZodString>;
                    toAddress: z.ZodOptional<z.ZodString>;
                    phase: z.ZodOptional<z.ZodEnum<["loading", "unloading", "driving"]>>;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                }, {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                }>;
                duration: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }, {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }>, "many">;
            duration: z.ZodString;
            billableHours: z.ZodNumber;
            laborTotal: z.ZodNumber;
            extras: z.ZodArray<z.ZodObject<{
                label: z.ZodString;
                quantity: z.ZodNumber;
                price: z.ZodNumber;
                unit: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }, {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }>, "many">;
            extrasTotal: z.ZodNumber;
            tip: z.ZodNumber;
            grandTotal: z.ZodNumber;
            paymentMethod: z.ZodEnum<["Cash", "Credit Card", "PayPal"]>;
            paymentDetails: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
            foremanId: z.ZodString;
            foremanName: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        }, {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        data: {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        };
    }, {
        data: {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        };
    }>>;
    contracts: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    client: string;
    phone: string | null;
    email: string | null;
    status: string;
    moveDate: string;
    moveTime: string | null;
    reference: string | null;
    truckCount: number;
    crew: string[];
    notes: string | null;
    fromAddress: string;
    toAddress: string;
    stops: {
        id: number;
        address: string;
        loading: boolean;
        unloading: boolean;
    }[];
    contracts: string[];
    summary: {
        data: {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        };
    } | null;
    createdAt: string;
    updatedAt: string;
    foremanId?: string | null | undefined;
    minimum?: string | null | undefined;
    volume?: string | null | undefined;
    moveType?: string | null | undefined;
    distance?: string | null | undefined;
    rate?: string | null | undefined;
    gasFee?: string | null | undefined;
    packageId?: number | null | undefined;
    foremanName?: string | null | undefined;
}, {
    id: string;
    client: string;
    phone: string | null;
    email: string | null;
    status: string;
    moveDate: string;
    moveTime: string | null;
    reference: string | null;
    truckCount: number;
    crew: string[];
    notes: string | null;
    fromAddress: string;
    toAddress: string;
    stops: {
        id: number;
        address: string;
        loading: boolean;
        unloading: boolean;
    }[];
    contracts: string[];
    summary: {
        data: {
            foremanId: string;
            duration: string;
            steps: {
                index: number;
                step: {
                    type: string;
                    address?: string | undefined;
                    stopId?: string | undefined;
                    fromAddress?: string | undefined;
                    toAddress?: string | undefined;
                    phase?: "loading" | "unloading" | "driving" | undefined;
                };
                duration: number;
            }[];
            billableHours: number;
            laborTotal: number;
            extras: {
                label: string;
                quantity: number;
                price: number;
                unit?: string | undefined;
            }[];
            extrasTotal: number;
            tip: number;
            grandTotal: number;
            paymentMethod: "Cash" | "Credit Card" | "PayPal";
            foremanName: string;
            paymentDetails?: Record<string, string> | undefined;
        };
    } | null;
    createdAt: string;
    updatedAt: string;
    foremanId?: string | null | undefined;
    minimum?: string | null | undefined;
    volume?: string | null | undefined;
    moveType?: string | null | undefined;
    distance?: string | null | undefined;
    rate?: string | null | undefined;
    gasFee?: string | null | undefined;
    packageId?: number | null | undefined;
    foremanName?: string | null | undefined;
}>;
type AdminJobResponse = z.infer<typeof AdminJobResponseSchema>;

declare const JobSettingsSchema: z.ZodObject<{
    defaultHourlyRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultMinHours: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultCrewSize: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultTruckCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultGasFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultPerMileRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultTollFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    extras: z.ZodOptional<z.ZodNullable<z.ZodArray<z.ZodObject<{
        label: z.ZodString;
        price: z.ZodNumber;
        unit: z.ZodOptional<z.ZodString>;
    } & {
        quantity: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }, {
        label: string;
        price: number;
        quantity?: number | undefined;
        unit?: string | undefined;
    }>, "many">>>;
    packingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    unpackingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    materialsMarkupPct: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    storageFirstDayRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    storageAdditionalDayRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    storageHandlingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valuationActualCashPerLb: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valuationFullValuePerLb: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fuelBaseFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    fuelPerMileRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    truckFeePerTruck: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    extras?: {
        label: string;
        quantity: number;
        price: number;
        unit?: string | undefined;
    }[] | null | undefined;
    defaultHourlyRate?: number | null | undefined;
    defaultMinHours?: number | null | undefined;
    defaultCrewSize?: number | null | undefined;
    defaultTruckCount?: number | null | undefined;
    defaultGasFee?: number | null | undefined;
    defaultPerMileRate?: number | null | undefined;
    defaultTollFee?: number | null | undefined;
    packingRate?: number | null | undefined;
    unpackingRate?: number | null | undefined;
    materialsMarkupPct?: number | null | undefined;
    storageFirstDayRate?: number | null | undefined;
    storageAdditionalDayRate?: number | null | undefined;
    storageHandlingRate?: number | null | undefined;
    valuationActualCashPerLb?: number | null | undefined;
    valuationFullValuePerLb?: number | null | undefined;
    fuelBaseFee?: number | null | undefined;
    fuelPerMileRate?: number | null | undefined;
    truckFeePerTruck?: number | null | undefined;
}, {
    extras?: {
        label: string;
        price: number;
        quantity?: number | undefined;
        unit?: string | undefined;
    }[] | null | undefined;
    defaultHourlyRate?: number | null | undefined;
    defaultMinHours?: number | null | undefined;
    defaultCrewSize?: number | null | undefined;
    defaultTruckCount?: number | null | undefined;
    defaultGasFee?: number | null | undefined;
    defaultPerMileRate?: number | null | undefined;
    defaultTollFee?: number | null | undefined;
    packingRate?: number | null | undefined;
    unpackingRate?: number | null | undefined;
    materialsMarkupPct?: number | null | undefined;
    storageFirstDayRate?: number | null | undefined;
    storageAdditionalDayRate?: number | null | undefined;
    storageHandlingRate?: number | null | undefined;
    valuationActualCashPerLb?: number | null | undefined;
    valuationFullValuePerLb?: number | null | undefined;
    fuelBaseFee?: number | null | undefined;
    fuelPerMileRate?: number | null | undefined;
    truckFeePerTruck?: number | null | undefined;
}>;
type JobSettings = z.infer<typeof JobSettingsSchema>;

declare const PackageMarketingSchema: z.ZodOptional<z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    notes: z.ZodOptional<z.ZodString>;
    finePrint: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    notes?: string | undefined;
    description?: string | undefined;
    finePrint?: string | undefined;
}, {
    notes?: string | undefined;
    description?: string | undefined;
    finePrint?: string | undefined;
}>>;
declare const JobPackageSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    shortName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moverCount: z.ZodNumber;
    truckCount: z.ZodNumber;
    hourlyRate: z.ZodNumber;
    minHours: z.ZodNumber;
    flatFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overtimeRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    includesGasFee: z.ZodDefault<z.ZodBoolean>;
    includesMileage: z.ZodDefault<z.ZodBoolean>;
    includesTolls: z.ZodDefault<z.ZodBoolean>;
    includesTaxes: z.ZodDefault<z.ZodBoolean>;
    includesTruckFee: z.ZodDefault<z.ZodBoolean>;
    includesPackingMaterials: z.ZodDefault<z.ZodBoolean>;
    includesDisassembly: z.ZodDefault<z.ZodBoolean>;
    includesReassembly: z.ZodDefault<z.ZodBoolean>;
    includesFloorProtection: z.ZodDefault<z.ZodBoolean>;
    includesWrapping: z.ZodDefault<z.ZodBoolean>;
    includesBasicInsurance: z.ZodDefault<z.ZodBoolean>;
    overrideGasFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overridePerMileRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overridePackingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overrideUnpackingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultCrewNames: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    marketing: z.ZodOptional<z.ZodAny>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: number;
    truckCount: number;
    name: string;
    moverCount: number;
    hourlyRate: number;
    minHours: number;
    includesGasFee: boolean;
    includesMileage: boolean;
    includesTolls: boolean;
    includesTaxes: boolean;
    includesTruckFee: boolean;
    includesPackingMaterials: boolean;
    includesDisassembly: boolean;
    includesReassembly: boolean;
    includesFloorProtection: boolean;
    includesWrapping: boolean;
    includesBasicInsurance: boolean;
    defaultCrewNames: string[];
    isActive: boolean;
    shortName?: string | null | undefined;
    category?: string | null | undefined;
    flatFee?: number | null | undefined;
    overtimeRate?: number | null | undefined;
    overrideGasFee?: number | null | undefined;
    overridePerMileRate?: number | null | undefined;
    overridePackingRate?: number | null | undefined;
    overrideUnpackingRate?: number | null | undefined;
    marketing?: any;
}, {
    id: number;
    truckCount: number;
    name: string;
    moverCount: number;
    hourlyRate: number;
    minHours: number;
    shortName?: string | null | undefined;
    category?: string | null | undefined;
    flatFee?: number | null | undefined;
    overtimeRate?: number | null | undefined;
    includesGasFee?: boolean | undefined;
    includesMileage?: boolean | undefined;
    includesTolls?: boolean | undefined;
    includesTaxes?: boolean | undefined;
    includesTruckFee?: boolean | undefined;
    includesPackingMaterials?: boolean | undefined;
    includesDisassembly?: boolean | undefined;
    includesReassembly?: boolean | undefined;
    includesFloorProtection?: boolean | undefined;
    includesWrapping?: boolean | undefined;
    includesBasicInsurance?: boolean | undefined;
    overrideGasFee?: number | null | undefined;
    overridePerMileRate?: number | null | undefined;
    overridePackingRate?: number | null | undefined;
    overrideUnpackingRate?: number | null | undefined;
    defaultCrewNames?: string[] | undefined;
    marketing?: any;
    isActive?: boolean | undefined;
}>;
declare const JobPackageCreateSchema: z.ZodObject<Omit<{
    id: z.ZodNumber;
    name: z.ZodString;
    shortName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    category: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    moverCount: z.ZodNumber;
    truckCount: z.ZodNumber;
    hourlyRate: z.ZodNumber;
    minHours: z.ZodNumber;
    flatFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overtimeRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    includesGasFee: z.ZodDefault<z.ZodBoolean>;
    includesMileage: z.ZodDefault<z.ZodBoolean>;
    includesTolls: z.ZodDefault<z.ZodBoolean>;
    includesTaxes: z.ZodDefault<z.ZodBoolean>;
    includesTruckFee: z.ZodDefault<z.ZodBoolean>;
    includesPackingMaterials: z.ZodDefault<z.ZodBoolean>;
    includesDisassembly: z.ZodDefault<z.ZodBoolean>;
    includesReassembly: z.ZodDefault<z.ZodBoolean>;
    includesFloorProtection: z.ZodDefault<z.ZodBoolean>;
    includesWrapping: z.ZodDefault<z.ZodBoolean>;
    includesBasicInsurance: z.ZodDefault<z.ZodBoolean>;
    overrideGasFee: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overridePerMileRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overridePackingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    overrideUnpackingRate: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    defaultCrewNames: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    marketing: z.ZodOptional<z.ZodAny>;
    isActive: z.ZodDefault<z.ZodBoolean>;
}, "id">, "strip", z.ZodTypeAny, {
    truckCount: number;
    name: string;
    moverCount: number;
    hourlyRate: number;
    minHours: number;
    includesGasFee: boolean;
    includesMileage: boolean;
    includesTolls: boolean;
    includesTaxes: boolean;
    includesTruckFee: boolean;
    includesPackingMaterials: boolean;
    includesDisassembly: boolean;
    includesReassembly: boolean;
    includesFloorProtection: boolean;
    includesWrapping: boolean;
    includesBasicInsurance: boolean;
    defaultCrewNames: string[];
    isActive: boolean;
    shortName?: string | null | undefined;
    category?: string | null | undefined;
    flatFee?: number | null | undefined;
    overtimeRate?: number | null | undefined;
    overrideGasFee?: number | null | undefined;
    overridePerMileRate?: number | null | undefined;
    overridePackingRate?: number | null | undefined;
    overrideUnpackingRate?: number | null | undefined;
    marketing?: any;
}, {
    truckCount: number;
    name: string;
    moverCount: number;
    hourlyRate: number;
    minHours: number;
    shortName?: string | null | undefined;
    category?: string | null | undefined;
    flatFee?: number | null | undefined;
    overtimeRate?: number | null | undefined;
    includesGasFee?: boolean | undefined;
    includesMileage?: boolean | undefined;
    includesTolls?: boolean | undefined;
    includesTaxes?: boolean | undefined;
    includesTruckFee?: boolean | undefined;
    includesPackingMaterials?: boolean | undefined;
    includesDisassembly?: boolean | undefined;
    includesReassembly?: boolean | undefined;
    includesFloorProtection?: boolean | undefined;
    includesWrapping?: boolean | undefined;
    includesBasicInsurance?: boolean | undefined;
    overrideGasFee?: number | null | undefined;
    overridePerMileRate?: number | null | undefined;
    overridePackingRate?: number | null | undefined;
    overrideUnpackingRate?: number | null | undefined;
    defaultCrewNames?: string[] | undefined;
    marketing?: any;
    isActive?: boolean | undefined;
}>;
type JobPackage = z.infer<typeof JobPackageSchema>;
type JobPackageCreate = z.infer<typeof JobPackageCreateSchema>;
type PackageMarketing = z.infer<typeof PackageMarketingSchema>;
type JobPackageRow = JobPackage | (JobPackageCreate & {
    id?: undefined;
});

declare const JobPartialUpdateSchema: z.ZodObject<{
    job: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        email: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>>;
        foremanId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        moveDate: z.ZodOptional<z.ZodString>;
        moveTime: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        reference: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        from: z.ZodOptional<z.ZodString>;
        to: z.ZodOptional<z.ZodString>;
        truckCount: z.ZodOptional<z.ZodNumber>;
        crew: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        notes: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        volume: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        moveType: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        distance: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        rate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        minimum: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        gasFee: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        contractVersion: z.ZodOptional<z.ZodNumber>;
        packageId: z.ZodOptional<z.ZodOptional<z.ZodNullable<z.ZodNumber>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        client?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
        foremanId?: string | null | undefined;
        moveDate?: string | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        from?: string | undefined;
        to?: string | undefined;
        truckCount?: number | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        contractVersion?: number | undefined;
        packageId?: number | null | undefined;
    }, {
        id?: string | undefined;
        client?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
        foremanId?: string | null | undefined;
        moveDate?: string | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        from?: string | undefined;
        to?: string | undefined;
        truckCount?: number | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        contractVersion?: number | undefined;
        packageId?: number | null | undefined;
    }>;
    stops: z.ZodOptional<z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        loading: z.ZodOptional<z.ZodBoolean>;
        unloading: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }, {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    job: {
        id?: string | undefined;
        client?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
        foremanId?: string | null | undefined;
        moveDate?: string | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        from?: string | undefined;
        to?: string | undefined;
        truckCount?: number | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        contractVersion?: number | undefined;
        packageId?: number | null | undefined;
    };
    stops?: {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }[] | undefined;
}, {
    job: {
        id?: string | undefined;
        client?: string | undefined;
        phone?: string | undefined;
        email?: string | undefined;
        status?: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled" | undefined;
        foremanId?: string | null | undefined;
        moveDate?: string | undefined;
        moveTime?: string | null | undefined;
        reference?: string | null | undefined;
        from?: string | undefined;
        to?: string | undefined;
        truckCount?: number | undefined;
        minimum?: string | undefined;
        crew?: string[] | undefined;
        notes?: string | null | undefined;
        volume?: string | undefined;
        moveType?: string | undefined;
        distance?: string | undefined;
        rate?: string | undefined;
        gasFee?: string | undefined;
        contractVersion?: number | undefined;
        packageId?: number | null | undefined;
    };
    stops?: {
        address: string;
        loading?: boolean | undefined;
        unloading?: boolean | undefined;
    }[] | undefined;
}>;
type JobPartialUpdate = z.infer<typeof JobPartialUpdateSchema>;

declare const MilburnMetaSchema: z.ZodObject<{
    orderDate: z.ZodOptional<z.ZodString>;
    moveDate: z.ZodOptional<z.ZodString>;
    packDate: z.ZodOptional<z.ZodString>;
    delDate: z.ZodOptional<z.ZodString>;
    takenBy: z.ZodOptional<z.ZodString>;
    bookletDate: z.ZodOptional<z.ZodString>;
    receivedPayment: z.ZodOptional<z.ZodBoolean>;
    reference: z.ZodOptional<z.ZodString>;
    client: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    client?: string | undefined;
    moveDate?: string | undefined;
    reference?: string | undefined;
    orderDate?: string | undefined;
    packDate?: string | undefined;
    delDate?: string | undefined;
    takenBy?: string | undefined;
    bookletDate?: string | undefined;
    receivedPayment?: boolean | undefined;
}, {
    client?: string | undefined;
    moveDate?: string | undefined;
    reference?: string | undefined;
    orderDate?: string | undefined;
    packDate?: string | undefined;
    delDate?: string | undefined;
    takenBy?: string | undefined;
    bookletDate?: string | undefined;
    receivedPayment?: boolean | undefined;
}>;
type MilburnMeta = z.infer<typeof MilburnMetaSchema>;

declare const AddressBlockSchema: z.ZodObject<{
    aptNo: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    phone?: string | undefined;
    address?: string | undefined;
    aptNo?: string | undefined;
}, {
    phone?: string | undefined;
    address?: string | undefined;
    aptNo?: string | undefined;
}>;
type AddressBlock = z.infer<typeof AddressBlockSchema>;

declare const DeliverySchema: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    notify: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    nameOf: z.ZodOptional<z.ZodString>;
    billNotifyAddress: z.ZodOptional<z.ZodString>;
    shipperCantFurnish: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    phone?: string | undefined;
    address?: string | undefined;
    note?: string | undefined;
    notify?: string | undefined;
    nameOf?: string | undefined;
    billNotifyAddress?: string | undefined;
    shipperCantFurnish?: boolean | undefined;
}, {
    phone?: string | undefined;
    address?: string | undefined;
    note?: string | undefined;
    notify?: string | undefined;
    nameOf?: string | undefined;
    billNotifyAddress?: string | undefined;
    shipperCantFurnish?: boolean | undefined;
}>;
type DeliveryData = z.infer<typeof DeliverySchema>;

declare const StorageHourlySchema: z.ZodObject<{
    storageType: z.ZodOptional<z.ZodString>;
    nameOf: z.ZodOptional<z.ZodString>;
    billNotifyAddress: z.ZodOptional<z.ZodString>;
    firstDayRate: z.ZodOptional<z.ZodString>;
    additionalDaysRate: z.ZodOptional<z.ZodString>;
    warehouseHandlingRate: z.ZodOptional<z.ZodString>;
    materials: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
    paymentTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    stripeInputs: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
    packersData: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
    noOfPackers: z.ZodOptional<z.ZodObject<{
        count: z.ZodOptional<z.ZodString>;
        origin: z.ZodOptional<z.ZodBoolean>;
        dest: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        count?: string | undefined;
        origin?: boolean | undefined;
        dest?: boolean | undefined;
    }, {
        count?: string | undefined;
        origin?: boolean | undefined;
        dest?: boolean | undefined;
    }>>;
    issuance: z.ZodOptional<z.ZodObject<{
        waiveRequirement: z.ZodOptional<z.ZodBoolean>;
        shortNotice: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        waiveRequirement?: boolean | undefined;
        shortNotice?: boolean | undefined;
    }, {
        waiveRequirement?: boolean | undefined;
        shortNotice?: boolean | undefined;
    }>>;
    articles: z.ZodOptional<z.ZodObject<{
        highValue: z.ZodOptional<z.ZodBoolean>;
        officeFixtures: z.ZodOptional<z.ZodBoolean>;
        householdGoods: z.ZodOptional<z.ZodBoolean>;
        adviceWeightCharges: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        highValue?: boolean | undefined;
        officeFixtures?: boolean | undefined;
        householdGoods?: boolean | undefined;
        adviceWeightCharges?: string | undefined;
    }, {
        highValue?: boolean | undefined;
        officeFixtures?: boolean | undefined;
        householdGoods?: boolean | undefined;
        adviceWeightCharges?: string | undefined;
    }>>;
    hourlyRate: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    valuation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    hundredweightRate: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    packers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    packing: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    unpacking: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    pieceMoving: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
    itemsOfValue: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>, "many">>;
}, "strip", z.ZodTypeAny, {
    hourlyRate?: Record<string, any> | undefined;
    nameOf?: string | undefined;
    billNotifyAddress?: string | undefined;
    storageType?: string | undefined;
    firstDayRate?: string | undefined;
    additionalDaysRate?: string | undefined;
    warehouseHandlingRate?: string | undefined;
    materials?: string[][] | undefined;
    paymentTypes?: string[] | undefined;
    stripeInputs?: string[][] | undefined;
    packersData?: string[][] | undefined;
    noOfPackers?: {
        count?: string | undefined;
        origin?: boolean | undefined;
        dest?: boolean | undefined;
    } | undefined;
    issuance?: {
        waiveRequirement?: boolean | undefined;
        shortNotice?: boolean | undefined;
    } | undefined;
    articles?: {
        highValue?: boolean | undefined;
        officeFixtures?: boolean | undefined;
        householdGoods?: boolean | undefined;
        adviceWeightCharges?: string | undefined;
    } | undefined;
    valuation?: Record<string, any> | undefined;
    hundredweightRate?: Record<string, any> | undefined;
    packers?: Record<string, any> | undefined;
    packing?: Record<string, any> | undefined;
    unpacking?: Record<string, any> | undefined;
    pieceMoving?: Record<string, any> | undefined;
    itemsOfValue?: Record<string, any>[] | undefined;
}, {
    hourlyRate?: Record<string, any> | undefined;
    nameOf?: string | undefined;
    billNotifyAddress?: string | undefined;
    storageType?: string | undefined;
    firstDayRate?: string | undefined;
    additionalDaysRate?: string | undefined;
    warehouseHandlingRate?: string | undefined;
    materials?: string[][] | undefined;
    paymentTypes?: string[] | undefined;
    stripeInputs?: string[][] | undefined;
    packersData?: string[][] | undefined;
    noOfPackers?: {
        count?: string | undefined;
        origin?: boolean | undefined;
        dest?: boolean | undefined;
    } | undefined;
    issuance?: {
        waiveRequirement?: boolean | undefined;
        shortNotice?: boolean | undefined;
    } | undefined;
    articles?: {
        highValue?: boolean | undefined;
        officeFixtures?: boolean | undefined;
        householdGoods?: boolean | undefined;
        adviceWeightCharges?: string | undefined;
    } | undefined;
    valuation?: Record<string, any> | undefined;
    hundredweightRate?: Record<string, any> | undefined;
    packers?: Record<string, any> | undefined;
    packing?: Record<string, any> | undefined;
    unpacking?: Record<string, any> | undefined;
    pieceMoving?: Record<string, any> | undefined;
    itemsOfValue?: Record<string, any>[] | undefined;
}>;
type StorageHourlyData = z.infer<typeof StorageHourlySchema>;

declare const ValuationSchema: z.ZodObject<{
    choices: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    selectedOption: z.ZodOptional<z.ZodString>;
    transportationRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    maxRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    storageRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    actualCashPerLb: z.ZodOptional<z.ZodString>;
    fullValuePerLb: z.ZodOptional<z.ZodString>;
    declaredValue: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    choices?: string[] | undefined;
    selectedOption?: string | undefined;
    transportationRates?: string[] | undefined;
    maxRates?: string[] | undefined;
    storageRates?: string[] | undefined;
    actualCashPerLb?: string | undefined;
    fullValuePerLb?: string | undefined;
    declaredValue?: string | undefined;
}, {
    choices?: string[] | undefined;
    selectedOption?: string | undefined;
    transportationRates?: string[] | undefined;
    maxRates?: string[] | undefined;
    storageRates?: string[] | undefined;
    actualCashPerLb?: string | undefined;
    fullValuePerLb?: string | undefined;
    declaredValue?: string | undefined;
}>;
type ValuationData = z.infer<typeof ValuationSchema>;

declare const PackingMaterialRowSchema: z.ZodObject<{
    item: z.ZodString;
    perItem: z.ZodString;
    packing: z.ZodString;
    unpacking: z.ZodString;
    qty: z.ZodString;
    total: z.ZodString;
}, "strip", z.ZodTypeAny, {
    packing: string;
    unpacking: string;
    item: string;
    perItem: string;
    qty: string;
    total: string;
}, {
    packing: string;
    unpacking: string;
    item: string;
    perItem: string;
    qty: string;
    total: string;
}>;
type PackingMaterialRow = z.infer<typeof PackingMaterialRowSchema>;

declare const CustomerReleaseItemSchema: z.ZodObject<{
    item: z.ZodString;
    reason: z.ZodString;
    initials: z.ZodString;
}, "strip", z.ZodTypeAny, {
    item: string;
    reason: string;
    initials: string;
}, {
    item: string;
    reason: string;
    initials: string;
}>;
declare const CustomerInfoSchema: z.ZodObject<{
    doubleDriveInitial: z.ZodOptional<z.ZodString>;
    suppliesInitial: z.ZodOptional<z.ZodString>;
    liabilityInitial: z.ZodOptional<z.ZodString>;
    pressboardOption: z.ZodOptional<z.ZodString>;
    parkingTicketInitial: z.ZodOptional<z.ZodString>;
    printName: z.ZodOptional<z.ZodString>;
    releaseItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        reason: z.ZodString;
        initials: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        item: string;
        reason: string;
        initials: string;
    }, {
        item: string;
        reason: string;
        initials: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    doubleDriveInitial?: string | undefined;
    suppliesInitial?: string | undefined;
    liabilityInitial?: string | undefined;
    pressboardOption?: string | undefined;
    parkingTicketInitial?: string | undefined;
    printName?: string | undefined;
    releaseItems?: {
        item: string;
        reason: string;
        initials: string;
    }[] | undefined;
}, {
    doubleDriveInitial?: string | undefined;
    suppliesInitial?: string | undefined;
    liabilityInitial?: string | undefined;
    pressboardOption?: string | undefined;
    parkingTicketInitial?: string | undefined;
    printName?: string | undefined;
    releaseItems?: {
        item: string;
        reason: string;
        initials: string;
    }[] | undefined;
}>;
type CustomerInfoData = z.infer<typeof CustomerInfoSchema>;

declare const DamageRowSchema: z.ZodObject<{
    item: z.ZodString;
    description: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string;
    item: string;
}, {
    description: string;
    item: string;
}>;
type DamageRow = z.infer<typeof DamageRowSchema>;

/**
 * A single signature definition used in contract configs.
 * Describes what signatures should be collected.
 */
interface SignatureDefinition {
    key: string;
    label: string;
    required?: boolean;
    variant?: "inline" | "stacked" | "mark";
}
/**
 * Contract-level signature configuration.
 *
 * NOTE:
 * This does NOT store signatures.
 * It ONLY declares which signatures are needed.
 */
interface ContractSignaturesConfig {
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
declare const ContractSignaturesConfigSchema: z.ZodObject<{
    signatures: z.ZodOptional<z.ZodArray<z.ZodObject<{
        key: z.ZodString;
        label: z.ZodString;
        required: z.ZodOptional<z.ZodBoolean>;
        variant: z.ZodOptional<z.ZodEnum<["inline", "stacked", "mark"]>>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        key: string;
        required?: boolean | undefined;
        variant?: "inline" | "stacked" | "mark" | undefined;
    }, {
        label: string;
        key: string;
        required?: boolean | undefined;
        variant?: "inline" | "stacked" | "mark" | undefined;
    }>, "many">>;
    requiredSignatures: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    dualBatch: z.ZodOptional<z.ZodBoolean>;
    dualBatchKeys: z.ZodOptional<z.ZodObject<{
        pre: z.ZodArray<z.ZodString, "many">;
        post: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        pre: string[];
        post: string[];
    }, {
        pre: string[];
        post: string[];
    }>>;
}, "strip", z.ZodTypeAny, {
    signatures?: {
        label: string;
        key: string;
        required?: boolean | undefined;
        variant?: "inline" | "stacked" | "mark" | undefined;
    }[] | undefined;
    requiredSignatures?: string[] | undefined;
    dualBatch?: boolean | undefined;
    dualBatchKeys?: {
        pre: string[];
        post: string[];
    } | undefined;
}, {
    signatures?: {
        label: string;
        key: string;
        required?: boolean | undefined;
        variant?: "inline" | "stacked" | "mark" | undefined;
    }[] | undefined;
    requiredSignatures?: string[] | undefined;
    dualBatch?: boolean | undefined;
    dualBatchKeys?: {
        pre: string[];
        post: string[];
    } | undefined;
}>;
type ContractSignaturesConfigType = z.infer<typeof ContractSignaturesConfigSchema>;

declare const MilburnContractDataSchema: z.ZodObject<{
    from: z.ZodOptional<z.ZodObject<{
        aptNo: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    }, {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    }>>;
    to: z.ZodOptional<z.ZodObject<{
        aptNo: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    }, {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    }>>;
    meta: z.ZodOptional<z.ZodObject<{
        orderDate: z.ZodOptional<z.ZodString>;
        moveDate: z.ZodOptional<z.ZodString>;
        packDate: z.ZodOptional<z.ZodString>;
        delDate: z.ZodOptional<z.ZodString>;
        takenBy: z.ZodOptional<z.ZodString>;
        bookletDate: z.ZodOptional<z.ZodString>;
        receivedPayment: z.ZodOptional<z.ZodBoolean>;
        reference: z.ZodOptional<z.ZodString>;
        client: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        client?: string | undefined;
        moveDate?: string | undefined;
        reference?: string | undefined;
        orderDate?: string | undefined;
        packDate?: string | undefined;
        delDate?: string | undefined;
        takenBy?: string | undefined;
        bookletDate?: string | undefined;
        receivedPayment?: boolean | undefined;
    }, {
        client?: string | undefined;
        moveDate?: string | undefined;
        reference?: string | undefined;
        orderDate?: string | undefined;
        packDate?: string | undefined;
        delDate?: string | undefined;
        takenBy?: string | undefined;
        bookletDate?: string | undefined;
        receivedPayment?: boolean | undefined;
    }>>;
    delivery: z.ZodOptional<z.ZodObject<{
        note: z.ZodOptional<z.ZodString>;
        notify: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        nameOf: z.ZodOptional<z.ZodString>;
        billNotifyAddress: z.ZodOptional<z.ZodString>;
        shipperCantFurnish: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        phone?: string | undefined;
        address?: string | undefined;
        note?: string | undefined;
        notify?: string | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        shipperCantFurnish?: boolean | undefined;
    }, {
        phone?: string | undefined;
        address?: string | undefined;
        note?: string | undefined;
        notify?: string | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        shipperCantFurnish?: boolean | undefined;
    }>>;
    storageHourly: z.ZodOptional<z.ZodObject<{
        storageType: z.ZodOptional<z.ZodString>;
        nameOf: z.ZodOptional<z.ZodString>;
        billNotifyAddress: z.ZodOptional<z.ZodString>;
        firstDayRate: z.ZodOptional<z.ZodString>;
        additionalDaysRate: z.ZodOptional<z.ZodString>;
        warehouseHandlingRate: z.ZodOptional<z.ZodString>;
        materials: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
        paymentTypes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        stripeInputs: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
        packersData: z.ZodOptional<z.ZodArray<z.ZodArray<z.ZodString, "many">, "many">>;
        noOfPackers: z.ZodOptional<z.ZodObject<{
            count: z.ZodOptional<z.ZodString>;
            origin: z.ZodOptional<z.ZodBoolean>;
            dest: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        }, {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        }>>;
        issuance: z.ZodOptional<z.ZodObject<{
            waiveRequirement: z.ZodOptional<z.ZodBoolean>;
            shortNotice: z.ZodOptional<z.ZodBoolean>;
        }, "strip", z.ZodTypeAny, {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        }, {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        }>>;
        articles: z.ZodOptional<z.ZodObject<{
            highValue: z.ZodOptional<z.ZodBoolean>;
            officeFixtures: z.ZodOptional<z.ZodBoolean>;
            householdGoods: z.ZodOptional<z.ZodBoolean>;
            adviceWeightCharges: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        }, {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        }>>;
        hourlyRate: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        valuation: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        hundredweightRate: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        packers: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        packing: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        unpacking: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        pieceMoving: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
        itemsOfValue: z.ZodOptional<z.ZodArray<z.ZodRecord<z.ZodString, z.ZodAny>, "many">>;
    }, "strip", z.ZodTypeAny, {
        hourlyRate?: Record<string, any> | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        storageType?: string | undefined;
        firstDayRate?: string | undefined;
        additionalDaysRate?: string | undefined;
        warehouseHandlingRate?: string | undefined;
        materials?: string[][] | undefined;
        paymentTypes?: string[] | undefined;
        stripeInputs?: string[][] | undefined;
        packersData?: string[][] | undefined;
        noOfPackers?: {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        } | undefined;
        issuance?: {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        } | undefined;
        articles?: {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        } | undefined;
        valuation?: Record<string, any> | undefined;
        hundredweightRate?: Record<string, any> | undefined;
        packers?: Record<string, any> | undefined;
        packing?: Record<string, any> | undefined;
        unpacking?: Record<string, any> | undefined;
        pieceMoving?: Record<string, any> | undefined;
        itemsOfValue?: Record<string, any>[] | undefined;
    }, {
        hourlyRate?: Record<string, any> | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        storageType?: string | undefined;
        firstDayRate?: string | undefined;
        additionalDaysRate?: string | undefined;
        warehouseHandlingRate?: string | undefined;
        materials?: string[][] | undefined;
        paymentTypes?: string[] | undefined;
        stripeInputs?: string[][] | undefined;
        packersData?: string[][] | undefined;
        noOfPackers?: {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        } | undefined;
        issuance?: {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        } | undefined;
        articles?: {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        } | undefined;
        valuation?: Record<string, any> | undefined;
        hundredweightRate?: Record<string, any> | undefined;
        packers?: Record<string, any> | undefined;
        packing?: Record<string, any> | undefined;
        unpacking?: Record<string, any> | undefined;
        pieceMoving?: Record<string, any> | undefined;
        itemsOfValue?: Record<string, any>[] | undefined;
    }>>;
    valuation: z.ZodOptional<z.ZodObject<{
        choices: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        selectedOption: z.ZodOptional<z.ZodString>;
        transportationRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        maxRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        storageRates: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        actualCashPerLb: z.ZodOptional<z.ZodString>;
        fullValuePerLb: z.ZodOptional<z.ZodString>;
        declaredValue: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        choices?: string[] | undefined;
        selectedOption?: string | undefined;
        transportationRates?: string[] | undefined;
        maxRates?: string[] | undefined;
        storageRates?: string[] | undefined;
        actualCashPerLb?: string | undefined;
        fullValuePerLb?: string | undefined;
        declaredValue?: string | undefined;
    }, {
        choices?: string[] | undefined;
        selectedOption?: string | undefined;
        transportationRates?: string[] | undefined;
        maxRates?: string[] | undefined;
        storageRates?: string[] | undefined;
        actualCashPerLb?: string | undefined;
        fullValuePerLb?: string | undefined;
        declaredValue?: string | undefined;
    }>>;
    notice: z.ZodOptional<z.ZodObject<{
        notToExceedAmount: z.ZodOptional<z.ZodString>;
        services: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        notToExceedAmount?: string | undefined;
        services?: string | undefined;
    }, {
        notToExceedAmount?: string | undefined;
        services?: string | undefined;
    }>>;
    customerInfo: z.ZodOptional<z.ZodObject<{
        doubleDriveInitial: z.ZodOptional<z.ZodString>;
        suppliesInitial: z.ZodOptional<z.ZodString>;
        liabilityInitial: z.ZodOptional<z.ZodString>;
        pressboardOption: z.ZodOptional<z.ZodString>;
        parkingTicketInitial: z.ZodOptional<z.ZodString>;
        printName: z.ZodOptional<z.ZodString>;
        releaseItems: z.ZodOptional<z.ZodArray<z.ZodObject<{
            item: z.ZodString;
            reason: z.ZodString;
            initials: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            item: string;
            reason: string;
            initials: string;
        }, {
            item: string;
            reason: string;
            initials: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        doubleDriveInitial?: string | undefined;
        suppliesInitial?: string | undefined;
        liabilityInitial?: string | undefined;
        pressboardOption?: string | undefined;
        parkingTicketInitial?: string | undefined;
        printName?: string | undefined;
        releaseItems?: {
            item: string;
            reason: string;
            initials: string;
        }[] | undefined;
    }, {
        doubleDriveInitial?: string | undefined;
        suppliesInitial?: string | undefined;
        liabilityInitial?: string | undefined;
        pressboardOption?: string | undefined;
        parkingTicketInitial?: string | undefined;
        printName?: string | undefined;
        releaseItems?: {
            item: string;
            reason: string;
            initials: string;
        }[] | undefined;
    }>>;
    materials: z.ZodOptional<z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        perItem: z.ZodString;
        packing: z.ZodString;
        unpacking: z.ZodString;
        qty: z.ZodString;
        total: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        packing: string;
        unpacking: string;
        item: string;
        perItem: string;
        qty: string;
        total: string;
    }, {
        packing: string;
        unpacking: string;
        item: string;
        perItem: string;
        qty: string;
        total: string;
    }>, "many">>;
    damagePre: z.ZodOptional<z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        item: string;
    }, {
        description: string;
        item: string;
    }>, "many">>;
    damagePost: z.ZodOptional<z.ZodArray<z.ZodObject<{
        item: z.ZodString;
        description: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description: string;
        item: string;
    }, {
        description: string;
        item: string;
    }>, "many">>;
    paymentDetails: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    summary: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strip", z.ZodTypeAny, {
    from?: {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    } | undefined;
    to?: {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    } | undefined;
    paymentDetails?: Record<string, string> | undefined;
    summary?: Record<string, any> | undefined;
    materials?: {
        packing: string;
        unpacking: string;
        item: string;
        perItem: string;
        qty: string;
        total: string;
    }[] | undefined;
    valuation?: {
        choices?: string[] | undefined;
        selectedOption?: string | undefined;
        transportationRates?: string[] | undefined;
        maxRates?: string[] | undefined;
        storageRates?: string[] | undefined;
        actualCashPerLb?: string | undefined;
        fullValuePerLb?: string | undefined;
        declaredValue?: string | undefined;
    } | undefined;
    meta?: {
        client?: string | undefined;
        moveDate?: string | undefined;
        reference?: string | undefined;
        orderDate?: string | undefined;
        packDate?: string | undefined;
        delDate?: string | undefined;
        takenBy?: string | undefined;
        bookletDate?: string | undefined;
        receivedPayment?: boolean | undefined;
    } | undefined;
    delivery?: {
        phone?: string | undefined;
        address?: string | undefined;
        note?: string | undefined;
        notify?: string | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        shipperCantFurnish?: boolean | undefined;
    } | undefined;
    storageHourly?: {
        hourlyRate?: Record<string, any> | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        storageType?: string | undefined;
        firstDayRate?: string | undefined;
        additionalDaysRate?: string | undefined;
        warehouseHandlingRate?: string | undefined;
        materials?: string[][] | undefined;
        paymentTypes?: string[] | undefined;
        stripeInputs?: string[][] | undefined;
        packersData?: string[][] | undefined;
        noOfPackers?: {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        } | undefined;
        issuance?: {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        } | undefined;
        articles?: {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        } | undefined;
        valuation?: Record<string, any> | undefined;
        hundredweightRate?: Record<string, any> | undefined;
        packers?: Record<string, any> | undefined;
        packing?: Record<string, any> | undefined;
        unpacking?: Record<string, any> | undefined;
        pieceMoving?: Record<string, any> | undefined;
        itemsOfValue?: Record<string, any>[] | undefined;
    } | undefined;
    notice?: {
        notToExceedAmount?: string | undefined;
        services?: string | undefined;
    } | undefined;
    customerInfo?: {
        doubleDriveInitial?: string | undefined;
        suppliesInitial?: string | undefined;
        liabilityInitial?: string | undefined;
        pressboardOption?: string | undefined;
        parkingTicketInitial?: string | undefined;
        printName?: string | undefined;
        releaseItems?: {
            item: string;
            reason: string;
            initials: string;
        }[] | undefined;
    } | undefined;
    damagePre?: {
        description: string;
        item: string;
    }[] | undefined;
    damagePost?: {
        description: string;
        item: string;
    }[] | undefined;
}, {
    from?: {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    } | undefined;
    to?: {
        phone?: string | undefined;
        address?: string | undefined;
        aptNo?: string | undefined;
    } | undefined;
    paymentDetails?: Record<string, string> | undefined;
    summary?: Record<string, any> | undefined;
    materials?: {
        packing: string;
        unpacking: string;
        item: string;
        perItem: string;
        qty: string;
        total: string;
    }[] | undefined;
    valuation?: {
        choices?: string[] | undefined;
        selectedOption?: string | undefined;
        transportationRates?: string[] | undefined;
        maxRates?: string[] | undefined;
        storageRates?: string[] | undefined;
        actualCashPerLb?: string | undefined;
        fullValuePerLb?: string | undefined;
        declaredValue?: string | undefined;
    } | undefined;
    meta?: {
        client?: string | undefined;
        moveDate?: string | undefined;
        reference?: string | undefined;
        orderDate?: string | undefined;
        packDate?: string | undefined;
        delDate?: string | undefined;
        takenBy?: string | undefined;
        bookletDate?: string | undefined;
        receivedPayment?: boolean | undefined;
    } | undefined;
    delivery?: {
        phone?: string | undefined;
        address?: string | undefined;
        note?: string | undefined;
        notify?: string | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        shipperCantFurnish?: boolean | undefined;
    } | undefined;
    storageHourly?: {
        hourlyRate?: Record<string, any> | undefined;
        nameOf?: string | undefined;
        billNotifyAddress?: string | undefined;
        storageType?: string | undefined;
        firstDayRate?: string | undefined;
        additionalDaysRate?: string | undefined;
        warehouseHandlingRate?: string | undefined;
        materials?: string[][] | undefined;
        paymentTypes?: string[] | undefined;
        stripeInputs?: string[][] | undefined;
        packersData?: string[][] | undefined;
        noOfPackers?: {
            count?: string | undefined;
            origin?: boolean | undefined;
            dest?: boolean | undefined;
        } | undefined;
        issuance?: {
            waiveRequirement?: boolean | undefined;
            shortNotice?: boolean | undefined;
        } | undefined;
        articles?: {
            highValue?: boolean | undefined;
            officeFixtures?: boolean | undefined;
            householdGoods?: boolean | undefined;
            adviceWeightCharges?: string | undefined;
        } | undefined;
        valuation?: Record<string, any> | undefined;
        hundredweightRate?: Record<string, any> | undefined;
        packers?: Record<string, any> | undefined;
        packing?: Record<string, any> | undefined;
        unpacking?: Record<string, any> | undefined;
        pieceMoving?: Record<string, any> | undefined;
        itemsOfValue?: Record<string, any>[] | undefined;
    } | undefined;
    notice?: {
        notToExceedAmount?: string | undefined;
        services?: string | undefined;
    } | undefined;
    customerInfo?: {
        doubleDriveInitial?: string | undefined;
        suppliesInitial?: string | undefined;
        liabilityInitial?: string | undefined;
        pressboardOption?: string | undefined;
        parkingTicketInitial?: string | undefined;
        printName?: string | undefined;
        releaseItems?: {
            item: string;
            reason: string;
            initials: string;
        }[] | undefined;
    } | undefined;
    damagePre?: {
        description: string;
        item: string;
    }[] | undefined;
    damagePost?: {
        description: string;
        item: string;
    }[] | undefined;
}>;
type MilburnContractData = z.infer<typeof MilburnContractDataSchema>;

interface ContractPropsBase<TData> {
    data: TData;
    batch?: "pre" | "post";
}
interface ContractPropsFieldApp<TData> extends ContractPropsBase<TData> {
    onChange?: (field: keyof TData, value: TData[keyof TData]) => void;
}
interface ContractPropsRenderer<TData> extends ContractPropsBase<TData> {
    signatures?: ScopedSignatures;
}

declare const PRE_MOVE_CONTRACTS: SharedContractDefinition<MilburnContractData>[];

declare const POST_MOVE_CONTRACTS: SharedContractDefinition<MilburnContractData>[];

interface SharedContractDefinition<TData = unknown> extends ContractSignaturesConfig {
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

declare const UserRoleSchema: z.ZodEnum<["admin", "foreman"]>;
declare const UserCoreSchema: z.ZodObject<{
    id: z.ZodString;
    email: z.ZodString;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodEnum<["admin", "foreman"]>;
    isActive: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    role: "admin" | "foreman";
    phone?: string | null | undefined;
    name?: string | null | undefined;
    nickname?: string | null | undefined;
}, {
    id: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    isActive: boolean;
    role: "admin" | "foreman";
    phone?: string | null | undefined;
    name?: string | null | undefined;
    nickname?: string | null | undefined;
}>;
type UserRole = z.infer<typeof UserRoleSchema>;
type UserCore = z.infer<typeof UserCoreSchema>;

declare const CreateUserPayloadSchema: z.ZodObject<{
    email: z.ZodString;
    nickname: z.ZodOptional<z.ZodString>;
    name: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    role: z.ZodEnum<["admin", "foreman"]>;
}, "strip", z.ZodTypeAny, {
    email: string;
    role: "admin" | "foreman";
    phone?: string | undefined;
    name?: string | undefined;
    nickname?: string | undefined;
}, {
    email: string;
    role: "admin" | "foreman";
    phone?: string | undefined;
    name?: string | undefined;
    nickname?: string | undefined;
}>;
declare const UpdateUserPayloadSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    nickname: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
    role: z.ZodOptional<z.ZodEnum<["admin", "foreman"]>>;
    isActive: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    phone?: string | undefined;
    name?: string | undefined;
    isActive?: boolean | undefined;
    nickname?: string | undefined;
    role?: "admin" | "foreman" | undefined;
}, {
    phone?: string | undefined;
    name?: string | undefined;
    isActive?: boolean | undefined;
    nickname?: string | undefined;
    role?: "admin" | "foreman" | undefined;
}>;
type CreateUserPayload = z.infer<typeof CreateUserPayloadSchema>;
type UpdateUserPayload = z.infer<typeof UpdateUserPayloadSchema>;

declare const AdminUserResponseSchema: z.ZodObject<{
    id: z.ZodString;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    email: z.ZodString;
    name: z.ZodNullable<z.ZodString>;
    phone: z.ZodNullable<z.ZodString>;
    role: z.ZodEnum<["admin", "foreman"]>;
    isActive: z.ZodBoolean;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    jobCount: z.ZodOptional<z.ZodNumber>;
    lastActiveAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    onboardingPending: z.ZodOptional<z.ZodBoolean>;
    onboardingExpired: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    id: string;
    phone: string | null;
    email: string;
    createdAt: string;
    updatedAt: string;
    name: string | null;
    isActive: boolean;
    role: "admin" | "foreman";
    nickname?: string | null | undefined;
    jobCount?: number | undefined;
    lastActiveAt?: string | null | undefined;
    onboardingPending?: boolean | undefined;
    onboardingExpired?: boolean | undefined;
}, {
    id: string;
    phone: string | null;
    email: string;
    createdAt: string;
    updatedAt: string;
    name: string | null;
    isActive: boolean;
    role: "admin" | "foreman";
    nickname?: string | null | undefined;
    jobCount?: number | undefined;
    lastActiveAt?: string | null | undefined;
    onboardingPending?: boolean | undefined;
    onboardingExpired?: boolean | undefined;
}>;
type AdminUserResponse = z.infer<typeof AdminUserResponseSchema>;

declare const CreateUserResponseSchema: z.ZodObject<{
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<["admin", "foreman"]>;
        isActive: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    }, {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    }>;
    onboardingLink: z.ZodString;
}, "strip", z.ZodTypeAny, {
    user: {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    };
    onboardingLink: string;
}, {
    user: {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    };
    onboardingLink: string;
}>;
type CreateUserResponse = z.infer<typeof CreateUserResponseSchema>;

declare const LoginResponseSchema: z.ZodObject<{
    token: z.ZodString;
    user: z.ZodObject<{
        id: z.ZodString;
        email: z.ZodString;
        name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        role: z.ZodEnum<["admin", "foreman"]>;
        isActive: z.ZodBoolean;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    }, {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    user: {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    };
    token: string;
}, {
    user: {
        id: string;
        email: string;
        createdAt: string;
        updatedAt: string;
        isActive: boolean;
        role: "admin" | "foreman";
        phone?: string | null | undefined;
        name?: string | null | undefined;
        nickname?: string | null | undefined;
    };
    token: string;
}>;
type LoginResponse = z.infer<typeof LoginResponseSchema>;

declare const LoginPayloadSchema: z.ZodObject<{
    identifier: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    identifier: string;
    password: string;
}, {
    identifier: string;
    password: string;
}>;
type LoginPayload = z.infer<typeof LoginPayloadSchema>;

declare const OnboardingCompletePayloadSchema: z.ZodObject<{
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    password: string;
}, {
    password: string;
}>;
type OnboardingCompletePayload = z.infer<typeof OnboardingCompletePayloadSchema>;

declare const DashboardRangeSchema: z.ZodObject<{
    range: z.ZodDefault<z.ZodEnum<["1m", "3m", "6m", "12m"]>>;
}, "strip", z.ZodTypeAny, {
    range: "1m" | "3m" | "6m" | "12m";
}, {
    range?: "1m" | "3m" | "6m" | "12m" | undefined;
}>;
type DashboardRange = z.infer<typeof DashboardRangeSchema>;

declare const DashboardKpiMetricSchema: z.ZodObject<{
    value: z.ZodNumber;
    prevValue: z.ZodNumber;
    percent: z.ZodNumber;
    sparkline: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    value: number;
    prevValue: number;
    percent: number;
    sparkline: number[];
}, {
    value: number;
    prevValue: number;
    percent: number;
    sparkline: number[];
}>;
type DashboardKpiMetric = z.infer<typeof DashboardKpiMetricSchema>;
declare const DashboardKpisSchema: z.ZodObject<{
    totalJobs: z.ZodObject<{
        value: z.ZodNumber;
        prevValue: z.ZodNumber;
        percent: z.ZodNumber;
        sparkline: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }>;
    totalRevenue: z.ZodObject<{
        value: z.ZodNumber;
        prevValue: z.ZodNumber;
        percent: z.ZodNumber;
        sparkline: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }>;
    extrasRevenue: z.ZodObject<{
        value: z.ZodNumber;
        prevValue: z.ZodNumber;
        percent: z.ZodNumber;
        sparkline: z.ZodArray<z.ZodNumber, "many">;
    }, "strip", z.ZodTypeAny, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }, {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    }>;
}, "strip", z.ZodTypeAny, {
    totalJobs: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
    totalRevenue: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
    extrasRevenue: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
}, {
    totalJobs: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
    totalRevenue: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
    extrasRevenue: {
        value: number;
        prevValue: number;
        percent: number;
        sparkline: number[];
    };
}>;
type DashboardKpis = z.infer<typeof DashboardKpisSchema>;

declare const JobsByStatusItemSchema: z.ZodObject<{
    status: z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    count: number;
}, {
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    count: number;
}>;
type JobsByStatusItem = z.infer<typeof JobsByStatusItemSchema>;

declare const RevenueBreakdownSchema: z.ZodObject<{
    laborTotal: z.ZodNumber;
    extrasTotal: z.ZodNumber;
    tipsTotal: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    laborTotal: number;
    extrasTotal: number;
    tipsTotal: number;
}, {
    laborTotal: number;
    extrasTotal: number;
    tipsTotal: number;
}>;
type RevenueBreakdown = z.infer<typeof RevenueBreakdownSchema>;

declare const LatestJobItemSchema: z.ZodObject<{
    id: z.ZodString;
    client: z.ZodString;
    createdAt: z.ZodString;
    status: z.ZodEnum<["draft", "scheduled", "in_progress", "completed", "cancelled"]>;
    summary: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        totalPrice: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        totalPrice: number;
    }, {
        totalPrice: number;
    }>>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    client: string;
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    createdAt: string;
    summary?: {
        totalPrice: number;
    } | null | undefined;
}, {
    id: string;
    client: string;
    status: "draft" | "scheduled" | "in_progress" | "completed" | "cancelled";
    createdAt: string;
    summary?: {
        totalPrice: number;
    } | null | undefined;
}>;
type LatestJobItem = z.infer<typeof LatestJobItemSchema>;

declare const JobTypeBreakdownItemSchema: z.ZodObject<{
    label: z.ZodString;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    label: string;
    count: number;
}, {
    label: string;
    count: number;
}>;
type JobTypeBreakdownItem = z.infer<typeof JobTypeBreakdownItemSchema>;
declare const JobTypeBreakdownSchema: z.ZodArray<z.ZodObject<{
    label: z.ZodString;
    count: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    label: string;
    count: number;
}, {
    label: string;
    count: number;
}>, "many">;
type JobTypeBreakdown = z.infer<typeof JobTypeBreakdownSchema>;

declare const NotificationSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    title: z.ZodString;
    message: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    link: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodUnion<[z.ZodString, z.ZodString]>, z.ZodString]>, z.ZodNull]>>;
    createdAt: z.ZodDate;
    readAt: z.ZodNullable<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    id: string;
    createdAt: Date;
    userId: string;
    title: string;
    readAt: string | null;
    message?: string | null | undefined;
    link?: string | null | undefined;
}, {
    id: string;
    createdAt: Date;
    userId: string;
    title: string;
    readAt: string | null;
    message?: string | null | undefined;
    link?: string | null | undefined;
}>;
type NotificationItem = z.infer<typeof NotificationSchema>;

export { type AddressBlock, AddressBlockSchema, AdminContractKeySchema, AdminContractListSchema, type AdminJobResponse, AdminJobResponseSchema, AdminJobStopSchema, type AdminUserResponse, AdminUserResponseSchema, type ContractPropsBase, type ContractPropsFieldApp, type ContractPropsRenderer, type ContractSignaturesConfig, ContractSignaturesConfigSchema, type ContractSignaturesConfigType, type CreateJobPayload, CreateJobPayloadSchema, type CreateUserPayload, CreateUserPayloadSchema, type CreateUserResponse, CreateUserResponseSchema, type CustomerInfoData, CustomerInfoSchema, CustomerReleaseItemSchema, type DamageRow, DamageRowSchema, type DashboardKpiMetric, DashboardKpiMetricSchema, type DashboardKpis, DashboardKpisSchema, type DashboardRange, DashboardRangeSchema, type DeliveryData, DeliverySchema, type ExtraItem, ExtraItemSchema, type FieldJobUpdate, FieldJobUpdateSchema, type JobContracts, JobContractsSchema, type JobCore, JobCoreSchema, type JobPackage, type JobPackageCreate, JobPackageCreateSchema, type JobPackageRow, JobPackageSchema, type JobPartialUpdate, JobPartialUpdateSchema, type JobSettings, JobSettingsSchema, JobStatusEnum, type JobStop, type JobStops, type JobSummary, JobSummarySchema, type JobTypeBreakdown, type JobTypeBreakdownItem, JobTypeBreakdownItemSchema, JobTypeBreakdownSchema, type JobsByStatusItem, JobsByStatusItemSchema, type LatestJobItem, LatestJobItemSchema, type LoginPayload, LoginPayloadSchema, type LoginResponse, LoginResponseSchema, type MilburnContractData, MilburnContractDataSchema, type MilburnMeta, MilburnMetaSchema, type NotificationItem, NotificationSchema, type OnboardingCompletePayload, OnboardingCompletePayloadSchema, POST_MOVE_CONTRACTS, PRE_MOVE_CONTRACTS, type PackageMarketing, PackageMarketingSchema, type PackingMaterialRow, PackingMaterialRowSchema, type RevenueBreakdown, RevenueBreakdownSchema, type ScopedSignatures, ScopedSignaturesSchema, type SharedContractDefinition, type SignatureDefinition, SignatureScopeSchema, type Step, StepSchema, StopSchema, StopsSchema, type StorageHourlyData, StorageHourlySchema, type UpdateUserPayload, UpdateUserPayloadSchema, type UserCore, UserCoreSchema, type UserRole, UserRoleSchema, type ValuationData, ValuationSchema };
