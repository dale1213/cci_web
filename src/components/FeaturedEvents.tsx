import { ArrowRight, CalendarDays } from "lucide-react";
import Link from "next/link";
import { latestFeaturedEvents } from "@/lib/events";

export function FeaturedEvents() {
  return (
    <section className="rounded-2xl border border-line bg-white shadow-sm">
      <div className="border-b border-line px-5 py-4">
        <h2 className="font-display text-xl font-semibold text-navy">
          Featured Events <span className="font-sans text-base font-semibold">精选活动</span>
        </h2>
      </div>

      <div className="divide-y divide-line">
        {latestFeaturedEvents.map((event) => (
          <article
            key={`${event.date}-${event.time}-${event.title}`}
            className="grid gap-4 px-5 py-5 sm:grid-cols-[1fr_auto]"
          >
            <div>
              <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${event.tone}`}>
                {event.type}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-navy">{event.title}</h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                哥大华人投资社 CCI · {event.time} bulletin update
              </p>
            </div>
            <div className="flex items-center justify-between gap-6 sm:block sm:text-right">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-500">
                <CalendarDays className="h-4 w-4 text-columbia" />
                {event.date}
              </p>
              <Link
                href="/events"
                className="mt-0 inline-flex items-center gap-1 text-sm font-semibold text-columbia transition hover:text-accent sm:mt-5"
              >
                View Event <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      <div className="px-5 py-4">
        <Link href="/events" className="inline-flex items-center gap-2 text-sm font-semibold text-columbia">
          View All Events <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
