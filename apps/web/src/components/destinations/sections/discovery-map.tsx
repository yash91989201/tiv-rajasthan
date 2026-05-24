"use client";

import { Badge } from "@tiv-rajasthan/ui/components/badge";
import { Separator } from "@tiv-rajasthan/ui/components/separator";
import { ImageReveal } from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";
import type { DiscoveryMapSection, DiscoveryPoint } from "../types";
import SectionHeader from "./section-header";

interface DiscoveryMapProps {
	data: DiscoveryMapSection;
}

const categoryLabel: Record<DiscoveryPoint["category"], string> = {
	stay: "Stay",
	landmark: "Landmark",
	experience: "Experience",
	route: "Route",
};

export default function DiscoveryMap({ data }: DiscoveryMapProps) {
	return (
		<section className="bg-background py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-14 max-w-3xl">
					<SectionHeader
						description={data.description}
						headline={data.headline}
						kicker={data.kicker}
					/>
				</div>

				<div className="grid gap-10 lg:grid-cols-12 lg:items-start">
					<ScrollReveal className="lg:col-span-6">
						{data.mapImage ? (
							<ImageReveal
								alt={`${data.headline} discovery map`}
								aspectRatio="4/5"
								src={data.mapImage}
							/>
						) : (
							<div className="discovery-map-placeholder flex aspect-[4/5] items-end p-8">
								<p className="max-w-xs font-heading text-[clamp(2rem,4vw,3rem)] text-background/88 leading-[0.92] tracking-[-0.04em]">
									A curated map, drawn for private discovery
								</p>
							</div>
						)}
					</ScrollReveal>

					<div className="space-y-0 lg:col-span-5 lg:col-start-8">
						{data.points.map((point, index) => (
							<ScrollReveal delay={index * 0.08} key={point.name}>
								<div className="py-6">
									<div className="mb-3 flex items-center gap-3">
										<Badge variant="secondary">
											{categoryLabel[point.category]}
										</Badge>
										<span className="font-sans text-muted-foreground text-xs uppercase tracking-[0.2em]">
											{String(index + 1).padStart(2, "0")}
										</span>
									</div>
									<h3 className="font-heading text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[0.92] tracking-[-0.03em]">
										{point.name}
									</h3>
									<p className="mt-3 font-sans text-muted-foreground text-sm leading-relaxed">
										{point.description}
									</p>
									{index < data.points.length - 1 ? (
										<Separator className="mt-6 bg-foreground/10" />
									) : null}
								</div>
							</ScrollReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
