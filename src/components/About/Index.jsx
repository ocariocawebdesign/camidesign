import { AboutH1 } from "./styles";
//import { HeroH1 } from "../HeroContent/styles";
//import LogoSreo from "../../assets/img/logoSREO.png";
//import LogoOndas from "../../assets/img/logoOndas.png";
//import LogoFabiola from "../../assets/img/fabiolaLogo.png";
//import Linix from "../../assets/videos/linix.mp4";

export function About() {
  return (
    <div className="container"> 
      <AboutH1>
        about us
        <p style={{ color: "#979595" }}>
          We are a team dedicated to the development of animations and websites
          for companies. We work animations, institutional sites, blogs seeking
          to meet the needs of our customers.{" "}
        </p>
      </AboutH1>
      <br />
    </div>
  );
}
