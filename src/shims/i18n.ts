const i18n = {
  t: (k: string) => k,
  language: "en",
  changeLanguage: () => Promise.resolve(),
  use: () => i18n,
};

export { i18n };
export default i18n;
export const initReactI18next = { type: "3rdParty", init: () => undefined };

