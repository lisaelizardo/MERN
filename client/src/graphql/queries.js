import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
      User {
          _id
          username
          email
          bookCount
          savedBooks
      }
    }
`;