import Link from "next/link";
import Table from "../../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    "fields.productGroupId[all]": "A.414.",
  });
  console.log(res.items);

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.414."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function FibreRope({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman sodrott és fonatolt kötelek</title>
        <meta name="description" content="Gutman sodrott és fonatolt kötelek" />
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
                href="/LiftingEquipment/LiftingAccessories/TextileSlings"
                passHref
              >
                <div className="has-text-grey px-3">Textil kötelek</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/TextileSlings/FibreRopes"
                passHref
              >
                <div className="tag is-info px-3 is-active">
                  Sodrott és fonatolt kötelek
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default FibreRope;
