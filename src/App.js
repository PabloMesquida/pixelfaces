import React from "react";
import Main from "./components/main/Main.js";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";

export default function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </>
  );
}
