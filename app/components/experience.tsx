import { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
export default function Experience() {
  useEffect(() => {
    AOS.refresh();
  }, []);
  return (
    <div className="container" id="experience">
      <div className="flex justify-start w-full">
        {/* <div className="py-12 line">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="my-4 w-8 h-8 text-textBlue"
          >
            <path
              fillRule="evenodd"
              d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clipRule="evenodd"
            />
            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
          </svg>

          <div className="bg-gradient-to-t from-[#940B92] via-sky-500 to-[#190482] rounded-lg  w-[3px] h-full mx-auto"></div>
        </div> */}

        <div className="py-16 mb-20 px-5 flex justify-start h-full flex-col w-full">
          <div
            data-aos="fade-up"
            className="heading justify-start content-center items-center flex text-3xl "
          >
            <span className="font-mono font-thin text-textBlue">02.</span>
            <h2 className="mx-3 font-semibold font-noto text-headGray ">
              Experience
            </h2>
            <div className="border rounded-lg border-textGray  w-[20%]"></div>
          </div>
          <div className=" mt-10 lg:w-4/5 block text-textGray  text-md justify-between">
            <div className="heading pb-5">
              <h3
                data-aos="fade-up"
                className="font-semibold  text-headGray text-xl"
              >
                Fullstack Developer
                <a
                  className="text-textBlue"
                  href="https://www.fotonvr.com/"
                  target="_blank"
                >
                  {`  @ fotonVR`}
                </a>
              </h3>
              <span data-aos="fade-up" className="font-code">
                May 2023 - Present
              </span>
            </div>

            <div className="comp-1">
              <h3
                data-aos="fade-up"
                className="font-semibold  pb-5 text-textGray text-lg"
              >
                fotonVR website
              </h3>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Spearheaded the development of the fotonVR &apos s portfolio
                  website, utilizing the MERN stack with a special emphasis on
                  Next.js for seamless client-side rendering.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Designed and implemented a responsive and user-friendly
                  interface, ensuring a positive user experience across various
                  devices.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Integrated dynamic content through MongoDB to provide
                  real-time updates on the website, showcasing the company &apos
                  s projects, achievements, and values.
                </span>
              </div>
            </div>
            <div className="comp-1">
              <h3
                data-aos="fade-up"
                className="font-semibold pb-5  text-textGray text-lg"
              >
                Task Management Module
              </h3>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Led the frontend development of a robust Task Management
                  Module for fotonVR employees, focusing on enhancing the user
                  experience and visual interface.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Collaborated closely with backend developers to integrate
                  frontend components seamlessly with RESTful APIs for dynamic
                  task data retrieval and updates.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Designed and implemented an intuitive and responsive user
                  interface using React.js, ensuring accessibility and ease of
                  use for all team members.
                </span>
              </div>
            </div>
          </div>
          <div className=" mt-10 lg:w-4/5  block text-textGray text-md justify-between">
            <div className="heading pb-5">
              <h3
                data-aos="fade-up"
                className="font-semibold  text-headGray text-xl"
              >
                Junior Developer
                <a
                  className="text-textBlue"
                  href="https://www.squadtechnologies.com/"
                  target="_blank"
                >
                  {`   @ Squad Technologies`}
                </a>
              </h3>
              <span data-aos="fade-up" className="font-code">
                Fab 2022 - May 2023
              </span>
            </div>
            <div className="comp-1">
              <h3
                data-aos="fade-up"
                className="font-semibold pb-5  text-textGray text-lg"
              >
                Hubspot API Integration
              </h3>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Successfully integrated HubSpot APIs to enhance CRM
                  functionalities and streamline business processes.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Implemented data synchronization between HubSpot CRM and other
                  systems, ensuring real-time and accurate information across
                  platforms.
                </span>
              </div>
              <div data-aos="fade-up" className="flex items-start pb-5 ">
                <span className="text-textBlue text-lg line-height-8 mr-5">
                  ▹
                </span>
                <span>
                  Troubleshooted and resolved API-related issues promptly,
                  ensuring minimal disruption to business operations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
