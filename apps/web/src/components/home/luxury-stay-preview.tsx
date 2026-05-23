"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const properties = [
	{
		name: "Samode Palace",
		location: "Samode, near Jaipur",
		description:
			"A 475-year-old palace with frescoed courtyards, mirror-work halls, and private rooftop dinners above the village lights.",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Suryagarh",
		location: "Jaisalmer",
		description:
			"A desert fort hotel where corridors hold shadow, music, and long Thar expeditions that end around a courtyard table.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Taj Lake Palace",
		location: "Udaipur",
		description:
			"A floating marble address on Lake Pichola, approached by boat and best understood from its quiet terraces at evening.",
		image:
			"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

export default function LuxuryStayPreview() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:sticky lg:top-24 lg:col-span-4 lg:h-fit">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Hospitality
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="font-heading text-[clamp(3.2rem,7vw,7rem)] leading-[0.88] tracking-[-0.05em]"
							text="Sleep inside the story"
						/>
						<ScrollReveal delay={0.18}>
							<p className="mt-8 max-w-sm font-sans text-base text-muted-foreground leading-relaxed">
								We choose rooms for atmosphere, not category. The right stay
								changes how a destination behaves around you.
							</p>
						</ScrollReveal>
					</div>

					<div className="space-y-10 lg:col-span-7 lg:col-start-6">
						{properties.map((property, index) => (
							<ScrollReveal delay={index * 0.12} key={property.name}>
								<article className="group grid gap-6 border-foreground/10 border-t pt-8 md:grid-cols-8 md:items-end">
									<div className="relative aspect-[4/5] overflow-hidden md:col-span-5">
										<img
											alt={property.name}
											className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											height={900}
											src={property.image}
											width={720}
										/>
									</div>

									<div className="md:col-span-3 md:pb-8">
										<p className="mb-3 font-sans text-muted-foreground text-xs uppercase tracking-[0.22em]">
											{property.location}
										</p>
										<h3 className="font-heading text-[clamp(2.5rem,5vw,5.2rem)] leading-[0.85] tracking-[-0.05em]">
											{property.name}
										</h3>
										<p className="mt-5 font-sans text-muted-foreground text-sm leading-relaxed">
											{property.description}
										</p>
									</div>
								</article>
							</ScrollReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
