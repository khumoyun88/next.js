import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="pt-16 pb-12 bg-darkBg" style={{ backgroundColor: "#160530" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="max-w-full md:max-w-md mb-8 md:mb-0">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white mb-4">
              Let’s start working to build a brighter future.
            </h3>
            <p className="text-sm md:text-base leading-normal text-white mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              posuere eget elementum vulputate elementum viverra sapien tellus
              aenean.
            </p>
            <span className="text-sm font-bold text-white">
              Fb In Tw Ln
            </span>
          </div>
          <form className="w-full md:w-auto flex flex-col md:flex-row items-stretch border border-[#E0CFFC]">
            <input
              type="text"
              className="flex-grow px-6 py-4 bg-transparent outline-none text-white placeholder:text-lg"
              placeholder="Join our mailing list"
            />
            <button
              type="submit"
              className="text-white bg-transparent py-4 px-8 mt-4 md:mt-0 md:ml-4"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-12">
          <Link href="/" className="mb-4 md:mb-0">
            <Image src="/logo.png" alt="logo" width={38} height={38} />
          </Link>
          <p className="text-sm text-white">
            Copyright 2021. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;