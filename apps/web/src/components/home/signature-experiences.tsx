"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const experiences = [
	{
		title: "Private Palace Dining",
		description:
			"Dine by candlelight in centuries-old courtyards, where royal recipes are served on silver thali by descendants of palace kitchens.",
		image:
			"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
		featured: true,
	},
	{
		title: "Desert Camps",
		description:
			"Luxury tents beneath infinite stars. Folk music, Rajasthani cuisine, and the silence of the Thar at midnight.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
		featured: true,
	},
	{
		title: "Heritage Walks",
		description:
			"Intimate guided journeys through living forts and havelis with historians and local artisans.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
		featured: false,
	},
	{
		title: "Luxury Safaris",
		description:
			"Private dawn and dusk game drives in Ranthambore with expert naturalists and premium vehicles.",
		image:
			"https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
		featured: false,
	},
	{
		title: "Wellness Retreats",
		description:
			"Ancient Ayurvedic therapies and yoga in palace settings overlooking lakes and gardens.",
		image:
			"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1200",
		featured: false,
	},
] as const;

export default function SignatureExperiences() {
	const featured = experiences.filter((e) => e.featured);
	const standard = experiences.filter((e) => !e.featured);

	return (
		<section className="container mx-auto px-6 py-20 md:py-32 lg:py-40">
			<div className="mb-12 text-center sm:mb-20">
				<ScrollReveal>
					<p className="mb-4 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
						Experiences
					</p>
				</ScrollReveal>
				<StaggerText
					as="h2"
					className="mx-auto max-w-3xl font-heading text-4xl md:text-5xl lg:text-6xl"
					text="Experiences, not itineraries"
				/>
				<ScrollReveal delay={0.2}>
					<p className="mx-auto mt-6 max-w-xl font-sans text-base text-muted-foreground">
						Each moment is designed to feel personal, unscripted, and
						unforgettable.
					</p>
				</ScrollReveal>
			</div>

			<div className="mb-8 grid gap-8 md:grid-cols-2">
				{featured.map((exp, index) => (
					<ScrollReveal
						className="group relative"
						delay={index * 0.15}
						key={exp.title}
					>
						<div className="relative aspect-[16/10] overflow-hidden rounded-lg transition-shadow duration-700 group-hover:shadow-2xl">
							<img
								alt={exp.title}
								className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								height={1000}
								src={exp.image}
								width={1600}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
							<div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1 sm:p-8 md:p-10">
								<h3 className="mb-2 font-heading text-white text-xl sm:mb-3 sm:text-2xl md:text-3xl">
									{exp.title}
								</h3>
								<p className="max-w-md font-sans text-sm text-white/80 leading-relaxed md:text-base">
									{exp.description}
								</p>
							</div>
						</div>
					</ScrollReveal>
				))}
			</div>

			<div className="grid gap-6 md:grid-cols-3">
				{standard.map((exp, index) => (
					<ScrollReveal
						className="group relative"
						delay={0.3 + index * 0.1}
						key={exp.title}
					>
						<div className="relative aspect-[4/3] overflow-hidden rounded-lg transition-shadow duration-700 group-hover:shadow-2xl">
							<img
								alt={exp.title}
								className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								height={600}
								src={exp.image}
								width={800}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
							<div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1 sm:p-6">
								<h3 className="mb-2 font-heading text-white text-xl md:text-2xl">
									{exp.title}
								</h3>
								<p className="font-sans text-sm text-white/80 leading-relaxed">
									{exp.description}
								</p>
							</div>
						</div>
					</ScrollReveal>
				))}
			</div>
		</section>
	);
}
