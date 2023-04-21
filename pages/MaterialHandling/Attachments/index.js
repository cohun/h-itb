import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

const Attachments = () => {
  return (
    <div>
      <Head>
        <title>Attachments</title>
        <meta name="description" content="Gutman liftrtucks" />
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
              <Link href="/">
                <a className="has-text-grey">Kezdőlap</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling">
                <a className="has-text-grey">Anyagmozgatás</a>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/Attachments">
                <a className="tag is-info px-3 is-active">Adapterek</a>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Adapterek</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/Attachments/CraneAttachments">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">C.21. Daru adapterek</p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.21.-Crane-Attachments.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Daru adapterek daruhoz, vagy más emelőgéphez
                        csatlakoztatott kiegészítő eszközök, melyek segítségével
                        a daru olyan feladatokat is el tud látni, melyet
                        egyébként inkább homlokvillás targoncával szoktak
                        elvégezni.
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </div>
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <Link href="/MaterialHandling/Attachments/ForkliftAttachments">
                <a>
                  <div className="card">
                    <div className="card-header">
                      <p className="card-header-title">
                        C.22. Targonca Adapterek
                      </p>
                    </div>
                    <div className="card-image has-text-centered pt-6">
                      <Image
                        width={165}
                        height={165}
                        src="/C.22.-Forklift-Truck-Attachments.jpg"
                        alt="Lifing accessories"
                      />
                    </div>
                    <div className="card-content">
                      <div className="content">
                        Olyan mechanikus eszközök, melyek a homlokvillás
                        targonca emelővillájához vannak csatlakoztatva, de nem
                        igénylik a hidraulika körbe való bekötést. Velük
                        egyszerű feladatokra a targonca sokoldalúan
                        használhatóvá válik.
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

export default Attachments;
