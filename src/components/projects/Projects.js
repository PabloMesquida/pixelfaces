import React from "react";
import Cards from "./Cards.js";
import { ProjectsContainer, CardsContainer } from "./Projects.styles.js";
import data from "../../data/data.json";

const Projects = () => {
  let data1 = data.filter((data) => data.category === 1);
  let data2 = data.filter((data) => data.category === 2);
  let data3 = data.filter((data) => data.category === 3);

  return (
    <ProjectsContainer>
      <h2>Personal Projects.</h2>
      <CardsContainer>
        <Cards data={data1} />
      </CardsContainer>
      <h2>Pixel Art.</h2>
      <CardsContainer>
        <Cards data={data2} />
      </CardsContainer>
      <h2>Web Development.</h2>
      <CardsContainer>
        <Cards data={data3} />
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
