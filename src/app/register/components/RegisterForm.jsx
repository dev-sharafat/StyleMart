"use client";

import React from "react";

const RegisterForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    console.log("Form submitted",name,email,password);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Username */}
      <div>
        <label
          htmlFor="username"
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          Username
        </label>
        <input
          type="text"
          name="name"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg 
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
              focus:border-blue-400 dark:focus:border-blue-300 
              focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Enter Your Name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm text-gray-800 dark:text-gray-200"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg 
    dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
    focus:border-blue-400 dark:focus:border-blue-300 
    focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Enter Your Email"
        />
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Password
          </label>
        </div>
        <input
          type="password"
          name="password"
          className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg 
              dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 
              focus:border-blue-400 dark:focus:border-blue-300 
              focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Enter your password"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize 
            transition-colors duration-300 transform bg-blue-600 rounded-lg 
            hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
      >
        Sign In
      </button>
    </form>
  );
};

export default RegisterForm;
