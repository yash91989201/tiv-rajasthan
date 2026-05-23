"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const destinations = [
	{
		name: "Jaipur",
		subtitle: "The Pink City",
		description:
			"Where maharaja palaces meet living craft traditions. Explore the Hawa Mahal at dawn, wander through centuries-old bazaars, and dine in restored royal residences.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Udaipur",
		subtitle: "City of Lakes",
		description:
			"Venice of the East, reimagined. Float across Lake Pichola at sunset, explore island palaces, and discover why Udaipur has seduced travellers for centuries.",
		image:
			"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Jaisalmer",
		subtitle: "The Golden Fort",
		description:
			"A sandstone citadel rising from the Thar Desert. Sleep under stars in luxury desert camps, explore living fort lanes, and watch the dunes turn gold at dusk.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Ranthambore",
		subtitle: "Wilderness & Heritage",
		description:
			"Where tigers roam among ancient ruins. A rare blend of wildlife drama and archaeological wonder — dawn safaris, fort ruins, and the raw beauty of nature.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

export default function FeaturedDestinations() {
	return (
		<section className="bg-secondary/30 py-20 md:py-32 lg:py-40">
			<div className="container mx-auto px-6">
				<div className="mb-12 text-center sm:mb-20">
					<ScrollReveal>
						<p className="mb-4 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
							Destinations
						</p>
					</ScrollReveal>
					<StaggerText
						as="h2"
						className="mx-auto max-w-3xl font-heading text-4xl md:text-5xl lg:text-6xl"
						text="Four worlds, one kingdom"
					/>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:gap-12">
					{destinations.map((destination, index) => (
						<ScrollReveal
							className="group relative"
							delay={index * 0.15}
							key={destination.name}
						>
							<div className="relative aspect-[4/5] overflow-hidden rounded-lg transition-shadow duration-700 group-hover:shadow-2xl">
								<img
									alt={destination.name}
									className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									height={1000}
									src={destination.image}
									width={800}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

								<div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8">
									<p className="mb-2 font-sans text-sm text-white/70 uppercase tracking-[0.2em]">
										{destination.subtitle}
									</p>
									<h3 className="mb-2 font-heading text-2xl text-white sm:mb-3 sm:text-3xl md:text-4xl">
										{destination.name}
									</h3>
									<p className="max-w-sm font-sans text-sm text-white/80 leading-relaxed">
										{destination.description}
									</p>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
