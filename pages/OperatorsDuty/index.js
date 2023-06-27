import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const OperatorsDuty = () => {
  return (
    <div>
      <Head>
        <title>Emelőgép vizsgálat</title>
        <meta name="description" content="Emelőgép vizsgálat" />
        <meta
          name="keywords"
          content="felülvizsgálat, időszakos felülvizsgálat, időszakos vizsgálat, szerkezeti vizsgálat, fővizsgálat, függeszték vizsgálat, emelőeszköz vizsgálat"
          lang="hu"
        />
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
          <p className="is-flex is-justify-content-center is-italic">
            Függesztékek és emelőeszközök időszakos felülvizsgálata
          </p>
          <section className="section">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <div className="content">
                    a 7/1999. (VIII. 4.) GM rendelet, az{" "}
                    <strong>Emelőgép Biztonsági Szabályzat</strong>, részletesen
                    szabályozza az emeléstechnikai eszközök tulajdonosának,
                    üzemeltetőjének feladatait és a használat módjait. Fentiek
                    szerint az emelőgép üzemeltetője köteles:
                    <ol type="1">
                      <li>az emelőgép, üzembehelyezéséről,</li>
                      <li>a teherfüggesztő eszközök használatba vételéről,</li>
                      <li>rendeltetésszerű használatáról,</li>
                      <li>biztonságos állapotának megőrzéséről,</li>
                      <li>az időszakos vizsgálatról és</li>
                      <li>
                        a karbantartás szakszerű és rendszeres elvégzéséről
                      </li>
                      gondoskodni.
                    </ol>
                    <p>Milyen vizsgálatokat különböztetünk meg?</p>
                    <ul>
                      <li>
                        Üzembe helyezést megelőző munkavédelmi szempontú
                        előzetes felülvizsgálat.
                      </li>
                      <li>Szerkezeti vizsgálat.</li>
                      <li>Fővizsgálat.</li>
                      <li>Időszakos biztonsági felülvizsgálat.</li>
                    </ul>
                  </div>
                </div>
                <div className="column">
                  <div className="content">
                    <p>
                      Emeléstechnikai eszközöket az alábbiak szerint
                      csoportosítjuk:
                      <ul>
                        <li>Emelőgép</li>- az a szakaszos üzemű gépi vagy kézi
                        (emberi erő) meghajtású szerkezet vagy berendezés, ami
                        közvetlenül vagy segédeszközzel terhet emelni vagy
                        süllyeszteni képes, azt a kiindulási helyzetéből az
                        érkezési helyére továbbítja.
                      </ul>
                      <ul>
                        <li>Teherfelvevő eszköz</li>- olyan alkatrész vagy
                        részegység, amely nem a gép része, hanem a gép és a
                        teher közé vagy a terhen helyezik el a teher
                        csatlakoztatása céljából
                      </ul>
                      <ul>
                        <li>Különálló emelő tartozék</li>- olyan szerkezeti
                        elemek, amelyek a teherfelvevő eszköz rögzítését
                        szolgálják, pl. horog, bilincs, gyűrű, csavar
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <h5 className="title has-text-centered is-size-5">
            Fenti feladatok elvégzésében nyújtunk segítséget az ETAR
            rendszerrel.
          </h5>
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

                <Image
                  width={1200}
                  height={1000}
                  src="/Inspection_D.jpg"
                  alt="ETARD"
                />
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
              Kérje ajánlatunkat, illetve további műszaki információért
              látogasson el a következő weboldalakra! <br /> <br />
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
