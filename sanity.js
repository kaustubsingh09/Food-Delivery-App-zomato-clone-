import { createClient, } from "@sanity/client";
import createImageUrlBuilder from '@sanity/image-url'


const client = createClient({
  projectId: "qh5rzqwb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

// const builder = createImageUrlBuilder(client);
export const urlFor = (source) => createImageUrlBuilder(client).image(source);

//run this to add exception for localhost 3000 cors policy
//sanity cors add http://localhost:3000 <= do check

export default client;
