import { bottomFeatures } from "@/lib/site-data";

export function BottomFeatureStrip() {
  return (
    <section className="mx-auto mt-8 max-w-7xl px-5 sm:px-8">
      <div className="grid overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-skywash to-white shadow-sm lg:grid-cols-3">
        {bottomFeatures.map((feature) => (
          <article key={feature.title} className="flex items-center gap-5 border-line p-6 lg:border-r last:lg:border-r-0">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-columbia shadow-sm">
              <feature.icon className="h-8 w-8" />
            </div>
            <div>
              <h2 className="font-display text-lg font-semibold text-navy">{feature.title}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{feature.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
