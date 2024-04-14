import { Project } from "@/lib/types"
import Image from "next/image"
import myImage from "@/assests/images/image.jpg"
import { Github } from "@/assests/logos/github"
import { Link as LinkIcon } from "@/assests/logos/link"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tip } from "./ui/tip"
import { LoaderCircle } from "lucide-react"
export const ProjectCard = (project: Project) => {
    return (
        <motion.div
            whileHover={{ translateY: -2, scale: 1.02 }}
            className=" h-[190px] md:h-[225px] cursor-pointer flex flex-col px-3 py-6 justify-between bg-stone-800/20 border-cyan-300/30 border-solid border-[1px] rounded-xl">
            <div className="flex justify-between items-center h-[10%] w-full ">
                <div className="flex justify-start items-center gap-3  ">
                    <Image
                        src={myImage}
                        alt="Picture of the author"
                        className="rounded-full"
                        width={20}
                        height={20}
                    />
                    <h4 className="font-jetbrain text-sm md:text-base mb-1 text-white">
                        vineethere
                    </h4>
                </div>
                <div className="flex justify-center items-center gap-4">
                    {
                        project?.link && <Link href={project.link}><LinkIcon /></Link>
                    }
                    {
                        project?.github && <Link href={project.github}><Github /></Link>
                    }
                    {
                        project?.onProgress &&  <Tip tip="inProgess == true"><LoaderCircle color="#ffbe6f" className="animate-spin"/></Tip>
                    }

                </div>
            </div>
            <div>
                <h1 className="text-xl md:text-2xl font-grotesk mb-2">
                    <Tip tip={"h"}>{project.title}</Tip>
                </h1>
                <h3 className="text-base md:text-xl font-grotesk ">
                    {project.description}
                </h3>

            </div>
            <div className="flex justify-start items-center  gap-2 ">
            <div className="h-full w-[3%] flex justify-center items-center ">
             <div className="h-2 w-2 bg-cyan-300 rounded-full"></div>
            </div>
            <div>
            {
                    project.lang.map((lang, index) => {
                        return (
                 
              
                            <span key={index} className="text-sm md:text-base h-full font-grotesk text-green-300">{lang}{index == project.lang.length-1 ?'':',' } </span>
                      
                        )
                    })
                }
            </div>
                
            </div>


        </motion.div>
    )
}