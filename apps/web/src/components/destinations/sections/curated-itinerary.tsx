"use client";

import { IconClock } from "@tabler/icons-react";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@tiv-rajasthan/ui/components/tabs";
import ScrollReveal from "@/components/home/scroll-reveal";
import type { CuratedItinerarySection } from "../types";
import SectionHeader from "./section-header";

interface CuratedItineraryProps {
	data: CuratedItinerarySection;
}

export default function CuratedItinerary({ data }: CuratedItineraryProps) {
	const defaultTab = data.items[0]?.id ?? "";

	return (
		<section className="bg-background py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7 lg:col-start-2">
						<SectionHeader
							description={data.description}
							headline={data.headline}
							kicker={data.kicker}
						/>
					</div>
				</div>

				<Tabs defaultValue={defaultTab}>
					<ScrollReveal>
						<TabsList
							className="mb-10 h-auto w-full flex-wrap justify-start gap-2 bg-transparent p-0"
							variant="line"
						>
							{data.items.map((item) => (
								<TabsTrigger
									className="h-auto px-0 py-2 data-active:text-foreground"
									key={item.id}
									value={item.id}
								>
									{item.title}
								</TabsTrigger>
							))}
						</TabsList>
					</ScrollReveal>

					{data.items.map((item, index) => (
						<TabsContent key={item.id} value={item.id}>
							<ScrollReveal delay={index * 0.1}>
								<article className="group grid overflow-hidden border border-foreground/10 bg-muted lg:grid-cols-12">
									<div className="relative min-h-80 overflow-hidden lg:col-span-5">
										<img
											alt={item.title}
											className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
											height={700}
											src={item.image}
											width={900}
										/>
									</div>

									<div className="p-[clamp(1.75rem,4vw,2.85rem)] lg:col-span-7">
										<div className="mb-6 flex items-center gap-2 font-sans text-muted-foreground text-sm">
											<IconClock className="h-4 w-4" strokeWidth={1.5} />
											{item.duration}
										</div>
										<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
											{item.theme}
										</p>
										<h3 className="font-heading text-[clamp(2.4rem,5vw,5rem)] leading-[0.86] tracking-[-0.05em]">
											{item.title}
										</h3>
										<ul className="mt-8 space-y-4 border-foreground/10 border-t pt-6">
											{item.highlights.map((highlight) => (
												<li
													className="font-sans text-muted-foreground text-sm leading-relaxed"
													key={highlight}
												>
													{highlight}
												</li>
											))}
										</ul>
									</div>
								</article>
							</ScrollReveal>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	);
}
