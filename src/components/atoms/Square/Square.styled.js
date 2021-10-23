import styled, { css } from 'styled-components';

export const StyledSquareContainer = styled.div(({ width, height }) => css`
  width: ${width}px;
  height: ${height}px;
  border: 1px solid #ccc;
`);