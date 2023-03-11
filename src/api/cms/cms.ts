import { createClient } from 'contentful';

import {
  WebsiteModel,
  HomePageModel,
  InfoPageModel,
  NavigationPageModel,
  ZonePageModel
} from '../../types/models';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || ''
});

const getLayout = async <T>(title: string) => {
  return await client
    .getEntries<T>({
      content_type: 'layout',
      'fields.title[match]': `${title}`
    })
    .then((data) => data.items[0]);
};

const getPage = async <T>(url: string, content_type: string) => {
  return await client
    .getEntries<T>({
      content_type,
      'fields.url[match]': `${url}`
    })
    .then((data) => data.items[0]);
};

export default {
  async getEntry(id: string) {
    return await client.getEntry(id);
  },

  async getRootLayout() {
    return await getLayout<WebsiteModel>('Website');
  },

  async getHomePage(url: string) {
    return await getPage<HomePageModel>(url, 'homePage');
  },

  async getInfoPage(url: string) {
    return await getPage<InfoPageModel>(url, 'infoPage');
  },

  async getNavigationPage(url: string) {
    return await getPage<NavigationPageModel>(url, 'navigationPage');
  },

  async getZonePage(url: string) {
    return await getPage<ZonePageModel>(url, 'zonePage');
  }
};
