"use client";

import { useRef } from "react";
import ServiceCard from "../../components/common/service-card";
import { ChevronRight, ChevronLeft } from "lucide-react";

const Service = () => {
  // unused state removed
  const scrollRef = useRef<HTMLDivElement>(null);

  const mediaItems = [
    {
      image: "/images/services/general.jpg",
      title: "General Cleaning",
      description:
        "Come home to a fresh space with bEasy - we handle the mess so you can enjoy what matters most",
    },
    {
      image: "/images/services/deep.jpg",
      title: "Deep Cleaning",
      description:
        "Get a fresh start with bEasy’s deep cleaning — we tackle hidden dirt and grime to restore your space to its best.",
    },
    {
      image: "/images/services/office.jpg",
      title: "Office Cleaning",
      description:
        "Brighten your workplace with bEasy’s office cleaning — return to a fresh space where everyone can focus and do their best.",
    },
    {
      image: "/images/services/uphol.jpg",
      title: "Upholstery",
      description:
        "Renew your furniture with bEasy’s upholstery cleaning — we remove stains, dust, and allergens for a fresher home.",
    },
    {
      image: "/images/services/pest.png",
      title: "Pest Control",
      description:
        "Say goodbye to mosquitoes with our safe, powerful spray and fogging — protecting you and your loved ones from dengue and other viruses.",
    },
    {
      image: "/images/services/laundry.jpg",
      title: "Laundry",
      description:
        "Enjoy on-demand laundry in Phnom Penh with pickup and delivery via our app. We wash, dry, and fold to keep your clothes fresh and clean.",
    },

    {
      image: "/images/services/washing.png",
      title: "Washing Machine",
      description:
        "Renew your furniture with bEasy’s upholstery cleaning — we remove stains, dust, and allergens for a fresher home.",
    },
    
    {
      image: "/images/services/laundry.jpg",
      title: "Post Renovation",
      description:
        "Just renovated? Book a post-renovation cleaning in Phnom Penh through our app. We clear dust, paint, and debris to make your space move-in ready.",
    },
    
    {
      image: "/images/services/laundry.jpg",
      title: "AC Cleaning",
      description:
        "Stay cool and energy-efficient with our AC cleaning service in Phnom Penh. Get cleaner air, faster cooling, and lower bills—on-demand through our app.",
    },
  ];

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -270, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 270, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white md:py-20 lg:py-5 lg:px-10 md:px-10 px-5 text-white">
      {/* Header */}
      <div className="mb-5 mt-10">
        <div className="flex items-center text-black mb-5 lg:mb-0 md:mb-5">
          <h5 className="font-inter text-base font-bold leading-[24px] tracking-[2px] text-beasy-gradient mr-4 whitespace-nowrap opacity-80">
            Our Services
          </h5>
        </div>
      </div>

      {/* Heading + Navigation */}
      <div className="flex flex-col lg:flex-row md:flex-row justify-between items-start gap-8 lg:gap-12 md:gap-10 text-left">
        <h1 className="w-full lg:w-[500px] md:w-[400px] text-black text-[24px] md:text-[32px] lg:text-[32px] font-bold font-inter tracking-widest leading-snug">
          Every Homecare Service You Need, All in One Place
        </h1>

        {/* Scroll buttons */}
        <div className="hidden md:flex gap-5 items-end justify-end mt-5">
          <button
            onClick={scrollLeft}
            className="border rounded-full border-gray-400 p-2 hover:bg-gray-100 transition"
          >
            <ChevronLeft className="text-black" />
          </button>
          <button
            onClick={scrollRight}
            className="border rounded-full border-gray-400 p-2 hover:bg-gray-100 transition"
          >
            <ChevronRight className="text-black" />
          </button>
        </div>
      </div>

      {/* Scrollable Cards */}
      <div
        className="w-full overflow-x-auto mt-10 scrollbar-hidden scroll-smooth"
        ref={scrollRef}
      >
        <div className="flex space-x-5 md:space-x-5 lg:space-x-8 snap-x snap-mandatory pb-4">
          {mediaItems.map((item, index) => (
            <div
              key={index}
              id={`service`}
              className="flex-shrink-0 w-[250px] snap-start"
            >
              <ServiceCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
