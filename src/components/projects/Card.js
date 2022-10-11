import React from "react";
import {
  CardContainer,
  CardTitle,
  CardImage,
  CardDescription,
  CardRole,
  CardTags,
  CardTag,
  CardLink,
  CardLinkContainer,
  CardInfo,
  CardHeader,
} from "./Card.styles.js";

const Card = ({ data }) => {
  let imgURL = `assets/img/${data.img}`;

  let tags = [];

  for (let i = 0; i < data.tags.length; i++) {
    tags.push(<CardTag key={i}>{data.tags[i]}</CardTag>);
  }

  return (
    <CardContainer>
      <CardHeader>
        <CardImage img={imgURL} />
      </CardHeader>
      <CardInfo>
        <CardTitle>{data.name}.</CardTitle>
        <CardDescription>{data.description}</CardDescription>
        <CardRole>Role: {data.role}.</CardRole>
        <CardTags>{tags}</CardTags>
        <CardLinkContainer>
          <CardLink href={data.link} target="_blank" rel="noreferrer">
            VIEW
          </CardLink>
        </CardLinkContainer>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;
