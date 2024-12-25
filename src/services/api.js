import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios/save`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 