import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 96vw;
  max-width: 960px;
  min-width: 280px;
  height: auto;
  display: block;
  border-top: thin solid ${({ theme }) => theme.primaryColor};
`;

export const ImgAbout = styled.img`
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  height: auto;
`;

export const TxtAbout = styled.p`
  padding: 0 5% 0 10%;
  margin: 0;
  vertical-align: top;
`;
