import React from "react";
type SectionWrapperProps = {
  children: React.ReactNode;
};
export const SectionWrapper = ({ children }: SectionWrapperProps) => {
  return (
    <section className="mx-auto px-4 py-8 max-w-[1050px]">{children}</section>
  );
};
