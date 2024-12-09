<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import type { IMenuItemProps } from './';

	let {
		title,
		weight,
		description,
		price,
		image,
		imageAlt,
		onOrderClick,
		isNew = false
	}: IMenuItemProps = $props();
</script>

<Card.Root class="relative overflow-hidden">
	<Card.Header class="p-0">
		<enhanced:img class="w-full" src={image} alt={imageAlt} />
		{#if isNew}
			<Badge class="bg-primary text-primary-foreground absolute right-4 top-2">Новинка</Badge>
		{/if}
	</Card.Header>
	<Card.Content>
		<div class="flex items-center justify-between">
			<h3 class="title">{title}</h3>
			<p class="text-muted-foreground text-sm">{weight}</p>
		</div>
		<p class="text-muted-foreground text-sm">{description}</p>
		<div class="mt-4 flex items-center justify-between">
			<div>
				<p class="text-lg font-semibold">{price} ₽</p>
			</div>
			<Button on:click={onOrderClick}>Заказать</Button>
		</div>
	</Card.Content>
</Card.Root>

<style>
	.title {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}
</style>
