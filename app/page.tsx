import Awards from "@/components/Awards";
import BallCursor from "@/components/BallCursor";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
<div className="relative bg-[#f1f1f1] overflow-hidden">
  {/* Stronger Background Grain Effect */}
  <div className="pointer-events-none fixed top-0 left-0 w-full h-full opacity-30 z-0 grainy-background"></div>

  {/* Main Content */}
  <div className="relative z-10">
    <Hero />
    <Awards />
    <Work />
  </div>
</div>
  );
}
