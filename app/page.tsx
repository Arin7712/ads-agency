"use client";
import About from "@/components/About";
import Awards from "@/components/Awards";
import BallCursor from "@/components/BallCursor";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Hero2 from "@/components/Hero2";
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
        entries.forEach((entry) => {
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
      {/* {!showContent && <Preloader onComplete={() => setShowContent(true)} />} */}

      {/*<div
        className={`transition-opacity duration-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >*/}
        {/* Main Website Content */}
        <div
          className={`grain transition-colors duration-500 ${
            isAboutVisible
              ? "bg-black text-white"
              : "bg-[#f1f1f1] text-black"
          }`}
        >
          {/* <Hero isAboutVisible={isAboutVisible} /> */}
          <Hero2 isAboutVisible={isAboutVisible} />
          <Awards />
          <Work />
          {/* Attach ref to About */}
          <div ref={aboutRef}>
            <About isAboutVisible={isAboutVisible} />
          </div>
          <Featured isAboutVisible={isAboutVisible} />
          <News isAboutVisible={isAboutVisible} />
          
        </div>
      {/* </div> */}
    </div>
  );
}
