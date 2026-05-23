"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right";
}

export default function ScrollReveal({
	children,
	className,
	delay = 0,
	direction = "up",
}: ScrollRevealProps) {
	const prefersReducedMotion = useReducedMotion() ?? false;

	const directionOffset = {
		up: { y: prefersReducedMotion ? 0 : 40 },
		down: { y: prefersReducedMotion ? 0 : -40 },
		left: { x: prefersReducedMotion ? 0 : 40 },
		right: { x: prefersReducedMotion ? 0 : -40 },
	};

	return (
		<motion.div
			className={className}
			initial={{
				opacity: prefersReducedMotion ? 1 : 0,
				...directionOffset[direction],
			}}
			transition={{
				duration: prefersReducedMotion ? 0 : 0.9,
				delay,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ margin: "-80px", once: true }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
		>
			{children}
		</motion.div>
	);
}
