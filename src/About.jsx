import React from "react";
import "./style.css";
import employee from "./assets/employee.jpg";
const About = () => {
  return (
    <div className="w-full py-[30px]">
      <div className="max-w-[1170px] mx-auto flex md:flex-row flex-col py-[50px] px-[15px] gap-[30px] items-center">
        <div className="basis-[40%] h-full md:border-r-1 md:border-r-blue-500 md:pr-[10px] pr-0">
          <div className="w-[100%] md:h-[460px]">
            <img
              src={employee}
              alt=""
              className="w-full h-full object-cover object-center rounded hover:scale-110 duration-100 "
            />
          </div>
        </div>
        <div className="basis-[60%] text-[18px] text-blue-50">
          <h5 className="text-3xl font-semibold py-6">Hey there !</h5>
          <p>
            {/* I'm Lakshmi, a full stack web developer with a strong passion for
            crafting digital realms that captivate and inspire. */}
            I’m Lakshmi, a frontend web developer with a strong passion for
            building engaging and user-friendly digital experiences.
          </p>
          <p className="py-7">
            {/* I specialize in creating dynamic and interactive UI/UX experience. I
            stay up to date with the latest tools and techniques and worked on a
            wide range of projects, from personal websites to large-scale
            applications, sharpening my problem solving skills and fostering
            creativity. */}
            I specialize in creating responsive and interactive UI using modern
            technologies like HTML, CSS, JavaScript, and React. I stay up to
            date with the latest frontend trends and have worked on a variety of
            projects, from simple interfaces to dynamic web applications,
            improving my problem-solving skills and attention to detail.
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
