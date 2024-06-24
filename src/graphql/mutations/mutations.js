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

export const REGISTER_USER = gql`
    mutation RegisterUser ($username: String!, $password: String!, $email: String!,
    $firstName: String!, $lastName: String!, $mobilePhone: String!, $gender: String!, $birthDate: String!) {
        registerUser(registerInput: { username: $username, password: $password, email: $email, profile: {
            firstName: $firstName, lastName: $lastName, mobilePhone: $mobilePhone, gender: $gender, birthDate: $birthDate 
        } }) {
            username,
            password,
            role,
            verified,
            email,
            profile {
                firstName,
                lastName,
                email,
                mobilePhone,
                gender,
                birthDate,
                profilePicture
                bio
            }
        }
    }
`