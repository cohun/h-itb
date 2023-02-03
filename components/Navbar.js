import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Search from "./Search";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const clickHandler = (e) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <nav className="navbar has-shadow is-fixed-top nav">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item" passHref>
          <div className="ml-3 mt-2 mb-1">
            <Image
              width={100}
              height={40}
              src="/H-ITBLogo.jpg"
              alt="site logo"
            />
          </div>
        </Link>

        <a
          role="button"
          className="navbar-burger has-text-white"
          aria-label="menu"
          aria-expanded="false"
          onClick={(e) => {
            clickHandler(e);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        className={`navbar-menu ${active ? "is-active" : ""}`}
        id="nav-links"
      >
        <div className="navbar-end container">
          <div className="navbar-menu"></div>

          <Link href="/" passHref className="container is-primary">
            <div className="navbar-item">
              <Search setActive={setActive} />
            </div>
          </Link>

          <div className="navbar-item has-text-danger">
            <Link href="/JobPosting">Álláshirdetés</Link>
          </div>
          <div className="navbar-item"></div>
          <div className="navbar-item"></div>
        </div>

        <div className="navbar-end">
          <div
            role="button"
            className="navbar-item has-text-white"
            onClick={(e) => {
              if (active) {
                clickHandler(e);
              }
            }}
          >
            <Link href="/" className="navbar-item" passHref>
              <div
                className={`${active ? "has-text-black" : "has-text-white"}`}
              >
                Kezdőlap
              </div>
            </Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link has-text-warning">Termékkategóriák</p>
            <div className="navbar-dropdown">
              <div className="navbar-item has-text-weight-semibold">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/LiftingEquipment">Emelőgépek</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/LiftingEquipment/CraneAndTrolley">
                    Daruk, futómacskák
                  </Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                    Emelőberendezések
                  </Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/LiftingEquipment/ManualLiftingEquipment">
                    Emelőszerkezetek
                  </Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link
                    href="/LiftingEquipment/LiftingAccessories"
                    className="navbar-item ml-3"
                  >
                    Teherfelvevő eszközök
                  </Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/OperatorsDuty">Emelőgép szakszolgálat</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/OperatorsDuty">ETAR</Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/OperatorsDuty">ETAR EN</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/MaterialHandling">Anyagmozgatás</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/MaterialHandling/LiftTrucks">Targoncák</Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/MaterialHandling/Attachments">Adapterek</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item has-text-weight-semibold">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/Miscellaneous">Egyéb termékek</Link>
                </div>
              </div>
              <hr className="navbar-divider" />
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/Miscellaneous/Lashing">Rakományrögzítők</Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/Miscellaneous/ShopEquipment">
                    Kiegészítő felszerelések
                  </Link>
                </div>
              </div>
              <div className="navbar-item ml-3">
                <div
                  role="button"
                  onClick={(e) => {
                    if (active) {
                      clickHandler(e);
                    }
                  }}
                >
                  <Link href="/Miscellaneous/FallProtection">
                    Leesés elleni védelem
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link href="http://gutmanlifting.eu" passHref>
            <div className="navbar-item has-text-white">English</div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
