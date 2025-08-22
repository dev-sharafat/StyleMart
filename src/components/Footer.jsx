"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const navLink = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">products</Link>
      </li>
      <li>
        <Link href="/about">Home</Link>
      </li>
    </>
  );
  return (
    <footer className="container mx-auto py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h3 className="dark:text-white font-bold text-lg mb-4">About StyleMart</h3>
          <p className="dark:text-gray-400 text-sm">
            StyleMart is your go-to destination for trendy fashion and accessories. We make shopping easy, secure, and fun, with a wide selection of high-quality products delivered straight to your door.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="dark:text-white font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
        {navLink}
          </ul>
        </div>

    
        {/* Newsletter & Socials */}
        <div>
          <h3 className="dark:text-white font-bold text-lg mb-4">Stay Connected</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter to get the latest trends, offers, and updates.
          </p>
          <form className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md text-gray-900 focus:outline-none flex-1"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-r-md hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-4">
            <Link href="#"><Facebook className="w-5 h-5 hover:text-green-600 transition" /></Link>
            <Link href="#"><Instagram className="w-5 h-5 hover:text-green-600 transition" /></Link>
            <Link href="#"><Twitter className="w-5 h-5 hover:text-green-600 transition" /></Link>
            <Link href="#"><Linkedin className="w-5 h-5 hover:text-green-600 transition" /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} StyleMart. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
