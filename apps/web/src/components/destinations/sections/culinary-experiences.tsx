"use client";

import ScrollReveal from "@/components/home/scroll-reveal";
import type { CulinaryExperiencesSection } from "../types";
import SectionHeader from "./section-header";

interface CulinaryExperiencesProps {
	data: CulinaryExperiencesSection;
}

export default function CulinaryExperiences({
	data,
}: CulinaryExperiencesProps) {
	return (
		<section className="bg-muted py-[clamp(5rem,11vw,11rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-14 max-w-3xl">
					<SectionHeader
						description={data.description}
						headline={data.headline}
						kicker={data.kicker}
					/>
				</div>

				<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
					{data.items.map((item, index) => (
						<ScrollReveal delay={index * 0.1} key={item.title}>
							<article className="group flex h-full flex-col border border-foreground/10 bg-background">
								<div className="relative aspect-[4/3] overflow-hidden">
									<img
										alt={item.title}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={600}
										src={item.image}
										width={800}
									/>
								</div>
								<div className="flex flex-1 flex-col p-6">
									<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
										{item.label}
									</p>
									<h3 className="font-heading text-[clamp(1.8rem,3vw,2.6rem)] leading-[0.92] tracking-[-0.04em]">
										{item.title}
									</h3>
									<p className="mt-4 font-sans text-muted-foreground text-sm leading-relaxed">
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
