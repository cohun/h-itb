import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const LiftingEquipment = () => {
  return (
    <div>
      <Head>
        <title>Gutman Emelőgépek</title>
        <meta name="description" content="Gutman Emelőgépek" />
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
                <div className="tag is-info px-3 is-active">Emelőgépek</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Emelőgépek</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/CraneAndTrolley">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.1. Daruk, futómacskák
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.1.-Crane-and-Trolley_T.jpg"
                        alt="Daruk"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan szakaszos működésű emelőgép, amely a teherfelvevő
                        eszközével rögzített teher térbeli mozgatására alkalmas.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/PoweredLiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.2. Emelőberendezések
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.2.-Powered_Liftinf_Equipment_T.jpg"
                        alt="Emelőberendezés"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan gépi hajtású emelőgép, amelyek a terhet
                        függölegesen, két véghelyzet között és egy meghatározott
                        vonal mentén mozgatja.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/ManualLiftingEquipment">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">A.3. Emelőszerkezetek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.3.-Manual_Lifting_Equipment_T.jpg"
                        alt="Emelőszerkezet"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan szakaszosan és kézi erővel működtetett emelőgép,
                        amely a teher térbeli mozgatására alkalmas.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/LiftingEquipment/LiftingAccessories">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        A.4. Teherfelvevő eszközök
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/A.4.-Lifting-Accessories.jpg"
                        alt="Teherfelvevők"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Oldható teherfelvevő eszköz olyan alkatrész vagy
                        részegység, amely nem a gép része, hanem a gép és a
                        teher közé vagy a terhen helyezik el a teher
                        csatlakoztatása céljából.
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
