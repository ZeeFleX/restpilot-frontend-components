import DashboardIcon from 'lucide-svelte/icons/circle-gauge';
import BuildingIcon from 'lucide-svelte/icons/building-2';
import UsersIcon from 'lucide-svelte/icons/users';
import UtensilsIcon from 'lucide-svelte/icons/utensils';
import BeefIcon from 'lucide-svelte/icons/beef';
import ListOrderedIcon from 'lucide-svelte/icons/list-ordered';

export const SIDEBAR_ITEMS = [
	{
		title: 'Главная',
		icon: DashboardIcon,
		href: '/manager'
	},
	{
		title: 'Мои рестораны',
		icon: UtensilsIcon,
		href: '/manager/restaurants'
	}
];

export const TOOLTIP_OPEN_DELAY = 200;
