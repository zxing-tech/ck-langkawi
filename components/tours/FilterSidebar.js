/**
 * Title: Write a program using JavaScript on FilterSidebar
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
 * Date: 01, November 2023
 */

import hotelTypes from "@/data/hotelTypes";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setCategory,
  setCountries,
  setDateRange,
  setPriceRange,
} from "@/features/filter/filterSlice";

const carTypes = hotelTypes;

const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [priceRange, setPriceRangeLocal] = useState({ min: 50, max: 200 });
  const [dateRange, setDateRangeLocal] = useState({
    startDate: null,
    endDate: null,
  });

  // Locations in Langkawi
  const locations = [
    "Langkawi Airport",
    "Downtown Langkawi",
    "City Center",
    "Beach Area",
    "Premium Location",
    "Airport Pickup",
  ];

  const dispatch = useDispatch();

  // handle functions for updating local state and dispatching actions
  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategory(selectedOptions);
    dispatch(setCategory(selectedOptions));
  };

  const handleLocationChange = (selectedOptions) => {
    setSelectedLocation(selectedOptions);
    dispatch(setCountries(selectedOptions)); // Using same redux action
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRangeLocal({ min, max });
    dispatch(setPriceRange({ min, max }));
  };

  const handleDateRangeChange = (startDate, endDate) => {
    setDateRangeLocal({ startDate, endDate });
    dispatch(setDateRange({ startDate, endDate }));
  };

  // const handleRatingsChange = (selectedOptions) => {
  //   setSelectedRatings(selectedOptions);
  //   dispatch(setRatings(selectedOptions));
  // };

  // function renderStarIcons(count) {
  //   const stars = [];
  //   for (let i = 0; i < count; i++) {
  //     stars.push(<BiSolidStar key={i} className="text-yellow-500 h-4 w-4" />);
  //   }
  //   return stars;
  // }

  return (
    <aside className="lg:col-span-3 md:col-span-4 col-span-12">
      <section className="flex flex-col gap-y-4 md:sticky md:top-4">
        {/* Choose Car Type */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg font-semibold">Car Type</h2>
          <div className="flex flex-col gap-y-2.5 h-40 overflow-y-auto scrollbar-hide">
            {carTypes?.length === 0 && <>Loading...</>}
            {carTypes?.map(({ name, icon }, index) => (
              <label
                key={index}
                htmlFor={name}
                className="text-sm flex flex-row items-center gap-x-2 hover:bg-gray-50 p-1 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={name}
                  id={name}
                  className="!rounded checked:bg-primary focus:ring-primary"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const updatedCategory = isChecked
                      ? [...selectedCategory, name]
                      : selectedCategory.filter(
                          (category) => category !== name
                        );
                    handleCategoryChange(updatedCategory);
                  }}
                />
                <span className="flex flex-row gap-x-2 items-center whitespace-normal">
                  <span className="text-primary">{icon}</span>
                  {name}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Choose Location */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg font-semibold">Pickup Location</h2>
          <div className="flex flex-col gap-y-2.5 max-h-48 overflow-y-auto scrollbar-hide">
            {locations?.map((location, index) => (
              <label
                key={index}
                htmlFor={location}
                className="text-sm flex flex-row items-center gap-x-2 hover:bg-gray-50 p-1 rounded cursor-pointer"
              >
                <input
                  type="checkbox"
                  name={location}
                  id={location}
                  className="!rounded checked:bg-primary focus:ring-primary"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const updatedLocations = isChecked
                      ? [...selectedLocation, location]
                      : selectedLocation.filter((l) => l !== location);
                    handleLocationChange(updatedLocations);
                  }}
                />
                <span className="whitespace-normal">
                  {location}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg font-semibold">Price Per Day</h2>
          <label htmlFor="price" className="flex flex-col gap-y-3">
            <input
              type="range"
              name="price"
              id="price"
              min={50}
              max={200}
              value={priceRange.min}
              onChange={(e) =>
                handlePriceRangeChange(Number(e.target.value), priceRange.max)
              }
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex flex-row items-center justify-between">
              <span className="text-sm font-medium text-primary">${priceRange.min}</span>
              <span className="text-xs text-gray-500">to</span>
              <span className="text-sm font-medium text-primary">${priceRange.max}</span>
            </div>
          </label>
        </div>

        {/* Date Range */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg font-semibold">Rental Period</h2>
          <div className="flex flex-col gap-y-3">
            <label htmlFor="startDate" className="flex flex-col gap-y-1">
              <span className="text-xs text-gray-600">Pickup Date</span>
              <input
                type="date"
                id="startDate"
                value={dateRange.startDate || ""}
                onChange={(e) =>
                  handleDateRangeChange(e.target.value, dateRange.endDate)
                }
                className="text-sm p-2 border rounded focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </label>
            <label htmlFor="endDate" className="flex flex-col gap-y-1">
              <span className="text-xs text-gray-600">Return Date</span>
              <input
                type="date"
                id="endDate"
                value={dateRange.endDate || ""}
                onChange={(e) =>
                  handleDateRangeChange(dateRange.startDate, e.target.value)
                }
                className="text-sm p-2 border rounded focus:ring-2 focus:ring-primary focus:border-primary"
              />
            </label>
          </div>
        </div>

        {/* Choose Ratings */}
        {/* <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg">Choose Ratings</h2>
          <div className="flex flex-col gap-y-2.5">
            {[5, 4, 3, 2, 1].map((rating) => (
              <label
                key={rating}
                htmlFor={rating}
                className="text-sm flex flex-row items-center gap-x-1.5"
              >
                <input
                  type="checkbox"
                  name={rating.toString()}
                  id={rating.toString()}
                  className="!rounded-secondary checked:bg-primary checked:text-primary"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const updatedRatings = isChecked
                      ? [...selectedRatings, rating]
                      : selectedRatings.filter((r) => r !== rating);
                    handleRatingsChange(updatedRatings);
                  }}
                />
                <span className="flex flex-row gap-x-1 items-center">
                  {renderStarIcons(rating)}
                </span>
              </label>
            ))}
          </div>
        </div> */}

        {/* Reset Button */}
        {/* <button
          className="px-4 py-1 border border-primary !rounded-secondary flex flex-row gap-x-2 items-center w-fit bg-secondary text-primary"
          onClick={() => {
            setSelectedCategory([]);
            setSelectedCountries([]);
            setPriceRangeLocal({ min: 10, max: 500 });
            setDateRangeLocal({ startDate: null, endDate: null });
            // setSelectedRatings([]);
            dispatch(resetFilter());
          }}
        >
          Reset Filter
        </button> */}
      </section>
    </aside>
  );
};

export default FilterSidebar;
