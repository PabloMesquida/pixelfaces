import React from "react";

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.3} color={"#ff9600"} />
      <directionalLight
        position={[-5, 1, 2]}
        color={"#ff9600"}
        intensity={0.9}
      />
    </>
  );
};

export default Lights;
