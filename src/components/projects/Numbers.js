import React from "react";
import { Number } from "./Numbers.styles.js";

const Numbers = (props) => {
  let content = [];

  const selectActive = (i) => {
    props.onClick(i);
  };

  for (let i = 0; i < props.total; i++) {
    content.push(
      props.active === i ? (
        <Number key={i} className="active">
          {i + 1}
        </Number>
      ) : (
        <Number key={i} onClick={() => selectActive(i + 1)}>
          {i + 1}
        </Number>
      )
    );
  }

  return <>{content}</>;
};

export default Numbers;
