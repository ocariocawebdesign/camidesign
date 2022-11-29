import { HeroH1 } from "./styles";
import Logo from "../../assets/img/logo.png";
import DesignerAvatar from "../../assets/img/cynthia.png";
import DesignerAvatar2 from "../../assets/img/carlos.png";
//import VsCode from "../../assets/img/vscode.png";
import "animate.css";

export function HeroContent() {
  return (
    <>
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
              motion designer
              <p>
                <strong>Cynthia Rocumback</strong> <br />
                <span style={{ color: "#979595" }}>
                  Product designer specialising in UI design and design systems.
                </span>
              </p>
            </HeroH1>
            <br />
            <img className="img-fluid" src={DesignerAvatar} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 mt-4 animate__animated animate__rotateIn">
            <img className="img-fluid" src={Logo} alt="" />
          </div>
          <div  style={{
              animation: "fadeInRight",
              animationDuration: "2s",
              animateDelay: "8s",
            }} className="col-xs-12 col-sm-12 col-md-4 col-lg-4 animate__animated animate__fadeInRight">
            <HeroH1>
              frontend dev
              <p>
                <strong>Carlos Anbreu</strong> <br />
                <span style={{ color: "#979595" }}>
                  Front end developer who writes clean, elegant and efficient
                  code.
                </span>
              </p>
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
