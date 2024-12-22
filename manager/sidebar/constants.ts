import DashboardIcon from 'lucide-svelte/icons/circle-gauge';
import BuildingIcon from 'lucide-svelte/icons/building-2';
import UsersIcon from 'lucide-svelte/icons/users';
import UtensilsIcon from 'lucide-svelte/icons/utensils';
import BeefIcon from 'lucide-svelte/icons/beef';
import ListOrderedIcon from 'lucide-svelte/icons/list-ordered';

export const SIDEBAR_ITEMS = [
	{
		title: 'Дашборд',
		icon: DashboardIcon,
		href: '/admin'
	},
	{
		title: 'Компании',
		icon: BuildingIcon,
		href: '/admin/companies'
	},
	{
		title: 'Пользователи',
		icon: UsersIcon,
		href: '/admin/users'
	},
	{
		title: 'Рестораны',
		icon: UtensilsIcon,
		href: '/admin/restaurants'
	},
	{
		title: 'Меню',
		icon: BeefIcon,
		href: '/admin/menus'
	},
	{
		title: 'Заказы',
		icon: ListOrderedIcon,
		href: '/admin/orders'
	}
];

export const TOOLTIP_OPEN_DELAY = 200;
