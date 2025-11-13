import React, { useState } from "react";
import Head from "next/head";
import Main from "@/layouts/Main";
import Container from "@/components/shared/container/Container";
import {
  BiPhone,
  BiEnvelope,
  BiMap,
  BiTime,
  BiSupport,
} from "react-icons/bi";
import { FaWhatsapp, FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <BiPhone />,
      title: "Phone",
      details: ["+60 4-966 7788", "+60 12-345 6789"],
      link: "tel:+60149667788",
    },
    {
      icon: <BiEnvelope />,
      title: "Email",
      details: ["info@cklangkawi.com", "support@cklangkawi.com"],
      link: "mailto:info@cklangkawi.com",
    },
    {
      icon: <BiMap />,
      title: "Office Location",
      details: [
        "Jalan Pantai Cenang,",
        "07000 Langkawi, Kedah, Malaysia",
      ],
      link: "https://maps.google.com",
    },
    {
      icon: <BiTime />,
      title: "Business Hours",
      details: ["Mon - Sun: 8:00 AM - 10:00 PM", "24/7 Emergency Support"],
      link: null,
    },
  ];

  const socialMedia = [
    {
      icon: <FaWhatsapp />,
      name: "WhatsApp",
      link: "https://wa.me/60123456789",
      color: "text-green-500",
    },
    {
      icon: <FaTelegram />,
      name: "Telegram",
      link: "https://t.me/cklangkawi",
      color: "text-blue-500",
    },
    {
      icon: <FaFacebook />,
      name: "Facebook",
      link: "https://facebook.com/cklangkawi",
      color: "text-blue-600",
    },
    {
      icon: <FaInstagram />,
      name: "Instagram",
      link: "https://instagram.com/cklangkawi",
      color: "text-pink-500",
    },
  ];

  const faqs = [
    {
      question: "What documents do I need to rent a car?",
      answer:
        "You'll need a valid driver's license, passport or IC, and a credit/debit card for the security deposit.",
    },
    {
      question: "Is there a minimum rental period?",
      answer:
        "Our minimum rental period is 1 day (24 hours). We also offer weekly and monthly packages with discounted rates.",
    },
    {
      question: "Can I pick up the car at the airport?",
      answer:
        "Yes! We offer complimentary airport pickup and drop-off services. Just let us know your flight details when booking.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation up to 24 hours before pickup. Cancellations within 24 hours are subject to a 50% fee.",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Head>
        <title>Contact Us - CK Langkawi Car Rental</title>
        <meta
          name="description"
          content="Get in touch with CK Langkawi Car Rental. We're here to help you 24/7 with your car rental needs in Langkawi."
        />
      </Head>
      <Main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 to-secondary py-16">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center bg-primary/10 p-4 rounded-full mb-6">
                <BiSupport className="h-12 w-12 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about our car rental services? We're here to help!
                Reach out to us anytime, and our friendly team will get back to
                you as soon as possible.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-white">
          <Container>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <div className="inline-flex items-center justify-center bg-primary/10 p-3 rounded-full mb-4 text-primary text-2xl">
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-sm text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.link && (
                    <a
                      href={info.link}
                      className="inline-block mt-3 text-sm text-primary hover:text-primary/80 font-medium"
                      target={info.link.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      {info.title === "Phone" && "Call Now →"}
                      {info.title === "Email" && "Send Email →"}
                      {info.title === "Office Location" && "View on Map →"}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send Us a Message
                </h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Thank you for contacting us!</p>
                    <p className="text-sm">We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Phone
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+60 12-345 6789"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Car rental inquiry"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>

              {/* Map & Social Media */}
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Find Us Here
                  </h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63571.89576435259!2d99.71038!3d6.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304c9f52f6df2d1b%3A0x5b2c0a2a3e4a0a0a!2sLangkawi%2C%20Kedah%2C%20Malaysia!5e0!3m2!1sen!2s!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-x-3 p-3 border border-gray-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                      >
                        <span className={`text-2xl ${social.color}`}>
                          {social.icon}
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary">
                          {social.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Support */}
                <div className="bg-primary text-white p-6 rounded-lg">
                  <div className="flex items-start gap-x-4">
                    <div className="bg-white/20 p-3 rounded-lg">
                      <BiSupport className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Need Urgent Help?</h3>
                      <p className="text-sm text-white/90 mb-3">
                        Our 24/7 emergency hotline is always available for
                        roadside assistance.
                      </p>
                      <a
                        href="tel:+60123456789"
                        className="inline-block bg-white text-primary px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Call Emergency: +60 12-345 6789
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQs Section */}
        <section className="py-16 bg-white">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Quick answers to common questions about our car rental services.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <IoCarSportSharp className="h-16 w-16 mx-auto mb-6 opacity-90" />
              <h2 className="text-3xl font-bold mb-4">
                Ready to Hit the Road?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Browse our extensive collection of vehicles and book your perfect
                car for your Langkawi adventure today.
              </p>
              <button
                onClick={() => (window.location.href = "/tours")}
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Available Cars
              </button>
            </div>
          </Container>
        </section>
      </Main>
    </>
  );
};

export default Contact;
