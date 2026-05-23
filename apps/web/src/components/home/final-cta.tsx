"use client";

import { ParallaxImage, StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

export default function FinalCTA() {
	return (
		<section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.3}
				src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400&auto=format&fit=crop"
			/>
			<div className="absolute inset-0 bg-black/50" />

			<div className="relative z-10 flex flex-col items-center px-4 text-center sm:px-6">
				<ScrollReveal>
					<p className="mb-6 font-sans text-sm text-white/70 uppercase tracking-[0.3em]">
						Begin Your Journey
					</p>
				</ScrollReveal>

				<StaggerText
					as="h2"
					className="max-w-3xl font-heading text-4xl text-white leading-tight md:text-5xl lg:text-6xl"
					delay={0.1}
					text="Let us design a journey that feels like yours"
				/>

				<ScrollReveal delay={0.2}>
					<p className="mt-6 max-w-lg font-sans text-base text-white/70 leading-relaxed md:text-lg">
						Speak with a travel designer about your vision, your pace, and the
						Rajasthan you want to discover. No templates. No pressure. Just a
						conversation.
					</p>
				</ScrollReveal>

				<ScrollReveal className="mt-12" delay={0.3}>
					<div className="flex flex-col gap-4 sm:flex-row">
						<a
							className="inline-flex items-center justify-center gap-1.5 bg-primary px-10 py-4 font-sans font-semibold text-primary-foreground text-sm uppercase tracking-widest transition-colors hover:bg-primary/80"
							href="/contact"
						>
							Speak With a Travel Designer
						</a>
						<a
							className="inline-flex items-center justify-center gap-1.5 border border-white/30 px-10 py-4 font-sans font-semibold text-sm text-white uppercase tracking-widest transition-colors hover:border-white/60 hover:bg-white/10"
							href="/itineraries"
						>
							Explore Journeys
						</a>
					</div>
				</ScrollReveal>

				<ScrollReveal className="mt-16" delay={0.4}>
					<p className="font-sans text-white/50 text-xs tracking-wider">
						Response within 24 hours · Complimentary consultation
					</p>
				</ScrollReveal>
			</div>
		</section>
	);
}
