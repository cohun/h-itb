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
    "fields.productGroupId[all]": "A.32.",
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.32."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function LeverHoist({ type }) {
  return (
    <div>
      <Head>
        <title>Karos láncos emelő</title>
        <meta
          name="description"
          content="Karos láncos emelők széles körben használatosak emelési, vagy vonszolási feladatokra. Terhek rövidtávú 
          mozgatására a legkülönfélébb kezelői pozicióból kiválóan alkalmas."
          lang="hu"
        />
        <meta
          name="keywords"
          content="karos emelő, láncos emelő, karos feszítő, bányaemelő, láncos feszítő"
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
              <Link href="/LiftingEquipment/ManualLiftingEquipment" passHref>
                <div className="has-text-grey px-3">Emelőszerkezetek</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/ManualLiftingEquipment/LeverHoist"
                passHref
              >
                <div className="tag is-info px-3 is-active">Karos emelők</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default LeverHoist;
