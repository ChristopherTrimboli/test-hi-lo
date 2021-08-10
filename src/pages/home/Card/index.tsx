import style from './style.module.scss';

interface CardProps {
	animate: boolean;
	show: boolean;
	value: string;
}

export const Card: React.FC<CardProps> = ({ value, animate, show }) => (
	<div className={`${style.card} ${animate ? style.animate : ''}`}>{show ? value : '--'}</div>
);
