"use client";

import { Badge } from "@tiv-rajasthan/ui/components/badge";
import type { StayCollectionSection } from "../types";
import SectionHeader from "./section-header";

interface StayCollectionProps {
	data: StayCollectionSection;
}

export default function StayCollection({ data }: StayCollectionProps) {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="stay-horizontal-cinema">
					<div className="stay-header">
						<SectionHeader headline={data.headline} kicker={data.kicker} />
						{data.description ? (
							<p className="max-w-md font-sans text-base text-muted-foreground leading-relaxed">
								{data.description}
							</p>
						) : null}
					</div>
					<div className="stay-rail">
						{data.items.map((property) => (
							<article className="stay-card group" key={property.name}>
								<div>
									<div className="mb-4 flex flex-wrap gap-3">
										{property.tags.map((tag) => (
											<Badge key={tag} variant="secondary">
												{tag}
											</Badge>
										))}
									</div>
									<p className="mb-3 font-sans text-primary/88 text-xs uppercase tracking-[0.22em]">
										{property.location}
									</p>
									<h3 className="font-heading text-[clamp(2.3rem,4vw,4.9rem)] leading-[0.86] tracking-[-0.05em]">
										{property.name}
									</h3>
								</div>
								<div className="stay-image relative">
									<img
										alt={property.name}
										className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
										height={900}
										src={property.image}
										width={720}
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-foreground/46 via-transparent to-primary/14" />
								</div>
								<p className="font-sans text-primary/90 text-sm leading-relaxed">
									{property.description}
								</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
