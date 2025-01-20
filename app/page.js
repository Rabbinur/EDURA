"use client";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import {
  About,
  Categories,
  Courses,
  Contact,
  Hero,
  Instractor,
  Map,
  Marquee,
  Ceo,
  Review,
  Stats,
  Gallery,
  Partners,
  Carousel,
} from "./components";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    function handleContextMenu(e) {
      e.preventDefault();
    }

    const rootElement = document.getElementById("my-app");

    if (rootElement) {
      rootElement.addEventListener("contextmenu", handleContextMenu);

      return () => {
        rootElement.removeEventListener("contextmenu", handleContextMenu);
      };
    }
  }, []);

  // // For Keyboard Function
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey || event.keyCode === 123) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="my-app" className=" w-full overflow-hidden scroll-smooth ">
      <Carousel />

      <Ceo />
      <About />
      <Stats />
      <Categories />
      <Courses />
      <Instractor />
      <Review />
      <Gallery />
      {/* <Partners /> */}
      <Contact />
      <Map />
    </div>
  );
};

export default HomePage;
