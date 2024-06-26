"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image'
import { ChevronDown, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const associations = [
    {
      name: "Technical Inspection Association",
      shortName: "TUV NORD",
      description:
        "this associations are independent companies that test, inspect, and certify technologies, products, and systems to ensure potential hazards and prevent damages.",
      imageUrl: "/tuv.png",
    },
    {
      name: "NORTH KARNATAKA SMALL SCALE INDUSTRIAL ASSOCIATION",
      shortName: "NKSSIA Hubli",
      description:
        "Promoting the growth of small-scale industries in North Karnataka.",
      imageUrl: "/nkssia.png",
    },
    {
      name: "KARNATAKA SMALL SCALE INDUSTRIAL ASSOCIATION",
      shortName: "KASSIA Karnataka",
      description: "Supporting small-scale industries across Karnataka state.",
      imageUrl: "/kassa.png",
    },
    {
      name: "LAGHU UDYOG BHARATHI",
      shortName: "LUB Karnataka",
      description: "Empowering micro and small enterprises in Karnataka.",
      imageUrl: "/laghu.png",
    },
    {
      name: "AUTOCLUSTER",
      shortName: "Hubli Dharwad",
      description:
        "Fostering innovation and collaboration in the auto industry.",
      imageUrl: "/autoCluster.png",
    },
    {
      name: "KARNATAKA MATERIAL TESTING AND RESEARCH CENTRE",
      shortName: "KMTRC Hubli",
      description:
        "Providing advanced material testing and research facilities.",
      imageUrl: "/kmrtc.png",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["Home", "About", "Products", "Facilities", "Contact"];

  return (
    <div className="min-h-screen bg-gray-50">
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .bg-gradient {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        }
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        .bg-gradient {
          background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>

      <header className="bg-gradient text-white p-4 fixed w-full z-10 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">India Auto Pins</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-300 transition duration-300 relative group"
                  >
                    {item}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 right-0 bg-gradient shadow-lg`}
        >
          <ul className="py-2">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-blue-700 transition duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center sm:pt-4 pt-32 justify-center bg-gradient text-white overflow-hidden relative"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 text-shadow">
              Welcome to <span className="text-blue-300">India Auto Pins</span>
            </h1>
            <p className="text-2xl mb-8 text-blue-200">
              ISO 9001-2015 Certified Company
            </p>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Precision engineering at its finest. We specialize in
              manufacturing high-quality fasteners, automobile components, and
              machinery parts for industries that demand excellence.
            </p>
            <a
              href="#about"
              className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300 animate-float inline-flex items-center"
            >
              Discover Our Expertise <span className="ml-2">→</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: "⚙️",
                title: "Precision Parts",
                description: "High-quality fasteners and components",
              },
              {
                icon: "🔧",
                title: "Custom Solutions",
                description: "Tailored to your specific needs",
              },
              {
                icon: "🚚",
                title: "Reliable Delivery",
                description: "On-time shipments, every time",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-filter backdrop-blur-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About Section with Company Picture */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            About Us
          </h2>
          <div
            className={`grid md:grid-cols-2 gap-16 items-center ${
              scrollY > 200 ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div>
              <p className="text-lg mb-6 text-gray-600 leading-relaxed">
                India Auto Pins, established in 1978, is a leading manufacturer
                of high-quality fasteners, automobile components, and machinery
                parts. With over 40 years of experience, we have become
                specialists in producing fasteners for the valve industry and
                auto parts.
              </p>
              <p className="text-lg mb-8 text-gray-600 leading-relaxed">
                Our commitment to quality and precision has helped us build
                strong relationships with leading manufacturers across various
                industries.
              </p>
              <Image
                src="/factory.png"
                width={100}
                height={100}
                alt="India Auto Pins Factory"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Key Facts
                </h3>
                <ul className="list-none space-y-2">
                  {[
                    "ISO 9001-2015 Certified",
                    "Established in 1978",
                    "Specializing in ASTM Fasteners",
                    "Advanced Manufacturing Facilities",
                    "Skilled Workforce",
                  ].map((fact, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <ArrowRight className="mr-2 text-blue-500" size={16} />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Our Founder
                </h3>
                <div className="flex items-center">
                  <Image
                    src="/founder.png"
                    width={100}
                    height={100}
                    alt="Founder"
                    className="w-32 h-32 rounded-full mr-6 border-4 border-blue-500"
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      SHRI CHANDRASHEKAHR G LAKKUNDI
                    </h4>
                    <p className="text-gray-600 mt-2">
                      Founder of India Auto Pins, established the company in
                      1978 with a vision to provide high-quality automotive
                      components.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            Our Products
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {["Fasteners", "Automobile Components", "Machinery Parts"].map(
              (product, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
                    scrollY > 600 ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* <img
                    src={`/api/placeholder/400/300?text=${product}`}
                    alt={product}
                    className="w-full rounded-lg mb-6"
                  /> */}
                  <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                    {product}
                  </h3>
                  <p className="text-gray-600">
                    High-quality {product.toLowerCase()} manufactured to precise
                    specifications and industry standards.
                  </p>
                </div>
              )
            )}
          </div>
          <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-blue-800">
              Product Details
            </h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "High Tensile, Stainless Steel ASTM Fasteners",
                "Studs, Nuts, Bolts",
                "Precision Pins, Bushes",
                "Stems, Glands, Spindles",
                "Harden & Ground Components",
              ].map((detail, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-blue-500" size={16} />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Manufacturing Facilities Section */}
      <section id="facilities" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            Manufacturing Facilities
          </h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-800">
                Our Machinery
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    img: "/cnc.png",
                    name: "CNC MACHINES",
                  },
                  {
                    img: "/lateeMachine.png",
                    name: "LATHE MACHINES",
                  },
                  {
                    img: "/bandsaw.png",
                    name: "BANDSAW MACHINE",
                  },
                  {
                    img: "/latee.png",
                    name: "AUTOMAT LATHE",
                  },
                  {
                    img: "/centreless.png",
                    name: "CENTRELESS GRINDING",
                  },
                  {
                    img: "/threading.png",
                    name: "THREADING MACHINES",
                  },
                ].map((machine, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105"
                  >
                    <Image
                      src={`${machine.img}`}
                      alt={machine.name}
                      width={100}
                      height={100}
                      className="w-full rounded-lg mb-4"
                    />
                    <p className="text-center font-semibold text-gray-700">
                      {machine.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-blue-800">
                Facility Details
              </h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Total Land: 6000 Sq. ft.",
                  "Workshop: 2500 Sq. ft.",
                  "Office: 800 Sq. ft.",
                  "Open Land: 2700 Sq. Ft.",
                  "Power: 62.00 HP",
                  "Adequate Water Supply",
                ].map((detail, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ArrowRight className="mr-2 text-blue-500" size={16} />
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 italic">
                Our state-of-the-art facilities ensure high-quality production
                and efficient operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Associations Section
      <section id="associations" className="py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800">
            Company Associations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "NORTH KARNATAKA SMALL SCALE INDUSTRIAL ASSOCIATION - NKSSIA Hubli",
              "KARNATAKA SMALL SCALE INDUSTRIAL ASSOCIATION – KASSIA Karnataka",
              "LAGHU UDYOG BHARATHI – LUB Karnataka",
              "AUTOCLUSTER Hubli Dharwad - AUTOCLUSTER",
              "KARNATAKA MATERIAL TESTING AND RESEARCH CENTRE – KMTRC Hubli",
            ].map((association, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              >
                <p className="font-semibold text-gray-700">{association}</p>
              </div>
            ))}
          </div>
        </div> */}
      <section id="associations" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-gray-800 animate-fade-in">
            Company Associations
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {associations.map((association, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center p-6">
                  <Image
                    src={association.imageUrl}
                    alt={association.name}
                    width={100}
                    height={100}
                    className="w-20 h-20 rounded-full mr-4 border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">
                      {association.shortName}
                    </h3>
                    <p className="text-sm text-gray-600">{association.name}</p>
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <p className="text-gray-700">{association.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Map */}
      <section id="contact" className="py-24 bg-gradient text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Get in Touch</h3>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center">
                  <MapPin className="mr-4 text-blue-300" size={24} />
                  <span>
                    B-91, Industrial Estate, Gokul Road, Hubli – 580 030
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-4 text-blue-300" size={24} />
                  <span>+91 836 2210640</span>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-4 text-blue-300" size={24} />
                  <span>mrutchan036@gmail.com</span>
                </li>
              </ul>
              <form className="space-y-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8">Our Location</h3>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/map.png"
                  width="150"
                  height="200"
                  alt="India Auto Pins Factory"
                  className="w-full rounded-lg shadow-2xl"
                />
                {/* <iframe
                  title="India Auto Pins Location"
                  width="100%"
                  height="450"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps/embed/v1/place?q=15.352240246850624,+75.11220962023974&key=AIzaSyAnW_9cWtNAQpXZKEsJTxg1zPaaXLe5MYo&callback=console.debug&libraries=maps,marker&v=beta`}
                  allowFullScreen
                ></iframe> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 India Auto Pins. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Precision Engineering Since 1978</p>
        </div>
      </footer>
      {/* Scroll to top button */}
      <button
        className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          scrollY > 200 ? "opacity-100" : "opacity-0"
        } hover:bg-blue-700`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <ChevronDown className="transform rotate-180" size={24} />
      </button>
    </div>
  );
};

export default HomePage;
