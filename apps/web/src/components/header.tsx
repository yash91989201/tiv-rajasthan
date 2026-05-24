import {
	IconArrowNarrowRight,
	IconBuildingArch,
	IconMenu2,
	IconTrees,
} from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@tiv-rajasthan/ui/components/navigation-menu";
import { Separator } from "@tiv-rajasthan/ui/components/separator";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@tiv-rajasthan/ui/components/sheet";
import { motion } from "motion/react";
import {
	heritageDestinations,
	wildlifeDestinations,
} from "@/components/destinations/data";

const homeLink = { to: "/", label: "Home" } as const;

const navLinks = [
	{ to: "/luxury-stays", label: "Luxury Stay" },
	{ to: "/itineraries", label: "Itineraries" },
	{ to: "/about-us", label: "About Us" },
	{ to: "/contact-us", label: "Contact" },
] as const;

function DestinationColumn({
	icon: Icon,
	title,
	items,
}: {
	icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
	title: string;
	items: readonly { name: string; subtitle: string; slug: string }[];
}) {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center gap-2.5 px-4 pt-3 pb-2">
				<Icon className="h-4 w-4 text-primary" strokeWidth={1.5} />
				<span className="font-sans text-primary text-xs uppercase tracking-[0.26em]">
					{title}
				</span>
			</div>
			<Separator />
			{items.map((item) => (
				<Link
					className="group/item flex items-center justify-between px-4 py-2.5 transition-colors hover:bg-primary/6"
					key={item.slug}
					to={`/destinations/${item.slug}`}
				>
					<div>
						<span className="font-heading text-foreground text-lg leading-tight tracking-[-0.03em]">
							{item.name}
						</span>
						<p className="mt-0.5 font-sans text-muted-foreground text-xs tracking-wide">
							{item.subtitle}
						</p>
					</div>
					<IconArrowNarrowRight
						className="h-3.5 w-3.5 text-primary/40 transition-all group-hover/item:translate-x-0.5 group-hover/item:text-primary"
						strokeWidth={1.5}
					/>
				</Link>
			))}
		</div>
	);
}

function MobileDestinationItems({
	items,
}: {
	items: readonly { name: string; subtitle: string; slug: string }[];
}) {
	return (
		<div className="flex flex-col gap-0">
			{items.map((item) => (
				<Link
					className="flex items-center justify-between px-4 py-3 transition-colors hover:bg-primary/6"
					key={item.slug}
					to={`/destinations/${item.slug}`}
				>
					<div>
						<span className="font-heading text-base text-foreground tracking-[-0.02em]">
							{item.name}
						</span>
						<p className="mt-0.5 font-sans text-muted-foreground text-xs">
							{item.subtitle}
						</p>
					</div>
					<IconArrowNarrowRight
						className="h-3.5 w-3.5 text-primary/30"
						strokeWidth={1.5}
					/>
				</Link>
			))}
		</div>
	);
}

export default function Header() {
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

				{/* Desktop navigation */}
				<nav className="hidden items-center gap-8 md:flex">
					<Link
						className="relative font-medium text-sm uppercase tracking-wide transition-colors hover:text-primary"
						to={homeLink.to}
					>
						{({ isActive }) => (
							<>
								{homeLink.label}
								{isActive && (
									<motion.div
										className="absolute -bottom-1 left-0 h-px w-full bg-primary"
										layoutId="nav-underline"
									/>
								)}
							</>
						)}
					</Link>

					<NavigationMenu
						align="start"
						className="z-50"
						closeDelay={250}
						delay={0}
					>
						<NavigationMenuList>
							<NavigationMenuItem>
								<NavigationMenuTrigger
									className="relative bg-transparent px-0 font-medium text-sm uppercase tracking-wide hover:bg-transparent hover:text-primary focus:bg-transparent focus-visible:bg-transparent data-open:bg-transparent data-open:hover:bg-transparent data-open:focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent data-popup-open:text-primary"
									render={<Link to="/destinations" />}
								>
									Destinations
								</NavigationMenuTrigger>
								<NavigationMenuContent className="w-[38rem] border-foreground/8 bg-background/95 p-3 backdrop-blur-xl">
									<div className="overflow-hidden">
										<div className="grid grid-cols-2 gap-0">
											<DestinationColumn
												icon={IconBuildingArch}
												items={heritageDestinations}
												title="Heritage & Culture"
											/>
											<DestinationColumn
												icon={IconTrees}
												items={wildlifeDestinations}
												title="Wildlife & Nature"
											/>
										</div>

										<Separator />

										<div className="px-4 py-3">
											<NavigationMenuLink
												className="group/all inline-flex items-center gap-2 rounded-none p-0 font-sans text-primary text-xs uppercase tracking-[0.22em] transition-colors hover:bg-transparent hover:text-primary/70"
												render={<Link to="/destinations" />}
											>
												All destinations
												<IconArrowNarrowRight
													className="h-3.5 w-3.5 transition-transform group-hover/all:translate-x-0.5"
													strokeWidth={1.5}
												/>
											</NavigationMenuLink>
										</div>
									</div>
								</NavigationMenuContent>
							</NavigationMenuItem>
						</NavigationMenuList>
					</NavigationMenu>

					{navLinks.map(({ to, label }) => (
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

				{/* Mobile navigation — Sheet */}
				<Sheet>
					<SheetTrigger className="inline-flex items-center justify-center rounded-none md:hidden">
						<IconMenu2 className="h-6 w-6" strokeWidth={1.5} />
						<span className="sr-only">Open menu</span>
					</SheetTrigger>
					<SheetContent
						className="w-full border-foreground/8 bg-background/95 p-0 backdrop-blur-xl sm:max-w-sm"
						side="right"
					>
						<SheetHeader className="border-foreground/8 border-b p-6">
							<SheetTitle className="font-heading text-xl uppercase tracking-widest">
								TIV Rajasthan
							</SheetTitle>
						</SheetHeader>

						<div className="flex flex-col overflow-y-auto py-4">
							<Link
								className="flex items-center justify-between px-6 py-3.5 font-medium text-base uppercase tracking-wide transition-colors hover:bg-primary/6 hover:text-primary"
								to={homeLink.to}
							>
								{({ isActive }) => (
									<>
										<span className={isActive ? "text-primary" : ""}>
											{homeLink.label}
										</span>
										<IconArrowNarrowRight
											className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground/40"}`}
											strokeWidth={1.5}
										/>
									</>
								)}
							</Link>

							<Separator />

							{/* Destinations section in mobile */}
							<div className="flex items-center gap-2.5 px-6 pt-2 pb-1">
								<IconBuildingArch
									className="h-4 w-4 text-primary"
									strokeWidth={1.5}
								/>
								<span className="font-sans text-primary text-xs uppercase tracking-[0.26em]">
									Heritage & Culture
								</span>
							</div>
							<MobileDestinationItems items={heritageDestinations} />

							<div className="flex items-center gap-2.5 px-6 pt-4 pb-1">
								<IconTrees className="h-4 w-4 text-primary" strokeWidth={1.5} />
								<span className="font-sans text-primary text-xs uppercase tracking-[0.26em]">
									Wildlife & Nature
								</span>
							</div>
							<MobileDestinationItems items={wildlifeDestinations} />

							<Separator className="mx-6 my-3 w-auto" />

							<Link
								className="flex items-center justify-between px-6 py-3.5 font-medium font-sans text-primary text-xs uppercase tracking-[0.22em] transition-colors hover:bg-primary/6 hover:text-primary/70"
								to="/destinations"
							>
								All destinations
								<IconArrowNarrowRight
									className="h-3.5 w-3.5"
									strokeWidth={1.5}
								/>
							</Link>

							<Separator />

							{navLinks.map(({ to, label }) => (
								<Link
									className="flex items-center justify-between px-6 py-3.5 font-medium text-base uppercase tracking-wide transition-colors hover:bg-primary/6 hover:text-primary"
									key={to}
									to={to}
								>
									{({ isActive }) => (
										<>
											<span className={isActive ? "text-primary" : ""}>
												{label}
											</span>
											<IconArrowNarrowRight
												className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground/40"}`}
												strokeWidth={1.5}
											/>
										</>
									)}
								</Link>
							))}
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</motion.header>
	);
}
