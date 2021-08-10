import { ghost, Ghost } from 'react-ghost';
import { useEffect } from 'react';
import { actions, reducersCreators, useAppStore } from '../../@local/store';
import { TPlayer, TRound } from './types';
import { EMPTY } from '../../@local/constants';

const reducer = reducersCreators.valueReducer({});

const loadedPlayers: TPlayer[] = [
	{ id: '111', name: 'Mickey' },
	{ id: '222', name: 'Goofy' },
];

const loadedRounds: TRound[] = [
	{
		cards: { '111': '2D', '222': 'QS' },
		winner: '111',
	},
	{
		cards: { '111': '3D', '222': '2S' },
		winner: '222',
	},
	{
		cards: { '111': '4D', '222': 'QS' },
		winner: null,
	},
	{
		cards: { '111': '5D', '222': 'QS' },
		winner: '111',
	},
	{
		cards: { '111': 'AD', '222': 'KS' },
		winner: '111',
	},
];

const space = 'board1';

export const StagesGhost: Ghost = () => {
	const { dispatch, useStoreSpace } = useAppStore();

	const { rounds, players, animateRound, animatePlayer } = useStoreSpace(space) ?? EMPTY.OBJECT;

	// start animate deck
	useEffect(() => {
		if (rounds) {
			dispatch(actions.merge(space, { animateDeck: true, animateRound: null, animatePlayer: null }));
			const timeoutId = setTimeout(() => {
				dispatch(actions.merge(space, { animateDeck: false, animateRound: 0, animatePlayer: 0 }));
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [rounds]);

	// start animate rounds
	useEffect(() => {
		if (animateRound !== null && animatePlayer !== null) {
			const timeoutId = setTimeout(() => {
				const value = {
					animatePlayer: animatePlayer + 1,
					animateRound,
					end: false,
				};
				if (value.animatePlayer >= players?.length ?? 0) {
					value.animatePlayer = 0;
					value.animateRound++;
				}
				if (value.animateRound >= rounds?.length ?? 0) {
					value.animatePlayer = null;
					value.animateRound = null;
					value.end = true;
				}
				dispatch(actions.merge(space, value));
			}, 1000);
			return () => clearTimeout(timeoutId);
		}
	}, [animateRound, animatePlayer]);

	return null;
};

export const BoardGhost: Ghost = () => {
	const { useReducer, dispatch } = useAppStore();
	useReducer(space, reducer);

	// players and rounds was uploaded from server
	useEffect(() => {
		dispatch(
			actions.merge(space, { players: loadedPlayers, rounds: loadedRounds, animateDeck: true, winnerId: '111' })
		);
	}, [loadedPlayers, loadedRounds]);

	return ghost(StagesGhost);
};
