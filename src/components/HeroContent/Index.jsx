import { HeroH1 } from "./styles";
//import Logo from "../../assets/img/logo.png";
import DesignerAvatar from "../../assets/img/cynthia.png";
import DesignerAvatar2 from "../../assets/img/carlos.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { About } from "../About/Index";
import LogoAnimation from "../../assets/videos/logo-animacao.mp4"
//import { Loader } from "../Loader";

export function HeroContent() {
  useEffect(() => {
    //Dados carregados, esconta o loader
  }, []); //empty array as second argument.

  return (
    <>
      <h1></h1>

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
            <HeroH1>
              <Link to="/cynthia-rocumback">
                motion designer
                <p>
                  <strong>Cynthia Rocumback</strong> <br />
                  <span style={{ color: "#979595" }}>
                    Product designer specialising in UI design and design
                    systems.
                  </span>
                </p>
              </Link>
            </HeroH1>

            <br />
            <img className="img-fluid" src={DesignerAvatar} />
          </div>

          <div
            style={{
              animation: "fadeIn",
              animationDuration: "2s",
              animateDelay: "8s",
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeIn"
          >
            <HeroH1>
              <video style={{}} autoPlay width="320" height="240">
                <source src={LogoAnimation} type="video/mp4" />
              </video>
              {/* <Link to="/news">
              
                <img className="camiLogo" style={{}} src={Logo} alt="" />
          </Link>*/}
            </HeroH1>
          </div>
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
                  <strong>Carlos Abreu</strong> <br />
                  <span style={{ color: "#979595" }}>
                    Front end developer who writes clean, elegant and efficient
                    code.
                  </span>
                </p>
              </Link>
            </HeroH1>
            <br />
            <img className="img-fluid" src={DesignerAvatar2} />
          </div>
        </div>
        <About />
      </div>
    </>
  );
}
