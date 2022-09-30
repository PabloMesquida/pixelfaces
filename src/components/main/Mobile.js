import React from "react";
import { DeviceOrientationControls, Stars } from "@react-three/drei";

const Mobile = () => {
  return (
    <>
      <DeviceOrientationControls />
      <Stars />
    </>
  );
};

export default Mobile;
