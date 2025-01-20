import React from "react";
import styles from "../styles/style";
import Image from "next/image";

import { instractor } from "../constants";

const Instractor = () => {
  return (
    <div className={`${styles.boxWidth} my-32 lg:${styles.paddingX} xl:px-0`}>
      <h2
        className={`${styles.heading2} text-center my-4 font-bangla uppercase text-[#070052]`}
      >
        Course Instructor
      </h2>

      <div
        className="grid grid-cols-1 vxs:grid-cols-2 xs:grid-cols-2 ss:grid-cols-3 sm:grid-cols-4  md:grid-cols-4 lg:grid-cols-5
          gap-5 my-10 justify-evenly"
        data-aos="fade-up"
      >
        {instractor.map((item) => (
          <div
            key={item.des}
            className="vxs:w-[160px] xl:w-[220px] lg:w-[220px] shadow-lg bg-slate-100 duration-300  m-2 rounded-lg flex flex-col justify-center items-center   hover:cursor-pointer hover:translate-y-1"
          >
            <div
              href={item.des}
              className="flex flex-col  justify-around flex-wrap p-3 "
            >
              <Image className="shadow rounded-md" src={item.img} alt="" />
              <h3 className="text-mahitwo text-center font-bangla  mt-5 font-bold xl:text-[18px] md:marker:">
                {item.name}
              </h3>
              <h4 className="text-mahithree text-center mt-2 font-bangla xl:text-[16px]">
                {item.des}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instractor;
