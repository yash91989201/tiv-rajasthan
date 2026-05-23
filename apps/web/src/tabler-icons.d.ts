declare module "@tabler/icons-react" {
	import type { ComponentType, SVGProps } from "react";

	export interface TablerIconProps extends SVGProps<SVGSVGElement> {
		size?: number | string;
		stroke?: number | string;
	}

	export type TablerIcon = ComponentType<TablerIconProps>;

	export const IconChevronDown: TablerIcon;
	export const IconClock: TablerIcon;
	export const IconMapPin: TablerIcon;
	export const IconSparkles: TablerIcon;
	export const IconHeartHandshake: TablerIcon;
	export const IconMap: TablerIcon;
	export const IconStar: TablerIcon;
	export const IconUsers: TablerIcon;
}
