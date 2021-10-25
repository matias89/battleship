import { useEffect } from 'react';
import { Square } from '@components/atoms/Square/Square.component';
import { Button } from '@components/atoms/Button/Button.component';
import { sizes, ships } from '@constants';
import { useSquares } from '@hooks/useBoard';
import {
  StyledBoardContainer,
  StyledBoardRow,
  StyledBoardHeader,
} from './Board.styled';

const createBoard = (x, y) => {
  const board = [];
  const squares = [];
  for (let i = 0; i < x; i++) {
    board[i] = [];
    for (let j = 0; j < y; j++) {
      board[i][j] = `${i} ${j}`; // analizar si acá podrian estar los estados ...
      squares.push({
        value: `${i}${j}`,
      });
    }
  }
  return {
    board,
    squares,
  }
};

export const Board = ({ x, y, allowGenerate, onGenerateBoard = () => {}, fillBoard }) => {
  const { square: { width, height } } = sizes;
  const { board, squares } = createBoard(x, y);
  const { takenSquares, generateShips } = useSquares(squares);
  const handleOnGenerate = () => {
    generateShips(ships);
  };

  useEffect(() => {
    onGenerateBoard(takenSquares);
  }, [takenSquares]);

  const buildBoard = () => {
    let i = 0;
    const boardData = fillBoard || takenSquares;
    return board.map((row, key) => {
      return (
        <StyledBoardRow key={key}>
          {row.map((col, index) => {
            i++;
            return (
              <Square
                width={width}
                height={height}
                key={index}
                status={'HIT'} // analizar si acá podrian estar los estados ...
                value={boardData[i - 1]?.status}
                color={boardData[i - 1]?.color}
              />
            );
          })}
        </StyledBoardRow>
      );
    });
  }
  
  return (
    <StyledBoardContainer>
      {allowGenerate && (
        <StyledBoardHeader>
          <Button
            variant="warning"
            onClick={handleOnGenerate}
          >{takenSquares.length ? 'CHANGE' : 'ADD'} SHIPS POSITIONS</Button>
        </StyledBoardHeader>
      )}
      {buildBoard()}
    </StyledBoardContainer>
  );
};