/**
 * Title: Write a program using JavaScript on [tour]
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
 * Date: 19, October 2023
 */

import Left from "@/components/detail/Left";
import Right from "@/components/detail/Right";
import Reviews from "@/components/shared/review/Reviews";
import Container from "@/components/shared/container/Container";
import Footer from "@/components/shared/footer/Footer";
import Navbar from "@/components/shared/navbar/Navbar";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import { useGetRentQuery } from "@/services/rent/rentApi";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setRent } from "@/features/rent/rentSlice";
import BestSelling from "@/components/home/bestSelling/BestSelling";
import MoreRents from "@/components/detail/MoreRents";
import AllReviews from "@/components/detail/AllReviews";

// Mock car data
const mockCars = {
  "mock-1": {
    _id: "mock-1",
    title: "Tesla Model 3 - Premium Electric",
    location: "Downtown Langkawi",
    price: 89,
    status: "Available",
    members: 5,
    summary: "Experience the future of driving with our Tesla Model 3. This premium electric sedan combines cutting-edge technology, exceptional performance, and zero emissions. Perfect for exploring Langkawi in style and comfort.",
    information: [
      "Automatic transmission with advanced autopilot features",
      "Full insurance coverage included",
      "24/7 roadside assistance",
      "Free charging at all Tesla Supercharger stations",
      "Smartphone app integration for remote control",
      "Regular maintenance and cleaning between rentals",
    ],
    times: [
      "Pickup: 24/7 available with advance booking",
      "Return: Flexible return times",
      "Airport pickup/drop-off available",
      "Free delivery within 10km radius",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=480&h=300&fit=crop&q=80",
        public_id: "tesla-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1536700503339-1e4b06520771?w=480&h=300&fit=crop&q=80",
        public_id: "tesla-2",
        _id: "g2",
      },
      {
        url: "https://images.unsplash.com/photo-1617788138017-80ad40651399?w=480&h=300&fit=crop&q=80",
        public_id: "tesla-3",
        _id: "g3",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 4 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-2": {
    _id: "mock-2",
    title: "BMW X5 - Luxury SUV",
    location: "Langkawi Airport",
    price: 120,
    status: "Hot Deal",
    members: 7,
    summary: "Experience luxury and power with our BMW X5. This premium SUV offers spacious seating for 7, advanced safety features, and exceptional comfort for your Langkawi adventure. Perfect for families and groups.",
    information: [
      "Automatic transmission with sports mode",
      "Comprehensive insurance coverage",
      "Premium sound system and entertainment",
      "Advanced driver assistance systems",
      "Leather interior with climate control",
      "GPS navigation system included",
    ],
    times: [
      "Airport pickup service available",
      "Flexible pickup: 8AM - 10PM daily",
      "Return: Same location preferred",
      "After-hours return available with prior notice",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=480&h=300&fit=crop&q=80",
        public_id: "bmw-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=480&h=300&fit=crop&q=80",
        public_id: "bmw-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 5 },
      { _id: "r4", rating: 4 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }, { _id: "u3" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-3": {
    _id: "mock-3",
    title: "Mercedes-Benz C-Class Sedan",
    location: "City Center",
    price: 95,
    status: "Available",
    members: 5,
    summary: "Drive in elegance with the Mercedes-Benz C-Class. This premium sedan offers the perfect blend of performance, comfort, and sophisticated design. Ideal for business trips or special occasions in Langkawi.",
    information: [
      "Automatic transmission with eco mode",
      "Full insurance and roadside assistance",
      "Premium leather seats with heating",
      "Advanced multimedia system",
      "Blind spot monitoring and parking assist",
      "Regular professional detailing",
    ],
    times: [
      "City center pickup available",
      "Pickup: Monday-Sunday 7AM - 11PM",
      "Return: Flexible return schedule",
      "Hotel delivery service available",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=480&h=300&fit=crop&q=80",
        public_id: "mercedes-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1617531653520-bd466ee81789?w=480&h=300&fit=crop&q=80",
        public_id: "mercedes-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 4 },
      { _id: "r4", rating: 5 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-4": {
    _id: "mock-4",
    title: "Toyota Camry Sedan - Comfort",
    location: "Beach Area",
    price: 65,
    status: "20% OFF",
    members: 5,
    summary: "Enjoy reliable comfort with the Toyota Camry. This popular sedan offers excellent fuel efficiency, smooth handling, and spacious interior. Perfect for budget-conscious travelers who don't want to compromise on quality.",
    information: [
      "Automatic transmission with excellent fuel economy",
      "Comprehensive insurance included",
      "Well-maintained with regular service",
      "Comfortable seating for up to 5 passengers",
      "Modern safety features including ABS and airbags",
      "Bluetooth connectivity and USB charging",
    ],
    times: [
      "Beach area pickup location",
      "Pickup: Daily 8AM - 9PM",
      "Return: Same day return accepted",
      "Free pickup from nearby hotels",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=480&h=300&fit=crop&q=80",
        public_id: "camry-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=480&h=300&fit=crop&q=80",
        public_id: "camry-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 4 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 4 },
    ],
    users: [{ _id: "u1" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-5": {
    _id: "mock-5",
    title: "Range Rover Sport SUV",
    location: "Premium Location",
    price: 150,
    status: "VIP",
    members: 7,
    summary: "Experience ultimate luxury with the Range Rover Sport. This prestigious SUV combines off-road capability with refined elegance. Perfect for those who demand the very best during their Langkawi visit.",
    information: [
      "Automatic transmission with terrain response",
      "Premium all-risk insurance coverage",
      "Luxury leather interior with massage seats",
      "Advanced entertainment and navigation system",
      "Panoramic sunroof and ambient lighting",
      "Complimentary chauffeur service available",
    ],
    times: [
      "VIP concierge pickup service",
      "Pickup: 24/7 with advance reservation",
      "Return: Flexible arrangements",
      "Airport meet & greet service included",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=480&h=300&fit=crop&q=80",
        public_id: "range-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=480&h=300&fit=crop&q=80",
        public_id: "range-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 5 },
      { _id: "r4", rating: 5 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-6": {
    _id: "mock-6",
    title: "Honda CR-V - Family SUV",
    location: "Airport Pickup",
    price: 75,
    status: "Available",
    members: 7,
    summary: "The Honda CR-V is the perfect family SUV for your Langkawi adventure. Spacious, reliable, and comfortable, it offers ample cargo space and seating for up to 7 passengers. Great value for families and groups.",
    information: [
      "Automatic transmission with eco-assist",
      "Full insurance and emergency support",
      "Spacious 7-seater configuration",
      "Ample cargo space for luggage",
      "Modern safety features and stability control",
      "Excellent fuel efficiency for an SUV",
    ],
    times: [
      "Airport pickup service available",
      "Pickup: Daily 6AM - 11PM",
      "Return: Airport drop-off preferred",
      "Multi-day rentals encouraged",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=480&h=300&fit=crop&q=80",
        public_id: "honda-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=480&h=300&fit=crop&q=80",
        public_id: "honda-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 4 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 4 },
      { _id: "r4", rating: 4 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-7": {
    _id: "mock-7",
    title: "Audi A4 - Sporty Sedan",
    location: "Downtown Langkawi",
    price: 85,
    status: "Available",
    members: 5,
    summary: "Experience German engineering with the Audi A4. This sporty sedan delivers impressive performance and cutting-edge technology. Perfect for those who appreciate a dynamic driving experience in Langkawi.",
    information: [
      "Automatic transmission with sport mode",
      "Comprehensive insurance coverage",
      "Virtual cockpit and MMI navigation",
      "Premium Bang & Olufsen sound system",
      "Advanced driver assistance package",
      "Quattro all-wheel drive for superior handling",
    ],
    times: [
      "Downtown pickup location",
      "Pickup: Monday-Sunday 8AM - 10PM",
      "Return: Same location preferred",
      "Express check-in/out available",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=480&h=300&fit=crop&q=80",
        public_id: "audi-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=480&h=300&fit=crop&q=80",
        public_id: "audi-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 4 },
      { _id: "r3", rating: 5 },
      { _id: "r4", rating: 4 },
    ],
    users: [{ _id: "u1" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-8": {
    _id: "mock-8",
    title: "Porsche Cayenne - Luxury SUV",
    location: "Premium Location",
    price: 180,
    status: "Premium",
    members: 5,
    summary: "Indulge in the ultimate luxury SUV experience with the Porsche Cayenne. Combining sports car performance with SUV versatility, this prestigious vehicle makes every journey in Langkawi extraordinary.",
    information: [
      "Automatic PDK transmission with launch control",
      "Premium all-inclusive insurance",
      "Luxurious leather interior with carbon fiber accents",
      "Bose surround sound system",
      "Adaptive air suspension for supreme comfort",
      "Complimentary premium car wash included",
    ],
    times: [
      "White-glove delivery service",
      "Pickup: 24/7 by appointment",
      "Return: Flexible premium service",
      "Personal concierge assistance available",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=480&h=300&fit=crop&q=80",
        public_id: "porsche-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=480&h=300&fit=crop&q=80",
        public_id: "porsche-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 5 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 5 },
      { _id: "r4", rating: 5 },
      { _id: "r5", rating: 5 },
    ],
    users: [{ _id: "u1" }, { _id: "u2" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
  "mock-9": {
    _id: "mock-9",
    title: "Mazda CX-5 - Crossover",
    location: "City Center",
    price: 80,
    status: "Available",
    members: 5,
    summary: "Discover the perfect balance of style and practicality with the Mazda CX-5. This modern crossover offers refined design, advanced safety features, and impressive fuel economy for exploring Langkawi.",
    information: [
      "Automatic transmission with i-ACTIV AWD",
      "Comprehensive insurance and support",
      "Premium interior with leather-trimmed seats",
      "Mazda Connect infotainment system",
      "Advanced smart city brake support",
      "Excellent visibility and driving comfort",
    ],
    times: [
      "City center pickup point",
      "Pickup: Daily 7AM - 10PM",
      "Return: Flexible schedule",
      "Free hotel pickup within 5km",
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=480&h=300&fit=crop&q=80",
        public_id: "mazda-1",
        _id: "g1",
      },
      {
        url: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=480&h=300&fit=crop&q=80",
        public_id: "mazda-2",
        _id: "g2",
      },
    ],
    reviews: [
      { _id: "r1", rating: 4 },
      { _id: "r2", rating: 5 },
      { _id: "r3", rating: 4 },
      { _id: "r4", rating: 4 },
    ],
    users: [{ _id: "u1" }],
    duration: {
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
    },
    owner: {
      name: "CK Langkawi Rentals",
    },
  },
};

const DetailPage = () => {
  const router = useRouter();
  const { data, isLoading, error } = useGetRentQuery(router?.query?.id);
  const tour = useMemo(() => {
    // Use real data if available, otherwise use mock data
    if (data?.data) {
      return data.data;
    }
    // Get mock data based on ID
    const carId = router?.query?.id;
    return mockCars[carId] || mockCars["mock-1"];
  }, [data, router?.query?.id]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      toast.success(data?.message, { id: "rent-data" });
    }

    if (error?.data) {
      toast.error(error?.data?.message, { id: "rent-data" });
    }

    // Always dispatch tour data (either from API or mock)
    if (tour) {
      dispatch(setRent(tour));
    }
  }, [data, error, dispatch, tour]);

  return (
    <>
      <Head>
        <title>{tour?.title || "Car Details"} - Car Rental Langkawi</title>
      </Head>
      <Navbar />
      <div className="my-8">
        <Container>
          {!tour ? (
            <div className="grid grid-cols-12 gap-8">
              <div className="lg:col-span-5 md:col-span-6 col-span-12">
                <div className="h-[500px] w-full rounded bg-gray-200 animate-pulse" />
              </div>
              <div className="lg:col-span-7 md:col-span-6 col-span-12">
                <div className="w-full flex flex-col gap-y-4">
                  <div className="h-[200px] w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-[50px] w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-[100px] w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-[400px] w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-[50px] w-full rounded bg-gray-200 animate-pulse" />
                  <div className="h-[50px] w-full rounded bg-gray-200 animate-pulse" />
                </div>
              </div>
            </div>
          ) : (
            <>
              <div className="h-full w-full flex flex-col gap-y-8">
                <div className="grid grid-cols-12 gap-8">
                  <Left />
                  <Right />
                </div>
                <AllReviews className="!px-0" />
                <MoreRents className="!px-0" />
              </div>
            </>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default DetailPage;
