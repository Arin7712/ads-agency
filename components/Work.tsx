"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { workItems } from "@/constants";

const Work = () => {
  return (
    <div className="relative flex flex-col justify-between md:py-10 py-6 md:px-[6rem] px-6">
      {/* Top Content */}
      <div className="flex md:flex-row flex-col justify-between items-start md:gap-0 gap-6">
        <div className="md:w-[46%] flex flex-col gap-6">
          <h2 className="md:text-4xl text-xl text-neutral-800 font-medium">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h2>
          <div className="rounded-full border-[1px] font-semibold border-neutral-800 px-8 py-2 w-fit uppercase text-xs">
            See the work
          </div>
        </div>

        <div className="md:absolute text-neutral-800 top-0 md:right-20 text-[6rem] md:text-[14rem] font-extrabold md:font-bold leading-none flex w-full justify-end">
          B/D®
        </div>
      </div>

      {/* Work Section */}
      <div className="w-full pt-[6rem]">
        {/* For Desktop (flex grid) */}
        <div className="hidden md:flex gap-6">
          {workItems.map((item, index) => (
            <div key={index} className="flex-1 uppercase flex flex-col gap-4">
              <Image
                src={item.img}
                alt="work"
                width={400}
                height={400}
                className="w-full h-auto object-cover"
              />
              <div className="flex flex-col gap-2 w-[70%]">
                <h1 className="text-lg font-bold">{item.name}</h1>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For Mobile (natural horizontal scroll) */}
        <div className="md:hidden block overflow-x-scroll no-scrollbar">
          <div className="flex gap-6 w-max">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col uppercase gap-4 min-w-[300px] max-w-[400px]"
              >
                <Image
                  src={item.img}
                  alt="work"
                  width={400}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                <div className="flex flex-col gap-2 w-[50%]">
                  <h1 className="text-lg font-bold">{item.name}</h1>
                  <p className="text-[10px] font-medium">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-neutral-800 w-full md:mt-[10rem] mt-[3rem] pt-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex w-[35%] justify-between">
          <p>0</p>
          <p className="">/05</p>
          </div>
          <p className="w-2 h-2 bg-neutral-800 rounded-full"></p>
        </div>
      </div>
    </div>
  );
};

export default Work;
