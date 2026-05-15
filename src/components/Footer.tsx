import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { navItems } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-16 bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-xl font-semibold">
              C
            </div>
            <div>
              <p className="font-display text-2xl font-semibold leading-none">CCI Hub</p>
              <p className="mt-1 text-xs text-white/65">Columbia CCI Investment Club</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/72">Connect. Challenge. Invest.</p>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white/90">Explore</p>
          <div className="grid gap-3 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold text-white/90">Contact / WeChat / Email</p>
          <div className="flex gap-3">
            {[MessageCircle, Mail].map((Icon, index) => (
              <button
                key={index}
                type="button"
                aria-label={["WeChat", "Email"][index]}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-white hover:text-navy"
              >
                <Icon className="h-5 w-5" />
              </button>
            ))}
            <button
              type="button"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-sm font-bold text-white transition hover:bg-white hover:text-navy"
            >
              in
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © 2026 Columbia CCI Investment Club
      </div>
    </footer>
  );
}
