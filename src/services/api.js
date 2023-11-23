import axios from 'axios';

export async function get(url) {
    const response = await axios.get(url);
    return response.data;
}

export async function post(url, data) {
    const response = await axios.post(url, data);
    return response.data;
}