import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 96vw;
  max-width: 880px;
  min-width: 280px;
  height: 100px;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColorLighter};
  box-shadow: 0 4px 0px -1px #00000060;
`;

export const LogosContainer = styled.div`
  width: 60vw;
  max-width: 400px;
  display: flex;
  justify-content: space-between;
`;
