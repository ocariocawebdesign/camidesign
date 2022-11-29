import { AboutH1 } from "./styles";
import { HeroH1 } from "../HeroContent/styles";
import LogoSreo from "../../assets/img/logoSREO.png";
import LogoOndas from "../../assets/img/logoOndas.png";
import LogoFabiola from "../../assets/img/fabiolaLogo.png";

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

      <div className="row">
        <AboutH1 className="animate__animated animate__fadeInLeft"
          style={{
            width: "100%",
            background: "#333",
            textAlign: "left",
            fontSize: "4.2em",
            color: "#FAFAFA",
            borderRadius: "3px",
            padding: "1rem",
            animation:'fadeInLeft',
            animationDuration: '15s',
            animateDelay: '10s'

            
          }}
        >
          some clients />
        </AboutH1>
        <div className="col-md-3 col-lg-3 mb-4">
          <HeroH1
            style={{
              marginTop: "2rem",
              height: "220px",
              padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <img
              src={LogoSreo}
              className="img-fluid"
              style={{ margin: "0 auto" }}
            />
            <p>
              <strong></strong>
              <span style={{ color: "#979595" }}></span>
            </p>
          </HeroH1>
        </div>

        <div className="col-md-3 col-lg-3 mb-4">
          <HeroH1
            style={{
              marginTop: "2rem",
              height: "220px",
              padding: "1.5rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <img
              src={LogoOndas}
              className="img-fluid"
              style={{ margin: "0 auto" }}
            />
            <p>
              <strong></strong>
              <span style={{ color: "#979595" }}></span>
            </p>
          </HeroH1>
        </div>
        <div className="col-md-3 col-lg-3 mb-4">
          <HeroH1
            style={{
              marginTop: "2rem",
              height: "220px",
              padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <img
              src={LogoFabiola}
              className="img-fluid"
              width="380"
              style={{ margin: "0 auto" }}
            />
            <p>
              <strong></strong>
              <span style={{ color: "#979595" }}></span>
            </p>
          </HeroH1>
        </div>
        <div className="col-md-3 col-lg-3 mb-4">
          <HeroH1
            style={{
              marginTop: "2rem",
              height: "220px",
              padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <img src={LogoSreo} className="img-fluid" />
            <p>
              <strong></strong>
              <span style={{ color: "#979595" }}></span>
            </p>
          </HeroH1>
        </div>
      </div>
    </div>
  );
}
