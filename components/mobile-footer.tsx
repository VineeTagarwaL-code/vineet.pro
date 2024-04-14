"use client"
import { Me } from "@/assests/logos/me";
import { Work } from "@/assests/logos/work";
import { Home } from "@/assests/logos/home";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
const icons = [
  {
    icon: <Home />,
    to: "top",
  },
  {
    icon: <Me />,
    to: "bio",
  },
  {
    icon: <Work />,
    to: "work",
  },
];
export const MobileNavbar = () => {
  const [selected, setSelected] = useState<string>("top");
  const handler = (string:any )=>{
    setSelected(string)
  }

  return (
    <div className="fixed bottom-0 z-[100000000000] flex flex-col md:hidden justify-evenly items-center py-4  bg-stone-800 rounded-tr-2xl  rounded-tl-2xl h-fit w-full">
      <div className="h-full flex justify-evenly items-center w-full ">
        {icons.map((icon, index) => {
          return (
            <div key={index} className={`flex cursor-pointer justify-center items-center p-2 rounded-full ${selected == icon.to ? "bg-stone-600" :""}`} >
              <Link to={icon.to} spy={true} smooth={true} duration={500} onClick={()=> handler(icon.to)}>
                {icon.icon}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
