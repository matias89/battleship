import { StyledSquareContainer } from './Square.styled';

export const Square = ({ width = '50px', height = 'auto'}) => (
  <StyledSquareContainer
    width={width}
    height={height}
  />
);