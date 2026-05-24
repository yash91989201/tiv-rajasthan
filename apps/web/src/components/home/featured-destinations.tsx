"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const destinations = [
	{
		name: "Jaipur",
		subtitle: "Before the city blushes",
		description:
			"Hawa Mahal before the pavement warms, jewel ateliers with the shutters half raised, and dinner where frescoed walls keep their own counsel.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Udaipur",
		subtitle: "Water, marble, hush",
		description:
			"A boat crossing before aperitif hour, marble still holding the day, and evenings for people who notice how a city doubles itself in water.",
		image:
			"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Jaisalmer",
		subtitle: "Sandstone after heat",
		description:
			"A living fort above the Thar, then canvas, fire, songs passed between families, and the dense silence that arrives after the wind drops.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Ranthambore",
		subtitle: "The forest keeps score",
		description:
			"Early drives through tiger country, ruined pavilions in the scrub, lunch that refuses to hurry, and dusk kept close to the forest line.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

export default function FeaturedDestinations() {
	return (
		<section className="overflow-hidden bg-foreground py-[clamp(5rem,12vw,12rem)] text-background">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<ScrollReveal>
							<p className="mb-5 font-sans text-background/55 text-xs uppercase tracking-[0.28em]">
								Places, in tempo
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-4xl font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] tracking-[-0.05em]"
							text="One state, four kinds of silence"
						/>
					</div>
					<ScrollReveal className="lg:col-span-3 lg:col-start-10" delay={0.16}>
						<p className="border-background/16 border-t pt-6 font-sans text-background/66 text-base leading-relaxed">
							Jaipur, Udaipur, Jaisalmer, Ranthambore. We do not flatten them
							into one royal postcard. Each place asks for a different hour.
						</p>
					</ScrollReveal>
				</div>

				<div className="destinations-numbered-field">
					{destinations.map((destination, index) => (
						<article className="destination-card group" key={destination.name}>
							<span className="destination-index">0{index + 1}</span>
							<img
								alt={destination.name}
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								height={1200}
								src={destination.image}
								width={1000}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/96 via-foreground/58 to-primary/16" />
							<div className="destination-panel">
								<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.24em]">
									{destination.subtitle}
								</p>
								<h3 className="font-heading text-[clamp(2.4rem,4.8vw,5.4rem)] text-background leading-[0.84] tracking-[-0.05em]">
									{destination.name}
								</h3>
								<p className="mt-4 max-w-md font-sans text-sm leading-relaxed">
									{destination.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
