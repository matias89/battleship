const initialState = {
  status: null, // InProgress - Surrender - Won - Lost
  player: {
    name: '',
  },
  boards: {
    player: [],
    cpu: [],
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
    case 'FILL_PLAYER_BOARD': {
      return {
        ...state,
        boards: {
          ...state.boards,
          player: action.payload.board,
        }
      }
    }
    default:
      return state;
  }
};
