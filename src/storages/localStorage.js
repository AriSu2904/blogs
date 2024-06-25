import {jwtDecode} from "jwt-decode";

export const getData = (key) => {
    return localStorage.getItem(key)
}

export const setData = (key, value) => {
    localStorage.setItem(key, value);
}

export const setEmail = (key, value) => {
    const { email } = jwtDecode(value);
    localStorage.setItem(key, email);
}