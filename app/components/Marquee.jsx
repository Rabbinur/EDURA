import React from "react";

const Marquee = () => {
  return (
    <div className="bg-[#FFB802] text-black py-2 font-bangla font-light">
      <marquee behavior="scroll" direction="left">
        <strong>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </strong>
      </marquee>
    </div>
  );
};

export default Marquee;
