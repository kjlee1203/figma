import axios from 'axios';

const api_upbit = axios.create({
    baseURL: 'https://api.upbit.com/v1'
})

export default api_upbit;