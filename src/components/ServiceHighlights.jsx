"use client";

import { Truck, RefreshCw, Headphones, ShieldCheck } from "lucide-react"; // icons
import { motion } from "framer-motion";

const ServiceHighlights = () => {
  const services = [
    {
      icon: <Truck className="w-10 h-10 text-green-600" />,
      title: "Free Shipping",
      text: "Enjoy free shipping on all orders with no minimum purchase required.",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-green-600" />,
      title: "Easy Returns",
      text: "Not satisfied? We offer a 100% money back guarantee for your peace of mind.",
    },
    {
      icon: <Headphones className="w-10 h-10 text-green-600" />,
      title: "24/7 Support",
      text: "Our team is available around the clock to answer your questions.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-600" />,
      title: "Secure Shopping",
      text: "Shop safely with encrypted payments and buyer protection.",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-[#F9F9F9] py-12 my-5">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl lg:text-3xl font-bold">Why Shop With Stylemart</h2>
          <p className="text-gray-600 mt-2">
            We make online shopping easier, faster, and worry-free with benefits designed for you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-lg transition"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              {service.icon}
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
