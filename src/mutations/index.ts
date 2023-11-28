import { gql } from '@apollo/client';

export const loginMutation = gql`
mutation LogIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
        id
    }
}
`;

export const logoutMutation = gql`
mutation LogOut {
    logOut {
        id
    }
}
`;
