/**
 * Title: Write a program using JavaScript on AdvantageBanner
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

const AdvantageBanner = () => {
  return (
    <div className="relative">
      <LoadImage
        src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=541&h=633&fit=crop&q=80"
        alt="Premium car rental service"
        height={633}
        width={541}
        className="w-full rounded-lg border border-primary shadow-lg object-cover"
      />
      {/* Optional overlay badge */}
      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
        <p className="text-2xl font-bold text-primary">500+</p>
        <p className="text-sm text-gray-700">Premium Cars</p>
      </div>
    </div>
  );
};

export default AdvantageBanner;
