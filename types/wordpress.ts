export interface MediaItem {
  id: string;
  title: string;
  sourceUrl: string;
  altText: string;
  mediaItemUrl: string; // URL của file media
}

export interface FeaturedImage {
  node: MediaItem;
}

export interface Seo {
  title: string;
  metaDesc: string;
  fullHead: string;
  // Thêm các trường dữ liệu SEO khác từ Yoast SEO nếu cần
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: FeaturedImage | null;
  categories: {
    nodes: {
      name: string;
    }[];
  };
  seo: Seo; // Thêm trường seo cho Post
}

export interface Page {
  id: string;
  title: string;
  content: string;
  featuredImage: FeaturedImage | null;
  seo: Seo; // Thêm trường seo cho Page
}

export interface Service extends Post {
  // Thêm các trường dữ liệu riêng cho Service nếu cần
}

export interface Testimonial extends Post {
  // Thêm các trường dữ liệu riêng cho Testimonial nếu cần
}