import { Board } from '@components/molecules/Board/Board.component';

export const InitialScreen = () => {
  return (
    <div>
    <h2>InitialScreen</h2>
    <p>Place your ships on the board, enter a player name and let's play :)</p>
    <Board
      x={10}
      y={10}
    />
    </div>
  );
};
