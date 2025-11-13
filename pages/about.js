import React from "react";
import Head from "next/head";
import Main from "@/layouts/Main";
import Container from "@/components/shared/container/Container";
import Image from "next/image";
import { BiShieldAlt2, BiTime, BiStar, BiSupport } from "react-icons/bi";
import { MdElectricCar, MdVerified } from "react-icons/md";
import { FaUsers, FaCar } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const About = () => {
  const stats = [
    { icon: <FaCar />, value: "500+", label: "Vehicles" },
    { icon: <FaUsers />, value: "10,000+", label: "Happy Customers" },
    { icon: <BiStar />, value: "4.9/5", label: "Average Rating" },
    { icon: <MdVerified />, value: "15+", label: "Years Experience" },
  ];

  const values = [
    {
      icon: <BiShieldAlt2 />,
      title: "Safety First",
      description:
        "All our vehicles undergo rigorous safety inspections and maintenance to ensure your journey is secure and worry-free.",
    },
    {
      icon: <BiTime />,
      title: "24/7 Support",
      description:
        "Our dedicated customer service team is available round the clock to assist you with any queries or emergencies.",
    },
    {
      icon: <MdElectricCar />,
      title: "Eco-Friendly Options",
      description:
        "We offer a range of electric and hybrid vehicles to support sustainable tourism in Langkawi.",
    },
    {
      icon: <BiSupport />,
      title: "Transparent Pricing",
      description:
        "No hidden fees or surprise charges. What you see is what you pay, with comprehensive insurance included.",
    },
  ];

  const fleet = [
    {
      category: "Economy",
      count: "150+",
      image:
        "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop&q=80",
      description: "Budget-friendly options for smart travelers",
    },
    {
      category: "Luxury",
      count: "80+",
      image:
        "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop&q=80",
      description: "Premium vehicles for those who demand excellence",
    },
    {
      category: "SUV & Family",
      count: "120+",
      image:
        "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400&h=300&fit=crop&q=80",
      description: "Spacious and comfortable for family adventures",
    },
    {
      category: "Electric",
      count: "50+",
      image:
        "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=300&fit=crop&q=80",
      description: "Eco-friendly and cutting-edge technology",
    },
  ];

  return (
    <>
      <Head>
        <title>About Us - CK Langkawi Car Rental</title>
        <meta
          name="description"
          content="Learn about CK Langkawi Car Rental - Your trusted partner for car rentals in Langkawi with over 15 years of experience."
        />
      </Head>
      <Main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary py-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6">
                <IoCarSportSharp className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Welcome to CK Langkawi Car Rental
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your trusted partner for hassle-free car rentals in Langkawi.
                With over 15 years of experience, we're committed to making your
                island adventure memorable and comfortable.
              </p>
            </div>
          </Container>
        </section>

        {/* Trust Badges Section */}
        <section className="py-12 bg-white border-y border-gray-200">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-3 text-primary text-2xl group-hover:bg-primary group-hover:text-white transition-all">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Our Story Section */}
        <section className="py-16">
          <Container>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Founded in 2009, CK Langkawi Car Rental started with a
                    simple mission: to provide tourists and locals with reliable,
                    affordable, and high-quality car rental services in the
                    beautiful island of Langkawi.
                  </p>
                  <p>
                    What began as a small operation with just 10 vehicles has
                    grown into one of Langkawi's most trusted car rental
                    companies, serving over 10,000 satisfied customers annually.
                  </p>
                  <p>
                    We take pride in our diverse fleet of over 500 vehicles,
                    ranging from economical city cars to luxurious SUVs, ensuring
                    that every traveler finds the perfect ride for their journey.
                  </p>
                  <p>
                    Our commitment to excellence, transparency, and customer
                    satisfaction has earned us a 4.9-star rating and countless
                    repeat customers who trust us with their transportation needs.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&q=80"
                  alt="Langkawi scenery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're more than just a car rental company. We're your partner in
                creating unforgettable experiences in Langkawi.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4 text-primary text-3xl">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Our Fleet Section */}
        <section className="py-16">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Diverse Fleet
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From budget-friendly economy cars to luxurious premium vehicles,
                we have the perfect car for every journey and budget.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fleet.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={item.image}
                      alt={item.category}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="text-sm font-medium mb-1">{item.count}</div>
                    <h3 className="text-lg font-bold mb-1">{item.category}</h3>
                    <p className="text-xs text-gray-200">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Book your perfect car today and explore the beautiful island of
                Langkawi at your own pace.
              </p>
              <button
                onClick={() => (window.location.href = "/tours")}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Our Cars
              </button>
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};

export default About;
