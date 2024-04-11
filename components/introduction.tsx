"use client"
import { SectionWrapper } from "./section-wrapper"
import { IntroCont } from "./intro-cont"
import myImage from '../assests/images/image.jpg'
import Image from "next/image"
import  { DiscordPresence } from "./discord-presence"
import { Tip } from "./ui/tip"
export const Introduction = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col ">
      <div className="flex w-full justify-between items-center mb-12 md:mb-24">
        <IntroCont name="Vineet" des={["Freelancer.", "Full Stack Wizard."]} />
        <div className="relative cursor-pointer animate-float hidden lg:block mr-8">
          <Image
            src={myImage}
            alt="Picture of the author"
            width={400}
            height={400}
            className="rounded-[3rem] z-[10] relative shadow-md shadow-black"
          />
         
        </div>
      </div>
      <div className="flex justify-between items-center w-full flex-col md:flex-row gap-8">
      <div className="md:w-[50%] w-full">
        <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">activity</p>
      <DiscordPresence/>
      </div>
      <div className="md:w-[50%]">
      <p className="font-jetbrain mb-4 text-2xl text-sky-200/95 md:hidden">bio</p>
        <div className="font-grotesk  text-md md:text-xl md:ml-6 select-none flex-nowrap">Hey, I{`'`}m Vineet I{`'`}m a <Tip name="20" tip="yes thats correct"/> year old full stack developer and freelancer based in India, I{`'`}ve been coding since 2019 and have been freelancing and working since 
        2022. I also <Tip name="love" tip="<3"/> contributing to open source to give back to the community</div>
      </div>
      </div>


      </div>
      
    </SectionWrapper>
  )
}