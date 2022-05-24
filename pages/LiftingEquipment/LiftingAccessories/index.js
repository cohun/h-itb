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
                        Lemezmegfogók az MSZ EN 13155 szabvány és a 2006/42/EK
                        gépirányelv előírásait betartva készülnek. Acél
                        lemeztáblák, idomacélok megfogására, emelésére, bizonyos
                        esetekben billentésére és szállítására használható,
                        amelynek felületi keménysége nem haladja meg a 37 HRC
                        értéket. Két fő típusuk a vizszintes, ill. függöleges
                        helyzetű lemezek kezelését teszi lehetővé. Függőleges
                        megfogókat lehet egyesével, míg a vizszintes megfogókat
                        csak párosával használni.
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
                        Kézi működtetésű permanens emelőmágnesek az MSZ EN 13155
                        szabványnak megfelelően készülnek. A kézi kar
                        átváltásával lehet ki- ill. bekapcsolni őket. Csak
                        mágnesezhető vas anyagok emelésére használhatóak és
                        mivel nincs alakzáró kapcsolat a teher és az emelő
                        között, nagyon fontos az emelés biztonságának
                        garantálása. Sík és hengeres felületek megfogására
                        egyaránt alkalmas az emelési táblázat szerint.
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
                        Emelőgerendák az MSZ EN 13155 szabvány szerint általános
                        használatra vagy specifikus feladatra készülnek. A teher
                        megfogási pontjai ill. súlypontja szerint kialakítva
                        jelentősen növeli az emelés biztonságát. Az állítható
                        kivitelű emelőgerendák segítségével asszimetrikus terhek
                        emelésekor fellépő billenést lehet minimálisra
                        csökkenteni. Szabvány szerint ez max. 6 fok lehet.
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
                        Emeléstechnikai emelő- és kapcsolószemek fontos
                        teherfelvevő eszközök melyek emelés, forgatás, billentés
                        és mozgatási feladatoknál biztosítják a teher
                        összeköttetését a megfelelő emelőgéppel. Mint
                        teherfelvevő eszköz CE megfelelőségi jelöléssel kell
                        ellátni őket és a szokásos biztonsági követelmények
                        vonatkoznak rájuk.
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
