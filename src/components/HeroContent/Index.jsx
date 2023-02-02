import { HeroH1 } from "./styles";
import DesignerAvatar from "../../assets/img/cynthia.png";
import DesignerAvatar2 from "../../assets/img/carlos.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { About } from "../About/Index";
import LogoAnimation from "../../assets/videos/logo-animacao.mp4";
import ButtonTranslator from "../ButtonTranslator/Index";

export function HeroContent() {
  const [dados, setDados] = useState({
    descriptionCynthiaPt:
      "Product designer specialising in UI design and design systems.",
  });

  function translate() {
    console.log("translate");
    alert("BEM VINDO A CAMI STUDIO");
    return (
      <>
        <p>{dados.descriptionCynthiaPt}</p>
      </>
    );
  }
  return (
    <>
      {/*<div className="float-end mt-4" style={{ marginRight: "2rem" }}>*/}
      <div>
        <ButtonTranslator id="button-br" event={translate} text="PT" />
        |
        <ButtonTranslator
          style={{}}
          id="buttton-en"
          event={translate}
          text="EN"
        />
      </div>
      {/*</div>*/}
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
                <p id="cynthiaDescription" style={{ color: "#979595" }}>
                  {/*} Product designer specialising in UI design and design
                    systems.*/}
                  {translate()}
                </p>
              </Link>
            </HeroH1>

            <br />
            <img
              className="img-fluid"
              src="https://threeeyes.online/cami/wp-content/uploads/2023/02/cynthia.png"
            />
          </div>
          {/*Secão Cynthia Final*/}

          {/*Secão Animação Logo*/}

          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <HeroH1>
              <video autoPlay muted width="320" height="240">
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
                  Front end developer who writes clean, elegant and efficient
                  code.
                </p>
              </Link>
            </HeroH1>
            <br />
            <img
              className="img-fluid"
              src="https://threeeyes.online/cami/wp-content/uploads/2023/02/carlos.png"
            />
          </div>
        </div>
        <About />
      </div>
    </>
  );
}
