import React from "react";
import "./style.css";
import Icons from "./Icons";
import homepage from "./assets/homepage.avif";
const Home = () => {
  return (
    <div className="w-full md:py-[20px] py-[10px]">
      <div className="max-w-[1170px] mx-auto py-[50px] px-[15px] text-blue-50 flex flex-col md:flex-row gap-[20px]">
        <div className="basis-[50%]">
          <h3 className="md:text-4xl text-3xl font-semibold font-sarif capitalize">
            hi! my name is
          </h3>
          <h1 className="md:text-9xl  text-4xl font-bold font-sarif py-3 capitalize">
            Lakshmi
          </h1>
          <p className="md:text-xl text-[16px] font-semibold leading-6 md:leading-8 capitalize">
            i am a full stack webdeveloper.
            <br /> i create exciting stuff on the Internet.
          </p>
          <div className="flex gap-[30px] md:py-12 py-6 text-4xl items-center">
            <Icons />
          </div>
        </div>
        <div className="basis-[50%] h-full">
          <img
            src={homepage}
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
