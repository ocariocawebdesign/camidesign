import { useState } from "react";
import Header from "../src/components/Header/Index";
import Footer from "../src/components/Footer/Index";
import "animate.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HeroContent } from "./components/HeroContent/Index";
import { About } from "./components/About/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <HeroContent />
      <About />
      <Footer />
    </>
  );
}

export default App;
