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
    "fields.productGroupId[all]": "A.431.",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.431."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function WireRopeSling({ type }) {
  return (
    <div>
      <Head>
        <title>Acél sodronykötél függesztékek</title>
        <meta
          name="description"
          content="Drótkötelek füles alácsapó, vagy többágú horgos kivitelben"
          lang="hu"
        />
        <meta
          name="keywords"
          content="függeszték, alácsapókötél, sodronykötél, drótkötél, emelőkötél"
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
                href="/LiftingEquipment/LiftingAccessories/WireRopes"
                passHref
              >
                <div className="has-text-grey px-3">Sodronykötelek</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/LiftingAccessories/WireRopes/WireRopeSlings"
                passHref
              >
                <div className="tag is-info px-3 is-active">Függesztékek</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default WireRopeSling;
