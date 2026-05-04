import type { MessageKey } from "./dictionaries/en";

export type ServiceI18nPrefix =
  | "onsite"
  | "datacenter"
  | "staging"
  | "validation"
  | "assurance"
  | "coordination";

export function svcKey(prefix: ServiceI18nPrefix, part: string): MessageKey {
  return `svc.${prefix}.${part}` as MessageKey;
}
