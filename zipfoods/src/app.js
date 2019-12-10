export {
    default as Cart
}
from './Cart';

export const axios = require('axios');


export const config = {
    api: process.env.VUE_APP_API_URL
}

export let store = {
    cartCount: 0
}