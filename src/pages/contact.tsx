import { InfoPageProps } from '../types/pageTypes';

import { client } from '../api/cms';

export type ContactPageProps = InfoPageProps;

export default function ContactPage({ title, subtitle }: ContactPageProps) {
  return (
    <main>
      <h1 className="page-title">{title}</h1>
      <p>{subtitle}</p>
    </main>
  );
}

export async function getStaticProps() {
  const contactPage = await client.getEntry('6QotNxXT7LIDrxgHl9nn9G');

  return {
    props: contactPage.fields
  };
}
