import Awards from "@/components/Awards";
import BallCursor from "@/components/BallCursor";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#f1f1f1]">
      <Hero/>
      <Awards/>
      <Work/>
    </div>
  );
}
