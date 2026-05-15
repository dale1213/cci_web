import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { mainCards } from "@/lib/site-data";

export function MainPageCards() {
  return (
    <section className="mx-auto mt-8 grid max-w-7xl gap-5 px-5 sm:px-8 lg:grid-cols-3">
      {mainCards.map((card) => (
        <Link
          key={card.href}
          href={card.href}
          className="group rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent/25 hover:shadow-card"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-skywash text-columbia">
              <card.icon className="h-7 w-7" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-display text-xl font-semibold text-navy">
                {card.title} <span className="font-sans text-base font-semibold">{card.zhTitle}</span>
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{card.description}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-columbia transition group-hover:translate-x-1" />
          </div>
        </Link>
      ))}
    </section>
  );
}
