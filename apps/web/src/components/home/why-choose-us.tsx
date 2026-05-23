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
		title: "Personalized Planning",
		description:
			"No two journeys are alike. We listen, curate, and shape every detail around your interests, pace, and travel style.",
	},
	{
		icon: IconStar,
		title: "Handpicked Stays",
		description:
			"Every property is personally visited and vetted. Heritage palaces, boutique forts, and intimate camps — chosen for character over stars.",
	},
	{
		icon: IconHeartHandshake,
		title: "Private Experiences",
		description:
			"Skip the queues. We arrange after-hours palace visits, private safaris, and dinners in spaces reserved for royalty.",
	},
	{
		icon: IconUsers,
		title: "Seamless Coordination",
		description:
			"From arrival to departure, a dedicated travel designer manages every detail. You travel; we handle the rest.",
	},
] as const;

export default function WhyChooseUs() {
	return (
		<section className="bg-secondary/30 py-20 md:py-32 lg:py-40">
			<div className="container mx-auto px-6">
				<div className="mb-12 text-center sm:mb-20">
					<ScrollReveal>
						<p className="mb-4 font-sans text-muted-foreground text-sm uppercase tracking-[0.2em]">
							Why Us
						</p>
					</ScrollReveal>
					<StaggerText
						as="h2"
						className="mx-auto max-w-3xl font-heading text-4xl md:text-5xl lg:text-6xl"
						text="Quiet confidence, premium care"
					/>
				</div>

				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
					{reasons.map((reason, index) => {
						const Icon = reason.icon;
						return (
							<ScrollReveal
								className="flex flex-col items-center text-center"
								delay={index * 0.12}
								key={reason.title}
							>
								<motion.div
									className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background"
									initial={{ opacity: 0, scale: 0.8 }}
									transition={{
										duration: 0.6,
										delay: index * 0.12,
										ease: [0.22, 1, 0.36, 1],
									}}
									viewport={{ once: true }}
									whileInView={{ opacity: 1, scale: 1 }}
								>
									<Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
								</motion.div>
								<h3 className="mb-3 font-heading text-xl md:text-2xl">
									{reason.title}
								</h3>
								<p className="font-sans text-muted-foreground text-sm leading-relaxed">
									{reason.description}
								</p>
							</ScrollReveal>
						);
					})}
				</div>
			</div>
		</section>
	);
}
