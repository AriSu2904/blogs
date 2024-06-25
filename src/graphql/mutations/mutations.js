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
    $firstName: String!, $lastName: String!) {
        registerUser(registerInput: { username: $username, password: $password, email: $email, profile: {
            firstName: $firstName, lastName: $lastName } }) {
            username,
            password,
            role,
            verified,
            email,
            profile {
                firstName,
                lastName,
                email,
                profilePicture,
                bio
            }
        }
    }
`

export const REQUEST_OTP = gql`
    mutation OtpRequest ($email: String!) {
        oneTimePassword(email: $email) {
            status
            message
        }
    }
`

export const VERIFY_OTP = gql`
    mutation VerifyOTP ($email: String!, $otp: String!) {
        verifyOTP (otpInput: { email: $email, otp: $otp }) {
            status
            message
        }
    }
`