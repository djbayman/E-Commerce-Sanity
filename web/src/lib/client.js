import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "uajjgjxj",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
  token: process.env.REACT_APP_WEB_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
