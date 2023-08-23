import React from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "./NavbarData";
import AtlanticLogo from "../../assets/AtlanticLogo.png";
import { BiEnvelope } from "react-icons/bi";

const Navbar = () => {
  return (
    <main className="flex items-center justify-between px-[150px] mt-[15px] sticky top-0">
      <div className="web-logo">
        <img className="logo" src={AtlanticLogo} alt="web Logo" />
      </div>
      <nav className="flex items-center">
        <ul className="flex flex-row gap-[20px] items-center justify-between list-none">
          {NavbarData.map((item, index) => {
            return (
              <li key={index} className="{item.className} list-none">
                <Link to={item.path} className="text-slate-800 flex">
                  <span className="flex hover:border-b-2 transition border-b-blue-700 text-slate-800 hover:text-blue-800">{item.title}</span>
                  <span>{item.icon}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex bg-blue-800 rounded-sm w-[100px] justify-center items-center text-white">
        <Link to="/contact" className="px-[8px] py-1">
          Contact
        </Link>
        <BiEnvelope  />
      </div>
    </main>
  );
};

export default Navbar;
