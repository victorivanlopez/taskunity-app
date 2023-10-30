import axios from 'axios';

export const verifyToken = async (token) => {
  try {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/users/reset-password/${token}`);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}