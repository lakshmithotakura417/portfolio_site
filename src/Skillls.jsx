import React from "react";
import "./style.css";
import SkillComponent from "./SkillComponent";
import {
  frontendData,
  backendData,
  programmingData,
  techToolData,
} from "./Data/data";
const Skills = () => {
  return (
    <div className="w-full py-[60px] px-[15px]">
      <h1 className="text-center text-3xl text-white font-semibold font-serif">
        Technical Skills
      </h1>
      <div className="max-w-[1170px] mx-auto md:py-[40px] py-[10px]">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-[40px]">
          <div>
            <h1 className="hover:underline text-center capitalize text-xl py-[25px] text-white font-semibold">
              frontend
            </h1>
            <SkillComponent data={frontendData} />
          </div>
          <div>
            <h1 className="hover:underline text-center capitalize text-xl py-[25px] text-white font-semibold">
              backend
            </h1>
            <SkillComponent data={backendData} />
          </div>
          <div>
            <h1 className="hover:underline text-center capitalize text-xl py-[25px] text-white font-semibold">
              programming
            </h1>
            <SkillComponent data={programmingData} />
          </div>
          <div>
            <h1 className="hover:underline text-center capitalize text-xl py-[25px] text-white font-semibold">
              techtool data
            </h1>
            <SkillComponent data={techToolData} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
