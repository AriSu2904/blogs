import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    mutation LoginUser ($username: String!, $password: String!) {
        loginUser(loginInput: { username: $username, password: $password }) {
            status,
            username,
            token
        }
    }
`