import React from "react";
import { Button } from "./ui/button";

const Work = () => {
  return (
    <div className="relative flex flex-col justify-between md:py-10 py-6 md:px-[6rem] px-6">
      <div className="flex md:flex-row flex-col justify-between items-start">
        <div className="md:w-[50%] w-[85%] flex flex-col gap-6">
          <h2 className="md:text-4xl text-xl text-neutral-800 font-semibold">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h2>
          <div className="rounded-full border-[1px] border-neutral-800 px-6 py-2 w-fit">
            See work
          </div>
        </div>

        <div className="md:absolute top-0 md:right-20 text-[8rem] md:text-[16rem] font-bold leading-none flex w-full justify-end">
          B/D®
        </div>
      </div>
    </div>
  );
};

export default Work;
