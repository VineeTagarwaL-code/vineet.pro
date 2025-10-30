"use client";
import { SectionWrapper } from "./section-wrapper";
import { IntroCont } from "./intro-cont";
import myImage from "../assests/images/image.jpg";
import Image from "next/image";
import Link from "next/link";
import { DiscordPresence } from "./ui/discord";
import { Tip } from "./ui/tip";
import { CardContainer, CardItem } from "./3d-card";

export const Introduction = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col py-6 " id="top">
        <div className="flex w-full justify-between items-center mb-12 md:mb-24">
          <IntroCont name="Vineet" des={["AI Engineer."]} />
          <div className="relative cursor-pointer animate-float hidden md:block mr-8">
            <CardContainer className=" cursor-pointer">
              <Link href="" target="_blank">
                <div className="">
                  <CardItem>
                    <Image
                      src={myImage}
                      alt={"platform"}
                      width={400}
                      height={400}
                      className="rounded-[3rem]"
                    />
                  </CardItem>
                </div>
              </Link>
            </CardContainer>
          </div>
        </div>
        <div className="flex justify-between items-center w-full flex-col md:flex-row gap-8">
          <div className="md:w-[50%] w-full">
            <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">
              activity
            </p>
            <DiscordPresence
              userId={process.env.NEXT_PUBLIC_DISCORD_USER_ID || ""}
              username={"vineet"}
              acitivityImageContainer="h-[100px] w-[100px]"
              acitivityContainer="bg-transparent px-0 px-2"
              activityClass="text-cyan-300"
              acitvityDetailContainer="gap-1"
              detailsClass="text-[#ffbe6f]"
              progressBarClass="bg-[#ffbe6f]"
              stateClass="text-[#BF9DEA]"
              userClass="text-[#ffbe6f]"
              timeClass="text-green-300"
            />
          </div>
          <div className="md:w-[50%]" id="bio">
            <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">
              bio
            </p>
            <div className="font-grotesk  text-md md:text-xl md:ml-6 select-none flex-nowrap relative leading-[1.75rem] before:font-jetbrain after:font-jetbrain before:text-gray-500/50  after:text-gray-500/50 2xl:before:content-['vin'] before:h-[300px] before:text-[150px] before:font-[700] before:-z-10 before:select-none before:translate-x-[140%] before:translate-y-[1%] webkit_text_stroke before:opacity-[0.22] before:absolute 2xl:after:content-['eet'] after:h-[300px] after:text-[150px] after:font-[600] after:-z-10 after:select-none after:translate-x-[130%] after:translate-y-[-15%] webkit_text_stroke_after after:opacity-[0.22] after:absolute ">
              Hey, I’m Vineet — a <Tip name="21" tip="yes that's correct" />
              -year-old AI engineer from India. I was part of the core team
              behind{" "}
              <Link href="https://interfaze.ai" target="_blank">
                <Tip name="interfaze.ai" tip="the LLM built for developers" />
              </Link>{" "}
              at JigsawStack. I love creating tools that help developers move
              faster and build smarter. In my free time, you’ll usually find me
              contributing to open-source projects or out riding my bike.
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
