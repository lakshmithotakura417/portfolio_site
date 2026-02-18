import React from "react";
import { projectsData } from "./Data/data";
const Projects = () => {
  return (
    <div className="w-full py-[10px]">
      <div className="max-w-[1170px] mx-auto md:py-[30px]  py-[40px] px-[15px] md:px-0">
        <h1 className="text-4xl font-bold text-orange-200 text-center md:py-[30px] py-4">
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
          {projectsData.map((eachData, index) => {
            const { imgUrl, pName, gitUrl, pDescription, languages } = eachData;
            return (
              <div className=" bg-blue-950 rounded-xl p-0" key={index}>
                <div className="w-full h-[200px]">
                  <img
                    src={imgUrl}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h2 className=" text-2xl text-white py-2 font-semibold capitalize">
                      {pName}
                    </h2>
                    <a
                      target="_blank"
                      href={gitUrl}
                      className="rounded-full p-2 text-white bg-[#2E294E] hover:scale-125 hover:border-white duration-300 hover:border-1"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        fill="none"
                        height="24"
                        stroke="currentColor"
                        stroke-width="2"
                        xmlns="http://www.w3.org/2000/svg"
                        class="lucide lucide-external-link"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M15 3h6v6"></path>
                        <path d="M10 14 21 3"></path>
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      </svg>
                    </a>
                  </div>
                  <p className=" text-white font-semibold">{pDescription}</p>
                  <div className="flex gap-6 text-white py-2">
                    {languages.map((eachLanguage, index) => {
                      return (
                        <p
                          className="rounded  py-1 px-2 bg-blue-50 text-blue-950 capitalize"
                          key={index}
                        >
                          {eachLanguage}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Projects;
