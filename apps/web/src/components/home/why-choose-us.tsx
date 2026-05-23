"use client";

import {
	IconHeartHandshake,
	IconMap,
	IconStar,
	IconUsers,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const reasons = [
	{
		icon: IconMap,
		title: "Planning that listens first",
		description:
			"We ask how you like to wake, eat, wander, pause, and disappear for a while. The itinerary follows from there.",
	},
	{
		icon: IconStar,
		title: "Rooms chosen for feeling",
		description:
			"We care about the corridor at night, the breakfast table, the view from the bath, and whether service knows when to step back.",
	},
	{
		icon: IconHeartHandshake,
		title: "Access with discretion",
		description:
			"After-hours visits, private safaris, and family-held rooms are arranged quietly, with no theatre around the privilege.",
	},
	{
		icon: IconUsers,
		title: "The invisible work",
		description:
			"Cars arrive before you think of them. Guides know the day’s mood. Plans change without making the change your problem.",
	},
] as const;

export default function WhyChooseUs() {
	return (
		<section className="bg-foreground py-[clamp(5rem,11vw,11rem)] text-background">
			<div className="mx-auto max-w-[1500px] px-6 sm:px-10">
				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<ScrollReveal>
							<p className="mb-5 font-sans text-background/55 text-xs uppercase tracking-[0.28em]">
								How we hold it
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="font-heading text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] tracking-[-0.055em]"
							text="Luxury is usually what did not need explaining"
						/>
					</div>

					<div className="lg:col-span-6 lg:col-start-7">
						<div className="divide-y divide-background/14 border-background/14 border-y">
							{reasons.map((reason, index) => {
								const Icon = reason.icon;
								return (
									<ScrollReveal delay={index * 0.1} key={reason.title}>
										<div className="group grid gap-5 py-7 sm:grid-cols-[auto_1fr] sm:gap-8 lg:py-9">
											<motion.div
												className="flex h-12 w-12 items-center justify-center border border-background/18 transition-colors group-hover:border-primary group-hover:text-primary"
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
													{reason.title}
												</h3>
												<p className="font-sans text-background/66 text-sm leading-relaxed md:col-span-3">
													{reason.description}
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
