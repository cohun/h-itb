import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const PoweredLiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman emelőberendezések</title>
        <meta name="description" content="Gutman emelőberendezések" />
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                <a className="has-text-grey">Emelőberendezések</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">
            Emelőberendezések
          </h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/ElectricHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.21. Elektromos emelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.21.-Electric-hoists_T.jpg"
                        alt="láncos emelő"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Villamos hajtású, szakaszos működtetésű, a teherfelvevő
                        eszközre függesztett teher emelésére és süllyesztésére
                        alkalmas önálló emelőgép. Széles köreben elterjedt az
                        iparban, gyakran egy nagyobb emelőgép részeként.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/LiftingTable">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.22. Emelőasztalok</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.22.-Lifting-tables_T.jpg"
                        alt="Emelőasztal"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Az emelő asztal a teher függőleges vonalú mozgását és
                        közben vízszintes helyzetben tartását, csuklós-ollós
                        mechanizmusokkal biztosító emelőberendezés. Rozsdamentes
                        kivitelben is kapható, ill. klf. kiegészítőkkel lehet
                        ellátni őket.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.23. Vákuumos emelők</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.23.-Vacuum-lifter_T.jpg"
                        alt="Vákuumos emelő"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Vákuumos emelő olyan saját szívással rendelkező
                        tartó/megfogó ill. emelő szerkezet, amely a vákuumot a
                        terheléstől függően állítja elő. Általában síma nem
                        légáteresztő terhek megfogására és tartására alkalmas.
                        Szükség szerint billentő kiegészítő adapterrel is
                        használható.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment/AirHoist">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.24. Pneumatikus emelők
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.24.-Air-hoists_T.jpg"
                        alt="Pneumatikus emelő"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Sűrített levegővel működő emelőberendezés, mely a
                        villamos emelődobokhoz képest számtalan előnnyel
                        rendelkezik, ezért mindenütt, ahol kiépített sűrített
                        levegő rendszer rendelkezésre áll, érdemes megfontolni
                        használatukat.
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

export default PoweredLiftingEquipment;
