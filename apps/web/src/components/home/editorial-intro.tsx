"use client";

import { ImageReveal, StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

export default function EditorialIntro() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,11rem)]">
			<div className="pointer-events-none absolute top-12 left-1/2 hidden -translate-x-1/2 font-heading text-[22vw] text-muted/70 leading-none tracking-[-0.08em] lg:block">
				Belong
			</div>

			<div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-5 lg:col-start-2 lg:pt-24">
					<ScrollReveal>
						<p className="mb-6 font-sans text-muted-foreground text-xs uppercase tracking-[0.26em]">
							Our Philosophy
						</p>
					</ScrollReveal>

					<StaggerText
						as="h2"
						className="max-w-2xl font-heading text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em]"
						delay={0.1}
						text="Travel should feel privately held"
					/>
				</div>

				<ScrollReveal className="lg:col-span-4 lg:col-start-8" delay={0.12}>
					<div className="relative">
						<div className="absolute -top-6 -left-6 h-28 w-28 bg-primary/15" />
						<ImageReveal
							alt="Carved Rajasthan palace arch with warm stone detail"
							aspectRatio="3/4"
							className="relative"
							src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop"
						/>
					</div>
				</ScrollReveal>

				<div className="lg:col-span-4 lg:col-start-3 lg:-mt-28">
					<ScrollReveal delay={0.2}>
						<p className="max-w-lg font-sans text-lg text-muted-foreground leading-relaxed md:text-xl">
							Every journey is an intimate conversation between you and the
							landscape. Not a package. Not a checklist. A personal narrative
							shaped around your pace, curiosities, and rituals of rest.
						</p>
					</ScrollReveal>
				</div>

				<div className="lg:col-span-3 lg:col-start-8 lg:-mt-10">
					<ScrollReveal delay={0.3}>
						<p className="max-w-sm border-foreground/10 border-t pt-6 font-sans text-muted-foreground text-sm leading-relaxed">
							From rose-gold dawn in Jaipur to candlelit silence inside a desert
							fort, we open the doors that make a place feel entrusted, not
							consumed.
						</p>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
