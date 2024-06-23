export const getData = (key) => {
    return localStorage.getItem(key)
}

export const setData = (key, value) => {
    localStorage.setItem(key, value);
}

