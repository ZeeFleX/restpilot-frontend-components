<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import type { ICompaniesTableProps } from './companiesTable.types';
	const { companies }: ICompaniesTableProps = $props();
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head class="w-[100px]">Наименование</Table.Head>
			<Table.Head>Город</Table.Head>
			<Table.Head>Тариф</Table.Head>
			<Table.Head class="text-right">Кол-во ресторанов</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each companies as { companyName, city, plan, restaurants }, i (i)}
			<Table.Row>
				<Table.Cell class="font-medium">{companyName}</Table.Cell>
				<Table.Cell>{city}</Table.Cell>
				<Table.Cell>{plan}</Table.Cell>
				<Table.Cell class="text-right">{restaurants}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
