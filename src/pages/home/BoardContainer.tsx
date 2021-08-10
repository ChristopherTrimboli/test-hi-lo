import { Board } from './Board';
import { useAppStore } from '../../@local/store';
import { EMPTY } from '../../@local/constants';

interface BoardContainerProps {
	space: string;
}

export const BoardContainer: React.FC<BoardContainerProps> = () => {
	const { useStoreSpace } = useAppStore();
	const {
		players = EMPTY.ARRAY,
		rounds = EMPTY.ARRAY,
		animateDeck,
		animateRound,
		animatePlayer,
		end,
	} = useStoreSpace('board1') ?? EMPTY.OBJECT;
	return (
		<Board
			players={players}
			rounds={rounds}
			animateDeck={animateDeck}
			animateRound={animateRound}
			animatePlayer={animatePlayer}
			end={end}
		/>
	);
};
