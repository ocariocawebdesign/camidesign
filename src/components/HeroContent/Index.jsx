import { HeroH1 } from "./styles";
import Logo from "../../assets/img/logo.png";
import DesignerAvatar from "../../assets/img/cynthia.png";
import DesignerAvatar2 from "../../assets/img/carlos.png";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

export function HeroContent() {
  const [users, setUsers] = useState([{}]);
  const profile = [
    {
      name: "Cynthia Rockumback",
      description: "Motion Designer and Frontend Websites",
      imgProfile: "Foto",
    },
    [
      {
        name: "Carlos Abreu",
        description: "Motion Designer and Frontend Websites",
        imgProfile: "src/img/carlos",
      },
    ],
  ];

  useEffect(() => {
    setUsers(profile);
  }, []); //empty array as second argument.
  console.log(users[0].id);

  return (
    <>
      <h1></h1>
      <div className="container">
        <div className="row">
          <div
            style={{
              animation: "fadeInLeft",
              animationDuration: "2s",
              animateDelay: "8s",
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeInLeft"
          >
            <HeroH1>
              <Link to="/cynthia-rocumback">
                motion designer
                <p>
                  <strong></strong> <br />
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
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-4 animate__animated animate__rotateIn">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div
            style={{
              animation: "fadeInRight",
              animationDuration: "2s",
              animateDelay: "8s",
            }}
            className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeInRight"
          >
            <HeroH1>
              <Link to="/carlos-abreu">
                frontend dev
                <p>
                  <strong></strong> <br />
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
        <br />
        <hr />
        <br />
      </div>
    </>
  );
}
