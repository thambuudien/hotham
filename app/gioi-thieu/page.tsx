// app/gioi-thieu/page.tsx
import { gql } from '@apollo/client';
import client from '@/lib/apollo-client';
import Image from 'next/image';
import { Page } from '@/types/wordpress';
import parse from 'html-react-parser';
import { ImageLoader } from '@/lib/image-loader';

const GET_ABOUT_PAGE = gql`
  query GetAboutPage {
    pageBy(uri: "/gioi-thieu") {
      title
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      seo { # Thêm trường seo từ WPGraphQL Yoast SEO
        title
        metaDesc
        fullHead
      }
    }
  }
`;

export default async function AboutPage() {
  const { data } = await client.query<{ pageBy: Page }>({
    query: GET_ABOUT_PAGE,
  });

  const { title, content, featuredImage, seo } = data.pageBy;

  return (
    <>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

        {featuredImage && (
          <div className="mb-8 w-full max-w-lg mx-auto">
            <Image
              loader={ImageLoader}
              src={featuredImage.node.sourceUrl}
              alt={title}
              width={400}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        )}

        <div
          className="prose lg:prose-xl dark:prose-invert"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <title>{seo.title}</title>
      <meta name="description" content={seo.metaDesc} />
      {/* Render fullHead từ Yoast SEO */}
      {seo.fullHead && parse(seo.fullHead)}
    </>
  );
}