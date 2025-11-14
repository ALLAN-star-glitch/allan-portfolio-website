"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import SlideInWhenVisible from "../animations/SlideInWhenVisible";
import ZoomInWhenVisible from "../animations/ZoomInWhenVisible";
import PrimaryButton from "../common/PrimaryButton";
import SecondaryButton from "../common/SecondaryButton";
import { getHeroSection } from "@/lib/api";
import { HeroSectionType } from "@/lib/types";



export default function HeroSection() {
  const [hero, setHero] = useState<HeroSectionType | null>(null);
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    async function fetchHero() {
      try {
        const res = await getHeroSection();
        setHero(res || null); // API returns { data: {...}, meta: {} }
      } catch (error) {
        console.error("Error fetching hero section:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchHero();
  }, []);




  
  const title = hero?.title || "";
  const specialties = hero?.specialties || [];
  const desktopImageUrl = hero?.desktop_image?.url;
  const desktopImage  = desktopImageUrl ? desktopImageUrl.startsWith("http") ? desktopImageUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL}${desktopImageUrl}` : "/lowtag.jpg"; 
  const mobileImageUrl = hero?.mobile_image?.url;
  const mobileImage = mobileImageUrl ? mobileImageUrl.startsWith("http") ? mobileImageUrl : `${process.env.NEXT_PUBLIC_STRAPI_URL}${mobileImageUrl}` : "/lowtag.jpg"; 


  return (
    <section className="w-full bg-linear-to-r from-[#fafcfd] via-[#f3f7fc] to-[#e3f1ff] overflow-hidden">
      <div className="pt-15 pb-10 lg:pt-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          
          {/* TEXT SECTION */}
          <div className="text-center lg:text-left space-y-8">
            <SlideInWhenVisible from="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#0f1724]">
                Hi, I’m <span className="text-[#2979FF]">Allan Mathenge</span> — I
                build sophisticated digital products that merge{" "}
                <span className="text-[#2979FF]">technology</span> and{" "}
                <span className="text-[#2979FF]">design</span>.
              </h1>
            </SlideInWhenVisible>

            {/* Subtext */}
            <FadeInWhenVisible delay={0.2}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {loading ? (
                  <span className="h-4 bg-gray-300 rounded w-3/4 animate-pulse inline-block"></span>
                ) : (
                  title
                )}
              </p>
            </FadeInWhenVisible>

            {/* Buttons */}
            <FadeInWhenVisible delay={0.3}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <PrimaryButton label="View My Work" href="/projects" />
                <SecondaryButton label="Let's collaborate" href="/contact" />
              </div>
            </FadeInWhenVisible>

            {/* Specialties */}
            {loading ? (
              <div className="h-4 bg-gray-300 rounded w-1/2 animate-pulse mx-auto lg:mx-0 mt-2"></div>
            ) : (
              <FadeInWhenVisible delay={0.4}>
                <div className="pt-4 text-xs sm:text-sm text-gray-500">
                  <strong className="text-gray-700">Specialties:</strong>{" "}
                  {specialties.join(" · ")}
                </div>
              </FadeInWhenVisible>
            )}
          </div>

          {/* IMAGE SECTION */}
          <ZoomInWhenVisible delay={0.15}>
            <div className="flex justify-center lg:justify-end">
              {loading ? (
                <>
                  <div className="w-32 h-32 sm:w-40 sm:h-40 lg:hidden rounded-full bg-gray-300 animate-pulse"></div>
                  <div className="hidden lg:block w-96 h-96 rounded-3xl bg-gray-300 animate-pulse"></div>
                </>
              ) : (
                <>
                  {/* Mobile image */}
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:hidden rounded-full overflow-hidden border-4 border-blue-100 shadow-lg">
                    {mobileImage && (
                      <Image
                        src={mobileImage}
                        alt="Hero Mobile"
                        width={160}
                        height={160}
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    )}
                  </div>

                  {/* Desktop image */}
                  <div className="hidden lg:block relative w-96 h-96 rounded-3xl overflow-hidden shadow-2xl">
                    {desktopImage && (
                      <Image
                        src={desktopImage}
                        alt="Hero Desktop"
                        width={400}
                        height={400}
                        className="object-cover"
                        priority
                        unoptimized
                      />
                    )}
                  </div>
                </>
              )}
            </div>
          </ZoomInWhenVisible>

        </div>
      </div>
    </section>
  );
}
