import { Eye, Globe } from "lucide-react";

export const ChatHeader = ({ userCount }: { userCount: number }) => {
  return (
    <div className="bg-[#181825] shadow-3xl h-fit w-full md:w-[350px] px-3 py-2 rounded-t-xl md:mx-2 flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <Eye size={24} />
        {userCount}
        <p> • Public Chat</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <div className="h-2 w-2 bg-orange-400 block rounded-full " />
        <div className="h-2 w-2 bg-green-400 block rounded-full" />
        <div className="h-2 w-2 bg-red-400 block rounded-full cursor-pointer" />
      </div>
    </div>
  );
};
