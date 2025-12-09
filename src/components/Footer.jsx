import CruzadaLogo from "../assets/LOGO EN BLANCO SINFONDO.png";
import FondoFooter from "../assets/food-bank_56.png";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-head">
        <img src={FondoFooter} alt="Fondo Footer" />
      </div>
      <section className="footer-end">
        <div className="footer-logo">
          <img src={CruzadaLogo} alt="Cruzada Patagonica Logo" />
        </div>
        <div className="footer-info">
          <p>© 2024 Cruzada Patagonica. Todos los derechos reservados.</p>
        </div>
      </section>
    </footer>
  );
}
