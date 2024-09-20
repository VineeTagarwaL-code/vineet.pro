"use client";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { ResumeButton } from "@/components/resume-button";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Project } from "@/components/projects";
import { Footer } from "@/components/footer";
import { MobileNavbar } from "@/components/mobile-footer";
import { Cursor } from "@/components/ui/cursor";
import { Chat } from "@/components/chat";

export default function Home() {
  const [userCount, setUserCount] = useState(0);
  const [Messages, setMessage] = useState([
    {
      text: "Hello there ! ( ͡° ͜ʖ ͡°), \n For closing use chat icon in footer ( mobile )  ",
      isUser: false,
    },
  ]);
  const [showChat, setShowChat] = useState(true);
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!);

    socket.onmessage = (event) => {
      let data = event.data;
      data = JSON.parse(data);
      if (data.userCount) {
        setUserCount(data.userCount);
      }
      if (data.type === "message") {
        setMessage((prevMessages) => [
          ...prevMessages,
          { text: data.filteredMessage, isUser: false },
        ]);
      }
    };

    console.log("Hello there ! ( ͡° ͜ʖ ͡°) ");
    console.log(
      "I see you are lurking around looking for something, code is not open sourced yet but you can always reach out to me at vineetagarwal.now@gmail.com"
    );

    setWs(socket); // Save the WebSocket instance to state

    return () => {
      socket.close();
    };
  }, []);

  const sendMessage = (input: string) => {
    if (input.trim() && ws) {
      ws.send(input);
      setMessage((prevMessages) => [
        ...prevMessages,
        { text: input, isUser: true },
      ]);
    }
  };

  return (
    <main className="min-h-screen relative scroll-smooth select-none">
      {/* <Chat
        userCount={userCount}
        Messages={Messages}
        sendMessage={sendMessage}
        showChat={showChat}
      /> */}
      <Navbar />
      <ResumeButton />
      <Introduction />
      <Skills />
      <Experience />
      <Project />
      <Footer />
      <MobileNavbar setshowChat={setShowChat} showChat={showChat} />
      <Cursor cursorClass="border-purple-500 hidden md:inline-block" />
    </main>
  );
}
