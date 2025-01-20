import { HeroH1 } from "./styles";
import DesignerAvatar from "../../assets/img/cynthia.png";
import DesignerAvatar2 from "../../assets/img/carlos.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import LogoAnimation from "../../assets/videos/logo-animacao.mp4";

export function HeroContent() {
  const [textCynthia, setTextCynthia] = useState({
    pt: "Designer de produto especializado em design de interface do usuário e sistemas de design.",
    en: "Product designer specialising in UI design and design systems.",
  });

  const [textCarlos, setTextCarlos] = useState({
    pt: "Desenvolvedor front-end que escreve código limpo, elegante e eficiente.",
    en: "Front end developer who writes clean, elegant and efficient code.",
  });

  const [textAbout, setTextAbout] = useState({
    pt: "sobre nós",
    en: "about us",
  });

  const [textAboutDescription, setTextAboutDescription] = useState({
    pt: "Somos uma equipa dedicada ao desenvolvimento de animações e websites para empresas. Trabalhamos animações, sites institucionais, blogs buscando atender as necessidades de nossos clientes.",
    en: "We are a team dedicated to the development of animations and websites for companies. We work animations, institutional sites, blogs seeking to meet the needs of our customers.",
  });

  const [lang, setLang] = useState("pt");

  return (
    <>
      <div className="float-end mt-4" style={{ marginRight: "2rem" }}>
        <div className="mt-2" style={{ paddin: "0.5rem" }}>
          <button
            style={{ border: "none" }}
            className="btn btn-ligth btn-sm"
            onClick={() => setLang("pt")}
            disabled={lang === "pt"}
          >
            PT
          </button>
          |
          <button
            style={{ border: "none" }}
            className="btn btn-ligth btn-sm"
            onClick={() => setLang("en")}
            disabled={lang === "en"}
          >
            EN
          </button>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row">
          <div
            style={{
              animation: "fadeIn",
              animationDuration: "2s",
              animateDelay: "8s",
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeIn"
          >
            {/*Secão Cynthia*/}
            <HeroH1>
              <Link to="/cynthia-rocumback">
                motion designer
                <p>
                  <strong>Cynthia Rocumback</strong> <br />
                </p>
                <p style={{ color: "#979595" }}>{textCynthia?.[lang]}</p>
              </Link>
            </HeroH1>

            <br />
            <img
              className="img-fluid"
              src={DesignerAvatar}
              alt="Cynthia Rocumback - Motion Designer"
            />
          </div>
          {/*Secão Cynthia Final*/}

          {/*Secão Animação Logo*/}

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <HeroH1>
              <video
                autoPlay
                muted
                playsInline
                controls={false}
                width="320"
                height="240"
              >
                <source
                  style={{ opacity: "10" }}
                  src={LogoAnimation}
                  type="video/mp4"
                />
              </video>
              {/* <Link to="/news">
              
                <img className="camiLogo" style={{}} src={Logo} alt="" />
          </Link>*/}
            </HeroH1>
          </div>

          {/*Secão Animação Logo Final*/}

          {/*Secão Carlos Abreu*/}
          <div
            style={{
              animation: "fadeIn",
              animationDuration: "2s",
              animateDelay: "8s",
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeIn"
          >
            <HeroH1>
              <Link to="/carlos-abreu">
                frontend dev
                <p>
                  <strong>Carlos Abreu</strong>
                </p>
                <p style={{ color: "#979595" }}>
                  <p style={{ color: "#979595" }}>{textCarlos?.[lang]}</p>
                </p>
              </Link>
            </HeroH1>
            <br />
            <img
              className="img-fluid"
              src={DesignerAvatar2}
              alt="Carlos Abreu - Frontend Dev"
            />
          </div>
        </div>
        {/* <About />*/}
        <div className="container">
          <h1
            style={{
              fontSize: "5rem",
              color: "#333333",
              fontWeight: "bolder",
              textAlign: "center",
              lineHeight: "1.2",
              letterSpacing: "-0.06em",
            }}
          >
            {textAbout?.[lang]}
          </h1>

          <p
            style={{
              color: "#979595",
              fontSize: "15px",
              textAlign: "center",
              padding: "0.5rem",
              letterSpacing: "0.1em",
              fontWeight: "400",
            }}
          >
            {textAboutDescription?.[lang]}
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
