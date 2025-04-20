import React from 'react'

const About = ({isAboutVisible} : {isAboutVisible: Boolean}) => {
  return (
    <div className="relative flex flex-col justify-between md:py-10 py-[4rem] md:px-[6rem] px-6">
      <div className="flex md:flex-row flex-col w-full justify-between md:gap-0 gap-[6rem]">
        <div className="md:max-w-[40%] flex flex-col gap-[4rem]">
          <div className="flex flex-col gap-4">
            <h1 className="md:text-[6rem] text-[3rem] tracking-tighter font-bold uppercase leading-none">
              BASIC/DEPT® helps brands ● connect w/ culture
            </h1>
            <p className="uppercase">
              Adweek <span className="font-bold">Agency Spotlight</span>
            </p>
          </div>
          <div className={`rounded-full border-[1px] font-semibold ${isAboutVisible ? 'border-background' : 'border-zinc-800'} px-8 py-2 w-fit uppercase text-xs`}>
            About us
          </div>
        </div>

        <div className="md:w-[50%] flex items-center justify-center md:order-1 order-[-1]">
          <video
            src="/mock2.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
