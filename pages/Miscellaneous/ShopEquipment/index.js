import Link from "next/link";
import Table from "../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "D.2."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function ShopEquipment({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman kiegészítő felszerelések</title>
        <meta name="description" content="Gutman kiegészítő felszerelések" />
      </Head>

      <section className="pt-6"></section>
      <section className="pt-4 pb-0">
        <nav
          className="breadcrumb is-right has-arrow-separator"
          aria-label="breadcrumbs"
        >
          <ul>
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
              <Link href="/Miscellaneous/ShopEquipment" passHref>
                <div className="is-active px-3">Kiegészítők</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default ShopEquipment;
