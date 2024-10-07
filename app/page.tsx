// app/page.tsx
'use client'
import { gql, useQuery } from '@apollo/client';
import client from '@/lib/apollo-client';
// import HeroBanner from '@/components/HeroBanner';
// import ServiceCard from '@/components/ServiceCard';
// import TestimonialSlider from '@/components/TestimonialSlider';
// import CallToAction from '@/components/CallToAction';
// import ConsultationForm from '@/components/ConsultationForm'; // Form đăng ký tư vấn
import { Page, Service, Testimonial } from '@/types/wordpress'; 

const GET_HOME_DATA = gql`
  query GetHomeData {
    pageBy(uri: "/") {
      title
      content
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery<{
    pageBy: Page;}>(GET_HOME_DATA, { client });

  if (loading) return <p>Đang tải dữ liệu...</p>;
  if (error) return <p>Có lỗi xảy ra: {error.message}</p>;

  console.log(data);

  // const { pageBy, services, testimonials } = data;

  return (
    <main>
      {/* <HeroBanner /> */}

      {/* Form Đăng Ký Tư Vấn */}
      {/* <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <ConsultationForm />
          </div>
        </div>
      </section> */}

      {/* Dịch Vụ Nổi Bật */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Dịch Vụ Bảo Hiểm</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.edges.map(({ node }) => (
              <ServiceCard
                key={node.id}
                title={node.title}
                description={node.excerpt}
                imageUrl={node.featuredImage?.node.sourceUrl || '/images/placeholder.jpg'}
                link={`/dich-vu/${node.slug}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Lời Chứng Thực */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Khách hàng nói gì?</h2>
          <TestimonialSlider
            testimonials={testimonials.edges.map(({ node }) => ({
              name: node.title,
              content: node.content,
              imageUrl: node.featuredImage?.node.sourceUrl,
            }))}
          />
        </div>
      </section> */}

      {/* Call to Action */}
      {/* <CallToAction title="Bạn cần được tư vấn?" link="/lien-he" /> */}
    </main>
  );
}