"use client";

import { IconArrowNarrowRight, IconChevronDown } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ParallaxImage, StaggerText } from "./motion-utils";

export default function HeroSection() {
	return (
		<section className="relative min-h-svh overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.28}
				src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2400&auto=format&fit=crop"
			/>

			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.86)_0%,oklch(0.153_0.006_107.1/0.54)_43%,oklch(0.153_0.006_107.1/0.18)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
			<div className="absolute top-[12vh] right-[-18vw] hidden font-heading text-[24vw] text-background/10 leading-none lg:block">
				Raj
			</div>

			<div className="relative z-10 mx-auto grid min-h-svh max-w-[1600px] grid-cols-1 items-end px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:pb-16">
				<div className="pb-[10vh] lg:col-span-7 lg:col-start-1">
					<motion.p
						className="mb-5 max-w-md font-sans text-background/72 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Private Rajasthan, edited with restraint
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-5xl font-heading text-[clamp(4.4rem,12vw,11rem)] text-background leading-[0.82] tracking-[-0.055em]"
						delay={0.3}
						staggerDelay={0.07}
						text="Enter the royal interior"
					/>
				</div>

				<motion.div
					className="border-background/18 border-t pt-6 lg:col-span-4 lg:col-start-9 lg:mb-[12vh]"
					initial={{ opacity: 0, y: 24 }}
					transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="max-w-md font-sans text-background/72 text-base leading-relaxed md:text-lg">
						A quieter way through Rajasthan: palace rooms opened after hours,
						desert dinners timed to the last amber light, and journeys composed
						around your natural pace.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
						<a
							className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
							href="/contact"
						>
							Design Your Journey
							<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
						</a>
						<a
							className="inline-flex items-center justify-center border border-background/28 px-7 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
							href="/destinations"
						>
							View the Route
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div
				animate={{ y: [0, 10, 0] }}
				className="absolute right-6 bottom-8 z-10 sm:right-10"
				transition={{
					duration: 2.4,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
				}}
			>
				<IconChevronDown className="h-6 w-6 text-background/50" />
			</motion.div>
		</section>
	);
}
