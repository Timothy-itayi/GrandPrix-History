// src/apiClient.test.js
import axios from 'axios';
import apiClient from './apiClient';

jest.mock('axios');

describe('apiClient', () => {
  it('should make a GET request successfully', async () => {
    const responseData = { message: 'success' };
    const url = '/test'; // Define the URL

    // Mocking axios.get to return a resolved promise with responseData
    axios.get.mockResolvedValue({ data: responseData });

    // Making the GET request using apiClient.get
    const response = await apiClient.get(url);

    // Expecting the response data to match responseData
    expect(response.data).toEqual(responseData);

    // Expecting axios.get to have been called with the correct URL
    expect(axios.get).toHaveBeenCalledWith(`${apiClient.defaults.baseURL}${url}`);
  });

  it('should handle errors', async () => {
    const errorMessage = 'Network Error';
    const url = '/test'; // Define the URL

    // Mocking axios.get to return a rejected promise with an error
    axios.get.mockRejectedValue(new Error(errorMessage));

    try {
      // Making the GET request using apiClient.get
      await apiClient.get(url);
    } catch (error) {
      // Expecting the error message to match the mocked error message
      expect(error.message).toBe(errorMessage);
    }
  });
});
