import CruzadaLogo from "../assets/LOGO SIN FONDO.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={CruzadaLogo} alt="Cruzada Patagonica Logo" />
      </div>

      <nav className="test">
        <ul className="test2">
          <li>Inicio</li>
          <li>Evento</li>
          <li>Disertantes</li>
          <li>Cronograma</li>
          <li>Inscripción</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
}
