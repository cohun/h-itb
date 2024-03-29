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
    'fields.productGroupId[all]': 'C.12.',
    locale: 'hu-HU',
  });

  // Here A.411. must be changed according to the actual productGroup
  const resFiltered = res.items.filter(
    (item) => item.fields.productGroupId === 'C.12.'
  );

  return {
    props: {
      type: resFiltered,
    },
    revalidate: 60,
  };
}

function TableLifters({ type }) {
  return (
    <div>
      <Head>
        <title>Gutman mobil emelőasztal</title>
        <meta name="description" content="Gutman mobil emelőasztal" />
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
              <Link href="/MaterialHandling" passHref>
                <div className="has-text-grey px-3">Anyagmozgatás</div>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/LiftTrucks" passHref>
                <div className="has-text-grey px-3">Targoncák</div>
              </Link>
            </li>
            <li>
              <Link href="/MaterialHandling/LiftTrucks/TableLifters" passHref>
                <div className="tag is-info px-3 is-active">Emelőasztalok</div>
              </Link>
            </li>
          </ul>
        </nav>
      </section>

      <Table type={type} />
    </div>
  );
}

export default TableLifters;
