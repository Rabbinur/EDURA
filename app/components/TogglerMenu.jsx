"use client";

import { close, menu } from "@/public";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

import styles from "../styles/style";
import { navLinks } from "../constants";

const TogglerMenu = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="sm:hidden flex flex-1 justify-end items-center relative">
      <Image
        src={toggle ? close : menu}
        alt="menu"
        className="w-[28px] h-[28px] cursor-pointer object-contain"
        onClick={() => setToggle((prev) => !prev)}
      />

      <div
        // className={`${
        //   toggle ? "flex" : "hidden"
        // } p-6 bg-blue-50  bg- black-gradient absolute top-20 right-0 mx-6 my-2 min-w-[200px] rounded-xl sidebar z-50 `}
        className={`absolute top-9 right-0  min-w-[200px] p-6 rounded-xl  z-50 
          bg-blue-50 black-gradient transition-all duration-300 ease-in-out transform ${
            toggle
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0    pointer-events-none"
          }`}
      >
        <ul className=" list-none flex  flex-col  flex-1">
          {navLinks.map((item) => (
            <li key={item.id} className={`${styles.mobileMenu} `}>
              <Link
                scroll={false}
                href={`/${item.id}`}
                onClick={() => setToggle(false)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TogglerMenu;
