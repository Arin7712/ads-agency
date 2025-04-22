"use client";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import BallCursor from "./BallCursor"; // Import BallCursor component
import 'aos/dist/aos.css';
import AOS from 'aos';

const Hero2 = ({ isAboutVisible }: { isAboutVisible: Boolean }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showMovingText, setShowMovingText] = useState(false);
  const [videoSrc, setVideoSrc] = useState("mock.mp4");
  const [showBallCursor, setShowBallCursor] = useState(false); // Track ball cursor visibility
  const [isMuted, setIsMuted] = useState(true); // Track if video is muted
  const [isMobile, setIsMobile] = useState(false); // New: track mobile

  const videoDuration = 59; // exact length!



useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setVideoSrc("mock.mp4");
        setShowMovingText(true);
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setVideoSrc("mock2.mp4");
        setShowMovingText(false);
        setIsMuted(true);
      }
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current?.muted) {
      setShowBallCursor(true);
    }
  };

  const handleMouseLeave = () => {
    setShowBallCursor(false);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateProgress = () => {
      if (videoRef.current && !videoRef.current.muted) {
        const current = videoRef.current.currentTime;
        const progress = (current / videoDuration) * 100;
        setProgress(progress);
        setCurrentTime(current);
      }
      animationFrameId = requestAnimationFrame(updateProgress);
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden ">
      <div className="relative z-30">
        <Navbar isAboutVisible={isAboutVisible} />
      </div>

      <div className="absolute inset-0 flex md:flex-row flex-col justify-center md:gap-[6rem] lg:px-[6rem] md:px-[2rem] px-6 gap-[5rem] md:items-center bg-black pointer-events-none text-white z-20">
        <p data-aos='fade-up'         data-aos-delay='300'
 className="md:w-[15%] w-[30%] left-1/2 text-sm mx-auto md:mx-0 md:block hidden uppercase">
          We are a forward-thinking team of designers and developers driven by
          passion — and fuelled by curiosity.
        </p>
        <div className="md:hidden flex w-full justify-end">
        <p className="md:w-[15%] w-[50%]  text-sm uppercase" data-aos='fade-up'         data-aos-delay='300'>
          We are a forward-thinking team of designers and developers driven by
          passion — and fuelled by curiosity.
        </p>
        </div>
        <h1 className="md:text-6xl text-5xl font-bold  text-center uppercase" data-aos='fade-up'>Vision Agency</h1>
        <p
        data-aos='fade-down'
        data-aos-delay='300'
          className="md:w-[15%] w-[50%] uppercase
  text-sm"
        >
          We bring together innovative designers, pixel perfect developers and
          data driven strategy to create a boutique.
        </p>
      </div>

      {/* Mobile View: Watch Reel Ball */}
      {isMobile && (
        <div className="flex justify-center items-center w-full h-screen z-50 pointer-events-none">
          <div className="w-[90px] h-[90px] bg-white rounded-full flex justify-center items-center text-center absolute">
            <span className="text-black text-xs font-semibold uppercase">
              Watch
              <br />
              Reel
            </span>
          </div>

          <div
            className="absolute pt-[8rem] md:pt-[10rem] flex text-center transform mt-2 text-white text-xs"
            style={{
              whiteSpace: "nowrap",
            }}
          >
            BASIC/DEPT®
          </div>
        </div>
      )}

      {/* Moving Time Text */}
      {showMovingText && (
        <div className="absolute bottom-1 left-0 w-full h-10">
          <div
            className="absolute text-md text-white opacity-70 font-bold transition-transform duration-75 ease-linear"
            style={{ left: `${progress}%`, transform: "translateX(-50%)" }}
          >
            00:{Math.floor(currentTime)}/00:59
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero2;
