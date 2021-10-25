import { StyledSquareContainer } from './Square.styled';

export const Square = ({ width = '50px', height = 'auto', value, color }) => (
  <StyledSquareContainer
    width={width}
    height={height}
    isTaken={value === 'taken'}
    color={color}
  />
);