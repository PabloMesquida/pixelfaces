import React, { useRef, Suspense } from "react";

import { Stars, OrbitControls } from "@react-three/drei";

const Desktop = () => {
  return (
    <>
      <Stars count={1000} radius={20} />
    </>
  );
};

export default Desktop;
