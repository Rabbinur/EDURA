"use client";
import React from "react";
import styles from "../styles/style";
import { ReviewCard } from "../components";
import { review } from "../constants";

const Review = () => {
  return (
    <div id="review" className={`${styles.boxWidth} my-5 `}>
      <h2
        className={`${styles.heading2} font-bangla text-center my-4 uppercase text-[#070052]`}
      >
        Their Comments
      </h2>
      <p className="font-bangla text-center text-[18px] p-2"></p>
      <div
        className="grid grid-cols-1 vxs:grid-cols-1 xs:grid-cols-2 ss:grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-3 gap-5 items-center  justify-center w-full  "
        data-aos="fade-left"
      >
        {review.map((card, index) => (
          <ReviewCard key={card.id} index={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Review;
