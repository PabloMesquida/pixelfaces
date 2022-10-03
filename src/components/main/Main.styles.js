import styled from "styled-components";

let vh = window.innerHeight;

export const MainAnimation = styled.main`
  width: 100%;
  height: 100vh;
  height: ${vh}px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(38, 26, 12);
  background: radial-gradient(
    circle,
    rgba(38, 26, 12, 1) 0%,
    rgba(18, 11, 5, 1) 100%
  );
`;

export const MainConteiner = styled.div`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 12rem;
`;

export const H1 = styled.h1`
  line-height: 4rem;
  letter-spacing: 0.1rem;
  text-shadow: 0px 0px 8px rgba(255, 162, 0, 0.6);
  text-align: center;
`;

export const Txt = styled.span`
  font-size: 1rem;
  text-align: center;
  line-height: 2rem;
  background-color: transparent;
`;
