import React from "react";
import Card from "./Card.js";
import { ProjectsContainer } from "./Projects.styles.js";
import data from "../../data/data.json";

const Projects = () => {
  let content = [];

  data.map((data, i) => {
    content.push(<Card data={data} key={i} id={i} />);
  });

  return (
    <ProjectsContainer>
      <h2>Projects.</h2>
      <article>{content}</article>
    </ProjectsContainer>
  );
};

export default Projects;
