import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import { StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import { destinations } from "./data";

export default function DestinationsGrid() {
	return (
		<section className="overflow-hidden bg-foreground py-[clamp(5rem,12vw,12rem)] text-background">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				{/* Section heading */}
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<ScrollReveal>
							<p className="mb-5 font-sans text-background/55 text-xs uppercase tracking-[0.28em]">
								Ten places, in their own tempo
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-4xl font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.88] tracking-[-0.05em]"
							text="One state, ten kinds of silence"
						/>
					</div>
					<ScrollReveal className="lg:col-span-3 lg:col-start-10" delay={0.16}>
						<p className="border-background/16 border-t pt-6 font-sans text-background/66 text-base leading-relaxed">
							From the amber valley to the Thar, from the Aravalli ridgeline to
							the forest edge. Each destination is an invitation to arrive at a
							different hour.
						</p>
					</ScrollReveal>
				</div>

				{/* Horizontal rail layout */}
				<div className="rail-field">
					{destinations.map((d, i) => (
						<article className="rail-card group" key={d.name}>
							<span className="rail-idx">{String(i + 1).padStart(2, "0")}</span>
							<div className="rail-img">
								<img
									alt={`${d.name}, Rajasthan`}
									className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									height={1200}
									src={d.image}
									width={1000}
								/>
							</div>
							<div className="rail-panel">
								<p className="mb-4 font-sans text-background/52 text-xs uppercase tracking-[0.28em]">
									{d.region}
								</p>
								<h3 className="font-heading text-[clamp(2.8rem,5vw,5rem)] text-background leading-[0.84] tracking-[-0.05em]">
									{d.name}
								</h3>
								<p className="mt-2 font-sans text-primary/90 text-sm italic tracking-wide">
									{d.subtitle}
								</p>
								<p className="mt-4 max-w-md font-sans text-background/62 text-sm leading-relaxed">
									{d.description}
								</p>
								<Link
									className="mt-6 inline-flex items-center gap-2 font-sans text-background/88 text-xs uppercase tracking-[0.22em] transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-[3px]"
									to={`/destinations/${d.slug}`}
								>
									Explore {d.name}
									<IconArrowNarrowRight
										className="h-3.5 w-3.5"
										strokeWidth={1.5}
									/>
								</Link>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
