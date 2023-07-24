import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  //menubar handler
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* logo */}
      <img src={logo} alt="HooBank" className="w-[124px] h-[32px]" />
      {/* Nav Links */}
      <ul className="list-none sm:flex hidden justify-end items-center">
        {navLinks.map((link, index) => {
          return (
            <li
              key={link.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      {/* Nav links for small devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="Menu bar"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          {/* Nav Links */}
          <ul className="list-none justify-end items-center">
            {navLinks.map((link, index) => {
              return (
                <li
                  key={link.id}
                  className={`font-poppins  cursor-pointer text-[16px] text-white flex flex-col flex-1 ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-2"
                  }
                  }`}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
