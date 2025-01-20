import Image from "next/image";
import { partners } from "../constants";
import styles from "../styles/style";

const Partners = () => (
  <div className="bg-teal-50 py-3">
    <div className={`${styles.boxWidth} my-5`}>
      <h6 className={`${styles.heading2} text-center font-bangla uppercase `}>
        Partner
      </h6>
      <div
        className="flex flex-wrap my-10 justify-between items-center "
        data-aos="fade-up"
      >
        {partners.map((item) => (
          <div
            key={item.alt}
            className="vxs:w-[120px] xl:w-[160px] m-2 h-auto   rounded-lg xl:gap-0 md:gap-12 flex-wrap  hover:cursor-pointer"
          >
            <div className=" rounded-sm w-40 h-30 text-center mx-auto"></div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Partners;
