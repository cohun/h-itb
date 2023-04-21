import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const VacuumLifter = () => {
  return (
    <div>
      <Head>
        <title>Gutman vakuumos emelők</title>
        <meta name="description" content="Gutman vakuumos emelők" />
        <link rel="icon" href="/favicon.ico" />
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
              <Link href="/LiftingEquipment" passHref>
                <div className="has-text-grey px-3">Emelőgépek</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/PoweredLiftingEquipment" passHref>
                <div className="has-text-grey px-3">Emelőberendezések</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter"
                passHref
              >
                <div className="tag is-info px-3 is-active">
                  Vákuumos emelők
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Vákuumos emelők</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TraversingVacuum">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.231. Vákuumemelő adapter
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.231.-Traversing-Vacuum-Lifting-device.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Ipari vákuumos emelő adapterek jellemzői: emelőgerendába
                        integrált vákuumtartály, vázra erősített vákuum
                        pumpa,szelep a szívás/eresztés működtetéséhez, biztosító
                        kapcsoló, visszacsapó szelep, mely megakadályozza a
                        teher eleresztését energiaellátási probléma esetén,
                        EN13155 szabvány szerint, szívó párnák helyzete a teher
                        méretének megfelelően állítható.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TubeVacuum">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.232. Tömlős vákuum emelő
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.232.-Tube-Vacuum-Lifter.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Tömlős vákuumos emelő használatakor nincs szükség külön
                        emelőműre. Elsősorban rakatképzési vagy alapanyag
                        adagolási munkáknál ajánljuk, olyan helyzetekben, ahol a
                        fárasztó fizikai munkát kell kiváltani. Ezen
                        emelőberendezések alkalmazásával, a teljesítmény
                        fokozása mellett minimálisra csökkenthetők a rossz
                        munkapozíció és a gyors munkatempó okozta foglalkozási
                        megbetegedések.
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

export default VacuumLifter;
