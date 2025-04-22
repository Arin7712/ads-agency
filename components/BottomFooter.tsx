'use client';
import { usePathname } from 'next/navigation';
import React from 'react'

const BottomFooter = () => {
    const pathname = usePathname();
    const isAboutPage = pathname === "/about";
  return (
    <div className={`py-2 ${isAboutPage ? 'bg-zinc-100 text-black' : 'bg-neutral-950 text-zinc-500'}  flex md:flex-row md:gap-0 gap-1 flex-col items-center justify-between  px-[6rem] text-xs`}>
    <h1>VISION®, Inc 10 - 25©</h1>
    <h1>Easy to understand, impossible to ignore.™</h1>
    <h1>Terms, Privacy Policy</h1>
  </div>
  )
}

export default BottomFooter
