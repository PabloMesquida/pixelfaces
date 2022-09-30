import React, { useRef, Suspense } from "react";

import { Stars } from "@react-three/drei";
import EarthSistem from "./EarthSistem";

const Desktop = () => {
  return (
    <>
      <EarthSistem />
      <Stars count={1000} radius={20} />
    </>
  );
};

export default Desktop;
