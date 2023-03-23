import { sanityClient } from "./sanity.client";
import imageBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const builder = imageBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
