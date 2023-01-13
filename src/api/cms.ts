import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getEntry = async (url: string, content_type: string) => {
  return await client
    .getEntries({
      content_type,
      'fields.url[match]': `/${url}`
    })
    .then((data) => data.items[0]);
};

export default {
  async getInfoPage(url: string) {
    return await getEntry(url, 'infoPage');
  }
};
