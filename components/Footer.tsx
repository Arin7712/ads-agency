'use client';
import { usePathname } from 'next/navigation';
import { socials } from "@/constants";
import { ArrowRight } from "lucide-react";
import React from "react";

const Footer = () => {
      const pathname = usePathname();
      const isAboutPage = pathname === "/about";
  return (
    <div className={`relative flex flex-col justify-between md:py-[6rem] py-[4rem] lg:px-[6rem] px-6 ${isAboutPage ? 'bg-white text-black' : 'bg-neutral-900 text-white'} `}>
      <div className="flex lg:flex-row flex-col justify-between gap-[2rem]">
        <h1 className="text-3xl font-bold">VISION®</h1>
        <p className="md:text-3xl text-xl lg:w-[40%] w-[60%] font-semibold leading-none">
          We collaborate with ambitious brands and people. Let's build.
          <br />
          <span className="underline">vision@agency.com</span>
        </p>
      </div>
      <div className="pt-[6rem] flex lg:flex-row flex-col justify-between ">
        <div className="flex flex-col gap-6">
          <div className="uppercase flex items-center gap-4">
          <div className={`size-4 ${isAboutPage ? 'bg-black' : 'bg-white'}  rounded-full`}></div>
          Stay in the know
          </div>
          <div className="flex gap-4 items-center w-full">
            <div className="flex-1">
            <input
              placeholder="Email Address"
              className={`border-b-[1px] ${isAboutPage ? 'border-black' : 'border-white'} w-full`}
            />
            </div>
            <ArrowRight />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-[4rem] lg:pt-0 pt-10">
          <div>
            <div className="uppercase flex items-center gap-2">
              <div className={`size-4 ${isAboutPage ? 'bg-black' : 'bg-white'}  rounded-full`}></div>
              Social
            </div>
            <div className="pt-4">
              <ul className="">
                {socials.map((item, index) => (
                  <li className="hover:underline hover:cursor-pointer">
                    {" "}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="uppercase flex items-center gap-2">
            <div className={`size-4 ${isAboutPage ? 'bg-black' : 'bg-white'}  rounded-full`}></div>
            Social
            </div>
            <div className="pt-4">
              <ul className="">
                {socials.map((item, index) => (
                  <li className="hover:underline hover:cursor-pointer">
                    {" "}
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
