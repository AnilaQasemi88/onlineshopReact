import CarouselComponent from "./Carousel";
import Footer from "../Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell as faBellAnimation } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <div className="banner">
        <h1>
          Große Wünsche? Kleine Raten!{" "}
          <FontAwesomeIcon icon={faBellAnimation} shake />
        </h1>
        <p>
          Erfülle deine Shopping-Wünsche jetzt bequem in 3 bis 48 Monatsraten
          <br />
          und genieße auch beim Bezahlen große Vielfalt.
        </p>
      </div>
      <div className="tile-wrapper">
        <h3>
          Warum du ein iPhone am besten <br />
          bei Apple kaufst.
        </h3>
        <p>
          Du kannst die richtige Zahlungsoption für dich wählen, mit der
          Inzahlungnahme weniger bezahlen, dein neues iPhone schnell einrichten
          lassen und jederzeit mit unseren Specialists chatten.
        </p>
      </div>
      <div className="flex-wrapper">
        <div>
          <img src="src/images/icon_delivery.png" />
          <h2>Schnelle Lieferung oder Abholung im Store</h2>
          <p>
            Wähle die kostenlose Lieferung oder hole vorrätige Artikel in einem
            Apple Store ab.
          </p>
          <a href="#">Weitere Infos</a>
        </div>
        <div>
          <img src="src/images/icon_financing.png" />

          <h2>Finanzierung</h2>
          <p>Monatliche Ratenzahlung verfügbar.</p>
          <a href="#">Weitere Infos</a>
        </div>
        <div>
          <img src="src/images/icon_personal_session.png" />

          <h2>Hilfe beim Einkauf</h2>
          <p>
            Hast du Fragen? Ruf einfach unsere Expert:innen unter 0800 2000 136
            an oder chatte mit ihnen online.
          </p>
          <a href="#">Kontakt</a>
        </div>
      </div>
      <Footer />
    </>
  );
}
