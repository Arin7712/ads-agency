"use client";

import React, { useEffect, useState } from "react";
import { navItems } from "@/constants";
import { Ellipsis } from "lucide-react";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY + 10) {
        setShowNavbar(false);
      }

      // if user scrolled more than 50px, change navbar bg
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"} flex items-center justify-between md:py-10 py-6 md:px-[6rem] px-6`}
    >
      <div className="text-2xl font-bold uppercase">BASIC/DEPT</div>

      {/* Center nav items */}
      <div className="absolute left-1/2 transform -translate-x-1/2 md:block hidden">
        <ul className="flex items-center gap-x-[4rem]">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="relative cursor-pointer overflow-hidden group"
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                  isScrolled ? "bg-black" : "bg-white"
                } transition-all duration-500 group-hover:w-full origin-left`}
              ></span>
            </li>
          ))}
        </ul>
      </div>

      <div className="md:block hidden transition-all hover:scale-[1.2] hover:cursor-pointer duration-300">
        <Ellipsis />
      </div>
      <div className="uppercase md:hidden block">Menu</div>
    </div>
  );
};

export default Navbar;
