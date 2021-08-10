import { useAppStore } from '../../@local/store';
import { EMPTY } from '../../@local/constants';

interface BoardContainerProps {
	space: string;
}

export const EndContainer: React.FC<BoardContainerProps> = () => {
	const { useStoreSpace } = useAppStore();
	const { players = EMPTY.ARRAY, winnerId, end } = useStoreSpace('board1') ?? EMPTY.OBJECT;
	const winner = players.find(({ id }) => id === winnerId)?.name ?? '--';
	return end ? <div>{winner} win the game</div> : null;
};
