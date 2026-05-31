"use client";

import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ParallaxImage, StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

export default function ClosingCTA() {
	return (
		<section className="relative min-h-[86vh] overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.26}
				src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400&auto=format&fit=crop"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.9)_0%,oklch(0.153_0.006_107.1/0.62)_50%,oklch(0.153_0.006_107.1/0.24)_100%)]" />
			<div className="absolute top-10 right-8 hidden font-heading text-[18vw] text-background/10 leading-none tracking-[-0.08em] lg:block">
				Begin
			</div>

			<div className="relative z-10 mx-auto grid min-h-[86vh] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12">
				<div className="lg:col-span-8 lg:col-start-2">
					<ScrollReveal>
						<p className="mb-6 font-sans text-background/60 text-xs uppercase tracking-[0.3em]">
							Begin privately
						</p>
					</ScrollReveal>

					<StaggerText
						as="h2"
						className="max-w-5xl font-heading text-[clamp(3.8rem,9vw,9.5rem)] text-background leading-[0.84] tracking-[-0.055em]"
						delay={0.1}
						text="Tell us the Rajasthan you keep returning to in your mind"
					/>
				</div>

				<div className="lg:col-span-4 lg:col-start-8 lg:self-end lg:pb-16">
					<ScrollReveal delay={0.2}>
						<p className="max-w-md border-background/18 border-t pt-6 font-sans text-background/72 text-base leading-relaxed md:text-lg">
							Share the moments you want to protect — a sunrise over the Thar, a private textile workshop, an unhurried meal in a restored haveli. We will shape a journey around those quiet priorities, not a checklist.
						</p>
					</ScrollReveal>

					<ScrollReveal className="mt-10" delay={0.3}>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
								href="/contact"
							>
								Speak with a designer
								<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
							</a>
							<a
								className="inline-flex items-center justify-center border border-background/28 px-8 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
								href="/itineraries"
							>
								Browse the routes
							</a>
						</div>
					</ScrollReveal>

					<ScrollReveal className="mt-10" delay={0.4}>
						<p className="font-sans text-background/45 text-xs tracking-[0.16em]">
							A considered reply within 24 hours. Complimentary consultation.
						</p>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
