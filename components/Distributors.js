import Image from "next/image";
import Link from "next/link";

const Disributors = () => {
  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered is-gapless">
            <div className="column is-one-half"></div>
            <div className="column">
              <Image
                width={200}
                height={80}
                src="/H-ITBLogo.jpg"
                alt="H-ITB logó"
              />
            </div>

            <div className="column ">
              <h1 className="title  is-size-3">Területi képviselők:</h1>
            </div>
            <div className="column is-one-fifth"></div>
          </div>

          <br />
          <div className="columns is-multiline">
            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Négyesy Gábor
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Negyesy.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Budapest és környéke
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Négyesy Gábor
                      </span>
                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1121" passHref>
                          Tel: +36 30 742 1121
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:negyesy.g@h-itb.hu" passHref>
                          email: negyesy.g@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Ihász Viktória
                        </span>

                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 7421137" passHref>
                            Tel: +36 30 742 1137
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:ihasz.v@h-itb.hu" passHref>
                            email: ihasz.v@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Nagy Gergely
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Negyesy.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Budapest és környéke
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Nagy Gergely
                      </span>

                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 467 8689" passHref>
                          Tel: +36 30 467 8689
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:nagy.g@h-itb.hu" passHref>
                          email: nagy.g@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Csergő Éva
                        </span>

                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 278 0959" passHref>
                            Tel: +36 30 278 0959
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:csergo.e@h-itb.hu" passHref>
                            email: csergo.e@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Hegyi Gábor
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Hegyi.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Északnyugat-Magyarország
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Hegyi Gábor
                      </span>
                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1133" passHref>
                          Tel: +36 30 742 1127
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:hegyi.g@h-itb.hu" passHref>
                          email: hegyi.g@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Szabó Papp Szilvia
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1127" passHref>
                            Tel: +36 30 742 1127
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:szabopapp.sz@h-itb.hu" passHref>
                            email: szabopapp.sz@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Molnár Ferenc
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Molnar.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Középnyugat-Magyarország
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Molnár Ferenc
                      </span>

                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 415 0398" passHref>
                          Tel: +36 30 415 0398
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:molnar.f@h-itb.hu" passHref>
                          email: molnar.f@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Kövesiné Vértesi Katalin
                        </span>

                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1135" passHref>
                            Tel: +36 30 742 1135
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:vertesi.k@h-itb.hu" passHref>
                            email: vertesi.k@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Simon Jenő
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Simon.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Nyugat-Magyarország
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Simon Jenő
                      </span>

                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1125" passHref>
                          Tel: +36 30 742 1125
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:simon.j@h-itb.hu" passHref>
                          email: simon.j@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                        Szabó Papp Szilvia
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1127" passHref>
                            Tel: +36 30 742 1127
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="szabopapp.sz@h-itb.hu" passHref>
                            email: szabopapp.sz@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Bálint Miklós
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Balint.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Dél-Dunántúl
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Bálint Miklós
                      </span>

                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1132" passHref>
                          Tel: +36 30 742 1132
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:balint.m@h-itb.hu" passHref>
                          email: balint.m@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                        Szabó Papp Szilvia
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1127" passHref>
                            Tel: +36 30 742 1127
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:szabopapp.sz@h-itb.hu" passHref>
                            email: szabopapp.sz@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Halász Miklós
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Halasz.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Dél-Alföld
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Halász Miklós
                      </span>

                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1136" passHref>
                          Tel: +36 30 742 1136
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:halasz.m@h-itb.hu" passHref>
                          email: halasz.m@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Kövesiné Vértesi Katalin
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1135" passHref>
                            Tel: +36 30 742 1135
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:vertesi.k@h-itb.hu" passHref>
                            email: vertesi.k@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                      Horváth István
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/HorvathI.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Közép-Alföld
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Horváth István
                      </span>
                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1128" passHref>
                          Tel: +36 30 742 1128
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:horvath.i@h-itb.hu" passHref>
                          email: horvath.i@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Kiss Brigitta
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1127" passHref>
                            Tel: +36 30 742 1139
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:mendrea.v@h-itb.hu" passHref>
                            email: kiss.b@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>

            <div className="column is-12-mobile is-6-tablet is-3-widescreen">
              <div className="card">
                <div className="card-header">
                  <div className="card-header-title is-flex-direction-row">
                    <p className="mr-6 ml-4 is-justify-content-flex-center is-flex-wrap-nowrap">
                    Horváth István
                    </p>

                    <Image
                      className="is-justify-content-flex-end"
                      width={60}
                      height={60}
                      src="/salesman.jpeg"
                      alt="salesman"
                    />
                  </div>
                </div>
                <div className="card-image has-text-centered pt-6">
                  <Image
                    width={165}
                    height={165}
                    src="/Szomolya.jpg"
                    alt="Hungary"
                  />
                </div>
                <div className="card-content">
                  <div className="content">
                    <article>
                      <p className="mb-0 has-text-weight-semibold">
                        Északkelet-Magyarország
                      </p>
                      <span className="has-text-info has-text-weight-semibold">
                        Horváth István
                      </span>
                      <div className="notification pt-2 pb-0 px-3 mb-0">
                        <Link href="tel:+36 30 742 1128" passHref>
                          Tel: +36 30 742 1128
                        </Link>
                      </div>

                      <div className="notification pt-1 pb-2 px-3">
                        <Link href="mailto:horvath.i@h-itb.hu" passHref>
                          email: horvath.i@h-itb.hu
                        </Link>
                      </div>

                      <div className="mt-2">
                        <p className="mb-0 has-text-weight-semibold">
                          H-ITB belső munkatárs
                        </p>
                        <span className="has-text-info has-text-weight-semibold">
                          Kövesiné Vértesi Katalin
                        </span>
                        <div className="notification pt-2 pb-0 px-3 mb-0">
                          <Link href="tel:+36 30 742 1135" passHref>
                            Tel: +36 30 742 1135
                          </Link>
                        </div>

                        <div className="notification pt-1 pb-2 px-3">
                          <Link href="mailto:vertesi.k@h-itb.hu" passHref>
                            email: vertesi.k@h-itb.hu
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Disributors;
