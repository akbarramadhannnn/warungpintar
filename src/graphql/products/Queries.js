import { gql } from '@apollo/client';

export const LOAD_PRODUCTS = gql`
  query {
    products {
      id
      data {
        name
        price
        rating
        image {
          url
        }
      }
    }
  }
`;

export const LOAD_DETAIL_PRODUCTS = gql`
  query ($slug: String!) {
    products(where: { name: { eq: $slug } }) {
      id
      data {
        name
        price
        rating
        image {
          url
        }
      }
    }
  }
`;
