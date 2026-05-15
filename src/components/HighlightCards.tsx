import { ArrowRight } from "lucide-react";
import { highlights } from "@/lib/site-data";

export function HighlightCards() {
  return (
    <section className="relative z-10 mx-auto -mt-14 max-w-7xl px-5 sm:px-8">
      <div className="rounded-2xl border border-line bg-white p-5 shadow-soft">
        <h2 className="font-display text-xl font-semibold text-navy">
          Featured Season Highlights
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="group flex items-center gap-4 rounded-xl border border-line bg-white p-5 transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-card"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-skywash text-accent">
                <item.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold text-navy">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-columbia transition group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
