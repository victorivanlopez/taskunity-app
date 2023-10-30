import { clientAxios } from '../../config';

export const sendEmailPasswordReset = async (email) => {
  try {
    const { data } = await clientAxios.post('/users/forgot-password', { email });
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}