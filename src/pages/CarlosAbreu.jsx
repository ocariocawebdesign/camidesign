import { DivProfile } from "./styles/styles";
import "./styles/styles.css";
import CarlosImg1 from "../assets/img/carlos5.jpg";
import CarlosImg2 from "../assets/img/carlos3.jpg";
import CarlosImg3 from "../assets/img/carlos4.jpg";
import CarlosImg4 from "../assets/img/carlos6.jpg";

export function CarlosAbreu() {
  return (
    <>
      <div className="container" style={{}}>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <DivProfile>
              Carlos Abreu
              <p
                style={{
                  fontSize: "1.2rem",
                  color: "#757575",
                  lineHeight: "1.3",
                }}
              >
                I'm a frontend developer and I live in Rio de Janeiro, Brazil.
                <br />I am a user of the Ubuntu linux distribution that I am
                passionate about.
              </p>
              <p>
                I work with the interactivity of websites using HTML, CSS and
                JavaScript. I use some frameworks and libraries like ReacJs,
                Gatsby and Bootstrap.
              </p>
            </DivProfile>
          </div>
          <div className="">
            <a
              href="https://api.whatsapp.com/send?phone=5521967530653&text=Ol%C3%A1!%20Quero%20informa%C3%A7%C3%B5es%20sobre%20Desenvolvimento%20de%20sites..."
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-primary-mod-02 text-button-size swing">
                Contact
              </button>
            </a>
          </div>
          
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CarlosImg1} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CarlosImg2} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CarlosImg3} />
          </div>
          <div className="col-md-3 col-lg-3">
            <img className="img-fluid img-thumbnail" src={CarlosImg4} />
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
      </div>
    </>
  );
}
