/**
 * Title: Write a program using JavaScript on Reviews
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
 * Date: 05, October 2023
 */

import Container from "@/components/shared/container/Container";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import LoadImage from "@/components/shared/image/LoadImage";
import Image from "next/image";
import React, { useEffect, useMemo } from "react";
import { AiFillStar } from "react-icons/ai";
import { RiChatQuoteFill } from "react-icons/ri";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useGetAllReviewsQuery } from "@/services/review/reviewApi";
import { toast } from "react-hot-toast";

const animation = { duration: 50000, easing: (t) => t };

// Mock data for customer reviews
const mockReviews = [
  {
    _id: "review-1",
    reviewer: {
      name: "Sarah Johnson",
      avatar: {
        url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop&q=80",
        public_id: "sarah-avatar",
      },
    },
    rent: {
      location: "Langkawi Airport",
    },
    rating: 5,
    comment: "Amazing service! The car was in perfect condition and the pickup process was super smooth. Highly recommend for anyone visiting Langkawi. Will definitely rent again!",
    createdAt: new Date("2024-10-15"),
  },
  {
    _id: "review-2",
    reviewer: {
      name: "Michael Chen",
      avatar: {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&q=80",
        public_id: "michael-avatar",
      },
    },
    rent: {
      location: "Downtown Langkawi",
    },
    rating: 5,
    comment: "Rented a BMW X5 for our family vacation. The car exceeded expectations - clean, well-maintained, and the unlimited mileage was a great bonus. Customer service was outstanding!",
    createdAt: new Date("2024-10-20"),
  },
  {
    _id: "review-3",
    reviewer: {
      name: "Emily Rodriguez",
      avatar: {
        url: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop&q=80",
        public_id: "emily-avatar",
      },
    },
    rent: {
      location: "Beach Area",
    },
    rating: 4,
    comment: "Great experience overall. The Tesla Model 3 was a dream to drive. Only minor delay during pickup but staff was very apologetic and professional. Good value for money!",
    createdAt: new Date("2024-11-01"),
  },
  {
    _id: "review-4",
    reviewer: {
      name: "David Kumar",
      avatar: {
        url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop&q=80",
        public_id: "david-avatar",
      },
    },
    rent: {
      location: "City Center",
    },
    rating: 5,
    comment: "Best car rental experience I've had! Transparent pricing, no hidden fees, and the insurance coverage gave me peace of mind. The 24/7 support was very helpful when I needed assistance.",
    createdAt: new Date("2024-11-05"),
  },
  {
    _id: "review-5",
    reviewer: {
      name: "Lisa Thompson",
      avatar: {
        url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&q=80",
        public_id: "lisa-avatar",
      },
    },
    rent: {
      location: "Airport Pickup",
    },
    rating: 5,
    comment: "Absolutely loved the Mercedes C-Class! Perfect for our romantic getaway. The car smelled fresh, drove smoothly, and the flexible return time made our trip stress-free. Five stars!",
    createdAt: new Date("2024-11-08"),
  },
  {
    _id: "review-6",
    reviewer: {
      name: "James Wilson",
      avatar: {
        url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop&q=80",
        public_id: "james-avatar",
      },
    },
    rent: {
      location: "Premium Location",
    },
    rating: 4,
    comment: "Rented the Range Rover Sport for a business trip. Impressive vehicle and professional service. Would have given 5 stars but the pickup location was a bit hard to find. Overall great!",
    createdAt: new Date("2024-11-10"),
  },
];

const Reviews = ({ className }) => {
  const { isLoading, data, error } = useGetAllReviewsQuery();

  // Use real data if available, otherwise use mock data
  const reviews = useMemo(() => {
    if (data?.data && data.data.length > 0) {
      return data.data;
    }
    return mockReviews;
  }, [data]);

  console.log(reviews);

  useEffect(() => {
    if (error) {
      console.log(error?.data?.message);
    }
  }, [error]);

  const [sliderRef] = useKeenSlider({
    loop: true,
    initial: 0,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 15,
        },
      },
      "(min-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 15,
        },
      },
      "(min-width: 1080px)": {
        slides: {
          perView: 3,
          spacing: 15,
        },
      },
    },
  });

  return (
    <section className="h-full py-12 bg-gradient-to-b from-white to-gray-50">
      <Container className={`${className}`}>
        <div className="w-full h-full flex flex-col gap-y-12">
          <article className="flex flex-col gap-y-4">
            <h1 className="lg:text-5xl md:text-4xl text-3xl whitespace-normal">
              <HighlightText>Customer</HighlightText> Reviews
              <LoadImage
                src="/assets/home-page/destination/underline.svg"
                alt="arrow"
                height={7}
                width={275}
                className="mt-1.5"
              />
            </h1>
            <p className="text-base">
              Read what our satisfied customers say about their car rental experience with us
            </p>
          </article>

          {isLoading ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex flex-col gap-y-4 border rounded p-3"
                >
                  <div className="flex flex-row gap-x-2.5 items-end">
                    <div className="!h-[50px] !w-[50px] rounded animate-pulse bg-gray-200"></div>
                    <div className="flex flex-row justify-between w-full">
                      <div className="flex flex-col gap-y-1 w-full">
                        <div className="w-2/3 h-4 animate-pulse rounded bg-gray-200"></div>
                        <div className="w-3/4 h-4 animate-pulse rounded bg-gray-200"></div>
                      </div>
                      <div className="flex flex-col items-end gap-y-1 w-full">
                        <div className="w-2/3 h-4 animate-pulse rounded bg-gray-200"></div>
                        <div className="w-3/4 h-4 animate-pulse rounded bg-gray-200"></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-1.5">
                    <div className="w-full h-4 animate-pulse rounded bg-gray-200"></div>
                    <div className="w-full h-4 animate-pulse rounded bg-gray-200"></div>
                    <div className="w-3/4 h-4 animate-pulse rounded bg-gray-200"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div ref={sliderRef} className="keen-slider">
              {reviews?.map((review) => (
                <article
                  key={review?._id}
                  className="group relative flex flex-col gap-y-4 bg-white border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 p-6 rounded-lg keen-slider__slide"
                >
                  <div className="flex flex-row gap-x-3 items-start">
                    <LoadImage
                      src={review?.reviewer?.avatar?.url}
                      alt={review?.reviewer?.avatar?.public_id}
                      width={50}
                      height={50}
                      className="rounded-full h-[50px] w-[50px] object-cover border-2 border-gray-100"
                    />
                    <div className="flex flex-row justify-between w-full">
                      <div className="">
                        <h2 className="font-semibold text-gray-900">{review?.reviewer?.name}</h2>
                        <p className="text-xs text-gray-500">{review.rent.location}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-sm flex flex-row items-center gap-1 font-medium">
                          <AiFillStar className="text-[#F9BC1D]" />
                          {review.rating}.0
                        </p>
                        <p className="text-xs text-gray-400">
                          {(() => {
                            const date = new Date(review?.createdAt);
                            const day = date.getDate();
                            const suffix = (day) => {
                              if (day >= 11 && day <= 13) return "th";
                              switch (day % 10) {
                                case 1:
                                  return "st";
                                case 2:
                                  return "nd";
                                case 3:
                                  return "rd";
                                default:
                                  return "th";
                              }
                            };
                            const formattedDate =
                              day +
                              suffix(day) +
                              " " +
                              date.toLocaleDateString("en-GB", {
                                month: "long",
                                year: "numeric",
                              });
                            return formattedDate;
                          })()}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-4 leading-relaxed">
                    <RiChatQuoteFill className="absolute top-4 left-4 w-8 h-8 text-primary/20 z-0" />
                    <span className="relative z-10">{review.comment}</span>
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
