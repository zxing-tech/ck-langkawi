/**
 * Title: Write a program using JavaScript on Banner
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/devhasibulislam
 * Facebook: https://facebook.com/devhasibulislam
 * Instagram: https://instagram.com/devhasibulislam
 * Twitter: https://twitter.com/devhasibulislam
 * Pinterest: https://pinterest.com/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 01, November 2023
 */

import React, { useEffect, useMemo, useState } from "react";
import Search from "./Search";

const Banner = () => {
  const bannerImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=1920&h=600&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1920&h=600&fit=crop&q=80",
    ],
    []
  );

  const [backgroundImage, setBackgroundImage] = useState(
    bannerImages[Math.floor(Math.random() * bannerImages.length)]
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackgroundImage(
        bannerImages[Math.floor(Math.random() * bannerImages.length)]
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, [bannerImages]);

  return (
    <section
      className="bg-no-repeat bg-auto bg-bottom relative before:content-[''] before:absolute before:w-full before:h-full before:bg-black/60 before:top-0 before:left-0 before:-z-10 z-20 flex flex-col gap-y-12 h-[70vh] justify-center px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <article className="flex flex-col items-center gap-y-8">
        <h1 className="text-white text-center lg:text-7xl md:text-5xl text-3xl font-bold">
          Find Your Perfect Ride
        </h1>
        <p className="lg:w-1/2 md:w-3/4 w-full text-white text-center lg:text-base md:text-sm text-xs">
          Browse our extensive collection of premium vehicles. From luxury sedans to spacious SUVs,
          find the perfect car for your journey in Langkawi. Filter by type, price, and availability
          to discover your ideal rental car today.
        </p>
      </article>

      {/* <Search /> */}
    </section>
  );
};

export default Banner;
