import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const LiftingEyes = () => {
  return (
    <div>
      <Head>
        <title>Emelőszem, sekli</title>
        <meta
          name="description"
          content="Emelőszem, sekli olyan alkatrész (teherfelvevő eszköz), mely nem az emelőgép része, 
        hanem a gép és a teher közé vagy a terhen helyezik el a teher csatlakoztatása céljából"
          lang="hu"
        />
        <meta
          name="keywords"
          content="gyűrűscsavar, szemescsavar, emelőszem, sekli, félszem, menetes forgószem"
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
                href="/LiftingEquipment/LiftingAccessories/LiftingEyes"
                passHref
              >
                <div className="tag is-info px-3 is-active">
                  Emelőszemek, Seklik
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Emelőszemek, Seklik
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/LiftingEyes/StandardLiftingEyes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.471. Standard emelőszemek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Standard_lifting_eyes.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        <p>
                          Emelőszemek, gyűrűscsavarok hosszú hagyománnyal
                          rendelkeznek nagy terhek tartós és megbízható
                          rögzítésénél. Standard emelőszemek biztosítják a
                          kapcsolatot az emelendő teher és a klf. függesztékek
                          között.
                        </p>
                        <p className="has-text-weight-semibold">
                          Szemescsavar/anya:
                        </p>
                        <p>
                          • teljes mértékig be kell a menetbe tekerni és mivel a
                          csavar síkjától eltérő terhelés nem megengedett, ezért
                          több ágú függesztékkel való emeléshez nem használható!
                        </p>
                        <p className="has-text-weight-semibold">
                          Menetes forgószem:
                        </p>
                        • Használhatóak többágú függesztékkel és oldalirányú
                        emeléshez is.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/LiftingEyes/PewagLiftingEyes">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.472. Pewag emelőszemek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Pewag_lifting_eyes.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Kimagasló minőség, felhasználóbarát kialakítás, hosszú
                        élettartam jellemzi a Pewag csavarozható, vagy
                        hegeszthető emelőszemeit.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories/LiftingEyes/Shackles">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.473. seklik</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/Shackles.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Általános emelési célokra használható, minősített,
                        nagyszilárdságú sekli olyan alkatrész (teherfelvevő
                        eszköz), mely nem az emelőgép része, hanem a gép és a
                        teher közé vagy a terhen helyezik el a teher
                        csatlakoztatása céljából. Alapvető kialakítási
                        követelményeit és használati szabályait az EN 13889
                        szabvány határozza. Mint teherfelvevő eszköz ezen seklik
                        biztonsági követelményeit és megfelelőségének
                        tanúsítását a 16/2008. (VIII.30.) NFGM rendelet írja
                        elő: tehát kötelezően: CE jelzéssel kell ellátni EK
                        megfelelőségi nyilatkozat alapján szabad használatba
                        venni.
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

export default LiftingEyes;
