import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Daruk, macskák</title>
        <meta name="description" content="Daruk, macskák" />
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
              <Link href="/LiftingEquipment">
                <a className="has-text-grey">Emelőgépek</a>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/CraneAndTrolley">
                <a className="tag is-info px-3 is-active">Daruk</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Daruk, futómacskák
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/Overhead">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.11. Futódaruk</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.11.-Overhead-Crane_T.jpg"
                        alt="Futódaruk"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A futódaru olyan híddaru, amely közvetlenül támaszkodik
                        a magasban elhelyezett darupályára. Az általuk
                        kiszolgált terület téglalap alakú, hatásterük téglatest.
                        Általában az épület két oldalán, az épület
                        tartóoszlopain kialakított konzolokon vagy a darupálya
                        megtartására szolgáló oszlopokon rögzített darupályán
                        futnak. A darupályán való elrendezésük alapján
                        megkülönböztetünk felülfutós vagy alulfutó (függő)
                        darukat.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/GantryCrane">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.12. Bakdaruk</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.12.-Gantry-Crane_T.jpg"
                        alt="Bakdaruk"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A bakdaruk olyan híddaruk, amelyek lábakkal támaszkodnak
                        a padlószinten elhelyezett darupályára. A bakdarut
                        általában gyártó-, szerelő- és tárolóhelyeken
                        alkalmazzák emelésre, rakodásra illetve rövid távú
                        szállításra.A bakdarun levő futómacskák megegyeznek a
                        futódaruknál alkalmazottakkal, azaz futóműves villamos
                        emelődobot vagy kétsínszálon vezetett négykerekes
                        futómacskát használnak.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/JibCrane">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.13. Konzoldaruk</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.13.-Jib-Crane_T.jpg"
                        alt="konzoldaruk"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A konzoldaru egy csapágyazott tengelyen fordítható, I
                        tartón futó emelőszerkezet. Oszlopos és fali kivitele
                        van. A gém csapágyazott tengelyen fordítható el 270°
                        vagy 360°-os szögtartományban. A gémre kerülő
                        emelőszerkezet, láncos futómacska, lehet kézi és motoros
                        működtetésű.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/PortalCrane">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.14. Bakállványok</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.14.-Portal-Crane.jpg"
                        alt="Bakállvány"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A bakállvány könnyített szerkezetű futómacska-pálya,
                        amelyek görgőkön eltolható acélszerkezettel készülnek.
                        Ahol megfelelő minőségű aljzatbeton áll rendelkezésre,
                        és a rakodási igények nem indokolják híddaru
                        létesítését, ott olcsó és gyors megoldást jelentenek az
                        emeléstechnika területén. Rendelhető kézi vagy
                        elektromos emelőművel.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/LightCrane">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.15. Könnyűszerkezetes daruk
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.15.-Light-Crane_T.jpg"
                        alt="Könnyűszerkezetes daruk"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A könnyűszerkezetes daru az adott helyszín adottságaihoz
                        igazítható, a teherbírás és oszloposztásoktól függően
                        alakítható. A rendszer alapját alumínium profilok
                        képezik, az alacsony önsúly miatt a darurendszer könnyen
                        kezelhető. A sokféle függesztési kialakításnak és a
                        finoman gördülő, vezetet futómacskáknak köszönhetően a
                        pályák a felhasználói igényeknek megfelelően
                        alakíthatók.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley/Component">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.16. Daru komponensek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.16.-Crane-Components.jpg"
                        alt="Daru komponensek"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Daru vezérlés, függőkapcsoló, rádió távvezérlés
                        (kombinálható függőkapcsolóval) Áramellátás és egyéb
                        kapcsolódó komponensek
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
