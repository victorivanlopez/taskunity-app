import { clientAxios } from '../../config';

export const getProfileUser = async (token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const { data } = await clientAxios('/users/profile', options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}