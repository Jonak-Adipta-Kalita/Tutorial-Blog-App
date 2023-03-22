import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { sanityClient } from "../../utils/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";

type Props = {};

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

const HomePage = async ({}: Props) => {
  if (previewData())
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
              Loading preview data...
            </p>
          </div>
        }
      >
        <div></div>
      </PreviewSuspense>
    );

  const posts = await sanityClient.fetch(query);

  return <div></div>;
};

export default HomePage;
