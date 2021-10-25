export const startGame = () => ({
  type: 'START_GAME',
});

export const savePlayerName = (playerName) => ({
  type: 'SAVE_PLAYER_NAME',
  payload: {
    playerName,
  }
});

export const endGame = (status) => ({
  type: 'END_GAME',
  payload: {
    status,
  }
});

export const savePlayerBoard = (board) => ({
  type: 'FILL_PLAYER_BOARD',
  payload: {
    board,
  }
});
