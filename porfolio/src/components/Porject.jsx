import React from "react";
import gym from "../assets/portfolio/gym.png";
import Onlineshoppingcart from "../assets/portfolio/Online-shopping-cart.png";
import url from "../assets/portfolio/url.jpeg";
// import reactParallax from "../assets/portfolio/reactParallax.jpg";
// import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
// import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Porject = () => {
  const portfolios = [
    {
      id: 1,
      src: gym,
      href:"https://github.com/FARINE-KHAN/Gym-Replica.git"
    },
    {
      id: 2,
      src: url,
      href:"https://github.com/FARINE-KHAN/Project-URL-Shortener.git"
    },
    {
      id: 3,
      src: Onlineshoppingcart,
      href:"https://github.com/FARINE-KHAN/Product-Management.git"
    },
  
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pt-[15rem] sm:pt-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                 <a href={href} > Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porject;
               