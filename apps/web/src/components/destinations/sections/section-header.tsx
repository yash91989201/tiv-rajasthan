"use client";

import { StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";

interface SectionHeaderProps {
	className?: string;
	delay?: number;
	description?: string;
	headline: string;
	kicker?: string;
}

export default function SectionHeader({
	kicker,
	headline,
	description,
	className = "",
	delay = 0,
}: SectionHeaderProps) {
	return (
		<div className={className}>
			{kicker ? (
				<ScrollReveal>
					<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
						{kicker}
					</p>
				</ScrollReveal>
			) : null}
			<StaggerText
				as="h2"
				className="font-heading text-[clamp(3.2rem,7vw,7.5rem)] leading-[0.88] tracking-[-0.055em]"
				delay={delay}
				text={headline}
			/>
			{description ? (
				<ScrollReveal className="mt-6 max-w-xl" delay={0.16}>
					<p className="font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
						{description}
					</p>
				</ScrollReveal>
			) : null}
		</div>
	);
}
