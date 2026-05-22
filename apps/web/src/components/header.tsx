import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";

export default function Header() {
	const links = [
		{ to: "/", label: "Home" },
		{ to: "/destinations", label: "Destinations" },
		{ to: "/luxury-stay", label: "Luxury Stay" },
		{ to: "/itineraries", label: "Itineraries" },
		{ to: "/about", label: "About Us" },
		{ to: "/contact", label: "Contact" },
	] as const;

	return (
		<motion.header
			animate={{ y: 0 }}
			className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-md"
			initial={{ y: -100 }}
			transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
		>
			<div className="container mx-auto flex items-center justify-between px-6 py-4">
				<Link
					className="font-heading text-2xl uppercase tracking-widest"
					to="/"
				>
					TIV Rajasthan
				</Link>

				<nav className="hidden items-center gap-8 md:flex">
					{links.map(({ to, label }) => (
						<Link
							className="relative font-medium text-sm uppercase tracking-wide transition-colors hover:text-primary"
							key={to}
							to={to}
						>
							{({ isActive }) => (
								<>
									{label}
									{isActive && (
										<motion.div
											className="absolute -bottom-1 left-0 h-px w-full bg-primary"
											layoutId="nav-underline"
										/>
									)}
								</>
							)}
						</Link>
					))}
				</nav>
			</div>
		</motion.header>
	);
}
