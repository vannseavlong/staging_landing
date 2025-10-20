"use client";

import Link from "next/link";
import Image from "next/image";
import { ContactUsButton, DownloadAppButton, LanguageDropdown } from "..";
import { handleSmartDownload } from "@/lib/smartDownload";
// Phase 2: Uncomment to restore navigation links
// import { NAV_ITEMS } from "../navigation";

export default function SiteNav() {
  return (
    <nav className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <Image
                src="/images/new-logo.png"
                alt="bEasy Logo"
                width={120}
                height={40}
                priority
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Phase 2: Navigation links will go here */}
          {/* <nav className="hidden md:flex gap-6 items-center">
            {NAV_ITEMS.map((it) => ...)}
          </nav> */}

          {/* Right side: Language switcher + Download button */}
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            <li>
              <LanguageDropdown />
            </li>
            <li>
              <ContactUsButton />
            </li>
            <li>
              <DownloadAppButton onClick={handleSmartDownload} />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
