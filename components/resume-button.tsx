"use client";
export const ResumeButton = () => {
  return (
    <div
      className="bg-primary w-fit p-4 rounded-full flex justify-center items-center animate-spin-slow cursor-pointer absolute md:top-6 md:right-12 top-10 right-4"
      onClick={() => {
        console.log("clicked", process.env.NEXT_PUBLIC_RESUME_LINK);
        window.open(process.env.NEXT_PUBLIC_RESUME_LINK);
      }}
    >
      <p className=" text-sm md:text-xl">CV</p>
    </div>
  );
};
