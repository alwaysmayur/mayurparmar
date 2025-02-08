import { useEffect } from "react";
import AOS from "aos";
import { experienceData } from "@/public/data";

export default function Experience({  }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="container" id="experience">
      <div className="flex justify-start w-full">
        <div className="py-16 mb-20 px-5 flex justify-start h-full flex-col w-full">
          <div
            data-aos="fade-up"
            className="heading justify-start content-center items-center flex text-3xl "
          >
            <span className="font-mono font-thin text-textBlue">02.</span>
            <h2 className="mx-3 font-semibold font-noto text-headGray">
              Experience
            </h2>
            <div className="border rounded-lg border-textGray w-[20%]"></div>
          </div>

          {/* Map over the experience data */}
          {experienceData.map((job, index) => (
            <div key={index} className="mt-10 lg:w-4/5 block text-textGray text-md justify-between">
              <div className="heading pb-5">
                <h3
                  data-aos="fade-up"
                  className="font-semibold text-headGray text-xl"
                >
                  {job.title}
                  <a
                    className="text-textBlue"
                    href={job.companyUrl}
                    target="_blank"
                  >
                    {`  @ ${job.companyName}`}
                  </a>
                </h3>
                <span data-aos="fade-up" className="font-code">
                  {job.duration}
                </span>
              </div>

              {/* Map over the projects */}
              {job.projects.map((project, projectIndex) => (
                <div key={projectIndex} className="comp-1">
                  <h3
                    data-aos="fade-up"
                    className="font-semibold pb-5 text-textGray text-lg"
                  >
                    {project.name}
                  </h3>
                  {project.details.map((detail, detailIndex) => (
                    <div key={detailIndex} data-aos="fade-up" className="flex items-start pb-5">
                      <span className="text-textBlue text-lg line-height-8 mr-5">▹</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
