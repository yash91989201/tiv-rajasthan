"use client";

import ScrollReveal from "@/components/home/scroll-reveal";
import type { TravelStoriesSection } from "../types";
import SectionHeader from "./section-header";

interface TravelStoriesProps {
	data: TravelStoriesSection;
}

export default function TravelStories({ data }: TravelStoriesProps) {
	return (
		<section className="bg-muted py-[clamp(5rem,11vw,11rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-14 max-w-2xl">
					<SectionHeader headline={data.headline} kicker={data.kicker} />
				</div>

				<div className="space-y-[clamp(3rem,6vw,5rem)]">
					{data.stories.map((story, index) => (
						<ScrollReveal delay={index * 0.12} key={story.author}>
							<figure className="border-foreground/10 border-t pt-10">
								<blockquote className="max-w-4xl font-heading text-[clamp(2rem,4.5vw,3.8rem)] text-foreground leading-[1.08] tracking-[-0.04em]">
									&ldquo;{story.quote}&rdquo;
								</blockquote>
								<figcaption className="mt-8 font-sans text-muted-foreground text-sm uppercase tracking-[0.18em]">
									{story.author}
									<span className="mx-3 text-foreground/20">/</span>
									<span className="normal-case tracking-normal">
										{story.context}
									</span>
								</figcaption>
							</figure>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
