import type { DestinationMood } from "./types";

export const moodOverlayClass: Record<DestinationMood, string> = {
	royal:
		"bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.88)_0%,oklch(0.153_0.006_107.1/0.56)_43%,oklch(0.153_0.006_107.1/0.18)_100%)]",
	desert:
		"bg-[linear-gradient(90deg,oklch(0.22_0.04_65/0.88)_0%,oklch(0.22_0.04_65/0.52)_45%,oklch(0.22_0.04_65/0.16)_100%)]",
	cultural:
		"bg-[linear-gradient(90deg,oklch(0.18_0.02_45/0.88)_0%,oklch(0.18_0.02_45/0.54)_45%,oklch(0.18_0.02_45/0.18)_100%)]",
	nature:
		"bg-[linear-gradient(90deg,oklch(0.16_0.03_145/0.88)_0%,oklch(0.16_0.03_145/0.52)_45%,oklch(0.16_0.03_145/0.16)_100%)]",
	"modern-luxury":
		"bg-[linear-gradient(90deg,oklch(0.153_0.006_107.1/0.9)_0%,oklch(0.153_0.006_107.1/0.62)_50%,oklch(0.153_0.006_107.1/0.24)_100%)]",
};

export const moodAccentClass: Record<DestinationMood, string> = {
	royal: "text-primary/90",
	desert: "text-primary/88",
	cultural: "text-primary/90",
	nature: "text-primary/85",
	"modern-luxury": "text-primary/90",
};
