"use client";

import {
	IconArrowNarrowRight,
	IconClock,
	IconMapPin,
} from "@tabler/icons-react";
import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const itineraries = [
	{
		title: "Royal Rajasthan",
		duration: "10 Days",
		destinations: "Jaipur, Udaipur, Jodhpur",
		theme: "Palaces, forts, royal hospitality",
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
		theme: "Sand dunes, living forts, desert silence",
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
		theme: "Tigers, temples, restorative calm",
		experiences: [
			"Private dawn safaris with naturalists",
			"Ayurvedic retreat in palace gardens",
			"Sunrise meditation at Pushkar ghats",
		],
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

export default function CuratedItineraries() {
	return (
		<section className="bg-[oklch(0.955_0.011_81)] py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-16 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7 lg:col-start-2">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Journeys
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] tracking-[-0.055em]"
							text="Routes with a point of view"
						/>
					</div>
					<ScrollReveal className="lg:col-span-3" delay={0.16}>
						<p className="font-sans text-base text-muted-foreground leading-relaxed">
							Each itinerary is a narrative arc. Arrival, immersion, release,
							and return are composed with the same care as the hotels.
						</p>
					</ScrollReveal>
				</div>

				<div className="space-y-7">
					{itineraries.map((itinerary, index) => (
						<ScrollReveal delay={index * 0.12} key={itinerary.title}>
							<article className="group grid gap-0 overflow-hidden border border-foreground/10 bg-background lg:grid-cols-12">
								<div className="relative min-h-80 overflow-hidden lg:col-span-5">
									<img
										alt={itinerary.title}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={700}
										src={itinerary.image}
										width={900}
									/>
								</div>

								<div className="p-6 sm:p-8 lg:col-span-7 lg:p-10 xl:p-12">
									<div className="mb-8 flex flex-wrap gap-x-6 gap-y-3 font-sans text-muted-foreground text-sm">
										<span className="inline-flex items-center gap-2">
											<IconClock className="h-4 w-4" strokeWidth={1.5} />
											{itinerary.duration}
										</span>
										<span className="inline-flex items-center gap-2">
											<IconMapPin className="h-4 w-4" strokeWidth={1.5} />
											{itinerary.destinations}
										</span>
									</div>

									<div className="grid gap-8 lg:grid-cols-7 lg:items-start">
										<div className="lg:col-span-3">
											<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
												{itinerary.theme}
											</p>
											<h3 className="font-heading text-[clamp(2.8rem,6vw,6.4rem)] leading-[0.84] tracking-[-0.055em]">
												{itinerary.title}
											</h3>
										</div>

										<div className="lg:col-span-4">
											<ul className="space-y-4 border-foreground/10 border-t pt-6">
												{itinerary.experiences.map((experience) => (
													<li
														className="font-sans text-muted-foreground text-sm leading-relaxed"
														key={experience}
													>
														{experience}
													</li>
												))}
											</ul>
											<a
												className="mt-8 inline-flex items-center gap-2 font-sans font-semibold text-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:text-primary"
												href="/itineraries"
											>
												Explore This Journey
												<IconArrowNarrowRight
													className="h-4 w-4"
													strokeWidth={1.5}
												/>
											</a>
										</div>
									</div>
								</div>
							</article>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
