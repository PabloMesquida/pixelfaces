import React from "react";
import Desktop from "./Desktop.js";
import { DeviceOrientationControls } from "@react-three/drei";

const PortalView = () => {
  return (
    <group position={[0, 0, 0]}>
      <Desktop />
    </group>
  );
};

export default PortalView;
