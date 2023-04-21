import Image from 'next/image';
import Link from 'next/link';

const Miscellaneous = () => {
  return (
    <div>
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
                <div className="tag is-info px-3 is-active">Egyéb termékek</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Egyéb termékek</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/Lashing">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">D.1. Rakományrögzítés</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.1.-Lashing-systems_T.jpg"
                        alt="Rakományrögzítő"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        A legjáratosabb megoldások a rakomány rögzítésére :
                        lekötés (leszorításos rakományrögzítés), diagonális,
                        ferde, vízszintes lekötés (kifeszítéses
                        rakományrögzítés), rögzítés pl. fával, általában
                        szegelve és ékelve (VDI-Irányelv 2700), rakomány
                        rögzítése válaszfalak, szorítóhevederek, állványok,
                        háló, ponyva, coilteknő stb. segítségével, vagy az
                        eljárások kombinálásával.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/ShopEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.2. Kiegészítő felszerelések
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.2.-OtherEquipment.jpg"
                        alt="Egyéb kiegészítők"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan, általában emelési feladatokhoz tartozó kiegészítő
                        felszerelések, vagy karbantartási munkákhoz használatos
                        eszközök, melyek nem tartoznak a klasszikus
                        emelőszerkezetekhez, de klf. terhek mozgatására,
                        emelésére valók.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/Miscellaneous/FallProtection">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        D.3. Leesés elleni védelem
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/D.3.-Fall-Protection-.jpg"
                        alt="Testheveder"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Magasban végzett munkálatokhoz biztosított leesés elleni
                        védelem: biztonsági hevederkészletek és tartozékok.
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

export default Miscellaneous;
