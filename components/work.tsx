import { Experience as experienceType } from "@/lib/types";
import Image from "next/image";
import myimage from "../assests/images/image.jpg";
import code from "@/assests/images/image-removebg-preview.png";
import { Tip } from "./ui/tip";
import { motion, inView } from "framer-motion";

export const Work = (work: experienceType) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      whileTap={{ scale: 0.9 }}
      whileInView={{ scale: 1.02, opacity: 1 }}
      className="bg-stone-800/20 border-t-[1px] border-foreground border-solid border-l-[1px] px-8 py-4 select-none cursor-pointer rounded-xl  shadow-[2px_6px_0px_1px_#8646d7] md:shadow-[6px_6px_0px_1px_#8646d7]  md:w-[800px]  w-fit flex  flex-col mb-[100px]"
    >
      <div className="flex justify-between items-center gap-3 mb-10 w-full">
        <div className="flex justify-start items-center gap-3">
          <Image
            src={myimage}
            alt="Picture of the author"
            className="rounded-full"
            width={20}
            height={20}
          />
          <h4 className="font-jetbrain text-sm md:text-base mb-1 text-white">
            vineethere
          </h4>
        </div>
        <div className="flex justify-start items-end sm:items-center gap-1 md:gap-3 flex-col sm:flex-row ">
          <h4 className="font-jetbrain text-sm md:text-base  text-cyan-300 text-right ">
            {work.location}
          </h4>
          <span className="sm:flex justify-center items-center hidden ">
            {" "}
            •
          </span>
          <h4 className="font-jetbrain text-base md:text-base  text-green-300">
            {work.startDate}
          </h4>
          <span className="hidden md:inline-block justify-center items-center  ">
            {" "}
            -
          </span>
          <h4 className="font-jetbrain hidden md:inline-block md:text-base  text-green-300">
            {work.endDate}
          </h4>
        </div>
      </div>
      <div className="w-full">
        <h1 className="text-4xl font-grotesk mb-4">
          <Tip tip={work.tip}>{work.company}</Tip>
        </h1>
        <h2 className="text-2xl font-grotesk">{work.title}</h2>
        <div className="mt-4">
          {work.description.map((desc, index) => {
            return (
              <p key={index} className="text-white text-sm font-jetbrain mt-2">
                • {desc}
              </p>
            );
          })}
        </div>

        <div className="flex  gap-2 mt-5 justify-start items-center flex-wrap">
          <>
            <Image
              src={code}
              alt="code"
              width={20}
              height={20}
              className="animate-[spin_40s_linear_infinite]"
            />
            {work.lang.map((lang, index) => {
              return (
                <Tip key={index} tip={lang}>
                  <span
                    key={index}
                    className=" text-sm font-jetbrain  rounded-md text-[#34c07c]"
                  >
                    {lang}
                    {index == work.lang.length - 1 ? "" : ","}
                  </span>
                </Tip>
              );
            })}
          </>
        </div>
      </div>
    </motion.div>
  );
};
