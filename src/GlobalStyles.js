import styled, { createGlobalStyle } from 'styled-components';
import { Canvas as C } from 'react-three-fiber';

export default createGlobalStyle`
  body {
    margin: 0;
    background: black;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #note {
    position: absolute;
    right: 50%;
    top: 50%;
    color: azure;
    font-size: 72px;
    transform: translateX(50%) translateY(-50%);
    opacity: 0;
  }
`;

export const Canvas = styled(C)`
  position: absolute !important;
  top: 0;
  left: 0;
  background: black;
`;
