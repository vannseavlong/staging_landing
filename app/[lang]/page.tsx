"use client";

import HeroSection from "../components/sections/HeroSection";
import InstallSection from "../components/sections/InstallAppSection";
import FAQSection from "../components/sections/FAQSection";
import ServiceSection from "../components/sections/ServiceSection";
import WhyUsSection from "../components/sections/AboutUsSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import ContactSection from "../components/sections/ContactSection";

export default function Home() {
  return (
    <div className="font-sans min-h-screen">
      {/* <main className="max-w-6xl mx-auto px-6 py-12 space-y-16"> */}
      <main>
        <section id="hero">
          <HeroSection />
        </section>

        <section id="service">
          <ServiceSection />
        </section>

        <section id="why-us">
          <WhyUsSection />
        </section>

        <section id="testimonials">
          <TestimonialSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section id="install">
          <InstallSection />
        </section>
      </main>
    </div>
  );
}
