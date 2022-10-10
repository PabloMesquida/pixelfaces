import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.secondaryColorLighter};
  box-shadow: 0 4px 0px -1px #00000060;
  cursor: move;
  @media (min-width: 640px) {
    flex-direction: row;
    height: 250px;
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  min-height: 200px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
  padding-left: 1.3rem;
  user-select: none;
  @media (max-width: 640px) {
    height: 270px;
  }
`;

export const CardTitle = styled.h3`
  font-weight: bold;
`;

export const CardRole = styled.p`
  color: ${({ theme }) => theme.txtColor};
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 60vw;

  @media (min-width: 640px) {
    height: 100%;
  }
`;

export const CardDescription = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.txtColor};
`;

export const CardTags = styled.div``;

export const CardTag = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.secondaryColor};
  background-color: ${({ theme }) => theme.txtSecondaryColor};
  padding: 0.3rem;
  margin-right: 0.5rem;
  border-radius: 3px;
`;

export const CardLinkContainer = styled.div`
  font-weight: bold;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const CardLink = styled.a`
  color: ${({ theme }) => theme.primaryColor};
  padding: 0.2rem 0.5rem;
  border-radius: 3px;
  text-decoration: none;

  &:after {
    content: url("assets/img/arrow.svg");

    margin-left: -10px;
    opacity: 0;
    vertical-align: middle;
    transition: margin 0.3s, opacity 0.3s;
  }

  &:hover:after {
    margin-left: 5px;
    opacity: 1;
  }
`;
