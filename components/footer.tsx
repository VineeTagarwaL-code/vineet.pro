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
					<Link
						href="https://buymeacoffee.com/vineetagarwal"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center  r gap-2 bg-[#FFDD00] hover:bg-[#ffdd00e0] text-black font-medium px-4 py-2 rounded-full transition-colors"
					>
						<span>☕</span>
						<span>Buy me a coffee</span>
					</Link>
				</div>
				<div className="flex justify-center items-center gap-4">
					<div className="text-foreground font-grotesk text-xl">
						Made with <Tip tip="by vineet">{"<"}3</Tip>, Thank You!
					</div>
				</div>
			</footer>
		</SectionWrapper>
	);
};
