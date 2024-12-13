import type { Icon } from 'lucide-svelte';
import type { SvelteComponent } from 'svelte';

export interface ISummaryProps {
	value: number;
	title: string;
	icon: any;
	scale: string;
	scaleText: string;
}
