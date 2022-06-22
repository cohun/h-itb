import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Disributors from "../components/Distributors";

export default function Home() {
  return (
    <div className="has-navbar-fixed-top">
      <Head>
        <title>Gutman emeléstechnikai termékek</title>

        <meta
          name="description"
          content="H-ITB emeléstechnikai termékek forgalmazásával foglalkozik. Emelőgépek, daruk, emelőberendezések
          emelőszerkezetek és klf. teherfelvevő eszközök szerepelnek kínálatunkban. Emelőgépek időszakos vizsgálatát az 
          ETAR rendszerben végezzük. Az anyagmozgatás és a rakományrögzítés területén is aktívak vagyunk."
          lang="hu"
        />
        <link
          rel="author"
          title="H-ITB Emeléstechnika"
          href="http://www.h-itb.hu"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <Link href="/" passHref>
                <div className="tag is-info px-3 is-active">Kezdőlap</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <section className="section is-hidden-mobile">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p>
                H-ITB Kft számos nemzetközi márka mellett, a GUTMAN LIFTING
                cégcsoport tagjaként forgalmazza a GUTMAN márkájú
                emeléstechnikai eszközöket. Termékpalettánk az egyszerű horgok,
                kézi emelők, teherfelvevő-, kötöző eszközöktől egészen a darukig
                terjed. A Gutman márkanév jól cseng emeléstechnikai körökben.
              </p>
            </div>
            <div className="column">
              <p>
                H-ITB Kft. 1990-ben alakult, azóta folyamatosan a piacvezető
                cégek között szerepel a magyarországi emeléstechnikai piac
                területén. Cégünk Romániában, Szlovákiában Szerbiában és
                Horvátországban rendelkezik leányvállalattal. Jelenleg
                cégcsoportunkat a legnagyobb emeléstechnikai cégek között
                tartják számon a régióban.
              </p>
            </div>
            <div className="column">
              <p>
                H-ITB Kft. területi képviselői a felhasználási herlyszíneken
                állnak partnereink rendelkezésére. Az Emelőgép Biztonsági
                Szabályzat előírásai szerint az üzemeltetői feladatok
                legmagasabb szintű elintézését biztosítjuk minden ügyfelünk
                részére az ingyenesen rendelkezésre bocsájtott ETAR rendszerrel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h3 className="title has-text-centered is-size-3">
            Termékkategóriák
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A. Emelőgépek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <figure className="image is-165x165">
                        <Image
                          width={165}
                          height={165}
                          src="/A.-Lifting-Equipment_T.jpg"
                          alt="emelőgép"
                        />
                      </figure>
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Emelőgép az a szakaszos üzemű, gépi vagy emberi erő
                        meghajtású szerkezet vagy berendezés, ami közvetlenül
                        vagy segédeszközzel terhet emelni vagy süllyeszteni
                        képes. Ide soroljuk az oldható teherfelvevő eszközöket,
                        amely nem a gép része, hanem a gép és a teher közé
                        helyezik el.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/OperatorsDuty">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        B. Emelőgép szakszolgálat
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/B.-Operators-Duty-Service_T.jpg"
                        alt="vizsgálat"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p className="">
                          Emelőgépekkel, továbbá teherfelvevő eszközökkel
                          végzett tevékenységek során felmerülő üzemeltetői
                          feladatok, kötelezettségek elvégzésében való
                          közreműködés a H-ITB szakszolgálat által.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C. Anyagmozgatás</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.-Material-Handling_T.jpg"
                        alt="anyagmozgatás"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az anyagmozgatás az összes mozgatással és tárolással
                        kapcsolatos tevékenységet integrálja, amelyek üzemi
                        környezetben a hatékony működés érdekében történik.
                        (rakodás, továbbítás, tárolás)
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D. Egyéb termékek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.-Miscellaneous_T.jpg"
                        alt="egyéb termék"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan eszközök, amelyek emelési, anyagmozgatási
                        feladatokhoz kapcsolódnak, de nem esnek ugyanazon
                        szabályozás, előírás hatálya alá.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Disributors />
    </div>
  );
}
