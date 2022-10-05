import React from "react";
import Cards from "./Cards.js";
import { ProjectsContainer } from "./Projects.styles.js";

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects.</h2>
      <article>
        <Cards />
      </article>
    </ProjectsContainer>
  );
};

export default Projects;
