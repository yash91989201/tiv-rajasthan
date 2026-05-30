"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const experiences = [
	{
		title: "Panna Meena Ka Kund",
		description:
			"Panna Meena Ka Kund at first light — an eight-storey stepwell where crisscross geometry meets still water, and the only sound is your own footsteps.",
		image:
			"https://images.unsplash.com/photo-1765396690111-3baee282963b?q=80&w=1200&auto=format&fit=crop",
		label: "Before the crowds",
		location: "Jaipur",
	},
	{
		title: "Jag Mandir",
		description:
			"Jag Mandir by boat at aperitif hour — a 17th-century palace garden where marble holds the evening cool and the city stays across the water.",
		image:
			"https://images.unsplash.com/photo-1655106606799-01e0100e9b94?q=80&w=1200&auto=format&fit=crop",
		label: "On the lake",
		location: "Udaipur",
	},
	{
		title: "Sam Sand Dunes",
		description:
			"Sam Sand Dunes after the camel safari — canvas suites, fire close, and the dense silence that arrives when the wind drops over the desert.",
		image:
			"https://images.unsplash.com/photo-1636009559567-7a315a74e0e1?q=80&w=1200&auto=format&fit=crop",
		label: "Under stars",
		location: "Jaisalmer",
	},
	{
		title: "Ranthambore",
		description:
			"Ranthambore at dawn with naturalists who read alarm calls, paw marks, and the long pause before a tiger decides to move.",
		image:
			"https://images.unsplash.com/photo-1700562556421-8b96fdd43898?q=80&w=1200&auto=format&fit=crop",
		label: "Forest hour",
		location: "Ranthambore",
	},
	{
		title: "Jaswant Thada",
		description:
			"Jaswant Thada in the late afternoon — white marble cenotaphs catching the last sun, quiet enough to hear the carvings breathe.",
		image:
			"https://images.unsplash.com/photo-1676444490527-cf8f7894e9f0?q=80&w=1200&auto=format&fit=crop",
		label: "Stillness",
		location: "Jodhpur",
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
								<p className="mt-3 font-sans text-background/50 text-xs uppercase tracking-[0.18em]">
									{experience.location}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
