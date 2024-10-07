export interface MediaItem {
    id: string;
    title: string;
    sourceUrl: string;
    altText: string;
  }
  
  export interface FeaturedImage {
    node: MediaItem;
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
  }
  
  export interface Page {
    id: string;
    title: string;
    content: string;
    featuredImage: FeaturedImage | null;
  }
  
  export interface Service extends Post {
    // Thêm các trường dữ liệu riêng cho Service nếu cần
  }
  
  export interface Testimonial extends Post {
    // Thêm các trường dữ liệu riêng cho Testimonial nếu cần
  }