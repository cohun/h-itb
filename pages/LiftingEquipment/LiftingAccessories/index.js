import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman teherfelvevő eszközök</title>
        <meta name="description" content="Gutman teherfelvevő eszközök" />
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
                <div className="is-active px-3">Teherfelvevők</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Teherfelvevő eszközök
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/TextileSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.41. Textilkötelek, hevederek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/41.-Textile-slings-and-their-components_T.jpg"
                        alt="textil kötél"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A poliészterből készült kötelek, hevederek számos
                        előnyös tulajdonsággal rendelkeznek. Pl. könnyű, s
                        ezáltal jó vele dolgozni, puha tapintású és flexibilis,
                        kíméli az emelendő teher felületét, magas élettaramú,
                        hőálló 100°C-ig, fagyálló -40°C-ig, nedvesség felvétele
                        esetén nem veszit a terhelhetőségéből, messzemenően
                        ellenálló ásványi savak és az UV sugárzás ellenében,
                        kiváló szigetelő, mivel a poliészter anyag nem vezeti az
                        elektromos áramot, minden terhelhetőségi fokozatnak egy
                        színkód felel meg, ami maga a függeszték színe.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.42. Láncok és tartozékok
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/42.-Chain-slings-and-their-components_T.jpg"
                        alt="Láncok"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        G 80, vagy 8-as minőségű lánc törési feszültségi értéke
                        800 N/mm2, míg a G100 10-es minőség törési feszültségi
                        értéke 1000 N/mm2. A precíz metalurgiai és hőkezelési
                        technológiának köszönhetően a szakadási nyúlás minimum
                        20%. Ennek a kimagasló szakadási nyúlásértéknek a
                        biztonságos munkavégzés szempontjából rendkívül nagy a
                        jelentôsége. A teheremelő láncokat gyakran extrém
                        igénybevételek esetén alkalmazzák előszeretettel (magas
                        hômérséklet, aszimmetrikus terhelés, élek, sarkok,
                        rángatás...)
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.43. Acélsodrony kötelek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.43.-Steel-Wire-Rope,-Slings.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az acélsodronykötelek horganyzott, PVC bevonatos,
                        rozsdamentes és zsíros kivitelben készülnek az ipari
                        felhasználás minden területére. A sodronykötél és a
                        belőle készített teherfelvevő eszközök a legrégebben
                        használt emelőgépek egyike. Egyszerűsége és a
                        tömeggyártásból fakadó olcsósága hosszú időn keresztül a
                        legelterjedtebb emelőeszközzé tette.
                        Acélsodronykötélből, hagyományos kézi fülecseléssel
                        (fuxolással), illetve kötélvégpréseléssel készülnek
                        függesztékek.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.44. Lemezmegfogók</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.44.-Clamps.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Plate clamps are widely used, particularly in the steel
                        fabrication industry, for handling a variety of work
                        including individual pieces of plate, fabricated
                        assemblies and bundles of plates. Clamps are subdivided
                        into those used to lift the plate in the vertical
                        position only and those which lift from the horizontal
                        to the vertical or viceversa.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Magnets">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.45. Emelőmágnesek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.45.-Lifting-Magnets.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Magnets will only work on a magnetic material which
                        usually means a ferrous metal although some other
                        materials such as cobalt or nickel are capable of being
                        lifted magnetically. As there is no positive connection
                        between the lifting device and the load, the ability of
                        the magnetic lifter to safely lift a particular load
                        needs to be carefully considered.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Beams">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.46. Emelőgerendák</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.46.-Lifting-Beams.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Lifting beams, spreaders and frames are usually designed
                        either for a specifc purpose or as general purpose beams
                        for a specifed range of lifts. They are attached to the
                        load suspension point of a lifting machine or crane and
                        can therefore be considered to be portable.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/LiftingEyes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.47. Emelőszemek, seklik
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.47.-Lifting-Eyes,-Connecting-Links-_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Eyebolt and shackles for lifting purposes are one of the
                        most widely used items of lifting gear. They are
                        normally forged from various grades of steel, mostly
                        from higher tensile steel which gives them a higher
                        working load limit than those made in mild steel.
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

export default LiftingEquipment;
