import { TPlayer, TRound } from './types';
import { Deck } from './Deck';
import { Round } from './Round';

interface BoardProps {
	players: TPlayer[];
	rounds: TRound[];
	animateDeck: boolean;
	end: true;
	animateRound: number;
	animatePlayer: number;
}

export const Board: React.FC<BoardProps> = ({
	players,
	rounds,
	animateDeck,
	animateRound = null,
	animatePlayer = null,
	end,
}) => (
	<div>
		<Deck animate={animateDeck} />
		{rounds.map((round, i) => (
			<Round
				key={i}
				index={i}
				value={round}
				show={end || (animateRound !== null && i <= animateRound)}
				animatePlayer={animateRound === i ? animatePlayer : null}
				players={players}
			/>
		))}
	</div>
);
