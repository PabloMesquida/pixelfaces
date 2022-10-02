import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} color={"#ff9600"} />
      <directionalLight
        position={[-5, 1, 2]}
        color={"#ffcc00"}
        intensity={1.5}
      />
    </>
  );
};

export default Lights;
