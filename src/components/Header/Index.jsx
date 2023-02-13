import React from "react";
import Logo from "../../assets/img/Logo_Cami_Studio.png";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
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
              <div className="mainMenu">
                <nav></nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
