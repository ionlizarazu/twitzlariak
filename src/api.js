import axios from 'axios'
import secrets from './secrets.json';

let api = axios.create({
    baseURL: 'https://api.twitch.tv/helix/',
    headers: {
        'client-id': secrets.client_id,
        'Authorization': "Bearer " + secrets.token
    }
})

export default api;