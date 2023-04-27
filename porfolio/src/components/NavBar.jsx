import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import  {Link} from "react-scroll"

const links = [
  {
    id: 1,
    link: "home",
  },
  {
    id: 2,
    link: "about",
  },
  {
    id: 3,
    link: "projects",
  },
  {
    id: 4,
    link: "experience",
  },
  {
    id: 5,
    link: "contact",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2 taglogo">Farine</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map((link) => (
          <li
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            key={link.id}
          >
            <Link to={link.link} smooth duration={500}>
              {link.link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        className="cursor-pointer px-4 z-10 text-gray-500 md:hidden"
        onClick={() => {
          setNav(!nav);
        }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map((link) => (
            <li
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={link.id}
            >
               <Link
                onClick={() => setNav(!nav)}
                to={link.link}
                smooth
                duration={500}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
