import axios from 'axios';

export const sendEmailPasswordReset = async (email) => {
  try {
    const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/users/forgot-password`, { email });
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}