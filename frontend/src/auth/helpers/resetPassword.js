import { clientAxios } from '../../config';

export const resetPassword = async (token, password) => {
  try {
    const { data } = await clientAxios.post(`/users/reset-password/${token}`, { password });
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}