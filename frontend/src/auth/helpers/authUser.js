import { clientAxios } from '../../config';

export const authUser = async (formData = {}) => {
  try {
    const { data } = await clientAxios.post('/users/login', formData);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}