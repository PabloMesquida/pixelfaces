import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";

import styled from "styled-components";

import Desktop from "./Desktop.js";
import Mobile from "./Mobile.js";
import PortalView from "./PortalView.js";
import Earth from "./Earth.js";
import Moon from "./Moon.js";

let vh = window.innerHeight;

const MainAnimation = styled.section`
  width: 100vw;
  height: 100vh;
  height: ${vh}px;
  background-color: #000;
`;

const Main = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const refEarth = useRef();
  const refMoon = useRef();

  function Update() {
    useFrame(({ clock, pointer, camera }) => {
      refEarth.current.rotation.y += -0.0015;
      refEarth.current.rotation.z += -0.0001;

      let elapsed = clock.getElapsedTime();

      refMoon.current.position.x = Math.sin(elapsed * 0.1) * 2.5;
      refMoon.current.position.y = Math.abs(Math.cos(elapsed * 0.01));
      refMoon.current.position.z = Math.cos(elapsed * 0.1) * 2.5;
      refMoon.current.lookAt(refEarth.current.position);

      const parallaxX = pointer.x * 1;
      const parallaxY = -pointer.y * 1;

      camera.position.x += (parallaxX - camera.position.x) * 0.2;
      camera.position.y += (parallaxY - camera.position.y) * 0.2;

      camera.lookAt(0, 0, 0);
    });
  }

  return (
    <MainAnimation>
      <Canvas
        className="webgl"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
      >
        <ambientLight intensity={5} />
        <Suspense>
          <group ref={refEarth}>
            <Earth rotation={[Math.PI * 1.1, 0, Math.PI * 0.2]} />
          </group>
          <group ref={refMoon}>
            <Moon scale={[0.25, 0.25, 0.25]} />
          </group>
        </Suspense>

        <DeviceOrientationControls>
          <Stars />
        </DeviceOrientationControls>
      </Canvas>
    </MainAnimation>
  );
};

export default Main;
