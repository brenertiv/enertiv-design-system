import { useState } from "react";

export const StringParam = { encode: String, decode: String };
export const NumberParam = { encode: Number, decode: Number };
export const BooleanParam = { encode: Boolean, decode: Boolean };
export const ArrayParam = { encode: JSON.stringify, decode: JSON.parse };
export const DateParam = { encode: String, decode: String };
export const NumericArrayParam = NumberParam;
export const DelimitedArrayParam = ArrayParam;

export function useQueryParam<T>(_key?: string, _spec?: unknown): [T | undefined, (v: T, t?: string) => void] {
  const [value, setValue] = useState<T | undefined>(undefined);
  return [value, setValue];
}

export function useQueryParams(_spec?: unknown): [Record<string, unknown>, (v: Record<string, unknown>) => void] {
  const [value, setValue] = useState<Record<string, unknown>>({});
  return [value, setValue];
}

export function encodeDelimitedArray(array?: unknown, delimiter = ",") {
  return Array.isArray(array) ? array.join(delimiter) : "";
}

export function decodeDelimitedArray(value?: string, delimiter = ",") {
  return value ? value.split(delimiter) : [];
}

export function QueryParamProvider({ children }: { children?: unknown }) {
  return children;
}
