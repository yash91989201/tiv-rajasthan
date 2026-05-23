"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const destinations = [
	{
		name: "Jaipur",
		subtitle: "The Pink City",
		description:
			"Dawn at Hawa Mahal, private ateliers before the shutters rise, and dinner in restored royal rooms once the city turns rose again.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Udaipur",
		subtitle: "City of Lakes",
		description:
			"Lake Pichola by boat, marble terraces at blue hour, and a slower rhythm made for people who notice reflected light.",
		image:
			"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Jaisalmer",
		subtitle: "The Golden Fort",
		description:
			"A living citadel rising from the Thar, followed by canvas, firelight, folk songs, and the kind of silence cities cannot stage.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
	{
		name: "Ranthambore",
		subtitle: "Wilderness & Heritage",
		description:
			"Tiger country with ruined pavilions, early drives, long lunches, and evenings held close to the edge of the forest.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
	},
] as const;

const destinationLayouts = [
	"lg:col-span-7 lg:row-span-2",
	"lg:col-span-4 lg:col-start-9 lg:mt-24",
	"lg:col-span-4 lg:col-start-2 lg:-mt-12",
	"lg:col-span-6 lg:col-start-7",
] as const;

const destinationAspects = [
	"aspect-[5/6] lg:aspect-[7/8]",
	"aspect-[4/5]",
	"aspect-[6/4]",
	"aspect-[16/10]",
] as const;

export default function FeaturedDestinations() {
	return (
		<section className="overflow-hidden bg-foreground py-[clamp(5rem,12vw,12rem)] text-background">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<ScrollReveal>
							<p className="mb-5 font-sans text-background/55 text-xs uppercase tracking-[0.28em]">
								Destinations
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-4xl font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] tracking-[-0.05em]"
							text="Four moods of one kingdom"
						/>
					</div>
					<ScrollReveal className="lg:col-span-3 lg:col-start-10" delay={0.16}>
						<p className="border-background/16 border-t pt-6 font-sans text-background/66 text-base leading-relaxed">
							We arrange Rajasthan as a sequence of distinct atmospheres: city,
							lake, desert, forest. Each place gets its own tempo.
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
								<p className="mb-3 font-sans text-primary/90 text-xs uppercase tracking-[0.24em]">
									{destination.subtitle}
								</p>
								<h3 className="font-heading text-[clamp(2.4rem,4.8vw,5.4rem)] text-background leading-[0.84] tracking-[-0.05em]">
									{destination.name}
								</h3>
								<p className="mt-4 max-w-md font-sans text-primary/86 text-sm leading-relaxed">
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
