import FAQSection from "../components/sections/FAQSection";

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-6">FAQ</h1>
        <FAQSection />
      </main>
    </div>
  );
}
