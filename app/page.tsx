import type { Metadata } from "next";
import Image from "next/image";
import SiteNavbar from "@/components/layouts/SiteNavbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import { SiteHeadingOutline } from "@/components/sections/SiteHeadingOutline";
import Link from "next/link";
import { Phone, Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { canonicalOriginFromHost } from "@/lib/canonical-host";
import {
  CALIFORNIA_FOREVER_DOMAIN,
  californiaForeverHeadings,
} from "@/lib/california-forever-headings";
import { marketStats } from "@/lib/site-config";

export async function generateMetadata(): Promise<Metadata> {
  const config = await getPageDomainConfig();
  const origin = canonicalOriginFromHost(
    config.domain === "default" ? "heyberkshire.com" : config.domain
  );

  return {
    alternates: { canonical: `${origin}/` },
    description: config.description,
    title: config.siteName
      ? { absolute: `${config.heroHeadline} | ${config.siteName}` }
      : undefined,
  };
}

export default async function Home() {
  const config = await getPageDomainConfig();
  const isOwnSite = config.domain === CALIFORNIA_FOREVER_DOMAIN;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Dr. Jan Duffy - ${config.neighborhood} Real Estate`,
    alternateName: config.siteName,
    url: canonicalOriginFromHost(config.domain === "default" ? "heyberkshire.com" : config.domain),
    telephone: "+1-702-500-1942",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <SiteNavbar />
      <main>
        {/* Domain-Aware Hero. Decorative wash is a compressed WebP, not the 2.3MB JPEG. */}
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <Image
            src="/images/hero/hero-wash.webp"
            alt=""
            width={828}
            height={580}
            unoptimized
            priority={false}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
          <div className="relative z-10 container mx-auto px-4 text-center">
            {config.ctaBadge && (
              <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                {config.ctaBadge}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {config.heroHeadline}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
              {config.heroSubheadline}
            </p>

            {/* RealScout Search Widget */}
            <div className="mb-8 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">500+</span>
                <span>Families Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">30+ Years</span>
                <span>Las Vegas Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">4.9★</span>
                <span>Client Rating</span>
              </div>
            </div>
          </div>
        </section>

        {isOwnSite ? (
          <SiteHeadingOutline sections={californiaForeverHeadings.slice(0, 1)} showNap={false} />
        ) : null}

        {/* Value Proposition */}
        {isOwnSite ? null : (
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — the most trusted name in Las Vegas real estate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Trusted Brand", desc: "Backed by Warren Buffett's Berkshire Hathaway — unmatched integrity" },
                { icon: Users, title: "50K+ Network", desc: "Global referral network for seamless moves to or from any market" },
                { icon: TrendingUp, title: "$127M+ Sold", desc: "Proven results across every Las Vegas neighborhood since 2008" },
                { icon: HomeIcon, title: "Full Service", desc: "Buying, selling, 55+, luxury, investment — one expert handles it all" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Market Stats */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">
                {config.neighborhood} Real Estate Market
              </h2>
              <p className="text-slate-400">Figures from {marketStats.lastUpdated}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: marketStats.lasVegas.medianPriceFormatted, label: "Median Price", sub: marketStats.lasVegas.yearOverYearChange + " YoY" },
                { value: String(marketStats.lasVegas.daysOnMarket), label: "Avg Days on Market", sub: "" },
                { value: marketStats.lasVegas.activeListings.toLocaleString("en-US"), label: "Active Listings", sub: "" },
                { value: String(marketStats.lasVegas.inventoryMonths), label: "Months Inventory", sub: "" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-1">{value}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                  {sub && <div className="text-green-400 text-xs mt-1">{sub}</div>}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/market-report" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Full Market Report
              </Link>
            </div>
          </div>
        </section>

        {isOwnSite ? (
          <RealScoutListings
            showHeading={false}
            title="Las Vegas homes for sale"
            subtitle="Listings Dr. Jan Duffy can tour with you."
          />
        ) : (
          <RealScoutListings />
        )}
        {isOwnSite ? (
          <SiteHeadingOutline
            sections={californiaForeverHeadings.slice(1)}
            showEyebrow={false}
            className="pb-16 bg-white"
          />
        ) : (
          <WhyChooseUs />
        )}
        <ReviewsSection
          title={isOwnSite ? "What clients say" : undefined}
          subtitle={
            isOwnSite
              ? "Reviews from Las Vegas and Henderson buyers and sellers."
              : undefined
          }
        />
        <FAQSection
          title={isOwnSite ? "Questions before the move" : undefined}
          subtitle={
            isOwnSite
              ? "Timing, cost, and how a California sale lines up with a Nevada purchase."
              : undefined
          }
        />

        {/* Domain-Specific CTA */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {config.ctaHeadline}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {config.ctaSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 702-222-1964
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
