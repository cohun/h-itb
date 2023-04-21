import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const ElectricHoist = () => {
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
                href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist"
                passHref
              >
                <div className="tag is-info px-3 is-active">
                  Elektromos emelők
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Elektromos emelők
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricChainHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.211. Elektromos láncos emelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.21.-Electric-hoists_T.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az elektromos láncos emelők jellemzően macskapályára
                        telepítve, gépi hajtású, általános célú emelési
                        feladatokhoz kerülnek alkalmazásra. Rendeltetésszerűen
                        terhek függőleges emelésére és süllyesztésére valamint
                        vízszintes mozgatására (haladóművel) használhatók.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricWireRopeHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.212. Villamos sodronyköteles emelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.212.ElectricWireRopeHoist.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A sodronyköteles futómacskák és emelődobok a
                        leggyakrabban bevetett emelő berendezések futódaruk
                        esetében. Kitűnik kompakt felépítésével, kis
                        helyigényével.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist/ElectricWinch">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.213. Elektromos csörlők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.213.ElectricWinches.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Sodronyköteles villamos meghajtású emelőgép, mely
                        tartószerkezethez rögzítve képes terhek emelésére, vagy
                        nagyobb emelőgép részeként alkalmas vízszintes és ferde
                        vontatásra is.
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

export default ElectricHoist;
