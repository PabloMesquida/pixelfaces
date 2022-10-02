import React from "react";
import Main from "./components/main/Main.js";
import About from "./components/about/About.js";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { Container } from "./App.styles.js";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Main />
        <About />
      </Container>
    </ThemeProvider>
  );
}
