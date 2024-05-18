// apiClient.js
const fetchSessions = async () => {
    const response = await fetch('https://api.openf1.org/v1/sessions');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  
  export default fetchSessions;
  