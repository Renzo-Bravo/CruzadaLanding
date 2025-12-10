import { useState } from "react";
import "./atest.css"

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
    <div className="accordion">
      <button className="accordion-btn" onClick={() => setOpen(!open)}>
        {open ? "▲ Ocultar" : "▼ Mostrar"} Información
      </button>

      {open && (
        <div className="accordion-content">
          <p>
            Este es el contenido desplegable. Podés poner texto, imágenes,
            listas o lo que quieras.
          </p>
        </div>
      )}
    </div>
  );
}
