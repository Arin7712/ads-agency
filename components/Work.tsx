"use client";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { workItems } from "@/constants";

const Work = () => {
  return (
    <div className="relative flex flex-col justify-between md:py-10 py-6 lg:px-[6rem] md:px-[2rem] px-6">
      {/* Top Content */}
      <div className="flex lg:flex-row flex-col justify-between items-start md:gap-0 gap-12">
        <div className="lg:w-[46%] md:w-[50%] flex flex-col gap-6">
          <h2 className="lg:text-4xl md:text-xl text-xl md:leading-none leading-6 text-neutral-800 font-medium">
          VISION® is a global advertising and email marketing agency building
            products, services, and digital experiences that turn cultural
            values into company value.
          </h2>
          <div className="rounded-full border-[1px] font-semibold border-neutral-800 px-8 py-2 w-fit uppercase text-xs">
            See the work
          </div>
        </div>

        <div className="lg:absolute text-neutral-950 top-0 md:right-20 text-[5.5rem] md:text-[8rem] lg:text-[14rem] font-extrabold md:font-bold leading-none flex w-full justify-end">
          V/A®
        </div>
      </div>

      {/* Work Section */}
      <div className="w-full lg:pt-[6rem] pt-6">
        {/* For Desktop (flex grid) */}
        <div className="hidden lg:flex gap-6">
          {workItems.map((item, index) => (
            <div key={index} className="flex-1 uppercase flex flex-col gap-4 group hover:cursor-pointer">
              <Image
                src={item.img}
                alt="work"
                width={400}
                height={400}
                className="w-full h-auto object-cover transform transition-transform group-hover:scale-[1.02]"
              />
              <div className="flex flex-col gap-2 w-[70%]">
                <h1 className="text-lg font-bold group-hover:underline">{item.name}</h1>
                <p className="text-sm font-medium">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* For Mobile (natural horizontal scroll) */}
        <div className="lg:hidden block overflow-x-scroll no-scrollbar">
          <div className="flex gap-6 w-max">
            {workItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col uppercase gap-4 w-[300px]"
              >
                <Image
                  src={item.img}
                  alt="work"
                  width={300}
                  height={300}
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

      <div className="border-t-[1px] border-neutral-800 w-full lg:mt-[10rem] md:mt-[5rem] mt-[3rem] pt-2">
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
