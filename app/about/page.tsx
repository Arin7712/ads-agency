import AboutGallery from "@/components/about-gallery";
import AgencySnapShot from "@/components/agency-snapshot";
import Navbar from "@/components/Navbar3";
import React from "react";

const page = () => {
  return (
    <div className="grain flex flex-col justify-between lg:py-10 md:py-[2rem] py-[4rem] lg:px-[6rem] px-6 bg-neutral-900 text-[#f9cdcd]">
      <Navbar />
      <div className="md:mt-[8rem] mt-[4rem] flex flex-col">
        <h1 className="lg:text-[6rem] md:text-5xl text-4xl uppercase font-extrabold lg:w-[50%] leading-none">
          We turn cultural value
        </h1>
        <div className="flex lg:justify-end lg:items-end flex-col gap-6 ">
          <h1 className="lg:text-[5.8rem] md:text-5xl text-4xl uppercase font-extrabold leading-none lg:w-[50%]">
            ● into company value{" "}
          </h1>
          <p className="lg:w-[50%] lg:text-4xl font-medium leading-none">
            <span className="font-bold">BASIC/DEPT®</span> is a global agency
            that thrives at the intersection of design, data, and technology.
            Together, we’re focused on transforming brands and culture — across
            the world.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 lg:mt-[4rem] md:mt-[5rem] mt-[3rem] ">
        <h1 className="font-bold">B/D</h1>
        <div className="border-t-[1px] border-[#f9cdcd] w-full pt-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex w-[35%] justify-between">
              <p>2010 -</p>
              <p className="">PRESENT</p>
            </div>
            <p className="w-2 h-2 bg-[#f9cdcd] rounded-full"></p>
          </div>
        </div>
      </div>
{/* <h1>Dept</h1> */}
      <AboutGallery/>
      <div className="border-t-[1px] border-[#f9cdcd] py-4 w-full">
        <h1 className="lg:text-[10rem] text-[3rem] font-extrabold leading-none">BASIC/DEPT®</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div className="border-t-[1px] border-[#f9cdcd] w-full pt-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex w-[35%] justify-between">
              <p>SEC.</p>
              <p className="">/A</p>
            </div>
            <p className="w-2 h-2 bg-[#f9cdcd] rounded-full"></p>
          </div>
        </div>
      </div>
      <AgencySnapShot/>
      <div className="flex flex-col gap-2 lg:mt-[4rem] md:mt-[5rem] mt-[3rem] ">
        <div className="border-t-[1px] border-[#f9cdcd] w-full pt-2">
          <div className="flex items-center justify-between text-xs">
            <div className="flex w-[35%] justify-between">
              <p>SEC.</p>
              <p className="">/B</p>
            </div>
            <p className="w-2 h-2 bg-[#f9cdcd] rounded-full"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;


