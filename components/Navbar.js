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

          <div className="navbar-item"></div>
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
                Kezd??lap
              </div>
            </Link>
          </div>

          <div className="navbar-item has-dropdown is-hoverable">
            <p className="navbar-link has-text-warning">Term??kkateg??ri??k</p>
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
                  <Link href="/LiftingEquipment">Emel??g??pek</Link>
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
                    Daruk, fut??macsk??k
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
                    Emel??berendez??sek
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
                    Emel??szerkezetek
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
                    Teherfelvev?? eszk??z??k
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
                  <Link href="/OperatorsDuty">Emel??g??p szakszolg??lat</Link>
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
                  <Link href="/MaterialHandling">Anyagmozgat??s</Link>
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
                  <Link href="/MaterialHandling/LiftTrucks">Targonc??k</Link>
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
                  <Link href="/Miscellaneous">Egy??b term??kek</Link>
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
                  <Link href="/Miscellaneous/Lashing">Rakom??nyr??gz??t??k</Link>
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
                    Kieg??sz??t?? felszerel??sek
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
                    Lees??s elleni v??delem
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
