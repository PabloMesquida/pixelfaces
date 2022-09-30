import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";
import styled from "styled-components";
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
      {isMobile && (
        <Canvas
          style={{ position: "fixed", zIndex: 0 }}
          className="webgl"
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
        >
          <DeviceOrientationControls />
          <Stars />
        </Canvas>
      )}
      <Canvas
        style={{ position: "relative", zIndex: 1 }}
        className="webgl"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={5} />
        <Suspense>
          <EarthSistem isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </MainAnimation>
  );
};

export default Main;
