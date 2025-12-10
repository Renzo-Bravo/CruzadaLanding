import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import "./Agradecimientos.css";

export default function Accordion() {
  const [open, setOpen] = useState(false);

  return (
        <section className="agradecimientos" id="specialThanks">

            <div>
                <h2>Agradecimientos</h2>
            </div>

            <div className="menuDesplegable">
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />} Sponsors
                </button>

                {open && (
                    <div className="menu-content">
                        <ul>
                            <li>Sponsor 1</li>
                            <li>Sponsor 2</li>
                            <li>Sponsor 3</li>
                        </ul>
                    </div>
                    )
                }
            </div>

            <div className="menuDesplegable">
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />} Auspician
                </button>

                {open && (
                    <div className="menu-content">
                        <ul>
                            <li>Auspiciante 1</li>
                            <li>Auspiciante 2</li>
                            <li>Auspiciante 3</li>
                        </ul>
                    </div>
                    )
                }
            </div>

            <div className="menuDesplegable">
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />} Instituciones Aliadas
                </button>

                {open && (
                    <div className="menu-content">
                        <ul>
                            <li>Institución 1</li>
                            <li>Institución 2</li>
                            <li>Institución 3</li>
                        </ul>
                    </div>
                    )
                }
            </div>

            <div className="menuDesplegable">
                <button className="menu-btn" onClick={() => setOpen(!open)}>
                    {open ? <IoIosArrowUp /> : <IoIosArrowDown />} Testimonios
                </button>

                {open && (
                    <div className="menu-content">
                        <ul>
                            <li>Testimonio 1</li>
                            <li>Testimonio 2</li>
                            <li>Testimonio 3</li>
                        </ul>
                    </div>
                    )
                }
            </div>
        </section>
    );
}