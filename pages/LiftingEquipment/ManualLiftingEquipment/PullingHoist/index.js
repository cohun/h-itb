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
  });
  console.log(res.items);

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === "A.34."
  );

  return {
    props: {
      type: resFiltered,
    },
  };
}

function PullingHoist({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman PullingHoists</title>
        <meta name="description" content="PullingHoists" />
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
                <div className="has-text-grey px-3">Home</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment" passHref>
                <div className="has-text-grey px-3">Lifting Equipment</div>
              </Link>
            </li>
            <li>
              <Link href="/LiftingEquipment/ManualLiftingEquipment" passHref>
                <div className="has-text-grey px-3">
                  Manual Lifting Equipment
                </div>
              </Link>
            </li>
            <li>
              <Link
                href="/LiftingEquipment/ManualLiftingEquipment/PullingHoists"
                passHref
              >
                <div className="is-active px-3">PullingHoists</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default PullingHoist;
