import React from "react";
import { FooterContainer, LogosContainer, TxtFooter } from "./Footer.styles.js";

import linkedin from "../../static/img/linkedin.svg";
import github from "../../static/img/github.svg";
import behance from "../../static/img/behance.svg";
import instagram from "../../static/img/instagram.svg";
import twitter from "../../static/img/twitter.svg";
import redbubble from "../../static/img/redbubble.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <LogosContainer>
        <a
          href="https://www.linkedin.com/in/pablomesquida/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="linkedin" width="20px" height="20px" />
        </a>
        <a
          href="https://github.com/PabloMesquida"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt="github" width="20px" height="20px" />
        </a>
        <a
          href="https://www.behance.net/pablomesquida"
          target="_blank"
          rel="noreferrer"
        >
          <img src={behance} alt="behance" width="20px" height="20px" />
        </a>
        <a
          href="https://www.instagram.com/pixel_faces/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram" width="20px" height="20px" />
        </a>
        <a
          href="https://twitter.com/pixel_faces"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="twitter" width="20px" height="20px" />
        </a>
        <a
          href="https://www.redbubble.com/es/people/pixelfaces/shop?asc=u"
          target="_blank"
          rel="noreferrer"
        >
          <img src={redbubble} alt="redbubble" width="20px" height="20px" />
        </a>
      </LogosContainer>
    </FooterContainer>
  );
};

export default Footer;
