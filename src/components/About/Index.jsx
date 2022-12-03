import { AboutH1 } from "./styles";
import { HeroH1 } from "../HeroContent/styles";
//import LogoSreo from "../../assets/img/logoSREO.png";
//import LogoOndas from "../../assets/img/logoOndas.png";
//import LogoFabiola from "../../assets/img/fabiolaLogo.png";
import Linix from "../../assets/videos/linix.mp4";

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
      <hr style={{}} />
      <br />

      <div className="row">
        <AboutH1
          className="animate__animated animate__fadeInLeft"
          style={{
            width: "100%",
            background: "#FFF",
            textAlign: "center",
            fontSize: "6.2rem",
            color: "#333",
            borderRadius: "3px",
            padding: "1rem",
            animation: "fadeInLeft",
            animationDuration: "2s",
            animateDelay: "10s",
          }}
        >
          some clients
          <br />
        </AboutH1>
        <div className="col-md-3 col-lg-3 mb-4">
          <HeroH1
            style={{
              marginTop: "2rem",
              height: "220px",
              //padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <div className="" style={{ marginLeft: "2rem", margin: "0 auto" }}>
              <video src={Linix} controls width="250"></video>
            </div>
            {/*<img
              src={LogoSreo}
              className="img-fluid"
              style={{ margin: "0 auto" }}
          />*/}
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
              //padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <div className="" style={{ marginLeft: "2rem", margin: "0 auto" }}>
              <video src={Linix} controls width="250"></video>
            </div>
            {/*<img
              src={LogoOndas}
              className="img-fluid"
              style={{ margin: "0 auto" }}
          />*/}
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
              //padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <div className="" style={{ marginLeft: "2rem", margin: "0 auto" }}>
              <video src={Linix} controls width="250"></video>
            </div>
            {/*<img
              src={LogoFabiola}
              className="img-fluid"
              width="380"
              style={{ margin: "0 auto" }}
          />*/}
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
              // padding: "1rem",
              margin: "0 auto",
              border: "none",
            }}
          >
            <div className="" style={{ marginLeft: "2rem", margin: "0 auto" }}>
              <video src={Linix} controls width="250"></video>
            </div>
            <p>
              <strong></strong>
              <span style={{ color: "#979595" }}></span>
            </p>
          </HeroH1>
        </div>
      </div>
      <Profiles />
    </div>
  );
}
