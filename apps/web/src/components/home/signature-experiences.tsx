"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const experiences = [
	{
		title: "Private Palace Dining",
		description:
			"Candlelit courtyards, silver thali service, and recipes carried through families attached to palace kitchens.",
		image:
			"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "After dark",
	},
	{
		title: "Desert Camps",
		description:
			"Canvas suites beneath hard stars, folk music by fire, and the midnight quiet of the Thar held without spectacle.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
		label: "Open sky",
	},
	{
		title: "Heritage Walks",
		description:
			"Historians, artisans, and old city residents lead you through living forts and havelis before the crowds arrive.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
		label: "Before opening",
	},
	{
		title: "Luxury Safaris",
		description:
			"Dawn and dusk drives in Ranthambore with naturalists who read the forest by sound, dust, and pause.",
		image:
			"https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
		label: "Forest hour",
	},
	{
		title: "Wellness Retreats",
		description:
			"Ayurvedic therapies, yoga, and lake-facing quiet in palace settings designed for recovery rather than performance.",
		image:
			"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "Stillness",
	},
] as const;

const layoutClasses = [
	"lg:col-span-7 lg:row-span-2",
	"lg:col-span-5 lg:col-start-8 lg:mt-20",
	"lg:col-span-4 lg:col-start-2",
	"lg:col-span-4",
	"lg:col-span-4",
] as const;

const aspectClasses = [
	"aspect-[5/6] lg:aspect-[6/7]",
	"aspect-[4/3]",
	"aspect-[4/5]",
	"aspect-[4/5]",
	"aspect-[4/5]",
] as const;

export default function SignatureExperiences() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,11vw,11rem)]">
			<div className="absolute top-0 right-0 h-64 w-64 bg-primary/10" />
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-start">
					<div className="lg:col-span-8">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Experiences
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-5xl font-heading text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.88] tracking-[-0.055em]"
							text="One memory per fold"
						/>
					</div>
					<ScrollReveal
						className="lg:col-span-3 lg:col-start-10 lg:pt-8"
						delay={0.18}
					>
						<p className="font-sans text-base text-muted-foreground leading-relaxed">
							We avoid the brochure list. Each experience is treated like a
							scene, paced by light, privacy, texture, and the people who make
							it possible.
						</p>
					</ScrollReveal>
				</div>

				<div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
					{experiences.map((experience, index) => (
						<ScrollReveal
							className={`group ${layoutClasses[index]}`}
							delay={index * 0.1}
							key={experience.title}
						>
							<article className="relative overflow-hidden bg-foreground text-background">
								<div className={`relative ${aspectClasses[index]}`}>
									<img
										alt={experience.title}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={1000}
										src={experience.image}
										width={1200}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-foreground/88 via-foreground/20 to-transparent" />
								</div>
								<div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
									<p className="mb-3 font-sans text-background/60 text-xs uppercase tracking-[0.24em]">
										{experience.label}
									</p>
									<h3 className="max-w-xl font-heading text-[clamp(2rem,4vw,4.7rem)] leading-[0.9] tracking-[-0.04em]">
										{experience.title}
									</h3>
									<p className="mt-4 max-w-md font-sans text-background/72 text-sm leading-relaxed md:text-base">
										{experience.description}
									</p>
								</div>
							</article>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
