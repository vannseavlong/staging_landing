"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Language {
  code: string;
  name: string;
  displayName: string;
  flag: string;
}

interface LanguageContextType {
  currentLanguageCode: string;
  changeLanguage: (code: string) => void;
  languages: Language[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const AVAILABLE_LANGUAGES: Language[] = [
  {
    code: "en",
    name: "English",
    displayName: "EN",
    flag: "/icons/flags/EnFlag.webp",
  },
  {
    code: "km",
    name: "Khmer",
    displayName: "ខ្មែរ",
    flag: "/icons/flags/KmFlag.webp",
  },
  {
    code: "zh",
    name: "Chinese",
    displayName: "中文",
    flag: "/icons/flags/CnFlag.webp",
  },
];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguageCode, setCurrentLanguageCode] = useState("en");

  const changeLanguage = (code: string) => {
    setCurrentLanguageCode(code);
    // TODO: Integrate with your translation system
    console.log("Language changed to:", code);
  };

  return (
    <LanguageContext.Provider
      value={{
        currentLanguageCode,
        changeLanguage,
        languages: AVAILABLE_LANGUAGES,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
