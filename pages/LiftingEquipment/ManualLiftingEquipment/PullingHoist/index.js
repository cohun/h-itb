import Link from 'next/link';
import Table from '../../../../components/Table';
import Head from 'next/head';
import { createClient } from 'contentful';

export async function getStaticProps(context) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({
    content_type: 'productTable',
    'fields.productGroupId[all]': 'A.34.',
    locale: 'hu-HU',
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === 'A.34.'
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function PullingHoist({ type }) {
  return (
    <div>
      <Head>
        <title>Kötélvonszoló</title>
        <meta name="description" content="kötélvonszoló" />
        <meta
          name="keywords"
          content="kötélvonszoló, vonszoló, köteles vonszoló, tehervonszoló"
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
                href="/LiftingEquipment/ManualLiftingEquipment/PullingHoists"
                passHref
              >
                <div className="tag is-info px-3 is-active">kötélvonszoló</div>
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
