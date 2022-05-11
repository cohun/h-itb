import Link from "next/link";

const Footer = () => {
  const today = new Date();
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
                <Link href="/">Általános Szállítási Feltételek</Link>
              </li>
              <li>
                <Link href="/">Adatkezelési Szabályzat</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="content has-text-centered">
          <p>Copyright &copy; {today.getFullYear()} | H-ITB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
