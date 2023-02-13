import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#1B1B1B",
        width: "100%",
        height:'auto',
        padding: "2rem",
        color: "#FAFAFA",
        position: "relative",
        bottom: "0",
        left: "0",
      }}
    >
      <Link style={{ textDecoration: "none", color: "#FFF" }} to="/">
        <p className="text-center text-uppercase">Cami Studio</p>
      </Link>
    </footer>
  );
}
