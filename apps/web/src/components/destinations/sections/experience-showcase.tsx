"use client";

import type { ExperienceShowcaseSection } from "../types";
import SectionHeader from "./section-header";

interface ExperienceShowcaseProps {
	data: ExperienceShowcaseSection;
}

export default function ExperienceShowcase({ data }: ExperienceShowcaseProps) {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,11vw,11rem)]">
			<div className="absolute top-0 right-0 h-64 w-64 bg-primary/10" />
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-start">
					<div className="lg:col-span-8">
						<SectionHeader
							description={data.description}
							headline={data.headline}
							kicker={data.kicker}
						/>
					</div>
				</div>

				<div className="experience-cinematic-notes">
					{data.items.map((experience) => (
						<article className="experience-card group" key={experience.title}>
							<img
								alt={experience.title}
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								height={1000}
								src={experience.image}
								width={1200}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/94 via-foreground/42 to-transparent" />
							<div className="experience-panel">
								<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.24em]">
									{experience.label}
								</p>
								<h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] text-background leading-[0.88] tracking-[-0.045em]">
									{experience.title}
								</h3>
								<p className="mt-4 max-w-md font-sans text-sm text-white leading-relaxed">
									{experience.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
