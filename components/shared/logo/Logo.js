/**
 * Title: Write a program using JavaScript on Logo
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
 * Date: 15, August 2023
 */

import { useRouter } from "next/router";
import React from "react";
import { IoCarSportSharp } from "react-icons/io5";

const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-x-2 cursor-pointer group"
    >
      <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
        <IoCarSportSharp className="h-6 w-6 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900 leading-none">
          CK Langkawi
        </span>
        <span className="text-xs text-gray-600">Car Rental</span>
      </div>
    </div>
  );
};

export default Logo;
