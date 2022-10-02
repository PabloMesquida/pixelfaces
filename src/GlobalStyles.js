import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
  font-size: 16px;
  font-family: sans-serif;
  line-height: 1.6;
  scroll-behavior: smooth;
}

*,
*::after,
*::before {
   box-sizing: inherit;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
  background-color: #120b05;

}

h1{
  font-family: 'Press Start 2P', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
}

h2{
   font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.primaryColor};
}

`;
