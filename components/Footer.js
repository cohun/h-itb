import Link from "next/link";
import { useState } from "react";
import Aszf from "./Aszf";
import Asz from "./Asz";

const Footer = () => {
  const today = new Date();
  const [isActive, setIsActive] = useState("");
  const [isAsz, setIsAsz] = useState(0);
  const handleAszf = (e) => {
    setIsActive(isActive === "" ? "is-active" : "");
    setIsAsz(1);
  };
  const handleAsz = (e) => {
    setIsActive(isActive === "" ? "is-active" : "");
    setIsAsz(0);
  };
  return (
    <footer className="footer nav">
      <div className="container has-text-warning">
        <div className="columns">
          <div className="column">
            <h5 className="title is-5 has-text-light">Elérhetőségünk:</h5>
            <address>
              <strong className="has-text-warning">H-ITB Kft.</strong>
              <br />
              1119 Budapest <br />
              Kelenvölgyi határsor 5 <br />
              <Link href="tel:+36 1 2056208">Tel: +36 1 2056208</Link> <br />
              <Link href="mailto:hitb@h-itb.hu">email: hitb@h-itb.hu</Link>
            </address>
          </div>

          <div className="column">
            <h5 className="title is-5 has-text-light">Információk:</h5>
            <ul>
              <li>
                <button className="button mb-2" onClick={handleAszf}>
                  Általános Szállítási Feltételek
                </button>
              </li>
              <li>
                <button className="button mb-2" onClick={handleAsz}>
                  Adatkezelési Szabályzat
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>Copyright &copy; {today.getFullYear()} | H-ITB</p>
        </div>
      </div>
      {isAsz === 0 ? (
        <Asz isActive={isActive} setIsActive={setIsActive} />
      ) : (
        <Aszf isActive={isActive} setIsActive={setIsActive} />
      )}
    </footer>
  );
};

export default Footer;
