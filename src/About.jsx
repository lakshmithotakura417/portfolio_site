import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="w-full py-[30px]">
      <div className="max-w-[1170px] mx-auto flex md:flex-row flex-col py-[50px] px-[15px] gap-[30px] items-center">
        <div className="basis-[40%] h-full md:border-r-1 md:border-r-blue-500 md:pr-[10px] pr-0">
          <div className="w-[100%] md:h-[460px]">
            <img
              src="https://i.pinimg.com/736x/6d/37/e0/6d37e0c2e34f320e60c99e32aa84fc7b.jpg"
              alt=""
              className="w-full h-full object-cover object-center rounded hover:scale-110 duration-100 "
            />
          </div>
        </div>
        <div className="basis-[60%] text-[18px] text-blue-50">
          <h5 className="text-3xl font-semibold py-6">Hey there !</h5>
          <p>
            I'm Srikanth, a full stack web developer with a strong passion for
            crafting digital realms that captivate and inspire.
          </p>
          <p className="py-7">
            I specialize in creating dynamic and interactive UI/UX experience. I
            stay up to date with the latest tools and techniques and worked on a
            wide range of projects, from personal websites to large-scale
            applications, sharpening my problem solving skills and fostering
            creativity.
          </p>
          <p>
            If you're seeking a dedicated and passionate web developer, I'm
            eager to collaborate with you. Let's bring your ideas to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
