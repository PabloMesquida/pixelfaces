import styled from "styled-components";

let vh = window.innerHeight;

export const MainAnimation = styled.main`
  width: 100vw;
  height: 100vh;
  height: ${vh}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainConteiner = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  line-height: 4rem;
  letter-spacing: 0.1rem;
  padding-top: 30vh;
  background-color: transparent;
  text-shadow: 1px 1px 0px rgba(180, 80, 0, 0.8);
  text-align: center;
`;

export const Txt = styled.span`
  text-align: center;
  line-height: 2rem;
  background-color: transparent;
  font-family: "Roboto Mono", monospace;
  font-size: clam(1.5rem, 8vw - 2rem, 3rem);
  color: ${({ theme }) => theme.txtColor};
`;
