import "./Empresas.css";

export default function Empresas() {
  return (
    <section className="empresas">
      <h2>Empresas</h2>
      <div className="container">
        <div className="tarjetas">
          <h3>Sponsor Agua</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing
            Posibilidad de promoción de acciones dentro de las Jornadas Fediap
            2026
          </p>
          <button className="precio">$3.500.000</button>
        </div>
        <div className="tarjetas">
          <h3>Sponsor Tierra</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing
          </p>
          <button className="precio">$2.500.000</button>
        </div>
        <div className="tarjetas">
          <h3>Sponsor Fuego</h3>
          <p>
            Proyección de logo durante el evento. Presencia del logo en redes
            sociales, en el newsletter institucional y en la landing
          </p>
          <button className="precio">$1.500.000</button>
        </div>
      </div>
    </section>
  );
}
