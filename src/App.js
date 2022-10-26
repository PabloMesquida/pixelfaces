import React, { Suspense } from "react";
import About from "./components/about/About.js";
import Projects from "./components/projects/Projects.js";
import Footer from "./components/footer/Footer.js";
import Loader from "./components/Loader.js";
import { GlobalStyle } from "./GlobalStyles.js";
import { ThemeProvider } from "styled-components";
import { Theme } from "./Theme.js";
import { Container } from "./App.styles.js";

const Main = React.lazy(() => import("./components/main/Main.js"));

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Container>
        <Suspense fallback={<Loader />}>
          <Main />
          <About />
          <Projects />
          <Footer />
        </Suspense>
      </Container>
    </ThemeProvider>
  );
}
