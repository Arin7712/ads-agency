"use client";

import React, { useEffect, useState } from "react";
import { navItems } from "@/constants";
import { Ellipsis } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? 
        "bg-black text-white" // scrolled + about not visible
        : "bg-black text-white" // scrolled + about visible
      } flex items-center justify-between md:py-10 py-6 lg:px-[6rem] px-6`}
    >
      <Link href='/'>
      
      <div className="text-2xl font-bold uppercase">VISION®</div>
      </Link>

      {/* Center nav items */}
      <div className="absolute left-1/2 transform -translate-x-1/2 lg:block hidden">
        <ul className="flex items-center gap-x-[4rem]">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
            <li
              className="relative cursor-pointer overflow-hidden group hover:underline"
            >
              {item.name}
              <span
                className={`absolute left-0 bottom-0 h-[1px] w-0 ${
                  isScrolled
                    ? 
                      "bg-black" // underline black otherwise
                    : "bg-black" // underline white when at top
                } transition-all duration-500 group-hover:w-full origin-left`}
              ></span>
            </li>
            </Link>
          ))}
        </ul>
      </div>

      <div className="lg:block hidden transition-all hover:scale-[1.2] hover:cursor-pointer duration-300">
        <Ellipsis />
      </div>
      <div className="uppercase lg:hidden block">
        <Sheet>
          <SheetTrigger className="uppercase">Menu</SheetTrigger>
          <SheetContent className="w-full bg-black text-white">
            <SheetHeader>
              <SheetTitle className="text-white uppercase text-2xl font-bold">Basic/Dept</SheetTitle>
            </SheetHeader>
            <div className="pt-[6rem] pl-6">
            <ul className="flex flex-col gap-6">
            {
                  navItems.map((item, index) => (
                    <Link key={index} href={item.href}>
                    <li className="uppercase font-semibold text-xl">{item.name}</li>
                    </Link>
                  ))
                }
              </ul>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
