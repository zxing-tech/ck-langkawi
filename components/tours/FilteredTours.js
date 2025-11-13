/**
 * Title: Write a program using JavaScript on FilteredTours
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
 * Date: 02, November 2023
 */

import React, { useEffect, useMemo } from "react";
import Card from "../shared/card/Card";
import SkeletonCard from "../shared/card/SkeletonCard";
import { useGetFilteredRentsMutation } from "@/services/rent/rentApi";
import { useSelector } from "react-redux";

// Mock cars data (same as BestSelling component)
const mockCars = [
  {
    _id: "mock-1",
    title: "Tesla Model 3 - Premium Electric",
    location: "Downtown Langkawi",
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
    location: "Langkawi Airport",
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
    title: "Mercedes-Benz C-Class Sedan",
    location: "City Center",
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
    title: "Toyota Camry Sedan - Comfort",
    location: "Beach Area",
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
    title: "Range Rover Sport SUV",
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
    location: "Airport Pickup",
    price: 75,
    status: "Available",
    members: "7 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=480&h=200&fit=crop&q=80",
        public_id: "honda-crv-1",
      },
      {
        url: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=480&h=200&fit=crop&q=80",
        public_id: "honda-crv-2",
      },
    ],
    reviews: [1, 2, 3, 4],
  },
  {
    _id: "mock-7",
    title: "Audi A4 - Sporty Sedan",
    location: "Downtown Langkawi",
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
    title: "Porsche Cayenne - Luxury SUV",
    location: "Premium Location",
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
  {
    _id: "mock-9",
    title: "Mazda CX-5 - Crossover",
    location: "City Center",
    price: 80,
    status: "Available",
    members: "5 Seats",
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=480&h=200&fit=crop&q=80",
        public_id: "mazda-cx5-1",
      },
      {
        url: "https://images.unsplash.com/photo-1567818735868-e71b99932e29?w=480&h=200&fit=crop&q=80",
        public_id: "mazda-cx5-2",
      },
    ],
    reviews: [1, 2, 3, 4],
  },
];

const FilteredTours = () => {
  const filter = useSelector((state) => state.filter);
  const [addFilter, { data, isLoading, error }] = useGetFilteredRentsMutation();

  // Filter mock data based on Redux filter state
  const tours = useMemo(() => {
    // Use real data if available
    if (data?.data && data.data.length > 0) {
      return data.data;
    }

    // Filter mock data
    let filtered = [...mockCars];

    // Filter by category (car type)
    if (filter.category && filter.category.length > 0) {
      filtered = filtered.filter((car) =>
        filter.category.some((type) => car.title.toLowerCase().includes(type.toLowerCase()))
      );
    }

    // Filter by location
    if (filter.countries && filter.countries.length > 0) {
      filtered = filtered.filter((car) =>
        filter.countries.some((location) => car.location.includes(location))
      );
    }

    // Filter by price range
    if (filter.priceRange) {
      filtered = filtered.filter(
        (car) =>
          car.price >= filter.priceRange.min &&
          car.price <= filter.priceRange.max
      );
    }

    return filtered;
  }, [data, filter]);

  useEffect(() => {
    if (error?.data) {
      console.log(error?.data?.message);
    }
  }, [data, isLoading, error]);

  // Comment out API call for now to use mock data only
  // useEffect(() => {
  //   addFilter(filter);
  // }, [addFilter, filter]);

  return (
    <section className="lg:col-span-9 md:col-span-8 col-span-12 flex flex-col gap-y-4">
      <div className="flex flex-row items-center justify-between mb-4">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{tours?.length}</span> cars available
        </p>
      </div>

      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {tours && tours.length > 0 ? (
          tours.map((tour) => <Card key={tour._id} tour={tour} />)
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">No cars found matching your filters. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FilteredTours;
