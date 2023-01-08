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
      {subtitle && <RichText content={subtitle} />}
      {description && <RichText content={description} />}
    </main>
  );
}

export async function getStaticProps() {
  const aboutPage = await client.getEntry('3h8F8XvjkUCNp6S5WMnc3P');

  return {
    props: aboutPage.fields
  };
}
