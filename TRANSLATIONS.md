# Translation System Documentation

## Overview
The bEasy landing page uses a section-based translation system that supports English, Khmer, and Chinese.

## File Structure
```
app/
  translations/
    English/
      navbar.json
      hero.json      (add as needed)
      faq.json       (add as needed)
    Khmer/
      navbar.json
      hero.json      (add as needed)
      faq.json       (add as needed)
    Chinese/
      navbar.json
      hero.json      (add as needed)
      faq.json       (add as needed)
  hooks/
    useTranslate.ts  (main translation hook)
  contexts/
    LanguageContext.tsx  (language state management)
```

## Using Translations in Components

### Basic Usage

```tsx
import { useTranslate } from "@/app/hooks/useTranslate";

export default function MyComponent() {
  const { t, getSection } = useTranslate();

  // Method 1: Get specific translation with dot notation
  const downloadText = t("navbar.downloadButton.text");

  // Method 2: Get entire section
  const navbarData = getSection("navbar");
  const buttonText = navbarData.downloadButton?.text;

  return <button>{downloadText}</button>;
}
```

### With Fallback Values

```tsx
const text = t("navbar.downloadButton.text", "Download App");
// Returns translation or "Download App" if not found
```

### With Variable Interpolation

```tsx
const { ti } = useTranslate();

// Translation: "Welcome, {{name}}!"
const greeting = ti("hero.welcome", { name: "John" });
// Result: "Welcome, John!"
```

## Adding New Translation Sections

### 1. Create JSON files for each language

**app/translations/English/hero.json**
```json
{
  "id": "hero",
  "title": "Welcome to bEasy",
  "subtitle": "Your banking made simple",
  "cta": {
    "primary": "Get Started",
    "secondary": "Learn More"
  }
}
```

**app/translations/Khmer/hero.json**
```json
{
  "id": "hero",
  "title": "សូមស្វាគមន៍មកកាន់ bEasy",
  "subtitle": "ធនាគាររបស់អ្នកធ្វើឱ្យងាយស្រួល",
  "cta": {
    "primary": "ចាប់ផ្តើម",
    "secondary": "ស្វែងយល់បន្ថែម"
  }
}
```

**app/translations/Chinese/hero.json**
```json
{
  "id": "hero",
  "title": "欢迎来到 bEasy",
  "subtitle": "让您的银行业务变得简单",
  "cta": {
    "primary": "开始使用",
    "secondary": "了解更多"
  }
}
```

### 2. Import in `useTranslate.ts`

Add imports at the top:
```tsx
import heroEn from "@/app/translations/English/hero.json";
import heroKm from "@/app/translations/Khmer/hero.json";
import heroZh from "@/app/translations/Chinese/hero.json";
```

Add to translations object:
```tsx
const translations: Record<string, Record<string, TranslationObject>> = {
  English: {
    navbar: navbarEn,
    hero: heroEn,  // <-- Add this
  },
  Khmer: {
    navbar: navbarKm,
    hero: heroKm,  // <-- Add this
  },
  Chinese: {
    navbar: navbarZh,
    hero: heroZh,  // <-- Add this
  },
};
```

### 3. Use in components

```tsx
export default function HeroSection() {
  const { t } = useTranslate();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.subtitle")}</p>
      <button>{t("hero.cta.primary")}</button>
    </div>
  );
}
```

## Hook API Reference

### `useTranslate()`

Returns an object with:

#### `t(key: string, fallback?: string): string`
Get a translation by key using dot notation.
- **key**: Section and path (e.g., `"navbar.downloadButton.text"`)
- **fallback**: Optional fallback text
- **Returns**: Translated string

#### `ti(key: string, variables: object, fallback?: string): string`
Get translation with variable interpolation.
- **key**: Section and path
- **variables**: Object with replacement values
- **fallback**: Optional fallback text
- **Returns**: Translated string with variables replaced

#### `getSection(sectionName: string): object`
Get an entire translation section.
- **sectionName**: Name of the section (e.g., `"navbar"`, `"hero"`)
- **Returns**: Translation object for that section

#### `currentLanguage: string`
Current language code (`"en"`, `"km"`, or `"zh"`)

#### `languageFolder: string`
Current language folder name (`"English"`, `"Khmer"`, or `"Chinese"`)

## Changing Language

Users can change language via the LanguageDropdown component in the navbar:

```tsx
import { useLanguage } from "@/app/contexts/LanguageContext";

const { currentLanguageCode, changeLanguage } = useLanguage();

// Change to Chinese
changeLanguage("zh");
```

## Best Practices

1. **Keep JSON files flat when possible** - Avoid deep nesting for easier maintenance
2. **Use consistent keys** - Same structure across all languages
3. **Provide fallbacks** - Always provide fallback text for missing translations
4. **Group by feature** - Create one JSON file per page section or feature
5. **Add IDs** - Include an `"id"` field in each section for tracking

## Example: Complete Section

**English/faq.json**
```json
{
  "id": "faq",
  "title": "Frequently Asked Questions",
  "items": [
    {
      "question": "How do I download the app?",
      "answer": "Visit the App Store or Play Store and search for bEasy."
    },
    {
      "question": "Is bEasy free?",
      "answer": "Yes, downloading and using bEasy is completely free."
    }
  ]
}
```

**Usage in component:**
```tsx
const { getSection } = useTranslate();
const faqData = getSection("faq");

return (
  <div>
    <h2>{faqData.title}</h2>
    {faqData.items?.map((item, i) => (
      <div key={i}>
        <h3>{item.question}</h3>
        <p>{item.answer}</p>
      </div>
    ))}
  </div>
);
```
