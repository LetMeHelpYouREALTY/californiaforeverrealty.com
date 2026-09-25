import type { HeadingSection } from "@/lib/california-forever-headings";

type SiteHeadingOutlineProps = {
  sections: HeadingSection[];
};

export function SiteHeadingOutline({ sections }: SiteHeadingOutlineProps) {
  return (
    <section className="py-16 md:py-20 bg-white" aria-labelledby="move-guide-heading">
      <div className="container mx-auto px-4 max-w-4xl">
        <p id="move-guide-heading" className="text-sm font-semibold uppercase tracking-wide text-blue-600 mb-8">
          California Forever Realty
        </p>
        {sections.map((section) => (
          <div key={section.h2} className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{section.h2}</h2>
            <div className="space-y-6">
              {section.topics.map((topic) => (
                <div key={topic.h3}>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{topic.h3}</h3>
                  <p className="text-slate-600 leading-relaxed">{topic.body}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="text-slate-700 text-sm">
          Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.{" "}
          <span>9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.</span>{" "}
          <a href="tel:+17025001942" className="text-blue-600 font-semibold hover:text-blue-700">
            (702) 500-1942
          </a>
        </p>
      </div>
    </section>
  );
}
