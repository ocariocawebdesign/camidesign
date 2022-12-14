import { DivProfile } from "./styles/styles";
import "./styles/styles.css";
//import CynthiaVideo1 from "../assets/videos/linix.mp4";
//import CynthiaVideo2 from "../assets/videos/salesforce.mp4";
//import CynthiaVideo3 from "../assets/videos/sequoia.mp4";
//import CynthiaVideo4 from "../assets/videos/swissport.mp4";
import App from "../components/Slider/Index";

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
              <div className="" style={{ marginTop: "-1rem" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#333"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                  opacity="0.6"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg>
              </div>
              <p>
                My job is to use creativity and artistic skills to develop
                animation projects for different platforms such as social
                networks and websites.
              </p>
            </DivProfile>

            <div className="mt-2">
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
          </div>

          <br />
        </div>
      </div>

      <div className="container mb-4">
        <div className="row">
          <App />
          {/*<div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls>
              <source src={CynthiaVideo1} type="video/mp4" />
            </video>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video
              width="280"
              height="240"
              controls
              style={{ marginRight: "12px" }}
            >
              <source src={CynthiaVideo2} type="video/mp4" />
            </video>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <video width="280" height="240" controls>
              <source src={CynthiaVideo3} type="video/mp4" />
            </video>
          </div>
          <div className="ccol-xs-12 col-sm-12 ol-md-3 col-lg-3">
            <video width="280" height="240" controls>
              <source src={CynthiaVideo4} type="video/mp4" />
            </video>
              </div>*/}
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
      </div>
    </>
  );
}
