import { RichText } from '../components/cms/RichText';

import { client } from '../api/cms';

import { InfoPageProps } from '../types/pageTypes';

export type ContactPageProps = InfoPageProps;

export default function ContactPage({ title, subtitle }: ContactPageProps) {
  return (
    <main>
      <h1 className="page-title">{title}</h1>
      {subtitle && <RichText content={subtitle} />}
    </main>
  );
}

export async function getStaticProps() {
  const contactPage = await client.getEntry('1KzbE3Ac40hh9UchBAGuDw');

  return {
    props: contactPage.fields
  };
}
