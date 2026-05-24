"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const experiences = [
	{
		title: "Dinner after the doors close",
		description:
			"A courtyard lit low, silver thali service, and dishes remembered by families who have cooked inside these walls for generations.",
		image:
			"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "After dark",
	},
	{
		title: "A camp with no performance",
		description:
			"Canvas suites under hard stars, music close to the fire, and the Thar at midnight left alone enough to be felt.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
		label: "Open sky",
	},
	{
		title: "Walks before the city opens",
		description:
			"Historians, artisans, and old city residents take you through fort lanes while shopkeepers are still washing the stone.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
		label: "Before opening",
	},
	{
		title: "The forest at listening hour",
		description:
			"Ranthambore at dawn and dusk with naturalists who read alarm calls, dust, paw marks, and the long pause before movement.",
		image:
			"https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
		label: "Forest hour",
	},
	{
		title: "Recovery without theatre",
		description:
			"Ayurvedic therapies, gentle practice, and lake-facing quiet arranged for recovery, not for the photograph of recovery.",
		image:
			"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "Stillness",
	},
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
								What stays with you
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-5xl font-heading text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.88] tracking-[-0.055em]"
							text="The day should have one thing it remembers"
						/>
					</div>
					<ScrollReveal
						className="lg:col-span-3 lg:col-start-10 lg:pt-8"
						delay={0.18}
					>
						<p className="font-sans text-base text-muted-foreground leading-relaxed">
							The most memorable days are usually quiet in shape: a door opened
							at the right hour, a table set away from the room, a road taken
							because the light asked for it.
						</p>
					</ScrollReveal>
				</div>

				<div className="experience-cinematic-notes">
					{experiences.map((experience) => (
						<article className="experience-card group" key={experience.title}>
							<img
								alt={experience.title}
								className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
								height={1000}
								src={experience.image}
								width={1200}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/94 via-foreground/42 to-transparent" />
							<div className="experience-panel">
								<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.24em]">
									{experience.label}
								</p>
								<h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] text-background leading-[0.88] tracking-[-0.045em]">
									{experience.title}
								</h3>
								<p className="mt-4 max-w-md font-sans text-sm text-white leading-relaxed">
									{experience.description}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
