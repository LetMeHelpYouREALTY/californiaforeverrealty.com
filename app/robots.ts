import { MetadataRoute } from "next";
import { headers } from "next/headers";
import { canonicalOriginFromHost } from "@/lib/canonical-host";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const host = headers().get("x-domain") || headers().get("host") || "";
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
