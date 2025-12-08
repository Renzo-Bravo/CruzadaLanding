import separador from "../assets/guarpapampamediana.png"
import fediap from "../assets/fediap-logo.png"
import "./Info.css";

export default function Info() {
    return (
        <section className="info" id="eventContent">
            <img src={separador} alt="espaciador" className="separador"/>
            <img src={fediap} alt="" className="fediap" />
            <p>Las Jornadas Regionales de FEDIAP Destinado a docentes y técnicos de escuelas agrotécnicas de todo el país, durante tres días intensivos se realizarán actividades de exposición de experiencias, presentación de casos, disertaciones y networking.</p>
            <hr />
        </section>
    );
}
