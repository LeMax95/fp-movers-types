import type { ScopedSignatures } from "../job/job-signatures";

export interface ContractPropsBase<TData> {
  data: TData;
  batch?: "pre" | "post";
}

export interface ContractPropsFieldApp<TData>
  extends ContractPropsBase<TData> {
  onChange?: (field: keyof TData, value: TData[keyof TData]) => void;
}

export interface ContractPropsRenderer<TData>
  extends ContractPropsBase<TData> {
  signatures?: ScopedSignatures;
}
