import InstallSection from "../../components/sections/InstallAppSection";

export default function InstallPage() {
  return (
    <div className="min-h-screen">
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-6">Install</h1>
        <InstallSection />
      </main>
    </div>
  );
}
