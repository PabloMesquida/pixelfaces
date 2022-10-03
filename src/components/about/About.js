import React from "react";
import { AboutContainer, ImgAbout, TxtAbout } from "./About.styles.js";
import pabloImgMobile from "../../static/img/pabloAlpha.png";
import pabloImg from "../../static/img/pabloAlpha_small.png";

const About = () => {
  return (
    <AboutContainer>
      <h2>About.</h2>
      <article>
        <picture>
          <source srcSet={pabloImg} media="(min-width:600px)" />
          <ImgAbout src={pabloImgMobile} alt="pablo" />
        </picture>
        <TxtAbout>
          <p> I'm Pablo Mesquida, web developer based in Madrid.</p>
          <p>
            A pixel art enthusiast learning about interactive 3D and video
            games.
          </p>
        </TxtAbout>
      </article>
    </AboutContainer>
  );
};

export default About;
