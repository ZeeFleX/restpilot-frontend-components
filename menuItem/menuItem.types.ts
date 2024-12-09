import type { Picture } from 'vite-imagetools';

interface IMenuItemProps {
	title: string;
	weight: string;
	description: string;
	price: number;
	image: Picture | string;
	imageAlt: string;
	onOrderClick: () => void;
	isNew?: boolean;
}

export type { IMenuItemProps };
