"use client";

import ScrollReveal from "@/components/home/scroll-reveal";
import type { MoodboardGallerySection } from "../types";
import SectionHeader from "./section-header";

interface MoodboardGalleryProps {
	data: MoodboardGallerySection;
}

const spanClass: Record<
	NonNullable<MoodboardGallerySection["images"][number]["span"]>,
	string
> = {
	standard: "moodboard-item-standard",
	wide: "moodboard-item-wide",
	tall: "moodboard-item-tall",
};

export default function MoodboardGallery({ data }: MoodboardGalleryProps) {
	return (
		<section className="bg-muted py-[clamp(5rem,11vw,11rem)]">
			<div className="mx-auto max-w-[1600px] px-6 sm:px-10">
				<div className="mb-14 max-w-3xl">
					<SectionHeader
						description={data.description}
						headline={data.headline}
						kicker={data.kicker}
					/>
				</div>

				{/* impeccable-param-values eaec8ac2: {"density":1,"radius":1} */}
				<style>{`
					.moodboard-collage {
						display: grid;
						grid-template-columns: 2fr 1fr 1fr;
						grid-template-rows: 2fr 1fr;
						gap: 16px;
						aspect-ratio: 16 / 9;
					}
					.moodboard-collage > * { border-radius: 8px; overflow: hidden; }
					.moodboard-collage > *:nth-child(1) { grid-column: 1; grid-row: 1 / 3; }
					.moodboard-collage > *:nth-child(2) { grid-column: 2; grid-row: 1; }
					.moodboard-collage > *:nth-child(3) { grid-column: 3; grid-row: 1; }
					.moodboard-collage > *:nth-child(4) { grid-column: 2; grid-row: 2; }
					.moodboard-collage > *:nth-child(5) { grid-column: 3; grid-row: 2; }
					@media (max-width: 900px) {
						.moodboard-collage {
							grid-template-columns: 1fr;
							grid-template-rows: repeat(5, 200px);
							aspect-ratio: auto;
						}
						.moodboard-collage > * { border-radius: 4px; }
						.moodboard-collage > *:nth-child(1),
						.moodboard-collage > *:nth-child(2),
						.moodboard-collage > *:nth-child(3),
						.moodboard-collage > *:nth-child(4),
						.moodboard-collage > *:nth-child(5) {
							grid-column: 1 / -1;
							grid-row: auto;
						}
					}
				`}</style>
				<div className="moodboard-collage">
					{data.images.map((image, index) => (
						<ScrollReveal
							className={`moodboard-item group ${spanClass[image.span ?? "standard"]}`}
							delay={index * 0.08}
							key={image.src}
						>
							<div className="relative h-full overflow-hidden">
								<img
									alt={image.alt}
									className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
									height={800}
									src={image.src}
									width={1200}
								/>
								{image.caption ? (
									<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/72 to-transparent p-5">
										<p className="font-sans text-background/88 text-xs uppercase tracking-[0.22em]">
											{image.caption}
										</p>
									</div>
								) : null}
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>
		</section>
	);
}
