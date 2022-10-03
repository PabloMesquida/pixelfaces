import React from "react";
import {
  AboutContainer,
  ImgAbout,
  TxtAbout,
  LogosContainer,
} from "./About.styles.js";
import pabloImgMobile from "../../static/img/pabloAlpha.png";
import pabloImg from "../../static/img/pabloAlpha_small.png";
import linkedin from "../../static/img/linkedin.svg";
import github from "../../static/img/github.svg";
import behance from "../../static/img/behance.svg";
import instagram from "../../static/img/instagram.svg";
import twitter from "../../static/img/twitter.svg";
import redbubble from "../../static/img/redbubble.svg";

const About = () => {
  return (
    <AboutContainer id="About">
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

          <p>
            <b>See more aobut me:</b>
          </p>
          <LogosContainer>
            <img src={linkedin} alt="linkedin" width="20px" height="20px" />
            <img src={github} alt="github" width="20px" height="20px" />
            <img src={behance} alt="behance" width="20px" height="20px" />
            <img src={instagram} alt="instagram" width="20px" height="20px" />
            <img src={twitter} alt="twitter" width="20px" height="20px" />
            <img src={redbubble} alt="redbubble" width="20px" height="20px" />
          </LogosContainer>
          <p>
            <b>Get in touch:</b>
            <br />
            pablo@thepixfaces.com
          </p>
        </TxtAbout>
      </article>
    </AboutContainer>
  );
};

export default About;
