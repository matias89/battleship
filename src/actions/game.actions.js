export const startGame = () => ({
  type: 'START_GAME',
});

export const savePlayerName = (playerName) => ({
  type: 'SAVE_PLAYER_NAME',
  payload: {
    playerName,
  }
});
