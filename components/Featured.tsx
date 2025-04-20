'use client';

import { featuredItems } from "@/constants";
import Image from "next/image";
import React, { useRef, useState, useEffect } from "react";

const Featured = ({isAboutVisible} : {isAboutVisible: Boolean}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const scrollLeft = scrollContainer.scrollLeft;
      const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const progress = (scrollLeft / maxScrollLeft) * 100;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="relative flex flex-col pt-10 md:py-20 md:px-24 px-6 gap-20 md:gap-24">
      {/* Title */}
      <h1 className="md:text-5xl text-2xl font-bold max-w-[40%] uppercase">
        Featured Engagements
      </h1>

      {/* Scrollable Items */}
      <div className="overflow-x-scroll no-scrollbar w-full" ref={scrollRef}>
        <div className="flex gap-16 w-max">
          {featuredItems.map((item, index) => (
            <div key={index} className="flex flex-col justify-between md:w-96 w-64 md:h-80 h-60">
              <Image src={item.img} alt="logo" width={100} height={100} />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold whitespace-nowrap overflow-hidden text-ellipsis uppercase">
                  {item.name}
                </h2>
                <p className="md:text-md text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* OUTSIDE: Scroll Progress Bar */}
      <div className="w-full">
        <div className={`w-full h-[2px] ${isAboutVisible ? 'bg-[#433d3b]' : 'bg-neutral-300'} relative overflow-hidden`}>
          <div
            className={`h-full ${isAboutVisible ? 'bg-[#f9cdcd]' : 'bg-neutral-900'} transition-all duration-300 ease-out`}
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Featured;
