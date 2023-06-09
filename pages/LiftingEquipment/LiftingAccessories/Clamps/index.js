import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Clamps = () => {
  return (
    <div>
      <Head>
        <title>Megfogók</title>
        <meta name="description" content="Megfogók" />
        <meta
          name="keywords"
          content="lemezmegfogó, lemezcsipesz, lemezemelő, lemezemelő csipesz, lemezemelő eszköz, lemez forgatás, teher"
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
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps" passHref>
                <div className="tag is-info px-3 is-active">Megfogók</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Megfogók</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps/GutmanClamps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.441. Gutman megfogók
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Gutman.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Gutman megfogók minden standard feladatra kiválóan
                        alkalmazható tartós megoldások.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps/PewagClamps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.442. Pewag megfogók</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Pewag.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Kimagasló minőség, hosszú élettartam, egyedileg
                        kifejlesztett megoldások.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/Clamps/DrumClamps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.443. Hordófogók</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.443.drum.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Pewag hordófogók vizszintes vagy függőleges helyzetű fém
                        hordók emeléséhez.
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

export default Clamps;
