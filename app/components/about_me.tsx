import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import { technologies, aboutMe } from "@/public/data";

export default function AboutMe() {
  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <div className="container" id="about">
      <div className="flex justify-start w-full">
        <div className="py-14 px-5 flex justify-start h-full flex-col w-full">
          <div
            data-aos="fade-up"
            className="heading justify-start content-center items-center flex text-3xl"
          >
            <span className="font-mono font-thin text-textBlue">01.</span>
            <h2 className="mx-3 font-semibold font-noto text-headGray">
              About Me
            </h2>
            <div className="border rounded-lg border-textGray w-[20%]"></div>
          </div>
          <div className="body mt-10 block lg:flex justify-between">
            <div className="w-full lg:w-[65%] text-textGray text-md">
              {aboutMe.map((data) => (
                <>
                  <p data-aos="fade-up">{data}</p>
                  <br />
                </>
              ))}

              <p data-aos="fade-up"></p>
              <br />
              <p data-aos="fade-up">
                Here are a few technologies I’ve been working with recently:
              </p>
              <br />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 font-code pl-5">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    data-aos="fade-up"
                    className="flex items-center space-x-2"
                  >
                    <span className="text-textBlue text-lg line-height-8">
                      ▹
                    </span>
                    <span>{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full lg:w-[35%] mx-auto lg:mx-5 py-14 lg:py-0 flex flex-col content-center items-center">
              <div data-aos="flip-right" className="relative group">
                <Image
                  src="/media/images/mayur.jpg"
                  className="rounded-md relative z-10 transition-transform duration-300 transform-gpu group-hover:-translate-x-1 group-hover:-translate-y-1 filter grayscale group-hover:filter-none"
                  width={300}
                  height={300}
                  alt="my profile"
                />
                <div className="absolute inset-0 z-0 border-2 border-solid top-3 left-3 h-full w-full border-textBlue rounded-md transition-transform duration-300 transform-gpu group-hover:translate-x-1 group-hover:translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
