export default function HeroSection() {
  return (
    <div className="container">
      <div className="flex justify-start w-full ">
        {/* <div className="line mr-5 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 mb-3 text-textBlue"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-.53 14.03a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V8.25a.75.75 0 00-1.5 0v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3z"
              clipRule="evenodd"
            />
          </svg>

          <div className="bg-gradient-to-t from-indigo-500 via-sky-500 to-purple-800 rounded-lg  w-[3px] h-full mx-auto"></div>
        </div> */}

        <div className="mt-28 md:mt-14 pb-20  md:pb-0 mb-24 flex justify-start h-full flex-col w-full">
          <span className=" font-roboto font-normal line-height-8 text-textBlue text-xl">
            Hi, my name is
          </span>
          <h1 className="font-semibold mt-5  text-headGray font-noto text-4xl md:text-7xl">
            Mayur Parmar
          </h1>
          <h1 className="font-semibold mt-5 mb-10 font-noto text-4xl md:text-7xl text-textGray">
            Building Web Wonders
          </h1>
          <span className="text-textGray  max-w-xl text-md">
            {`I build amazing digital experiences as a software engineer, and sometimes I design too. Right now, I'm focused on creating user-friendly products at `}
            <a className="text-textBlue" href="http://">
              {" "}
              fotonVR.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
