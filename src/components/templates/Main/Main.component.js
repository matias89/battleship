import { useSelector } from 'react-redux';
import { InitialScreen } from '@components/organisms/InitialScreen/InitialScreen.component';
import { GameScreen } from '@components/organisms/GameScreen/GameScreen.component';
import { StyledMainContainer, StyledMainTitle } from './Main.styled';

const Main = () => {
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const { status } = gameReducer;
  return (
    <StyledMainContainer>
      <header>
        <StyledMainTitle>Battleship Game</StyledMainTitle>
      </header>
      {!status && <InitialScreen />}
      {status === 'InProgress' && <GameScreen />}
    </StyledMainContainer>
  );
};

export default Main;