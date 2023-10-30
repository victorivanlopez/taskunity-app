import { clientAxios } from '../../config';

export const confirmUser = async (token) => {
  try {
    const { data } = await clientAxios(`/users/confirm/${token}`);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}