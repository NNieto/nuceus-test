const axios = require('axios');

const BASE_URL = "https://api.github.com/"

const request = axios.create({
    baseURL: BASE_URL,
    timeout: 30000,
    headers: {}
});

export default request;