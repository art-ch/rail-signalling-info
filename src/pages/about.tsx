import { client } from '../api/cms';

const AboutPage = ({ pageProps }) => {
  return (
    <main>
      <h1 className="page__title">{pageProps.title}</h1>
      <p>{pageProps.subtitle}</p>
      <div className="page__description">
        {pageProps.description.content[0].content.map((item) => (
          <p>{item.value}</p>
        ))}
      </div>
    </main>
  );
};

export default AboutPage;

export async function getStaticProps() {
  const aboutPage = await client.getEntry('QmafzdRbw4a3FHNYzzqBo');

  return {
    props: {
      pageProps: aboutPage.fields
    }
  };
}
