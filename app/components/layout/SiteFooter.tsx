"use client";

import Link from "next/link";
import { NAV_ITEMS } from "../navigation";

export default function SiteFooter() {
  return (
    <footer className="w-full border-t bg-white/60">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="text-sm">© {new Date().getFullYear()} Beasy</div>

        <nav className="flex flex-wrap gap-4 text-sm">
          {NAV_ITEMS.map((it) =>
            it.kind === "route" ? (
              <Link key={it.key} href={it.href} className="hover:underline">
                {it.label}
              </Link>
            ) : (
              <a key={it.key} href={it.href} className="hover:underline">
                {it.label}
              </a>
            )
          )}
        </nav>
      </div>
    </footer>
  );
}
