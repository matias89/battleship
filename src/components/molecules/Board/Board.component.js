import { Square } from '@components/atoms/Square/Square.component';
import {
  StyledBoardContainer,
  StyledBoardRow,
} from './Board.styled';

export const Board = ({ x, y }) => {
  const board = [];
  for (let i = 0; i < x; i++) {
    board[i] = [];
    for (let j = 0; j < y; j++) {
      board[i][j] = true; // analizar si acá podrian estar los estados ...
    }
  }
  return (
    <StyledBoardContainer>
      {board.map((row, key) => (
        <StyledBoardRow key={key}>
          {row.map((col, index) => (
            <Square
              width="70px"
              height="70px"
              key={index}
              status={'HIT'} // analizar si acá podrian estar los estados ...
            />
          ))}
        </StyledBoardRow>
      ))}
    </StyledBoardContainer>
  );
};