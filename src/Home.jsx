import React from "react";
import "./style.css";
import Icons from "./Icons";
const Home = () => {
  return (
    <div className="w-full md:py-[20px] py-[10px]">
      <div className="max-w-[1170px] mx-auto py-[50px] px-[15px] text-blue-50 flex flex-col md:flex-row gap-[20px]">
        <div className="basis-[50%]">
          <h3 className="md:text-4xl text-3xl font-semibold font-sarif capitalize">
            hi! my name is
          </h3>
          <h1 className="md:text-9xl  text-4xl font-bold font-sarif py-3 capitalize">
            Srikanth
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
            src="https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
