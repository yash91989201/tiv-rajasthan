"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ParallaxImage, StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import { moodAccentClass, moodOverlayClass } from "../mood-utils";
import type { DestinationHeroSection, DestinationMood } from "../types";

interface DestinationHeroProps {
	data: DestinationHeroSection;
	mood: DestinationMood;
}

export default function DestinationHero({ data, mood }: DestinationHeroProps) {
	return (
		<section className="relative min-h-svh overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.26}
				src={data.image}
			/>

			<div className={`absolute inset-0 ${moodOverlayClass[mood]}`} />
			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />

			<div className="relative z-10 mx-auto grid min-h-svh max-w-[1600px] grid-cols-1 items-end px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:pb-16">
				<div className="pb-[10vh] lg:col-span-8 lg:col-start-1">
					<motion.p
						className="mb-5 max-w-md font-sans text-background/72 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{data.region}
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-5xl font-heading text-[clamp(4.4rem,11vw,10rem)] text-background leading-[0.84] tracking-[-0.055em]"
						delay={0.3}
						staggerDelay={0.07}
						text={data.title}
					/>

					<motion.p
						className={`mt-4 max-w-xl font-sans text-lg italic tracking-wide md:text-xl ${moodAccentClass[mood]}`}
						initial={{ opacity: 0, y: 16 }}
						transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						{data.subtitle}
					</motion.p>

					{data.quickFacts && data.quickFacts.length > 0 ? (
						<motion.dl
							className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-background/18 border-t pt-6"
							initial={{ opacity: 0, y: 20 }}
							transition={{
								duration: 0.8,
								delay: 0.85,
								ease: [0.22, 1, 0.36, 1],
							}}
							viewport={{ once: true }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							{data.quickFacts.map((fact) => (
								<div key={fact.label}>
									<dt className="font-sans text-[0.625rem] text-background/50 uppercase tracking-[0.24em]">
										{fact.label}
									</dt>
									<dd className="mt-1 font-sans text-background/85 text-sm">
										{fact.value}
									</dd>
								</div>
							))}
						</motion.dl>
					) : null}
				</div>

				<motion.div
					className="border-background/18 border-t pt-6 lg:col-span-4 lg:col-start-9 lg:mb-[12vh]"
					initial={{ opacity: 0, y: 24 }}
					transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="max-w-md font-sans text-background/72 text-base leading-relaxed md:text-lg">
						{data.description}
					</p>
					{data.cta ? (
						<ScrollReveal className="mt-9" delay={0.15}>
							<a
								className="inline-flex items-center justify-center border border-background/28 px-7 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
								href={data.cta.href}
							>
								{data.cta.label}
								<IconArrowNarrowRight
									className="ml-2 h-4 w-4"
									strokeWidth={1.5}
								/>
							</a>
						</ScrollReveal>
					) : null}
				</motion.div>
			</div>
		</section>
	);
}
