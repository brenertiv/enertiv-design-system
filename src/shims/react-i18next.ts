import type { ReactNode } from "react";

export function useTranslation() {
  return {
    t: (key: string, _opts?: unknown) => key,
    i18n: { language: "en", changeLanguage: () => Promise.resolve() },
  };
}

export function Trans({ children }: { children?: ReactNode }) {
  return children;
}

export function useI18n() {
  return useTranslation().i18n;
}

export const initReactI18next = {
  type: "3rdParty",
  init: () => undefined,
};
