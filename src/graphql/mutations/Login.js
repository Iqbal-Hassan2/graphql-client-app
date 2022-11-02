import { gql } from "@apollo/client";

export const Fetch_login = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(user: { email: $email, password: $password }) {
      token
    }
  }
`;

export const Register_mutation = gql`
  mutation RegisterMutation($user: CreateUserInput!) {
    createUser(createUserInput: $user) {
      user {
        _id
        email
        permissions
      }
      token
    }
  }
`;
