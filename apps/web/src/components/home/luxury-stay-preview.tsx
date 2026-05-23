"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const properties = [
	{
		name: "Samode Palace",
		location: "Samode, near Jaipur",
		description:
			"A 475-year-old palace converted into an intimate luxury hotel. Frescoed courtyards, mirror-work halls, and private rooftop dinners.",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Suryagarh",
		location: "Jaisalmer",
		description:
			"A desert fort hotel where every corridor tells a story. Private thar expeditions, folk performances, and starlit courtyard dining.",
		image:
			"https://images.unsplash.com/photo-1529257414772-4d3f55a31401?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Taj Lake Palace",
		location: "Udaipur",
		description:
			"Floating marble palace on Lake Pichola. Exclusive boat transfers, rooftop terraces, and the most romantic address in India.",
		image:
			"https://images.unsplash.com/photo-1566837459921-1e92417a8049?q=80&w=1200&auto=format&fit=crop",
	},
] as const;

export default function LuxuryStayPreview() {
	return (
		<section className="container mx-auto px-6 py-20 md:py-32 lg:py-40">
			<div className="mb-20 text-center">
				<ScrollReveal>
					<p className="mb-4 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
						Hospitality
					</p>
				</ScrollReveal>
				<StaggerText
					as="h2"
					className="mx-auto max-w-3xl font-heading text-4xl md:text-5xl lg:text-6xl"
					text="Places that stay with you"
				/>
				<ScrollReveal delay={0.2}>
					<p className="mx-auto mt-6 max-w-xl font-sans text-base text-muted-foreground">
						We handpick stays that transform travel into memory — heritage
						palaces, boutique forts, and intimate desert camps.
					</p>
				</ScrollReveal>
			</div>

			<div className="flex flex-col gap-16">
				{properties.map((property, index) => (
					<ScrollReveal
						className="group"
						delay={index * 0.15}
						key={property.name}
					>
						<div className="grid items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
							<div className={index % 2 === 1 ? "md:order-2" : ""}>
								<div className="relative aspect-[4/3] overflow-hidden rounded-lg transition-shadow duration-700 group-hover:shadow-2xl">
									<img
										alt={property.name}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={600}
										src={property.image}
										width={800}
									/>
								</div>
							</div>

							<div
								className={`flex flex-col justify-center ${
									index % 2 === 1 ? "md:order-1" : ""
								}`}
							>
								<p className="mb-2 font-sans text-muted-foreground text-sm uppercase tracking-[0.15em]">
									{property.location}
								</p>
								<h3 className="mb-4 font-heading text-3xl md:text-4xl">
									{property.name}
								</h3>
								<p className="max-w-md font-sans text-base text-muted-foreground leading-relaxed">
									{property.description}
								</p>
							</div>
						</div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
