import Link from "next/link";
import Table from "../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    "fields.productGroupId[all]": "D.15.",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "D.15."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function AntiSlip({ type }) {
  return (
    <div>
      <Head>
        <title>Csúszásgátló</title>
        <meta
          name="description"
          content="Csúszásgátló gumitekercs raklap alá. Raklapos rakományt szállító kamionok és tehergépjárművek nélkülözhetetlen kelléke."
        />
        <meta
          name="keywords"
          content="rakományrögzítő, csúszásgátló, csúszásgátló szőnyeg, csúszásgátló lap"
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
                <div className="has-text-grey px-3">Egyéb</div>
              </Link>
            </li>
            <li>
              <Link href="/Miscellaneous/Lashing" passHref>
                <div className="has-text-grey px-3">Rakományrögzítés</div>
              </Link>
            </li>
            <li>
              <Link href="/Miscellaneous/Lashing/AntiSlip" passHref>
                <div className="tag is-info px-3 is-active">Csúszásgátló</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default AntiSlip;
