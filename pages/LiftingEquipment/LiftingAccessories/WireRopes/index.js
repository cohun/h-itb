import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const WireRopes = () => {
  return (
    <div>
      <Head>
        <title>Sodronykötél, drótkötél</title>
        <meta
          name="description"
          content="A drótkötelek fő alkalmazási területei:emelőgépekhez (daru) futó kötél, állókötél illetve acélsodrony függesztékek."
          lang="hu"
        />
        <meta
          name="keywords"
          content="sodronykötél, drótkötél, acélsodrony, függeszték, alácsapókötél, emelőkötél, kötél"
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
              <Link
                href="/LiftingEquipment/LiftingAccessories/WireRopes"
                passHref
              >
                <div className="tag is-info px-3 is-active">Drótkötelek</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Acél sodronykötelek, függesztékek
          </h3>
          <p>
            A drótkötél előnyös tulajdonságai következtében széleskörben kerül
            alkalmazásra különféle emelőgépekben (daru) mint futó kötél, vagy
            állókötél.
          </p>
          <p>
            Ezenkívül az acélsodronykötélből, hagyományos kézi fülecseléssel
            (fuxolassal), illetve kötelvégpréseléssel készített függesztékek, a
            nagyszilárdságú lánc- és textilfüggesztékek mellett továbbra is
            használatosak.
          </p>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes/WireRopeSlings">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.431. Sodronykötél függesztékek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/431.-Wire-rope-slings.jpg"
                        alt="függeszték"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Általános emelési célú acélsodronykötél függeszték az
                        MSZ EN 13414 – 1 jelű szabvány szerint. Fülkialakítás
                        préseléssel vagy fonással. A teher alakjához való
                        illeszkedése, illetve dörzsölőhatás elleni állóképessége
                        révén tartós, ugyanakkor költséghatékony megoldást kínál
                        minden emeléshez. Jellemzően szerelvény nélküli füles
                        alácsapó, vagy szerelvényezett egy-, többágú horgos
                        függesztékek készülnek.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/WireRopes/SteelWireRopes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.432. Acél Sodronykötelek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.432.-SteelWireRope.jpg"
                        alt="drótkötél"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az acélsodronykötél pászmái különböző acélminőségű és
                        szilárdságú fémhuzalok összesodrásával készül. A
                        sodronykötél több pászma - kenderkötélből vagy fémből
                        készült - mag köré való fonásával jön létre. A különféle
                        kombinációk lehetővé teszik, hogy minden alkalmazáshoz a
                        szilárdság, a kopásállóság, a törésállóság, a hajlítási
                        fáradtság és a korrózióállóság alapján a megfelelő kötél
                        kerüljön alkalmazásra.
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

export default WireRopes;
