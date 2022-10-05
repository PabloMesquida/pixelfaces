import styled from "styled-components";

export const Number = styled.span`
  padding: 0.2rem 0.4rem;
  margin: 0.2rem;
  color: ${({ theme }) => theme.txtSecondaryColor};
  background-color: ${({ theme }) => theme.secondaryColor};
  border: thin solid ${({ theme }) => theme.secondaryColorLighter};
  border-radius: 5px;
  &.active {
    color: ${({ theme }) => theme.txtColor};
    border-color: ${({ theme }) => theme.txtSecondaryColor};
    background-color: ${({ theme }) => theme.secondaryColorLighter};
    box-shadow: 0 4px 0px -1px #00000080;
  }
`;
