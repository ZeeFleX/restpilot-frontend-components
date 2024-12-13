<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { page } from '$app/stores';
	import { BREADCRUMB_ITEMS } from './constants';
	import { createHrefFromBreadcrumb } from './functions';

	let breadcrumbs = $derived($page.url.pathname?.split('/'));
</script>

<Breadcrumb.Root class="hidden md:flex">
	<Breadcrumb.List>
		{#each breadcrumbs as breadcrumb}
			{#if breadcrumb}
				<Breadcrumb.Item>
					<Breadcrumb.Link href={createHrefFromBreadcrumb(breadcrumbs, breadcrumb)}
						>{BREADCRUMB_ITEMS[breadcrumb] || breadcrumb}</Breadcrumb.Link
					>
				</Breadcrumb.Item>
				{#if breadcrumb !== breadcrumbs[breadcrumbs.length - 1]}
					<Breadcrumb.Separator />
				{/if}
			{/if}
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>

<style lang="postcss">
</style>
