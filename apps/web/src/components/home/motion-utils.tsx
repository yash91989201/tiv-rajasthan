"use client";

import {
	motion,
	useInView,
	useReducedMotion,
	useScroll,
	useTransform,
} from "motion/react";
import { type ReactNode, useRef } from "react";

// Reduced motion hook
export function usePrefersReducedMotion() {
	const shouldReduce = useReducedMotion();
	return shouldReduce ?? false;
}

// Parallax image for backgrounds
interface ParallaxImageProps {
	children?: ReactNode;
	className?: string;
	speed?: number;
	src: string;
}

export function ParallaxImage({
	src,
	className,
	speed = 0.3,
	children,
}: ParallaxImageProps) {
	const ref = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"],
	});

	const y = useTransform(
		scrollYProgress,
		[0, 1],
		prefersReducedMotion ? [0, 0] : [`${-speed * 20}%`, `${speed * 20}%`]
	);

	return (
		<div
			className={`absolute inset-0 overflow-hidden ${className || ""}`}
			ref={ref}
		>
			<motion.div
				className="absolute inset-0 h-[140%] w-full bg-center bg-cover bg-no-repeat"
				style={{
					y,
					backgroundImage: `url('${src}')`,
				}}
			/>
			{children}
		</div>
	);
}

// Stagger text reveal — word-by-word with clip reveal
interface StaggerTextProps {
	as?: "h1" | "h2" | "h3" | "p" | "span";
	className?: string;
	delay?: number;
	staggerDelay?: number;
	text: string;
}

export function StaggerText({
	text,
	className,
	delay = 0,
	staggerDelay = 0.05,
	as: Tag = "h2",
}: StaggerTextProps) {
	const ref = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();
	const isInView = useInView(ref, { once: true, margin: "-50px" });

	const words = text.split(" ");

	if (prefersReducedMotion) {
		return <Tag className={className}>{text}</Tag>;
	}

	return (
		<div ref={ref}>
			<Tag className={className}>
				{words.map((word, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: words are positional and never reorder
					<span className="inline-block overflow-hidden" key={i}>
						<motion.span
							animate={
								isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
							}
							className="inline-block"
							transition={{
								duration: 0.9,
								delay: delay + i * staggerDelay,
								ease: [0.22, 1, 0.36, 1],
							}}
						>
							{word}
							{i < words.length - 1 && "\u00A0"}
						</motion.span>
					</span>
				))}
			</Tag>
		</div>
	);
}

// Image reveal with clip-path curtain + inner scale
interface ImageRevealProps {
	alt: string;
	aspectRatio?: string;
	className?: string;
	src: string;
}

export function ImageReveal({
	src,
	alt,
	className,
	aspectRatio,
}: ImageRevealProps) {
	const ref = useRef<HTMLDivElement>(null);
	const prefersReducedMotion = usePrefersReducedMotion();

	if (prefersReducedMotion) {
		return (
			<div
				className={`overflow-hidden ${className || ""}`}
				style={aspectRatio ? { aspectRatio } : undefined}
			>
				<img
					alt={alt}
					className="h-full w-full object-cover"
					height={800}
					src={src}
					width={1200}
				/>
			</div>
		);
	}

	return (
		<motion.div
			className={`overflow-hidden ${className || ""}`}
			initial={{ clipPath: "inset(100% 0 0 0)" }}
			ref={ref}
			style={aspectRatio ? { aspectRatio } : undefined}
			transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, margin: "-100px" }}
			whileInView={{ clipPath: "inset(0% 0 0 0)" }}
		>
			<motion.img
				alt={alt}
				className="h-full w-full object-cover"
				height={800}
				initial={{ scale: 1.1 }}
				src={src}
				transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
				viewport={{ once: true, margin: "-100px" }}
				whileInView={{ scale: 1 }}
				width={1200}
			/>
		</motion.div>
	);
}
