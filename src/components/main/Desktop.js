import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import Earth from "./Earth.js";
import Moon from "./Moon.js";

const Desktop = () => {
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
    <>
      <Stars count={1000} radius={20} />
      <ambientLight intensity={5} />
      <Suspense>
        <group ref={refEarth}>
          <Earth rotation={[Math.PI * 1.1, 0, Math.PI * 0.2]} />
        </group>
        <group ref={refMoon}>
          <Moon scale={[0.25, 0.25, 0.25]} />
        </group>
      </Suspense>
    </>
  );
};

export default Desktop;
