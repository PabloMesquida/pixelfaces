import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDrag } from "@use-gesture/react";
import { Slider, NumbersContainer } from "./Cards.styles.js";
import Card from "./Card.js";
import Numbers from "./Numbers.js";
import data from "../../data/data.json";
import "./cardStyles.css";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let THRESHOLD = 600;

isMobile ? (THRESHOLD = 250) : (THRESHOLD = 600);

let cardWidth = 700;

function Cards() {
  const [animating, setAnimating] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [{ x }, set] = useSpring(() => ({
    x: [0, 1],
  }));

  const animateNextSlide = (direction) => {
    setAnimating(true);
    const value = direction === "left" ? 1 : -1;
    setActiveItem(activeItem + value);
    setTimeout(() => {
      setAnimating(false);
    }, 600);
  };

  const bind = useDrag(({ movement: [mx] }) => {
    if (animating) return;

    let moveX = (mx / window.innerHeight) * 2000;
    let scale = 1 - Math.abs(moveX) * 0.0005;

    if (moveX > 0 && activeItem === 0) return;
    if (moveX < 0 && activeItem === data.length - 1) return;

    cardWidth = document.getElementById("1");

    if (moveX < -THRESHOLD) {
      moveX = -cardWidth.offsetWidth * 1;
      scale = 1;
      animateNextSlide("left");
    } else if (moveX > THRESHOLD) {
      moveX = cardWidth.offsetWidth * 1;
      scale = 1;
      animateNextSlide("right");
    }

    moveX = moveX - cardWidth.offsetWidth * 1 * activeItem;

    set({ x: [moveX, scale] });
  });

  return (
    <>
      <Slider {...bind()}>
        {data.map((data) => (
          <animated.div
            id={data.id}
            key={data.id}
            className="slider-item"
            style={{
              transform: x.to(
                (value, scale) =>
                  `translate3d(${value}px, 0px, 0px) scale(${scale})`
              ),
            }}
          >
            <Card data={data} key={data.id} id={data.id} />
          </animated.div>
        ))}
      </Slider>
      <NumbersContainer total={data.length}>
        <Numbers total={data.length} active={activeItem} />
      </NumbersContainer>
    </>
  );
}

export default Cards;
