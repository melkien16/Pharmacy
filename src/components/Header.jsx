import React from "react";
import NavLists from "./NavLists";

const Header = () => {
  return (
    <div className="flex justify-between items-center align-middle p-2 px-20 bg-secondary">
      <h1 className="font-bold text-4xl border-2 p-3 py-1 rounded-full">P</h1>
      <ul className="flex justify-around space-x-10">
        {NavLists.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
