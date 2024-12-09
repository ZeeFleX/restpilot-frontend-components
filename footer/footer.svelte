<script lang="ts">
	import type { FooterProps } from './footer.types';
	import { cn } from '$lib/utils';

	let { class: className = '' }: FooterProps = $props();

	const currentYear = new Date().getFullYear();
</script>

<footer class={cn('bg-secondary w-full px-4 py-8', className)}>
	<div class="container mx-auto">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-4">
			<!-- Company Info -->
			<div>
				<h3 class="mb-4 font-semibold">RestPilot</h3>
				<p class="text-muted-foreground text-sm">
					Расширяем возможности тестирования API с помощью современных инструментов и решений.
				</p>
			</div>

			<!-- Quick Links -->
			<div>
				<h3 class="mb-4 font-semibold">Быстрые ссылки</h3>
				<ul class="space-y-2">
					<li><a href="/" class="text-muted-foreground hover:text-primary text-sm">Главная</a></li>
					<li>
						<a href="/docs" class="text-muted-foreground hover:text-primary text-sm">Документация</a
						>
					</li>
					<li>
						<a href="/pricing" class="text-muted-foreground hover:text-primary text-sm">Цены</a>
					</li>
					<li><a href="/blog" class="text-muted-foreground hover:text-primary text-sm">Блог</a></li>
				</ul>
			</div>

			<!-- Support -->
			<div>
				<h3 class="mb-4 font-semibold">Поддержка</h3>
				<ul class="space-y-2">
					<li>
						<a href="/help" class="text-muted-foreground hover:text-primary text-sm">Центр помощи</a
						>
					</li>
					<li>
						<a href="/contact" class="text-muted-foreground hover:text-primary text-sm"
							>Связаться с нами</a
						>
					</li>
					<li>
						<a href="/faq" class="text-muted-foreground hover:text-primary text-sm"
							>Частые вопросы</a
						>
					</li>
				</ul>
			</div>

			<!-- Legal -->
			<div>
				<h3 class="mb-4 font-semibold">Юридическая информация</h3>
				<ul class="space-y-2">
					<li>
						<a href="/privacy" class="text-muted-foreground hover:text-primary text-sm"
							>Политика конфиденциальности</a
						>
					</li>
					<li>
						<a href="/terms" class="text-muted-foreground hover:text-primary text-sm"
							>Условия использования</a
						>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="border-border text-muted-foreground mt-8 border-t pt-8 text-center text-sm">
			<p>&copy; {currentYear} RestPilot. Все права защищены.</p>
		</div>
	</div>
</footer>
