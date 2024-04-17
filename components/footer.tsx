import { SectionWrapper } from "./section-wrapper";
import { Github } from "@/assests/logos/github";
import { Email } from "@/assests/logos/email";
import { Discord } from "@/assests/logos/discord";
import { Tip } from "./ui/tip";
import Link from "next/link";

const FooterLink = [
  {
    icon: <Email />,
    link: "",
    tip: "Contact me",
  },
  {
    icon: <Discord />,
    link: "",
    tip: "vineethere",
  },
  {
    icon: <Github />,
    link: "",
    tip: "Check out my Github",
  },
];
export const Footer = () => {
  return (
    <SectionWrapper>
      <footer className=" text-white flex flex-col gap-4 md:gap-0  md:flex-row justify-between border-t-[1px] pt-6  md:py-8 mt-12 border-cyan-200/10 border-solid rounded-md">
        <div className="flex justify-center items-center gap-12  ">
          {FooterLink.map((link, index) => {
            return (
              <Tip tip={link.tip} key={index}>
                <Link href={link.link}>{link.icon}</Link>
              </Tip>
            );
          })}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-foreground font-grotesk text-xl">
            Made with <Tip tip="by vineet">{"<"}3</Tip>, Thank You!
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};
