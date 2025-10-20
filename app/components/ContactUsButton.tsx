"use client";

import { useTranslate } from "@/app/hooks/useTranslate";

interface ContactUsButtonProps {
  className?: string;
  onClick?: () => void;
  text?: string;
  hoverText?: string;
}

export default function ContactUsButton({
  className = "",
  onClick,
  text,
  hoverText,
}: ContactUsButtonProps) {
  const { t } = useTranslate();

  // Use translation if text not provided
  const displayText = text || t("navbar.contactButton.text", "Contact Us");
  const displayHoverText =
    hoverText || t("navbar.contactButton.text", "Contact Us");

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
        className={`group px-8 py-3 border-[1px] border-[#E8E8E8] text-gray-800 text-[16px] font-medium hover:bg-gray-50 transition-colors ${className}`}
      >
        {inner}
      </button>
    );
  }

  return (
    <a
      href="/contact"
      className={`group inline-block px-8 py-3 border-[1px] border-[#E8E8E8] text-gray-800 text-[16px] font-medium hover:bg-gray-50 transition-colors ${className}`}
    >
      {inner}
    </a>
  );
}
