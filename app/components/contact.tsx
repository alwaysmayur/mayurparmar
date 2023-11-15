import { useEffect } from "react";
import AOS from "aos";
export default function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="container" id="contact">
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

        <div className="py-14 px-5 flex  h-full  justify-center content-center items-center flex-col w-full">
          <div
            data-aos="fade-up"
            className=" justify-center content-center items-center flex  text-xl "
          >
            <span className="font-code font-thin text-textBlue">03.</span>
            <h2 className="mx-3  font-code text-textBlue ">What’s Next?</h2>
          </div>
          <h1
            data-aos="fade-up"
            className="font-semibold my-5 text-headGray font-noto text-4xl md:text-6xl"
          >
            Get In Touch
          </h1>
          <span
            data-aos="fade-up"
            className="text-textGray text-center max-w-xl text-md"
          >
            Although I am currently exploring new opportunities, my inbox is
            always open. Whether you have a question or simply want to say
            hello, I’ll try my best to get back to you!
          </span>
          <a
            data-aos="fade-up"
            className="py-2 px-5 border-2 mt-5 border-textBlue font-code text-textBlue rounded-lg"
            href="mailto:mayurparmar.ce@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
}
