import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const OperatorsDuty = () => {
  return (
    <div>
      <Head>
        <title>Emelőgép vizsgálat</title>
        <meta name="description" content="Emelőgép vizsgálat" />
      </Head>
      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul className="mx-5">
            <li>
              <Link href="/" passHref>
                <div className="has-text-grey px-3">Kezdőlap</div>
              </Link>
            </li>

            <li>
              <Link href="/OperatorsDuty" passHref>
                <div className="tag is-info px-3 is-active">
                  Emelőgép szakszolgálat
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Emelőgép szakszolgálat
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title pl-6">
                        B.1. ETAR app
                        <Image
                          className="pl-3"
                          width={110}
                          height={50}
                          src="/ETAR_250_125.jpg"
                          alt="ETAR"
                        />
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={85}
                        height={165}
                        src="/ETAR.webp"
                        alt="ETAR"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        ETAR applikáció Android rendszerű telefonokhoz
                        készített, emelőgép üzemeltetők számára előírt feladatok
                        ügyintézéséhez segítséget nyújtó szoftver. NFC chip-el
                        azonosított eszközök nyilvántartása, üzembehelyezése,
                        időszakos vizsgálata, karbantartása, javítása és az
                        ezekhez a műveletekhez tartozó bizonyítványok
                        elkészítése történik az ETAR segítségével.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-6-widescreen">
              <div className="card-image has-text-centered">
                <Image width={1201} height={600} src="/image.jpg" alt="ETAR" />
                <div className="">
                  <Image
                    width={1200}
                    height={950}
                    src="/inspection_D.jpg"
                    alt="ETARD"
                  />
                </div>
              </div>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title pl-6">
                        B.2. ETAR EN app
                        <Image
                          className="pl-3"
                          width={60}
                          height={50}
                          src="/ETAR_EN_250_250.jpg"
                          alt="ETAR"
                        />
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={85}
                        height={165}
                        src="/EtarEn.webp"
                        alt="ETAR EN"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az ETAR EN az ETAR applikációhoz készített kiegészítés
                        az emelőgép üzemviteli dokumentáció, valamint az
                        emelőgép napló szakszerű vezetéséhez. Az applikáción
                        keresztül az egyes emelőgépekhez különféle jogosultságú
                        munkatársakat lehet kijelölni az elvégzendő feladatok
                        dokumentálásához, bizonylatolásához.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>

          <article className="message is-info">
            <div className="message-header">
              <p>Info</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
              Az <strong>Emelőgép Biztonsági Szabályzat</strong>, mely a
              Munkavédelmi Törvény szélesebbkörű értelmezését adja, meghatározza
              az üzemeltetés módját. <br />
              Fentiek szerint az emelőgép üzemeltetője köteles:
              <br />
              <br />
              <div className="columns is-mobile is-centered">
                <div className="column is-10">
                  <div className="list">
                    <ul>
                      <div className="list-item">
                        <li>- az emelőgép üzembehelyezéséről</li>
                      </div>

                      <div className="list-item">
                        <li>
                          - a teherfüggesztő eszközök használatba vételéről
                        </li>
                      </div>

                      <div className="list-item">
                        <li>- rendeltetésszerű használatáról</li>
                      </div>

                      <div className="list-item">
                        <li>- időszakos vizsgálatáról</li>
                      </div>

                      <div className="list-item">
                        <li>- biztonságos állapotának megörzéséről</li>
                      </div>

                      <div className="list-item">
                        <li>
                          - a karbantartás szakszerű és rendszeres elvégzéséről
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              gondoskodni. <br />
              <br />
              További információért kérjük látogasson el a következő
              weboldalakra! <br /> <br />
              <article className="panel is-link">
                <Link href="https://emelogepvizsgalat.hu">
                  <a className="panel-block is-active">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    https://emelogepvizsgalat.hu
                  </a>
                </Link>
                <Link href="https://emelogepvizsgalat.blogspot.com">
                  <a className="panel-block">
                    <span className="panel-icon">
                      <i className="fas fa-book" aria-hidden="true"></i>
                    </span>
                    https://emelogepvizsgalat.blogspot.com
                  </a>
                </Link>
              </article>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default OperatorsDuty;
