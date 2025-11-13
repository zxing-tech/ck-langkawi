/**
 * Title: Write a program using JavaScript on BannerDescription
 * Author: Hasibul Islam
 * Portfolio: https://devhasibulislam.vercel.app
 * Linkedin: https://linkedin.com/in/devhasibulislam
 * GitHub: https://github.com/in/devhasibulislam
 * Facebook: https://facebook.com/in/devhasibulislam
 * Instagram: https://instagram.com/in/devhasibulislam
 * Twitter: https://twitter.com/in/devhasibulislam
 * Pinterest: https://pinterest.com/in/devhasibulislam
 * WhatsApp: https://wa.me/8801906315901
 * Telegram: devhasibulislam
 * Date: 16, August 2023
 */

import Button from "@/components/shared/button/Button";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import React, { useState } from "react";

const HeroDescription = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({ startDate, endDate, location });
    // Navigate to tours page with filters
    window.open(`/tours?start=${startDate}&end=${endDate}&location=${location}`, "_self");
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <section className="lg:col-span-8 md:col-span-6">
      <article className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <h1 className="lg:text-6xl md:text-4xl text-3xl whitespace-normal">
            Drive Your <HighlightText>Adventure</HighlightText> With Premium Cars
          </h1>
          <p className="text-base">
            Explore freedom with our wide selection of premium vehicles. Find the perfect car for your journey.
          </p>
        </div>

        {/* Booking Form */}
        <form onSubmit={handleSearch} className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            {/* Location */}
            <div className="flex flex-col gap-2">
              <label htmlFor="location" className="text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city or airport"
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* Start Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="startDate" className="text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={today}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>

            {/* End Date */}
            <div className="flex flex-col gap-2">
              <label htmlFor="endDate" className="text-sm font-medium text-gray-700">
                End Date
              </label>
              <input
                type="date"
                id="endDate"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate || today}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full px-6 py-3 text-base font-medium"
          >
            Search Available Cars
          </Button>
        </form>

        {/* Quick Links */}
        <div className="flex gap-4 flex-wrap">
          <button
            className="text-sm text-primary hover:underline"
            onClick={() => window.open("/tours", "_self")}
          >
            View All Cars →
          </button>
          <button
            className="text-sm text-primary hover:underline"
            onClick={() => window.open("/tours", "_self")}
          >
            Special Deals →
          </button>
        </div>
      </article>
    </section>
  );
};

export default HeroDescription;
