import Navbar from "@/components/Navbar2";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { industryItems, serviceItems } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <div className="grain flex flex-col justify-between lg:py-10 md:py-[2rem] py-[4rem] lg:px-[6rem] px-6 bg-[#f1f1f1]">
      <Navbar />
      <div className="md:mt-[10rem] mt-[4rem] md:pb-[6rem]">
        <h1 className="lg:text-[6rem] md:text-5xl text-neutral-900 text-4xl uppercase font-extrabold md:w-[55%] leading-none">
          Easy to understand. ● Impossible to ignore.
        </h1>
        <Tabs defaultValue="account" className="w-full lg:pt-[10rem] pt-[4rem]">
          <TabsList className="bg-none flex lg:flex-row flex-col justify-between lg:items-center md:items-start lg:gap-0 gap-[6rem] w-full">
            <div className="uppercase space-x-6">
              <TabsTrigger value="account">Services</TabsTrigger>
              <TabsTrigger value="password">Industry</TabsTrigger>
            </div>
            <div className="lg:w-[30%] md:w-[60%] w-[80%] text-black font-medium lg:order-1 order-[-1]">
              <p>
                The work we create lives at the intersection of clarity and
                surprise and positions brands in culture through shared values
                and ideals.
              </p>
            </div>
          </TabsList>
          <div className="lg:mt-6 mt-[12rem] relative pt-6 border-t-[1px] border-t-zinc-800">
            <TabsContent value="account" className="w-full">
              <div className="flex flex-col w-full justify-between lg:gap-6 gap-6">
                {serviceItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex lg:flex-row flex-col justify-between lg:h-[40rem] ${
                      index > 0
                        ? "border-t-[1px] pt-6 border-t-zinc-900"
                        : "md:pb-[4rem]"
                    }`}
                  >
                    <div className="lg:w-[50%] lg:border-r-[1px] lg:border-r-zinc-800 flex flex-col justify-between h-full">
                      <div className="flex justify-between pr-4 font-medium">
                        <p className="">0{index + 1}</p> <p>/04</p>
                      </div>
                      <div className="flex flex-col justify-center flex-1 gap-6 lg:pt-0 pt-[4rem]">
                        {" "}
                        {/* Centered group */}
                        <h1 className="lg:text-4xl text-2xl font-extrabold uppercase w-[70%] leading-none">
                          {item.title}
                        </h1>
                        <p className="w-[80%] font-medium">
                          {item.description}
                        </p>
                        <div className="rounded-full border-[1px] font-semibold border-neutral-800 px-8 py-2 w-fit uppercase text-xs">
                          Learn more
                        </div>
                      </div>
                    </div>
                    <div className="md:flex hidden gap-6 lg:pl-4 lg:pt-0 pt-[4rem]">
                      {item.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex-1 uppercase flex flex-col gap-4 group hover:cursor-pointer"
                        >
                          <Image
                            src={item.img}
                            alt="work"
                            width={300}
                            height={300}
                            className="w-full h-auto object-cover"
                          />
                          <div className="flex flex-col gap-2 w-[70%]">
                            <h1 className="text-lg font-extrabold group-hover:underline">
                              {item.brand}
                            </h1>
                            <p className="lg:text-sm text-xs font-medium text-neutral-900">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="md:hidden block overflow-x-scroll no-scrollbar pt-[4rem]">
                      <div className="flex gap-6 w-max">
                        {item.items.map((item, index) => (
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
                              <h1 className="text-lg font-bold">
                                {item.brand}
                              </h1>
                              <p className="text-[10px] font-medium">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="password">
              <div className="flex flex-col w-full justify-between lg:gap-6 gap-6">
                {industryItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex lg:flex-row flex-col justify-between lg:h-[40rem] ${
                      index > 0 ? "border-t-[1px] pt-6 border-t-zinc-900" : ""
                    }`}
                  >
                    {/* Left side */}
                    <div className="lg:w-[50%] lg:border-r-[1px] lg:border-r-zinc-800 flex flex-col justify-between h-full">
                      <div className="flex justify-between pr-4 font-medium">
                        <p>0{index + 1}</p>
                        <p>/04</p>
                      </div>

                      <div className="flex flex-col justify-center flex-1 gap-6 lg:pt-0 pt-[4rem]">
                        <h1 className="lg:text-4xl text-2xl font-extrabold uppercase w-[70%] leading-none">
                          {item.title}
                        </h1>
                        <p className="w-[80%] font-medium">
                          {/* {item.description} */}
                        </p>
                        <div className="rounded-full border-[1px] font-semibold border-neutral-800 px-8 py-2 w-fit uppercase text-xs">
                          Learn more
                        </div>
                      </div>
                    </div>

                    {/* Right side for desktop */}
                    <div className="md:flex hidden w-full gap-6 lg:pl-4 lg:pt-0 pt-[4rem]">
                      {item.items.map((item, index) => (
                        <div
                          key={index}
                          className="flex-1 uppercase flex flex-col gap-4 group hover:cursor-pointer"
                        >
                          <Image
                            src={item.img}
                            alt="work"
                            width={300}
                            height={300}
                            className="w-full h-auto object-cover"
                          />
                          <div className="flex flex-col gap-2 w-[70%]">
                            <h1 className="text-lg font-extrabold group-hover:underline">
                              {item.brand}
                            </h1>
                            <p className="lg:text-sm text-xs font-medium text-neutral-900">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right side for mobile */}
                    <div className="md:hidden block overflow-x-scroll no-scrollbar pt-[4rem]">
                      <div className="flex gap-6 w-max">
                        {item.items.map((item, index) => (
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
                              <h1 className="text-lg font-bold">
                                {item.brand}
                              </h1>
                              <p className="text-[10px] font-medium">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
