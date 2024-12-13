export const createHrefFromBreadcrumb = (breadcrumbs: string[], currentBreadcrumb: string) => {
	const index = breadcrumbs.indexOf(currentBreadcrumb);
	if (index === -1) return undefined;
	return breadcrumbs.slice(0, index + 1).join('/');
};
