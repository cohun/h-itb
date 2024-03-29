import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Chains = () => {
  return (
    <div>
      <Head>
        <title>Gutman Láncok</title>
        <meta name="description" content="Gutman láncok" />
        <meta
          name="keywords"
          content="lánc függeszték, emelőlánc, alácsapó lánc, teherfelvevő lánc, nagyszilárdságú lánc, 10-es anyagminőség, 8-as anyagminőség, láncszerelvények"
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
              <Link href="/LiftingEquipment/LiftingAccessories/Chains" passHref>
                <div className="tag is-info px-3 is-active">Láncok</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Láncok és tartozékok
          </h3>
          <p>
            A nagyszilárdságú láncok (G 80 minőség: töresi feszültségi értéke
            800 N/mm2, mig a G 100 minőség törési feszültségi értéke 1000
            N/mm2.) A preciz metalurgiai és hőkezelési technológiának
            köszönhetően magas mechanikai/fizikai tulajdonságokkal rendelkezik,
            mely kiváló kopásállóságot biztosít és alacsony hőmérsékleten is
            (-40°C-ig) megörzi a teljes terhelhetőségét. További jellemzője a
            hosszú élettartam és minimum 20%-os szakadási nyúlás. Kompatibilis,
            komplex szerelvényprogrammal egyedi láncfüggesztékek állíthatóak
            össze, a felhasználói igények szerint.
          </p>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/ChainSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.421. Láncfüggesztékek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/421.-Chain-slings.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Láncfüggesztékek MSZ EN 1677 szerinti fémelemekből és
                        MSZ EN 818-2 szerinti láncból állnak. Rövidítő horoggal
                        szerelve az ág hossz külön állítható. Adattáblán, CE
                        jelöléssel.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/MasterLinks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.422. Gyűjtőkarikák, összekötők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.422.-master.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 1677 szerinti fémelemek, melyek jellemzően MSZ EN
                        818-4 szerinti függesztékek alkotóelemeiként kerülnek
                        alkalmazásra. CE-jelöléssel.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/LiftingHooks">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.423. Horgok</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.423.-hook.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 1677 szerinti fémelemek, melyek jellemzően MSZ EN
                        818-4 szerinti függesztékek alkotóelemeiként kerülnek
                        alkalmazásra. CE-jelöléssel.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Chains/LiftingChain">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.424. Emelőláncok</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.424. Chain.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        MSZ EN 818-2 szerinti teherláncok emelési feladatokhoz.
                        A lánc rugalmassága és nyúlási karakterisztikája alapján
                        alkalmas függesztékek gyártásához.
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

export default Chains;
