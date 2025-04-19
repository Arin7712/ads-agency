"use client"
import Awards from "@/components/Awards";
import BallCursor from "@/components/BallCursor";
import Featured from "@/components/Featured";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Work from "@/components/Work";
import Image from "next/image";
import {useState} from 'react'

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="relative">
    {!showContent && <Preloader onComplete={() => setShowContent(true)} />}

    <div
      className={`transition-opacity duration-1000 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Your Main Website Content */}
    <div className="bg-[#f1f1f1] grain">
      <Hero/>
      <Awards/>
      <Work/>
      <Featured/>
    </div>
    </div>
    </div>
  );
}
