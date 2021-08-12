import React from "react";
import Header from "./components/Header";
import Section1 from "./components/Section";
import Section2 from "./components/SectionTwo"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
}

export default App;
