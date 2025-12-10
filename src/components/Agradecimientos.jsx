import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./Agradecimientos.css";

export default function Accordion() {
  const [openSponsors, setOpenSponsors] = useState(false);
  const [openAuspician, setOpenAuspician] = useState(false);
  const [openInstituciones, setOpenInstituciones] = useState(false);
  const [openTestimonios, setOpenTestimonios] = useState(false);

  return (
    <section
      className="agradecimientos"
      id="specialThanks"
    >
      <div>
        <h2>Agradecimientos</h2>
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenSponsors(!openSponsors)}
        >
          {openSponsors ? <IoIosArrowUp /> : <IoIosArrowDown />} Sponsors
        </button>

        {openSponsors && (
          <div className="menu-content">
            <ul>
              <li>Sponsor 1</li>
              <li>Sponsor 2</li>
              <li>Sponsor 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenAuspician(!openAuspician)}
        >
          {openAuspician ? <IoIosArrowUp /> : <IoIosArrowDown />} Auspician
        </button>

        {openAuspician && (
          <div className="menu-content">
            <ul>
              <li>Auspiciante 1</li>
              <li>Auspiciante 2</li>
              <li>Auspiciante 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenInstituciones(!openInstituciones)}
        >
          {openInstituciones ? <IoIosArrowUp /> : <IoIosArrowDown />}{" "}
          Instituciones Aliadas
        </button>

        {openInstituciones && (
          <div className="menu-content">
            <ul>
              <li>Institución 1</li>
              <li>Institución 2</li>
              <li>Institución 3</li>
            </ul>
          </div>
        )}
      </div>

      <div className="menuDesplegable">
        <button
          className="menu-btn"
          onClick={() => setOpenTestimonios(!openTestimonios)}
        >
          {openTestimonios ? <IoIosArrowUp /> : <IoIosArrowDown />} Testimonios
        </button>

        {openTestimonios && (
          <div className="menu-content">
            <ul>
              <li>Testimonio 1</li>
              <li>Testimonio 2</li>
              <li>Testimonio 3</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
