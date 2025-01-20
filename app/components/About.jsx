import { about, shape3 } from "@/public";
import Image from "next/image";
import styles from "../styles/style";

const About = () => {
  return (
    <div id="about" className="relative">
      <section className={`${styles.boxWidth} ${styles.paddingY} mx-auto`}>
        <span class="text-[16px] mb-[22px] uppercase flex justify-center  items-center gap-2 text-blue-600 ">
          More About Our Company
        </span>
        <h2
          className={`text-center uppercase text-[#070052] ${styles.heading2} font-bangla `}
        >
          About Edura Company
        </h2>

        <div className={`flex md:flex-row flex-col ${styles.paddingY}`}>
          <div
            className="flex flex-col flex-1 xl:px-0 sm:px-8 px-6"
            data-aos="fade-left"
          >
            <p className={`${styles.paragraph} mt-5 text-justify font-bangla`}>
              Synergistically visualize alternative content before cross
              functional core Rapidiously administra standardized value via
              focused benefits. Rapidiously redefine highly efficient niche
              markets with plug-and-play materials professionally seize client
              centric solutions
            </p>

            <div
              className={`${styles.paragraph} mt-5 text-justify font-bangla`}
            >
              <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Maximize productivity and growth
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Speed past your competition
                </li>
                <li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
                  <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-blue-400 rounded-full">
                    <span class="text-sm font-bold">✓</span>
                  </span>{" "}
                  Learn the top techniques
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`flex flex-1 items-center xl:justify-end vxs:justify-center `}
            data-aos="fade-right"
          >
            <Image
              src={about}
              alt="paymentapp "
              className="w-full lg:w-[80%] rounded-md shadow-md"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
