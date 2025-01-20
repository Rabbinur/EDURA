"use client";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { slides } from "../constants";
import useCarousel from "../hooks/useCarousel";
import styles from "../styles/style";

function Carousel() {
  const { currentIndex, prevSlide, nextSlide } = useCarousel();

  return (
    <div className="m-auto relative group    w-full ">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <h1
        className={`${styles.heading2} absolute  top-[50%] -translate-x-0 translate-y-[-50%] z-20 text-center pt- 20 animate-charcter font-bangla uppercase`}
      >
        Explore Your Brain
      </h1>
      <Image
        className="hidden md:block object-cover w-full h-[762px]"
        alt={`carousel image ${currentIndex}`}
        src={slides[currentIndex]?.url}
        width={1920}
        height={762}
        priority
      />
      <Image
        className="md:hidden object-cover w-full h-[300px]"
        alt={`mobile carousel image ${currentIndex}`}
        src={slides[currentIndex]?.mobileurl}
        width={1080}
        height={300}
      />

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 z-10 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={16} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl    z-10 rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={16} />
      </div>
    </div>
  );
}

export default Carousel;
