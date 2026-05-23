"use client";

import { StaggerText } from "./motion-utils";
import ScrollReveal from "./scroll-reveal";

const experiences = [
	{
		title: "Private Palace Dining",
		description:
			"Candlelit courtyards, silver thali service, and recipes carried through families attached to palace kitchens.",
		image:
			"https://images.pexels.com/photos/2413613/pexels-photo-2413613.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "After dark",
	},
	{
		title: "Desert Camps",
		description:
			"Canvas suites beneath hard stars, folk music by fire, and the midnight quiet of the Thar held without spectacle.",
		image:
			"https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200&auto=format&fit=crop",
		label: "Open sky",
	},
	{
		title: "Heritage Walks",
		description:
			"Historians, artisans, and old city residents lead you through living forts and havelis before the crowds arrive.",
		image:
			"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
		label: "Before opening",
	},
	{
		title: "Luxury Safaris",
		description:
			"Dawn and dusk drives in Ranthambore with naturalists who read the forest by sound, dust, and pause.",
		image:
			"https://images.unsplash.com/photo-1544984243-ec57ea16fe25?q=80&w=1200&auto=format&fit=crop",
		label: "Forest hour",
	},
	{
		title: "Wellness Retreats",
		description:
			"Ayurvedic therapies, yoga, and lake-facing quiet in palace settings designed for recovery rather than performance.",
		image:
			"https://images.pexels.com/photos/3225528/pexels-photo-3225528.jpeg?auto=compress&cs=tinysrgb&w=1200",
		label: "Stillness",
	},
] as const;

const layoutClasses = [
	"lg:col-span-7 lg:row-span-2",
	"lg:col-span-5 lg:col-start-8 lg:mt-20",
	"lg:col-span-4 lg:col-start-2",
	"lg:col-span-4",
	"lg:col-span-4",
] as const;

const aspectClasses = [
	"aspect-[5/6] lg:aspect-[6/7]",
	"aspect-[4/3]",
	"aspect-[4/5]",
	"aspect-[4/5]",
	"aspect-[4/5]",
] as const;

export default function SignatureExperiences() {
	return (
		<section className="relative overflow-hidden bg-background py-[clamp(5rem,11vw,11rem)]">
			<div className="absolute top-0 right-0 h-64 w-64 bg-primary/10" />
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-start">
					<div className="lg:col-span-8">
						<ScrollReveal>
							<p className="mb-5 font-sans text-muted-foreground text-xs uppercase tracking-[0.28em]">
								Experiences
							</p>
						</ScrollReveal>
						<StaggerText
							as="h2"
							className="max-w-5xl font-heading text-[clamp(3.4rem,8vw,8.5rem)] leading-[0.88] tracking-[-0.055em]"
							text="One memory per fold"
						/>
					</div>
					<ScrollReveal
						className="lg:col-span-3 lg:col-start-10 lg:pt-8"
						delay={0.18}
					>
						<p className="font-sans text-base text-muted-foreground leading-relaxed">
							We avoid the brochure list. Each experience is treated like a
							scene, paced by light, privacy, texture, and the people who make
							it possible.
						</p>
					</ScrollReveal>
				</div>


				<div data-impeccable-variants="08dc599c" data-impeccable-variant-count="4" style={{ display: "contents" }}>
				  {/* impeccable-variants-start 08dc599c */}
				  {/* Original */}
				  <div data-impeccable-variant="original">
				    <div className="experience-cinematic-notes">
				    	{experiences.map((experience) => (
				    		<article className="experience-card group" key={experience.title}>
				    			<img
				    				alt={experience.title}
				    				className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
				    				height={1000}
				    				src={experience.image}
				    				width={1200}
				    			/>
				    			<div className="absolute inset-0 bg-gradient-to-t from-foreground/68 via-foreground/10 to-transparent" />
				    			<div className="experience-panel">
				    				<p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] opacity-75">
				    					{experience.label}
				    				</p>
				    				<h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.045em]">
				    					{experience.title}
				    				</h3>
				    				<p className="mt-4 max-w-md font-sans text-sm leading-relaxed opacity-80">
				    					{experience.description}
				    				</p>
				    			</div>
				    		</article>
				    	))}
				    </div>
				  </div>
				  {/* Variants: insert below this line */}
				  <div data-impeccable-variant="1">
				    <div className="experience-cinematic-notes experience-readable-amber">
				    	{experiences.map((experience) => (
				    		<article className="experience-card group" key={experience.title}>
				    			<img alt={experience.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" height={1000} src={experience.image} width={1200} />
				    			<div className="absolute inset-0 bg-gradient-to-t from-foreground/92 via-foreground/54 to-foreground/14" />
				    			<div className="experience-panel"><p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-primary/88">{experience.label}</p><h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.045em] text-primary">{experience.title}</h3><p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-primary/82">{experience.description}</p></div>
				    		</article>
				    	))}
				    </div>
				  </div>
				  <div data-impeccable-variant="2">
				    <div className="experience-cinematic-notes experience-ivory-body">
				    	{experiences.map((experience) => (
				    		<article className="experience-card group" key={experience.title}>
				    			<img alt={experience.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" height={1000} src={experience.image} width={1200} />
				    			<div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/20" />
				    			<div className="experience-panel"><p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-primary/78">{experience.label}</p><h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.045em] text-primary">{experience.title}</h3><p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-background/88">{experience.description}</p></div>
				    		</article>
				    	))}
				    </div>
				  </div>
				  <div data-impeccable-variant="3">
				    <div className="experience-cinematic-notes experience-caption-glow">
				    	{experiences.map((experience) => (
				    		<article className="experience-card group" key={experience.title}>
				    			<img alt={experience.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" height={1000} src={experience.image} width={1200} />
				    			<div className="absolute inset-0 bg-gradient-to-t from-foreground/94 via-foreground/42 to-transparent" />
				    			<div className="experience-panel"><p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-primary/85">{experience.label}</p><h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.045em] text-background">{experience.title}</h3><p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-primary/90">{experience.description}</p></div>
				    		</article>
				    	))}
				    </div>
				  </div>
				  <div data-impeccable-variant="4">
				    <div className="experience-cinematic-notes experience-secondary-wash">
				    	{experiences.map((experience) => (
				    		<article className="experience-card group" key={experience.title}>
				    			<img alt={experience.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" height={1000} src={experience.image} width={1200} />
				    			<div className="absolute inset-0 bg-gradient-to-t from-foreground/96 via-foreground/64 to-primary/16" />
				    			<div className="experience-panel"><p className="mb-3 font-sans text-xs uppercase tracking-[0.24em] text-primary/76">{experience.label}</p><h3 className="font-heading text-[clamp(2rem,4vw,4.8rem)] leading-[0.88] tracking-[-0.045em] text-secondary">{experience.title}</h3><p className="mt-4 max-w-md font-sans text-sm leading-relaxed text-secondary/84">{experience.description}</p></div>
				    		</article>
				    	))}
				    </div>
				  </div>
				  <style data-impeccable-css="08dc599c">{`
				    @scope ([data-impeccable-variant="1"]) {
				      :scope > .experience-readable-amber .experience-panel {
				        background: linear-gradient(180deg, hsl(var(--foreground) / 0.5), hsl(var(--foreground) / 0.78));
				        box-shadow: inset 0 0 0 1px hsl(var(--primary) / 0.2);
				      }
				    }

				    @scope ([data-impeccable-variant="2"]) {
				      :scope > .experience-ivory-body .experience-panel {
				        background: hsl(var(--foreground) / 0.82);
				        box-shadow: inset 0 0 0 1px hsl(var(--primary) / 0.22), 0 1.25rem 4rem hsl(var(--foreground) / 0.32);
				      }
				    }

				    @scope ([data-impeccable-variant="3"]) {
				      :scope > .experience-caption-glow .experience-panel {
				        background: transparent;
				        text-shadow: 0 0.16rem 1.5rem hsl(var(--foreground) / 0.9);
				      }

				      :scope > .experience-caption-glow .experience-panel::before {
				        display: block;
				        width: 3.5rem;
				        height: 1px;
				        margin-bottom: 1rem;
				        background: hsl(var(--primary) / 0.7);
				        content: "";
				      }
				    }

				    @scope ([data-impeccable-variant="4"]) {
				      :scope > .experience-secondary-wash .experience-panel {
				        background: linear-gradient(135deg, hsl(var(--foreground) / 0.86), hsl(var(--foreground) / 0.58));
				        box-shadow: inset 0 0 0 1px hsl(var(--secondary) / 0.2);
				      }
				    }
				  `}</style>
				  {/* impeccable-variants-end 08dc599c */}
				</div>


			</div>
		</section>
	);
}
