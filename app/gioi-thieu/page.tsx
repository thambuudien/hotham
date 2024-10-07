// app/gioi-thieu/page.tsx
import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
import { Page } from '@/types/wordpress';
import Image from 'next/image'; // Để tối ưu hiển thị hình ảnh

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
    }
  }
`;

export default function AboutPage() {
  const { loading, error, data } = useQuery<{ pageBy: Page }>(GET_ABOUT_PAGE, { client });

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Có lỗi xảy ra: {error.message}</div>;

  const { title, content, featuredImage } = data.pageBy;

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">{title}</h1>

      {featuredImage && (
        <div className="mb-8 w-full max-w-lg mx-auto">
          <Image
            src={featuredImage.node.sourceUrl}
            alt={title}
            width={400} // Điều chỉnh kích thước ảnh
            height={300}
            className="rounded-lg shadow-md"
          />
        </div>
      )}

      <div 
        className="prose lg:prose-xl dark:prose-invert" // Sử dụng prose class của Tailwind cho định dạng nội dung đẹp mắt
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
}