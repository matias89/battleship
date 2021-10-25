import styled, { css } from 'styled-components';

export const StyledSquareContainer = styled.div(({ width, height, isTaken, color }) => css`
  ${isTaken && `background-color: ${color};`}
  width: ${width}px;
  height: ${height}px;
  ${!isTaken && 'border: 1px solid #ccc;'}
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`);
