// apiClient.js
import axios from 'axios';

const apiClient = axios.create({
  baseURL: "https://hyprace-api.p.rapidapi.com/v1",
  headers: {
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': 'hyprace-api.p.rapidapi.com'
  },
});

// Define a function to fetch drivers with query parameters
export const fetchDrivers = async ( pageSize) => {
  try {
    const response = await apiClient.get(`/seasons/{8ac404c1-7494-4b04-b8a6-ee97913de526}/drivers`, {
      params: {
        pageSize: pageSize,
       
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching drivers: ' + error.message);
  }
};



export default apiClient;
