import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftTrucks = () => {
  return (
    <div>
      <Head>
        <title>Hidraulikus targoncák</title>
        <meta name="description" content="Gutman hidraulikus targoncák" />
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
              <Link href="/">
                <a className="has-text-grey">Kezdőlap</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling">
                <a className="has-text-grey">Anyagmozgatás</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/LiftTrucks">
                <a className="px-3 is-active">Targoncák</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Targoncák</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks/HandPalletTrucks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.11. Kézi hidraulikus targoncák
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.11.-Hand-pallet-trucks_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Szállítás, anyagmozgatás, raktározás területén a kézi
                        hidraulikus targoncák rövidtávú mozgatásoknál
                        nélkülözhetetlen segédeszközök. Könnyű kezelhetőségük és
                        szűk helyekre való alkalmasságuk révén széles körben
                        használhatóak.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks/TableLifters">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.12. Mobil emelőasztalok
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.12.-Table-lifters_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A mobil emelőasztal villás emelőszerkezetének
                        leeresztett állapotában a felhasználás helyszínére
                        gördíthető, majd a lábpedál működtetésével emeli ill.
                        kézi leeresztő karral süllyeszti a terhet a kívánt
                        magasságra.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/LiftTrucks/Stackers">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.13. Magasemelésű targoncák
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.13.-Manual-Stackers_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Kézi működtetésű magasemelésű targoncák standard raklap
                        villával és hidraulikából épülnek fel. A vonórúd le-fel
                        mozgatásával, vagy lábpedállal lehet a terhet a magasba
                        emelni, míg a kézi leeresztő karral süllyeszteni. Hátsó
                        kerekei befékezhetőek.
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

export default LiftTrucks;
