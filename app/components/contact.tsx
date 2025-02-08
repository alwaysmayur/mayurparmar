import { useEffect } from "react";
import AOS from "aos";
export default function Contact() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  
  return (
    <div className="container" id="contact">
      <div className=" flex justify-start w-full ">
        <div className="py-14 px-5 flex  h-full  justify-center content-center items-center flex-col w-full">
          <div
            data-aos="fade-up"
            className=" justify-center content-center items-center flex  text-xl "
          >
            <span className="font-code font-thin text-textBlue">04.</span>
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
