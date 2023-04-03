import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grip-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Asad, nice to meet you. please take a look around. </p>
          </div>
          <div>
            <p>
              As a React JS developer, i specialize in creating dynamic and
              responsive user interfaces using the React JavaScript library. I
              have an in-depth understanding of the virtual DOM and
              component-based architecture, which enables you to create modular
              and reusable code. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
