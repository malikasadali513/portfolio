import React from "react";
import {AboutProps} from "../helpers/data"
// import { AboutProps } from "./apis/About.data";
const About = () => {
  AboutProps.title="Tell Me About"
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grip-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600">
              {
                AboutProps.title
              }
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>{AboutProps.subTitle}</p>
          </div>
          <div>
            <p>
              {
                AboutProps.description
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
