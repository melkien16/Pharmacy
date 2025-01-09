import React from "react";
import NavLists from "./NavLists";

const Header = () => {
  return (
    <header className="flex justify-between items-center align-middle p-2 px-20 bg-secondary fixed w-full z-10 shadow-sm mb-96 h-16">
      <h1 className="font-bold text-4xl border-2 p-3 py-1 rounded-full bg-primary">P</h1>
      <ul className="flex justify-around space-x-10">
        {NavLists.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
