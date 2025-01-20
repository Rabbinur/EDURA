import { shape2, about_4 } from "@/public";
import Image from "next/image";
import styles from "../styles/style";
import { FaBook } from "react-icons/fa";
import { RiGraduationCapLine } from "react-icons/ri";
import { SlLockOpen } from "react-icons/sl";
import { GiCash } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
const Ceo = () => {
  return (
    <div className="relative  ">
      <section className="border-b flex flex-wrap container mx-auto px-5 py-[63px] gap-10">
        <div className="flex items-center gap-3">
          <RiGraduationCapLine
            size={45}
            className="bg-blue-600 h-[50px] w-[50px] leading-[50px] text-center rounded-full border-[3px] text-white border-[#d0dbe9]"
          />
          20k+ Online Courses
        </div>
        <div className="flex items-center gap-3">
          <SlLockOpen
            size={45}
            className="bg-blue-600 h-[50px] w-[50px] leading-[50px] text-center rounded-full border-[3px] text-white border-[#d0dbe9]"
          />
          Lifetime Access
        </div>
        <div className="flex items-center gap-3">
          <GiCash
            size={45}
            className="bg-blue-600 h-[50px] w-[50px] leading-[50px] text-center rounded-full border-[3px] text-white border-[#d0dbe9]"
          />
          Value For Money
        </div>
        <div className="flex items-center gap-3">
          <BiSupport
            size={45}
            className="bg-blue-600 h-[50px] w-[50px] leading-[50px] text-center rounded-full border-[3px] text-white border-[#d0dbe9]"
          />
          Lifetime Support
        </div>
        <div className="flex items-center gap-3">
          <HiUserGroup
            size={45}
            className="bg-blue-600 h-[50px] w-[50px] leading-[50px] text-center rounded-full border-[3px] text-white border-[#d0dbe9]"
          />
          Community Support
        </div>
      </section>

      <section className={`${styles.boxWidth} py-28  mx-auto`}>
        <span class="text-[16px] mb-[22px] uppercase flex justify-center  items-center gap-2 text-blue-600 ">
          <FaBook />
          Get to Know About Us
        </span>
        <h2
          className={`text-center capitalize pb-10 text- [#070052] ${styles.heading2} font-bangla `}
        >
          All In One Education Solution Makes Your Better Skills
        </h2>

        <div className={`flex md:flex-row flex-col gap-10`}>
          <div
            className="flex flex-col flex-1 xl:px-0 sm:px-8 px-6"
            data-aos="fade-left"
          >
            <p className={`${styles.paragraph} mt-5 text-justify font-bangla`}>
              Credibly syndicate transparent interfaces and client-focused
              synergy. Objectively embrace revolutionary infomediaries virtual
              functionalities. Monotonectally myocardinate client-based
              processes before intermandated models prospective.
            </p>

            <p className={`${styles.paragraph} mt-5 text-justify font-bangla`}>
              we strive to empower individuals of all ages and backgrounds with
              the knowledge and skills necessary for success in the modern
              world.
            </p>
          </div>
          <div
            className={`flex flex-1 items-center xl:justify-end vxs:justify-center `}
            data-aos="fade-right"
          >
            <Image src={about_4} alt="about" className="rounded-md" />
          </div>
        </div>
      </section>
      <Image
        src={shape2}
        alt="about"
        className="absolute z-[-50] shape-image bottom-0 right-0"
      />
    </div>
  );
};

export default Ceo;
