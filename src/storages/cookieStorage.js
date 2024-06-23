import Cookies from "js-cookie";

export const setCookie = (name, value) => {
const expires = new Date();
expires.setHours(new Date().getHours() + 1);
console.log(`incoming data ${name} value: ${value}`);

Cookies.set(name, value, { httpOnly: true, secure: true, expires, sameSite: 'strict' });
}

export const getCookie = (name) => {
    return Cookies.get(name);
}