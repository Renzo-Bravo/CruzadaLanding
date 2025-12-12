import separadorEnt from "@/assets/design/Guardapampaentera.png"
import separadorMed from "@/assets/design/guarpapampamediana.png"  
import fediap from "@/assets/fediap/fediap-logo.png"
import "./Info.css";

export default function Info() {
    return (
        <section className="info" id="eventContent">
            <img src={separadorEnt} alt="Espaciador" className="separadorEnt"/>
            <img src={separadorMed} alt="Espaciador" className="separadorMed" />
            <img src={fediap} alt="Fedial" className="fediap" />
            <p>Las Jornadas Regionales de FEDIAP Destinado a docentes y técnicos de escuelas agrotécnicas de todo el país, durante tres días intensivos se realizarán actividades de exposición de experiencias, presentación de casos, disertaciones y networking.</p>
            <hr />
        </section>
    );
}
