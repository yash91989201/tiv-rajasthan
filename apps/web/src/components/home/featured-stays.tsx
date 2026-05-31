"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
	IconArrowNarrowLeft,
	IconArrowNarrowRight,
} from "@tabler/icons-react";
import ScrollReveal from "./scroll-reveal";

const baseProperties = [
	{
		name: "Samode Palace",
		location: "Samode, near Jaipur",
		description:
			"A 475-year-old palace where frescoed courtyards cool after sunset, mirror-work halls glow softly, and dinner can move to the roof above the village.",
		image:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Rambagh Palace",
		location: "Jaipur",
		description:
			"The former residence of the Maharaja of Jaipur, set in 47 acres of gardens. Peacocks cross the lawn while afternoon tea unfolds in the veranda.",
		image:
			"https://images.unsplash.com/photo-1703665180697-523baf7c88ec?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Taj Lake Palace",
		location: "Udaipur",
		description:
			"A marble address set on Lake Pichola, reached by boat and understood slowly from a terrace when the water turns silver.",
		image:
			"https://images.unsplash.com/photo-1655106606799-01e0100e9b94?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "The Oberoi Udaivilas",
		location: "Udaipur",
		description:
			"Domed pavilions along Lake Pichola where courtyards hold their own light and the city stays across the water like a painting left unfinished.",
		image:
			"https://images.unsplash.com/photo-1715405156346-9cc4d4a94ff9?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Suryagarh",
		location: "Jaisalmer",
		description:
			"A desert fort hotel of deep corridors, evening music, and Thar drives that return you to a courtyard table before the lamps are lit.",
		image:
			"https://images.unsplash.com/photo-1636009559567-7a315a74e0e1?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Umaid Bhawan Palace",
		location: "Jodhpur",
		description:
			"Art Deco grandeur on a hilltop overlooking the Blue City. The stone glows amber at dusk, and the gardens hold a silence the city below cannot.",
		image:
			"https://images.unsplash.com/photo-1566959621395-9200c65ba74b?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "RAAS Jodhpur",
		location: "Jodhpur",
		description:
			"A boutique hotel at the foot of Mehrangarh, where sandstone rooms frame the fort and the old city unfolds below like a blue thread pulled loose.",
		image:
			"https://images.unsplash.com/photo-1676444490527-cf8f7894e9f0?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Neemrana Fort Palace",
		location: "Neemrana",
		description:
			"A 15th-century fort turned heritage hotel, cascading down a hillside between Jaipur and Delhi. Zip-lining, vintage car drives, and terraces that remember.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
	},
	{
		name: "Raas Devigarh",
		location: "Delwara, near Udaipur",
		description:
			"An 18th-century palace perched above the Aravalli hills, stripped to minimal interiors where the old stone does the talking and the pool holds the sky.",
		image:
			"https://images.unsplash.com/photo-1655106606763-dc1506c6c1e7?q=80&w=1200&auto=format&fit=crop",
	},
] as const;

const properties = [...baseProperties, ...baseProperties, ...baseProperties];

export default function FeaturedStays() {
	const railRef = useRef<HTMLDivElement>(null);
	const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const isPausedRef = useRef(false);
	const [activeIndex, setActiveIndex] = useState(0);
	const isResettingRef = useRef(false);

	const totalItems = baseProperties.length;
	const cardWidth = 740;

	const scrollToIndex = useCallback(
		(index: number, behavior: ScrollBehavior = "smooth") => {
			if (!railRef.current) return;
			railRef.current.scrollTo({ left: index * cardWidth, behavior });
		},
		[cardWidth],
	);

	const handleScroll = useCallback(() => {
		if (!railRef.current || isResettingRef.current) return;
		const { scrollLeft } = railRef.current;
		const oneSetWidth = totalItems * cardWidth;

		const rawIndex = Math.round(scrollLeft / cardWidth);
		setActiveIndex(((rawIndex % totalItems) + totalItems) % totalItems);

		if (scrollLeft < oneSetWidth * 0.1) {
			isResettingRef.current = true;
			railRef.current.scrollLeft = scrollLeft + oneSetWidth;
			requestAnimationFrame(() => {
				isResettingRef.current = false;
			});
		} else if (scrollLeft > oneSetWidth * 1.9) {
			isResettingRef.current = true;
			railRef.current.scrollLeft = scrollLeft - oneSetWidth;
			requestAnimationFrame(() => {
				isResettingRef.current = false;
			});
		}
	}, [totalItems, cardWidth]);

	const startAutoScroll = useCallback(() => {
		if (autoScrollRef.current) clearInterval(autoScrollRef.current);
		autoScrollRef.current = setInterval(() => {
			if (isPausedRef.current || !railRef.current) return;
			railRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
		}, 3000);
	}, [cardWidth]);

	useEffect(() => {
		startAutoScroll();
		return () => {
			if (autoScrollRef.current) clearInterval(autoScrollRef.current);
		};
	}, [startAutoScroll]);

	useEffect(() => {
		const rail = railRef.current;
		if (!rail) return;
		rail.addEventListener("scroll", handleScroll, { passive: true });
		return () => rail.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	const scroll = (direction: "left" | "right") => {
		if (!railRef.current) return;
		isPausedRef.current = true;
		if (autoScrollRef.current) clearInterval(autoScrollRef.current);
		railRef.current.scrollBy({
			left: direction === "left" ? -cardWidth : cardWidth,
			behavior: "smooth",
		});
		setTimeout(() => {
			isPausedRef.current = false;
			startAutoScroll();
		}, 4000);
	};

	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,12rem)]">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-12 grid gap-8 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Where you stay
							</p>
						</ScrollReveal>
						<ScrollReveal delay={0.08}>
							<h2 className="font-heading text-[clamp(3.2rem,6.6vw,7.1rem)] leading-[0.84] tracking-[-0.055em]">
								The room is part of the itinerary
							</h2>
						</ScrollReveal>
					</div>
					<div className="flex items-end justify-between gap-6 lg:col-span-5 lg:col-start-8">
						<ScrollReveal delay={0.16}>
							<p className="max-w-md font-sans text-base text-muted-foreground leading-relaxed">
								A hotel is never just the place between excursions. It decides
								your mornings, your silences, and the way a city enters the room.
							</p>
						</ScrollReveal>
						<ScrollReveal delay={0.22}>
							<div className="hidden gap-3 lg:flex">
								<button
									aria-label="Scroll left"
									className="flex h-11 w-11 items-center justify-center border border-foreground/15 transition-colors hover:border-foreground/40 hover:bg-foreground/5"
									onClick={() => scroll("left")}
									type="button"
								>
									<IconArrowNarrowLeft
										className="h-5 w-5"
										strokeWidth={1.5}
									/>
								</button>
								<button
									aria-label="Scroll right"
									className="flex h-11 w-11 items-center justify-center border border-foreground/15 transition-colors hover:border-foreground/40 hover:bg-foreground/5"
									onClick={() => scroll("right")}
									type="button"
								>
									<IconArrowNarrowRight
										className="h-5 w-5"
										strokeWidth={1.5}
									/>
								</button>
							</div>
						</ScrollReveal>
					</div>
				</div>

				<div
					className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
					onMouseEnter={() => {
						isPausedRef.current = true;
					}}
					onMouseLeave={() => {
						isPausedRef.current = false;
					}}
					ref={railRef}
				>
					{properties.map((property, index) => (
						<article
							className="group relative flex w-[calc(50%-0.625rem)] min-w-[32rem] flex-col snap-start"
							key={`${property.name}-${index}`}
						>
							<div className="relative mb-5 aspect-[3/4] overflow-hidden">
								<img
									alt={property.name}
									className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									height={800}
									src={property.image}
									width={600}
									loading={index < 3 ? "eager" : "lazy"}
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 p-6">
									<p className="mb-1 font-sans text-primary text-xs uppercase tracking-[0.22em]">
										{property.location}
									</p>
									<h3 className="font-heading text-background text-[clamp(2rem,3.5vw,3.2rem)] leading-[0.88] tracking-[-0.04em]">
										{property.name}
									</h3>
								</div>
							</div>
							<p className="font-sans text-muted-foreground text-sm leading-relaxed">
								{property.description}
							</p>
						</article>
					))}
				</div>

				<ScrollReveal delay={0.3}>
					<div className="mt-10 flex items-center justify-between">
						<div className="flex items-center gap-4">
							<p className="font-sans text-muted-foreground text-sm">
								{totalItems} curated properties across Rajasthan
							</p>
							<div className="hidden gap-1.5 lg:flex">
								{baseProperties.map((_, i) => (
									<button
										aria-label={`Go to ${baseProperties[i].name}`}
										className={`h-1.5 rounded-full transition-all duration-300 ${
											activeIndex === i
												? "w-6 bg-foreground"
												: "w-1.5 bg-foreground/20"
										}`}
										key={i}
										onClick={() => {
											isPausedRef.current = true;
											if (autoScrollRef.current)
												clearInterval(autoScrollRef.current);
											scrollToIndex(i);
											setTimeout(() => {
												isPausedRef.current = false;
												startAutoScroll();
											}, 4000);
										}}
										type="button"
									/>
								))}
							</div>
						</div>
						<Link
							className="inline-flex items-center gap-2 font-sans font-semibold text-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:text-primary focus-visible:outline focus-visible:outline-1 focus-visible:outline-primary focus-visible:outline-offset-[3px]"
							to="/luxury-stays"
						>
							View all stays
							<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
						</Link>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}
