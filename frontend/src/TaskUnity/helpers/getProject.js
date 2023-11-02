import { clientAxios } from '../../config';

export const getProject = async (id, token) => {

  const options = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }

  try {
    const { data } = await clientAxios(`/projects/${id}`, options);
    return data;
  } catch (error) {
    return {
      message: error.response.data.message,
      error: true
    }
  }
}