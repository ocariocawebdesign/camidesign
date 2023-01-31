import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import Header from "../src/components/Header/Index";
import Footer from "../src/components/Footer/Index";
import "animate.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HeroContent } from "./components/HeroContent/Index";
import { About } from "./components/About/Index";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <Helmet>
        <title>CAMI STUDIO</title>
        <meta
          name="CAMI STUDIO WEB DEVELOPMENT AND  MOTION DESIGN"
          content="We are a team dedicated to the development of animations and websites for companies. We work animations, institutional sites, blogs seeking to meet the needs of our customers."
        />
      </Helmet>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
