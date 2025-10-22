"use client";

import Image from "next/image";
import { useTranslate } from "@/app/hooks/useTranslate";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

export default function TestimonialSection() {
  const { t } = useTranslate();

  const subtitle = t("testimonial.subtitle", "TESTIMONIALS");
  const title = t("testimonial.title", "What Our Customers Say");
  const description = t(
    "testimonial.description",
    "Hear what our customers have to say about their experience with us."
  );

  return (
    <section className="py-16 overflow-x-hidden">
      <div className="max-w-5xl mx-auto text-center px-4 overflow-x-hidden">
        {/* Subtitle */}
        <div
          className="font-bold text-[16px] leading-6 mb-4"
          style={{
            background: "linear-gradient(90deg,#1B4CFA,#102C90)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          {subtitle}
        </div>

        {/* Title */}
        <h2 className="text-[36px] font-bold text-[#1a1a1a] mb-6">{title}</h2>

        {/* Description */}
        <p className="text-[18px] font-medium text-[#1a1a1a] max-w-2xl mx-auto mb-10">
          {description}
        </p>

        {/* Video area: interactive row of videos/thumbnails */}
        <div className="mt-8 w-full max-w-full">
          <VideoRow />
        </div>
      </div>
    </section>
  );
}

function VideoRow() {
  const [active, setActive] = useState(1); // center by default
  const videoId = "eGi447l2_mM";
  const videoSi = "9dUYd4P5ds3omeOQ";
  const items = [
    { img: "/images/hero/PC_bCombos_KH.webp", caption: "Cafe Lounge" },
    { img: "/images/hero/PC_bCombos_EN.webp", caption: "Willow Coffee" },
    { img: "/images/hero/PC_Web_Luxury_Eng.webp", caption: "1987 Pang & Cafe" },
  ];

  // Responsive: use Swiper for mobile/tablet, flex row for desktop
  // Use a media query to determine if Swiper should be used
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <Swiper
        modules={[]}
        slidesPerView={1.1}
        spaceBetween={16}
        centeredSlides
        loop
        className="w-full"
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        initialSlide={active}
      >
        {items.map((it, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={`transition-all duration-300 w-[280px] h-[500px] relative rounded-sm overflow-hidden shadow-lg mx-auto`}
            >
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?si=${videoSi}&rel=0&autoplay=1`}
                title={`Testimonial video ${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 text-white font-medium text-lg">
                {it.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }

  // Desktop: flex row as before
  return (
    <div className="flex items-center justify-center gap-8">
      {items.map((it, idx) => {
        const isActive = idx === active;
        const sizeClass = isActive
          ? "w-[418px] h-[743px]"
          : "w-[300px] h-[533px]";
        return (
          <div
            key={idx}
            onClick={() => setActive(idx)}
            className={`transition-all duration-300 ${sizeClass} relative rounded-sm overflow-hidden shadow-lg cursor-pointer`}
            style={{ minWidth: isActive ? 418 : 300 }}
          >
            {isActive ? (
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?si=${videoSi}&rel=0&autoplay=1`}
                title={`Testimonial video ${idx}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            ) : (
              <Image
                src={it.img}
                alt={it.caption}
                fill
                style={{ objectFit: "cover" }}
              />
            )}
            <div className="absolute bottom-3 left-3 text-white font-medium text-lg">
              {it.caption}
            </div>
          </div>
        );
      })}
    </div>
  );
}
