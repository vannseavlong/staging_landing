"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white/70 backdrop-blur sticky top-0 z-50 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg">
          Beasy
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          <a href="#hero" className="hover:underline">
            Home
          </a>
          <a href="#install" className="hover:underline">
            Install
          </a>
          <a href="#faq" className="hover:underline">
            FAQ
          </a>
          <Link href="/faq" className="hover:underline">
            FAQ Page
          </Link>
        </nav>

        <button
          className="md:hidden px-2 py-1 border rounded"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="flex flex-col max-w-6xl mx-auto px-6 py-3 gap-2">
            <a href="#hero" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="#install" onClick={() => setOpen(false)}>
              Install
            </a>
            <a href="#faq" onClick={() => setOpen(false)}>
              FAQ
            </a>
            <Link href="/faq" onClick={() => setOpen(false)}>
              FAQ Page
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
