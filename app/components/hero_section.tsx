"use client";
import { useEffect } from "react";
// Import the AOS styles
import AOS from 'aos';

export default function HeroSection() {
  useEffect(() => {
 
    AOS.refresh(); 
  }, []);
  return (
    <div className="container">
      <div className="flex xl:py-36 py-20 justify-start w-full ">
        <div className="mt-28 md:mt-14 pb-24  md:pb-0 mb-24 flex justify-start h-full flex-col w-full">
          <span data-aos="fade-up"  className=" font-roboto font-normal line-height-8 text-textBlue text-xl">
            Hi, my name is
          </span>
          <h1 data-aos="fade-up"  className=" font-semibold mt-5  text-headGray font-noto text-4xl md:text-7xl">
            Mayur Parmar
          </h1>
          <h1 data-aos="fade-up"  className=" font-semibold mt-5 mb-10 font-noto text-4xl md:text-7xl text-textGray">
            Building Web Wonders
          </h1>
          <span data-aos="fade-up"  className=" text-textGray  max-w-xl text-md">
            {`I build amazing digital experiences as a software engineer, and sometimes I design too. Right now, I'm focused on creating user-friendly products at `}
            <a className="text-textBlue" href="www.fotonvr.com">
              fotonVR.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
