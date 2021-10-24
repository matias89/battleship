const initialState = {
  status: null, // InProgress - Finished - Surrender
  player: {
    name: '',
  }
};

export const gameReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case 'START_GAME': {
      return {
        ...state,
        status: 'InProgress',
      }
    }
    case 'SAVE_PLAYER_NAME': {
      return {
        ...state,
        player: {
          name: action.payload.playerName,
        }
      }
    }
    case 'END_GAME': {
      return {
        ...state,
        status: action.payload.status,
      }
    }
    default:
      return state;
  }
};
