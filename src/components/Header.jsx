import React from "react";
import { NavLists } from "./NavLists";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-blue-900 text-white fixed top-0 w-full z-10 shadow-lg">
      <div className="font-bold text-2xl">PharmaFinder</div>
      <nav>
        <ul className="hidden md:flex space-x-6">
          {NavLists.map((item) => (
            <NavLink
              key={item.id}
              to={item.link}
              className="hover:text-blue-300"
            >
              {item.title}
            </NavLink>
          ))}
        </ul>

        <div className="md:hidden">
          <button className="text-white">☰</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
