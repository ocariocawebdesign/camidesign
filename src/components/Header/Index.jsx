import Logo from "../../assets/img/logo.png";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header
        className="animate__animated animate__fadeIn"
        style={{ background: "#000000e4", padding: "1rem", height: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <a href="#">
                <img className="logo" src={Logo} width="40" height="40" />
              </a>
              <h1
                style={{
                  color: "#FAFAFA",
                  fontWeight: "bolder",
                  fontSize: "1.5em",
                }}
              >
                CAMI DESIGN
              </h1>

              <small
                style={{
                  color: "#FAFAFA",
                  fontWeight: "bolder",
                  fontSize: "0.8em",
                  marginLeft: "0",
                }}
              >
                Motion Designer and Frontend Websites
              </small>
            </div>
            <div className="col-md-6 col-lg-6" style={{ padding: "3rem" }}>
              <div className="mainMenu">
                <nav>
                  <Link to="/">Home</Link>
                  <Link to="/cynthia-rocumback">Cynthia Rocumback</Link>
                  <Link to="/carlos-abreu">Carlos Abreu</Link>
                  <a href="#">blog</a>
                  <a href="#">contact</a>
                  <a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Instagram</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
