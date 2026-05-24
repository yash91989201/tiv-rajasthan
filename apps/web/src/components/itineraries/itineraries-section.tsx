"use client";

import { useState } from "react";
import { IconArrowNarrowRight, IconClock, IconMapPin } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@tiv-rajasthan/ui/components/badge";
import { Tabs, TabsList, TabsTrigger } from "@tiv-rajasthan/ui/components/tabs";
import ScrollReveal from "@/components/home/scroll-reveal";
import { categories, type Category, type Itinerary } from "./data";

function RouteStrip({ route }: { route: string[] }) {
	return (
		<div className="flex flex-wrap items-center gap-x-2 gap-y-1 font-sans text-xs uppercase tracking-widest text-muted-foreground">
			{route.map((city, i) => (
				<span key={city} className="inline-flex items-center gap-2">
					{city}
					{i < route.length - 1 && (
						<span className="text-primary/50" aria-hidden="true">
							&rarr;
						</span>
					)}
				</span>
			))}
		</div>
	);
}

function FeaturedCard({ itinerary }: { itinerary: Itinerary }) {
	return (
		<ScrollReveal>
			<article className="group grid overflow-hidden border border-foreground/10 bg-background lg:grid-cols-12">
				<div className="relative min-h-80 overflow-hidden lg:col-span-5">
					<img
						alt={itinerary.title}
						className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						height={700}
						src={itinerary.image}
						width={900}
					/>
					<div className="absolute top-4 left-4 flex flex-wrap gap-2">
						{itinerary.categories.slice(0, 2).map((cat) => (
							<span
								key={cat}
								className="bg-background/90 px-3 py-1.5 font-sans text-[0.625rem] uppercase tracking-widest text-foreground backdrop-blur-sm"
							>
								{cat}
							</span>
						))}
					</div>
					<div className="absolute right-4 bottom-4 bg-background/90 px-3 py-1.5 font-sans text-[0.625rem] uppercase tracking-widest text-foreground backdrop-blur-sm">
						{itinerary.duration}
					</div>
				</div>

				<div className="flex flex-col justify-center p-8 lg:col-span-7 lg:p-[clamp(2.5rem,4vw,4rem)]">
					<div className="mb-6 flex flex-wrap gap-x-5 gap-y-2 font-sans text-muted-foreground text-sm">
						<span className="inline-flex items-center gap-1.5">
							<IconClock className="h-4 w-4" strokeWidth={1.5} />
							{itinerary.duration}
						</span>
						<span className="inline-flex items-center gap-1.5">
							<IconMapPin className="h-4 w-4" strokeWidth={1.5} />
							{itinerary.route.join(", ")}
						</span>
					</div>

					<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
						{itinerary.subtitle}
					</p>
					<h3 className="mb-5 font-heading text-[clamp(2.4rem,5vw,5rem)] leading-[0.88] tracking-[-0.05em]">
						{itinerary.title}
					</h3>
					<p className="mb-6 max-w-lg font-sans text-muted-foreground text-base leading-relaxed">
						{itinerary.description}
					</p>

					<div className="mb-6">
						<RouteStrip route={itinerary.route} />
					</div>

					<div className="mb-6 flex flex-wrap gap-2">
						{itinerary.highlights.map((h) => (
							<Badge
								key={h}
								className="border-foreground/10 border bg-transparent px-2.5 py-1 text-[0.6rem]"
								variant="outline"
							>
								{h}
							</Badge>
						))}
					</div>

					<ul className="mb-8 space-y-2 border-foreground/10 border-t pt-5">
						{itinerary.dayPreview.map((day) => (
							<li
								className="font-sans text-muted-foreground text-sm leading-relaxed"
								key={day}
							>
								{day}
							</li>
						))}
					</ul>

					<a
						className="inline-flex items-center gap-2 font-sans font-semibold text-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:text-primary"
						href={`/itineraries/${itinerary.id}`}
					>
						Explore Itinerary
						<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
					</a>
				</div>
			</article>
		</ScrollReveal>
	);
}

function StandardCard({ itinerary, index }: { itinerary: Itinerary; index: number }) {
	return (
		<motion.article
			className="group flex flex-col overflow-hidden border border-foreground/10 bg-background"
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, margin: "-60px" }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<div className="relative aspect-[16/10] overflow-hidden">
				<img
					alt={itinerary.title}
					className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
					height={640}
					loading="lazy"
					src={itinerary.image}
					width={960}
				/>
				<div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
					{itinerary.categories.slice(0, 2).map((cat) => (
						<span
							key={cat}
							className="bg-background/90 px-2.5 py-1 font-sans text-[0.6rem] uppercase tracking-widest text-foreground backdrop-blur-sm"
						>
							{cat}
						</span>
					))}
				</div>
				<div className="absolute right-3 bottom-3 bg-background/90 px-2.5 py-1 font-sans text-[0.6rem] uppercase tracking-widest text-foreground backdrop-blur-sm">
					{itinerary.duration}
				</div>
			</div>

			<div className="flex flex-1 flex-col p-6 lg:p-7">
				<div className="mb-4 flex flex-wrap gap-x-4 gap-y-1.5 font-sans text-muted-foreground text-xs">
					<span className="inline-flex items-center gap-1">
						<IconClock className="h-3.5 w-3.5" strokeWidth={1.5} />
						{itinerary.duration}
					</span>
					<span className="inline-flex items-center gap-1">
						<IconMapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
						{itinerary.route.join(", ")}
					</span>
				</div>

				<p className="mb-2 font-sans text-primary text-[0.65rem] uppercase tracking-[0.22em]">
					{itinerary.subtitle}
				</p>
				<h3 className="mb-3 font-heading text-[clamp(1.6rem,3vw,2.4rem)] leading-[0.95] tracking-[-0.04em]">
					{itinerary.title}
				</h3>
				<p className="mb-4 font-sans text-muted-foreground text-sm leading-relaxed">
					{itinerary.description}
				</p>

				<div className="mb-4">
					<RouteStrip route={itinerary.route} />
				</div>

				<div className="mb-5 flex flex-wrap gap-1.5">
					{itinerary.highlights.map((h) => (
						<Badge
							key={h}
							className="border-foreground/10 border bg-transparent px-2 py-0.5 text-[0.55rem]"
							variant="outline"
						>
							{h}
						</Badge>
					))}
				</div>

				<ul className="mb-6 space-y-1.5 border-foreground/10 border-t pt-4">
					{itinerary.dayPreview.slice(0, 3).map((day) => (
						<li
							className="font-sans text-muted-foreground text-xs leading-relaxed"
							key={day}
						>
							{day}
						</li>
					))}
				</ul>

				<div className="mt-auto">
					<a
						className="inline-flex items-center gap-1.5 font-sans font-semibold text-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:text-primary"
						href={`/itineraries/${itinerary.id}`}
					>
						View Journey
						<IconArrowNarrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
					</a>
				</div>
			</div>
		</motion.article>
	);
}

export default function ItinerariesSection({
	itineraries,
}: {
	itineraries: Itinerary[];
}) {
	const [activeCategory, setActiveCategory] = useState<Category>("All");

	const filtered =
		activeCategory === "All"
			? itineraries
			: itineraries.filter((i) => i.categories.includes(activeCategory));

	const featured = filtered.find((i) => i.featured);
	const standard = filtered.filter((i) => !i.featured);

	return (
		<section
			className="bg-muted py-[clamp(4rem,10vw,10rem)]"
			id="itineraries"
		>
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<ScrollReveal>
					<div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
						<div>
							<p className="mb-3 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Browse by mood
							</p>
							<h2 className="font-heading text-[clamp(2.6rem,6vw,5rem)] leading-[0.9] tracking-[-0.05em]">
								The collection
							</h2>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal delay={0.1}>
					<Tabs
						className="mb-12"
						value={activeCategory}
						onValueChange={(v) => setActiveCategory(v as Category)}
					>
						<TabsList className="flex-wrap justify-start bg-transparent" variant="line">
							{categories.map((cat) => (
								<TabsTrigger key={cat} value={cat}>
									{cat}
								</TabsTrigger>
							))}
						</TabsList>
					</Tabs>
				</ScrollReveal>

				<AnimatePresence mode="wait">
					{filtered.length === 0 ? (
						<motion.div
							className="py-20 text-center"
							initial={{ opacity: 0 }}
							key="empty"
							transition={{ duration: 0.4 }}
							whileInView={{ opacity: 1 }}
						>
							<p className="font-sans text-muted-foreground text-base">
								No itineraries match this category yet.
							</p>
						</motion.div>
					) : (
						<motion.div
							className="space-y-8"
							initial={{ opacity: 0 }}
							key={activeCategory}
							transition={{ duration: 0.4 }}
							whileInView={{ opacity: 1 }}
						>
							{featured && <FeaturedCard itinerary={featured} />}

							{standard.length > 0 && (
								<div className="grid gap-6 md:grid-cols-2">
									{standard.map((itinerary, i) => (
										<StandardCard
											index={i}
											itinerary={itinerary}
											key={itinerary.id}
										/>
										))}
								</div>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
