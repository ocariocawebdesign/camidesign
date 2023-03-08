import { DivProfile } from "./styles/styles";
import "./styles/styles.css";
import React, { useState } from "react";
import App from "../components/Slider/Index";

export function CynthiaRocumback() {
  const [textCynthia, setTextCynthia] = useState({
    pt: "Eu sou uma Motion Designer,  moro no Rio de Janeiro, Brasil. Amo cachorros.",
    en: "I am a Motion Designer, I live in Rio de Janeiro, Brazil. I love dogs.",
  });

  const [textAboutDescription, setTextAboutDescription] = useState({
    pt: "Meu trabalho é utilizar criatividade e habilidades artísticas para desenvolver projetos de animação para diferentes plataformas, como redes sociais e websites.",
    en: "My job is to use creativity and artistic skills to develop animation projects for different platforms such as social networks and websites.",
  });

  const [lang, setLang] = useState("pt");
  return (
    <>
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
                {textCynthia[lang]}
              </p>
              <div className="" style={{ marginTop: "-1rem" }}>
                <a
                  href="https://www.linkedin.com/in/cynthia-rocumback/"
                  target="_blank"
                  alt="linkedin" title="Linkedin"
                >
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
                </a>
              </div>
              <p>{textAboutDescription[lang]}</p>
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
          <br />
        </div>
      </div>

      <div className="container mt-4 mb-4">
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
