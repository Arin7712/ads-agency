import Navbar from "@/components/Navbar2";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="grain flex flex-col justify-between md:py-10 py-[4rem] md:px-[6rem] px-6">
      <Navbar />
      <div className="md:mt-[10rem] mt-[4rem]">
        <h1 className="md:text-[6rem] text-4xl uppercase font-bold md:w-[50%] w-[70%] leading-none">
          Easy to understand. ● Impossible to ignore.
        </h1>
        <Tabs defaultValue="account" className="w-full md:pt-[10rem] pt-[4rem]">
          <TabsList className="bg-none flex md:flex-row flex-col justify-between md:items-center md:gap-0 gap-[6rem] w-full">
            <div className="uppercase space-x-6">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            </div>
            <div className="md:w-[30%] w-[60%] text-black font-medium md:order-1 order-[-1]"><p>
            The work we create lives at the intersection of clarity and surprise and positions brands in culture through shared values and ideals.
            </p></div>
          </TabsList>
          <div className="md:mt-6 mt-[12rem] relative pt-6 border-t-[1px] border-t-zinc-800">
          <TabsContent value="account" className="w-full">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default page;
