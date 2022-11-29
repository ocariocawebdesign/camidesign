//import MainMenu from "../MainMenu/Index";
import Logo from "../../assets/img/logo.png";
import "./styles.css";

export default function Header() {
  return (
    <>
      <header
        style={{ background: "#000000e4", padding: "1rem", height: "160px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6">
              <a href="#">
                <img className="logo" src={Logo} width="40" height="40" />
              </a>
              <h1 style={{ color: "#FAFAFA", fontWeight: "bolder", fontSize:'1.5em'}}>
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
                Motion Designer and Websites Frontend
              </small>
            </div>
            <div className="col-md-6 col-lg-6" style={{ padding: "3rem" }}>
              <div className="mainMenu">
                <nav>
                  <a href="#">about</a>
                  <a href="#">book</a>
                  <a href="#">portfolio</a>
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
        {/*<MainMenu />*/}
      </header>
    </>
  );
}
