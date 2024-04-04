# creating a cookie

    - document.cookie="name=sai"
    - doument.cookie="name=sai;expiry="

    `

`import { useState, useEffect } from "react";

const useCookie = (cookieName) => {
const [cookieValue, setCookieValue] = useState("");

useEffect(() => {
const cookie = document.cookie.split("; ").find(row => row.startsWith(`${cookieName}=`));
setCookieValue(cookie ? cookie.split("=")[1] : "");
}, [cookieName]);

const setCookie = (value, expirationDate) => {
document.cookie = `${cookieName}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

const deleteCookie = () => {
document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
};

return [cookieValue, setCookie, deleteCookie];
};

// Usage in a React component
const [username, setUsername, deleteUsername] = useCookie("username");`

# with custom package js-cookies

import Cookies from "js-cookie";

// Set a cookie
Cookies.set("username", "john_doe", { expires: 7, path: "/" });

// Get a cookie
const username = Cookies.get("username");

// Delete a cookie
Cookies.remove("username");


# setting cookies

const setCookie = (name, value, days) => {
 const expirationDate = new Date();
 expirationDate.setDate(expirationDate.getDate() + days);
 document.cookie = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;
};

// Example: Set a username cookie that expires in 7 days
setCookie("username", "john_doe", 7);

# getting cookies

const getCookie = (name) => {
 const cookies = document.cookie.split("; ").find(row => row.startsWith(`${name}=`));
 return cookies ? cookies.split("=")[1] : null;
};

// Example: Get the value of the 'username' cookie
const username = getCookie("username");

