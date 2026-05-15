import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { latestUpdates } from "@/lib/site-data";

export function LatestUpdates() {
  return (
    <section className="rounded-2xl border border-line bg-white shadow-sm">
      <div className="border-b border-line px-5 py-4">
        <h2 className="font-display text-xl font-semibold text-navy">
          Latest Updates <span className="font-sans text-base font-semibold">最新动态</span>
        </h2>
      </div>

      <div className="divide-y divide-line">
        {latestUpdates.map((update) => (
          <article key={`${update.date}-${update.title}`} className="grid gap-3 px-5 py-4 sm:grid-cols-[6.5rem_1fr]">
            <time className="text-sm font-semibold text-columbia">{update.date}</time>
            <p className="text-sm leading-6 text-slate-700">{update.title}</p>
          </article>
        ))}
      </div>

      <div className="px-5 py-4">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-columbia">
          View All Updates <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
