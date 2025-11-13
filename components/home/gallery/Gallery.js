/**
 * Title: Write a program using JavaScript on Gallery
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
 * Date: 07, October 2023
 */

import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import React, { useRef, useState } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const Gallery = () => {
  // Car gallery images from Unsplash - organized by category
  const carImages = {
    Luxury: [
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=267&h=364&fit=crop&q=80",
    ],
    SUV: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611821064430-a169ecc5a6c4?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=267&h=364&fit=crop&q=80",
    ],
    Sedan: [
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617531653520-bd466ee81789?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=267&h=159&fit=crop&q=80",
    ],
    Electric: [
      "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1561580125-028ee3bd62eb?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5?w=267&h=364&fit=crop&q=80",
    ],
    Sports: [
      "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=267&h=159&fit=crop&q=80",
    ],
    Family: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1613214149969-cd6c0e14e020?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=267&h=159&fit=crop&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=267&h=364&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=267&h=159&fit=crop&q=80",
    ],
  };

  const items = [
    {
      title: "Luxury",
      category: "Luxury",
      count: 9,
    },
    {
      title: "SUV",
      category: "SUV",
      count: 7,
    },
    {
      title: "Sedan",
      category: "Sedan",
      count: 6,
    },
    {
      title: "Electric",
      category: "Electric",
      count: 5,
    },
    {
      title: "Sports",
      category: "Sports",
      count: 6,
    },
    {
      title: "Family",
      category: "Family",
      count: 6,
    },
  ];

  const [tab, setTab] = useState("Luxury");
  const [currentImages, setCurrentImages] = useState(carImages.Luxury);
  const [counter, setCounter] = useState(9);
  const containerRef = useRef(null);

  return (
    <section id="deals" className="h-full py-12">
      <Container>
        <section className="w-full h-full flex flex-col gap-y-12">
          <div className="flex flex-col gap-y-12">
            <article className="flex flex-col gap-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
                Our <HighlightText>Fleet</HighlightText> Gallery
                <LoadImage
                  src="/assets/home-page/destination/underline.svg"
                  alt="arrow"
                  height={7}
                  width={275}
                  className="mt-1.5"
                />
              </h1>
              <p className="text-base">
                Browse our diverse collection of premium vehicles - from luxury sedans to family SUVs and eco-friendly electric cars.
              </p>
            </article>
          </div>

          <div className="border border-primary/30 rounded-2xl  bg-secondary/30 lg:p-12 md:p-6 p-3">
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-row flex-wrap gap-4">
                {items.map((item, index) => (
                  <span
                    key={index}
                    className={
                      "border border-primary px-4 py-1 rounded-secondary text-sm hover:bg-primary hover:border-secondary hover:text-white transition-colors cursor-pointer" +
                      " " +
                      (tab === item.title
                        ? "bg-primary border-secondary text-white"
                        : "")
                    }
                    onClick={() => {
                      setTab(item.title);
                      setCurrentImages(carImages[item.category]);
                      setCounter(item.count);
                    }}
                  >
                    {item.title}
                  </span>
                ))}
              </div>
              <div className="relative">
                <div
                  className="grid grid-cols-12 items-center gap-4 h-[720px] overflow-y-hidden scrollbar-hide"
                  ref={containerRef}
                >
                  {currentImages.slice(0, counter).map((image, index) => (
                    <LoadImage
                      key={index}
                      src={image}
                      alt={`${tab} car rental - ${index + 1}`}
                      height={(index + 1) % 2 === 0 ? 364 : 159}
                      width={267}
                      className={`lg:col-span-3 md:col-span-6 col-span-12 border w-full object-cover border-primary/30 drop-shadow rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer ${
                        (index + 1) % 2 === 0
                          ? "row-span-2 h-[364px]"
                          : "h-[159px]"
                      }`}
                      title={`${tab} car rental`}
                    />
                  ))}

                  <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-secondary/50 via-secondary/10 to-transparent"></div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-y-2">
                  <span
                    className="p-1.5 border border-primary rounded-secondary bg-secondary hover:bg-primary hover:border-secondary hover:text-white transition-colors cursor-pointer"
                    onClick={() => {
                      {
                        const container = containerRef.current;
                        const scrollAmount = -512;

                        container.scrollBy({
                          top: scrollAmount,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <BiUpArrowAlt className="h-6 w-6" />
                  </span>
                  <span
                    className="p-1.5 border border-primary rounded-secondary bg-secondary hover:bg-primary hover:border-secondary hover:text-white transition-colors cursor-pointer"
                    onClick={() => {
                      {
                        const container = containerRef.current;
                        const scrollAmount = 512;

                        container.scrollBy({
                          top: scrollAmount,
                          behavior: "smooth",
                        });
                      }
                    }}
                  >
                    <BiDownArrowAlt className="h-6 w-6" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default Gallery;
