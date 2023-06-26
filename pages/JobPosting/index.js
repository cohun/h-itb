import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const JobPosting = () => {
  return (
    <div>
      <Head>
        <title>Álláshirdetés</title>
        <meta name="description" content="Álláshirdetés" />
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
              <Link href="/JobPosting" passHref>
                <div className="tag is-info px-3 is-active">Álláshirdetés</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
      <section className="section mb-6">
        <div className="container mb-6">
          <h3 className="title has-text-centered is-size-3">Álláshirdetés</h3>
          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-12-tablet is-12-widescreen">
              <div className="card-image has-text-centered pt-6">
                <div className=""></div>
                <Image
                  width={1801}
                  height={2600}
                  src="/JobPost.jpg"
                  alt="Job"
                />
              </div>
            </div>
          </div>

          <article className="message is-info">
            <div className="message-header">
              <p>Jelentkezés módja</p>
              <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
              <p className="fontweight-strong">
                Szakmai fényképes önéletrajzokat az alábbi email címre várjuk:
              </p>
              <div className="notification pt-1 pb-2 px-3 has-text-centered">
                <Link href="mailto:horvath.i@h-itb.hu" passHref>
                  horvath.a@h-itb.hu
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default JobPosting;
