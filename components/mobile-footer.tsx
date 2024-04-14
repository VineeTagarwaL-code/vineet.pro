import { Me } from "@/assests/logos/me"
import { Work } from "@/assests/logos/work"
import { Home } from "@/assests/logos/home"
import { Link, animateScroll as scroll } from 'react-scroll';



const icons = [
    {
        icon: <Home />,
        to:"top",
    },
    {
        icon: <Me />,
        to:"bio",
    },
    {
        icon: <Work />,
        to:"work",
    

    },
]
export const MobileNavbar = () => {
    return (
        <div className="fixed bottom-0 z-[100000000000] flex flex-col md:hidden justify-evenly items-center py-4 bg-stone-800 rounded-tr-2xl  rounded-tl-2xl h-fit w-full">

            <div className="h-full flex justify-evenly items-center w-full ">
                {
                    icons.map((icon, index) => {
                        return (
                            <div key={index} className="flex justify-center items-center">
                               <Link  to={icon.to} spy={true} smooth={true} duration={500}>{icon.icon}</Link> 
                            </div>
                        )
                    })
                }
            </div>
          </div>
    )
}