import dbConnection from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import React from "react";

const page = async ({ params }) => {
  const p = await params;
  const productsCollection = dbConnection("productsone");
  const product = await productsCollection.findOne({ _id: new ObjectId(p.id) });
  console.log(p);
  return (
    <div className="container mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <div className="w-full">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-gray-500 text-lg mt-1">{product.category}</p>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-2xl font-semibold text-blue-600">
              ${product.price}
            </p>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">
              In Stock: {product.quantity}
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Brand</h3>
              <p className="text-gray-900">{product.brand}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Material</h3>
              <p className="text-gray-900">{product.material}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Color</h3>
              <p className="text-gray-900">{product.color}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-500">Sizes</h3>
              <p className="text-gray-900">{product.size.join(", ")}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-6">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 border border-gray-300 py-3 rounded-xl hover:bg-gray-100 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Suggested Products Section */}
      {/* <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6">You may also like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition p-4"
            >
              <div className="bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover"
                />
              </div>
              <h3 className="mt-3 font-medium text-gray-800 text-sm truncate">
                {product.name}
              </h3>
              <p className="text-gray-500 text-sm">{product.category}</p>
              <p className="text-blue-600 font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default page;
