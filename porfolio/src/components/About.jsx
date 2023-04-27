import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-[15rem] sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About....
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a skilled Full Stack Web Developer with expertise in both
          front-end and back-end technologies. With One year of experience building
          responsive and interactive web applications using modern frameworks
          such as React , and expertise in back-end technologies with NodeJS , I
          am confident in my ability to solve complex problems and create
          high-quality software.
        </p>

        <br />

        <p className="text-xl">
          I am always eager to learn new technologies and techniques to improve
          my skills and stay up-to-date with the latest trends in the industry.
          If you are looking for a dedicated and skilled Full Stack Web
          Developer to build your next web application, feel free to contact me.
          I am always open to new opportunities and challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
