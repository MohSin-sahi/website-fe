import React from "react";
import Clients from "./Components/home/Clients";
import Footer from "./Shared/Footer";
import Work from "./Components/home/Work";
import About from "./Components/home/About";
import Projects from "./Components/home/Projects";
import Navbar from "./Shared/Navbar";
import Header from "./Components/home/Header";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Work />
      <Clients />
      <Footer />
    </>
  );
};

export default App;
