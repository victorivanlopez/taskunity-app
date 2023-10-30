import axios from 'axios';

export const resetPassword = async (token, password) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/users/reset-password/${token}`, { password });
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}