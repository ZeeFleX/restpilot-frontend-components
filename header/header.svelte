<script lang="ts">
	import type { IHeaderProps } from './header.types';
	import { cn } from '$lib/utils';

	let { className = '' }: IHeaderProps = $props();
	let isMenuOpen = $state(false);

	const navItems = [
		{ href: '/', label: 'Главная' },
		{ href: '/about', label: 'О проекте' },
		{ href: '/contacts', label: 'Контакты' }
	];

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class={cn('bg-background/80 fixed top-0 z-50 w-full border-b backdrop-blur-sm', className)}>
	<div class="container mx-auto px-4">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/" class="text-primary hover:text-primary/90 text-xl font-bold"> RestPilot </a>
			</div>

			<nav class="hidden space-x-8 md:flex">
				{#each navItems as { href, label }}
					<a
						{href}
						class="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
					>
						{label}
					</a>
				{/each}
			</nav>

			<button
				type="button"
				class="text-muted-foreground hover:text-primary rounded-md p-2 md:hidden"
				aria-label="Открыть меню"
				onclick={toggleMenu}
			>
				<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
					/>
				</svg>
			</button>
		</div>

		{#if isMenuOpen}
			<div class="md:hidden">
				<div class="space-y-1 px-2 pb-3 pt-2">
					{#each navItems as { href, label }}
						<a
							{href}
							class="text-muted-foreground hover:text-primary hover:bg-accent block rounded-md px-3 py-2 text-base font-medium transition-colors"
						>
							{label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</header>
