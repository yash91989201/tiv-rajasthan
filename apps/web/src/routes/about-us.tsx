"use client";

import { IconArrowNarrowRight, IconChevronDown, IconCompass, IconHeartHandshake, IconMap, IconSparkles } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Separator } from "@tiv-rajasthan/ui/components/separator";
import { motion, useReducedMotion } from "motion/react";
import {
	ImageReveal,
	ParallaxImage,
	StaggerText,
} from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";

export const Route = createFileRoute("/about-us")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "About Us | TIV Rajasthan",
			},
			{
				name: "description",
				content:
					"TIV Rajasthan designs private journeys through palace hotels, desert camps, and wildlife lodges with quiet discretion and editorial precision.",
			},
		],
	}),
});

function RouteComponent() {
	return (
		<div className="flex flex-col bg-background">
			<Hero />
			<OriginStory />
			<CorePrinciples />
			<BrandPromise />
			<ClosingCTA />
		</div>
	);
}

function Hero() {
	const shouldReduceMotion = useReducedMotion() ?? false;

	return (
		<section className="relative min-h-svh overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.24}
				src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=2400&auto=format&fit=crop"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.88)_0%,oklch(0.153_0.006_107.1/0.62)_45%,oklch(0.153_0.006_107.1/0.22)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
			<div className="absolute top-[12vh] right-[-14vw] hidden font-heading text-[24vw] text-background/10 leading-none tracking-[-0.08em] lg:block">
				TIV
			</div>

			<div className="relative z-10 mx-auto grid min-h-svh max-w-[1600px] grid-cols-1 items-end gap-12 px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:pb-16">
				<div className="pb-[10vh] lg:col-span-8">
					<motion.p
						className="mb-5 max-w-xl font-sans text-background/70 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						A small team holding Rajasthan quietly
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-6xl font-heading text-[clamp(4.2rem,10vw,10.8rem)] text-background leading-[0.83] tracking-[-0.058em]"
						delay={0.28}
						staggerDelay={0.06}
						text="We arrange the version no brochure writes"
					/>
				</div>

				<motion.div
					className="border-background/18 border-t pt-6 lg:col-span-4 lg:mb-[12vh]"
					initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
					transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="max-w-md font-sans text-background/74 text-base leading-relaxed md:text-lg">
						TIV is not a catalogue of rooms and routes. It is a small practice
						of travel design: listening first, then shaping journeys that feel
						like they were always meant for the guest.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
						<a
							className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
							href="/contact-us"
						>
							Begin the conversation
							<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
						</a>
						<a
							className="inline-flex items-center justify-center border border-background/28 px-7 py-4 font-sans font-semibold text-background text-xs uppercase tracking-[0.22em] transition-colors hover:border-background/60 hover:bg-background/10"
							href="/destinations"
						>
							See where we go
						</a>
					</div>
				</motion.div>
			</div>

			<motion.div
				animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
				className="absolute right-6 bottom-8 z-10 sm:right-10"
				transition={{ duration: 2.8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY }}
			>
				<IconChevronDown className="h-6 w-6 text-background/50" strokeWidth={1.5} />
			</motion.div>
		</section>
	);
}

function OriginStory() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,11rem)]">
			<div className="pointer-events-none absolute top-12 left-1/2 hidden -translate-x-1/2 font-heading text-[22vw] text-muted/70 leading-none tracking-[-0.08em] lg:block">
				Begin
			</div>

			<div className="relative mx-auto grid max-w-[1500px] grid-cols-1 gap-12 px-6 sm:px-10 lg:grid-cols-12 lg:gap-8">
				<div className="lg:col-span-5 lg:col-start-2 lg:pt-24">
					<ScrollReveal>
						<p className="mb-6 font-sans text-muted-foreground text-xs uppercase tracking-[0.26em]">
							The origin
						</p>
					</ScrollReveal>

					<StaggerText
						as="h2"
						className="max-w-2xl font-heading text-[clamp(3.4rem,7vw,7rem)] leading-[0.9] tracking-[-0.045em]"
						delay={0.1}
						text="Born from the trips we wished existed"
					/>
				</div>

				<ScrollReveal className="lg:col-span-4 lg:col-start-8" delay={0.12}>
					<div className="relative">
						<div className="absolute -top-6 -left-6 h-28 w-28 bg-primary/15" />
						<ImageReveal
							alt="Warm sandstone corridor in a Rajasthan palace with soft afternoon light"
							aspectRatio="3/4"
							className="relative"
							src="https://images.unsplash.com/photo-1595651443546-9a6e5e3e2521?q=80&w=1200&auto=format&fit=crop"
						/>
					</div>
				</ScrollReveal>

				<div className="lg:col-span-4 lg:col-start-3 lg:-mt-28">
					<ScrollReveal delay={0.2}>
						<p className="max-w-lg font-sans text-lg text-muted-foreground leading-relaxed md:text-xl">
							TIV began when its founders kept returning to Rajasthan and
							realising that the best moments were never on the itinerary:
							a courtyard conversation, a guide who knew when to stop talking,
							a room where the evening light arrived exactly as hoped.
						</p>
					</ScrollReveal>
				</div>

				<div className="lg:col-span-3 lg:col-start-8 lg:-mt-10">
					<ScrollReveal delay={0.3}>
						<p className="max-w-sm border-foreground/10 border-t pt-6 font-sans text-muted-foreground text-sm leading-relaxed">
							We built the practice we wanted to hire: small, precise, and
							more interested in the guest than the commission. Every
							relationship begins with a long conversation.
						</p>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

const principles = [
	{
		icon: IconMap,
		title: "Listen before we plan",
		description:
			"We ask how you travel, not where you want to go. The route emerges from the rhythm you prefer: early mornings or slow starts, company or solitude, structure or room to wander.",
	},
	{
		icon: IconHeartHandshake,
		title: "Access without performance",
		description:
			"Private visits and after-hours entries are arranged quietly. There is no theatre around the privilege. The moment belongs to the guest, not to the brochure.",
	},
	{
		icon: IconCompass,
		title: "Design for the in-between",
		description:
			"We plan the corridors, the pauses, the meals between monuments. The best memory of a trip is often a lunch that lasted too long or a terrace reached at the right hour.",
	},
] as const;

function CorePrinciples() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,11rem)]">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								How we hold it
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] tracking-[-0.055em]"
							text="Three principles we do not compromise"
						/>
					</div>

					<div className="lg:col-span-6 lg:col-start-7">
						<div className="divide-y divide-border border-y border-border">
							{principles.map((principle, index) => {
								const Icon = principle.icon;
								return (
									<ScrollReveal delay={index * 0.1} key={principle.title}>
										<div className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr] sm:gap-8 lg:py-9">
											<motion.div
												className="flex h-12 w-12 items-center justify-center border border-border transition-colors group-hover:border-primary group-hover:text-primary"
												initial={{ opacity: 0, scale: 0.85 }}
												transition={{
													duration: 0.55,
													delay: index * 0.1,
													ease: [0.22, 1, 0.36, 1],
												}}
												viewport={{ once: true }}
												whileInView={{ opacity: 1, scale: 1 }}
											>
												<Icon className="h-5 w-5" strokeWidth={1.5} />
											</motion.div>
											<div className="grid gap-3 md:grid-cols-5 md:gap-8">
												<h3 className="font-heading text-3xl leading-none tracking-[-0.035em] md:col-span-2 md:text-4xl">
													{principle.title}
												</h3>
												<p className="font-sans text-muted-foreground text-sm leading-relaxed md:col-span-3">
													{principle.description}
												</p>
											</div>
										</div>
								</ScrollReveal>
							);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

function BrandPromise() {
	return (
		<section className="relative overflow-hidden bg-foreground py-[clamp(5rem,12vw,11rem)] text-background">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
					<ScrollReveal className="lg:col-span-5">
						<div className="flex items-center gap-3 text-primary">
							<IconSparkles className="h-4 w-4" strokeWidth={1.5} />
							<p className="font-sans text-xs uppercase tracking-[0.3em]">
								The promise
							</p>
						</div>
						<h2 className="mt-6 max-w-2xl font-heading text-[clamp(3.4rem,7vw,7.8rem)] leading-[0.86] tracking-[-0.055em]">
							What you will not find here
						</h2>
					</ScrollReveal>

					<ScrollReveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
						<p className="max-w-2xl font-sans text-foreground/82 text-xl leading-relaxed md:text-2xl">
							No group departures. No commissioned recommendations. No rush
							through a monument so the bus can leave. We work with a small
							network of hotels, guides, and families who understand that
							the rarest luxury is time held quietly.
						</p>
						<Separator className="my-8 bg-background/14" />
						<div className="grid gap-5 sm:grid-cols-3">
							{[
								{ label: "Trips planned per year", value: "Under forty" },
								{ label: "Guests per journey", value: "One party at a time" },
								{ label: "Reply time", value: "Within 24 hours" },
							].map(({ label, value }) => (
								<div className="border-background/14 border-t pt-4" key={label}>
									<p className="mb-1 font-sans text-background/55 text-xs uppercase tracking-[0.2em]">
										{label}
									</p>
									<p className="font-heading text-2xl leading-tight tracking-[-0.03em]">
										{value}
									</p>
								</div>
							))}
						</div>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

function ClosingCTA() {
	return (
		<section className="relative min-h-[70vh] overflow-hidden bg-background">
			<div className="relative z-10 mx-auto grid min-h-[70vh] max-w-[1500px] grid-cols-1 items-center gap-12 px-6 py-24 sm:px-10 lg:grid-cols-12">
				<div className="lg:col-span-8 lg:col-start-2">
					<ScrollReveal>
						<p className="mb-6 font-sans text-muted-foreground text-xs uppercase tracking-[0.3em]">
							Meet the practice
						</p>
					</ScrollReveal>
					<StaggerText
						as="h2"
						className="max-w-5xl font-heading text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.86] tracking-[-0.055em]"
						delay={0.1}
						text="If this sounds like the way you travel, we should speak"
					/>
				</div>

				<div className="lg:col-span-4 lg:col-start-8 lg:self-end lg:pb-12">
					<ScrollReveal delay={0.18}>
						<p className="max-w-md border-foreground/10 border-t pt-6 font-sans text-muted-foreground text-base leading-relaxed md:text-lg">
							Tell us what you want more of, what you want to avoid, and how
							much quiet the journey should protect. We will answer with a
							considered first shape.
						</p>
					</ScrollReveal>
					<ScrollReveal className="mt-10" delay={0.28}>
						<div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
							<a
								className="inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
								href="/contact-us"
							>
								Speak with us
								<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
							</a>
							<a
								className="inline-flex items-center justify-center border border-foreground/18 px-8 py-4 font-sans font-semibold text-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:border-foreground/40 hover:bg-foreground/5"
								href="/destinations"
							>
								Browse destinations
							</a>
						</div>
					</ScrollReveal>
					<ScrollReveal className="mt-10" delay={0.38}>
						<p className="font-sans text-muted-foreground/70 text-xs tracking-[0.16em]">
							A thoughtful reply within 24 hours. Consultation is complimentary.
						</p>
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}
