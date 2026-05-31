import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";

export default function Footer() {
	return (
		<footer className="bg-foreground text-background">
			<div className="mx-auto max-w-[1500px] px-5 py-14 sm:px-8 sm:py-16 md:px-10 md:py-20">
				<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
					{/* Brand */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h3 className="font-heading text-2xl tracking-[-0.04em] sm:text-3xl">
							TIV
						</h3>
						<p className="mt-4 max-w-xs font-sans text-background/60 text-sm leading-relaxed">
							Bespoke journeys through Rajasthan's living heritage.
							Designed for those who travel to understand, not just to see.
						</p>
					</div>

					{/* Destinations */}
					<div>
						<h4 className="mb-5 font-sans text-background/40 text-xs uppercase tracking-[0.3em] sm:mb-6">
							Destinations
						</h4>
						<ul className="space-y-2.5 sm:space-y-3">
							{["Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Ranthambore", "Pushkar"].map(
								(dest) => (
									<li key={dest}>
										<a
											href={`/destinations/${dest.toLowerCase()}`}
											className="font-sans text-background/70 text-sm transition-colors hover:text-background"
										>
											{dest}
										</a>
									</li>
								),
							)}
						</ul>
					</div>

					{/* Experiences */}
					<div>
						<h4 className="mb-5 font-sans text-background/40 text-xs uppercase tracking-[0.3em] sm:mb-6">
							Experiences
						</h4>
						<ul className="space-y-2.5 sm:space-y-3">
							{[
								"Heritage Walks",
								"Desert Safaris",
								"Textile Workshops",
								"Culinary Trails",
								"Wildlife",
								"Photography",
							].map((exp) => (
								<li key={exp}>
									<a
										href="/experiences"
										className="font-sans text-background/70 text-sm transition-colors hover:text-background"
									>
										{exp}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div className="sm:col-span-2 lg:col-span-1">
						<h4 className="mb-5 font-sans text-background/40 text-xs uppercase tracking-[0.3em] sm:mb-6">
							Contact
						</h4>
						<ul className="space-y-3.5">
							<li className="flex items-start gap-3">
								<IconMapPin
									className="mt-0.5 h-4 w-4 shrink-0 text-background/40"
									strokeWidth={1.5}
								/>
								<span className="font-sans text-background/70 text-sm">
									Jaipur, Rajasthan, India
								</span>
							</li>
							<li className="flex items-center gap-3">
								<IconMail
									className="h-4 w-4 shrink-0 text-background/40"
									strokeWidth={1.5}
								/>
								<a
									href="mailto:hello@tivrajasthan.com"
									className="font-sans text-background/70 text-sm transition-colors hover:text-background"
								>
									hello@tivrajasthan.com
								</a>
							</li>
							<li className="flex items-center gap-3">
								<IconPhone
									className="h-4 w-4 shrink-0 text-background/40"
									strokeWidth={1.5}
								/>
								<a
									href="tel:+911414567890"
									className="font-sans text-background/70 text-sm transition-colors hover:text-background"
								>
									+91 141 456 7890
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="mt-12 border-background/10 border-t pt-6 sm:mt-16 sm:pt-8">
					<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
						<p className="font-sans text-background/40 text-xs">
							© {new Date().getFullYear()} TIV Rajasthan. All rights reserved.
						</p>
						<div className="flex gap-5 sm:gap-6">
							<a
								href="/privacy"
								className="font-sans text-background/40 text-xs transition-colors hover:text-background/70"
							>
								Privacy
							</a>
							<a
								href="/terms"
								className="font-sans text-background/40 text-xs transition-colors hover:text-background/70"
							>
								Terms
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
