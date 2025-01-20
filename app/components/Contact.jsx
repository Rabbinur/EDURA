import React from "react";
import styles from "../styles/style";

import { ContactForm } from ".";

const Contact = () => {
  return (
    <div id="contact" className=" relative my-32">
      <div className={`${styles.boxWidth}`}>
        <h2
          className={`${styles.heading2} text-center my-4 font-bangla uppercase text-[#070052]`}
        >
          Contact with us
        </h2>

        <div className="flex flex-col xl:flex-row lg:flex-row  py-4 px-4 gap-12 z-[99]  justify-around items-center ">
          <div className="w-full text-center " data-aos="fade-right">
            <p className="font-bangla text-[20px] leading-normal">
              Any query Kindly inform us:
            </p>
            <p className=" text-[22px] font-bangla leading-normal mb-3 text-blue-600 cursor-pointer">
              <a href="/www.weepoka.com" target="_blank">
                Elearn
              </a>
            </p>

            <p className=" text-[18px] font-bangla font-semibold leading-normal">
              Mirpur-2 , Dhaka-1216
            </p>
            <p className=" text-[18px] text font-bangla leading-normal">
              মোবাইল নাম্বার - 01000-000000
            </p>
          </div>
          <div className="w-full " data-aos="fade-left">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className=" absolute  animate-pulse shape-1 -z-10"></div>
      <div className=" absolute  animate-pulse shape-2 -z-10"></div>
    </div>
  );
};

export default Contact;
