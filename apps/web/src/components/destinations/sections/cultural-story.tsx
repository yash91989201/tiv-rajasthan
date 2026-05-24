"use client";

import { ImageReveal, StaggerText } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import type { CulturalStorySection } from "../types";

interface CulturalStoryProps {
	data: CulturalStorySection;
}

export default function CulturalStory({ data }: CulturalStoryProps) {
	return (
		<section className="bg-muted py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-16 max-w-3xl">
					{data.kicker ? (
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								{data.kicker}
							</p>
						</ScrollReveal>
					) : null}
					<StaggerText
						as="h2"
						className="font-heading text-[clamp(3.2rem,7vw,7rem)] leading-[0.88] tracking-[-0.055em]"
						text={data.headline}
					/>
				</div>

				<div className="space-y-[clamp(4rem,8vw,7rem)]">
					{data.blocks.map((block, index) => {
						const imageFirst = (block.imagePosition ?? "left") === "left";

						return (
							<ScrollReveal delay={index * 0.12} key={block.headline}>
								<article className="grid gap-10 lg:grid-cols-12 lg:items-center">
									<div
										className={`lg:col-span-6 ${imageFirst ? "lg:order-1" : "lg:order-2 lg:col-start-7"}`}
									>
										<ImageReveal
											alt={block.image.alt}
											aspectRatio="4/5"
											src={block.image.src}
										/>
									</div>
									<div
										className={`lg:col-span-5 ${imageFirst ? "lg:order-2 lg:col-start-8" : "lg:order-1"}`}
									>
										{block.kicker ? (
											<p className="mb-4 font-sans text-primary text-xs uppercase tracking-[0.24em]">
												{block.kicker}
											</p>
										) : null}
										<h3 className="font-heading text-[clamp(2.2rem,4.5vw,4rem)] leading-[0.9] tracking-[-0.04em]">
											{block.headline}
										</h3>
										<p className="mt-6 font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
											{block.body}
										</p>
										{block.quote ? (
											<blockquote className="mt-8 border-foreground/12 border-l-2 pl-6 font-heading text-[clamp(1.6rem,3vw,2.4rem)] text-foreground/88 leading-[1.2] tracking-[-0.03em]">
												{block.quote}
											</blockquote>
										) : null}
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
