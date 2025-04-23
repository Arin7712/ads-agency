'use client'
import { useState, useRef, useEffect } from "react";
import About from "@/components/About";
import AgencySnapShot from "@/components/agency-snapshot";
import Awards from "@/components/Awards";
import Featured from "@/components/Featured";
import News from "@/components/News";
import Work from "@/components/Work";
import Hero2 from "@/components/Hero2";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isAgencyVisible, setIsAgencyVisible] = useState(false);

  const aboutRef = useRef(null);
  const agencyRef = useRef(null);

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



  const getBackgroundClass = () => {
    if (isAgencyVisible) {
      return "bg-black text-white"; // When agency snapshot is visible
    } else if (isAboutVisible) {
      return "bg-black text-white"; // When about is visible
    } else {
      return "bg-[#f1f1f1] text-black"; // Default background
    }
  };

  return (
    <div className="relative">
      <div className={`grain transition-colors duration-500 ${getBackgroundClass()}`}>
        <Hero2 isAboutVisible={isAboutVisible} />
        <Awards />
        <Work />        
        <Featured isAboutVisible={isAboutVisible} />
        {/* About Section */}
        <div ref={aboutRef}>
          <About isAboutVisible={isAboutVisible} />
        </div>
        {/* Featured Section */}
        {/* Agency Snapshot Section */}
        <div className="flex flex-col justify-between md:py-6 py-[4rem] lg:px-[6rem] px-6">
          <AgencySnapShot />
        </div>
        <News isAboutVisible={isAboutVisible} />
      </div>
    </div>
  );
}
