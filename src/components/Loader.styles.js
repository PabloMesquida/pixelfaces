import styled from "styled-components";

let vh = window.innerHeight;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  height: ${vh}px;
`;

export const LoaderTxt = styled.span`
  text-align: center;
  font-family: "Roboto Mono", monospace;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.primaryColor};
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);

  &::after {
    content: "█";
    text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
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
`;
