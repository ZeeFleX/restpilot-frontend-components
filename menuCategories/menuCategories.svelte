<script lang="ts">
	import type { IMenuCategoriesProps } from './menuCategories.types';
	import { Tabs, TabsList, TabsTrigger } from '$lib/components/ui/tabs';

	let { className = '' }: IMenuCategoriesProps = $props();

	const categories = [
		{ id: 1, label: 'Все' },
		{ id: 2, label: 'Горячие блюда' },
		{ id: 3, label: 'Салаты' },
		{ id: 4, label: 'Напитки' },
		{ id: 5, label: 'Десерты' },
		{ id: 6, label: 'Супы' },
		{ id: 7, label: 'Азиатская кухня' },
		{ id: 8, label: 'Китайская кухня' },
		{ id: 9, label: 'Итальянская кухня' },
		{ id: 10, label: 'Американская кухня' },
		{ id: 11, label: 'Японская кухня' }
	];
</script>

<div class="menu-categories w-full">
	<Tabs class="w-full">
		<TabsList class="w-full justify-start gap-4 overflow-x-auto">
			{#each categories as category}
				<TabsTrigger value={category.id.toString()}>{category.label}</TabsTrigger>
			{/each}
		</TabsList>
	</Tabs>
</div>

<style lang="postcss">
	/* Hide scrollbar for Chrome, Safari and Opera */
	:global(.overflow-x-auto::-webkit-scrollbar) {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	:global(.overflow-x-auto) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	.menu-categories {
		max-width: 100%;
		overflow-x: hidden;
	}
</style>
