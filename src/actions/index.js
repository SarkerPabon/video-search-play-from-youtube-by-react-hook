// Action Creator
export const selectSong = (song) => {
	// Return An Action
	return {
		type    : 'SONG_SELECTED',
		payload : song
	};
};

export const increment = () => ({ type: 'increment' });
export const decrement = () => ({ type: 'decrement' });
