import type { ReactNode } from "react";

export function IntercomProvider({ children }: { children?: ReactNode }) {
  return children;
}

export function useIntercom() {
  return {
    update: () => undefined,
    show: () => undefined,
    hide: () => undefined,
    boot: () => undefined,
    shutdown: () => undefined,
  };
}

export default { IntercomProvider, useIntercom };
