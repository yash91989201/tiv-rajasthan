"use client";

import { ImageReveal, StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import type { EditorialIntroSection } from "../types";

interface DestinationOverviewProps {
	data: EditorialIntroSection;
}

export default function DestinationOverview({ data }: DestinationOverviewProps) {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,11rem)]">
			{data.backgroundWord ? (
				<div className="pointer-events-none absolute top-12 left-1/2 hidden -translate-x-1/2 font-heading text-[22vw] text-muted/70 leading-none tracking-[-0.08em] lg:block">
					{data.backgroundWord}
				</div>
			) : null}

			<div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-5 lg:col-start-2 lg:pt-24">
					{data.kicker ? (
						<ScrollReveal>
							<p className="mb-6 font-sans text-muted-foreground text-xs uppercase tracking-[0.26em]">
								{data.kicker}
							</p>
						</ScrollReveal>
					) : null}

					<StaggerText
						as="h2"
						className="max-w-2xl font-heading text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em]"
						delay={0.1}
						text={data.headline}
					/>
				</div>

				<ScrollReveal className="lg:col-span-4 lg:col-start-8" delay={0.12}>
					<div className="relative">
						<div className="absolute -top-6 -left-6 h-28 w-28 bg-primary/15" />
						<ImageReveal
							alt={data.primaryImage.alt}
							aspectRatio="3/4"
							className="relative"
							src={data.primaryImage.src}
						/>
					</div>
				</ScrollReveal>

				<div className="lg:col-span-4 lg:col-start-3 lg:-mt-28">
					<ScrollReveal delay={0.2}>
						<p className="max-w-lg font-sans text-lg text-muted-foreground leading-relaxed md:text-xl">
							{data.body}
						</p>
					</ScrollReveal>
				</div>

				{data.aside ? (
					<div className="lg:col-span-3 lg:col-start-8 lg:-mt-10">
						<ScrollReveal delay={0.3}>
							<p className="max-w-sm border-foreground/10 border-t pt-6 font-sans text-muted-foreground text-sm leading-relaxed">
								{data.aside}
							</p>
						</ScrollReveal>
					</div>
				) : null}
			</div>
		</section>
	);
}
