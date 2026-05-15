"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/92 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-columbia/20 bg-skywash text-xl font-semibold text-columbia shadow-sm">
            C
          </div>
          <div>
            <p className="font-display text-2xl font-semibold leading-none tracking-tight text-navy">
              CCI Hub
            </p>
            <p className="mt-1 text-xs font-medium text-slate-500">
              Columbia CCI Investment Club
            </p>
          </div>
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => {
            const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative py-7 text-sm font-semibold text-navy transition hover:text-accent"
              >
                {item.label}
                {isActive ? (
                  <span className="absolute inset-x-0 bottom-0 h-1 rounded-full bg-accent" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Search"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-transparent text-navy transition hover:border-line hover:bg-skywash hover:text-accent"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}
