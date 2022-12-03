import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "../src/components/Header/Index";
import Footer from "../src/components/Footer/Index";
import "animate.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HeroContent } from "./components/HeroContent/Index";
import { About } from "./components/About/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
