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
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.txtColor};
  scroll-behavior: smooth;
}

h1{
  font-family: 'Press Start 2P', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
  
}

h2{
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  padding:0.8rem;
  padding-left: 6%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.secondaryColor};
  background-color:  ${({ theme }) => theme.primaryColor};
  text-shadow: 0px 0px 4px ${({ theme }) => theme.secondaryShadowColor};

  &::after {
    content: "█";
    text-shadow: 0px 0px 6px ${({ theme }) => theme.secondaryShadowColor};
    animation: blink-animation 1s steps(5, start) infinite;
    -webkit-animation: blink-animation 1s steps(5, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
  @-webkit-keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }
}

article{
  height: auto;
  padding:1rem 6% 1rem 6%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
}

`;
