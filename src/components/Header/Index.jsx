import Logo from "../../assets/img/Logo_Cami_Studio.png";
import BRASIL from "../../assets/img/brasilBandeira.png";
import EUA from "../../assets/img/euaBandeira.png";
import SamplePage from "../Translate/Index";

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
           
            <div className="col-md-6 col-lg-6 mt-2" style={{display:'flex', justifyContent:'right'}}>
          
              <img style={{marginRight:'2px'}}  src={BRASIL} alt="" width="30" height="21" />
              <img style={{marginLeft:'2px', marginRight:'4px'}} src={EUA} alt="" width="30" height="21" />
              <SamplePage/>
              <div className="mainMenu">
                <nav>
                  {/*<Link to="/">Home</Link>*
                  <Link to="/cynthia-rocumback">Cynthia Rocumback</Link>
                  <Link to="/carlos-abreu">Carlos Abreu</Link>
              <Link to="/news">News</Link>*/}

                  {/*9<a href="#">Twitter</a>
                  <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>-*/}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
