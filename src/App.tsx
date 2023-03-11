import React from "react";
import { ThemeProvider } from "styled-components";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Money from "./components/Money/Money";
import Share from "./components/Share/Share";
import { GlobalStyleComponent } from "./styles/GlobalStyles";
import { GlobalFontComponent } from "./fonts/FontStyled";
import { theme } from "./styles/theme";
function App() {
  return (
    <>
       <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <About />
      <Share />
      <Money />
        <Footer />
        <GlobalStyleComponent />
        <GlobalFontComponent/>
      </ThemeProvider>
    </>
  );
}

export default App;
