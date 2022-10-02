import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #120b05;
  font-size: 16px;
}

h1{
  font-family: 'Press Start 2P', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
}

`;
