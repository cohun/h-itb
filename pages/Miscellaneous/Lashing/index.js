import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const Lashing = () => {
  return (
    <div>
      <Head>
        <title>Gutman rakományrögzítő</title>
        <meta name="description" content="Gutman rakományrögzítő" />
        <meta
          name="keywords"
          content="poliészter rakományrögzítő, rakomány rögzítés, rakományok leszorítása"
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
              <Link href="/Miscellaneous" passHref>
                <div className="has-text-grey px-3">Egyéb termékek</div>
              </Link>
            </li>
            <li>
              <Link href="/Miscellaneous/Lashing" passHref>
                <div className="tag is-info px-3 is-active">
                  Rakományrögzítők
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Rakományrögzítők
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/LashingStraps">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.11. Racsnis hevederek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.11.-Lashing-straps.jpg"
                        alt="Lashing"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Ezek a rakományrögzítők az MSZ EN 12195-2 jelű szabvány
                        szerint készülnek. A komplett rakományrögzítő jellemzően
                        két különálló egységből épül fel: egy rövid ágból (acél
                        hegyes horog + 0.4 m poliészter heveder + racsni és egy
                        hosszú ágból (klf. hosszúságú poliészter heveder + acél
                        hegyes horog). Legelterjetteb mód a leszorításos
                        rakományrögzítés. Itt a rakomány a lekötő eszköz erejét
                        kihasználva van a rakfelülethez szorítva, és ezáltal a
                        súrlódást növeli és az elcsúszást megakadályozza. A
                        másik módszer a diagonális rögzítés (kifeszítéses
                        rögzítés). Ez a rögzítési mód legtöbbször a nehezebb
                        rakományoknál kerül alkalmazásra.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/LashingChains">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.12. Láncos rakományrögzítők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.12.-Lashing-chains.jpg"
                        alt="Lashing chain"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Ezek a rakományrögzítők az MSZ EN 12195-3 jelű szabvány
                        szerint készülnek és hasonló funkciót töltenek be mint a
                        poliészter hevederből készült racsnis rögzuítők
                        (spaniferek). Többnyire nehéz rakományoknál kerül
                        alkalmazásra a diagonális rögzítési mód (kifeszítéses
                        rögzítés) használatával.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/EdgeProtector">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.13. Sarokvédők</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.13.-Edge-protectors.jpg"
                        alt="Edge protector"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A rakományrögzítő heveder hasznos kiegészítője a
                        sarokvédő, mely nem csak a terhet óvja a deformációtól,
                        hanem a heveder éles sarkokon történő sérülését is
                        megakadályozza. További előny, hogy használatával a
                        heveder feszítése a racsnival átellenes oldalon is
                        teljes mértékben megtörténik.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/LoadRestraint">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.14. Rakományhatárolók
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.14.-Load-restraint-systems.jpg"
                        alt="Load restraint system"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Rakományok felborulás elleni védelmében használatos
                        segédeszközök a rakományhatároló léc (köztesfal
                        rögzítő), vagy a rakománykitámasztó rúd. Felépítménybe
                        szerelt oldalfal sínrendszerekhez klf. rakományrögzítő
                        rudak kerülnek alkalmazásra.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/AntiSlip">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.15. Csúszásgátlók</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.15.-Anti-slip-mats.jpg"
                        alt="Antislip mats"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Ezek az elmozdulást gátló csúszásgátlók rendkívül
                        hasznos, de sokszor mellőzött biztonsági elemei a
                        rakományrögzítésnek. A leszorításos rakományrögzítés
                        hatékonysága a rakfelület és rakomány közti súrlódás
                        mértékétől függ. Csúszásgátlóval ez az érték 0.6-ra
                        növelhető, ami jelentősen csökkentheti a szükséges
                        leszorító hevederek számát.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing/Disposable">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.16. Pántszalagok</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.16.-Disposable-lashing.jpg"
                        alt="Disposable lashing"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A rakatképzés kitünő ár-érték arányú rögzítőeszköze a
                        pántszalag. Egyutas használatra lettek tervezve,
                        életciklusuk a szállítás végpontján ér véget.
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

export default Lashing;
