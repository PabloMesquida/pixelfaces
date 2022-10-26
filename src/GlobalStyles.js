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
  background-color: ${({ theme }) => theme.backColor};
  font-family: "Roboto Mono", monospace;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.txtColor};
  scroll-behavior: smooth;
  @media (min-width: 640px) {
     font-size: 0.9rem;
  }
}

h1{
  font-family: 'Press Start 2P', sans-serif;
  font-size: 3rem;
  color: ${({ theme }) => theme.primaryColor};
}

h2{
  font-family: "Roboto Mono", monospace;
  font-size: 1.1rem;
  padding:0.5rem;
  padding-left: 6%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.primaryColor};
 
  background-color:  ${({ theme }) => theme.secondaryColorLighter};
  text-shadow: 0px 0px 5px rgba(255, 162, 0, 0.6);
  border-bottom: medium solid #00000080;

  &::after {
    content: "█";
  text-shadow: 0px 0px 5px rgba(255, 162, 0, 0.6);
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

  @media (min-width: 640px) {
     font-size: 1.2rem;
  }
}

h3{
  font-family: "Roboto Mono", monospace;
  font-size: 1rem;
  padding:0;
  margin: 0;
  margin-bottom:0.5rem;
  color: ${({ theme }) => theme.txtColor};
    @media (min-width: 640px) {
     font-size: 1.1rem;
  }
 
}

p{
  margin-top:0.5rem;
}

article{
  height: auto;
  padding:2rem 6% 2rem 6%;
  display: flex;
  flex-direction: row;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
   
}

section{
  padding-top:1rem;
  width: 96vw;
  max-width: 880px;
  min-width: 280px;
  height: auto;
  display: block;
}

img{
  &:hover{
    filter: drop-shadow(0px 4px 0px #00000050);
  }
}

`;
