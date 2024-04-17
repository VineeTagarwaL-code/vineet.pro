"use client";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
type tipprops = {
  tip: string;
  name?: string;
  children?: React.ReactNode;
  className?: string;
};
export const Tip = ({ tip, name, children, className }: tipprops) => {
  const [hovered, setHovered] = useState(false);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig,
  );
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig,
  );
  return (
    <div
      className={cn("relative group w-fit inline-block", className)}
      onMouseEnter={() => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.6 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              stiffness: 260,
              damping: 20,
            },
          }}
          exit={{ opacity: 0, scale: 0.6 }}
          style={{
            translateX: translateX,
            rotate: rotate,
            zIndex: 1000,
            whiteSpace: "nowrap",
          }}
          className="flex justify-center items-center"
        >
          <div className="border-solid border-2 shadow-2xl border-red-300 flex justify-center items-center px-4 absolute top-[-50px] z-[10] bg-[#ffbe6f] rounded-xl ml-[1px]  ">
            <span className="text-stone-800 font-grotesk text-base">{tip}</span>
            <div className="w-0 h-0 absolute top-[30px] left-1/2 transform -translate-x-1/2 border-l-[10px] border-l-transparent border-t-[15px] border-t-[#ffbe6f] border-r-[10px] border-r-transparent"></div>
          </div>
        </motion.div>
      )}

      <motion.div
        className="cursor-pointer z-[9] text-[#ffbe6f] rounded-xl w-fit"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {children ? children : name}
      </motion.div>
    </div>
  );
};
