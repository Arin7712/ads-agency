import Image from "next/image";
import React from "react";

const AboutGallery = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center justify-center min-h-screen py-[6rem]">
      <div className="lg:w-[40%] lg:block flex justify-end">
        <h1 className="lg:w-[80%] md:w-[45%] w-[65%] uppercase text-xs">
          Easy to understand. Impossible to ignore.™ VISION®, Inc 10 - 25©
        </h1>
      </div>
      <div className="relative w-full h-[70rem] lg:order-1 order-[-1] lg:block hidden">
        {/* Image 1 */}
        <div className="absolute top-0 left-0 group transition-all duration-300 hover:z-50 z-10">
          <Image
            src="/c1.webp"
            alt="Image 1"
            width={580}
            height={300}
            className="object-cover "
          />
          <span className="text-xs absolute bottom-[-1.5rem] left-0">(01)</span>
        </div>

        {/* Image 2 */}
        <div className="absolute top-10 left-40 group transition-all duration-300 hover:z-50 z-20">
          <Image
            src="/c2.webp"
            alt="Image 2"
            width={580}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute top-0 right-[-2rem]">(02)</span>
        </div>

        {/* Image 3 */}
        <div className="absolute top-48 left-20 group transition-all duration-300 hover:z-50 z-30">
          <Image
            src="/c3.webp"
            alt="Image 3"
            width={580}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (03)
          </span>
        </div>

        {/* Image 4 */}
        <div className="absolute top-[22rem] left-96 group transition-all duration-300 hover:z-50 z-15">
          <Image
            src="/c4.webp"
            alt="Image 4"
            width={580}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (04)
          </span>
        </div>
      </div>
      <div className="relative w-full h-[52rem] lg:order-1 order-[-1] lg:hidden md:block hidden">
        {/* Image 1 */}
        <div className="absolute top-0 left-0 group transition-all duration-300 hover:z-50 z-10">
          <Image
            src="/c1.webp"
            alt="Image 1"
            width={400}
            height={300}
            className="object-cover "
          />
          <span className="text-xs absolute bottom-[-1.5rem] left-0">(01)</span>
        </div>

        {/* Image 2 */}
        <div className="absolute top-10 left-40 group transition-all duration-300 hover:z-50 z-20">
          <Image
            src="/c2.webp"
            alt="Image 2"
            width={400}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute top-0 right-[-2rem]">(02)</span>
        </div>

        {/* Image 3 */}
        <div className="absolute top-48 left-40 group transition-all duration-300 hover:z-50 z-30">
          <Image
            src="/c3.webp"
            alt="Image 3"
            width={400}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (03)
          </span>
        </div>

        {/* Image 4 */}
        <div className="absolute top-[22rem] left-96 group transition-all duration-300 hover:z-50 z-15">
          <Image
            src="/c4.webp"
            alt="Image 4"
            width={400}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (04)
          </span>
        </div>
      </div>

      <div className="relative w-full h-[46rem] lg:order-1 order-[-1] lg:hidden md:hidden block">
        {/* Image 1 */}
        <div className="absolute top-0 left-0 group transition-all duration-300 hover:z-50 z-10">
          <Image
            src="/c1.webp"
            alt="Image 1"
            width={250}
            height={300}
            className="object-cover "
          />
          <span className="text-xs absolute bottom-[-1.5rem] left-0">(01)</span>
        </div>

        {/* Image 2 */}
        <div className="absolute top-20 left-20 group transition-all duration-300 hover:z-50 z-20">
          <Image
            src="/c2.webp"
            alt="Image 2"
            width={250}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute top-0 right-[-2rem]">(02)</span>
        </div>

        {/* Image 3 */}
        <div className="absolute top-48 left-20 group transition-all duration-300 hover:z-50 z-30">
          <Image
            src="/c3.webp"
            alt="Image 3"
            width={250}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (03)
          </span>
        </div>

        {/* Image 4 */}
        <div className="absolute top-[22rem] left-32 group transition-all duration-300 hover:z-50 z-15">
          <Image
            src="/c4.webp"
            alt="Image 4"
            width={250}
            height={300}
            className="object-cover "
          />
          <span className="text-xs  absolute bottom-[-1.5rem] left-0">
            (04)
          </span>
        </div>
      </div>
    </div>
  );
};

export default AboutGallery;
