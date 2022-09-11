import axios from 'axios';

const API_URL = 'http://laravel-api.test/api';

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getEvents() {
        return apiClient.get('/events');
    }
};