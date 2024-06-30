import axios from 'axios';

const api_alpaca_paper = axios.create({
    baseURL: 'https://paper-api.alpaca.markets/v2',
    headers: {
        'accept': 'application/json',
        "content-type": "application/json",
        'APCA-API-KEY-ID': 'PKPUP50BSE5HXH56A1G8',
        'APCA-API-SECRET-KEY': 'Fre2uD7RGUiYWiik0CDnfzLs8YDV1ydnqxcGE0X2',
      },
})

export default api_alpaca_paper;