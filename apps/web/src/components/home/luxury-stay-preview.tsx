"use client";

const properties = [
	{
		name: "Samode Palace",
		location: "Samode, near Jaipur",
		description:
			"A 475-year-old palace where frescoed courtyards cool after sunset, mirror-work halls glow softly, and dinner can move to the roof above the village.",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Suryagarh",
		location: "Jaisalmer",
		description:
			"A desert fort hotel of deep corridors, evening music, and Thar drives that return you to a courtyard table before the lamps are lit.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Taj Lake Palace",
		location: "Udaipur",
		description:
			"A marble address set on Lake Pichola, reached by boat and understood slowly from a terrace when the water turns silver.",
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
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Where you stay
							</p>
							<h2 className="font-heading text-[clamp(3.2rem,6.6vw,7.1rem)] leading-[0.84] tracking-[-0.055em]">
								The room is part of the itinerary
							</h2>
						</div>
						<p className="max-w-md font-sans text-base text-muted-foreground leading-relaxed">
							A hotel is never just the place between excursions. It decides
							your mornings, your silences, and the way a city enters the room.
						</p>
					</div>
					<div className="stay-rail">
						{properties.map((property) => (
							<article className="stay-card group" key={property.name}>
								<div>
									<p className="mb-3 font-sans text-primary/88 text-xs uppercase tracking-[0.22em]">
										{property.location}
									</p>
									<h3 className="font-heading text-[clamp(2.3rem,4vw,4.9rem)] leading-[0.86] tracking-[-0.05em]">
										{property.name}
									</h3>
								</div>
								<div className="stay-image relative">
									<img
										alt={property.name}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={900}
										src={property.image}
										width={720}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-foreground/46 via-transparent to-primary/14" />
								</div>
								<p className="font-sans text-primary/90 text-sm leading-relaxed">
									{property.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
