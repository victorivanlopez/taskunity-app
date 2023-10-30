import { clientAxios } from '../../config';

export const getProfileUser = async (token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const { data } = await clientAxios('/users/profile', options);
    console.log(data)
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}