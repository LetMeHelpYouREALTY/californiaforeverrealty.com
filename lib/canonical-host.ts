import { DOMAIN_CONFIGS } from "@/lib/domain-config";

/** Hosts that canonicalize on www. Matches the live apex redirect. */
const WWW_HOSTS = new Set(["heyberkshire.com", "californiaforeverrealty.com"]);

/**
 * Absolute origin for sitemap, robots, and canonical URLs.
 * Strips a port and a leading www before matching known domains.
 */
export function canonicalOriginFromHost(hostHeader: string): string {
  const hostname = hostHeader.split(":")[0].replace(/^www\./, "").toLowerCase();

  if (WWW_HOSTS.has(hostname)) {
    return `https://www.${hostname}`;
  }

  if (hostname in DOMAIN_CONFIGS) {
    return `https://${hostname}`;
  }

  return "https://www.heyberkshire.com";
}
