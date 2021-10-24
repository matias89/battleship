import { useSelector } from 'react-redux';
import { InitialScreen } from '@components/organisms/InitialScreen/InitialScreen.component';
import { StyledMainContainer } from './Main.styled';

const Main = () => {
  const { gameReducer } = useSelector(state => ({
    gameReducer: state.gameReducer,
  }));
  const { status } = gameReducer;
  return (
    <StyledMainContainer>
      <header>
        <h1>Battleship Game</h1>
      </header>
      {!status && <InitialScreen />}
    </StyledMainContainer>
  );
};

export default Main;