import { clientAxios } from '../../config';

export const createUser = async (formData = {}) => {
  try {
    const { data } = await clientAxios.post('/users', formData);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}