"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ParallaxImage, StaggerText } from "@/components/home/motion-utils";

export default function ItinerariesHero() {
	return (
		<section className="relative min-h-[78vh] overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.24}
				src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2400&auto=format&fit=crop"
			/>

			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.88)_0%,oklch(0.153_0.006_107.1/0.52)_45%,oklch(0.153_0.006_107.1/0.18)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-foreground via-foreground/40 to-transparent" />
			<div className="absolute top-[14vh] right-[-14vw] hidden font-heading text-[22vw] text-background/10 leading-none lg:block">
				Journeys
			</div>

			<div className="relative z-10 mx-auto grid min-h-[78vh] max-w-[1600px] grid-cols-1 items-end px-6 pb-14 sm:px-10 lg:grid-cols-12 lg:pb-20">
				<div className="pb-[10vh] lg:col-span-7 lg:col-start-1">
					<motion.p
						className="mb-5 max-w-md font-sans text-background/72 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{ opacity: 0, y: 20 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						viewport={{ once: true }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Curated journeys through Rajasthan
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-5xl font-heading text-[clamp(4rem,11vw,10rem)] text-background leading-[0.84] tracking-[-0.055em]"
						delay={0.3}
						staggerDelay={0.06}
						text="Every route leaves something out on purpose"
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
						Handcrafted itineraries through palaces, deserts, and timeless
						cities. Each journey is structured, then adjusted around your pace.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
						<a
							className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
							href="/contact"
						>
							Begin the conversation
							<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
						</a>
						<a
							className="inline-flex items-center justify-center border border-background/28 px-7 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
							href="#itineraries"
						>
							Explore the routes
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
