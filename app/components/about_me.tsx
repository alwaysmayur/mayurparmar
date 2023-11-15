import {useEffect} from "react";
import AOS from 'aos';
import Image from "next/image";
export default function AboutMe() {
  useEffect(() => {
    AOS.refresh(); 
  }, []);
  return (
    <div className="container" id="about">
      <div className=" flex justify-start w-full ">
        {/* <div className="pt-12 line ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="my-3 w-8 h-8 text-textBlue"
          >
            <path
              fillRule="evenodd"
              d="M4.5 3.75a3 3 0 00-3 3v10.5a3 3 0 003 3h15a3 3 0 003-3V6.75a3 3 0 00-3-3h-15zm4.125 3a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zm-3.873 8.703a4.126 4.126 0 017.746 0 .75.75 0 01-.351.92 7.47 7.47 0 01-3.522.877 7.47 7.47 0 01-3.522-.877.75.75 0 01-.351-.92zM15 8.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15zM14.25 12a.75.75 0 01.75-.75h3.75a.75.75 0 010 1.5H15a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3.75a.75.75 0 000-1.5H15z"
              clipRule="evenodd"
            />
          </svg>

          <div className="line mr-5">
            <div className="bg-gradient-to-t from-indigo-500 via-sky-500 to-green-800 rounded-lg  w-[3px] h-full mx-auto"></div>
          </div>
          <div className="bg-gradient-to-t from-indigo-500 via-sky-500 to-green-800 rounded-lg  w-[3px] h-full mx-auto"></div>
        </div> */}

        <div className="py-14 px-5 flex justify-start h-full flex-col w-full">
          <div  data-aos="fade-up"  className="heading justify-start content-center items-center flex text-3xl ">
            <span className="font-mono font-thin text-textBlue">01.</span>
            <h2 className="mx-3 font-semibold font-noto text-headGray ">
              About Me
            </h2>
            <div className="border rounded-lg border-textGray   w-[20%]"></div>
          </div>
          <div className="body mt-10 block lg:flex justify-between">
            <div className="w-full lg:w-[65%] text-textGray  text-md">
              <p data-aos="fade-up"  >
                Hello! My name is Mayur Parmar, and I love the process of
                making digital art come to life. My journey into the world of
                web building began in the final semester of my diploma in
                computer engineering. While working on a library management
                project, a spark appeared that revealed my passion for creating
                streamlined, user-centered digital solutions.
              </p>
              <br />
              <p data-aos="fade-up"  >
                Fast-forward to the today. I work at FotonVR as a full-stack
                developer, contributing my abilities to the creation of complete
                solutions over the whole development stack. Working with
                cross-functional teams, putting new features into practice, and
                making sure front-end and back-end technologies are seamlessly
                integrated are all part of my job description.
              </p>
              <br />
              <p data-aos="fade-up"  >
                In order to provide cutting-edge solutions that satisfy the
                needs of our clients and users, I am committed to keeping up
                with the most recent developments in the industry and
                technology. I do this by continuously improving my skills.
              </p>
              <br />
              <p data-aos="fade-up"  >
                Here are a few technologies I’ve been working with recently:
              </p>
              <br />
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 font-code pl-5">
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>JavaScript</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>TypeScript</span>
                </div>

                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>React</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>Node.js</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>Next.js</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>MongoDB</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>Angular.js</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>Electron.js</span>
                </div>
                <div data-aos="fade-up"  className="flex items-center space-x-2">
                  <span className="text-textBlue text-lg line-height-8">▹</span>
                  <span>Three.js</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[35%] mx-auto lg:mx-5 py-14 lg:py-0 flex flex-col content-center items-center">
              <div data-aos="flip-right" className="relative group">
                <Image
                  src="/media/images/profile-pic-(7).png"
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
