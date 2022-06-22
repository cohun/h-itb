import Link from "next/link";
import Table from "../../../../../../components/Table";
import Head from "next/head";
import { createClient } from "contentful";

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: "productTable",
    "fields.productGroupId[all]": "A.4221.",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.4221."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function G80MasterLinks({ type }) {
  return (
    <div>
      <Head>
        <title>G80 gyűjtőkarikák kapcsoló szemek</title>
        <meta name="description" content="G80 gyűjtőkarikák kapcsoló szemek" />
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
              <Link href="/LiftingEquipment/LiftingAccessories/Chains" passHref>
                <div className="has-text-grey px-3">Láncok</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Chains/MasterLinks"
                passHref
              >
                <div className="has-text-grey px-3">Gyűjtőkarikák</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/Chains/MasterLinks/G80MasterLinks"
                passHref
              >
                <div className="tag is-info px-3 is-active">
                  G80 Gyűjtőkarikák kapcsoló szemek
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

export default G80MasterLinks;
