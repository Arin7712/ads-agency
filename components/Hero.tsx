"use client";
import React, { useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import BallCursor from "./BallCursor"; // Import BallCursor component

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showMovingText, setShowMovingText] = useState(false);
  const [videoSrc, setVideoSrc] = useState("mock.mp4");
  const [showBallCursor, setShowBallCursor] = useState(false); // Track ball cursor visibility
  const [isMuted, setIsMuted] = useState(true); // Track if video is muted

  const videoDuration = 59; // exact length!

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.muted = false;
        setVideoSrc("mock.mp4");
        setShowMovingText(true);
        setIsMuted(false); // Video is unmuted
      } else {
        videoRef.current.muted = true;
        setVideoSrc("mock2.mp4");
        setShowMovingText(false);
        setIsMuted(true); // Video is muted
      }
      videoRef.current.currentTime = 0;
      videoRef.current.load();
      videoRef.current.play();
    }
  };

  const handleMouseEnter = () => {
    if (videoRef.current?.muted) {
      setShowBallCursor(true); // Show ball cursor when muted
    }
  };

  const handleMouseLeave = () => {
    setShowBallCursor(false); // Hide ball cursor
  };

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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Conditionally render the BallCursor */}
      {showBallCursor && isMuted && <BallCursor />}

      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onClick={handleVideoClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 pointer-events-none"></div>

      <div className="md:hidden block">
      <div
      className="flex justify-center items-center w-full h-screen z-50 pointer-events-none"
    >
      {/* Ball with text inside */}
      <div
        className="w-30 h-30 bg-white rounded-full flex justify-center items-center text-center"
        style={{ position: "absolute" }}
      >
        <span className="text-black text-xs font-semibold uppercase">Watch<br/>reel</span>
      </div>

      {/* Text below the ball */}
      <div
        className="absolute pt-[10rem] flex text-center transform mt-2 text-white text-xs"
        style={{
          whiteSpace: "nowrap",
        }}
      >
        BASIC/DEPT®<br/>
      </div>
    </div>
      </div>

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

export default Hero;
