<script lang="ts">
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';
	import Settings from 'lucide-svelte/icons/settings';
	import { page } from '$app/stores';

	import { SIDEBAR_ITEMS, TOOLTIP_OPEN_DELAY } from './constants';

	let currentRoute = $derived($page.url.pathname);

	const isActive = (href: string) => {
		return currentRoute === href;
	};
</script>

<aside
	class="bg-background fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r pt-16 sm:flex"
>
	<nav class="flex flex-col items-center gap-4 px-2 sm:py-5">
		{#each SIDEBAR_ITEMS as { href, icon: Icon, title }}
			<Tooltip.Root openDelay={TOOLTIP_OPEN_DELAY}>
				<Tooltip.Trigger asChild let:builder>
					<a
						{href}
						class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
						class:active={isActive(href)}
						use:builder.action
						{...builder}
					>
						<Icon class="h-5 w-5" />
						<span class="sr-only">{title}</span>
					</a>
				</Tooltip.Trigger>
				<Tooltip.Content side="right">{title}</Tooltip.Content>
			</Tooltip.Root>
		{/each}
	</nav>
	<nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a
					href="##"
					class="text-muted-foreground hover:text-foreground flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8"
					use:builder.action
					{...builder}
				>
					<Settings class="h-5 w-5" />
					<span class="sr-only">Настройки</span>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right">Настройки</Tooltip.Content>
		</Tooltip.Root>
	</nav>
</aside>

<style lang="postcss">
	.active {
		@apply bg-accent text-accent-foreground;
	}
</style>
