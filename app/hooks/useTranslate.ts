"use client";

import { useLanguage } from "@/app/contexts/LanguageContext";

// Type for translation keys with dot notation support
type TranslationKey = string;
type TranslationValue =
  | string
  | number
  | boolean
  | TranslationObject
  | TranslationArray;
type TranslationObject = { [key: string]: TranslationValue };
type TranslationArray = TranslationValue[];

// Translation data cache to avoid re-importing
const translationCache: Record<string, TranslationObject> = {};

// Import all translation files statically for better type safety and Next.js compatibility
import navbarEn from "@/app/translations/English/navbar.json";
import navbarKm from "@/app/translations/Khmer/navbar.json";
import navbarZh from "@/app/translations/Chinese/navbar.json";
import sectionAEn from "@/app/translations/English/sectionA.json";
import sectionAKm from "@/app/translations/Khmer/sectionA.json";
import sectionAZh from "@/app/translations/Chinese/sectionA.json";
import faqEn from "@/app/translations/English/faqSection.json";
import faqKm from "@/app/translations/Khmer/faqSection.json";
import faqZh from "@/app/translations/Chinese/faqSection.json";

const translations: Record<string, Record<string, TranslationObject>> = {
  English: {
    navbar: navbarEn,
    sectionA: sectionAEn,
    faqSection: faqEn,
  },
  Khmer: {
    navbar: navbarKm,
    sectionA: sectionAKm,
    faqSection: faqKm,
  },
  Chinese: {
    navbar: navbarZh,
    sectionA: sectionAZh,
    faqSection: faqZh,
  },
};

/**
 * Custom hook for accessing translations by section and key
 *
 * Usage:
 * const { t, getSection } = useTranslate();
 *
 * // Get entire section
 * const navbarData = getSection('navbar');
 *
 * // Get specific key with dot notation
 * const downloadText = t('navbar.downloadButton.text');
 */
export function useTranslate() {
  const { currentLanguageCode } = useLanguage();

  // Map language codes to folder names
  const languageMap: Record<string, string> = {
    en: "English",
    km: "Khmer",
    zh: "Chinese",
  };

  const languageFolder = languageMap[currentLanguageCode] || "English";

  /**
   * Load a translation section (e.g., 'navbar', 'hero', 'faq')
   */
  const getSection = (sectionName: string): TranslationObject => {
    const cacheKey = `${languageFolder}/${sectionName}`;

    // Return from cache if available
    if (translationCache[cacheKey]) {
      return translationCache[cacheKey];
    }

    // Get from static imports
    const sectionData = translations[languageFolder]?.[sectionName];

    if (sectionData) {
      translationCache[cacheKey] = sectionData;
      return sectionData;
    }

    console.warn(
      `Translation file not found: ${languageFolder}/${sectionName}.json`
    );
    return {};
  };

  /**
   * Get a specific translation value using dot notation
   * Example: t('navbar.downloadButton.text')
   */
  const t = (key: TranslationKey, fallback: string = ""): string => {
    const [section, ...pathParts] = key.split(".");

    if (!section) return fallback;

    const sectionData = getSection(section);

    // Navigate through nested keys
    let value: TranslationValue = sectionData;
    for (const part of pathParts) {
      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        part in value
      ) {
        value = (value as TranslationObject)[part];
      } else {
        return fallback || key; // Return fallback or the key itself
      }
    }

    return typeof value === "string" ? value : fallback || key;
  };

  /**
   * Get translation with interpolation support
   * Example: ti('navbar.welcome', { name: 'John' }) -> "Welcome, John!"
   */
  const ti = (
    key: TranslationKey,
    variables: Record<string, string | number> = {},
    fallback: string = ""
  ): string => {
    let text = t(key, fallback);

    // Replace variables like {{name}} with actual values
    Object.entries(variables).forEach(([varKey, varValue]) => {
      text = text.replace(new RegExp(`{{${varKey}}}`, "g"), String(varValue));
    });

    return text;
  };

  return {
    t,
    ti,
    getSection,
    currentLanguage: currentLanguageCode,
    languageFolder,
  };
}
