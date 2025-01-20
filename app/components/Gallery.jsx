import Image from "next/image";
import { gallery } from "../constants";
import styles from "../styles/style";

export default function Gallery() {
  return (
    <div className={`{${styles.boxWidth} my-32 `} id="gallery">
      <h2
        className={`${styles.heading2} text-center my-4 font-bangla uppercase text-[#070052]`}
      >
        Gallery
      </h2>
      <div className="ss:columns-2 sm:columns-3 md:columns-4 gap-5">
        {gallery.map((item) => (
          <div
            key={item.alt}
            className=" mb-5  hover:translate-y-1 duration-300"
          >
            <Image
              // className="rounded-sm shadow-lg  object-contain w-[600px] h-[400px]"
              className="h-auto max-w-full rounded-lg"
              src={item.img}
              alt={item.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
