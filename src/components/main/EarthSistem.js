import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Earth from "./Earth.js";
import Moon from "./Moon.js";

const Sistem = ({ isMobile }) => {
  const refEarth = useRef();
  const refMoon = useRef();

  function Update() {
    useFrame(({ clock, pointer, camera }) => {
      refEarth.current.rotation.y -= -0.003;
      refEarth.current.rotation.z += -0.0001;

      let elapsed = clock.getElapsedTime();

      refMoon.current.position.x = Math.sin(elapsed * 0.1) * 2.5;
      refMoon.current.position.y = Math.abs(Math.cos(elapsed * 0.1));
      refMoon.current.position.z = Math.cos(elapsed * 0.1) * 2.5;
      refMoon.current.lookAt(refEarth.current.position);

      if (!isMobile) {
        const parallaxX = pointer.x * 1;
        const parallaxY = -pointer.y * 1;

        camera.position.x += (parallaxX - camera.position.x) * 0.2;
        camera.position.y += (parallaxY - camera.position.y) * 0.2;
      }
      camera.lookAt(0, -1.8, 0);
    });
  }
  return (
    <>
      <group ref={refEarth}>
        <Earth rotation={[Math.PI * 1.1, 0, Math.PI * 0.2]} />
      </group>
      <group ref={refMoon}>
        <Moon scale={[0.25, 0.25, 0.25]} />
      </group>
      <Update />
      {!isMobile && (
        <Stars
          speed={0}
          depth={0}
          count={1800}
          saturation={50}
          radius={50}
          factor={5}
        />
      )}
    </>
  );
};

export default Sistem;
