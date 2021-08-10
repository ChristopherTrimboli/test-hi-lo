import { Layout } from '@local/components/types';
import { BoardContainer } from './BoardContainer';
import { EndContainer } from './EndContainer';

export const layout: Layout = () => (
	<div>
		<BoardContainer space="board1" />
		<EndContainer space="board1" />
	</div>
);
