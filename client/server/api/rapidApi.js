// api/rapidApi.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiKey = process.env.REACT_APP_API_KEY;
console.log('API Key:', process.env.REACT_APP_API_KEY);

const baseURL = 'https://hyprace-api.p.rapidapi.com/v1';

const apiOptions = (endpoint) => ({
  method: 'GET',
  url: `${baseURL}/${endpoint}`,
  headers: {
    'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
  }
});

export async function fetchDataFromRapidApi(endpoints) {
  const requests = endpoints.map(endpoint => axios.request(apiOptions(endpoint)));

  try {
    const responses = await Promise.all(requests);

    // Ensure all responses are successful and JSON
    const data = responses.map(response => {
      if (response.status !== 200) {
        throw new Error(`Error fetching data from ${response.config.url}. Status code: ${response.status}`);
      }
      const contentType = response.headers['content-type'];
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error(`Response from ${response.config.url} is not JSON`);
      }
      return response.data;
    });

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
