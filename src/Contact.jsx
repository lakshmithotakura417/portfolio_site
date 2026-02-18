import React from "react";
import ContactVector from "../src/assets/ContactVector_image.svg";
const Contact = () => {
  return (
    <div className="w-full px-[15px]">
      <div className="max-w-[1170px] mx-auto py-[60px]">
        <h1 className="text-center text-amber-200 font-bold text-4xl capitalize">
          lets collabrate
        </h1>
        <p className="capitalize text-center py-[15px] text-xl text-white font-semibold">
          Contact me to discuss your web development needs
          <br />
          or just say hello
        </p>
        <div className="flex md:flex-row flex-col gap-[20px] md:py-[50px] py-[10px]">
          <div className="basis-[55%] flex items-center justify-center">
            <div className="md:p-[10px] p-0 rounded-full border-2 border-dashed border-white flex items-center ">
              <div className="h-[330px] w-[330px] ">
                <img
                  src={ContactVector}
                  alt=""
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
          <div className="basis-[45%]">
            <div className="border-white bg-[rgba(0,0,0,0.7)] rounded-xl">
              <form
                action=""
                className="text-white flex flex-col p-[20px] gap-[10px]"
              >
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="bg-white p-1 border-1 border-gray-800 rounded text-gray-600"
                />
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="bg-white border-1 p-1 border-gray-800 rounded text-gray-600"
                />
                <label htmlFor="">Message</label>
                <textarea
                  name=""
                  id=""
                  rows="5"
                  cols="10s"
                  className="bg-white text-gray-600 rounded p-1 "
                  placeholder="enter message"
                ></textarea>
                <button className="text-left w-fit hover:bg-black hover:scale-105 border-gray-900 rounded text-white px-2 py-1 border-1">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
