"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ParallaxImage, StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import { moodOverlayClass } from "../mood-utils";
import type { ClosingCTASection, DestinationMood } from "../types";

interface ClosingCTAProps {
	data: ClosingCTASection;
	mood: DestinationMood;
}

export default function ClosingCTA({ data, mood }: ClosingCTAProps) {
	return (
		<section className="relative min-h-[86vh] overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.26}
				src={data.image}
			/>
			<div className={`absolute inset-0 ${moodOverlayClass[mood]}`} />

			<div className="relative z-10 mx-auto grid min-h-[86vh] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12">
				<div className="lg:col-span-8 lg:col-start-2">
					{data.kicker ? (
						<ScrollReveal>
							<p className="mb-6 font-sans text-background/60 text-xs uppercase tracking-[0.3em]">
								{data.kicker}
							</p>
						</ScrollReveal>
					) : null}

					<StaggerText
						as="h2"
						className="max-w-5xl font-heading text-[clamp(3.8rem,9vw,9.5rem)] text-background leading-[0.84] tracking-[-0.055em]"
						delay={0.1}
						text={data.headline}
					/>
				</div>

				<div className="lg:col-span-4 lg:col-start-8 lg:self-end lg:pb-16">
					<ScrollReveal delay={0.2}>
						<p className="max-w-md border-background/18 border-t pt-6 font-sans text-background/72 text-base leading-relaxed md:text-lg">
							{data.description}
						</p>
					</ScrollReveal>

					<ScrollReveal className="mt-10" delay={0.3}>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
								href={data.primaryCta.href}
							>
								{data.primaryCta.label}
								<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
							</a>
							{data.secondaryCta ? (
								<a
									className="inline-flex items-center justify-center border border-background/28 px-8 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
									href={data.secondaryCta.href}
								>
									{data.secondaryCta.label}
								</a>
							) : null}
						</div>
					</ScrollReveal>

					{data.footnote ? (
						<ScrollReveal className="mt-10" delay={0.4}>
							<p className="font-sans text-background/45 text-xs tracking-[0.16em]">
								{data.footnote}
							</p>
						</ScrollReveal>
					) : null}
				</div>
			</div>
		</section>
	);
}
