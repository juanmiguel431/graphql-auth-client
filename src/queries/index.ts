import { gql } from '@apollo/client';

export const fetchUserQuery = gql`
query User {
    user {
        id
        email
    }
}
`;
