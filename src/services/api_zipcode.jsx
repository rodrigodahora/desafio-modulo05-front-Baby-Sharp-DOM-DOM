import axios from 'axios';

const api_zipcode = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    timeout: 10000,
    headers: { "Content-Type": "application/json" }
})

export default api_zipcode;
