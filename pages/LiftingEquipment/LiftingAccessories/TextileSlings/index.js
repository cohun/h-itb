import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const TextileSlings = () => {
  return (
    <div>
      <Head>
        <title>Gutman textil kötelek</title>
        <meta name="description" content="Gutman textil kötelek" />
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
                <div className="has-text-grey px-3">Kezdőlap</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment" passHref>
                <div className="has-text-grey px-3">Emelőgépek</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/LiftingAccessories" passHref>
                <div className="has-text-grey px-3">Teherfelvevők</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/TextileSlings"
                passHref
              >
                <div className="is-active px-3">Textil kötelek</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Textil kötelek, hevederek
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/RoundSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.411. Körkötelek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/411.-Round-slings_T.jpg"
                        alt="körkötelek"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 1492-2:2000+A1:2009 szerinti kör keresztmetszetű,
                        mesterséges szálból készült végtelenített kötél
                        általános célú emelési műveletekhez.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/WebbingSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.412. Emelőhevederek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/412.-Flat-woven-webbing-sling_T.jpg"
                        alt="hevederek"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 1492-1:2000+A1:2009 szerinti lapos, szőtt,
                        mesterséges szálból készült szövethevederek általános
                        használatra
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/BridleSling">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.413. Poliészter függesztékek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/413.-Textile-Bridle-Slings_T.jpg"
                        alt="függesztékek"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 1492-2:2000+A1:2009 szerinti kör keresztmetszetű,
                        mesterséges szálból készült végtelenített kötél,
                        valamint MSZ EN 1677:2000+A1:2009 szabványsorozat
                        függesztékek alkatrészei elemekből készített 1-, 2-, 3-,
                        4-ágú PES függesztékek általános célú emelési
                        műveletekhez.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings/FibreRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.414. Sodrott és fonatolt kötelek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/414.-Fibre-ropes_T.jpg"
                        alt="sodrott kötél"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A hagyományos kender köteleken kívül különféle
                        szintetikus alapanyagból készülnek sodrott vagy fonatolt
                        kötelek. A sodrott kötelek pászmákból, a pászmák elemi
                        szálakból épülnek fel. A fonatolt (vagy körszövött)
                        kötelek szerkezetileg két részből épülnek fel: a
                        teherviselő bél és a külső, szövött borítás.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TextileSlings;
