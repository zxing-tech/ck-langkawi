/**
 * Title: Write a program using JavaScript on BestSelling
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
 * Date: 25, August 2023
 */

import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import Link from "next/link";
import React, { useEffect, useMemo } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Card from "@/components/shared/card/Card";
import LoadImage from "@/components/shared/image/LoadImage";
import SkeletonCard from "@/components/shared/card/SkeletonCard";
import { useGetRentsQuery } from "@/services/rent/rentApi";

// Mock data for car rentals
const mockCars = [
  {
    _id: "mock-1",
    title: "Tesla Model 3 - Premium Electric",
    location: "Downtown, Langkawi",
    price: 89,
    status: "Available",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=480&h=200&fit=crop&q=80",
        public_id: "tesla-model-3-1",
      },
      {
        url: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=480&h=200&fit=crop&q=80",
        public_id: "tesla-model-3-2",
      },
    ],
    reviews: [1, 2, 3, 4, 5],
  },
  {
    _id: "mock-2",
    title: "BMW X5 - Luxury SUV",
    location: "Airport, Langkawi",
    price: 120,
    status: "Hot Deal",
    members: "7 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=480&h=200&fit=crop&q=80",
        public_id: "bmw-x5-1",
      },
      {
        url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=480&h=200&fit=crop&q=80",
        public_id: "bmw-x5-2",
      },
    ],
    reviews: [1, 2, 3, 4],
  },
  {
    _id: "mock-3",
    title: "Mercedes-Benz C-Class",
    location: "City Center, Langkawi",
    price: 95,
    status: "Available",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=480&h=200&fit=crop&q=80",
        public_id: "mercedes-c-class-1",
      },
      {
        url: "https://images.unsplash.com/photo-1617531653520-bd466ee81789?w=480&h=200&fit=crop&q=80",
        public_id: "mercedes-c-class-2",
      },
    ],
    reviews: [1, 2, 3, 4, 5],
  },
  {
    _id: "mock-4",
    title: "Toyota Camry - Comfort",
    location: "Beach Area, Langkawi",
    price: 65,
    status: "20% OFF",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=480&h=200&fit=crop&q=80",
        public_id: "toyota-camry-1",
      },
      {
        url: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=480&h=200&fit=crop&q=80",
        public_id: "toyota-camry-2",
      },
    ],
    reviews: [1, 2, 3],
  },
  {
    _id: "mock-5",
    title: "Range Rover Sport",
    location: "Premium Location",
    price: 150,
    status: "VIP",
    members: "7 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=480&h=200&fit=crop&q=80",
        public_id: "range-rover-1",
      },
      {
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=480&h=200&fit=crop&q=80",
        public_id: "range-rover-2",
      },
    ],
    reviews: [1, 2, 3, 4, 5],
  },
  {
    _id: "mock-6",
    title: "Honda CR-V - Family SUV",
    location: "Airport, Langkawi",
    price: 75,
    status: "Available",
    members: "7 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=480&h=200&fit=crop&q=80",
        public_id: "honda-crv-1",
      },
      {
        url: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=480&h=200&fit=crop&q=80",
        public_id: "honda-crv-2",
      },
    ],
    reviews: [1, 2, 3, 4],
  },
  {
    _id: "mock-7",
    title: "Audi A4 - Sporty Sedan",
    location: "Downtown, Langkawi",
    price: 85,
    status: "Available",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=480&h=200&fit=crop&q=80",
        public_id: "audi-a4-1",
      },
      {
        url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=480&h=200&fit=crop&q=80",
        public_id: "audi-a4-2",
      },
    ],
    reviews: [1, 2, 3, 4],
  },
  {
    _id: "mock-8",
    title: "Porsche Cayenne - Luxury",
    location: "VIP Service",
    price: 180,
    status: "Premium",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=480&h=200&fit=crop&q=80",
        public_id: "porsche-cayenne-1",
      },
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=480&h=200&fit=crop&q=80",
        public_id: "porsche-cayenne-2",
      },
    ],
    reviews: [1, 2, 3, 4, 5],
  },
];

const BestSelling = ({ className }) => {
  const { data, isLoading, error } = useGetRentsQuery();

  // Use real data if available, otherwise use mock data
  const tours = useMemo(() => {
    if (data?.data && data.data.length > 0) {
      return data.data;
    }
    return mockCars;
  }, [data]);

  useEffect(() => {
    if (error) {
      console.log(error?.data?.message);
    }
  }, [error]);

  return (
    <section id="cars" className="py-12 bg-white">
      <Container className={`${className}`}>
        <section className="w-full h-full flex flex-col gap-y-12">
          <div className="flex flex-row justify-between items-center">
            <article className="flex flex-col gap-y-4">
              <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
                <HighlightText>Popular</HighlightText> Cars
                <LoadImage
                  src="/assets/home-page/destination/underline.svg"
                  alt="arrow"
                  height={7}
                  width={275}
                  className="mt-1.5"
                />
              </h1>
              <p className="text-base">
                Discover our most popular rental cars perfect for your journey in Langkawi
              </p>
            </article>
            <div className="text-primary border-b-2 border-b-transparent hover:border-b-primary transition-all">
              <Link
                href="/tours"
                className="flex flex-row gap-x-1 items-center whitespace-nowrap"
              >
                See All Cars <BiRightArrowAlt />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
            {isLoading
              ? Array.from({ length: 8 }, (_, index) => (
                  <SkeletonCard key={index} />
                ))
              : tours
                  ?.slice(0, 8)
                  ?.map((tour) => <Card key={tour._id} tour={tour} />)}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default BestSelling;
