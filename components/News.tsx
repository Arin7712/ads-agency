import { newsItems } from "@/constants";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const News = ({ isAboutVisible }: { isAboutVisible: Boolean }) => {
  return (
    <div className="relative flex flex-col justify-between md:py-[6rem] md:px-[6rem] px-6">
      <div className="flex justify-between items-center">
        <h1 className="md:text-5xl text-2xl font-bold uppercase">
          Featured <br />
          News
        </h1>
        <div>
          <div
            className={`rounded-full border-[1px] font-semibold ${
              isAboutVisible ? "border-background" : "border-zinc-800"
            } px-8 py-2 w-fit uppercase text-xs`}
          >
            View all
          </div>
        </div>
      </div>
      <div className="mt-6 border-t-[1px] border-t-zinc-900 p-0 flex flex-col gap-6">
            {
                newsItems.map((item, index) => (
                    <div className="pt-4 md:pb-10 pb-2 border-b-[1px] border-b-zinc-900 group hover:cursor-pointer">
                        <Image src={item.img} alt="logo" width={450} height={450} className="md:block hidden"/>
                        <Image src={item.img} alt="logo" width={500} height={500} className="md:hidden block"/>
                        <div className="md:w-[70%] flex md:flex-row flex-col justify-between md:pt-0 pt-6">
                        <h1 className="md:w-[80%] md:text-5xl text-xl group-hover:underline font-medium uppercase leading-none">{item.title}<br/><span className="text-sm md:block hidden leading-none">Press 4.16.25</span></h1>
                        <div className="md:hidden pt-10 flex justify-between items-center">
                        <p className="text-xs uppercase"><span className="font-semibold">Press</span> 4.16.25</p>
                        <p><ArrowRight className="size-6"/></p>
                        </div>
                        <p><ArrowRight className="size-8 md:block hidden"/></p>
                        </div>
                    </div>
                ))
            }
      </div>
    </div>
  );
};

export default News;
