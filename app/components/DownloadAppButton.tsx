"use client";

import { useTranslate } from "@/app/hooks/useTranslate";

interface DownloadAppButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
  hoverText?: string;
}

export default function DownloadAppButton({
  className = "",
  onClick,
  text,
  hoverText,
}: DownloadAppButtonProps) {
  const { t } = useTranslate();

  // Use translation if text not provided
  const displayText = text || t("navbar.downloadButton.text", "Download App");
  const displayHoverText =
    hoverText || t("navbar.downloadButton.text", "Download App");

  // Two-layer text for hover swap
  const inner = (
    <span className="relative inline-block overflow-hidden">
      <span className="block transition-transform duration-500 translate-y-0 group-hover:-translate-y-full">
        {displayText}
      </span>
      <span className="absolute left-0 top-full block transition-transform duration-500 group-hover:translate-y-[-100%]">
        {displayHoverText}
      </span>
    </span>
  );

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`group px-5 py-3 bg-[image:var(--beasy-gradient)] text-white text-[16px] font-medium ${className}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      href="/download"
      className={`group inline-block px-6 py-2 bg-[image:var(--beasy-gradient)] text-white hover:opacity-90 transition-opacity text-sm font-medium ${className}`}
    >
      {inner}
    </a>
  );
}
