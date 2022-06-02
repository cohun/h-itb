import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman emelőszerkezetek</title>
        <meta name="description" content="Gutman emelőszerkezetek" />
      </Head>
      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
            <li>
              <Link href="/">
                <a className="has-text-grey">Kezdőlap</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Emelőgépek</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/ManualLiftingEquipment">
                <a className="has-text-grey">Emelőszerkezetek</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Emelőszerkezetek
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment/ChainHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.31. Kézi láncos emelők, futómacskák
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.31.-Chain-hoists,-trolleys_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Kézi működtetésű láncos emelők, melyek a kezelő lánc
                        által emelnek, vagy süllyesztenek. Automata fékkel
                        vannak felszerelve, mely a terhet minden helyzetben
                        biztonságosan megtartja. Külön vagy egybeépített
                        futómacskával rendelhetőek.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment/LeverHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.32. Karos láncos emelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.32.-Lever-hoists_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Karos láncos emelők széles körben használatosak emelési,
                        vagy vonszolási feladatokra. Terhek rövidtávú
                        mozgatására a legkülönfélébb kezelői pozicióból kiválóan
                        alkalmas. A szabadonfutó kerék használatával a
                        terheletlen lánc gyorsan a kívánt méretre állítható.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment/Jacks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.33. Fogasléces emelők, olajemelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.33.-Racks-&-Jacks_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Ezek az emelőszerkezetek széleskörben használatosak,
                        ahol terhek rövidtávú mozgatására van szükség. Gyakran
                        további emelési feladatok előkészítéséhez alkalmazzák
                        őket. Sokoldalúságuk és szállíthatóságuk miatt gyakran
                        karbantartási műveleknél nélkülözhetetlenek.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment/PullingHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.34. Kötélvonszolók</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.34.-Pulling-hoists,-Lifting-Pulleys-&-Winches_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Kötélvonszolók emelési és vonszolási feladatkra kiválóan
                        alkalmasak. A kézi működtetésű kar segítségével fejt ki
                        húzóerőt a belefűzött kötélre, amely csatlakozik a
                        teherhez. Működési tartománya a kötél hosszának
                        függvénye.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment/PulleyWinches">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.35. Fordítócsigák, csörlők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.35.-Lifting-Pulleys-&-Winches_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Csörlők sokoldalúan használható emelő és vonszoló
                        szerkezetek. Kis helyigényük és a kezelő tehertől való
                        nagyobb távolsága miatt sokszor biztonságosabban
                        használható más emelőszerkezeteknél. Gyakran
                        fordítócsigák közbeiktatásával használják őket.
                        Többnyire drótkötéllel kerülnek alkalmazásra.
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
