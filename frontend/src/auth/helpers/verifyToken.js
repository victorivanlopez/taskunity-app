import { clientAxios } from '../../config';

export const verifyToken = async (token) => {
  try {
    const { data } = await clientAxios(`/users/reset-password/${token}`);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}