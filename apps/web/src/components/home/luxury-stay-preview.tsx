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
				<div className="stay-horizontal-cinema">
					<div className="stay-header">
						<div>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">Hospitality</p>
							<h2 className="font-heading text-[clamp(3.2rem,6.6vw,7.1rem)] leading-[0.84] tracking-[-0.055em]">Sleep inside the story</h2>
						</div>
						<p className="max-w-md font-sans text-base text-muted-foreground leading-relaxed">We choose rooms for atmosphere, not category. The right stay changes how a destination behaves around you.</p>
					</div>
					<div className="stay-rail">
						{properties.map((property) => (
							<article className="stay-card group" key={property.name}>
								<div>
									<p className="mb-3 font-sans text-muted-foreground text-xs uppercase tracking-[0.22em]">{property.location}</p>
									<h3 className="font-heading text-[clamp(2.3rem,4vw,4.9rem)] leading-[0.86] tracking-[-0.05em]">{property.name}</h3>
								</div>
								<div className="stay-image relative">
									<img alt={property.name} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" height={900} src={property.image} width={720} />
								</div>
								<p className="font-sans text-muted-foreground text-sm leading-relaxed">{property.description}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
