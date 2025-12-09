import "./Speakers.css";

export default function Speakers() {
  const speakers = [
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
    {
      nombre: "Nombre y Apellido",
      charla: "Título de charla",
    },
  ];

  return (
    <section className="speakers-section">
      <h2 className="speakers-title">speakers</h2>

      <div className="speakers-grid">
        {speakers.map((d, index) => (
          <div key={index} className="speakers-card">
            <div className="foto-placeholder">
              <i className="fas fa-user-alt"></i>
            </div>

            <h3>{d.nombre}</h3>
            <p>{d.charla}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
