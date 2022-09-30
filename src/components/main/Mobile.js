import React, { useRef, useMemo } from "react";
import * as THREE from "three";
import { useFrame, createPortal } from "@react-three/fiber";
import {
  PerspectiveCamera,
  Plane,
  DeviceOrientationControls,
} from "@react-three/drei";
import Desktop from "./Desktop.js";
import PortalView from "./PortalView.js";

const Mobile = () => {
  function PlanePortal() {
    const cam = useRef();
    const planeRef = useRef();

    const { near, scene, target, portalHalfWidth, portalHalfHeight } =
      useMemo(() => {
        const target = new THREE.WebGLRenderTarget(1024, 1024);
        const scene = new THREE.Scene();

        scene.background = new THREE.Color("black");

        const near = 0.1;
        //const portalHalfWidth = 1 / 2;
        const portalHalfWidth = 0.3;
        const portalHalfHeight = 1 / 2;

        return { near, scene, target, portalHalfWidth, portalHalfHeight };
      }, []);

    useFrame((state) => {
      cam.current.position.copy(state.camera.position);
      cam.current.quaternion.copy(planeRef.current.quaternion);

      const portalPosition = new THREE.Vector3().copy(
        planeRef.current.position
      );

      cam.current.updateMatrixWorld();
      cam.current.worldToLocal(portalPosition);

      const left = portalPosition.x - portalHalfWidth;
      const right = portalPosition.x + portalHalfWidth;
      const top = portalPosition.y + portalHalfHeight;
      const bottom = portalPosition.y - portalHalfHeight;

      const distance = Math.abs(portalPosition.z);
      const scale = 0.1;
      // const scale = near / distance;

      // console.log(near, distance);

      const scaledLeft = left * scale;
      const scaledRight = right * scale;
      const scaledTop = top * scale;
      const scaledBottom = bottom * scale;

      cam.current.projectionMatrix.makePerspective(
        scaledLeft,
        scaledRight,
        scaledTop,
        scaledBottom,
        near,
        1000
      );

      state.gl.render(scene, cam.current);
    }, 1);

    return (
      <>
        <PerspectiveCamera ref={cam} />

        {createPortal(<Desktop />, scene)}
        <Plane ref={planeRef}>
          <meshStandardMaterial attach="material" map={target.texture} />
        </Plane>
      </>
    );
  }

  return <PlanePortal />;
};

export default Mobile;
