import { LINKS, ROUTE_PATH_KEYS } from '@local/constants';
import { layout as homeLayout } from './home/layout';
import { BoardGhost } from './home/BoardGhost';

export const getRoutes = () =>
	({
		index: 'home',
		links: {
			[LINKS.ROOT]: (page) => `/${page}`,
		},
		childKey: ROUTE_PATH_KEYS.PAGE,
		children: {
			home: {
				layout: homeLayout,
				actor: BoardGhost,
			},
		},
	} as const);
