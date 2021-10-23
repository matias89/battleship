import styled, { css } from 'styled-components';

export const StyledSquareContainer = styled.div(({ width, height }) => css`
  width: ${width};
  height: ${height};
  border: 1px solid #ccc;
`);