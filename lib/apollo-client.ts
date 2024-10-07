// lib/apollo-client.ts

import { ApolloClient, InMemoryCache } from '@apollo/client';

// console.log(process.env.NEXT_PUBLIC_WORDPRESS_API_URL);

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL, // Lấy URL API từ biến môi trường
  cache: new InMemoryCache(),
});

export default client;