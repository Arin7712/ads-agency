"use client";
import About from "@/components/About";
import Awards from "@/components/Awards";
import BallCursor from "@/components/BallCursor";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Preloader from "@/components/Preloader";
import Work from "@/components/Work";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);

  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
          } else {
            setIsAboutVisible(false);
          }
        });
      },
      { threshold: 0.5 } // Adjust sensitivity here
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative">
      {!showContent && <Preloader onComplete={() => setShowContent(true)} />}

      <div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Main Website Content */}
        <div
          className={`grain transition-colors duration-500 ${
            isAboutVisible ? "bg-zinc-800 text-[#f9cdcd]" : "bg-[#f1f1f1] text-black"
          }`}
        >
          <Hero isAboutVisible={isAboutVisible}/>
          <Awards />
          <Work />
          <Featured isAboutVisible={isAboutVisible}/>
          {/* Attach ref to About */}
          <div ref={aboutRef}>
            <About isAboutVisible={isAboutVisible}/>
          </div>
          <News isAboutVisible={isAboutVisible}/>
          <Footer/>
          <div className="py-2 bg-neutral-950 flex md:flex-row md:gap-0 gap-1 flex-col items-center justify-between text-zinc-500 px-[6rem] text-xs">
          <h1>BASIC/DEPT®, Inc 10 - 25©</h1>
          <h1>Easy to understand, impossible to ignore.™</h1>
          <h1>Terms, Privacy Policy</h1>
</div>
        </div>
      </div>
    </div>
  );
}
