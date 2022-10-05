import styled from "styled-components";

export const Slider = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  overflow-x: clip;
  overflow-y: none;
`;

export const NumbersContainer = styled.div`
  width: calc(${(props) => props.total} * 38px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backColor};
  margin: 1.5rem;
  padding: 0.5rem 0.5rem;
  border-radius: 10px;
`;
