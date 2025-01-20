import React from "react";
import styles, { layout } from "../styles/style";

import Image from "next/image";

import { Button } from "../components";
import { shape, shape2 } from "@/public";

const Hero = () => {
  return (
    <div className="hero  relative ">
      <div className={`${styles.boxWidth} z-100`}>
        <div className={`${styles.flexCenter} flex-col justify-between`}>
          <h2
            className={`${styles.heading2}  text-white font-bangla animate-charcter xl:text-[46px] xl:py-6 xs:py-4 mt-3 text-center`}
          >
           weepoka
          </h2>
          <p
            className={` xl:text-[24px]  mt-3 xl:leading-12 vxs:text-[18px] vxs:leading-8 text-blue-900 font-bangla   p-3 max-w-[900px] text-justify `}
          >
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod dolorum pariatur tenetur nesciunt itaque labore quam fugiat et praesentium error dolorem distinctio, hic perferendis veritatis doloremque. Omnis voluptatum nihil at alias dolorum, corporis tenetur rerum praesentium vitae in quos accusantium explicabo enim possimus .
          </p>

          <p
            className={`  text-xl mt-5 leading-8 text-[#6d28d9] font-bangla  text-[32px] text-center  w-full`}
          >
            কোর্স মেয়াদ: ০৩ মাস, ০৬ মাস, এক বছর
          </p>

          <Button styles="my-8 font-bangla ">শুরু করুন</Button>
        </div>
      </div>

      <Image
        src={shape}
        className=" absolute top-0 left-0 shape-image z-[-50] "
        alt="shape"
        priority
      />
      <Image
        src={shape2}
        className=" absolute top-0 right-0 shape-image z-[-50]"
        alt="shape"
        priority
      />
    </div>
  );
};

export default Hero;
