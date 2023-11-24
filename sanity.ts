import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import defineConfig from "./sanity.config";

export const sanityClient = createClient(defineConfig);
export const urlFor = (source: any) =>
  createImageUrlBuilder(defineConfig).image(source);
