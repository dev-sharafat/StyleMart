import { motion } from "framer-motion";
import dbConnection from "@/lib/dbConnect";
import React from "react";
import Link from "next/link";

const BestSell = async () => {
  const productCollection = dbConnection("productsone");
  const data = await productCollection.find().toArray();
  return (
    <div className="container mx-auto mt-5 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Best Sell Product</h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="show"
        //   variants={{
        //     hidden: {},
        //     show: { transition: { staggerChildren: 0.2 } },
        //   }}
      >
        {data.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
            //   variants={{
            //     hidden: { opacity: 0, y: 50 },
            //     show: { opacity: 1, y: 0 },
            //   }}
            //   whileHover={{ scale: 1.05 }}
          >
            <img
              src={product?.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.category}</p>
                <p className="text-blue-500 font-bold mt-2">${product.price}</p>
                <p className="text-sm text-gray-500">
                  In Stock: {product.quantity}
                </p>
              </div>
              <Link
                href={`product/${product._id}`}
                className=" btn mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSell;
