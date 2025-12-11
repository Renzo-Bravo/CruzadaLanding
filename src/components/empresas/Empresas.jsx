import "./Empresas.css";

export default function Empresas() {
  return (
    <section className="empresas">
      <h2>Empresas</h2>
      <div className="container">
        <div className="tarjetas">
          <h3>Fuego</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing de La
            Noche Virtual de la Patagonia. Incluye 8 entradas
          </p>
          <button className="precio">$6.500.000</button>
        </div>
        <div className="tarjetas">
          <h3>Agua</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            redes sociales, en el newsletter institucional y en la landing de La
            Noche Virtual de la Patagonia. Incluye 6 entradas
          </p>
          <button className="precio">$5.000.000</button>
        </div>
        <div className="tarjetas">
          <h3>Tierra</h3>
          <p>
            Proyección de logo durante el evento. Aparición del logo en el
            próximo anuario institucional de la Fundación. Presencia del logo en
            landing de La Noche Virtual de la Patagonia. Incluye 4 entradas
          </p>
          <button className="precio">$4.000.000</button>
        </div>
      </div>
    </section>
  );
}
