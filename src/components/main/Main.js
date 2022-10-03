import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { DeviceOrientationControls, Stars } from "@react-three/drei";
import {
  EffectComposer,
  Pixelation,
  Vignette,
} from "@react-three/postprocessing";
import EarthSistem from "./EarthSistem.js";
import Lights from "./Lights.js";
import RandomEmoji from "./RandomEmoji.js";
import Loader from "../Loader.js";
import { MainAnimation, MainConteiner, H1, Txt } from "./Main.styles.js";

const Main = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const arrayEmojis = [
    "🙂",
    "​🧡",
    "🪐",
    "🔥",
    "👾",
    "​👽",
    "​✌️",
    "​🤘",
    "​✊",
    "​🌱",
    "​🌻",
    "​🍊",
    "​🍎",
    "​🍕",
    "​🥟",
    "​🍺",
    "​🍦",
    "​⭐",
    "​🌈",
    "​⚡",
    "​💡",
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  return (
    <MainAnimation>
      <Suspense fallback={<Loader />}>
        {isMobile && (
          <Canvas
            style={{ position: "fixed", zIndex: 0, top: 0 }}
            className="webgl"
            dpr={[1, 2]}
            camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
          >
            <DeviceOrientationControls />
            <Stars
              speed={0}
              depth={0}
              count={1000}
              saturation={50}
              factor={7}
            />
            <EffectComposer>
              <Vignette darkness={0.8} />
            </EffectComposer>
          </Canvas>
        )}
        <Canvas
          style={{ position: "relative", zIndex: 1 }}
          className="webgl"
          dpr={[1, 2]}
          camera={{ fov: 50, position: [0, 0, 10], near: 0.01, far: 1000 }}
        >
          <Lights />
          <EarthSistem isMobile={isMobile} />
          <EffectComposer>
            <Pixelation granularity={8} />
            <Vignette darkness={0.8} />
          </EffectComposer>
        </Canvas>
        <MainConteiner>
          <H1>Pixel Faces</H1>
          <Txt>
            <b>Hi, Welcome!</b>
          </Txt>
          <RandomEmoji arrayE={shuffleArray(arrayEmojis)} />
        </MainConteiner>
      </Suspense>
    </MainAnimation>
  );
};

export default Main;
