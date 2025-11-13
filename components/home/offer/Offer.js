/**
 * Title: Write a program using JavaScript on Offer
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
 * Date: 24, August 2023
 */

import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import React from "react";
import { BiShield, BiTime, BiCar, BiSupport } from "react-icons/bi";

const Offer = () => {
  const features = [
    {
      icon: <BiShield className="w-8 h-8" />,
      title: "Full Insurance",
      description: "Comprehensive coverage included",
    },
    {
      icon: <BiTime className="w-8 h-8" />,
      title: "24/7 Pickup",
      description: "Flexible pickup & return",
    },
    {
      icon: <BiCar className="w-8 h-8" />,
      title: "Free Mileage",
      description: "Unlimited kilometers",
    },
    {
      icon: <BiSupport className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Customer support anytime",
    },
  ];

  const offers = [
    {
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=650&h=290&fit=crop&q=80",
      title: "Weekend Special",
      discount: "30% OFF",
      description: "Book for weekend and save big",
      badge: "Limited Time",
    },
    {
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=650&h=290&fit=crop&q=80",
      title: "Long Term Rental",
      discount: "Up to 40% OFF",
      description: "7+ days rental discount",
      badge: "Best Value",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16">
      <Container>
        <div className="w-full h-full flex flex-col gap-y-12">
          {/* Header */}
          <article className="flex flex-col gap-y-4 text-left">
            <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
              Special <HighlightText>Offers</HighlightText> & Benefits
              <LoadImage
                src="/assets/home-page/destination/underline.svg"
                alt="arrow"
                height={7}
                width={275}
                className="mt-1.5"
              />
            </h1>
            <p className="text-base text-gray-600">
              Exclusive deals and premium features for your perfect journey
            </p>
          </article>

          {/* Features Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              >
                <div className="text-primary mb-4">{feature.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Offer Banners */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="relative rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => window.open("/tours", "_self")}
              >
                <LoadImage
                  src={offer.image}
                  alt={offer.title}
                  width={650}
                  height={290}
                  className="w-full h-[290px] object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

                {/* Badge */}
                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {offer.badge}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-3xl font-bold text-yellow-400 mb-2">{offer.discount}</p>
                  <p className="text-sm opacity-90">{offer.description}</p>
                  <button className="mt-4 bg-white text-primary px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                    View Deals →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Offer;
