import { createClient } from 'contentful';
import {
  HomePageModel,
  InfoPageModel,
  NavigationPageModel,
  ZonePageModel
} from '../types/models';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

const getEntry = async <T>(url: string, content_type: string) => {
  return await client
    .getEntries<T>({
      content_type,
      'fields.url[match]': `${url}`
    })
    .then((data) => data.items[0]);
};

export default {
  async getHomePage(url: string) {
    return await getEntry<HomePageModel>(url, 'homePage');
  },

  async getInfoPage(url: string) {
    return await getEntry<InfoPageModel>(url, 'infoPage');
  },

  async getNavigationPage(url: string) {
    return await getEntry<NavigationPageModel>(url, 'navigationPage');
  },

  async getZonePage(url: string) {
    return await getEntry<ZonePageModel>(url, 'zonePage');
  }
};
