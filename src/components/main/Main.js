import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

import Desktop from "./Desktop.js";
import Mobile from "./Mobile.js";
import PortalView from "./PortalView.js";

let vh = window.innerHeight;

const MainAnimation = styled.section`
  width: 100vw;
  height: 100vh;
  height: ${vh}px;
  background-color: #000;
`;

const Main = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <MainAnimation>
      <Canvas
        className="webgl"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 3000 }}
      >
        {isMobile ? <PortalView /> : <Desktop />}
      </Canvas>
    </MainAnimation>
  );
};

export default Main;
