import CruzadaLogo from "../assets/LOGO EN BLANCO SINFONDO.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="Fondo">
            <img src="" alt="" />

        </div>
      <div className="footer-logo">
        <img src={CruzadaLogo} alt="Cruzada Patagonica Logo" />
      </div>
      <div className="footer-info">
        <p>© 2024 Cruzada Patagonica. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
