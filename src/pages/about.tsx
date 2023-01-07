import { RichText } from '../components/cms/RichText';

import { client } from '../api/cms';

import { InfoPageProps } from '../types/pageTypes';

export type AboutPageProps = InfoPageProps;

export default function AboutPage({
  title,
  subtitle,
  description
}: AboutPageProps) {
  return (
    <main>
      <h1 className="page-title">{title}</h1>
      <p>{subtitle}</p>
      {description && <RichText description={description} />}
    </main>
  );
}

export async function getStaticProps() {
  const aboutPage = await client.getEntry('QmafzdRbw4a3FHNYzzqBo');

  return {
    props: aboutPage.fields
  };
}
