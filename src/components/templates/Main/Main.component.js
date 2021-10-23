import { InitialScreen } from '@components/organisms/InitialScreen/InitialScreen.component';
import { StyledMainContainer } from './Main.styled';

const Main = () => {
  return (
    <StyledMainContainer>
      <header>
        <h1>Battleship Game</h1>
      </header>
      <InitialScreen /> 
    </StyledMainContainer>
  );
};

export default Main;