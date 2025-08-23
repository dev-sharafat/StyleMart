import Image from "next/image";
import Link from "next/link";
import React from "react";
import RegisterForm from "./components/RegisterForm";

const LoginPage = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-md dark:bg-gray-800">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
          <Link className="flex items-center gap-2 font-bold" href="/">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              alt="StyleMart logo"
              priority
            />
            <h1 className="text-lg lg:text-xl font-semibold">
              Style<span className="text-blue-700">Mart</span>
            </h1>
          </Link>
        </div>

        {/* Login Form */}
        
        <RegisterForm/>
        {/* Divider */}

        {/* Signup Link */}
        <p className="mt-6 text-xs font-light text-center text-gray-500 dark:text-gray-400">
          Do have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
