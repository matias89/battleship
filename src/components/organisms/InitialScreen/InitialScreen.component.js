import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame, savePlayerName } from '@actions/game.actions'
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
  const [playerName, setPlayerName] = useState('');
  const dispatch = useDispatch();
  const handleOnStart = () => {
    if (playerName.length > 3) {
      dispatch(startGame());
      dispatch(savePlayerName(playerName));
    }
  };
  const handleOnInput = ({ target: { value }}) => {
    setPlayerName(value);
  }
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
        <StyledLabel htmlFor="player">Player Name</StyledLabel>
        <Input
          value={playerName}
          onInput={handleOnInput}
          placeholder="Must have four or more characters"
          id="player"
          name="player"
        />
        <Button
          onClick={handleOnStart}
          disabled={playerName.length < 4}
          variant="primary"
        >START GAME</Button>
      </StyledDataContainer>
    </StyledInitialScreenContainer>
    </div>
  );
};
