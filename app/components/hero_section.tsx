"use client";
import { useEffect } from "react";
// Import the AOS styles
import AOS from "aos";
import Link from "next/link";

export default function HeroSection() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div className="flex  py-20 justify-start w-full ">
        <div className="mt-28 md:mt-14 pb-24  md:pb-0 mb-24 flex justify-start h-full flex-col w-full">
          <span
            data-aos="fade-up"
            className=" font-roboto font-normal line-height-8 text-textBlue text-xl"
          >
            Hi, my name is
          </span>
          <h1
            data-aos="fade-up"
            className=" font-semibold mt-5  text-headGray font-noto text-4xl md:text-7xl"
          >
            Mayur Parmar
          </h1>
          <h1
            data-aos="fade-up"
            className=" font-semibold mt-5 mb-10 font-noto text-4xl md:text-7xl text-textGray"
          >
            Building Web Wonders
          </h1>
          <span data-aos="fade-up" className=" text-textGray  max-w-xl text-md">
            {`I build amazing digital experiences as a software engineer, and sometimes I design too. Right now, I'm focused on creating user-friendly products at `}
            <a className="text-textBlue" href="www.fotonvr.com">
              fotonVR.
            </a>
          </span>
          <Link
            data-aos="fade-up"
            href="/media/pdf/Mayur_Parmar.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center w-52 justify-center px-5 py-3 mt-10 rounded-md text-2xl font-semibold bg-textBlue hover:bg-textBlue/90 text-gray-900">
              <span>Resume</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
