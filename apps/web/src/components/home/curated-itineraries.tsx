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
		title: "Palaces without ceremony",
		duration: "10 Days",
		destinations: "Jaipur, Udaipur, Jodhpur",
		theme: "Private rooms, quiet courts, old cities",
		experiences: [
			"Dinner in a 300-year-old haveli after the house settles",
			"Palace rooms opened with time to linger",
			"Lake Pichola before the first hotel launches cross",
		],
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
	},
	{
		title: "The desert taken slowly",
		duration: "8 Days",
		destinations: "Jaisalmer, Bikaner, Jodhpur",
		theme: "Living forts, dune light, nights under canvas",
		experiences: [
			"A canvas camp placed for stars, not spectacle",
			"A morning inside fort lanes while the day is being set out",
			"A slow ride when the sand begins to cool",
		],
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		title: "Forest, temples, still water",
		duration: "7 Days",
		destinations: "Ranthambore, Pushkar, Jaipur",
		theme: "Ranthambore, Pushkar, unforced rest",
		experiences: [
			"Dawn drives with naturalists who know when to wait",
			"Bodywork and rest in shaded palace gardens",
			"Pushkar at first light, before the microphones begin",
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
								Possible routes
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] tracking-[-0.055em]"
							text="A route should know what to leave out"
						/>
					</div>
					<ScrollReveal className="lg:col-span-3" delay={0.16}>
						<p className="font-sans text-base text-muted-foreground leading-relaxed">
							These are starting points, not fixed programmes. We keep the
							spine, then adjust the pace, rooms, guides, and empty hours around
							you.
						</p>
					</ScrollReveal>
				</div>

				<div className="itinerary-alternating-list space-y-7">
					{itineraries.map((itinerary, index) => {
						const isOddCard = index % 2 === 0;

						return (
							<ScrollReveal delay={index * 0.12} key={itinerary.title}>
								<article
									className={`group grid overflow-hidden border border-foreground/10 bg-background lg:grid-cols-12 ${
										isOddCard ? "itinerary-card-odd" : "itinerary-card-even"
									}`}
								>
									<div className="itinerary-image relative min-h-80 overflow-hidden lg:col-span-5">
										<img
											alt={itinerary.title}
											className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											height={700}
											src={itinerary.image}
											width={900}
										/>
									</div>

									<div className="itinerary-content lg:col-span-7">
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
													Read the outline
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
						);
					})}
				</div>
			</div>
		</section>
	);
}
