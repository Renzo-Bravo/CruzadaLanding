import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="titulos">
        <h1>
          VII Jornadas Regionales De FEDIAP CoFormación Docente de Escuelas
          Agrotécnicas
        </h1>
        <h2 className="hero-info">
          Educación agrotécnica y sustentabilidad: energías renovables y
          pedagogía en escuelas rurales
        </h2>
        <h2 className="fecha">30 y 31 de Marzo / 1 de Abril - 2026</h2>
        <h2 className="hero-info">CEI SAN IGNACIO, Junín de los Andes, Neuquén</h2>
        <button className="inscripcion-btn">Incribíte Ahora</button>
      </div>
    </section>
  );
}
