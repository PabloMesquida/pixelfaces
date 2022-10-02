import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  box-sizing: border-box;
  font-size: 16px;
}

body {
  margin: 0;
  padding: 0;

}

h1{
  font-family: 'Press Start 2P', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
}

`;
