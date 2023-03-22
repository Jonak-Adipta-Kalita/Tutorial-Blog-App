"use client";

import { definePreview } from "next-sanity/preview";

const onPublicAccessOnly = () => {
  throw new Error("Unable to load preview as you're not logged in.");
};

export const usePreview = definePreview({
  onPublicAccessOnly,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
});
