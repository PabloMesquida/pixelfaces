import styled from "styled-components";

export const AboutContainer = styled.section`
  border-top: thin solid ${({ theme }) => theme.primaryColor};
`;

export const ImgAbout = styled.img`
  width: 100%;
  max-width: 300px;
  min-width: 100px;
  height: auto;
`;

export const TxtAbout = styled.div`
  padding: 0 0% 0 6%;
  margin: 0;
`;

export const LogosContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
