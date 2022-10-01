import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
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
          <Stars speed={0} depth={0} count={2000} saturation={100} />
          <EffectComposer>
            <Pixelation granularity={8} />
          </EffectComposer>
        </Canvas>
      )}
      <Canvas
        style={{ position: "relative", zIndex: 1 }}
        className="webgl"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={0.3} color={"#ff9600"} />
        <directionalLight
          position={[-5, 1, 2]}
          color={"#ff9600"}
          intensity={0.9}
        />
        <Suspense>
          <EarthSistem isMobile={isMobile} />
          <EffectComposer>
            <Pixelation granularity={8} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </MainAnimation>
  );
};

export default Main;
