import React from "react";
import { Number } from "./Numbers.styles.js";

const Numbers = ({ total, active }) => {
  let content = [];

  for (let i = 0; i < total; i++) {
    content.push(
      active === i ? (
        <Number key={i} className="active">
          {i + 1}
        </Number>
      ) : (
        <Number key={i}>{i + 1}</Number>
      )
    );
  }

  return <>{content}</>;
};

export default Numbers;
