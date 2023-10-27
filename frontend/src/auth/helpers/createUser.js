import axios from 'axios';

export const createUser = async (formData = {}) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/users`, formData);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}