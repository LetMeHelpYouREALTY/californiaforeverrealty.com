import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { canonicalOriginFromHost } from "@/lib/canonical-host";

export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host =
    (await headers()).get("x-domain") || (await headers()).get("host") || "";
  const origin = canonicalOriginFromHost(host);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/monitoring/", "/admin/"],
    },
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
