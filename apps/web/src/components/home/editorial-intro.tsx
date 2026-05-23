"use client";

import { ImageReveal, StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

export default function EditorialIntro() {
	return (
		<section className="container mx-auto px-6 py-20 md:py-32 lg:py-40">
			<div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-24">
				<div className="flex flex-col justify-center">
					<ScrollReveal>
						<p className="mb-6 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
							Our Philosophy
						</p>
					</ScrollReveal>

					<StaggerText
						as="h2"
						className="max-w-2xl font-heading text-4xl leading-tight md:text-5xl lg:text-6xl"
						delay={0.1}
						text="We believe travel should feel like belonging"
					/>

					<ScrollReveal delay={0.2}>
						<p className="mt-8 max-w-lg font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
							Every journey we craft is an intimate conversation between you and
							Rajasthan. Not a package. Not a checklist. A personal narrative
							shaped around your rhythm, your curiosities, and the stories you
							carry home.
						</p>
					</ScrollReveal>

					<ScrollReveal delay={0.3}>
						<p className="mt-6 max-w-lg font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
							From the rose-gold dawn over Jaipur to the candlelit silence of a
							desert fort, we open doors that remain closed to most — because
							your experience deserves more than the ordinary.
						</p>
					</ScrollReveal>
				</div>

				<ScrollReveal className="relative" delay={0.2}>
					<ImageReveal
						alt="Rajasthan architecture detail"
						aspectRatio="3/4"
						className="rounded-lg"
						src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop"
					/>
				</ScrollReveal>
			</div>
		</section>
	);
}
