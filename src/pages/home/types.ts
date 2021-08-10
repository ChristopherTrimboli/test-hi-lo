export interface TPlayer {
	id: string;
	name: string;
}

export interface TRound {
	cards: Record<string, string>;
	winner: string | null;
}
