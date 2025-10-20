// components/HeroSection.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { useTranslate } from "@/app/hooks/useTranslate";
interface Slide {
  title?: string;
  image_landscape?: string;
  image_vertical?: string;
}

// --- Component Implementation ---
export default function HeroSection() {
  const { getSection } = useTranslate();
  const sectionAData = getSection("sectionA") as {
    hero?: Slide;
    promotions?: Slide[];
  };

  // Get slides from translation JSON (hero + promotions)
  const slides = [
    sectionAData?.hero,
    ...(sectionAData?.promotions || []),
  ].filter(Boolean) as Slide[];

  // Tailwind Classes for the Hero Banner
  // Desktop/Default: aspect-[16/9], Mobile (<769px): max-md:aspect-[10/16]
  const bannerWrapperClasses = "relative w-full overflow-hidden";

  return (
    <section className="w-full overflow-hidden bg-white">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={slides.length > 1}
        // Use a utility class for base Swiper styling, or just the default Swiper class
        className="w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="w-full">
            <div className={bannerWrapperClasses}>
              <picture>
                {/* Mobile portrait image */}
                <source
                  media="(max-width: 768px)"
                  srcSet={slide?.image_vertical}
                />
                {/* Desktop landscape image */}
                <source
                  media="(min-width: 769px)"
                  srcSet={slide?.image_landscape}
                />
                {/* Fallback */}
                <img
                  src={slide?.image_landscape}
                  alt={slide?.title || "Banner"}
                  className="w-full h-auto select-none object-cover"
                  draggable={false}
                />
              </picture>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
