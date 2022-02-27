// import Cookies from 'js-cookie';
import axios from 'axios';

// const token = Cookies.get('accessToken', { parseJSON: true });

const baseDomain = 'http://localhost/multijun/laravel-api/api'

export const customHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    // Authorization: `Bearer ${token}`
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    // baseUrl,
    headers: customHeaders
});


export const serializeQuery = query => {
    return Object.keys(query)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
};