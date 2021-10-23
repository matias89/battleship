import { Input } from '@components/atoms/Input/Input.component';
import { Button } from '@components/atoms/Button/Button.component';
import { Board } from '@components/molecules/Board/Board.component';
import {
  StyledInitialScreenContainer,
  StyledBoardContainer,
  StyledDataContainer,
  StyledLabel,
} from './InitialScreen.styled';

export const InitialScreen = () => {
  return (
    <div>
    <h2>InitialScreen</h2>
    <p>Place your ships on the board, enter a player name and let's play :)</p>
    <hr />
    <StyledInitialScreenContainer>
      <StyledBoardContainer>
        <Board
          x={10}
          y={10}
        />
      </StyledBoardContainer>
      <StyledDataContainer>
        <StyledLabel>Player Name</StyledLabel>
        <Input placeholder="Please write your name"/>
        <Button>START GAME</Button>
      </StyledDataContainer>
    </StyledInitialScreenContainer>
    </div>
  );
};
