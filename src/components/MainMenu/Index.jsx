//import { MenuPrincipal } from "./styles";
import "./styles.css";

export default function MainMenu() {
  return (
    <div style={{ display: "flex", justifyContent: "right" }}>
      <div className="row">
        <div className="col-md-12 col-lg-12">
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
  );
}
