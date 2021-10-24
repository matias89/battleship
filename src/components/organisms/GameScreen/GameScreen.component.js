import { useDispatch, useSelector } from 'react-redux';
import {
  StyledGameScreenContainer,
  StyledGameScreenColumn,
  StyledGameScreenInfo,
} from './GameScreen.styled';
import { Board } from '@components/molecules/Board/Board.component';
import { Button } from '@components/atoms/Button/Button.component';
import { endGame } from '@actions/game.actions';

export const GameScreen = () => {
  const dispatch = useDispatch();
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const { player: { name } } = gameReducer;
  const handleOnSurrender = () => dispatch(endGame('Surrender'));
  return (
    <>
      <h2>Welcome {name}</h2>
      <StyledGameScreenInfo>
      <span>Es tu turno / CPU está jugando, espere ...</span>
      <Button
        variant="danger"
        onClick={handleOnSurrender}
      >
        Surrender
      </Button>
      </StyledGameScreenInfo>
      <StyledGameScreenContainer>
        <StyledGameScreenColumn>
          <h3>{name}</h3>
          <Board x={10} y={10} />
        </StyledGameScreenColumn>
        <StyledGameScreenColumn>
          <h3>CPU player</h3>
          <Board x={10} y={10} />
        </StyledGameScreenColumn>
      </StyledGameScreenContainer>
    </>
  );
};
