import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your actual API URL

// Function to fetch data
export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/data`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

// Function to post data
export const postData = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/data`, data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};
