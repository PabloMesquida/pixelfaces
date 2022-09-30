import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import styled from "styled-components";

import Desktop from "./Desktop.js";
import Mobile from "./Mobile.js";
import EarthSistem from "./EarthSistem.js";

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
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={5} />
        <EarthSistem />
        <Mobile />
      </Canvas>
    </MainAnimation>
  );
};

export default Main;
