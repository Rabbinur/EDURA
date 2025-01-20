import React from "react";
import styles from "../styles/style";

import Link from "next/link";

import { CourseCard } from "../components";
import { courses } from "../constants";

const Courses = () => {
  return (
    <div id="courses">
      <div className={`${styles.boxWidth} lg:${styles.paddingX} xl:px-0`}>
        <h2
          className={`${styles.heading2} text-center my-4 font-bangla uppercase text-[#070052]`}
        >
          Choose Your Package Course
        </h2>

        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3  xl:grid-cols-4  my-10 gap-8 ">
          {courses.map((card, index) => (
            <CourseCard key={card.title} index={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
