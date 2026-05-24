"use client";

import { ParallaxImage } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import type { SeasonalAtmosphereSection } from "../types";
import SectionHeader from "./section-header";

interface SeasonalAtmosphereProps {
	data: SeasonalAtmosphereSection;
}

export default function SeasonalAtmosphere({ data }: SeasonalAtmosphereProps) {
	return (
		<section className="bg-background py-[clamp(5rem,11vw,11rem)]">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 max-w-3xl">
					<SectionHeader
						description={data.description}
						headline={data.headline}
						kicker={data.kicker}
					/>
				</div>

				<div className="space-y-6">
					{data.items.map((item, index) => (
						<ScrollReveal delay={index * 0.1} key={item.title}>
							<article className="group relative min-h-[clamp(22rem,42vw,34rem)] overflow-hidden">
								<ParallaxImage
									className="absolute inset-0"
									speed={0.18}
									src={item.image}
								/>
								<div className="absolute inset-0 bg-gradient-to-r from-foreground/88 via-foreground/52 to-foreground/18" />
								<div className="relative z-10 flex h-full flex-col justify-end p-[clamp(1.75rem,4vw,3rem)] lg:max-w-xl">
									<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.26em]">
										{item.season}
									</p>
									<h3 className="font-heading text-[clamp(2.2rem,4.5vw,4.2rem)] text-background leading-[0.88] tracking-[-0.04em]">
										{item.title}
									</h3>
									<p className="mt-4 max-w-md font-sans text-background/78 text-sm leading-relaxed md:text-base">
										{item.description}
									</p>
								</div>
							</article>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
