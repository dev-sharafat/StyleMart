import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
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
    <div className="container mx-auto navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden p-0">
            <Link
              className="flex justify-center items-center font-bold"
              href="/"
            >
              <Image
                priority={false}
                src={"/logo.png"}
                width={50}
                height={50}
                alt="StyleMart logo"
              ></Image>
              <h1 className="text-lg lg:text-xl">
                Style<span className="text-blue-700">Mart</span>
              </h1>
            </Link>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <div className="lg:block hidden">
            <Link className="flex justify-center items-center font-bold" href="/">
          <Image
            priority={false}
            src={"/logo.png"}
            width={50}
            height={50}
            alt="StyleMart logo"
          ></Image>
          <h1 className="text-lg lg:text-xl">
            Style<span className="text-blue-700">Mart</span>
          </h1>
        </Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Login</a>
      </div>
    </div>
  );
};

export default NavBar;
