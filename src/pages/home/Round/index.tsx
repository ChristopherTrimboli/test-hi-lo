import { TPlayer, TRound } from '../types';
import { flex, margin } from '../../../@local/styles';
import { Card } from '../Card';

interface RoundProps {
	index: number;
	animatePlayer: number | null;
	show: true;
	value: TRound;
	players: TPlayer[];
}

export const Round: React.FC<RoundProps> = ({ players, index, value, animatePlayer = null, show }) => (
	<div className={`${flex.row}`}>
		<div className={`${flex.col} ${margin.medium}`}>#{index}</div>
		{players.map(({ id }, index) => (
			<div key={index} className={`${flex.col} ${margin.medium}`}>
				<Card
					show={animatePlayer === null ? show : index <= animatePlayer}
					animate={animatePlayer === index}
					value={value.cards[id]}
				/>
			</div>
		))}
		<div className={`${flex.col} ${margin.medium}`}>
			{show && animatePlayer === null
				? value.winner === null
					? 'Draw'
					: players?.find(({ id }) => id === value.winner)?.name
				: '--'}
		</div>
	</div>
);
