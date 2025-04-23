import Link from 'next/link'
import React from 'react'
import AgencySnapShot from './agency-snapshot'

const About = ({isAboutVisible} : {isAboutVisible: Boolean}) => {
  return (
    <div className="relative flex flex-col justify-between md:py-10 py-[4rem] lg:px-[6rem] px-6">
      <div className="flex md:flex-row flex-col w-full justify-between md:gap-0 gap-[3rem]">
        <div className="md:max-w-[40%] flex flex-col md:gap-[4rem] gap-[2rem]">
          <div className="flex flex-col md:gap-4 gap-[2rem]">
            <h1 className="lg:text-[5.7rem] md:text-[3rem] text-4xl tracking-tighter font-bold uppercase leading-none">
              Vision.CO® helps brands ● connect w/ culture
            </h1>
            <p className="uppercase">
              Adweek <span className="font-bold">Agency Spotlight</span>
            </p>
          </div>
          <Link href='/about'>
          <div className={`rounded-full border-[1px] font-semibold ${isAboutVisible ? 'border-background' : 'border-zinc-800'} px-8 py-2 w-fit uppercase text-xs`}>
            About us
          </div>
          </Link>
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
