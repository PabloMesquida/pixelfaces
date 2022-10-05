import styled from "styled-components";

export const ProjectsContainer = styled.section`
  border-top: thin solid ${({ theme }) => theme.secondaryColorLighter};
`;

export const CardsContainer = styled.article`
  height: auto;
  padding: 2rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.secondaryColor};
`;
