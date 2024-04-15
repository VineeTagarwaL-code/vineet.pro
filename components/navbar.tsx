"use client";
import Navlinks from "@/constants/navlink";
import { usePathname } from "next/navigation";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export const Navbar = () => {
  let pathName = usePathname() || "/";
  if (pathName.includes("/writing/")) {
    pathName = "/writing";
  }

  const [hoveredPath, setHoveredPath] = useState<string | null>(pathName);

  return (
    <div className="md:flex justify-center items-center hidden ">
      <div className="rounded-full mb-12 z-[10000000]  backdrop-blur-md  px-16 py-6 mt-3 ">
        <nav className="flex gap-[100px] relative justify-start w-full z-[100]  rounded-lg">
          {Navlinks.map((item, index) => {
            const isActive = item.path === pathName;

            return (
              <Link
                spy={true}
                smooth={true}
                duration={500}
                to={item.to}
                key={item.path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in bg-transparent ${
                  isActive ? "text-zinc-100" : "text-zinc-400"
                }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.to)}
                onMouseLeave={() => setHoveredPath("top")}
              >
                <span
                  className={cn(
                    "font-jetbrain  text-xl",
                    `${item.path === hoveredPath ? "text-white" : "text-foreground"}`,
                  )}
                >
                  {item.name}
                </span>
                {item.to === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-[#CBA6F7]/70 rounded-full -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
