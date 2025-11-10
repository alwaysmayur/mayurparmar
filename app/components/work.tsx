import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
import Link from "next/link";
import { workData } from "@/public/data";

export default function Work({ }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container mx-auto py-14" id="work">
      <div
        data-aos="fade-up"
        className="heading justify-start content-center items-center flex text-3xl "
      >
        <span className="font-mono font-thin text-textBlue">03.</span>
        <h2 className="mx-3 font-semibold font-noto text-headGray">
          Work
        </h2>
        <div className="border rounded-lg border-textGray w-[20%]"></div>
      </div>
      {workData.map((item, index) => (
        <div
          key={index}
          className="py-14 px-5 flex justify-start w-full"
          data-aos={index % 2 === 0 ? "fade-left" : "fade-up"}
        >
          <div className="flex w-full gap-10 flex-col lg:flex-row">
            {/* Left Section: Image */}
            <div className={`xl:flex hidden flex-1 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
              <Link href={item.link} target="_blank">
                <Image
                  src={item.imageUrl}
                  className="rounded-md cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105 hover:grayscale-0 grayscale w-full"
                  width={600}
                  height={300}
                  alt={item.title}
                />
              </Link>
            </div>

            {/* Right Section: Text */}
            <div className={`flex-1 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
              <div className={`xl:hidden flex mb-5 flex-1 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.imageUrl}
                    className="rounded-md cursor-pointer transition-transform duration-300 transform-gpu hover:scale-105 hover:grayscale-0 grayscale w-full"
                    width={600}
                    height={300}
                    alt={item.title}
                  />
                </Link>
              </div>
              <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                <Link href={item.link} target="_blank"><p className="text-lg hover:text-textBlue text-gray-400">Featured Project</p></Link>
                <h1 className="text-2xl md:text-3xl font-bold text-white">{item.title}</h1>
              </div>
              <p className="mt-5 p-4 rounded-md bg-[#112240] text-white hover:shadow-2xl">
                {item.description}
              </p>
              <ul
                className={`flex flex-wrap py-3 gap-x-2 gap-y-1 sm:gap-x-3 md:gap-x-4 ${index % 2 === 0 ? "justify-end" : "justify-start"} sm:${index % 2 === 0 ? "justify-end" : "justify-start"} xs:justify-center`}
              >
                {item.technologies.map((tech, i) => (
                  <li
                    key={i}
                    className="text-md cursor-pointer hover:text-textBlue text-gray-400 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-textBlue after:transition-all after:duration-300 hover:after:w-full flex items-center px-2 first:border-none border-l border-gray-500"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
