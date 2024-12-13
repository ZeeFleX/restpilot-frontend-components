<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import type { ISummaryProps } from './summary.types';
	import { DollarSign } from 'lucide-svelte';

	let { title, value, scale, scaleText, icon: Icon }: ISummaryProps = $props();
</script>

<Card.Root
	data-x-chunk-name="dashboard-05-chunk-1"
	data-x-chunk-description="A stats card showing this week's total sales in USD, the percentage difference from last week, and a progress bar."
>
	<Card.Header class="pb-2">
		<div class="flex items-center justify-between">
			<Card.Description>{title}</Card.Description>
			<Icon />
		</div>
		<Card.Title class="text-4xl">{value}</Card.Title>
	</Card.Header>
	<Card.Content>
		<div class="text-muted-foreground text-xs">{scale} {scaleText}</div>
	</Card.Content>
</Card.Root>
