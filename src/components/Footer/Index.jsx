import { Link } from "react-router-dom";



export default function Footer() {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#1B1B1B",
        width: "100%",
        padding: '2rem',
        color: '#FAFAFA',

      }}
    >
      <Link style={{ textDecoration: 'none', color: '#FFF' }} to="/"><p className="text-center text-uppercase">Cami Studio</p></Link>

    </footer>
  );
}
