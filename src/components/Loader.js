import React from "react";
import { LoaderTxt, LoaderContainer } from "./Loader.styles.js";

const Loader = () => {
  return (
    <LoaderContainer>
      <LoaderTxt>
        <b>Loading.</b>
      </LoaderTxt>
    </LoaderContainer>
  );
};

export default Loader;
