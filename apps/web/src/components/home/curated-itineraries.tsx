"use client";

import { IconClock, IconMapPin, IconSparkles } from "@tabler/icons-react";
import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const itineraries = [
	{
		title: "Royal Rajasthan",
		duration: "10 Days",
		destinations: "Jaipur, Udaipur, Jodhpur",
		theme: "Palaces, forts, and royal hospitality",
		experiences: [
			"Private dinner in a 300-year-old haveli",
			"Exclusive access to palace quarters",
			"Sunrise boat ride on Lake Pichola",
		],
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
	},
	{
		title: "Desert & Heritage",
		duration: "8 Days",
		destinations: "Jaisalmer, Bikaner, Jodhpur",
		theme: "Sand dunes, living forts, and desert silence",
		experiences: [
			"Luxury camp under the Thar stars",
			"Heritage walk through living fort lanes",
			"Camel safari at golden hour",
		],
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		title: "Wildlife & Wellness",
		duration: "7 Days",
		destinations: "Ranthambore, Pushkar, Jaipur",
		theme: "Tigers, temples, and transformative calm",
		experiences: [
			"Private dawn safaris with naturalists",
			"Ayurvedic wellness retreat in palace gardens",
			"Sunrise meditation at Pushkar ghats",
		],
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

export default function CuratedItineraries() {
	return (
		<section className="bg-secondary/30 py-20 md:py-32 lg:py-40">
			<div className="container mx-auto px-6">
				<div className="mb-12 text-center sm:mb-20">
					<ScrollReveal>
						<p className="mb-4 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
							Journeys
						</p>
					</ScrollReveal>
					<StaggerText
						as="h2"
						className="mx-auto max-w-3xl font-heading text-4xl md:text-5xl lg:text-6xl"
						text="Journeys as narratives"
					/>
					<ScrollReveal delay={0.2}>
						<p className="mx-auto mt-6 max-w-xl font-sans text-base text-muted-foreground">
							Each itinerary is a story — shaped by place, pace, and the
							memories you want to carry home.
						</p>
					</ScrollReveal>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{itineraries.map((itinerary, index) => (
						<ScrollReveal
							className="group flex flex-col"
							delay={index * 0.15}
							key={itinerary.title}
						>
							<div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-lg">
								<img
									alt={itinerary.title}
									className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									height={600}
									src={itinerary.image}
									width={800}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
							</div>

							<div className="flex flex-1 flex-col transition-transform duration-500 group-hover:-translate-y-1">
								<div className="mb-4 flex flex-wrap items-center gap-4 font-sans text-muted-foreground text-sm">
									<span className="flex items-center gap-1">
										<IconClock className="h-4 w-4" />
										{itinerary.duration}
									</span>
									<span className="flex items-center gap-1">
										<IconMapPin className="h-4 w-4" />
										{itinerary.destinations}
									</span>
								</div>

								<h3 className="mb-2 font-heading text-2xl md:text-3xl">
									{itinerary.title}
								</h3>

								<p className="mb-4 font-sans text-muted-foreground text-sm italic">
									{itinerary.theme}
								</p>

								<div className="mb-6 flex flex-col gap-2">
									{itinerary.experiences.map((exp) => (
										<span
											className="flex items-start gap-2 font-sans text-muted-foreground text-sm"
											key={exp}
										>
											<IconSparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
											{exp}
										</span>
									))}
								</div>

								<a
									className="mt-auto inline-flex h-10 w-full items-center justify-center gap-1.5 border border-border bg-transparent px-6 font-sans font-semibold text-foreground text-sm uppercase tracking-widest transition-colors hover:bg-muted"
									href="/itineraries"
								>
									Explore This Journey
								</a>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
