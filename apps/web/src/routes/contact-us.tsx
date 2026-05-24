"use client";

import { IconArrowNarrowRight, IconChevronDown, IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@tiv-rajasthan/ui/components/button";
import { Input } from "@tiv-rajasthan/ui/components/input";
import { Label } from "@tiv-rajasthan/ui/components/label";
import { Textarea } from "@tiv-rajasthan/ui/components/textarea";
import { motion, useReducedMotion } from "motion/react";
import {
	ParallaxImage,
	StaggerText,
} from "@/components/home/motion-utils";
import ScrollReveal from "@/components/home/scroll-reveal";

export const Route = createFileRoute("/contact-us")({
	component: RouteComponent,
	head: () => ({
		meta: [
			{
				title: "Contact Us | TIV Rajasthan",
			},
			{
				name: "description",
				content:
					"Begin a private journey through Rajasthan. Share your travel intentions and we will reply with a considered, bespoke plan within 24 hours.",
			},
		],
	}),
});

function RouteComponent() {
	return (
		<div className="flex flex-col bg-background">
			<ContactHero />
			<ContactFormSection />
		</div>
	);
}

function ContactHero() {
	const shouldReduceMotion = useReducedMotion() ?? false;

	return (
		<section className="relative min-h-svh overflow-hidden bg-foreground text-background">
			<ParallaxImage
				className="absolute inset-0"
				speed={0.24}
				src="https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=2400&auto=format&fit=crop"
			/>
			<div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.9)_0%,oklch(0.153_0.006_107.1/0.64)_48%,oklch(0.153_0.006_107.1/0.22)_100%)]" />
			<div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-foreground via-foreground/60 to-transparent" />
			<div className="absolute top-[12vh] right-[-12vw] hidden font-heading text-[23vw] text-background/10 leading-none tracking-[-0.08em] lg:block">
				Reach
			</div>

			<div className="relative z-10 mx-auto grid min-h-svh max-w-[1600px] grid-cols-1 items-end gap-12 px-6 pb-12 sm:px-10 lg:grid-cols-12 lg:pb-16">
				<div className="pb-[10vh] lg:col-span-8">
					<motion.p
						className="mb-5 max-w-xl font-sans text-background/70 text-xs uppercase tracking-[0.34em] sm:text-sm"
						initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 20 }}
						transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						Begin privately
					</motion.p>

					<StaggerText
						as="h1"
						className="max-w-6xl font-heading text-[clamp(4.2rem,10vw,10.8rem)] text-background leading-[0.83] tracking-[-0.058em]"
						delay={0.28}
						staggerDelay={0.06}
						text="Tell us the shape of your journey"
					/>
				</div>

				<motion.div
					className="border-background/18 border-t pt-6 lg:col-span-4 lg:mb-[12vh]"
					initial={{ opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : 24 }}
					transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
					whileInView={{ opacity: 1, y: 0 }}
				>
					<p className="max-w-md font-sans text-background/74 text-base leading-relaxed md:text-lg">
						Share what you want more of, what you want to avoid, and how much
						quiet the trip should protect. We will answer with a considered
						first shape, not a catalogue.
					</p>
					<div className="mt-9 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
						<a
							className="inline-flex items-center justify-center gap-2 bg-primary px-7 py-4 font-sans font-semibold text-primary-foreground text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/85"
							href="#contact-form"
						>
							Write to us
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

function ContactFormSection() {
	return (
		<section
			className="relative overflow-hidden bg-background py-[clamp(5rem,12vw,11rem)]"
			id="contact-form"
		>
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
					{/* Left: form */}
					<div className="lg:col-span-7">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Your message
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="mb-12 max-w-3xl font-heading text-[clamp(3.2rem,6.5vw,6.8rem)] leading-[0.88] tracking-[-0.055em]"
							delay={0.1}
							text="A few details, then we take it from here"
						/>

						<form className="grid gap-10" onSubmit={(e) => e.preventDefault()}>
							<div className="grid gap-8 sm:grid-cols-2">
								<div className="grid gap-3">
									<Label className="text-muted-foreground" htmlFor="name">
										Full name
									</Label>
									<Input
										autoComplete="name"
										id="name"
										placeholder="Your name"
										type="text"
									/>
								</div>
								<div className="grid gap-3">
									<Label className="text-muted-foreground" htmlFor="email">
										Email
									</Label>
									<Input
										autoComplete="email"
										id="email"
										placeholder="you@example.com"
										type="email"
									/>
								</div>
							</div>

							<div className="grid gap-3">
								<Label className="text-muted-foreground" htmlFor="plans">
									What are you planning?
								</Label>
								<Textarea
									id="plans"
									placeholder="Destinations, dates, travel style, or anything you want us to know..."
									rows={5}
								/>
							</div>

							<ScrollReveal delay={0.2}>
								<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
									<Button
										className="h-auto gap-2 px-8 py-4 text-xs uppercase tracking-[0.22em]"
										size="lg"
										type="submit"
									>
										Send message
										<IconArrowNarrowRight className="h-4 w-4" strokeWidth={1.5} />
									</Button>
									<p className="font-sans text-muted-foreground/80 text-xs tracking-[0.14em]">
										A reply within 24 hours. No obligation.
									</p>
								</div>
							</ScrollReveal>
						</form>
					</div>

					{/* Right: contact details */}
					<div className="lg:col-span-4 lg:col-start-9">
						<div className="sticky top-28">
							<ScrollReveal delay={0.12}>
								<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
									Direct lines
								</p>
							</ScrollReveal>

							<div className="space-y-6">
								<ScrollReveal delay={0.18}>
									<div className="border-border border-t pt-5">
										<div className="mb-3 flex items-center gap-2.5 text-primary">
											<IconMail className="h-4 w-4" strokeWidth={1.5} />
											<p className="font-sans text-xs uppercase tracking-[0.22em]">
												Email
											</p>
										</div>
										<a
											className="font-sans text-lg text-foreground transition-colors hover:text-primary"
											href="mailto:hello@tivrajasthan.com"
										>
											hello@tivrajasthan.com
										</a>
									</div>
								</ScrollReveal>

								<ScrollReveal delay={0.26}>
									<div className="border-border border-t pt-5">
										<div className="mb-3 flex items-center gap-2.5 text-primary">
											<IconPhone className="h-4 w-4" strokeWidth={1.5} />
											<p className="font-sans text-xs uppercase tracking-[0.22em]">
												Phone
											</p>
										</div>
										<a
											className="font-sans text-lg text-foreground transition-colors hover:text-primary"
											href="tel:+911412345678"
										>
											+91 141 234 5678
										</a>
										<p className="mt-1 font-sans text-muted-foreground text-sm">
											Mon – Sat, 10:00 – 18:00 IST
										</p>
									</div>
								</ScrollReveal>

								<ScrollReveal delay={0.34}>
									<div className="border-border border-t pt-5">
										<div className="mb-3 flex items-center gap-2.5 text-primary">
											<IconMapPin className="h-4 w-4" strokeWidth={1.5} />
											<p className="font-sans text-xs uppercase tracking-[0.22em]">
												Office
											</p>
										</div>
										<p className="font-sans text-lg text-foreground leading-relaxed">
											TIV Rajasthan
											<br />
											12 Mirza Ismail Road
											<br />
											Jaipur, Rajasthan 302001
										</p>
									</div>
								</ScrollReveal>
							</div>

							<ScrollReveal className="mt-10" delay={0.42}>
								<div className="border-border border-t pt-5">
									<p className="max-w-sm font-sans text-muted-foreground text-sm leading-relaxed">
										If you are already travelling and need assistance, use the
										phone line. For new journeys, the form above gives us the
										context to reply with substance.
									</p>
								</div>
							</ScrollReveal>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
