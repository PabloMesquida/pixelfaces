import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";
import { EffectComposer, Pixelation } from "@react-three/postprocessing";
import EarthSistem from "./EarthSistem.js";
import Lights from "./Lights.js";
import { MainAnimation, MainConteiner, H1, Txt } from "./Main.styles.js";

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
          <Stars speed={0} depth={0} count={1000} saturation={100} factor={4} />
        </Canvas>
      )}
      <Canvas
        style={{ position: "relative", zIndex: 1 }}
        className="webgl"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
      >
        <Lights />
        <Suspense>
          <EarthSistem isMobile={isMobile} />
        </Suspense>
        <EffectComposer>
          <Pixelation granularity={8} />
        </EffectComposer>
      </Canvas>
      <MainConteiner>
        <H1>Pixel Faces</H1>
        <Txt>
          Hi, Welcome!
          <br />⚡
        </Txt>
      </MainConteiner>
    </MainAnimation>
  );
};

export default Main;
