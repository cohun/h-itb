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
    "fields.productGroupId[all]": "D.13.",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "D.13."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function EdgeProtector({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman rakományrögzítő sarokvédő</title>
        <meta
          name="description"
          content="A rakományrögzítő sarokvédő vagy élvédő nem csak a hevedert, vagy a rakományt védi a mechanikai sérülésektől, 
        hanem segítségével a racsni által előidézett feszítőerő a heveder teljes hosszában tud érvényesülni."
          lang="hu"
        />
        <meta
          name="keywords"
          content="rakományrögzítő, sarokvédő, élvédő"
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
              <Link href="/Miscellaneous/Lashing/EdgeProtector" passHref>
                <div className="tag is-info px-3 is-active">Sarokvédő</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default EdgeProtector;
