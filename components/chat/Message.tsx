import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export const Message = ({
  Messages,
  sendMessage,
}: {
  Messages: { text: string; isUser: boolean }[]; // Updated to include isUser flag
  sendMessage: (input: string) => void;
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom whenever a new message is added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [Messages]);

  return (
    <div className="px-3 py-4 bg-gray-900/90 rounded-b-xl  w-[250px] md:w-[350px] ">
      <div className="max-h-[400px] overflow-y-scroll">
        {Messages.map((msg, index) => (
          <div
            className={cn("w-full flex", {
              "justify-start": !msg.isUser,
              "justify-end": msg.isUser,
            })}
            key={index}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`px-5 py-1 w-fit rounded-2xl mb-3  ${
                msg.isUser
                  ? "bg-gray-600 " // Messages sent by the user
                  : "bg-gray-800 " // Messages received
              } text-sky-200/95`}
            >
              {msg.text === "" ? "Hello there ! ( ͡° ͜ʖ ͡°) " : msg.text}
            </motion.div>
          </div>
        ))}
        {/* This div will ensure the scroll is to the bottom */}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex justify-center items-center relative">
        <input
          type="text"
          className="bg-white/20 placeholder-white w-full  h-8 rounded-xl px-3 py-1 mt-3 text-white outline-none  "
          placeholder="Type a message..."
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage(e.currentTarget.value);
              e.currentTarget.value = ""; // Clear input after sending
            }
          }}
        />
        <Send
          size={18}
          className="absolute right-4 top-5 rotate-45 text-white cursor-pointer"
          onClick={() => {
            const inputElement = document.querySelector(
              "input",
            ) as HTMLInputElement;
            sendMessage(inputElement.value);
            inputElement.value = ""; // Clear input after sending
          }}
        />
      </div>
    </div>
  );
};
