<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Menu, CircleUser } from 'lucide-svelte/icons';
	import logo from '$lib/assets/images/logo-main.svg';
</script>

<header
	class="bg-background sticky top-0 flex h-16 items-center justify-between gap-4 border-b px-8 md:px-6"
>
	<nav
		class="flex-co hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6"
	>
		<a href="##" class="mr-8 flex items-center gap-2 text-lg font-semibold md:text-base">
			<img src={logo} alt="RestPilot. Автопилот для вашего бизнеса" class="h-12" />
		</a>
		<a href="##" class="text-foreground hover:text-foreground transition-colors"> Dashboard </a>
		<a href="##" class="text-muted-foreground hover:text-foreground transition-colors"> Orders </a>
		<a href="##" class="text-muted-foreground hover:text-foreground transition-colors">
			Products
		</a>
		<a href="##" class="text-muted-foreground hover:text-foreground transition-colors">
			Customers
		</a>
		<a href="##" class="text-muted-foreground hover:text-foreground transition-colors">
			Analytics
		</a>
	</nav>
	<Sheet.Root>
		<Sheet.Trigger asChild let:builder>
			<Button variant="outline" size="icon" class="shrink-0 md:hidden" builders={[builder]}>
				<Menu class="h-5 w-5" />
				<span class="sr-only">Toggle navigation menu</span>
			</Button>
		</Sheet.Trigger>
		<Sheet.Content side="left">
			<nav class="grid gap-6 text-lg font-medium">
				<a href="##" class="flex items-center gap-2 text-lg font-semibold">
					<img src={logo} alt="RestPilot. Автопилот для вашего бизнеса" class="h-12" />
				</a>
				<a href="##" class="hover:text-foreground"> Dashboard </a>
				<a href="##" class="text-muted-foreground hover:text-foreground"> Orders </a>
				<a href="##" class="text-muted-foreground hover:text-foreground"> Products </a>
				<a href="##" class="text-muted-foreground hover:text-foreground"> Customers </a>
				<a href="##" class="text-muted-foreground hover:text-foreground"> Analytics </a>
			</nav>
		</Sheet.Content>
	</Sheet.Root>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button builders={[builder]} variant="secondary" size="icon" class="rounded-full">
				<CircleUser class="h-5 w-5" />
				<span class="sr-only">Toggle user menu</span>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content align="end">
			<DropdownMenu.Label>My Account</DropdownMenu.Label>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Settings</DropdownMenu.Item>
			<DropdownMenu.Item>Support</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Item>Logout</DropdownMenu.Item>
		</DropdownMenu.Content>
	</DropdownMenu.Root>
</header>

<style lang="postcss"></style>
