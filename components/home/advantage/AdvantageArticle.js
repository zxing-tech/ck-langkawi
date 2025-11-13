/**
 * Title: Write a program using JavaScript on AdvantageArticle
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
 * Date: 30, August 2023
 */

import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";
import { BiShieldAlt2, BiStar, BiTime } from "react-icons/bi";

const AdvantageArticle = () => {
  const items = [
    {
      _id: 1,
      icon: (
        <div className="border border-primary shadow-lg rounded-full p-4 bg-white">
          <BiShieldAlt2 className="text-primary w-8 h-8" />
        </div>
      ),
      title: "Comprehensive Insurance Coverage",
      description:
        "Drive with peace of mind. All our rental cars include full insurance coverage, roadside assistance, and 24/7 emergency support. Your safety is our top priority on every journey.",
    },
    {
      _id: 2,
      icon: (
        <div className="border border-primary shadow-lg rounded-full p-4 bg-white">
          <BiStar className="text-primary w-8 h-8" />
        </div>
      ),
      title: "Premium Quality Vehicles",
      description:
        "Choose from our fleet of well-maintained, regularly serviced premium cars. Every vehicle is thoroughly inspected and cleaned before each rental to ensure the highest quality experience.",
    },
    {
      _id: 3,
      icon: (
        <div className="border border-primary shadow-lg rounded-full p-4 bg-white">
          <BiTime className="text-primary w-8 h-8" />
        </div>
      ),
      title: "Flexible Booking & Returns",
      description:
        "Enjoy hassle-free booking with flexible pickup and return times. Need to extend your rental? No problem! Our customer service team is available 24/7 to accommodate your schedule.",
    },
  ];

  return (
    <article className="flex flex-col gap-y-8">
      <h2 className="lg:text-4xl md:text-3xl text-2xl">
        Why Choose Our Car Rental Service
        <LoadImage
          src={"/assets/home-page/advantage/line.svg"}
          alt={"line"}
          height={10}
          width={150}
          className="mt-1.5"
        />
      </h2>
      <div className="flex flex-col gap-y-4">
        {items.map(({ _id, icon, title, description }) => (
          <div
            key={_id}
            className="flex gap-x-4 items-start bg-white shadow-md hover:shadow-lg transition-shadow duration-300 p-6 rounded-lg border border-gray-100"
          >
            {icon}
            <div className="w-full flex flex-col gap-y-2">
              <h2 className="text-lg font-semibold">{title}</h2>
              <p className="text-sm text-gray-600 lg:line-clamp-none md:line-clamp-2 line-clamp-none">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
};

export default AdvantageArticle;
