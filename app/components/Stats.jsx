import { stats } from "../constants";
import styles from "../styles/style";

const Stats = () => (
  <div className=" h-full  bg-blue-50 p-2 py-20">
    <h4
      className={`${styles.heading2} text-center font-bangla uppercase text-[#070052]`}
    >
      Our success at a glance
    </h4>
    <section
      className={` ${styles.boxWidth} grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-4 gap-5 justify-around mt-10 sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`${stat.class} backdrop-blur-sm flex items-center flex-col xl:px-8 lg:px-6 md:px-4  xl:min-w-[260px] vxs:min-w-[175px] py-5  shadow drop-shadow rounded-lg cursor-pointer`}
        >
          <h4 className="text-[#EC1B24]  font-plusjakarta font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
            {stat.value}
          </h4>
          <p className="text-black  font-normal font-plusjakarta mt-5 xl:text-[24px] xs:text-[16px] xs:leading-[26px] leading-[21px]">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  </div>
);

export default Stats;
