import { clientAxios } from '../../config';

export const getProjects = async (token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const { data } = await clientAxios('/projects', options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}