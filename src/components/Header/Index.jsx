import React from "react";
import { useState } from "react";
import Logo from "../../assets/img/Logo_Cami_Studio.png";
import ButtonTranslator from "../ButtonTranslator/Index";
import "./styles.css";
import { Link } from "react-router-dom";
//import ContentBox from "../CotentBox";
//import Profile from "../Profile/Index";
import Description from "../Description";


export default function Header(props) {
  
  function translate() {

    addEventListener("click", () => {
     
      return(
        <>
         <Description/>

        </>
      )

    })

  }


  return (
    <>
      <header className="" style={{ background: "#000000e4", padding: "1rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <Link to="/">
                <img className="logo img-fluid" src={Logo} />
              </Link>
              <h1
                style={{
                  color: "#FAFAFA",
                  fontWeight: "bolder",
                  fontSize: "1.5em",
                }}
              ></h1>

              <small
                style={{
                  color: "#FAFAFA",
                  fontWeight: "bolder",
                  fontSize: "0.8em",
                  marginLeft: "0",
                }}
              ></small>
            </div>

            <div
              className="col-md-6 col-lg-6 mt-2"
              style={{ display: "flex", justifyContent: "right" }}
            >
              {/*<img style={{marginRight:'2px'}}  src={BRASIL} alt="" width="30" height="21" />
              <img style={{marginLeft:'2px', marginRight:'4px'}} src={EUA} alt="" width="30" height="21" />*/}
              {/*} <SamplePage/>*/}
              <div className="mainMenu">
                <nav>
                  {/*} <Link to="/">Home</Link>
                  <Link to="/cynthia-rocumback">Cynthia Rocumback</Link>
                  <Link style={{marginLeft:'2px'}} to="/carlos-abreu">Carlos Abreu</Link>
            */}
                  {/*<ButtonTranslator id="button-br" event={translate} text="PT" />
                  <ButtonTranslator id="buttton-en" event={translate} text="EN" />*/}
                 

                  {/*Aqui vai entrar o componente cmo os botões pt en*/}
                  {/*9<a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>-*/}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
