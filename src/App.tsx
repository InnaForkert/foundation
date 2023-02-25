import React from "react";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Money from "./components/Money/Money";
import Share from "./components/Share/Share";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Share />
      <Money />
      <Footer />
    </>
  );
}

export default App;
