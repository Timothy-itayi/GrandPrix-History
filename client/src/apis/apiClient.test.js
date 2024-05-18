// apiClient.test.js

import MockAdapter from 'axios-mock-adapter';
import apiClient from './apis/apiClient';

describe('apiClient', () => {
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(apiClient);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should make a successful GET request', async () => {
    const responseData = { message: 'success' };

    // Mocking a successful GET request
    mock.onGet('/').reply(200, responseData);

    // Making the GET request using apiClient
    const response = await apiClient.get('/');

    // Expecting the response data to match responseData
    expect(response.data).toEqual(responseData);
  });

  it('should handle error for GET request', async () => {
    const errorMessage = 'Request failed with status code 500';

    // Mocking a failed GET request
    mock.onGet('/').reply(500, errorMessage);

    try {
      // Making the GET request using apiClient
      await apiClient.get('/');
    } catch (error) {
      // Expecting the error message to match the mocked error message
      expect(error.message).toBe(errorMessage);
    }
  });
});
