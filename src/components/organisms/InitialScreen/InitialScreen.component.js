import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startGame, savePlayerName, savePlayerBoard } from '@actions/game.actions'
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
  const [playerBoard, setPlayerBoard] = useState([]);
  const [boardStatus, setBoardStatus] = useState(false);
  const dispatch = useDispatch();
  const handleOnStart = () => {
    if (playerName.length > 3) {
      dispatch(startGame());
      dispatch(savePlayerName(playerName));
      dispatch(savePlayerBoard(playerBoard));
    }
  };
  const handleOnInput = ({ target: { value }}) => {
    setPlayerName(value);
  }
  const onGenerateBoard = (board) => {
    if (board.length) {
      setPlayerBoard(board);
      setBoardStatus(true);
    }
  };
  return (
    <div>
    <h2>Let's play!</h2>
    <p>Before START GAME you must add the ships positions on board and write your player name. Enjoy :)</p>
    <hr />
    <StyledInitialScreenContainer>
      <StyledBoardContainer>
        <Board
          x={10}
          y={10}
          allowGenerate
          onGenerateBoard={onGenerateBoard}
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
          disabled={playerName.length < 4 || !boardStatus}
          variant="primary"
        >START GAME</Button>
      </StyledDataContainer>
    </StyledInitialScreenContainer>
    </div>
  );
};
