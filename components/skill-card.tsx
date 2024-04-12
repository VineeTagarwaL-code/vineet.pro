import React from "react"
import {motion} from "framer-motion"
import { cn } from "@/lib/utils";
type skillType = {
    skill:string,
    logo: React.ReactNode,
    contClass ?:string

}
export const SkillCard = ({ skill, logo , contClass }:skillType) => {
    return (
  
  <motion.div 
  whileHover={{
    scale: 1.1,
    transition: { duration: .2 },
  }}
  whileTap={{ scale: 0.9 }}
  className="relative cursor-pointer">
                <div className={cn("flex  shadow-[6px_6px_0px_1px_#8646d7] relative z-[100] justify-center gap-3 items-center bg-stone-800/20 px-4 py-2 min-w-[180px] border-[1px] border-gray-700 border-solid rounded-[5px]" ,  contClass)  
                   }>
                    <div>{logo}</div>
                    <p className="font-grotesk text-gray-200 text-sm md:text-base">{skill}</p>
 
                </div>

            </motion.div>
      
          

    );
};
