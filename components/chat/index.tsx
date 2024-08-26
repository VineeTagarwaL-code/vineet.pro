import { cn } from "@/lib/utils";
import { Message } from "./Message";
import { ChatHeader } from "./header";
import { motion } from "framer-motion";
export const Chat = ({
  userCount,
  Messages,
  showChat,
  sendMessage,
}: {
  userCount: number;
  Messages: any[];
  showChat: boolean;
  sendMessage: (input: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: showChat ? 100 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "h-[100vh] absolute w-full  top-0      md:block",
        showChat && "block",
      )}
    >
      <div className="h-full w-full relative ">
        <div className=" bottom-20 md:bottom-0 right-0 fixed px-3 py-2 flex flex-col justify-center items-center z-[9999]">
          <ChatHeader userCount={userCount} />
          <Message Messages={Messages} sendMessage={sendMessage} />
        </div>
      </div>
    </motion.div>
  );
};
