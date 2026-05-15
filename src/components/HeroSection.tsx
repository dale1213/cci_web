import { CalendarDays, Landmark } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/paths";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white">
      <div className="absolute inset-0">
        <Image
          src={assetPath("/assets/columbia_big_picture.png")}
          alt="Columbia campus architecture"
          fill
          priority
          className="object-cover object-[70%_center]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/92 to-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[430px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[500px]">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-columbia">
            Columbia CCI Investment Club
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.96] tracking-tight text-navy sm:text-6xl lg:text-7xl">
            Connect. Learn. Invest.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
            CCI Hub is the central bulletin board for Columbia CCI Investment Club. Explore
            events, club updates, and department activities all in one place.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-columbia"
            >
              <CalendarDays className="h-4 w-4" />
              Explore Events
            </Link>
            <Link
              href="/departments"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-columbia/35 bg-white/80 px-6 py-3 text-sm font-semibold text-columbia shadow-sm transition hover:-translate-y-0.5 hover:bg-skywash"
            >
              <Landmark className="h-4 w-4" />
              View Departments
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
