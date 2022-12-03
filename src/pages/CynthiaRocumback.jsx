import { DivProfile } from "./styles/styles";
import "./styles/styles.css";

import CynthiaImg1 from "../assets/img/cynthia2.jpg";
import CynthiaImg2 from "../assets/img/cynthia3.jpg";
import CynthiaImg3 from "../assets/img/cynthia4.jpg";
import CynthiaImg4 from "../assets/img/cynthia5.jpg";

export function CynthiaRocumback() {
  return (
    <>
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <DivProfile>
              Cynthia Rocumback
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#757575",
                  lineHeight: "1.3",
                }}
              >
                I'm a Motion Designer and I live in Rio de Janeiro, Brazil.
                <br /> I'm in love with dogs
              </p>
              <p>
                My job is to use creativity and artistic skills to develop
                animation projects for different platforms such as social
                networks and websites.
              </p>
            </DivProfile>
          </div>
          <br />
          <div className="">
            <a
              href="https://api.whatsapp.com/send?phone=5521994127177&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20animações..."
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary-mod-02 text-button-size swing">
                Contact
              </button>
            </a>
          </div>

          <div className="col-md-2 col-lg-2"></div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CynthiaImg1} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CynthiaImg2} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CynthiaImg3} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CynthiaImg4} />
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
      </div>
    </>
  );
}
