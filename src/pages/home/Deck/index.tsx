import style from './style.module.scss';

interface DeckProps {
	animate: boolean;
}

export const Deck: React.FC<DeckProps> = ({ animate }) => (
	<div className={`${style.deck} ${animate ? style.animate : ''}`}>deck</div>
);
