import { SectionWrapper } from "./section-wrapper"
import { IntroCont } from "./intro-cont"
import myImage from '../assests/images/image.jpg'
import Image from "next/image"
import { motion } from "framer-motion"
import  { DiscordPresence } from "./discord-presence"
export const Introduction = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-col ">
      <div className="flex w-full justify-between items-center mb-24">
        <IntroCont name="Vineet" des={["Freelancer.", "Full Stack Wizard."]} />
        <div className="relative cursor-pointer animate-float">

          <Image
            src={myImage}
            alt="Picture of the author"
            width={400}
            height={400}
            className="rounded-[3rem] z-[10] relative shadow-md shadow-black"
          />
          <div className="w-[400px] h-[400px] bg-foreground absolute top-3 left-3 rounded-[3rem] z-[0] shadow-md shadow-black" />
        </div>
      </div>
      <DiscordPresence/>
      </div>
      
    </SectionWrapper>
  )
}