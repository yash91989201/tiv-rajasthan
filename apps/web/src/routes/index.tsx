import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

const DESTINATIONS = [
	{
		name: "Jaipur",
		description: "The Pink City, where history meets modern vibrance.",
		image:
			"https://images.unsplash.com/photo-1599661046289-e318978567c1?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Jaisalmer",
		description: "The Golden City, a gateway to the Thar Desert.",
		image:
			"https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Udaipur",
		description: "The City of Lakes, Venice of the East.",
		image:
			"https://images.unsplash.com/photo-1515518534349-5ae6ea7b23d6?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Jodhpur",
		description: "The Blue City, guarded by the mighty Mehrangarh.",
		image:
			"https://images.unsplash.com/photo-1544236712-4211f440538a?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Ranthambore",
		description: "The wild heart of Rajasthan, where tigers roam.",
		image:
			"https://images.unsplash.com/photo-1615963244664-5b84446e95ee?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Jawai",
		description: "Where leopards and humans live in ancient harmony.",
		image:
			"https://images.unsplash.com/photo-1581005697232-a720f86238b1?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Sariska",
		description: "A mystical forest holding secrets of the past.",
		image:
			"https://images.unsplash.com/photo-1627440316089-1065961d9a0d?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Pushkar",
		description: "The sacred city of the Brahma, timeless and spiritual.",
		image:
			"https://images.unsplash.com/photo-1563820641170-43be04f4ec14?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Kumbhalgarh",
		description: "The Great Wall of India, standing tall in the Aravallis.",
		image:
			"https://images.unsplash.com/photo-1592398285456-4756ff70742d?q=80&w=800&auto=format&fit=crop",
	},
	{
		name: "Bikaner",
		description: "Desert charm and magnificent architecture.",
		image:
			"https://images.unsplash.com/photo-1521404063674-f25977931393?q=80&w=800&auto=format&fit=crop",
	},
];

function Hero() {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end start"],
	});

	const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
	const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
	const opacityContent = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

	return (
		<section
			className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-foreground text-background"
			ref={containerRef}
		>
			{/* Immersive Background Placeholder */}
			<motion.div className="absolute inset-0 z-0" style={{ y: yBackground }}>
				<div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
				<img
					alt="Royal Rajasthan Palace"
					className="h-full w-full object-cover opacity-60 grayscale-[20%]"
					height={1080}
					src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=2000&auto=format&fit=crop"
					width={1920}
				/>
			</motion.div>

			<motion.div
				className="relative z-10 px-6 text-center"
				style={{ y: yContent, opacity: opacityContent }}
			>
				<motion.span
					animate={{ opacity: 1, y: 0 }}
					className="mb-4 block font-medium text-xs uppercase tracking-[0.3em] md:text-sm"
					initial={{ opacity: 0, y: 20 }}
					transition={{ duration: 1, delay: 0.2 }}
				>
					Curated Private Journeys
				</motion.span>
				<motion.h1
					animate={{ opacity: 1, y: 0 }}
					className="mb-8 max-w-5xl font-heading text-5xl leading-[1.1] md:text-8xl"
					initial={{ opacity: 0, y: 30 }}
					transition={{ duration: 1.2, delay: 0.4 }}
				>
					Experience Rajasthan <br /> Beyond the Ordinary
				</motion.h1>
				<motion.div
					animate={{ opacity: 1 }}
					className="flex justify-center"
					initial={{ opacity: 0 }}
					transition={{ duration: 1, delay: 1 }}
				>
					<div className="h-20 w-px bg-primary/50" />
				</motion.div>
			</motion.div>
		</section>
	);
}

function ExperienceSection() {
	return (
		<section className="container mx-auto px-6 py-24 md:py-40">
			<div className="grid items-center gap-16 md:grid-cols-2">
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					transition={{ duration: 1, ease: "easeOut" }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, x: 0 }}
				>
					<span className="mb-4 block font-medium text-primary text-sm uppercase tracking-widest">
						Our Philosophy
					</span>
					<h2 className="mb-8 font-heading text-4xl text-foreground leading-tight md:text-6xl">
						We don't sell packages. <br /> We craft memories.
					</h2>
					<p className="max-w-xl text-lg text-muted-foreground leading-relaxed md:text-xl">
						For us, travel is not just about visiting places; it's about the
						feeling of being there. The smell of the desert after rain, the
						whisper of history in the palace corridors, and the warmth of
						Rajasthani hospitality that stays with you forever.
					</p>
				</motion.div>

				<motion.div
					className="relative aspect-[4/5] overflow-hidden bg-muted"
					initial={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 1.2 }}
					viewport={{ once: true }}
					whileInView={{ opacity: 1, scale: 1 }}
				>
					<img
						alt="Luxury Rajasthan Experience"
						className="h-full w-full object-cover grayscale-[10%]"
						height={1000}
						loading="lazy"
						src="https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1000&auto=format&fit=crop"
						width={800}
					/>
				</motion.div>
			</div>
		</section>
	);
}

function DestinationCard({
	name,
	description,
	image,
	index,
}: {
	name: string;
	description: string;
	image: string;
	index: number;
}) {
	return (
		<motion.div
			className="group relative aspect-[3/4] cursor-pointer overflow-hidden bg-muted"
			initial={{ opacity: 0, y: 30 }}
			transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
			viewport={{ once: true }}
			whileInView={{ opacity: 1, y: 0 }}
		>
			<div className="absolute inset-0 z-10 bg-black/20 transition-colors group-hover:bg-black/40" />
			<div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110">
				<img
					alt={name}
					className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0"
					height={800}
					loading="lazy"
					src={image}
					width={600}
				/>
			</div>

			<div className="absolute bottom-0 left-0 z-20 w-full p-8 text-background">
				<h3 className="mb-2 font-heading text-3xl">{name}</h3>
				<p className="max-w-xs text-background/80 text-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100">
					{description}
				</p>
				<div className="mt-4 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
			</div>
		</motion.div>
	);
}

function DestinationsGlimpse() {
	return (
		<section className="bg-muted/30 py-24 md:py-40">
			<div className="container mx-auto px-6">
				<div className="mb-16 text-center">
					<span className="mb-4 block font-medium text-primary text-sm uppercase tracking-widest">
						Exploration
					</span>
					<h2 className="font-heading text-4xl text-foreground md:text-6xl">
						The Heart of Rajasthan
					</h2>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
					{DESTINATIONS.map((dest, i) => (
						<DestinationCard key={dest.name} {...dest} index={i} />
					))}
				</div>
			</div>
		</section>
	);
}

function HomeComponent() {
	return (
		<div className="bg-background">
			<Hero />
			<ExperienceSection />
			<DestinationsGlimpse />

			{/* Call to Action */}
			<section className="container mx-auto border-t px-6 py-24 text-center md:py-40">
				<h2 className="mb-12 font-heading text-4xl md:text-6xl">
					Ready for an extraordinary journey?
				</h2>
				<motion.button
					className="bg-foreground px-12 py-5 font-medium text-background text-sm uppercase tracking-[0.2em] transition-colors duration-300 hover:bg-primary"
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
				>
					Begin Your Experience
				</motion.button>
			</section>

			<footer className="border-t px-6 py-12 text-center text-muted-foreground text-sm uppercase tracking-widest">
				© {new Date().getFullYear()} TIV Rajasthan. All Rights Reserved.
			</footer>
		</div>
	);
}
