"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { logo, phone, email } from "../../public";
import { TogglerMenu } from "../components";
import { navLinks, socialMedia } from "../constants";
import useScroll from "../hooks/useScroll";
import styles from "../styles/style";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const [active, setActive] = useState("Home");

  const { scrolled } = useScroll();

  return (
    <div className="scroll-mt-[200px] font-bangla">
      <div
        className={` border-b-[1px] border-b-[#feeacd] sm:flex hidden bg-blue-900 `}
      >
        <div className={`${styles.boxWidth} flex justify-between px-5 py-2 `}>
          <div className="flex ">
            <Image src={phone} alt="phone_icon" className="w-[14px]" />
            <span className="ml-2">
              <a
                className="font-light  text-slate-100 text-sm"
                href="tel:8801606104415
"
              >
                +8801606-104415
              </a>
            </span>
            <Image src={email} alt="phone_icon" className="w-[14px] ml-4" />
            <span className="ml-2">
              <a
                className=" text-sm text-slate-100 font-light"
                href="mailto:contact@weepoka.com"
              >
                contact@weepoka.com
              </a>
            </span>
          </div>
          <div className="flex flex-row items-center  ">
            {socialMedia.map((social) => (
              <Link
                key={social.id}
                href=""
                className="cursor-pointer hover:text-qpayone [&:not(:last-child)]:mr-6 
                hover:opacity-80"
              >
                <Image
                  src={social.icon}
                  alt={social.id}
                  className={`w-[18px] h-[18px] object-contain `}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`relative mx-auto  bg-white ${
          scrolled && "sticky drop-shadow-lg"
        }`}
        id="home"
      >
        <nav
          className={`${styles.boxWidth}  mx-auto flex py-2   px-5 justify-between items-center`}
        >
          <Link href="/">
            <p className="font-bold nav-font  cursor-pointer text-2xl flex items-center">
              <Icon icon="mdi:learn" width={30} /> earn
            </p>
          </Link>
          <ul
            className={`list-none sm:flex hidden items-center justify-center flex-1`}
          >
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={` font-bold nav-font cursor-pointer text-sm  ${
                  active === nav.title
                    ? "bg-[#070052] px-3 py-1 text-white"
                    : "text-black"
                } [&:not(:last-child)]:mr-10`}
                onClick={() => setActive(nav.title)}
              >
                <Link href={`/${nav.id}`} className="hover:text-mahithree">
                  {nav.title}
                </Link>
              </li>
            ))}
          </ul>

          <TogglerMenu />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
