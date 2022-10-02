import styled from "styled-components";

export const AboutContainer = styled.div`
  width: 96vw;
  max-width: 960px;
  min-width: 280px;
  height: auto;
  display: block;
  border-top: medium solid ${({ theme }) => theme.primaryColor};
`;
