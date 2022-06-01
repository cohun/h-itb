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
    locale: "hu-HU",
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.232."
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function TubeVacuum({ type }) {
  return (
    <div>
      <Head>
        <title>Tömlős vákuum emelő</title>
        <meta name="description" content="Tömlős vákuum emelő" />
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
              <Link href="/LiftingEquipment/PoweredLiftingEquipment" passHref>
                <div className="has-text-grey px-3">Emelőberendezések</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter"
                passHref
              >
                <div className="has-text-grey px-3">Vákuumos emelők</div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/PoweredLiftingEquipment/VacuumLifter/TubeVacuum"
                passHref
              >
                <div className="is-active px-3">Tömlős vákuum emelő</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default TubeVacuum;
