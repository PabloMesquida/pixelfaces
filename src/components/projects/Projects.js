import React from "react";
import Cards from "./Cards.js";
import { ProjectsContainer, CardsContainer } from "./Projects.styles.js";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects.</h2>
      <CardsContainer>
        <Cards />
      </CardsContainer>
    </ProjectsContainer>
  );
};

export default Projects;
