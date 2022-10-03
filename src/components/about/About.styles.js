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
  padding: 0 0% 0 6%;
  margin: 0;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
