import { describe, expect, it } from "vitest";
import { californiaForeverHeadings } from "@/lib/california-forever-headings";
import { canonicalOriginFromHost } from "@/lib/canonical-host";
import { getDomainConfig } from "@/lib/domain-config";

describe("canonicalOriginFromHost", () => {
  it("uses www for California Forever Realty", () => {
    expect(canonicalOriginFromHost("californiaforeverrealty.com")).toBe(
      "https://www.californiaforeverrealty.com"
    );
    expect(canonicalOriginFromHost("www.californiaforeverrealty.com")).toBe(
      "https://www.californiaforeverrealty.com"
    );
  });

  it("keeps HeyBerkshire on www", () => {
    expect(canonicalOriginFromHost("heyberkshire.com")).toBe("https://www.heyberkshire.com");
  });

  it("uses the apex host for other known domains", () => {
    expect(canonicalOriginFromHost("www.aliantehomesforsale.com")).toBe(
      "https://aliantehomesforsale.com"
    );
  });
});

describe("California Forever Realty headings", () => {
  it("has one H1 on the domain config and H2s with H3s", () => {
    const config = getDomainConfig("www.californiaforeverrealty.com");
    expect(config.siteName).toBe("California Forever Realty");
    expect(config.heroHeadline.startsWith("Moving from California")).toBe(true);
    expect(californiaForeverHeadings.length).toBeGreaterThanOrEqual(3);
    for (const section of californiaForeverHeadings) {
      expect(section.h2.length).toBeGreaterThan(0);
      expect(section.topics.length).toBeGreaterThan(0);
      for (const topic of section.topics) {
        expect(topic.h3.length).toBeGreaterThan(0);
        expect(topic.body.length).toBeGreaterThan(0);
      }
    }
  });
});
