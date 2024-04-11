"use client"
import { Email } from "@/assests/logos/email";
import { Github } from "@/assests/logos/github";
import { Me } from "@/assests/logos/me";
import { Tea } from "@/assests/logos/tea";
import { Clipboard } from "lucide-react";
import {
    motion,
    useTransform,
    AnimatePresence,
    useMotionValue,
    useSpring,
} from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import React from "react"
import { useToast } from "./ui/use-toast";
type IntroContProps = {
    name: string;
    des: string[]
}

const mailtoLink = `mailto:vineetagarwal.now@gmail.com`;
const icons = [
    { name: "github", icon: <Github /> , handler:()=>{
        window.open("https://github.com/vineeTagarwaL-code")
    } },
    { name: "email", icon: <Email /> , 
    handler:()=>{
        window.open(mailtoLink , "_blank")
    }},
    { name: "Book a call", icon: <Tea />, 
    handler:()=>{
        window.open("https://github.com/vineeTagarwaL-code")
    } },
    { name: "Yup, that's me", icon: <Me /> ,
    handler:()=>{
        window.open("https://github.com/vineeTagarwaL-code")
    }},

]
export const IntroCont = ({ name, des }: IntroContProps) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const springConfig = { stiffness: 100, damping: 5 };
    const x = useMotionValue(0);
    const translateX = useSpring(
        useTransform(x, [-100, 100], [-50, 50]),
        springConfig
    )
    const rotate = useSpring(
        useTransform(x, [-100, 100], [-45, 45]),
        springConfig
    );
    const {toast} = useToast()

    return (
        <div className="w-full md:max-w-[400px]">
            <h1 className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk ">{name}</h1>
            <div className="flex flex-col gap-4 mt-5 md:px-3 ">


                {des.map((line, index) => {
                    return (
                        <React.Fragment key={index}>
                            <h3 className="font-jetbrain text-xl md:text-2xl">{line}</h3>

                        </React.Fragment>
                    )
                }


                )}
                <h3 className="font-jetbrain text-xl md:text-2xl">Converts <span className="text-green-200">air</span> into <span className="text-sky-200">code</span>.</h3>
            </div>
            <div className="flex gap-5 md:gap-8 pl-3  mt-6 md:mt-8 mb-6 md:mb-6">
                {
                    icons.map((icon, index) => {
                        return (
                            <div key={index}
                                className="relative group"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {
                                    hoveredIndex === index && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                            animate={{
                                                opacity: 1, y: 0, scale: 1,
                                                transition: {
                                                    type: 'spring',
                                                    stiffness: 260,
                                                    damping: 20
                                                }
                                            }}
                                            exit={{ opacity: 0, scale: 0.6 }}
                                            style={{
                                                translateX: translateX,
                                                rotate: rotate,
                                                zIndex: 1000,
                                                whiteSpace: "nowrap"
                                            }}
                                            className="flex justify-center items-center"

                                        >
                                            <div className="border-solid border-2 shadow-2xl border-red-300 flex justify-center items-center px-4 absolute top-[-60px] z-[10] bg-[#ffbe6f] rounded-xl ml-[1px]  ">
                                                <span className="text-stone-800 font-grotesk text-base">{icon.name}</span>
                                                <div className="w-0 h-0 absolute top-[30px] left-1/2 transform -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ffbe6f] border-r-[10px] border-r-transparent">
                                                </div>
                                            </div>
                                        </motion.div>
                                    )
                                }
                                <motion.div className="cursor-pointer z-[9]" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={()=> icon?.handler()}>
                                    {icon.icon}
                                </motion.div>
                            </div>

                        )
                    })
                }
            </div>
            <div className=" w-full border-solid border-[1px] border-gray-200/20 bg-stone-800/20 max-w-full relative flex items-center justify-start h-[70px] rounded-2xl gap-8 mt-4 md:mx-3">
                <div className="w-[10%] h-full bg-cyan-500 rounded-tl-2xl rounded-bl-2xl " />
             
                <h4 className="text-2xl text-cyan-300 ">npx vineetdev</h4>
                <Clipboard className="cursor-pointer text-cyan-300 p-2 w-fit h-fit absolute right-4 rounded-xl border-solid border-[1px]  border-gray-200/20" size={20} onClick={()=>{
                    navigator.clipboard.writeText("npx vineetdev")
                    toast({
                        title: (
                            <span className="text-stone-600 flex justify-start items-center">
            
                               <span> Copied to clipboard</span>
                            </span>
                        )as any,
                        className: "bg-gray-200/90 text-stone-800 border-solid border-[1px] border-gray-200/20 rounded-xl p-4 text-xl",
                        description: "Make sure you run this in your terminal <3",
                      })
                }} />
            </div>

        </div>
    )
}