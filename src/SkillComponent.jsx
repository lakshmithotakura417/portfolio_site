import React from "react";

const SkillComponent = ({ data }) => {
  return (
    <div className="grid grid-cols-4 md:grid-cols-5 gap-3 ">
      {data.map((eachItem, index) => {
        const { name, img } = eachItem;
        return (
          <div className="shadow-lg hover:scale-75 duration-100 md:w-[100px] md:h-[100px] w-[70px] h-[70px] bg-[rgba(0,0,0,0.7)] rounded-xl text-white flex flex-col items-center justify-center gap-2">
            <img src={img} alt="" className="w-[38px] h-[38px] " />
            <p className="text-[10px] md:text-[16px]">{name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillComponent;
