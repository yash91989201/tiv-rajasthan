"use client";

import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "motion/react";
import { ParallaxImage, StaggerText } from "./motion-utils";

export default function HeroSection() {
	return (
		<section className="relative flex min-h-svh items-center justify-center overflow-hidden">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.3}
				src="https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2400&auto=format&fit=crop"
			/>

			<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

			<div className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
				<motion.p
					className="mb-6 font-sans text-sm text-white/80 uppercase tracking-[0.3em]"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					Private Journeys Through Rajasthan
				</motion.p>

				<StaggerText
					as="h1"
					className="max-w-4xl font-heading text-5xl text-white leading-tight md:text-7xl lg:text-8xl"
					delay={0.3}
					staggerDelay={0.08}
					text="Where Heritage Meets Hospitality"
				/>

				<motion.p
					className="mt-8 max-w-xl font-sans text-base text-white/70 leading-relaxed md:text-lg"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					Curated luxury experiences across the Desert Kingdom — from private
					palace dinners to heritage walks, designed for the discerning
					traveller.
				</motion.p>

				<motion.div
					className="mt-12 flex flex-col gap-4 sm:flex-row"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<a
						className="inline-flex items-center justify-center gap-1.5 bg-primary px-8 py-4 font-sans font-semibold text-primary-foreground text-sm uppercase tracking-widest transition-colors hover:bg-primary/80"
						href="/contact"
					>
						Design Your Journey
					</a>
					<a
						className="inline-flex items-center justify-center gap-1.5 border border-white/30 px-8 py-4 font-sans font-semibold text-sm text-white uppercase tracking-widest transition-colors hover:border-white/60 hover:bg-white/10"
						href="/destinations"
					>
						Explore Destinations
					</a>
				</motion.div>
			</div>

			<motion.div
				animate={{ y: [0, 10, 0] }}
				className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
				transition={{
					duration: 2,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
				}}
			>
				<IconChevronDown className="h-6 w-6 text-white/50" />
			</motion.div>
		</section>
	);
}
