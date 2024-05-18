import axios from 'axios'
import dotenv from 'dotenv';

dotenv.config();
//server/RapidApi.js
export async function fetchDataFromRapidApi() {
    const apiKey = process.env.API_KEY
    const options = {
        method: 'GET',
        url: 'https://hyprace-api.p.rapidapi.com/v1/seasons/{8ac404c1-7494-4b04-b8a6-ee97913de526}/constructors',
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
        }
    };

    const response = await axios.request(options);
    
    if (response.status !== 200) {
        throw new Error('Error fetching data. Status code: ' + response.status);
    }

    // Check if the response content type is JSON
    const contentType = response.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Response is not JSON');
    }

    return response.data;
}