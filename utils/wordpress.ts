// utils/wordpress.ts
import { Post } from '@/types/wordpress';

export const getFeaturedImageUrl = (post: Post): string | null => {
  return post.featuredImage?.node.sourceUrl || null;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('vi-VN'); // Định dạng ngày tháng theo tiếng Việt
};