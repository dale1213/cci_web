import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Clock,
  Languages,
  List,
  Mail,
  MapPin,
  Search,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import { latestEvents } from "@/lib/events";
import { assetPath } from "@/lib/paths";

const calendarDays = [
  ["", "", "", "", "", "1", "2"],
  ["3", "4", "5", "6", "7", "8", "9"],
  ["10", "11", "12", "13", "14", "15", "16"],
  ["17", "18", "19", "20", "21", "22", "23"],
  ["24", "25", "26", "27", "28", "29", "30"],
  ["31", "", "", "", "", "", ""]
];

const eventDaysInMay = ["5", "13"];

const featuredEvent = latestEvents[0];

const typeCounts = latestEvents.reduce<Record<string, number>>((counts, event) => {
  counts[event.type] = (counts[event.type] ?? 0) + 1;
  return counts;
}, {});

const featuredSpeakers = [
  ["CCI Events", "Curated club talks, socials, and competitions"],
  ["Career Series", "Recruiting sessions and alumni guidance"],
  ["Investment Classroom", "Markets, macro, and research learning"],
  ["Partner Events", "Selected campus and external announcements"]
];

export default function EventsPage() {
  return (
    <main className="pb-4">
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
          <Image
            src={assetPath("/assets/columbia_big_picture.png")}
            alt="Columbia campus architecture"
            fill
            priority
            className="object-cover object-center"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/75 to-white/10" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-columbia">Events 活动</p>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-navy sm:text-6xl">
            Events <span className="font-sans text-3xl font-semibold">活动</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-700">
            Learn from industry experts, connect with peers, and follow CCI event updates in one
            elegant public bulletin board.
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-500">
            按日期浏览 CCI 活动、招新、访谈、投资课堂、比赛与精选转发公告。
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-8 max-w-7xl px-5 sm:px-8">
        <div className="relative z-10 rounded-2xl border border-line bg-white p-3 shadow-soft">
          <div className="grid gap-3 lg:grid-cols-[1.4fr_repeat(4,1fr)_auto]">
            <label className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-slate-500">
              <Search className="h-4 w-4 text-columbia" />
              <span>Search events, speakers, or topics</span>
            </label>
            {["Event Type", "Date", "Location", "Language 语言"].map((filter) => (
              <button
                key={filter}
                type="button"
                className="rounded-xl border border-line bg-white px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:border-accent/30 hover:bg-skywash"
              >
                {filter}
              </button>
            ))}
            <button type="button" className="px-4 py-3 text-sm font-semibold text-columbia">
              Clear Filters
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap gap-3 border-b border-line">
          {[
            { label: "Calendar", icon: CalendarDays },
            { label: "Archive", icon: List },
            { label: "Featured", icon: Star }
          ].map(({ label, icon: Icon }, index) => (
            <button
              key={label}
              type="button"
              className={`inline-flex items-center gap-2 border-b-2 px-4 py-3 text-sm font-semibold transition ${
                index === 0
                  ? "border-accent text-columbia"
                  : "border-transparent text-slate-500 hover:text-columbia"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <article className="mt-5 overflow-hidden rounded-2xl border border-blue-900/20 bg-navy shadow-soft">
          <div className="relative grid min-h-[250px] lg:grid-cols-[8.5rem_1fr_auto]">
            <div className="absolute inset-0 opacity-35">
              <div className="h-full w-full bg-[radial-gradient(circle_at_75%_45%,rgba(37,99,235,0.75),transparent_23rem),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_42%)]" />
            </div>

            <div className="relative border-b border-white/10 p-6 text-white lg:border-b-0 lg:border-r">
              <span className="rounded bg-white/12 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em]">
                Latest Event
              </span>
              <div className="mt-8 rounded-xl bg-white/8 p-5 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">May</p>
                <p className="mt-1 text-5xl font-semibold">13</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/65">Wed</p>
              </div>
            </div>

            <div className="relative p-6 text-white lg:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-200">
                {featuredEvent.type} | 最新活动
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                {featuredEvent.title}
              </h2>
              <p className="mt-3 text-sm font-medium text-white/82">
                CCI Hub latest bulletin update from 哥大华人投资社 CCI.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/78">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" /> {featuredEvent.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4" /> {featuredEvent.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> New York / Columbia community
                </span>
                <span className="inline-flex items-center gap-2">
                  <Languages className="h-4 w-4" /> Chinese / English
                </span>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-columbia">
                  CCI
                </div>
                <div>
                  <p className="text-sm font-semibold">哥大华人投资社 CCI</p>
                  <p className="text-xs text-white/62">Columbia CCI Investment Club</p>
                </div>
              </div>
            </div>

            <div className="relative flex items-end p-6 lg:p-8">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-accent px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-white hover:text-navy"
              >
                View Details
              </button>
            </div>
          </div>
        </article>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]">
          <div className="space-y-6">
            <section className="rounded-2xl border border-line bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-line px-5 py-4">
                <h2 className="font-display text-xl font-semibold text-navy">
                  Event Archive <span className="font-sans text-base">活动档案</span>
                </h2>
                <span className="text-sm font-semibold text-columbia">{latestEvents.length} updates</span>
              </div>
              <div className="divide-y divide-line">
                {latestEvents.map((event) => (
                  <article
                    key={`${event.date}-${event.time}-${event.title}`}
                    className={`grid gap-4 px-5 py-4 transition sm:grid-cols-[5.5rem_1fr_auto] ${
                      event.active ? "bg-skywash/70" : "hover:bg-paper"
                    }`}
                  >
                    <time className="text-center sm:text-left">
                      <span className="block text-xs font-bold uppercase tracking-[0.12em] text-columbia">
                        {event.date.slice(0, 7)}
                      </span>
                      <span className="mt-1 block text-2xl font-semibold text-navy">
                        {event.date.slice(8, 10)}
                      </span>
                      <span className="mt-1 block text-xs font-semibold text-slate-400">{event.time}</span>
                    </time>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-columbia">
                        {event.type}
                      </span>
                      <h3 className="mt-1 font-semibold leading-7 text-navy">{event.title}</h3>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        哥大华人投资社 CCI · Bulletin update
                      </p>
                    </div>
                    <div className="flex items-center gap-3 sm:block sm:text-right">
                      <button
                        type="button"
                        className="rounded-lg bg-accent px-5 py-2 text-xs font-semibold text-white transition hover:bg-columbia"
                      >
                        Details
                      </button>
                      <span
                        className={`ml-0 mt-0 inline-flex rounded-lg px-3 py-2 text-xs font-semibold sm:mt-2 ${event.tone}`}
                      >
                        {event.type}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <section className="rounded-2xl border border-line bg-white p-4 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="font-display text-lg font-semibold text-navy">May 2026</h2>
                <ArrowRight className="h-4 w-4 text-columbia" />
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-[0.62rem] font-semibold uppercase tracking-[0.08em] text-slate-400">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <span key={day}>{day.slice(0, 2)}</span>
                ))}
              </div>
              <div className="mt-2 grid gap-1">
                {calendarDays.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 gap-1">
                    {week.map((day, dayIndex) => {
                      const isActive = day === "13";
                      const hasEvent = eventDaysInMay.includes(day);

                      return (
                        <div
                          key={`${weekIndex}-${dayIndex}`}
                          className={`flex aspect-square items-center justify-center rounded-full text-xs font-semibold ${
                            isActive
                              ? "bg-accent text-white shadow-card"
                              : hasEvent
                                ? "bg-skywash text-columbia"
                                : day
                                  ? "text-slate-600"
                                  : "text-transparent"
                          }`}
                        >
                          {day || "-"}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs leading-5 text-slate-500">
                Highlighted dates indicate CCI updates in the selected month.
              </p>
            </section>

            <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="font-display text-xl font-semibold text-navy">
                  Event Channels <span className="font-sans text-sm">活动栏目</span>
                </h2>
                <button type="button" className="text-xs font-semibold text-columbia">
                  View All
                </button>
              </div>
              <div className="mt-5 space-y-4">
                {featuredSpeakers.map(([name, title]) => (
                  <div key={name} className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-skywash text-sm font-bold text-columbia">
                      {name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">{name}</p>
                      <p className="text-xs leading-5 text-slate-500">{title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <h2 className="font-display text-xl font-semibold text-navy">
                Archive Stats <span className="font-sans text-sm">活动统计</span>
              </h2>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { value: String(latestEvents.length), label: "Total Updates", icon: CalendarDays },
                  { value: String(typeCounts["Partner Event"] ?? 0), label: "Partner Events", icon: UsersRound },
                  { value: String(typeCounts.Career ?? 0), label: "Career", icon: BarChart3 },
                  { value: String(typeCounts.Competition ?? 0), label: "Competition", icon: Sparkles }
                ].map(({ value, label, icon: Icon }) => (
                  <div key={label} className="rounded-xl border border-line bg-paper p-4">
                    <Icon className="h-4 w-4 text-columbia" />
                    <p className="mt-2 text-2xl font-semibold text-navy">{value}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <Mail className="h-5 w-5 text-columbia" />
              <h2 className="mt-3 font-display text-xl font-semibold text-navy">Stay in the Loop 订阅每周通讯</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Get the latest updates on events, club announcements, and department news.
              </p>
              <div className="mt-4 flex gap-2">
                <div className="flex-1 rounded-xl border border-line px-3 py-3 text-sm text-slate-400">
                  Enter your email
                </div>
                <button type="button" className="rounded-xl bg-accent px-4 py-3 text-sm font-semibold text-white">
                  Subscribe
                </button>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
