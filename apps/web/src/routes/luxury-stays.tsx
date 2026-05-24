"use client";

import {
	IconArrowNarrowRight,
	IconBed,
	IconCalendarEvent,
	IconChevronDown,
	IconCompass,
	IconMapPin,
	IconMoon,
	IconSparkles,
} from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Badge } from "@tiv-rajasthan/ui/components/badge";
import { buttonVariants } from "@tiv-rajasthan/ui/components/button";
import { Separator } from "@tiv-rajasthan/ui/components/separator";
import { cn } from "@tiv-rajasthan/ui/lib/utils";
import { motion, useReducedMotion } from "motion/react";
import {
	ImageReveal,
	ParallaxImage,
	StaggerText,
} from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";

export const Route = createFileRoute("/luxury-stays")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Luxury Stays in Rajasthan | TIV Rajasthan",
			},
			{
				name: "description",
				content:
					"Palace hotels, desert camps, wildlife lodges, and private boutique stays across Rajasthan, curated with TIV's quiet luxury travel design.",
			},
		],
	}),
});

interface Stay {
	description: string;
	image: string;
	imageAlt: string;
	location: string;
	name: string;
	tags: readonly string[];
}

interface StayChapter {
	chapter: string;
	description: string;
	image: string;
	imageAlt: string;
	label: string;
	lead: string;
	name: string;
	notes: readonly string[];
	stays: readonly Stay[];
}

const chapters: readonly StayChapter[] = [
	{
		chapter: "01",
		name: "Jaipur",
		label: "Fresco, gates, private courtyards",
		lead: "Palace hotels before the city gathers speed",
		description:
			"Jaipur rewards the guest who starts slowly. We place you inside restored havelis and palace addresses where frescoed corridors, garden breakfasts, and after-hours access decide the rhythm of the city.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1800&auto=format&fit=crop",
		imageAlt:
			"Amber-toned palace facade in Jaipur seen through layered arches at quiet light.",
		notes: ["Old-city ateliers", "Terrace suppers", "Amber at first light"],
		stays: [
			{
				name: "Samode Palace",
				location: "Samode, near Jaipur",
				description:
					"A 475-year-old palace where mirror halls glow after sunset and dinner can move to the roof above the village.",
				image:
					"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
				imageAlt:
					"Lamp-lit dining room prepared for an intimate private dinner.",
				tags: ["Palace", "Private dining", "Frescoes"],
			},
			{
				name: "Rambagh Palace",
				location: "Central Jaipur",
				description:
					"Formal gardens, polished service, and mornings planned around the city before the heat arrives.",
				image:
					"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Luxury hotel pool and loungers in soft daylight.",
				tags: ["Grand hotel", "Gardens", "City access"],
			},
			{
				name: "The Johri",
				location: "Johari Bazaar",
				description:
					"A jewel-box haveli for travelers who want the old city close, but never noisy.",
				image:
					"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
				imageAlt:
					"Historic Indian architecture glowing in warm afternoon light.",
				tags: ["Boutique", "Old city", "Quiet rooms"],
			},
		],
	},
	{
		chapter: "02",
		name: "Jaisalmer",
		label: "Sandstone, canvas, night air",
		lead: "Desert stays designed around the cooling of the day",
		description:
			"The Thar is not a backdrop. It is a clock. Your stay should understand late-afternoon drives, music after dinner, and the silence that arrives when the lamps are lowered.",
		image:
			"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1800",
		imageAlt: "Camel caravan moving across warm desert sand near Jaisalmer.",
		notes: ["Dune dinners", "Fort-side mornings", "Private campfire"],
		stays: [
			{
				name: "Suryagarh",
				location: "Jaisalmer",
				description:
					"A desert fort hotel of deep corridors, evening music, and Thar drives that return to a courtyard table before the lamps are lit.",
				image:
					"https://images.pexels.com/photos/3581368/pexels-photo-3581368.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Soft desert dunes at golden hour outside Jaisalmer.",
				tags: ["Fort hotel", "Thar drives", "Courtyards"],
			},
			{
				name: "The Serai",
				location: "Outside Jaisalmer",
				description:
					"Canvas pavilions, slow lunches, and a camp rhythm that keeps the desert wide rather than staged.",
				image:
					"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
				imageAlt:
					"Desert landscape with warm scrub and open sky before sunset.",
				tags: ["Tent suites", "Open sky", "Slow lunches"],
			},
			{
				name: "Private Dune Camp",
				location: "Thar Desert",
				description:
					"A temporary camp for one party, assembled for the night and removed without spectacle.",
				image:
					"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "A remote Rajasthan landscape under clear desert light.",
				tags: ["Private", "One night", "No crowd"],
			},
		],
	},
	{
		chapter: "03",
		name: "Udaipur",
		label: "Water, marble, long reflections",
		lead: "Lake addresses where the crossing is part of arrival",
		description:
			"Udaipur is best approached by water and understood from terraces. The right stay protects the lake's hush, then lets the city appear in measured fragments.",
		image:
			"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1800",
		imageAlt: "Udaipur lake and palace architecture reflected in calm water.",
		notes: ["Boat arrivals", "Lake terraces", "Aperitif hour"],
		stays: [
			{
				name: "Taj Lake Palace",
				location: "Lake Pichola",
				description:
					"A marble address reached by boat and understood slowly from a terrace when the water turns silver.",
				image:
					"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Still luxury hotel pool with white stone and loungers.",
				tags: ["Lake arrival", "Marble", "Iconic"],
			},
			{
				name: "RAAS Devigarh",
				location: "Delwara",
				description:
					"A hill palace outside the city, spare and luminous, useful when Udaipur needs more air.",
				image:
					"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Layered palace architecture in Rajasthan under warm sun.",
				tags: ["Hill palace", "Architecture", "Retreat"],
			},
			{
				name: "The Leela Palace",
				location: "Lake Pichola",
				description:
					"Large rooms, careful service, and lake-facing pauses between private city encounters.",
				image:
					"https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Lake palace skyline with soft reflections in Udaipur.",
				tags: ["Lake view", "Service", "Terraces"],
			},
		],
	},
	{
		chapter: "04",
		name: "Jodhpur",
		label: "Blue city, sandstone, rampart shade",
		lead: "Heritage rooms with the fort kept in view",
		description:
			"In Jodhpur, scale matters. We pair intimate old-city walks with hotels that hold the Mehrangarh view, then leave space for stillness when the afternoon turns blue.",
		image:
			"https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1800&auto=format&fit=crop",
		imageAlt:
			"Rajasthan fort architecture and arched views in warm stone light.",
		notes: ["Rampart access", "Blue-hour walks", "Dinner with the fort"],
		stays: [
			{
				name: "RAAS Jodhpur",
				location: "Old City",
				description:
					"A restored haveli beneath Mehrangarh, with modern lines and a fort view that anchors the day.",
				image:
					"https://images.unsplash.com/photo-1595651443546-9a6e5e3e2521?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Red sandstone palace wall with carved details in Rajasthan.",
				tags: ["Haveli", "Fort view", "Old city"],
			},
			{
				name: "Umaid Bhawan Palace",
				location: "Chittar Hill",
				description:
					"Royal scale, museum quiet, and a slower way to understand the desert capital.",
				image:
					"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Elegant hotel pool arranged for a quiet afternoon retreat.",
				tags: ["Palace", "Private grounds", "Royal scale"],
			},
			{
				name: "Mihir Garh",
				location: "Marwar countryside",
				description:
					"A small desert fort for riders, readers, and guests who want Jodhpur at a distance.",
				image:
					"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Open scrubland and desert trees under a pale sky.",
				tags: ["Countryside", "Riding", "Quiet"],
			},
		],
	},
	{
		chapter: "05",
		name: "Pushkar",
		label: "Pilgrim lake, gardens, soft mornings",
		lead: "Boutique retreats outside the bazaar's noise",
		description:
			"Pushkar should never feel rushed. We keep the lake, the bazaar, and the desert edge in reach, then give you a room that knows how to disappear.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1800&auto=format&fit=crop",
		imageAlt:
			"Warm Rajasthan architecture and reflective water under a pale sky.",
		notes: ["Lake at dawn", "Garden lunches", "Bazaar between crowds"],
		stays: [
			{
				name: "Sujan Sher Bagh Camp",
				location: "Pushkar countryside",
				description:
					"Canvas, garden shade, and dinners that let the desert stay close without becoming performance.",
				image:
					"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Quiet wilderness landscape with trees and warm light.",
				tags: ["Camp", "Garden", "Slow pace"],
			},
			{
				name: "Bhanwar Singh Palace",
				location: "Pushkar edge",
				description:
					"An easy base when the brief asks for ceremony, space, and a less compressed town experience.",
				image:
					"https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt:
					"Luxury resort pool and deck arranged in clean afternoon light.",
				tags: ["Resort", "Space", "Family ready"],
			},
			{
				name: "Private Haveli Buyout",
				location: "Near Pushkar Lake",
				description:
					"A small house reserved for one party, chosen for proximity without losing privacy.",
				image:
					"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Intimate dining room ready for a private group meal.",
				tags: ["Buyout", "Private", "Lake access"],
			},
		],
	},
	{
		chapter: "06",
		name: "Ranthambore",
		label: "Forest edge, canvas, early drives",
		lead: "Lodges that respect the hours animals keep",
		description:
			"A wildlife stay has to manage anticipation. The best ones understand predawn tea, mud on the vehicle, quiet lunches, and the strange hush after a sighting.",
		image:
			"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1800",
		imageAlt: "Tiger resting in forest light near dry grasses.",
		notes: ["Dawn drives", "Naturalist briefings", "Forest lunches"],
		stays: [
			{
				name: "Aman-i-Khas",
				location: "Ranthambore edge",
				description:
					"Ten Mughal-inspired tents, spare service, and a camp cadence shaped around the reserve.",
				image:
					"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Tiger in filtered forest light near Ranthambore.",
				tags: ["Tented", "Wildlife", "Quiet luxury"],
			},
			{
				name: "Sujan Sher Bagh",
				location: "Sawai Madhopur",
				description:
					"A polished jungle camp with strong naturalists and the rare ability to make waiting feel considered.",
				image:
					"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
				imageAlt: "Dry forest and open terrain under warm Rajasthan light.",
				tags: ["Naturalists", "Camp", "Safari rhythm"],
			},
			{
				name: "Khem Villas",
				location: "Reserve buffer",
				description:
					"A softer eco retreat for families or guests who want the forest without heavy formality.",
				image:
					"https://images.pexels.com/photos/7846476/pexels-photo-7846476.jpeg?auto=compress&cs=tinysrgb&w=1200",
				imageAlt: "Tiger looking across dry grass in a protected forest.",
				tags: ["Eco retreat", "Family", "Low-key"],
			},
		],
	},
] as const;

function RouteComponent() {
	return (
		<div className="flex flex-col bg-background">
			<LuxuryStayHero />
			<EditorialPrelude />
			<SplitChapter chapter={chapters[0]} />
			<GalleryChapter chapter={chapters[1]} />
			<MosaicChapter chapter={chapters[2]} />
			<SplitChapter chapter={chapters[3]} reverse />
			<GalleryChapter chapter={chapters[4]} muted />
			<MosaicChapter chapter={chapters[5]} dark />
			<FinalInvitation />
		</div>
	);
}

function LuxuryStayHero() {
	const shouldReduceMotion = useReducedMotion() ?? false;

	return (
		<section className="relative min-h-svh overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.24}
				src="https://images.pexels.com/photos/3881104/pexels-photo-3881104.jpeg?auto=compress&cs=tinysrgb&w=2400"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.9)_0%,oklch(0.153_0.006_107.1/0.66)_48%,oklch(0.153_0.006_107.1/0.24)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground via-foreground/70 to-transparent" />
			<div className="absolute top-[12vh] right-[-12vw] hidden font-heading text-[23vw] text-background/10 leading-none tracking-[-0.08em] lg:block">
				Stay
			</div>

			<div className="relative z-10 mx-auto grid min-h-svh max-w-[1600px] grid-cols-1 items-end gap-12 px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:pb-16">
				<div className="pb-[10vh] lg:col-span-8">
					<motion.p
						className="mb-5 max-w-xl font-sans text-background/70 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{
							opacity: shouldReduceMotion ? 1 : 0,
							y: shouldReduceMotion ? 0 : 20,
						}}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Palace hotels, desert camps, forest lodges
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-6xl font-heading text-[clamp(4.2rem,10vw,10.8rem)] text-background leading-[0.83] tracking-[-0.058em]"
						delay={0.28}
						staggerDelay={0.06}
						text="Stay where Rajasthan changes tempo"
					/>
				</div>

				<motion.div
					className="border-background/18 border-t pt-6 lg:col-span-4 lg:mb-[12vh]"
					initial={{
						opacity: shouldReduceMotion ? 1 : 0,
						y: shouldReduceMotion ? 0 : 24,
					}}
					transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="max-w-md font-sans text-background/74 text-base leading-relaxed md:text-lg">
						A curated stay is not the pause between excursions. It decides when
						you wake, what you hear after dinner, and how privately a place
						opens.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
						<a
							className={cn(buttonVariants(), "h-auto gap-2 px-8 py-4")}
							href="/contact"
						>
							Design my stay
							<IconArrowNarrowRight strokeWidth={1.5} />
						</a>
						<a
							className={cn(
								buttonVariants({ variant: "outline" }),
								"h-auto border-background/28 px-8 py-4 text-background hover:border-background/60 hover:bg-background/10 hover:text-background"
							)}
							href="#chapters"
						>
							Explore chapters
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div
				animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
				className="absolute right-6 bottom-8 z-10 sm:right-10"
				transition={{
					duration: 2.8,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
				}}
			>
				<IconChevronDown
					className="h-6 w-6 text-background/50"
					strokeWidth={1.5}
				/>
			</motion.div>
		</section>
	);
}

function EditorialPrelude() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,11vw,11rem)]">
			<div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16">
				<ScrollReveal className="lg:col-span-5">
					<div className="flex items-center gap-3 text-primary">
						<IconMoon className="h-4 w-4" strokeWidth={1.5} />
						<p className="font-sans text-xs uppercase tracking-[0.3em]">
							The stay sets the hour
						</p>
					</div>
					<h2 className="mt-6 max-w-2xl font-heading text-[clamp(3.4rem,7vw,7.8rem)] leading-[0.86] tracking-[-0.055em]">
						A hotel can be the doorway, not the footnote
					</h2>
				</ScrollReveal>

				<ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
					<p className="max-w-2xl font-sans text-foreground/82 text-xl leading-relaxed md:text-2xl">
						We arrange Rajasthan through addresses with atmosphere: palace
						hotels, family havelis, desert camps, and forest lodges where the
						staff understand timing as much as service.
					</p>
					<Separator className="my-8 bg-border" />
					<div className="grid gap-5 sm:grid-cols-3">
						{[
							{
								icon: IconBed,
								text: "Rooms chosen for pace, privacy, and mood",
							},
							{
								icon: IconCompass,
								text: "Routes shaped around arrival and rest",
							},
							{
								icon: IconCalendarEvent,
								text: "Seasonal counsel before anything is booked",
							},
						].map(({ icon: Icon, text }) => (
							<div className="border-border border-t pt-4" key={text}>
								<Icon className="mb-5 h-5 w-5 text-primary" strokeWidth={1.5} />
								<p className="font-sans text-muted-foreground text-sm leading-relaxed">
									{text}
								</p>
							</div>
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}

function SplitChapter({
	chapter,
	reverse = false,
}: {
	chapter: StayChapter;
	reverse?: boolean;
}) {
	const featured = chapter.stays[0];
	const supportingStays = chapter.stays.slice(1);

	return (
		<section
			className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,12rem)]"
			id={chapter.chapter === "01" ? "chapters" : undefined}
		>
			<div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-10 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16">
				<ScrollReveal
					className={`lg:col-span-6 ${reverse ? "lg:col-start-7" : ""}`}
					direction={reverse ? "left" : "right"}
				>
					<div className="relative">
						<div className="absolute -top-8 -left-4 z-10 font-heading text-[clamp(6rem,12vw,13rem)] text-primary/18 leading-none tracking-[-0.08em]">
							{chapter.chapter}
						</div>
						<ImageReveal
							alt={chapter.imageAlt}
							aspectRatio="4 / 5"
							className="relative min-h-[32rem] bg-muted shadow-[0_2rem_5rem_hsl(var(--foreground)/0.13)]"
							src={chapter.image}
						/>
						<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/68 via-foreground/8 to-transparent p-6 text-background sm:p-8">
							<p className="max-w-xs font-sans text-background/78 text-sm leading-relaxed">
								{chapter.label}
							</p>
						</div>
					</div>
				</ScrollReveal>

				<ScrollReveal
					className={`flex flex-col justify-center ${reverse ? "lg:col-span-5 lg:col-start-1 lg:row-start-1" : "lg:col-span-5 lg:col-start-8"}`}
					delay={0.12}
				>
					<div className="mb-6 flex flex-wrap items-center gap-3">
						<Badge className="text-primary">Chapter {chapter.chapter}</Badge>
						<Separator className="h-px w-16 bg-primary/28" />
						<Badge variant="secondary">{chapter.name}</Badge>
					</div>
					<h2 className="max-w-2xl font-heading text-[clamp(3.2rem,6.8vw,7.4rem)] leading-[0.86] tracking-[-0.055em]">
						{chapter.lead}
					</h2>
					<p className="mt-8 max-w-xl font-sans text-base text-muted-foreground leading-relaxed md:text-lg">
						{chapter.description}
					</p>

					<div className="mt-10">
						<StayCard stay={featured} variant="featured" />
					</div>

					<div className="mt-6 grid gap-4 sm:grid-cols-2">
						{supportingStays.map((stay) => (
							<StayCard key={stay.name} stay={stay} variant="compact" />
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
}

function GalleryChapter({
	chapter,
	muted = false,
}: {
	chapter: StayChapter;
	muted?: boolean;
}) {
	return (
		<section
			className={`relative overflow-hidden py-[clamp(5rem,12vw,12rem)] ${muted ? "bg-muted/45 text-foreground" : "bg-foreground text-background"}`}
		>
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12">
					<ScrollReveal className="lg:col-span-7">
						<div className="mb-6 flex flex-wrap items-center gap-3">
							<Badge
								className={
									muted ? "text-primary" : "text-primary-foreground/80"
								}
							>
								Chapter {chapter.chapter}
							</Badge>
							<Separator
								className={`h-px w-16 ${muted ? "bg-primary/28" : "bg-background/24"}`}
							/>
							<Badge variant={muted ? "secondary" : "default"}>
								{chapter.name}
							</Badge>
						</div>
						<h2 className="max-w-5xl font-heading text-[clamp(3.3rem,7.5vw,8.2rem)] leading-[0.86] tracking-[-0.055em]">
							{chapter.lead}
						</h2>
					</ScrollReveal>
					<ScrollReveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
						<p
							className={`max-w-md font-sans text-base leading-relaxed md:text-lg ${muted ? "text-muted-foreground" : "text-background/70"}`}
						>
							{chapter.description}
						</p>
					</ScrollReveal>
				</div>

				<div className="mt-14 -mr-6 overflow-x-auto pr-6 pb-4 [scrollbar-width:none] sm:-mr-10 sm:pr-10 [&::-webkit-scrollbar]:hidden">
					<div className="flex w-max snap-x snap-mandatory gap-5">
						{chapter.stays.map((stay, index) => (
							<GalleryStayPanel
								index={index}
								key={stay.name}
								muted={muted}
								stay={stay}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function GalleryStayPanel({
	index,
	muted,
	stay,
}: {
	index: number;
	muted: boolean;
	stay: Stay;
}) {
	return (
		<article
			className={`group relative flex min-h-[34rem] w-[min(82vw,31rem)] snap-start flex-col justify-end overflow-hidden bg-card shadow-[0_2rem_5rem_hsl(var(--foreground)/0.18)] ${index === 0 ? "lg:w-[min(78vw,46rem)]" : ""}`}
		>
			<img
				alt={stay.imageAlt}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
				height={1100}
				src={stay.image}
				width={900}
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-foreground/86 via-foreground/26 to-transparent" />
			<div className="relative z-10 p-6 text-background sm:p-8">
				<div className="mb-5 flex flex-wrap gap-2">
					{stay.tags.map((tag) => (
						<Badge className="text-background/72" key={tag}>
							{tag}
						</Badge>
					))}
				</div>
				<div className="mb-3 flex items-center gap-2 text-primary-foreground/76">
					<IconMapPin className="h-4 w-4" strokeWidth={1.5} />
					<p className="font-sans text-xs uppercase tracking-[0.22em]">
						{stay.location}
					</p>
				</div>
				<h3 className="max-w-xl font-heading text-[clamp(2.7rem,5vw,5.7rem)] leading-[0.86] tracking-[-0.055em]">
					{stay.name}
				</h3>
				<p className="mt-5 max-w-xl font-sans text-background/72 text-sm leading-relaxed md:text-base">
					{stay.description}
				</p>
			</div>
			{muted ? (
				<div className="absolute inset-0 ring-1 ring-background/10 ring-inset" />
			) : null}
		</article>
	);
}

function MosaicChapter({
	chapter,
	dark = false,
}: {
	chapter: StayChapter;
	dark?: boolean;
}) {
	return (
		<section
			className={`relative overflow-hidden py-[clamp(5rem,12vw,12rem)] ${dark ? "bg-foreground text-background" : "bg-background text-foreground"}`}
		>
			<div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-16">
				<ScrollReveal className="lg:col-span-4">
					<div className="sticky top-28">
						<div className="mb-6 flex flex-wrap items-center gap-3">
							<Badge
								className={dark ? "text-primary-foreground/80" : "text-primary"}
							>
								Chapter {chapter.chapter}
							</Badge>
							<Badge variant={dark ? "default" : "secondary"}>
								{chapter.name}
							</Badge>
						</div>
						<h2 className="font-heading text-[clamp(3.2rem,6.6vw,7.2rem)] leading-[0.86] tracking-[-0.055em]">
							{chapter.lead}
						</h2>
						<p
							className={`mt-8 max-w-md font-sans text-base leading-relaxed md:text-lg ${dark ? "text-background/72" : "text-muted-foreground"}`}
						>
							{chapter.description}
						</p>
						<div className="mt-10 grid gap-3">
							{chapter.notes.map((note) => (
								<div
									className={`flex items-center gap-3 border-t pt-3 ${dark ? "border-background/16" : "border-border"}`}
									key={note}
								>
									<IconSparkles
										className="h-4 w-4 text-primary"
										strokeWidth={1.5}
									/>
									<p className="font-sans text-sm uppercase tracking-[0.18em]">
										{note}
									</p>
								</div>
							))}
						</div>
					</div>
				</ScrollReveal>

				<div className="grid gap-5 lg:col-span-8 lg:grid-cols-12">
					<ScrollReveal className="lg:col-span-7">
						<div className="relative min-h-[36rem] overflow-hidden bg-muted">
							<img
								alt={chapter.imageAlt}
								className="absolute inset-0 h-full w-full object-cover"
								height={1200}
								src={chapter.image}
								width={900}
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
							<p className="absolute right-6 bottom-6 left-6 font-sans text-background/78 text-sm leading-relaxed">
								{chapter.label}
							</p>
						</div>
					</ScrollReveal>

					<div className="grid gap-5 lg:col-span-5">
						{chapter.stays.map((stay, index) => (
							<ScrollReveal delay={0.1 + index * 0.08} key={stay.name}>
								<StayCard
									dark={dark}
									stay={stay}
									variant={index === 0 ? "editorial" : "compact"}
								/>
							</ScrollReveal>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

function StayCard({
	dark = false,
	stay,
	variant,
}: {
	dark?: boolean;
	stay: Stay;
	variant: "compact" | "editorial" | "featured";
}) {
	if (variant === "featured") {
		return (
			<article className="group grid gap-5 border-border border-y py-5 sm:grid-cols-[0.78fr_1fr]">
				<div className="relative min-h-60 overflow-hidden bg-muted">
					<img
						alt={stay.imageAlt}
						className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
						height={720}
						src={stay.image}
						width={640}
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-foreground/38 to-transparent" />
				</div>
				<div className="flex flex-col justify-between gap-8 py-1">
					<div>
						<div className="mb-4 flex flex-wrap gap-2">
							{stay.tags.map((tag) => (
								<Badge key={tag} variant="secondary">
									{tag}
								</Badge>
							))}
						</div>
						<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
							{stay.location}
						</p>
						<h3 className="font-heading text-[clamp(2.4rem,4.8vw,5rem)] leading-[0.86] tracking-[-0.055em]">
							{stay.name}
						</h3>
					</div>
					<p className="max-w-lg font-sans text-muted-foreground text-sm leading-relaxed">
						{stay.description}
					</p>
				</div>
			</article>
		);
	}

	return (
		<article
			className={`group border p-5 transition-colors duration-500 ${dark ? "border-background/16 bg-background/5 text-background hover:bg-background/8" : "border-border bg-card text-card-foreground hover:border-primary/32"}`}
		>
			<div className="mb-5 flex flex-wrap gap-2">
				{stay.tags.slice(0, 2).map((tag) => (
					<Badge
						className={dark ? "text-background/60" : undefined}
						key={tag}
						variant="secondary"
					>
						{tag}
					</Badge>
				))}
			</div>
			<p className="mb-3 font-sans text-primary text-xs uppercase tracking-[0.22em]">
				{stay.location}
			</p>
			<h3 className="font-heading text-[clamp(2rem,3.4vw,3.5rem)] leading-[0.9] tracking-[-0.05em]">
				{stay.name}
			</h3>
			<p
				className={`mt-5 font-sans text-sm leading-relaxed ${dark ? "text-background/66" : "text-muted-foreground"}`}
			>
				{stay.description}
			</p>
			{variant === "editorial" ? (
				<div className="mt-6 aspect-[16/10] overflow-hidden bg-muted">
					<img
						alt={stay.imageAlt}
						className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
						height={640}
						src={stay.image}
						width={900}
					/>
				</div>
			) : null}
		</article>
	);
}

function FinalInvitation() {
	return (
		<section className="relative min-h-[86vh] overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.22}
				src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400&auto=format&fit=crop"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.92)_0%,oklch(0.153_0.006_107.1/0.68)_52%,oklch(0.153_0.006_107.1/0.24)_100%)]" />
			<div className="absolute top-10 right-8 hidden font-heading text-[18vw] text-background/10 leading-none tracking-[-0.08em] lg:block">
				Quiet
			</div>

			<div className="relative z-10 mx-auto grid min-h-[86vh] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12">
				<div className="lg:col-span-8 lg:col-start-2">
					<ScrollReveal>
						<p className="mb-6 font-sans text-background/60 text-xs uppercase tracking-[0.3em]">
							Begin with the kind of sleep you want
						</p>
					</ScrollReveal>
					<StaggerText
						as="h2"
						className="max-w-5xl font-heading text-[clamp(3.8rem,9vw,9.5rem)] text-background leading-[0.84] tracking-[-0.055em]"
						delay={0.1}
						text="Tell us how Rajasthan should feel when the door closes"
					/>
				</div>

				<div className="lg:col-span-4 lg:col-start-8 lg:self-end lg:pb-16">
					<ScrollReveal delay={0.18}>
						<p className="max-w-md border-background/18 border-t pt-6 font-sans text-background/72 text-base leading-relaxed md:text-lg">
							Share the rooms you remember, the ones you avoid, and how much
							privacy the journey should protect. We will answer with a
							considered first shape.
						</p>
					</ScrollReveal>
					<ScrollReveal className="mt-10" delay={0.28}>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								className={cn(buttonVariants(), "h-auto gap-2 px-8 py-4")}
								href="/contact"
							>
								Plan a private stay
								<IconArrowNarrowRight strokeWidth={1.5} />
							</a>
							<a
								className={cn(
									buttonVariants({ variant: "outline" }),
									"h-auto border-background/28 px-8 py-4 text-background hover:border-background/60 hover:bg-background/10 hover:text-background"
								)}
								href="/destinations"
							>
								Pair with destinations
							</a>
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
